import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate('/');
  }

  return (
    <div>
      <h1>Not found</h1>
      <button type='button' onClick={handleBackHome}>Go Home</button>
    </div>
  )
}

export default NotFound;