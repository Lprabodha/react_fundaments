
import React from 'react';
import moment from 'moment';
import './NameListItem.css';


function NameListItem(props){
    return(
        <li>
            <p style={{color:'green'}}>
                <img src={props.avatar} alt={props.name} />{props.name}</p>
            <p>City:{props.city}</p>
            <p>Email:{props.email}</p>
            <p>Bithday:{moment(props.birthday).format('DD-MM-YYYY')}</p>
                 
        </li>
    ); 
}

export default NameListItem;