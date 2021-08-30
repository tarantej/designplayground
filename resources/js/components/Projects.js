import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './header/Nav';
import axios from 'axios';
import spinner from './Spinner';
import Search from './Search';

export default class Projects extends Component{

    state = {
        projects:[],
        loading:false
        //  to wait for the data to load. Keep true until data is fetched
    }

    //
    /**
     *  componentDidMount - Runs when the component has been loaded.
     *  Also useful for loading http requests
     *
     *
     *
     */


    // componentDidMount(){
    //     //  Retrieve all project repos from github
    //     axios.get('https://api.github.com/users/tarantej/repos').then(proj => console.log(proj.data));
    // }

    //  Using async await

    async componentDidMount(){
        //  Change object state

        this.setState({  loading:true  });

        //  Retrieve all project repos from github
        const proj = await axios.get('https://api.github.com/users/tarantej/repos')

        //  Set state to show retrieved output and revert loading state to false

        this.setState({  projects:proj.data, loading:true  });

        console.log(proj.data);
    }

  // Sample data to show a list of projects using state

//   state={
//     projects:[
//       {id:'1',
//       project_name:'designplayground'
//       },
//       {
//         id:'2',
//         project_name:'karenhardinglawyer'
//       },
//       {
//         id:'3',
//         project_name:'djangoevents'
//       },
//       {
//         id:'4',
//         project_name:'kuraconnect-app'
//       },
//       {
//         id:'5',
//         project_name:'teamcorp_KG'
//       }
//     ]
//   }
    render(){
//  If data has not been loaded show the spinner

// Loop through the sample data to show a list
        return(

        <div className="container">
        <h1>Projects</h1>

{/* Insert Search Component */}

            <Search />
            <table>
              <thead>
                <tr>
                    <td>Project ID</td>
                    <td>Project Name</td>
                </tr>
                </thead>
        {this.state.projects.map(project => (
             <tbody>


             <tr>
          <td>{project.id}</td>
          <td>{project.name}</td>
          </tr>
             </tbody>


        ))}
        </table>
        </div>
        );
}
}

if (document.getElementById('projects')) {
    ReactDOM.render(<Projects />, document.getElementById('projects'));
}
