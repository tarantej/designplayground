import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Search extends Component {
    state={
        search:''
    };

    //  onChange Arrow Function which takes in a parameter

    onChange = (e) => {
        //  On selecting the search input box we should be able to type in and change its state as per requirement

        // this.setState({  search:   e.target.value  });

        //  For multiple search fields

        this.setState({  [e.target.search]:   e.target.value  });
    }

    //  onSubmit Arrow function for submitting the form

    //  If we dont use arrow function, we will have to explicitly bind the function to the state

    onSubmit = (e) => {
        e.preventDefault();
        console.log(search);
    }

    render(){
        return(
            <div>
                <form className='form'>
                    <input type='text'
                    name='search'
                    id='search'
                    placeholder='Search Projects'
                    value={this.state.search}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}    />
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        {/* <i class="material-icons right">send</i> */}
                    </button>
                </form>
            </div>

        );
    }

}

if (document.getElementById('search')) {
    ReactDOM.render(<Search />, document.getElementById('search'));
}
