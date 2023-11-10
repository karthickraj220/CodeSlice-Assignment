import { NavLink } from "react-router-dom";
import "./index.css"

const ListItem = props =>{
    const {listItemDetails} = props 
    const {displayText,icon,path} = listItemDetails

    const navLinkStyle = ({ isActive }) => {
        return {
          textDecoration: isActive ? "none" : "none",
          backgroundColor: isActive ? "#FEAF00" : "none",
          display: "flex",
          flexDirection: "row",
          height: "46px",
          width: "196px",
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: "13px",
          border: "none",
          borderRadius: "3px",
        };
      };

    return<NavLink style = {navLinkStyle} to={path}>
            <img src={icon} alt ="icon" className="icon-style"/>
            <p className="item-text">{displayText}</p>
        </NavLink>   
}

export default ListItem