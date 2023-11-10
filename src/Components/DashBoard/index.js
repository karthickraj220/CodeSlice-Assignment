import SideBar from "../SideBar"
import Header from "../Header"
import "./index.css"
import DashBoarddetails from "../../Jsondata/Dashboard.json"
import {DashBoardCard} from "./styledComponents";

const DashBoard = () => <div className="dashboard-container">
    <SideBar />
    <div className="dashboard">
        <Header/>
        <div className="dashboard-content-container" >
        {DashBoarddetails.Dashboard.map(item =><DashBoardCard key = {item.name} bgColor={item.bgcolor}>
            <img src = {item.icon} alt="card-icon" className="card-image"/>
            <p className="card-title">{item.name}</p>
            <p className = "card-value">{item.value}</p>
            </DashBoardCard>
            )}
        </div>
    </div>
</div>

export default DashBoard