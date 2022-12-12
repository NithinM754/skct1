import React from "react";
import { renderIntoDocument } from "react-dom/test-utils";
const Mydata=(props)=>
{
    return(
        <div className="navbar_container">
         <h1>I'm {props.name}</h1>
         <h2>I'm from {props.place}</h2>
        </div>
    )
}

function User(){
    return(
        <>
     <Mydata name="Nithin" place="Chidambaram"/> 
     <Mydata name="Keegee" place="Tiruppur"/>
     <Mydata name="Kishore Kumar " place="SultanPettai"/>
        </>
        )
}

class Bike extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brand:"Royal Enfield",
            model:"RE-Classic",
            color:"black",
            year:2022
        };
    }
    changeColor =()=>{
        this.setState({model:"T-Bird", color:"red"})
    }
    render(){
        return(
            <div>
                <h1>My {this.state.brand} </h1>
                <p>
                    It is a {this.state.color} &nbsp;{this.state.model}
                    &nbsp; from {this.state.year}.
                </p>
                <button type='button' onClick={this.changeColor}>change Color

                </button>
            </div>
        );
    }
    
}
export default Bike;