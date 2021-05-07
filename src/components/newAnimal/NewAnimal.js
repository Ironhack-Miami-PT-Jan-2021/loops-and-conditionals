import React from "react";
import './NewAnimal.css';


class NewAnimal extends React.Component {   
    
    
    state = {
        type: '',
        size: '',
        scariness: '',
        dangerous: false
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    handleCheck = (e) =>{
        this.setState({dangerous: e.target.checked}, ()=>{
            console.log(this.state)
        })
    }




render(){
    return(
        <form onSubmit = {(e)=>{this.props.createNew(this.state, e)}}> 
            <p>Type</p>
            <input type="text" name="type" onChange={this.handleChange} />
            <p>Size</p>
            <input type="text" name="size" onChange={this.handleChange} />
            <p>Scariness</p>
            <input type="text" name="scariness" onChange={this.handleChange} />
            <p>Dangerous?</p>
            <input type="checkbox" name="dangerous" onChange={this.handleCheck} />

            <br></br>
            <button>Submit</button>
        </form>
    )
}


}

export default NewAnimal; 