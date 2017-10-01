
import  React , {Component} from 'react'

class LoginErrors extends Component{



    render(){
        return(
            <div>
                <p >
                    <span className='red'><small> {this.props.errors.username} </small></span>
                </p>
                <p>
                    <span className='red'><small> {this.props.errors.password} </small></span>
                </p>
            </div>
        )
    }
}

export default LoginErrors;