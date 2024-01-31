import {Route, Routes} from 'react-router-dom';
import React from 'react';
import Loading from './pages/Loading';

const HomePage = React.lazy(()=> import(('./pages/Homepage')))
function App() {
  return (
    <React.Suspense fallback={<Loading/>}>
    <div>
      <Routes>
        <Route path="/Homepage" element={<HomePage/>} />
      </Routes>
    </div>
    </React.Suspense>
  );
}

export default App;
