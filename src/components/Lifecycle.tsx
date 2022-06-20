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
        console.log(response)
        // this.setState ({
        //     issues:response.data
        // })
    })
   }
   render(){
   return(
    <p>Hello</p>
   ) 
   }
}
export default Issues

