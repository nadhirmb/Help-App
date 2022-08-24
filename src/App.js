import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useState} from 'react';
import { ThemeProvider } from 'styled-components';

//Styling App
import { GlobalStyles } from "./globalStyle";
import { themes } from './theme';

//Pages
import Feed from "./pages/feed/feed";
import Profil from "./pages/profil/profil";
import SignInPage from "./pages/signin/SignIn.js";
import SignUpPage from "./pages/signup/SignUpPage.js";



const App = () => {
  const [theme , setTheme] = useState("light");
  // const [counter, setCounter] = useState(0);

  // useEffect(() =>{
  //   alert ('Reload')//happen at the start whan a component rendered 
  // })

  return (
    <ThemeProvider theme={themes[theme]}>
    <Router>
      <GlobalStyles />
      <Routes >
        <Route path="/"  element={<Feed  theme={theme} setTheme={setTheme} />}></Route>
        <Route path="/profil"  element={<Profil theme={theme} setTheme={setTheme} />}></Route>
        <Route path="/signin" exact element={<SignInPage theme={theme} />}></Route>
        <Route path="/signup" exact element={<SignUpPage theme={theme} />}></Route>
      </Routes>
    </Router>
    </ThemeProvider>
    
  );
}

export default App;
