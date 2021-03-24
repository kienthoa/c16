import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './Components/Header/Header';
import Loading from './Components/Loading/Loading';
import LifeCycle from './pages/LifeCycle/LifeCycle';
import UseStateHook from './pages/Hooks/UseStateHook';
import BaiTapChonXe from './pages/Hooks/BaiTapChonXe';
import UseEffectHome from './pages/Hooks/UseEffectHome';
import ReduxHookHome from './pages/Hooks/ReduxHookHome';
import Details from './pages/Details/Details';
import UseCallBackHook from './pages/Hooks/UseCallBackHook';
import HookUseMemo from './pages/Hooks/HookUseMemo';
import UseRef from './pages/Hooks/UseRef';
import ParentComponent from './pages/HOC/ParentComponent';
import { HomeTemplate } from './templates/HomeTemplate';
import { AdminTemplate } from './templates/AdminTemplate';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Loading/>
      {/* <Header/> */}
      <Switch>
        {/* <Route exact path="/home" component={Home} /> */}
        <HomeTemplate exact path='/home' Component={Home}/>
        <HomeTemplate exact path="/contact" Component={Contact}/>

        <AdminTemplate exact path="/login" Component={Login}/>

        <HomeTemplate exact path="/login" Component={Login}/>
        <HomeTemplate exact path="/register" Component={Register}/>
        <HomeTemplate exact path="/lifecycle" render={(propsRoute) => { // Tham số chứa các props của thẻ route
            return <div>
              <h3>Component LifeCycle</h3>
              <LifeCycle {...propsRoute}/>
            </div>
        }}/>
        <HomeTemplate exact path="/usestatedemo" Component={UseStateHook}/>
        <HomeTemplate exact path="/usecallback" Component={UseCallBackHook}/>
        <HomeTemplate exact path="/usememo" Component={HookUseMemo}/>
        <HomeTemplate exact path="/useref" Component={UseRef}/>
        <HomeTemplate exact path="/btchonxe" Component={BaiTapChonXe}/>
        <HomeTemplate exact path="/useeffecthome" Component={UseEffectHome}/>
        <HomeTemplate exact path="/reduxhookhome" Component={ReduxHookHome}/>
        <HomeTemplate exact path="/details/:id" Component={Details}/>
        <HomeTemplate exact path="/demoprops" Component={ParentComponent}/>
        {/* HomeTemplate mặc định để dưới cùng của ứng dụng */}
        <HomeTemplate exact path="/" Component={Home}/>
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
