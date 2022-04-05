import { useRef, useEffect, useState, MutableRefObject } from 'react';

const useElementOnScreen = (
  options?: IntersectionObserverInit
): [MutableRefObject<any>, boolean] => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callback = (entries: IntersectionObserverEntry[]): void => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

export { useElementOnScreen };
