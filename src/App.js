import React,{Component} from 'react';
import './App.css';
import Menu from "./component/Menu";
import Productprops from "./component/Productprops";

class App extends Component {
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
            status : false
        },
        {
            id : '3',
            name : 'ip6s',
            price : 14000000,
            status : false
        },
    ];
        let elements = product.map((product,index) => {
            let result='';
            if (product.status){
                result = <Productprops
                    key = {product.index}
                    price = { product.price }
                >
                    { product.name }
                </Productprops>
            }
            return  result;
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
                       </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default App;
