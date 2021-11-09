import React, { useRef } from 'react'
import useHover from '../hooks/useHover'

export const ComponentForUseHover: React.FC<{}> = (): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null)
    const isHovering = useHover(ref)

    return (
        <div style={{
            background: isHovering ? 'red' : 'blue',
            width: 100,
            height: 100
        }}
        ref={ref}>

        </div>
    )
}
