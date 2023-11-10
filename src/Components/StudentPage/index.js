import SideBar from "../SideBar"
import Header from "../Header"
import "./index.css"
import studentdetails from "../../Jsondata/Students.json"
import listprofileimage from "../../Assets/profile-photo.png"
import penicon from "../../Assets/pen 1.png"
import trashicon from "../../Assets/trash 1.png"

const Student = () => <div className="student-container">
    <SideBar />
    <div className="student">
        <Header/>
        <div className="student-content-container" >
            <div className="student-heading-container">
                <p className = "student-heading">Students List</p>
                <button type = "button" className="addstudent-button">ADD NEW STUDENT</button>
            </div>
            <hr className="horizontal-line"/>
            <div className="student-table-heading">
                <p className="table-text">Name</p>
                <p className="table-text">Email</p>
                <p className="table-text">Phone</p>
                <p className="table-text">Enroll Number</p>
                <p className="table-text">Date of admission</p>
            </div>
            {studentdetails.Students.map(item=><div key ={item.index} className="student-item-container"> 
            <img src = {listprofileimage} className="list-profile-image" alt="profile"/>
            <p class="item-name">{item.name}</p>
            <p class= "item-email">{item.email}</p>
            <p class= "item-phone">{item.phone}</p>
            <p class= "item-enrollno">{item.enroll_number}</p>
            <p class= "item-date">{item.date_of_admission}</p>
            <div className="list-icon-container">
                <img src = {penicon} className="item-icon" alt="item-icon"/>
                <img src = {trashicon} className="item-icon" alt="item-icon"/>
            </div>
            </div>)}
        </div>
    </div>
</div>

export default Student