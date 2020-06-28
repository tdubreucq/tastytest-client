import React from 'react';
import './App.css';
import HorizontalMenu from "./components/Menu";
import {Switch, Route, BrowserRouter, HashRouter} from "react-router-dom";
import Home from "./components/Home";
import CreateForm from "./components/CreateForm";
import OptionsList from "./components/OptionsList";
import UpdateForm from "./components/UpdateForm";

export type MenuItem = {
  item_id: number
  title: string
  description: string
  vegetarian: boolean
  price: number
  type: string
}

function App() {

  return (
      <HashRouter basename="/">
        <HorizontalMenu/>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/create" component={CreateForm}/>
            <Route exact path="/:item_id/edit"  component={UpdateForm}/>
            <Route exact path="/options/item/:id" component={OptionsList}/>
          </Switch>
        </div>
      </HashRouter>
  );
}

export default App;
