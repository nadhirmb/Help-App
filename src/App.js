import Feed from "./pages/feed/feed";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import profil from "./pages/profil/profil";
import { GlobalStyles } from "./globalStyle";

import { useDispatch } from "react-redux";
import {getPosts } from './actions/posts'
import SignInPage from "./pages/signin/SignIn.js";
import SignUpPage from "./pages/signup/SignUpPage.js";
import { useEffect } from "react";

// import { useState, useEffect } from 'react';


const App = () => {
  // const [counter, setCounter] = useState(0);

  // useEffect(() =>{
  //   alert ('Reload')//happen at the start whan a component rendered 
  // })

  const dispatch = useDispatch();

  useEffect( () => {
        dispatch(getPosts());
  }, [dispatch]);

  return (
    <Router>
      <GlobalStyles />
      <Switch> 
        <Route path="/" exact component={Feed}></Route>
        <Route path="/profil" exact component={profil}></Route>
        <Route path="/signin" exact component={SignInPage}></Route>
        <Route path="/signup" exact component={SignUpPage}></Route>
     </Switch>
    </Router>
    
  );
}

export default App;
