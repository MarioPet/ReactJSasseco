import React from "react";

function WithLoading(Component) {
    return function WithLoadingComponent({isLoading, ...props}) {
        if(!isLoading) return <Component {...props} />;
        return <h2>Hold on, fetching some data for you.</h2>;
    }
}

export default WithLoading;