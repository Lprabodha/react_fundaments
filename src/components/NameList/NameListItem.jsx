
import React from 'react';
import moment from 'moment';


function NameListItem(props){
    return(
        <li>
            <p><img src={props.avatar}/> {props.name}</p>
            <p>City:{props.city}</p>
            <p>Email:{props.email}</p>
            <p>Bithday:{moment(props.birthday).format('DD-MM-YYYY')}</p>
                 
        </li>
    ); 
}

export default NameListItem;