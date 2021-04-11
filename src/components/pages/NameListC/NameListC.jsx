
import React,{Component} from 'react';
import NameListItem from '../NameList/NameListItem';

class NameListC extends Component{

    constructor(props){
        super(props);
        console.log("Contructor called");
        this.state = {
            getAName:false,
            NameList: [
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
            ]
        };
    }

    componentDidMount(){
        fetch("https://randomuser.me/api").then(response => {
            return response.json();
        }).then(responseDate => {
           
            this.setState({ NameList: [...this.state.NameList, responseDate.results[0]]});
          
        });
    }

    componentDidUpdate(){
        if(this.state.getAName){
            fetch("https://randomuser.me/api").then(response => {
                return response.json();
            }).then(responseDate => {

                this.setState({
                    getAName: false,
                    NameList: [...this.state.NameList, responseDate.results[0]],
                     });

            });
        }
       
    }




    addNameHandler = ()=>{
        this.setState({getAName:true});
  
    }

    namelistComponent = () => {
        return (
            this.state.NameList.map((aName) => {
                return (
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

    render(){
        return(
            <div className="container mt-4">
                <button className="btn btn-primary mb-2" onClick={this.addNameHandler}>Add Name</button>
                <ul className="list-group">{this.namelistComponent()}</ul>
            </div>
         
        )
    }
}

export default NameListC;

