import React from 'react'
import './singlePost.css'

export default function singlePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
          <img src="https://images.ctfassets.net/9l3tjzgyn9gr/photo-112402/cf25fec1eea7ab0665f586b3481e436c/112402-rabbit-lucky-animals-510x600.jpg" alt="animal"
           className="singlePostImg" />
           <h1 className="singlePostTitle">
             imus dolor veniam alias nisi ut.
             <div className="singlePostEdit">
             <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
             <i className="singlePostIcon fa-solid fa-trash"></i>
             </div>
           </h1>
           <div className="singlePostInfo">
            <span className='singlePostAuthor' >Author: <b>Safak</b> </span>
            <span className='singlePostDate'>1 hour ago </span>
           </div>
           <p className='singlePostDesc' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente vel eum beatae ex ipsum alias! Enim quasi, nulla dignissimos aperiam recusandae totam sequi minima similique quos eveniet aliquid placeat neque? Distinctio quas eos cumque corporis iure porro cupiditate et, voluptates blanditiis eius tenetur doloremque. Dolores harum molestias temporibus tenetur rem deleniti beatae vero. Possimus neque officiis ad architecto totam quis quos, inventore, esse quasi placeat optio eum amet aliquam expedita sequi voluptatum consectetur exercitationem eos cupiditate repudiandae harum. Vel hic amet, unde quaerat quam eos vitae pariatur, recusandae cum eum ex impedit? Accusantium aliquid error totam asperiores necessitatibus dolorem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente vel eum beatae ex ipsum alias! Enim quasi, nulla dignissimos aperiam recusandae totam sequi minima similique quos eveniet aliquid placeat neque? Distinctio quas eos cumque corporis iure porro cupiditate et, voluptates blanditiis eius tenetur doloremque. Dolores harum molestias temporibus tenetur rem deleniti beatae vero. Possimus neque officiis ad architecto totam quis quos, inventore, esse quasi placeat optio eum amet aliquam expedita sequi voluptatum consectetur exercitationem eos cupiditate repudiandae harum. Vel hic amet, unde quaerat quam eos vitae pariatur, recusandae cum eum ex impedit? Accusantium aliquid error totam asperiores necessitatibus dolorem!
           </p>
        </div>
        </div>
  )
}
