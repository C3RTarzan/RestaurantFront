import './assets/scss/_global.scss';

/* React */
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

/*Pages*/
import Home from './pages/Home';

/*Context*/
import { UserProvider } from './context/UserContext';
import RestaurantLogin from './pages/RestaurantLogin';


function App() {

  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path='/Restaurante' element={<RestaurantLogin />} />
        </Routes>   
      </UserProvider>   
    </Router>
  );
}

export default App;
