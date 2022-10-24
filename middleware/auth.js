// Auth will prevent routing if user not signed in & try to access authenticated pages
export default function ({ store, redirect, error }) {
    if (!store.state.appState) {
        return redirect('/');
    }
}