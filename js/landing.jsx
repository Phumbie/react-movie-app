import React from 'react'
import { Link } from 'react-router-dom'

const landing = () => (
  <div className="landing">
    <h1>S Video</h1>
    <input type="text" placeholder="Search" />
    <Link to="/search"> or Browse All</Link>
  </div>
)
export default landing
