import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './client/components/Navbar';
import Userid from './client/components/User';
import {io} from 'socket.io-client';
import './App.css';

const socket = io(process.env.REACT_APP_SOCKET_URL);

function Homepage(){
  return(
    <>
    <Navbar />
    
  
    <Userid/>

    </>
  );
}

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
    </Routes>
    </BrowserRouter>
    
    
  );
}


export default App;
