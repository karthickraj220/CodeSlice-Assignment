import SideBar from "../SideBar"
import Header from "../Header"
import "./index.css" 
import paymentdetails from "../../Jsondata/Payment.json"
import eyeicon from "../../Assets/eye 1.png"

const Payment = () => <div className="payment-container">
    <SideBar />
    <div className="payment">
        <Header/>
        <div className="payment-content-container" >
        <div className="payment-heading-container">
                <p className = "payment-heading">Payment Details</p>
            </div>
            <hr className="horizontal-line"/>
            <div className="payment-table-heading">
                <p className="payemnt-table-text">Name</p>
                <p className="payemnt-table-text">Payment Schedule</p>
                <p className="payemnt-table-text">Bill Number</p>
                <p className="payemnt-table-text">Amount Paid</p>
                <p className="payemnt-table-text">Balance amount</p>
                <p className="payemnt-table-text">Date</p>
            </div>
            {paymentdetails.Payment.map(item =>{
                const val = parseInt(item.id)
                if ((val % 2) !== 0){
                    return <div key = {item.id} className="payment-list-odd">
                        <p className="payment-item-name">{item.name}</p>
                        <p className="payment-item-schedule">{item.payment_schedule}</p>
                        <p className="payment-item-bill">{item.bill_number}</p>
                        <p className="payment-item-paid">{item.amount_paid}</p>
                        <p className="payment-item-balance">{item.balance_amount}</p>
                        <p className="payment-item-date">{item.date}</p>
                        <img src = {eyeicon} alt="eye-icon" className="payment-item-icon"/>
                    </div>
                }
                else{
                    return <div key = {item.id} className="payment-list-even">
                    <p className="payment-item-name">{item.name}</p>
                    <p className="payment-item-schedule">{item.payment_schedule}</p>
                    <p className="payment-item-bill">{item.bill_number}</p>
                    <p className="payment-item-paid">{item.amount_paid}</p>
                    <p className="payment-item-balance">{item.balance_amount}</p>
                    <p className="payment-item-date">{item.date}</p>
                    <img src = {eyeicon} alt="eye-icon" className="payment-item-icon"/>
                </div>
                }
            })}
        </div>
    </div>
</div>

export default Payment