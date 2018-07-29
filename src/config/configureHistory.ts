import createBrowserHistory from 'history/createBrowserHistory';
import { historyListener } from '../services/route';

export const configureHistory = () => {
  const history = createBrowserHistory();

  history.listen(historyListener);

  return history;
};
