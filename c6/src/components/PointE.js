import React from "react";
import List from "./List";
import WithLoading from "./WithLoading";

class PointE extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            posts: []
        }
    }

    componentDidMount() {
        this.setState({ loading: true });

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    loading: false,
                    posts: res
                })
            }).catch(err => console.error(err));


            
    }

    render() {

        const ListWithLoading = WithLoading(List);

        return (
            <div id="point-e">
                <ListWithLoading
                    isLoading={this.state.loading}
                    posts={this.state.posts}
                />
            </div>
        )
    }
}

export default PointE;