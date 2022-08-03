import Feed from "./pages/feed";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import profil from "./pages/profil";
import { GlobalStyles } from "./globalStyle";
// import { useState, useEffect } from 'react';


const App = () => {
  // const [counter, setCounter] = useState(0);

  // useEffect(() =>{
  //   alert ('Reload')//happen at the start whan a component rendered 
  // })

  return (
    <Router>
      <GlobalStyles />
      <Switch> 
        <Route path="/" exact component={Feed}></Route>
        <Route path="/profil" exact component={profil}></Route>
     </Switch>
    </Router>
    
  );
}

export default App;
