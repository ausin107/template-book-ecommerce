import React from 'react';
import "./css/Navbar.css";

const Navbar = () => {
  return (
	<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
			<a href='/' className="navbar-brand">
				WebDev<b>Store</b>
				</a>  		
			<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
				<div className="navbar-nav">
					<a href="/" className="nav-item nav-link">Trang chủ</a>
					{/* <div className="nav-item dropdown">
						<a href="#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle">Services</a>
						<div className="dropdown-menu">					
							<a href="#" className="dropdown-item">Web Design</a>
							<a href="#" className="dropdown-item">Web Development</a>
							<a href="#" className="dropdown-item">Graphic Design</a>
							<a href="#" className="dropdown-item">Digital Marketing</a>
						</div>
					</div> */}
					<a href="/cart" className="cart-icon">
						<i className="material-icons">shopping_cart</i>
					</a>
				</div>
				<form className="navbar-form form-inline">
					<div className="input-group search-box">								
						<input type="text" id="search" className="form-control" placeholder="Tìm kiếm sản phẩm..."/>
						<div className="input-group-append">
							<span className="input-group-text">
								<i className="material-icons">&#xE8B6;</i>
							</span>
						</div>
					</div>
				</form>
				
				<div className="navbar-nav ml-auto action-buttons">
					<div className="nav-item dropdown">
						<a href="/login" className="nav-link dropdown-toggle mr-4">Đăng nhập</a>
						
					</div>
					<div className="nav-item dropdown">
						<a href="/register" className="btn btn-primary dropdown-toggle sign-up-btn">Đăng kí</a>
					</div>
				</div>
			</div>
		</nav>
  );
};

export default Navbar;
