import React,{Component} from 'react';

class Productprops extends Component {
    render()
    {
        return (
           <div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img data-src="#" alt="" />
                        <div className="caption">
                    {/*gọi data từ thằng cha với thuộc tính tương ứng (name)*/}
                            <h3>{ this.props.children }</h3>
                            <p>
                                { this.props.price }
                            </p>
                            <p>
                                <a href="#" className="btn btn-primary">Add Cart</a>
                            </p>
                        </div>
                    </div>
                </div>
           </div>
        );
    }
}

export default Productprops;
