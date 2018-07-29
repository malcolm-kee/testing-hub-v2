import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import { FourOhFourPage } from './components/FourOhFourPage';
import { Landing } from './components/Landing';
import { configureHistory } from './config/configureHistory';
import { configureStore } from './config/configureStore';
import { Note } from './Note';

const history = configureHistory();
const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/Note" component={Note} />
            <Route path="/" component={Landing} exact={true} />
            <Route component={FourOhFourPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
