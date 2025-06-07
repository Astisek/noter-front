import { useFloating, offset, flip, shift, arrow, Placement } from '@floating-ui/react';
import { useState, useRef, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import * as motion from 'motion/react-client';

interface TooltipProps {
  content: string;
  placement?: Placement;
}

export const Tooltip = ({ children, content, placement = 'bottom' }: PropsWithChildren<TooltipProps>) => {
  const [open, setOpen] = useState(false);
  const arrowRef = useRef(null);

  const { refs, floatingStyles } = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    middleware: [offset(8), flip(), shift({ padding: 8 }), arrow({ element: arrowRef })],
  });

  return (
    <>
      <div
        ref={refs.setReference}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="inline-block"
      >
        {children}
      </div>

      {open &&
        createPortal(
          <motion.div
            ref={refs.setFloating}
            style={floatingStyles}
            className="z-50 px-3 py-2 text-sm font-medium text-gray-800 bg-text rounded-md shadow transition-all whitespace-pre"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {content}
          </motion.div>,
          document.body,
        )}
    </>
  );
};
