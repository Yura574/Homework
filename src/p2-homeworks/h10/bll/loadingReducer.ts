










type InitialStateType = {
    loading: boolean
}
const initState: InitialStateType = {
    loading: false
};

export const loadingReducer = (state = initState, action: LoadingACType): InitialStateType => { // fix any
    debugger
    switch (action.type) {

        case "LOADING": {
            return {
                ...state, loading: action.load
            };
        }
        default:
            return state;
    }
};

type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (load: boolean) => {
    return {
        type: "LOADING",
        load
    }
}; // fix any