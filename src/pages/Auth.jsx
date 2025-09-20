import React from 'react'

// Auth component no longer depends on react-router-dom. Accepts `mode` prop ('login'|'register').
export default function Auth({ mode = 'login' }){
  return (
    <div>
      <h2>{mode === 'register' ? 'Register' : 'Login'}</h2>
      <form>
        <label>Email<input type="email"/></label>
        <label>Password<input type="password"/></label>
        <button type="submit">{mode === 'register' ? 'Create account' : 'Login'}</button>
      </form>
    </div>
  )
}
