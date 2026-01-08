import { useEffect, useRef } from "react";

const CursorFollower = () => {
    const cursorRef = useRef(null);

    // Use refs for values to avoid re-renders during animation loop
    const mousePos = useRef({ x: -100, y: -100 });
    const dotPos = useRef({ x: -100, y: -100 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Animation loop for smooth movement
        let animationFrameId;

        const animate = () => {
            // "Lazy" factor: Lower number = slower/lazier follow
            const ease = 0.2;

            // Linear Interpolation (LERP) formula
            dotPos.current.x += (mousePos.current.x - dotPos.current.x) * ease;
            dotPos.current.y += (mousePos.current.y - dotPos.current.y) * ease;

            if (cursorRef.current) {
                // Using translate3d for performant GPU movement
                cursorRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-3 h-3 bg-brand-600 rounded-full pointer-events-none z-[999999]"
            style={{
                top: 0,
                left: 0,
                // Initial position off-screen ensures no flash before first move
                transform: "translate3d(-100px, -100px, 0)"
            }}
        />
    );
};

export default CursorFollower;
