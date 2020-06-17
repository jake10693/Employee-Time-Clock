import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../../pages/Homepage'
import Kiosk from '../../pages/Kiosk'
import LoginPage from '../../pages/Login';
import RegisterPage from '../../pages/Register';
import AdminDashboard from '../../pages/AdminDashboard';
import TimeClock from '../../pages/TimeClock';
import { AuthContext } from '../../context/Auth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Numpad from '../../components/NumPad';

function App() {
    
    const [authContext, setAuthContext] = useState()
   
    return(
        <AuthContext.Provider value={{authContext, setAuthContext}}>
            <ToastContainer 
            position="top-center" 
            autoClose={1500} 
            hideProgressBar 
            style={{textAlign: "center"}}
            />
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/kiosk" component={Kiosk} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/dashboard" component={AdminDashboard} />
                <Route path="/timeclock" component={TimeClock} />
                <Route path="/numpad" component={Numpad} />
            </Router>
        </AuthContext.Provider>
    )
}

export default App;