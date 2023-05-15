import { Component } from 'react';
import './datainput.css'

class Show extends Component{
    constructor(){
        super();
        this.state = {
            name:""
        }
    }
    getData = (e) =>{
        this.setState({name:e.target.value})
    };
    emptyinput = () =>{
        this.setState({name:""})
    }
    render(){
        return(
            <div>
                <div className="showdatacontainer">
                    <h1>Data</h1>
                <input 
                    type="text" 
                    className="datainput" 
                    value={this.state.name} /* to appear value of name property on input*/
                    onChange={this.getData} /* to allow change on input*/
                />
                <button 
                    className="databutton"
                    onClick={this.emptyinput}
                >   Reset
                </button>
                <p>{this.state.name}</p> {/* bind on value of the input and show it in this paragraph*/}
                </div>
        </div>
        )
    } 
}

export default Show;