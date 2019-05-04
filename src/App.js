import React,{Component} from 'react';
import './App.css';
import Menu from "./component/Menu";
import Product from "./component/Product";

class App extends Component {
    showstatus(product)
    {
        if (product.status){
            return <h3>
                <div className='ml-30'>
                    status : { product.status ? 'Active' : 'Pending'}
                </div>
            </h3>
        }
    }
    render()
    {
        // var a = 5;
        // var b = 7;
        // var name = 'chiendv6948';
        //
        // var product = {
        //     id : 1,
        //     name : 'ip 7',
        //     price : 15000000,
        //     status : true
        // };

        var user = [
            {
                id : 1,
                name : 'aa1',
                aeg : 12
            },
            {
                id : 2,
                name : 'aa2',
                aeg : 12
            },
            {
                id : 3,
                name : 'aa3',
                aeg : 12
            }
        ];
        //
        var element = user.map((user, index) => {
            // key co the dung user.id
            return <div key={index}>
                <h2>
                    name : {user.name}
                </h2>
            </div>
    });
        return (
            <div >
                <div className="App">
                    <Menu />                                  
                </div>
                {/*<div className='ml-30'>*/}
                {/*    a : {a}*/}
                {/*    <h3>name : {name}</h3>*/}
                {/*    tong {a + b}*/}
                {/*</div>*/}

                {/*<div className='ml-30'>*/}
                {/*    id  : { product.id } <br />*/}
                {/*    name : { product.name } <br />*/}
                {/*    price : { product.price } VND <br />*/}
                {/*    status : { product.status ? 'Active' : 'Pending'}*/}
                {/*</div>*/}

                {/*<div className='ml-30'>*/}
                {/*    { this.showstatus(product) }*/}
                {/*</div>*/}
                <div>
                    {element}
                </div>
            </div>
        );
    }
}

export default App;
