'use client';
import { TextareaHTMLAttributes, useCallback, useEffect, useRef } from 'react';

export const TextArea = ({
  onChange,
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const areaRef = useRef<HTMLTextAreaElement>(null);

  const handleResize = useCallback(() => {
    if (!areaRef.current) return;
    areaRef.current.style.height = `${areaRef.current.scrollHeight}px`;
  }, []);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleResize();
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <textarea
      onChange={handleChange}
      ref={areaRef}
      placeholder="Write some text..."
      className={`bg-transparent p-3 outline-none transition-shadow rounded text-text text-3xl w-full resize-none min-h-full ${className}`}
      {...props}
    />
  );
};
