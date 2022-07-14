import '../styles/Validator.css'

const Validator = (props) => {
  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={props.handleChange}
          value={props.username}
        />
        <label htmlFor="username">Username</label>

        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={props.handleChange}
          value={props.password}
        />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm"
          onChange={props.handleChange}
          value={props.passwordConfirm}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>

        <button type="submit" onClick={props.handleSubmitForm}>
          Sign Up
        </button>
        {/* Bonus: Add a cancel button that clears the fields when clicked. */}
        <button
          type="button"
          className="cancel"
          onClick={props.handleResetClick}
        >
          Reset
        </button>
        {/* Bonus: Add a class of invalid or valid to the message conditionally (CSS already exists) */}
        <p className={props.valid}>{props.passwordMessage}</p>
      </form>
    </div>
  )
}

export default Validator
