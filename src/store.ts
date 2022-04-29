import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'


const saveToLocalStorage = (state: any) => {
    try {
        const preservedState = JSON.stringify(state);
        localStorage.setItem('reduxStore', preservedState)
    } catch (err) {
        console.error(err)
    }
}

const loadFromLocalStorage = () => {
    try {
        const preservedState = localStorage.getItem('reduxStore');
        return preservedState === null ? rootReducer : JSON.parse(preservedState).root
    } catch (err) {
        console.error(err)
        return rootReducer
    }
}
const preservedState = loadFromLocalStorage()
const store = configureStore({
    reducer: {
        root :preservedState,
    }
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store