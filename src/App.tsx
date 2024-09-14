import './App.css';
import { Suspense } from 'react';
import RouteProvider from './layout/RouteProvider';

function App() {
  return (
    <Suspense fallback={<> ...Loading</>}>
      <RouteProvider />
    </Suspense>
  );
}

export default App;
