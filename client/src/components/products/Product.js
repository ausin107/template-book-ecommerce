  import React from "react";
  
  const Product = ({ item }) => {
    return (
        <div className="col-xs-12 col-md-6">
          <div className="product-content product-wrap clearfix">
            <div className="row">
                <div className="col-md-5 col-sm-12 col-xs-12">
                  <div className="product-image w-4"> 
                    <img src={item.coverImage} alt="194x228" className="img-responsive card-img-top"/>                  
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12">
                  <div className="product-deatil">
                      <h5 className="name">
                        <a href="#">
                          {item.title} <span>{item.category}</span>
                        </a>
                      </h5>
                      <p className="price-container">
                        <span>{item.price}đ</span>
                      </p>
                      <span className="tag1"></span> 
                  </div>
                  <div className="product-info smart-form mt-5">
                    <div className="row">
                      <div className="col-md-12 col-sm-12 col-xs-12"> 
                        <a href="#" className="btn btn-success btn-vn mt-15">Thêm vào giỏ hàng</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>      
    );
  };
  
  export default Product;