import { useState, useEffect } from "react"
import * as API from "./bs_utility"

export default function StateHandler(params) {
    let [isReady, setIsReady] = useState(false);
    let [data, setdata] = useState([])

    const getData = async () => {
        const res = await API.handleAllItems(`${params}`);
        setdata(res)
        setIsReady(true)
    }

    useEffect(()=> {
        if(!isReady) {
            getData();
        }
    })
    return {data, isReady}
}