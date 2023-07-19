
import './App.css';
import Header from './component/layout/Header/Header.js'
import Footer from './component/layout/Footer/Footer.js'
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './component/Home/Home.js'
import ProductDetails from './component/Product/ProductDetails';
import Products from './component/Product/Products';
import Search from './component/Product/Search';
import LoginSignUp from './component/User/LoginSignUp';
import { useEffect } from 'react';
import store from './store';
import { loadUser } from './actions/userAction';
import UserOptions from './component/layout/Header/UserOptions.js';
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile";
import ProtectedRoute from './component/Route/ProtectedRoute';
import UpdateProfile from './component/User/UpdateProfile.js'
function App() {

const{isAuthenticated,user}=useSelector(state=>state.user);


useEffect(()=>{
 store.dispatch(loadUser());
},[]);




  return (

    <Router>
         <Header/>
         {
          isAuthenticated&&<UserOptions user={user}/>
         }
          <Route exact path="/" component={Home}/>
          <Route exact path="/product/:id" component={ProductDetails}/>
          <Route path="/products/:keyword" component={Products}/>
          <Route exact path="/products" component={Products}/>  
          <Route exact path="/search" component={Search}/>
          <Route exact path="/login" component={LoginSignUp}/>
          <ProtectedRoute path="/account" component={Profile}/>
          {/* <Route exact path="/account" component={Profile}/> */}
          <ProtectedRoute path="/me/update" component={UpdateProfile}/>
        <Footer/>
    </Router>
  
  );
}

export default App;
