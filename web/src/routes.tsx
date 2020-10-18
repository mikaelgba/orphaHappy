import { BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import Landing from './pages/landing';
import OrphanagesMap from './pages/orphanages_map';

function Routes(){
    return(
        <BrowserRouter>
            <Switch> "Switch faz que só uma rota apareça na tela por vez"
                <Route path="/" exact component={Landing}/>
                <Route path="/app" component={OrphanagesMap}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;