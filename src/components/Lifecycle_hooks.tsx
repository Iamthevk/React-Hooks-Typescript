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
            // console.log(res)
            setIssues(res.data)
        })
    },[])
    return(
        <>
        <h1>ContentPI Issues</h1>
        {issues.map((issue: Issues)=>(
            <p key={issue.title}>
               <strong>#{issue.number}</strong> {' '}
        <a href=
          {`https://github.com/ContentPI/ContentPI/issues/${issue.number}`} 
            target="_blank" rel="noreferrer">{issue.title}</a> {' '}
        {issue.state}  
            </p>
        ))}
        </>
    )
}

export default Issues;