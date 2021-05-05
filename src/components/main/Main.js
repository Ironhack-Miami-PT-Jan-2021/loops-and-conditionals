import React from "react";
import './Main.css';
import AnimalCard from '../animalCard/AnimalCard'


class Main extends React.Component {

    state = {
        list: [
            {type: 'dog', scariness: 'low', dangerous: false, size: 'not that big', hidden: false},
            {type: 'hippo', scariness: 'high', dangerous: true, size: 'really big', hidden: false},
            {type: 'cat', scariness: 'low', dangerous: false, size: 'small', hidden: false},
            {type: 'snake', scariness: 'high', dangerous: true, size: 'usually not that big', hidden: false},
            {type: 'alligator', scariness: 'pretty high', dangerous: true, size: 'pretty big', hidden: false},
            {type: 'bunny', scariness: 'low', dangerous: false, size: 'smol', hidden: false},
            {type: 'baboon', scariness: 'medium', dangerous: true, size: 'medium', hidden: false},
            {type: 'mosquito', scariness: 'low', dangerous: true, size: 'small', hidden: true},
            {type: 'scorpion', scariness: 'super high', dangerous: true, size: 'small', hidden: false},
        ]
    }


    hideAnimal = (whichAnimalIndex) =>{
        const newList = [...this.state.list];
        newList[whichAnimalIndex].hidden = true;
        this.setState({list: newList})
    }


    showAnimals = () =>{
        return this.state.list.map((eachAnimal, index)=>{
            return(
               <AnimalCard 
               hideAnimal = {this.hideAnimal} 
               index = {index} 
               {...eachAnimal}
               key={eachAnimal.type}/>
            )
        })
    }



     render(){
        return(
            <div className="list-container">
                <ul className="animal-list">
                    {this.showAnimals()}
                </ul>
            </div>
        )
    }

}

export default Main;