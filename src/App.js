
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import {FaCalendarAlt, FaDoorOpen, FaUsers} from "react-icons/fa";
//import LeftMenuBar from '../src/components/customComponents/LeftMenuBar';

import Bookables from "./components/pages/bookables/Bookables";
import Bookings from "./components/pages/bookings/Bookings";
import Users from "./components/pages/users/Users";
// import UserPicker from "./Users/UserPicker";

export default function App () {
  return (
    <>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/bookings" className="btn btn-header">
                  <FaCalendarAlt/>
                  <span>Bookings</span>
                </Link>
              </li>
              <li>
                <Link to="/bookables" className="btn btn-header">
                  <FaDoorOpen/>
                  <span>Bookables</span>
                </Link>
              </li>
              <li>
                <Link to="/users" className="btn btn-header">
                  <FaUsers/>
                  <span>Users</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* <UserPicker/> */}
        </header>

        <Routes>
          <Route index path="/bookings" element={<Bookings/>}/>
          <Route path="/bookables" element={<Bookables/>}/>
          <Route path="/users" element={<Users/>}/>
        </Routes>
      </div>
    </>
  );
}
