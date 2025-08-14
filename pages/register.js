import Link from 'next/link';
import { Html, Head, Main, NextScript } from 'next/document';


const Register = () => {
  return (
    <>
      
      <main className="wrapper sb-default">
       

        {/* <div className="mn-main-content"> */}
          <div className="row">
            <div className="col-xxl-12">
              <div className="mn-breadcrumb m-b-30">
        <div className="row">
          <div className="col-12">
            <div className="row gi_breadcrumb_inner">
              <div className="col-md-6 col-sm-12">
                <h2 className="mn-breadcrumb-title">Register</h2>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="mn-breadcrumb-list">
                  <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="mn-breadcrumb-item active">Register</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mn-register p-b-15">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="mn-register-form">
                <h3>Create New Account</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mn-register-wrap">
                        <label>First Name*</label>
                        <input type="text" placeholder="Enter your first name" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mn-register-wrap">
                        <label>Last Name*</label>
                        <input type="text" placeholder="Enter your last name" required />
                      </div>
                    </div>
                  </div>
                  <div className="mn-register-wrap">
                    <label>Email Address*</label>
                    <input type="email" placeholder="Enter your email address" required />
                  </div>
                  <div className="mn-register-wrap">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="mn-register-wrap">
                    <label>Password*</label>
                    <input type="password" placeholder="Enter your password" required />
                  </div>
                  <div className="mn-register-wrap">
                    <label>Confirm Password*</label>
                    <input type="password" placeholder="Confirm your password" required />
                  </div>
                  <div className="mn-register-wrap">
                    <div className="mn-remember">
                      <input type="checkbox" required />
                      <label>I agree to the <a href="#">Terms & Conditions</Link></label>
                    </div>
                  </div>
                  <div className="mn-register-wrap mn-register-btn">
                    <button className="mn-btn-1 btn w-100" type="submit">Create Account</button>
                  </div>
                  <div className="mn-register-wrap text-center">
                    <p>Already have an account? <Link href="/login">Login Here</Link></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
            </div>
          </div>
        {/* </div> */}
      </main>
      
   
    </>
  );
};

export default Register;