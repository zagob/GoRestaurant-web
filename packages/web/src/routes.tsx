import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import DashBoard from './pages/Dashboard';

const src: React.FC = () => {
  return (
      <BrowserRouter>
        <Route path="/" component={DashBoard} exact />
      </BrowserRouter>
  );
}

export default src;