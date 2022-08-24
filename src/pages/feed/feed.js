



import { useState } from 'react';


import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../../components/posts/Posts';
import PostForm from '../../components/postForm/PostForm';
import { MainDiv } from './feedStyle';



// import { useState, useEffect } from 'react';



const Feed = (props) => {
  // const [counter, setCounter] = useState(0);

  // useEffect(() =>{
  //   alert ('Reload')//happen at the start whan a component rendered 
  // })
const [helpBtn, setHelpBtn] = useState(false);
const [open, setOpen] = useState(false);



  return (

    <div >
      <Navbar setfunc ={setHelpBtn}  theme={props.theme} setTheme={props.setTheme} />
      <MainDiv >
        <Sidebar theme={props.theme} setTheme={props.setTheme} />
        <Posts openContent ={open} setOpenContent={setOpen} theme={props.theme} setTheme={props.setTheme} />
      </MainDiv>
      <PostForm trigger={helpBtn} setTrigger={setHelpBtn} theme={props.theme} setTheme={props.setTheme} /> 
     
    </div>
  );
}

export default Feed;
