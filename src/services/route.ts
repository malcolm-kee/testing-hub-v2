import { History } from 'history';

const HISTORY_MAX_SIZE = 20;

const appNavHistory: string[] = [];

const pushToAppHistory = (path: string) => {
  if (appNavHistory.length >= HISTORY_MAX_SIZE) {
    appNavHistory.shift();
  }

  appNavHistory.push(path);
};

export const historyListener: History.LocationListener = location => {
  pushToAppHistory(location.pathname);
};

export const canGoBack = () => appNavHistory.length > 0;
