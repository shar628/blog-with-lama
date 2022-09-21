import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className='post' >
        <img className='postImg' src="https://media.npr.org/assets/img/2022/06/22/gettyimages-1238924365_wide-b1f7435f5e1e69d0b3a32ad364de7204c89cc15e.jpg" alt="animal" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet,  elit.
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem velit eligendi, consequatur assumenda doloremque aliquam, voluptatum commodi molestiae tempore consequuntur ea ducimus! Mollitia eligendi accusamus aut tenetur officiis provident molestias.
        </p>
    </div>
  )
}
