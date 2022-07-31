import React, { Component } from 'react';
import Post from './Post';
import nadhir from './images/nadhir.jpg';
import profile1 from './images/profile1.jpg';
import profile2 from './images/profile2.jpg';
import profile3 from './images/profile3.jpg';
import profile4 from './images/profile4.jpg';
import profile5 from './images/profile5.jpg';

const postLists ={
  paddingTop :'10px',
  width: '700px',
  display: 'flex',
  flexWarp: 'wrap',
  flexDirection : 'column',
  alignItems : 'center',
  justifyContent: 'center',
}
class Posts extends Component {

  postsList = [{
    username: "nadhir mazari boufares",
    imgsrc: nadhir,
    profilePicture: profile1
  },{
    username: "Talout Chattah",
    imgsrc: nadhir,
    profilePicture: profile2
  },{
    username: "Boulahia Bahaa",
    imgsrc: nadhir,
    profilePicture: profile3
  },{
    username: "Belabessi Adam",
    imgsrc: nadhir,
    profilePicture: profile4
  },{
    username: "Alaoua Youcef",
    imgsrc: nadhir,
    profilePicture: profile5
  }]
  render() {
    return (
      <div style ={postLists}>
        {this.postsList.map((post)=>(
          <Post imgSrc={post["imgsrc"]} username={post["username"]} profilePicture = {post["profilePicture"]}/>
        ))}
      
      </div>
    )
  }
}


export default Posts;

