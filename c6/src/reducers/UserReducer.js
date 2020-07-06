const initialState = {
        username: "mario5et",
        eMail: "mario5etkovski@gmail.com",
        technologies: ["ReactJS with Redux", "Angular JS", "Vue.js"],
        age: 0,
        homeAddress: ""
}

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_AGE" :
            return {
                ...state,
                age: 26
            }
        case "SET_ADDRESS" :
            return {
                ...state,
                homeAddress: action.payload
            }
        default: return state;
    }
}

export default UserReducer;