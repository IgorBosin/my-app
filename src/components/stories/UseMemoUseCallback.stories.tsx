import {useCallback, useMemo, useState} from "react";
import React from 'react'

export default {
    title: 'UseMemoUseCallback',
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['HTML', 'CSS', 'React'])

    const addBook = () => { // при перерисовке LikeUseCallback ссылка на ф-цию addBook создается заново и поэтому передается
        return setBooks([...books, 'JS' + new Date().getTime()]) // в компоненту Books, заново. Не смотря на то, что
    } // компонента Books обернута в React.memo, компонента перерисовывается, т.к. в неё приходят новые пропсы (addBook)

    const memoizedAddBookMemo = useMemo(() => addBook, [books])
    const memoizedAddBookCallback = useCallback(addBook, [books])

    const memoizedAddBookUseMemo = useMemo(() => () => setBooks([...books, 'JS' + new Date().getTime()])
        , [books]) // useMemo для всех объектов

    const memoizedAddBookUseCallback = useCallback(() => setBooks([...books, 'JS' + new Date().getTime()])
        , [books]) // useCallback для функций

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter} <br/>
            <Books addBook={memoizedAddBookMemo}/>
        </div>
    )
}
const BooksSecret = (props: { addBook: () => void }) => {
    console.log('render Books')
    return (
        <button onClick={() => props.addBook()}>books add</button>

    )
}
const Books = React.memo(BooksSecret)