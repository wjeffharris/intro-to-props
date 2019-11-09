const { createStore } = Redux;
window.myStore = createStore(reducer);

const rootEl = document.getElementById('root')

myStore.subscribe(() => {
    ReactDOM.render(<App {...myStore.getState()} />, rootEl)
});

window.myStore.dispatch({type: 'INIT'})