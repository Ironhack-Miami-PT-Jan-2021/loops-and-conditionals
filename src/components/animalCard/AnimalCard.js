import React from "react";
import './AnimalCard.css';


class AnimalCard extends React.Component {

    
    
    
    render(){
        const {type, scariness, size, dangerous, hidden, index} = this.props;
        const classyClass = dangerous ? "red" : "green";
        return(
            <>
            {!hidden && 
                <li className={classyClass} onClick = {()=>{this.props.hideAnimal(index)}} >
                <h3>
                    Species: {type}
                </h3>
                <p>Scariness Level: {scariness}</p>
                <p>Size: {size}</p>
            </li>}
            </>
            )
    }



}

export default AnimalCard