import React, {Fragment} from "react";
import Input from "./Input";

class Form extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            inputValue: "",
            quantity: 0
        }
    }

    HandleInputChange = (event) => {
        //console.dir(event.target);
        this.setState({
            inputValue: event.target.value
        });
    }

    Increment = () => {
        this.setState((prevState => {
            return { quantity: prevState.quantity + 1 }
        }))
    }

    Decrement = () => {
        this.setState((prevState => {
            return { quantity: prevState.quantity === 0 ? 0 : prevState.quantity - 1 }
        }))
    }

    render() {
        return (
            <Fragment>
                <form>
                    <Input onInputChange={this.HandleInputChange} />
                </form>
                <h2>{this.state.inputValue}</h2>

                <hr />

                <button onClick={this.Decrement}>-</button>
                <span> {this.state.quantity} </span>
                <button onClick={this.Increment}>+</button> 
            </Fragment>
        )
    }
}

export default Form;