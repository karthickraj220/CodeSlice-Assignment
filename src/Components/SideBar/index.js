import { useNavigate } from 'react-router-dom';
import ListItem from "../NavList/index"
import "./index.css"
import profile from "../../Assets/profile-photo.png"


const naviList = [
    {naviId:"home",displayText:"Home",icon:"https://res.cloudinary.com/ddsschd82/image/upload/v1699525418/Home_inp4lc.png",path:"/dashboard"},
    {naviId:"course",displayText:"Course",icon:"https://res.cloudinary.com/ddsschd82/image/upload/v1699525478/bookmark_1_l1zvxj.png",path:"/course"},
    {naviId:"students",displayText:"Students",icon:"https://res.cloudinary.com/ddsschd82/image/upload/v1699525500/graduation-cap_1_bp8ogw.png",path:"/student"},
    {naviId:"payment",displayText:"Payment",icon:"https://res.cloudinary.com/ddsschd82/image/upload/v1699525500/usd-square_1_mut9cf.png",path:"/payment"},
    {naviId:"report",displayText:"Report",icon:"https://res.cloudinary.com/ddsschd82/image/upload/v1699525500/Report_djujeu.png",path:"/report"},
    {naviId:"settings",displayText:"Settings",icon:"https://res.cloudinary.com/ddsschd82/image/upload/v1699525499/Setting_toxopy.png",path:"/setting"},
]

const SideBar = () =>{
    const navigate = useNavigate()
  
    return <div className="sidebar-container">
        <div className="sidebar-logo-container">
                <div className="sidebar-logoline">
                </div>
                <p className="sidebar-logo-text">CRUD OPERATIONS</p>
            </div>
            <div className="profile-container">
                <img src={profile} alt = "Profile" className="sidebar-profile-image"/>
                <p className = "sidebar-profile-name">Karthi Madesh</p>
                <p className="sidebar-profile-role">Admin</p>
            </div>
            <nav className="nav-list-container">
                {naviList.map(listDetails =>(
                    <ListItem key={listDetails.naviId} listItemDetails = {listDetails} />
                ))}
            </nav>
            <button type="button" className="logout-button" onClick={()=>navigate("/")}>
                <p className="logout-text">Logout</p>
                <img src = "https://res.cloudinary.com/ddsschd82/image/upload/v1699525499/logout_ertmzr.png" alt = "icon" className = "logout-icon"/>
            </button>
        </div>
    }

export default SideBar