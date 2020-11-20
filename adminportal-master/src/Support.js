import React from 'react'
import "./Support.css"
import Menu from './Menu'; 
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

function Support() {
    return (
        <div>
            <Menu adminRole="Support Admin"/>
            <div className="admin-container">
                <div className="title">Support Administrator</div>
                <div className="links-container">
                    <div className="link">
                        <PermIdentityOutlinedIcon fontSize='large'/>
                        <div className="link-title">Manage User Accounts</div>
                    </div>
                    <div className="link">
                        <AssignmentTurnedInOutlinedIcon fontSize='large'/>
                        <div className="link-title">Assign Roles</div>
                    </div>
                    <div className="link">
                        <HelpOutlineOutlinedIcon fontSize='large'/>
                        <div className="link-title">Help Desk</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support
