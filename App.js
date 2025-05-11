import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { store } from './Redux/Store/Store';
import LandingPage from './landingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import {  Route, Routes } from 'react-router-dom';
import Sign_Up from './components/Sign_Up';
import Sign_In from './components/Sign_In';
import UserLoginDashboard from './pages/UserLoginDashboard';
import AdminDashboard from './pages/AdminDashboard';
import PendingCalls from './pages/PendingCalls';
import CompletedCalls from './pages/CompletedCalls';
import SearchedCalls from './pages/SearchedCalls';
import SupportTeam from './pages/SupportTeam';
import ClosedCalls from './pages/ClosedCalls';
import ManageSection from './pages/ManageSection';
import ManagePassword from './pages/ManagePassword';
import ActionResolverDashboard from './pages/ActionResolverDashboard';
import ResolverInbox from './pages/ResolverInbox';
import ResolverAllPendingCalls from './pages/ResolverAllPendingCalls';

function App() {
  return (
          <div className="App">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<Sign_Up />} />
              <Route path="/signin" element={<Sign_In />} />
              <Route path="/userlogin" element={<UserLoginDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/pendingcalls" element={<PendingCalls />} />
              <Route path="/completedcalls" element={<CompletedCalls />} />
              <Route path="/searchedcalls" element={<SearchedCalls />} />
              <Route path="/supportstaff" element={<SupportTeam />} />
              <Route path="/closedcalls" element={<ClosedCalls />} />
              <Route path="/managesection" element={<ManageSection />} />
              <Route path="/managepassword" element={<ManagePassword />} />
              <Route path="/actionresolver/:username" element={<ActionResolverDashboard />} />
              <Route path="/resolverpendingcalls" element={<ResolverAllPendingCalls />} />
              {/* <Route path="/resolverinbox" element={<ResolverInbox/>}/> */}
            </Routes>
          </div>
        
  );
}

export default App;
