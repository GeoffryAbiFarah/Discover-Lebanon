import './App.css';

import NavBar from './components/NavBar';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from "./components/Home";
import BookTour from "./components/BookTour";
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
        <Route path="/book-tour" component={BookTour}/>
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/" component={Home} />
      </Switch>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
