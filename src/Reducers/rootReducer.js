const initstat = {
    post: [
        { id: '1', title: "this is first pokemon", body: "first pokemon" },
        { id: '2', title: "this is second pokemon", body: "first pokemon" },
        { id: '3', title: "this is third pokemon", body: "first pokemon" }
    ]

}

const rootReducer = (state = initstat, action) => {
    if (action.type === "DELETE_POST") {
        let newPosts = state.post.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            post: newPosts
        }
    }
    return state;
}

export default rootReducer