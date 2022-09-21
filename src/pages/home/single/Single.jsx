import React from 'react'
// import Post from '../../../components/post/Post'
import SideBar from '../../../components/sideBar/SideBar'
import './single.css'
import SinglePost from '../../../components/singlePost/singlePost' 

export default function Single() {
  return (
    <div className='single' >
        <SinglePost />
        <SideBar />
        </div>
  )
}
