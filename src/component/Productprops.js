import React,{Component} from 'react';

class Productprops extends Component {
    //tạo constructor và supper(props)
    // đối tượng là this.ten_function = this.ten_function.bin(this)
    constructor(props){
        super(props);
        console.log(props);
        // truy cap den onAddToCart va bind luon
        this.onAddToCart = this.onAddToCart.bind(this);
    }
    //gọi đên thuộc tính cần sd
    onAddToCart(){
        alert(this.props.children);
    }

    onAddToCart2 = ()=>{
        alert(this.props.children);
    }
    render()
    {
        return (
            <div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img data-src="#" alt="" />
                        <div className="caption">
                            {/*gọi data từ thằng cha với thuộc tính tương ứng (name) this.props.name */}
                            <h3>{ this.props.children }</h3>
                            <p>
                                { this.props.price }
                            </p>
                            <p>
                                {/*gọi function k co param*/}
                                <a href="#" className="btn btn-primary" onClick={this.onAddToCart}>Add Cart</a>
                                <a href="#" className="btn btn-primary" onClick={this.onAddToCart2}>Add Cart2</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Productprops;
