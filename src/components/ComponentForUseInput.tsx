import React from 'react'
import useInput from '../hooks/useInput'

export const ComponentForUseInput: React.FC<{}> = (): JSX.Element => {
    const user = useInput('')
    const pass = useInput('')

    return (
        <div>
            <input type={'text'} {...user} />
            <input type={'text'} {...pass} />
        </div>
    )
}
