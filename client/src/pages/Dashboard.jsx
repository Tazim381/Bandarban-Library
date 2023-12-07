import { FaBars, FaBell, FaCog, FaExpand, FaHouseDamage } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
    FaAddressCard, FaAngular, FaArtstation, FaBriefcase, FaDollarSign, FaExternalLinkAlt, FaLock, FaQrcode, FaRegClone,
} from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";



const Dashboard = () => {

    return (

        <div>
            <DashboardNavbar/>
            <DashboardSidebar/>
            <Outlet/>

        </div>
    )     
}
export default Dashboard;