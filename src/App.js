import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PulseLoader from "react-spinners/PulseLoader";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
const Home = React.lazy(() => import('./pages/home/Home'));
const Products = React.lazy(() => import('./pages/products/Products'));
const Services = React.lazy(() => import('./pages/services/Services'));
const SignUp = React.lazy(() => import('./pages/signup/SignUp'));

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Suspense fallback={<div className="lazyLoader"><PulseLoader color="#276AFB" size={20} /></div>}>
          <Route path="/" exact render={() => <Home/>} />
          <Route path="/services" render={() => <Services/>} />
          <Route path="/products" render={() => <Products/>} />
          <Route path="/sign-up" render={() => <SignUp/>} />
        </Suspense>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
