import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Body from './Components/Body/Body.jsx';
import Header from './Components/Header/Header';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import Nav from './Components/Header/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './reducers/features/user/userReducer';
import { Layout } from './Components/Layout';

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
    console.log('Use Effect');
    console.log('token', localStorage.getItem('token'));
  }, []);
  return (
    <BrowserRouter>
      <Layout>
        {!isAuth && (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
