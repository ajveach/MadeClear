import React from 'react'
import './HomeView.scss'
import { Link } from 'react-router'

export const HomeView = () => (
  <div className='homeView'>
    <div className='content'>
      <h1 className='page-title'>MPN Generator</h1>
      <div className='button-controls'>
        <Link to='/new' className='btn btn-newProduct btn-lg btn-info'>Create a New Privacy Policy</Link>
      </div>
      <Link to='/policy/ACME/Dinomight' className='mutedLink'>See an example policy</Link>
    </div>
  </div>
)

export default HomeView
