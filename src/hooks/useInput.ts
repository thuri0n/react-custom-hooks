import { ChangeEvent, useState } from 'react'

export default function useInput(initValue: string) {
    const [value, setValue] = useState<string>(initValue)

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value)
    }

    return {
        value, onChange
    }
}
