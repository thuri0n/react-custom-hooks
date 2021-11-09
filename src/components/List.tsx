import React, { useEffect, useState } from 'react'
import useScroll from '../hooks/useScroll'

type Todos = {
    userId: number
    id: number
    title: string
    completed: boolean
}

export const List: React.FC<{}> = (): JSX.Element => {
    const [todos, setTodos ] = useState<Todos[]>([])
    const [page, setPage] = useState<number>(1)
    const limit = 20
    const parentRef = React.useRef<HTMLDivElement>(null);
    const childRef = React.useRef<HTMLDivElement>(null);
    const intesected = useScroll(parentRef, childRef, () => fetchTodos(page, limit))


    function fetchTodos(page: number, limit: number) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then((json: Array<Todos>) => {
                setTodos((prev) => [...prev, ...json])
                setPage((prev) => prev + 1)
            })
    }

    return (
        <div ref={parentRef} style={{
            height: '80vh'
        }}>
            {todos.map((item) => {
                return (
                    <div key={item.id} style={{
                        padding: 30,
                        margin: 5,
                        border: '1px solid black'
                    }}>{item.title}</div>
                )
            })}
            <div ref={childRef} style={{
                height: 20
            }} />
        </div>
    )
}
