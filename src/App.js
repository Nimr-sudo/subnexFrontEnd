
import './App.css';
import Navbar from './common/Navbar';
import LandingPage from './pages/LandingPage';
import VendorsSignup from './pages/VendorsSignup';
import PlacedBid from './pages/PlacedBid';
import PostJob from './pages/PostJob';
import ShopDashboard from './pages/ShopDashboard';
import SlidingPage from './pages/SlidingPage';
import AppRoutes from './Routes/AppRoutes';
import { UserProvider } from './pages/UserContext';

function App() {
  return (
    <UserProvider>
    <div className="App">
      <AppRoutes/>
    </div>
    </UserProvider>
  );
}

export default App;
