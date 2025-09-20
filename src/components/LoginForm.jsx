"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data?.message || "Login failed");
      }
      const data = await res.json();
      // store token in localStorage (simple mock)
      if (data.token) localStorage.setItem("token", data.token);
      router.push("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 offset-md-2">
        <div className="account-content">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 col-lg-6 login-left d-none d-lg-block">
              <img
                src="/theme/assets/img/login-banner.png"
                className="img-fluid"
                alt="Login"
              />
            </div>
            <div className="col-md-12 col-lg-6 login-right">
              <div className="login-header">
                <h3>
                  Login <span>Photography</span>
                </h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">E-mail</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <div className="form-group-flex">
                    <label className="form-label">Password</label>
                    <a href="#" className="forgot-link">
                      Forgot password?
                    </a>
                  </div>
                  <div className="pass-group">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control pass-input"
                    />
                  </div>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="mb-3">
                  <button
                    className="btn btn-primary-gradient w-100"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign in"}
                  </button>
                </div>
                <div className="login-or">
                  <span className="or-line"></span>
                  <span className="span-or">or</span>
                </div>
                <div className="social-login-btn d-grid gap-2">
                  <button type="button" className="btn w-100">
                    {" "}
                    <img
                      src="/theme/assets/img/icons/google-icon.svg"
                      alt="google-icon"
                    />{" "}
                    Sign in With Google
                  </button>
                  <button type="button" className="btn w-100">
                    {" "}
                    <img
                      src="/theme/assets/img/icons/facebook-icon.svg"
                      alt="fb-icon"
                    />{" "}
                    Sign in With Facebook
                  </button>
                </div>
                <div className="account-signup mt-3">
                  <p>
                    Don't have an account ? <a href="/auth/register">Sign up</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>  
  );
}
