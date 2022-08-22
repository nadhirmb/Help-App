import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



//Styling App
import { GlobalStyles } from "./globalStyle";


//Pages
import Feed from "./pages/feed/feed";
import Profil from "./pages/profil/profil";
import SignInPage from "./pages/signin/SignIn.js";
import SignUpPage from "./pages/signup/SignUpPage.js";



const App = () => {
  // const [counter, setCounter] = useState(0);

  // useEffect(() =>{
  //   alert ('Reload')//happen at the start whan a component rendered 
  // })

  return (
    <Router>
      <GlobalStyles />
      <Routes >
        <Route path="/"  element={<Feed />}></Route>
        <Route path="/profil"  element={<Profil />}></Route>
        <Route path="/signin" exact element={<SignInPage/>}></Route>
        <Route path="/signup" exact element={<SignUpPage/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
