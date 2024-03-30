import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot, useRecoilState } from 'recoil';
import './App.scss';
import Header from './components/Header';
import Doctors from './pages/Doctors';
import HealthCoach from './pages/HealthCoachPage';
import HomePage from './pages/Homepage';
import NutritionPage from './pages/Nutritionpage';
import Register from './pages/Register';
import Login from './pages/login';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logined from './components/Protectedroutes/Login';
import Logedout from './components/Protectedroutes/Logout';
import ErrorPage from './pages/error404';
import Athelets from './pages/atheletes';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/'>
              <Route index element={<HomePage />} />
              <Route path='/NutritionPage' element={
                <Logedout>
                  <NutritionPage />
                </Logedout>
              } />
              <Route path='/Athelets' element={
                <Logedout>
                  <Athelets />
                </Logedout>
              } />
              <Route path='/HealthCoach' element={
                <Logedout>
                  <HealthCoach />
                </Logedout>
              } />
              <Route path='/Doctors' element={
                <Logedout>
                  <Doctors />
                </Logedout>
              } />
            <Route path='/ErrorPage' element={
                <ErrorPage />
              } />
            </Route>
            <Route path='/Login' element={
              <Logined>
                <Login />
              </Logined>
            } />
            <Route path='/Register' element={
              <Logined>
                <Register />
              </Logined>
              } />
              <Route path='/ErrorPage'element={<ErrorPage/>}/>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
      <ToastContainer autoClose={2000} hideProgressBar={false} theme="light" />
    </div>
  );
}

export default App;
