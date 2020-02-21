import React,{Component} from 'react';

class UserInput extends Component{
    render(){
        return(
            <div>
                <input type='test' onChange={this.props.change}/>
            </div>
        );
    }

}
export default UserInput;