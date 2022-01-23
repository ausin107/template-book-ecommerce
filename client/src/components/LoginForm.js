import React from 'react';

const LoginForm = () => {
  return (
        <div className="col-lg-6">
        <div className="card2 card border-0 px-4 pb-8 m-4">
        <h4>“A room without books is like a body without a soul.”</h4>
        <p>― Marcus Tullius Cicero</p>
        </div>
        <div className="row px-3 mb-4">
        <h2 className="mb-0 mr-4 mt-2">Chào mừng quay trở lại!</h2>
        </div>
        <div className="row px-3">
        <label className="mb-1">
            <h6 className="mb-0 text-sm">Tài khoản Email</h6>
        </label>
        <input
            className="mb-4"
            type="text"
            name="email"
            placeholder="Nhập tài khoản email của bạn"
            required
        />
        </div>
        <div className="row px-3">
        <label className="mb-1">
            <h6 className="mb-0 text-sm">Mật khẩu</h6>
        </label>
        <input
            type="password"
            name="password"
            placeholder="Nhập mật khẩu"
            required
        />
        </div>
        <div className="row px-3 mb-4">
        <div className="custom-control custom-checkbox custom-control-inline">
            <input
            id="chk1"
            type="checkbox"
            name="chk"
            className="custom-control-input"
            />
            <label for="chk1" className="custom-control-label text-sm">
            Ghi nhớ tôi
            </label>
        </div>
        <a href="/forgot-password" className="ml-auto mb-0 text-sm mr-2">
            Quên mật khẩu?
        </a>
        </div>
        <div className="row mb-3 px-3">
        <button type="submit" className="btn btn-blue text-center">
            Đăng nhập
        </button>
        </div>
        <div className="row mb-4 px-3">
        <small className="font-weight-bold">
            Chưa có tài khoản? <a href='/register' className="text-danger ">Đăng kí</a>
        </small>
        </div>
    </div>
  );
};

export default LoginForm;
