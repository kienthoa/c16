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

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Loading/>
      <Header/>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/lifecycle" render={(propsRoute) => { // Tham số chứa các props của thẻ route
            return <div>
              <h3>Component LifeCycle</h3>
              <LifeCycle {...propsRoute}/>
            </div>
        }}/>
        <Route exact path="/usestatedemo" component={UseStateHook}/>
        <Route exact path="/btchonxe" component={BaiTapChonXe}/>
        <Route exact path="/useeffecthome" component={UseEffectHome}/>
        <Route exact path="/reduxhookhome" component={ReduxHookHome}/>
        <Route exact path="/details/:id" component={Details}/>
        {/* Route mặc định để dưới cùng của ứng dụng */}
        <Route exact path="/" component={Home}/>
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
