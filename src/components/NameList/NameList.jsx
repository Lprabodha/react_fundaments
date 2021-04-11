import React, {useState} from 'react';
import NameListItem from './NameListItem';

function NameList(){

    const [NameList, setNameList] = useState([
        {
            id: 1,
            name: { title: 'mr', first: 'brad', last: 'gibson' },
            location: { city: 'kilcoole' },
            email: 'lprabodha98@gmail.com',
            dob: { date: '1998-11-16', age: '23', },
            picture: { medium: "https://randomuser.me/api/portraits/med/men/75.jpg", },
        },
        {
            id: 2,
            name: { title: 'mr', first: 'Dilan', last: 'Madumal' },
            location: { city: 'Galle' },
            email: 'lahiru@gmail.com',
            dob: { date: '1994-10-10', age: '27', },
            picture: { medium: "https://randomuser.me/api/portraits/med/men/10.jpg", },
        },
        {
            id: 3,
            name: { title: 'mr', first: 'lahiru', last: 'prabodha' },
            location: { city: 'Jaffna' },
            email: 'vta@gmail.com',
            dob: { date: '1990-07-10', age: '31', },
            picture: { medium: "https://randomuser.me/api/portraits/med/men/8.jpg", },
        },
    ]);


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

const addUserHandler = () =>{
    const newUser = {
        id: 4,
        name: { title: 'mrs', first: 'Renuka', last: 'Malkanthi' },
        location: { city: 'Jaffna' },
        email: 'vta@gmail.com',
        dob: { date: '1990-07-10', age: '31', },
        picture: { medium: "https://randomuser.me/api/portraits/med/women/37.jpg", },
    };

    // setNameList((NameList) => NameList.concat(newUser));
    // Spread Operator
    setNameList((NameList) => [...NameList,newUser]);
};




    return(
        <React.Fragment>
           
           <div className="container mt-4">
               <button className="btn btn-primary mb-2" onClick={addUserHandler}>Add Name</button>
                <ul className="list-group">{namelistComponent()}</ul>
           </div>

         
        </React.Fragment>
    );
}

export default NameList;