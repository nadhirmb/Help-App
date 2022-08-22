



import { useState } from 'react';
import {ThemeProvider} from "styled-components"; 


import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../../components/posts/Posts';
import PostForm from '../../components/postForm/PostForm';


const LightTheme = { 
  pageBackground  : 'rgba(157, 209, 48, .3)' ,
  titleColor : '#dc658b',
  tagLineColor : 'black'
}
const DarkTheme = {
  pageBackground  : '#282c36' ,
  titleColor : 'lightpink',
  tagLineColor : 'lavender'
}

const themes = { 
  light : LightTheme ,
  dark : DarkTheme ,
}
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
const [theme , setTheme] = useState("light");


  return (
    <ThemeProvider theme={themes[theme]}>

    <div >
      <Navbar setfunc ={setHelpBtn}  theme={theme} setTheme={setTheme} />
      <div style={mainStyle}>
        <Sidebar />
        <Posts openContent ={open} setOpenContent={setOpen} />
      </div>
      <PostForm trigger={helpBtn} setTrigger={setHelpBtn} /> 
     
    </div>
    </ThemeProvider>
  );
}

export default Feed;
