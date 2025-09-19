export default function AuthPage({ params }){
  const { mode } = params
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
