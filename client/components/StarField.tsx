import { useEffect, useRef, useState } from "react";

interface Star {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  size: number;
  opacity: number;
}

interface Mouse {
  x: number;
  y: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef<Mouse>({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Create stars
  const createStars = (width: number, height: number) => {
    const stars: Star[] = [];
    const starCount = Math.floor((width * height) / 12000); // Reduced density for cleaner look

    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      stars.push({
        x,
        y,
        originalX: x,
        originalY: y,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.4,
      });
    }
    starsRef.current = stars;
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const mouse = mouseRef.current;

    starsRef.current.forEach((star) => {
      // Calculate distance from mouse to original position
      const dx = mouse.x - star.originalX;
      const dy = mouse.y - star.originalY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 150;

      // Move star based on mouse proximity
      if (distance < maxDistance) {
        const factor = 1 - distance / maxDistance;
        const moveDistance = factor * 40; // How far stars move away from cursor

        // Calculate direction away from mouse
        const angle = Math.atan2(
          star.originalY - mouse.y,
          star.originalX - mouse.x,
        );
        star.x = star.originalX + Math.cos(angle) * moveDistance;
        star.y = star.originalY + Math.sin(angle) * moveDistance;
      } else {
        // Gradually return to original position
        star.x += (star.originalX - star.x) * 0.05;
        star.y += (star.originalY - star.y) * 0.05;
      }

      // Draw simple white star
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  // Mouse move handler
  const handleMouseMove = (event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  // Touch handler for mobile
  const handleTouchMove = (event: TouchEvent) => {
    event.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas || !event.touches[0]) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.touches[0].clientX - rect.left,
      y: event.touches[0].clientY - rect.top,
    };
  };

  // Resize handler
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    canvas.width = newWidth;
    canvas.height = newHeight;

    setDimensions({ width: newWidth, height: newHeight });
    createStars(newWidth, newHeight);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 1,
      }}
    />
  );
}
