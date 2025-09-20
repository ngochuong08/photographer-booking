export default function LoginPage(){
  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left">
              <img className="img-fluid" src="/theme/admin/assets/img/logo-white.png" alt="Logo" />
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Login</h1>
                <p className="account-subtitle">Access to our dashboard</p>

                <form action="#">
                  <div className="mb-3">
                    <input className="form-control" type="text" placeholder="Email" />
                  </div>
                  <div className="mb-3">
                    <input className="form-control" type="password" placeholder="Password" />
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-primary w-100" type="submit">Login</button>
                  </div>
                </form>

                <div className="text-center forgotpass"><a href="#">Forgot Password?</a></div>
                <div className="login-or">
                  <span className="or-line"></span>
                  <span className="span-or">or</span>
                </div>

                <div className="social-login">
                  <span>Login with</span>
                  <a href="#" className="facebook"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#" className="google"><i className="fa-brands fa-google"></i></a>
                </div>

                <div className="text-center dont-have">Don’t have an account? <a href="#">Register</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
