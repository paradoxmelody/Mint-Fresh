// src/lib/useDraggable.ts

import { useCallback, useEffect, useRef, useState } from 'react';

// Defines the initial position and the state update function
interface Position {
  x: number;
  y: number;
}

// Custom hook to make an element draggable
export const useDraggable = (initialPos: Position = { x: 50, y: 50 }) => {
  const [position, setPosition] = useState<Position>(initialPos);
  const elementRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartPos = useRef({ x: 0, y: 0 }); // Mouse position when drag starts

  // --- 1. Mouse Down (Start Dragging) ---
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    dragStartPos.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    // Prevent selection during drag
    e.preventDefault(); 
  }, [position.x, position.y]);

  // --- 2. Mouse Move (Update Position) ---
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current || !elementRef.current) return;

    // Calculate new position based on current mouse position and starting offset
    const newX = e.clientX - dragStartPos.current.x;
    const newY = e.clientY - dragStartPos.current.y;

    // Simple bounds check (prevents dragging far outside the screen)
    const container = elementRef.current.parentElement;
    if (container) {
      const maxX = container.clientWidth - elementRef.current.offsetWidth;
      const maxY = container.clientHeight - elementRef.current.offsetHeight;

      setPosition({
        x: Math.min(Math.max(0, newX), maxX),
        y: Math.min(Math.max(0, newY), maxY),
      });
    } else {
       setPosition({ x: newX, y: newY });
    }
  }, []);

  // --- 3. Mouse Up (Stop Dragging) ---
  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  // --- 4. Attach/Detach Event Listeners to Document ---
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return { elementRef, position, handleMouseDown };
};