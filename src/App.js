import React,{Component} from 'react';
import './App.css';
import Menu from "./component/Menu";
import Productprops from "./component/Productprops";

class App extends Component {
    onClick(text){
        console.log(text);
    }
    onClick2(text){
        console.log(text);
    }
    render()
    {
        var product = [
            {
                id : '1',
                name : 'ip6s',
                price : 12000000,
                status : true
            },
            {
                id : '2',
                name : '6s plus',
                price : 14500000,
                status : true
            },
            {
                id : '3',
                name : 'ip6s',
                price : 14000000,
                status : false
            },
        ];
        let elements = product.map((product,index) => {
            return  <Productprops
                key = {index}
                price = { product.price }
            >
                { product.name }
            </Productprops>
        });
        return (
            <div >
                <div className="App">
                    <Menu />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='row'>
                            <div className="col-xs-12">
                                {elements}
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <button className='btn btn-warning' onClick={this.onClick("sssaaa")}>Click me!</button>
                                <button className='btn btn-warning' onClick={() => this.onClick2("ssa")}>Click me2!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
