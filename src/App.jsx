import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementAmount } from './redux/counterSlice'
import { useState } from 'react';


function App() {
  const [Amount, setAmount] = useState();
  const dispatch = useDispatch()
  const { count } = useSelector(state => state.counterReducer)


  const handleIncrement = () => {
    if (Amount) {
      dispatch(incrementAmount(Number(Amount)))
      
      
    } else {

      alert("enter increment amount")
      
    }
  }

  return (
    <>
      <h1 className='mb-10 bg-gradient-to-r font-bold font-serif from-blue-800 to-red-600 bg-clip-text uppercase text-transparent'>Counter APP</h1>
      <div className="w-max flex flex-col justify-around gap-10 items-center p-20 border-2 rounded-lg border-gray-400">
        <h1 className='text-4xl mb-6'>{count}</h1>
        <div className="buttons flex gap-3">
          <button onClick={() => dispatch(decrement())} className='bg-blue-700 focus:outline-none hover:bg-transparent hover:shadow-lg hover:shadow-blue-800 hover:border-blue-800 hover:text-blue-800'>DECREMENT</button>
          <button onClick={() => dispatch(reset())} className='bg-red-700 focus:outline-none hover:bg-transparent hover:border-red-800 hover:text-red-800 hover:shadow-lg hover:shadow-red-800'>RESET</button>
          <button onClick={() => dispatch(increment())} className='bg-green-700 focus:outline-none hover:bg-transparent hover:border-green-800 hover:text-green-800 hover:shadow-lg hover:shadow-green-800'>INCREMENT</button>
        </div>
        <div className='flex w-max justify-between gap-4'>
          <input onChange={(e)=>setAmount(e.target.value)} placeholder='Increment amount' className='text-sm placeholder:text-gray-300 w-full focus:outline-none bg-gray-600 rounded-full text-center p-1' type="text" />
          <button onClick={handleIncrement} className='w-full bg-violet-700 text-sm p-1 focus:outline-none hover:bg-transparent hover:border-violet-800 hover:text-violet-800 hover:shadow-lg hover:shadow-violet-800'>Increase By Amount</button>
        </div>
      </div>
    </>
  )
}

export default App