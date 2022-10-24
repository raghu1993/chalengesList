// state
export const state = () => ({
    appState: false,
    editChallenge: {}
})

// mutations 
export const mutations = {
    // app state to maintain authentication
    setAppState(state, data) {
        state.appState = data;
    },
    // store edit part of challenge 
    setEditChallenge(state, data) {
        state.editChallenge = data;
    },
}