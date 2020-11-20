import React from 'react'
import "./Support.css"
import Menu from './Menu'
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

function Finance() {
    return (
        <div>
            <Menu adminRole="Finance Admin"/>
            <div className="admin-container">
                <div className="title">Finance Administrator</div>
                <div className="links-container">
                    <div className="link">
                        <AssignmentOutlinedIcon fontSize='large'/>
                        <div className="link-title">Finance Reports</div>
                    </div>
                    <div className="link">
                        <PaymentOutlinedIcon fontSize='large' />
                        <div className="link-title">Accounts Payable</div>
                    </div>
                    <div className="link">
                        <ReceiptOutlinedIcon fontSize='large' />
                        <div className="link-title">Accounts Receivable</div>
                    </div>
                    <div className="link">
                        <MonetizationOnOutlinedIcon fontSize='large' />
                        <div className="link-title">Tax</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Finance
