/** @format */

import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counterSlice';
import { AppDispatch, RootState } from './redux/store';
import { fetchContent } from './redux/contentSlice';

function App() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchContent())
  }, [dispatch])

  const contents = useSelector((state: RootState) => state.content.contents)
  const isLoading = useSelector((state: RootState) => state.content.isLoading)
  const error = useSelector((state: RootState) => state.content.error)

  if (isLoading) {
    return 'loading...'
  }

  if (error) {
    return error
  }

  return (
    <div>
      {contents.map((content: any) => (
        <div key={content.id}>
          <img
            src={`${content.thumbnailUrl}`}
            alt={`${content.title}`}
          />
        </div>
      ))}
    </div>
  )
}

export default App;
