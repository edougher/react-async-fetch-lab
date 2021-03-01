// create your App component here
import React, {Component} from 'react'

class App extends Component{
    constructor(){
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(({people}) =>{
            console.log(people)
            this.setState({data: people})
        })
    }

    render(){
        return(<div>
        {this.state.data.map((person, id) => <h1 key={id}>{person.name}</h1>)}
        </div>)
    }
}
export default App;