import React from 'react'
import './Support.css'
import Menu from './Menu'; 
import DesktopMacOutlinedIcon from '@material-ui/icons/DesktopMacOutlined';
import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import NewReleasesOutlinedIcon from '@material-ui/icons/NewReleasesOutlined';

function Tech() {
    return (
        <div>
            <Menu adminRole="Tech Admin"/>
            <div className="admin-container">
                <div className="title">Tech Administrator</div>
                <div className="links-container">
                    <div className="link">
                        <DesktopMacOutlinedIcon fontSize='large' />
                        <div className="link-title">Application Monitoring</div>
                    </div>
                    <div className="link">
                        <LiveHelpOutlinedIcon fontSize='large' />
                        <div className="link-title">Tech Support</div>
                    </div>
                    <div className="link">
                        <CodeOutlinedIcon fontSize='large' />
                        <div className="link-title">App Development</div>
                    </div>
                    <div className="link">
                        <SupervisorAccountOutlinedIcon fontSize='large' />
                        <div className="link-title">App Admin</div>
                    </div>
                    <div className="link">
                        <NewReleasesOutlinedIcon fontSize='large' />
                        <div className="link-title">Release Management</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tech
