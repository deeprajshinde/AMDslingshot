import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import DailyDashboard from './pages/DailyDashboard';
import FoodDiscovery from './pages/FoodDiscovery';
import MetabolicAudit from './pages/MetabolicAudit';
import AlphaIntelligence from './pages/AlphaIntelligence';
import HealthProfile from './pages/HealthProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<DailyDashboard />} />
          <Route path="explore" element={<FoodDiscovery />} />
          <Route path="audit" element={<MetabolicAudit />} />
          <Route path="intelligence" element={<AlphaIntelligence />} />
          <Route path="profile" element={<HealthProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
