import React from 'react';

import {BrowserRouter as Router, Route, Link, Switch, Redirect  } from 'react-router-dom';

// import required components
import AddBook from "./components/addbook"
import View from "./components/viewAllBooks"
import Contact from "./components/contact"

class App extends React.Component {
    render() {
        return (
          <Router>
            <React.Fragment>
              <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
                <div className="navbar-header">
                  <Link className="navbar-brand" to="/">Learning Portal</Link>
                </div>
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <Link className="nav-link" to="/viewAllBooks">View All Books</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/addbook">Add a Book</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </nav>
              <br/>
               <div>
               <Route exact path="/addbook" component={AddBook} />
               <Route path="/viewAllBooks" component={View} />    
               <Route path="/contact" component={Contact} />
               </div>

            </React.Fragment>
          </Router>   
        );
    }
}
export default App;