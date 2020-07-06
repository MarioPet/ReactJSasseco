export const SetAge = () => {
    return {
        type: "SET_AGE"
    }
}

export const SetAddress = (address) => {
    return {
        type: "SET_ADDRESS",
        payload: address
    }
}