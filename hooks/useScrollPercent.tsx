import {
  useState, useEffect, useRef, useCallback,
} from 'react';

export default function useScrollPercent<T extends HTMLElement>() {
  const domRef = useRef<T>(null);
  const [scrollPer, setScrollPer] = useState(0);

  const scrollHandler = useCallback((dom:HTMLElement) => {
    const { scrollTop, scrollHeight, clientHeight } = dom;
    const progressHeight = scrollHeight - clientHeight;
    const progressWidth = (scrollTop / progressHeight) * 100;
    setScrollPer(progressWidth);
  }, []);

  useEffect(() => {
    const ref = domRef.current?.parentElement;
    if (ref) {
      ref.addEventListener('scroll', () => { scrollHandler(ref); });
    } else {
      window.addEventListener('scroll', () => { scrollHandler(window.document.documentElement); });
    }
    return () => {
      if (ref) {
        ref.removeEventListener('scroll', () => { scrollHandler(ref); });
      } else {
        window.removeEventListener('scroll', () => { scrollHandler(window.document.documentElement); });
      }
    };
  }, []);
  return { scrollPer, domRef };
}
