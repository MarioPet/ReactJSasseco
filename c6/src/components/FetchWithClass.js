import React from "react";
import axios from "axios";

class FetchWithClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            loading: true,
            error: "",

            albums: []
        }
    }

    FetchUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => { return res.json() })
            .then(res => this.setState({
                users: res,
                loading: false
            }))
            .catch(err => this.setState({
                error: err,
                loading: false
            }))
    }

    FetchAlbums = () => {
        axios.get("https://jsonplaceholder.typicode.com/albums")
            .then(res => this.setState({ albums: res.data }))
            .catch(err => console.error(err));
    }

    componentDidMount() {
        this.FetchUsers();
        this.FetchAlbums();
    }

    render() {
        console.log("STATE => ", this.state);
        return (
            <div id="fetch-class">
                <h2>Users will list here...</h2>
                <hr />
                {
                    this.state.loading ? <h2>Loading...</h2> :
                        <ul>
                            {this.state.users.map(user => {
                                return (
                                    <li key={user.id}>
                                        <h2>{user.name}</h2>
                                        <h3>{user.email}</h3>
                                        <h3>{user.phone}</h3>
                                    </li>
                                )
                            })}
                        </ul>
                }
                <hr />
                <h2>Albums will list here...</h2>
                <hr />
                {this.state.albums.length < 0 ? <h2>Loading...</h2> :
                    <ul>
                        {this.state.albums.map(album => {
                            return (
                                <li key={album.id}>
                                    <h2>{album.title}</h2>
                                </li>
                            )
                        })}
                    </ul>
                }
            </div>
        )
    }
}

export default FetchWithClass;