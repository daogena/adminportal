import React from 'react'
import './Support.css';
import Menu from "./Menu";  
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import AssignmentLateOutlinedIcon from '@material-ui/icons/AssignmentLateOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';

function HR() {
    return (
        <div>
            <Menu adminRole="HR Admin"/>
            <div className="admin-container">
                <div className="title">HR Administrator</div>
                <div className="links-container">
                    <div className="link">
                        <AssignmentIndOutlinedIcon fontSize='large' />
                        <div className="link-title">New Hire On-boarding</div>
                    </div>
                    <div className="link">
                        <AccountBalanceWalletOutlinedIcon fontSize='large' />
                        <div className="link-title">Benefits</div>
                    </div>
                    <div className="link">
                        <AccountBalanceOutlinedIcon fontSize='large'/>
                        <div className="link-title">Payroll</div>
                    </div>
                    <div className="link">
                        <AssignmentLateOutlinedIcon fontSize='large' />
                        <div className="link-title">Off-boarding</div>
                    </div>
                    <div className="link">
                        <AssignmentOutlinedIcon fontSize='large' />
                        <div className="link-title">HR Reports</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HR
