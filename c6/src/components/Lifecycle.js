import React from "react";

class Lifecycle extends React.Component {

    constructor(props) {
        super(props);

        console.log("This comes from the constructor");
    }

    componentDidMount() {
        console.log("This comes from Component Did Mount.");
    }

    componentWillUnmount() {
        console.log("This comes from Component Will Unmount");
    }

    render() {
        return (
            <div id="lifecycle">This is the Lifecycle component</div>
        )
    }
}

export default Lifecycle;