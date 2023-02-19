import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../store';

const Counter = () => {
  const dispatch=useDispatch()
  const counter=useSelector(state=>state.counter.counter);
  const show=useSelector(state=>state.counter.showCounter)

  const decrementHandler=()=>{
    dispatch(counterActions.decrement());
  }
  const incrementHandler=()=>{
    dispatch(counterActions.increment());
  }
  const decreaseHandler=()=>{
    dispatch(counterActions.decrease(10));    //uniq identifir,payload
  }
  const increaseHandler=()=>{
    dispatch(counterActions.increase(10));
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>IncrementBy10</button>
        <button onClick={decreaseHandler}>DecrementBy10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
