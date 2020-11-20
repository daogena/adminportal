import React from 'react'
import "./Menu.css"; 
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { Dropdown } from 'react-bootstrap'; 

function Menu({ adminRole }) {

    return (
        <div style={{ 
            display: 'flex', 
            marginLeft: '40px',
            marginTop: '40px'
         }}>
            <Dropdown role="menu">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <MenuOutlinedIcon />
                </Dropdown.Toggle>

                <Dropdown.Menu className="item-container">
                    <Dropdown.ItemText className="item">{adminRole}</Dropdown.ItemText>
                    <Dropdown.ItemText className="item">Tech Support</Dropdown.ItemText>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Menu
