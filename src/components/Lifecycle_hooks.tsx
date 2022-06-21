import {FC, useState,useEffect } from "react";

import axios from "axios";
type Issues ={
    number: number
    title: string
    state: string
}
const Issues: FC =() => {
    const [issues, setIssues] = useState<Issues[]>([])
    useEffect(() => {
        axios.get("https://api.github.com/repos/ContentPI/ContentPI/issues")
        .then((res:any) => {
            console.log(res)
        })
    },[])
    return(
        <h1>Hello</h1>
    )
}

export default Issues;