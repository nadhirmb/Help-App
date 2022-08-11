



import { useState } from 'react';


import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../../components/posts/Posts';
import PostForm from '../../components/postForm/PostForm';
// import { useState, useEffect } from 'react';


const mainStyle ={
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  'align-items': 'flex-start',
  'justify-content': 'center',
  background: '#e5e5e5',
}

const Feed = () => {
  // const [counter, setCounter] = useState(0);

  // useEffect(() =>{
  //   alert ('Reload')//happen at the start whan a component rendered 
  // })
const [helpBtn, setHelpBtn] = useState(false);
const [open, setOpen] = useState(false);


  return (

    <div >
      <Navbar setfunc ={setHelpBtn}   />
      <div style={mainStyle}>
        <Sidebar />
        <Posts openContent ={open} setOpenContent={setOpen} />
      </div>
      <PostForm trigger={helpBtn} setTrigger={setHelpBtn} /> 
     
    </div>
  );
}

export default Feed;
