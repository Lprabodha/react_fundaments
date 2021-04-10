import React from 'react';
import NameListItem from './NameListItem';

function NameList(){

    // create object
const NameList =[
    {
        id: 1,
        name: { title: 'mr', first: 'brad', last: 'gibson' },
        location: { city: 'kilcoole' },
        email: 'lprabodha98@gmail.com',
        dob: { date: '1998-11-16', age: '23', },
        picture: { medium: "https://randomuser.me/api/portraits/med/men/75.jpg", },
    },
    {
        id:2,
        name: { title: 'mr', first: 'Dilan', last: 'Madumal' },
        location: { city: 'Galle' },
        email: 'lahiru@gmail.com',
        dob: { date: '1994-10-10', age: '27', },
        picture: { medium: "https://randomuser.me/api/portraits/med/men/10.jpg", },
    },
    {
        id:3,
        name: { title: 'mr', first: 'lahiru', last: 'prabodha' },
        location: { city: 'Jaffna' },
        email: 'vta@gmail.com',
        dob: { date: '1990-07-10', age: '31', },
        picture: { medium: "https://randomuser.me/api/portraits/med/men/8.jpg", },
    },
];

const namelistComponent = ()=> {
    return(
        NameList.map((aName) => {
            return(
                <NameListItem
                    key={aName.id} 
                    name={`${aName.name.first} ${aName.name.last}`}
                    city={aName.location.city}
                    email={aName.email}
                    birthday={aName.dob.date}
                    avatar={aName.picture.medium}
                />
            )
        })
    
    );
}



    return(
        <React.Fragment>
            <h1>Name List</h1>
            <hr />
            <ul>
                {/* call to namelist function(0,1,2) is array name */}
            {namelistComponent()}
       
            </ul>
        </React.Fragment>
    );
}

export default NameList;