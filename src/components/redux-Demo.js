const redux=require('redux');

const countReducer=(state ={counter:0}, action)=>{
    return {
        counter:state.counter+1
    }
}

const store=redux.createStore(countReducer);

const counterSubscriber=()=>{
    const latestState=store.getState();
    console.log(latestState)
}

store.subscribe(counterSubscriber)

store.dispatch({type:'increment'})
