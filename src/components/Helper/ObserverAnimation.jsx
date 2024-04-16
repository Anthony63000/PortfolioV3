import React, { useEffect, useRef, useState } from 'react'

const useObserverAnimation = () => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const observedRef = useRef(null);
  const observer = useRef(null)

  useEffect(() => {
    observer.current = new IntersectionObserver(
        (entries) => {
            const [entry] = entries;
            setIsIntersecting(entry.isIntersecting)
            if(entry.isIntersecting) {
                observer.current.disconnect();
            }
        },
        { threshold: 0.5 }
    );
    if(observedRef.current) {
        observer.current.observe(observedRef.current)
    }
    return () => {
        if(observer.current && observedRef.current) {
            observer.current.disconnect();
        }
    }
  }, [])
  return { observedRef, isIntersecting }
}

export default useObserverAnimation
