'use client';

import { useState, useEffect } from 'react';

const getIsMobile = () =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isMobile;
}
