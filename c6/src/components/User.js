import React from "react";
import { connect } from "react-redux";
import { SetAge, SetAddress } from "../actions/UserActions";

class User extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            homeAddress: ""
        }
    }

    HandleHomeAddressChange = (e) => {
        this.setState({
            homeAddress: e.target.value
        })
    }

    render () {
        return (
            <div id="user">
                <h2>Your username is: {this.props.username}</h2>
                <h2>Your E-mail: {this.props.eMail}</h2>
                <h2>Technologies:</h2>
                <ul>
                    {this.props.tech.map((t, i) => {
                        return <li key={i}>{t}</li>
                    })}
                </ul>

                <button onClick={this.props.SetAge}>Set Age</button>
                <h2>Your age is: {this.props.age}</h2>

                <input onChange={this.HandleHomeAddressChange} type="text" placeholder="Enter Address" />
                <button onClick={() => this.props.SetAddress(this.state.homeAddress)}>Set Address</button>
                <h2>Your address is: {this.props.homeAddress}</h2>
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        username: state.UserReducer.username,
        eMail: state.UserReducer.eMail,
        tech: state.UserReducer.technologies,
        age: state.UserReducer.age,
        homeAddress: state.UserReducer.homeAddress
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        SetAge: () => { 
            dispatch(SetAge())
        },
        SetAddress: (address) => {
            dispatch(SetAddress(address))
        }
    }
}

export default User = connect(MapStateToProps, MapDispatchToProps)(User);