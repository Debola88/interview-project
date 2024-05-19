import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Overview from './components/Overview';
import Notification from './components/Notification';
import Refer from './components/Refer';
import MakePayment from './components/MakePayment';
import ManageTutor from './components/ManageTutor';
import ScrollReset from './components/ScrollReset';
import ProgressTracker from './components/ProgressTracker';
import MyClasses from './components/MyClasses';
import UpcomingClasses from './components/UpcomingClasses';
import Reschedule from './components/Reschedule';




function App() {
  return (
    <Router>
      <ScrollReset />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path='notification' element={<Notification />} />
          <Route path='refer' element={<Refer />} />
          <Route path='makepayment' element={<MakePayment />} />
          <Route path='managetutor' element={<ManageTutor />} />
          <Route path='progresstracker' element={<ProgressTracker />} />
          <Route path='myclasses' element={<MyClasses />} />
          <Route path='upcomingclasses' element={<UpcomingClasses />} />
          <Route path='reschedule' element={<Reschedule />} />
        </Route>
        <Route path='login' element={<div>this is login page</div>} />
      </Routes>
    </Router>

  );
}

export default App;
