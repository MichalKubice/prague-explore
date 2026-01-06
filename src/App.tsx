import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { Home } from './pages/Home';
import { MapPage } from './pages/MapPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<Home />} />
          <Route path="map" element={<MapPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
