import "./index.css"
import backicon from "../../Assets/caret-circle-down 1.png"
import searchicon from "../../Assets/search.png"
import bellicon from "../../Assets/bell 1.png"

const Header = () => <div className = "header-container">
    <img src = {backicon} alt = "icon" className = "header-back-icon"/>
    <div className = "header-input-container">
    <div className = "search-container">
        <input type = "search" placeholder = "Search..."  className = "search-input"/>
        <img src = {searchicon} alt = "icon" className= "search-icon"/>
    </div>
    <img src ={bellicon} alt ="icon" className = "bell-icon"/>
    </div>
</div>

export default Header 
