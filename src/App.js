import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Overview from './components/Overview';
import Notification from './components/Notification';
import Refer from './components/Refer';
import MakePayment from './components/MakePayment';
import ManageTutor from './components/ManageTutor';
import ScrollReset from './components/ScrollReset';




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
        </Route>
        <Route path='login' element={<div>this is login page</div>} />
      </Routes>
    </Router>

  );
}

export default App;
