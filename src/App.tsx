import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { Home } from './pages/Home';
import { MapPage } from './pages/MapPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<Home />} />
          <Route path="map" element={<MapPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
