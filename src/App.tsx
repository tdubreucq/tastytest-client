import React from 'react';
import './App.css';
import HorizontalMenu from "./components/Menu";
import {Switch, Route, BrowserRouter} from "react-router-dom";
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
      <BrowserRouter>
        <HorizontalMenu/>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <CreateForm />
            </Route>
            <Route exact path="/:item_id/edit"  component={UpdateForm}/>
            <Route exact path="/options/item/:id" component={OptionsList}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
