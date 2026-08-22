import { useEffect, useRef } from "react";
import Matter from "matter-js";
import { physicsConfig } from "../../config/physicsConfig";
import { useIsTouchDevice } from "../../hooks/useMediaQuery";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const COLORS = ["#FF4B4B", "#FFC857", "#6EA8E5", "#8DDCC8", "#8B6FF7"];

/**
 * A handful of soft physics-driven circles that float, gently bounce off the
 * container walls, and react to the mouse. Deliberately subtle — low
 * gravity, high damping — so it never competes with the hero copy or feels
 * like a game.
 */
export default function PhysicsShapes({ className = "" }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const isTouch = useIsTouchDevice();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint, Body } = Matter;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const engine = Engine.create();
    engine.gravity.y = physicsConfig.gravityY;

    const render = Render.create({
      canvas,
      engine,
      options: {
        width,
        height,
        background: "transparent",
        wireframes: false,
        pixelRatio: window.devicePixelRatio || 1,
      },
    });

    const wallOptions = { isStatic: true, render: { visible: false } };
    const walls = [
      Bodies.rectangle(width / 2, -10, width, 20, wallOptions),
      Bodies.rectangle(width / 2, height + 10, width, 20, wallOptions),
      Bodies.rectangle(-10, height / 2, 20, height, wallOptions),
      Bodies.rectangle(width + 10, height / 2, 20, height, wallOptions),
    ];

    const count = isTouch ? physicsConfig.shapeCount.mobile : physicsConfig.shapeCount.desktop;
    const shapes = Array.from({ length: count }, (_, i) => {
      const [min, max] = physicsConfig.sizeRange;
      const radius = min + Math.random() * (max - min);
      const x = Math.random() * width;
      const y = Math.random() * height * 0.6;
      return Bodies.circle(x, y, radius, {
        restitution: physicsConfig.restitution,
        friction: physicsConfig.friction,
        frictionAir: physicsConfig.frictionAir,
        render: { fillStyle: `${COLORS[i % COLORS.length]}55`, strokeStyle: "transparent" },
      });
    });

    World.add(engine.world, [...walls, ...shapes]);

    let mouseConstraint;
    if (!isTouch) {
      const mouse = Mouse.create(render.canvas);
      mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: physicsConfig.mouseStiffness, render: { visible: false } },
      });
      World.add(engine.world, mouseConstraint);
      render.mouse = mouse;
    }

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    const handleResize = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      render.canvas.width = w;
      render.canvas.height = h;
      render.options.width = w;
      render.options.height = h;
      Matter.Body.setPosition(walls[1], { x: w / 2, y: h + 10 });
      Matter.Body.setPosition(walls[3], { x: w + 10, y: h / 2 });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, [isTouch, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div ref={containerRef} aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      <canvas ref={canvasRef} className="pointer-events-auto" />
    </div>
  );
}
