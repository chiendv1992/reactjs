import React, { Component } from 'react';
class Product extends Component {
    render(){
        return(
        	<div>
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<div className="thumbnail">
						<img data-src="#" alt="" src="https://khoaquan.vn/wp-content/uploads/2017/12/Dell-Inspiron-7559-1.jpg"/>
						<div className="caption">
							<h3> Dell 7559 Inpirin</h3>
							<p>
								16.000.000 VND
							</p>
						</div>
                        <button type="button"> Add Cart</button>

                    </div>
				</div>

			</div>

        );
    }
}
export default Product;