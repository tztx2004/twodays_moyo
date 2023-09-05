'use client'
import { use, useEffect, useState } from "react"

export default function TestPage(){
    const [data, setData] = useState<string|null>(null)

    useEffect(()=>{
        fetchData().then((fetchedData)=> setData(fetchedData))
    },[])
    return(
        <div></div>
    )
}

export async function fetchData() {
    const res = await fetch('http://api.smartchoice.or.kr/api/openAPI.xml?authkey=9acf252856')
    const data = await res.text()
    return data
}