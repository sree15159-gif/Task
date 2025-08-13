import Link from 'next/link';
import { Html, Head, Main, NextScript } from 'next/document';

import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle login logic here
      console.log('Login attempt:', formData);
      // Redirect to dashboard or home page
    }
  };

  return (
    <>
    
      
      <main className="wrapper sb-default">
        <div className="mn-main-content">
  <div className="mn-breadcrumb m-b-30">
    <div className="row">
      <div className="col-12">
        <div className="row gi_breadcrumb_inner">
          <div className="col-md-6 col-sm-12">
            <h2 className="mn-breadcrumb-title">Login Page</h2>
          </div>
          <div className="col-md-6 col-sm-12">
            {/* mn-breadcrumb-list start */}
            <ul className="mn-breadcrumb-list">
              <li className="mn-breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="mn-breadcrumb-item active">Login Page</li>
            </ul>
            {/* mn-breadcrumb-list end */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Login section */}
  <section className="mn-login p-b-15">
    <div className="mn-title d-none">
      <h2>
        Login
        <span />
      </h2>
      <p>Get access to your Orders, Wishlist and Recommendations.</p>
    </div>
    <div className="mn-login-content">
      <div className="mn-login-box">
        <div className="mn-login-wrapper">
          <div className="mn-login-container">
            <div className="mn-login-form">
              <form action="#" method="post">
                <span className="mn-login-wrap">
                  <label>Email Address*</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your email add..."
                    required=""
                  />
                </span>
                <span className="mn-login-wrap">
                  <label>Password*</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required=""
                  />
                </span>
                <span className="mn-login-wrap mn-login-fp">
                  <span className="mn-remember">
                    <input type="checkbox" defaultValue="" />
                    Remember
                    <span className="checked" />
                  </span>
                  <label>
                    <a href="#">Forgot Password?</a>
                  </label>
                </span>
                <span className="mn-login-wrap mn-login-btn">
                  <span>
                    <a href="register.html" className="">
                      Create Account?
                    </a>
                  </span>
                  <button className="mn-btn-1 btn" type="submit">
                    <span>Login</span>
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mn-login-box d-n-991">
        <div className="mn-login-img">
          <img src="assets/img/common/about-3.png" alt="login" />
        </div>
      </div>
    </div>
  </section>
</div>

      </main>
      
      
    </>
  );
};

export default Login;