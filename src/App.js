import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Posts from './components/posts/Posts';


// import { useState, useEffect } from 'react';


const mainStyle ={
  width: '100%',
  display: 'flex',
  'flex-direction': 'row',
  'align-items': 'flex-start',
  'justify-content': 'center',
  background: '#e5e5e5',
}
const App = () => {
  // const [counter, setCounter] = useState(0);

  // useEffect(() =>{
  //   alert ('Reload')//happen at the start whan a component rendered 
  // })

  return (

    <div className="App">

      <Navbar />
      <div style={mainStyle}>
        <Sidebar />
        <Posts />
      </div>
    </div>
  );
}

export default App;
