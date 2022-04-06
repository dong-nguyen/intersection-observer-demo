import { useElementOnScreen } from 'helpers/useElementOnScreen';
import React, { useState, useEffect } from 'react';

const LazyRender = ({
  children,
  height,
  threshold = 0.1,
}: {
  children: React.ReactChild;
  height: number | string;
  threshold?: number | undefined;
}) => {
  const [isRendered, setIsRendered] = useState(false);
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: threshold,
  });

  useEffect(() => {
    if (isVisible && !isRendered) {
      setIsRendered(true);
    }
  }, [isVisible, isRendered]);

  return (
    <div
      className="w-full"
      ref={containerRef}
      style={{ height: isRendered ? 'auto' : height }}
    >
      {isRendered ? (
        children
      ) : (
        <div className="animate-pulse flex space-x-4 h-full">
          <div className=" w-full bg-slate-400 rounded h-full"></div>
        </div>
      )}
    </div>
  );
};

export default LazyRender;
