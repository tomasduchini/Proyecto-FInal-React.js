import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './componentes/NavBar';
import Inicio from './componentes/Inicio';
import Productos from './componentes/Productos';
import ItemDetailContainer from './componentes/ItemDetailContainer'
 
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Inicio/>
        </Route>
        <Route exact path="/productos">
          <Productos/>
        </Route>
        <Route path="/item/:id">
          <ItemDetailContainer/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
