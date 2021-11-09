import { RefObject, useEffect, useRef } from 'react'

export default function useScroll(parentRef: RefObject<Element>, childRef: RefObject<Element>, cb: () => void) {
    const observer = useRef<Element>(null)

    useEffect(() => {
        if(!observer.current) return

        // @ts-ignore
        observer.current = new IntersectionObserver(([target]) => {
            if(target.isIntersecting) {
                console.log('IntersectionObserver')
                cb()
            }
        }, {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        })

        // @ts-ignore
        observer.current.observe(childRef.current)

        return () => {
            // @ts-ignore
            observer.current.unobserve(childRef.current)
        }
    }, [cb])
}
