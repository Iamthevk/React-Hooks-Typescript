import { Component } from "react";
import axios from "axios";

type Issue = {
    number : number
    title: string
    state: string
}
type Props = {}
type State = {issues: Issue[]};

class Issues extends Component<Props,State>{
    constructor(props: Props){
        super(props)
        this.state = {
            issues:[]
        }
    }

   componentDidMount(){
    axios.get('https://api.github.com/repos/ContentPI/ContentPI/issues')
    .then((response:any) => {
        this.setState ({
            issues:response.data
        })
    })
   }
   render(){
    // console.log(this.state)
    const {issues} = this.state;
   return(
    <>
    <h1>ContentPI Issues</h1>

    {issues.map((issue: Issue) => (
        <p key={issue.title}>
            <strong>#{issue.number}</strong>
        <a href={`https://github.com/ContentPI/ContentPI/issues/${issue.number}`} target="_blank" rel="noreferrer">{issue.title}</a>{" "}
        {issue.state}
        </p>
    ))}
    </>
   ) 
   }
}
export default Issues

