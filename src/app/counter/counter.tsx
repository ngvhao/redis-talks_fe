'use client'

import React from 'react'
import { decrement, increment } from '../lib/features/counter/counter.slice'
import { useAppDispatch, useAppSelector } from '../lib/reduxHooks'

const Counter = () => {
  const counter = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch();
  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={() => dispatch(increment())}>Incre</button>
      <button onClick={() => dispatch(decrement())}>Decre</button>
    </div>
  )
}

export default Counter