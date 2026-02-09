'use client';
import React, { useRef, useState } from 'react';

interface TiltedCardProps {
    children: React.ReactNode;
    className?: string;
}

const TiltedCard = ({ children, className = '' }: TiltedCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState('');

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        // Tilt intensity
        const xOffset = -y * 10; // Inverted to push the hovered side back
        const yOffset = x * 10; // Inverted to push the hovered side back

        setTransform(`perspective(1000px) rotateX(${xOffset}deg) rotateY(${yOffset}deg) scale3d(1.02, 1.02, 1.02)`);
    };

    const handleMouseLeave = () => {
        setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    };

    return (
        <div
            ref={ref}
            className={`tilted-card-figure ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="tilted-card-inner transition-transform duration-100 ease-out will-change-transform"
                style={{ transform }}
            >
                {children}
            </div>
        </div>
    );
};

export default TiltedCard;
