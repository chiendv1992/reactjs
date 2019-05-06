import React,{Component} from 'react';
import './App.css';
import Menu from "./component/Menu";
import Productprops from "./component/Productprops";

class App extends Component {
    // viết trong constructor
    constructor(props){
        super(props);
        this.state = {
            product: [
                {
                    id: '1',
                    name: 'ip6s',
                    price: 12000000,
                    status: true
                },
                {
                    id: '2',
                    name: '6s plus',
                    price: 14500000,
                    status: true
                },
                {
                    id: '3',
                    name: 'ip6s',
                    price: 14000000,
                    status: false
                },
            ],
            isActive : true
        };
        this.onSetState = this.onSetState.bind(this);
    }

    onSetState(){
        if (this.state.isActive == true) {
            this.setState(
            {
                isActive:false
            });
        }
        else{
            this.setState({
                isActive:true
            });
        }
    }

    render()
    {
        //gọi state vào
        let elements = this.state.product.map((product,index) => {
            return  <tr key={ product.id }>
                        <td>{ index }</td>
                        <td>{ product.name }</td>
                        <td>
                            <span className="label label-success">{product.name}</span>
                        </td>
                    </tr>
        });
        return (
            <div >
                <div className="App">
                    <Menu />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='row'>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="panel panel-danger">
                                        <div className="panel-danger">
                                            State
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <table className='table table-bordered table-hover'>
                                <tbody>
                                    <tr>
                                        <td>stt</td>
                                        <td>ten</td>
                                        <td>giá</td>
                                    </tr>
                                    { elements }
                                </tbody>
                            </table>
                            <button type="button" className="btn btn-default" onClick = {this.onSetState}>
                                Active : { this.state.isActive === true ? "true":'false'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
