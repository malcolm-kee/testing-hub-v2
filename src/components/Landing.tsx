import * as React from 'react';
import { AppHeader } from './AppHeader';

export const Landing: React.SFC = () => (
  <div>
    <AppHeader />
    <main>
      To get started, edit <code>src/App.tsx</code> and save to reload.
      <a href="https://www.facebook.com" target="_BLANK">
        Facebook
      </a>
    </main>
  </div>
);
