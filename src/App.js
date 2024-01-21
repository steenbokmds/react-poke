import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import MainPage from './views/MainPage';
import DetailPage from './views/DetailPage';
import NoMatch from './views/NoMatch';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;