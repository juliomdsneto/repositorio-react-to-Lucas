import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, PageTitle } from './components/common'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />  
          <Switch>
            <Route path="/contact">
              <PageTitle title="contact"/>
            </Route>
            <Route path="/blog">
              <PageTitle title="blog"/>
            </Route>
            <Route path="/shop">
              <PageTitle title="shop"/>
            </Route>
            <Route path="/portfolio">
              <PageTitle title="portfolio"/>
            </Route>
            <Route path="/services">
              <PageTitle title="services"/>
            </Route>
            <Route path="/">
              <PageTitle title="home"/>
            </Route>
          </Switch>
    </div>
  );
}

export default App;
