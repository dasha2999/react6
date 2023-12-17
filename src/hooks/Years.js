// import { useState } from "react"
import { useCounter } from "./useCounter"

export const Years = () => {

    const {count, dec, inc} = useCounter(1990, 1)

    // const [years, setYears] = useState(0)

    // function inc() {
    //     setYears(years + 1)
    // }

    // function dec() {
    //     setYears(years - 1)
    // }

    return (
        <>
            <h1> Years count: {count} </h1>
            <button onClick={inc}> Увеличить </button>
            <button onClick={dec}> Уменьшить </button>
        </>
    )
}