import React from 'react'
import './Support.css'
import Menu from './Menu'
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';

function Sales() {
    return (
        <div>
            <Menu adminRole="Sales Admin"/>
            <div className="admin-container">
                <div className="title">Sales Administrator</div>
                <div className="links-container">
                    <div className="link">
                        <AssignmentOutlinedIcon fontSize='large' />
                        <div className="link-title">Sales Reports</div>
                    </div>
                    <div className="link">
                        <TrendingUpOutlinedIcon fontSize='large' />
                        <div className="link-title">Sales Leads</div>
                    </div>
                    <div className="link">
                        <AccountTreeOutlinedIcon fontSize='large' />
                        <div className="link-title">Sales Demo</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sales
