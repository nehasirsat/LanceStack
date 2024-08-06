
import Login from './Pages/Login';
import { Route,Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import ClientPage from './Pages/Client/Client';
import RegisterFreelancer from './Pages/RegisterFreelancer';
import FreelancerProfile from './Pages/Client/FreelancerProfile';
import Projects from './Pages/Client/Projects';
import ClientProfile from './Pages/Client/ClientProfile';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/loggedin' element={<h1>hello</h1>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/clientpage' element={<ClientPage/>}/>
      <Route path='/registerfreelancer' element={<RegisterFreelancer/>}/>
      <Route path='/FreelancerProfile' element={<FreelancerProfile/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/ClientProfile' element={<ClientProfile/>}/>
    </Routes>
    </div>
  );
}

export default App;
