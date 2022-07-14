import { useState } from 'react'
import Validator from './components/Validator'

const App = () => {
  // 1. Add and initialize state for your form. Your state should include username, password, passwordConfirm, and valid properties.
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  let [passwordConfirm, setPasswordConfirm] = useState('')
  let [valid, setValid] = useState('')
  let [passwordMessage, setPasswordMessage] = useState('Passwords must match.')

  // 2. Add a method for handling each input's onChange event.
  const handleChange = (event) => {
    if (event.target.id === 'username') {
      setUsername(event.target.value)
    } else if (event.target.id === 'password') {
      setPassword(event.target.value)
    } else if (event.target.id === 'passwordConfirm') {
      setPasswordConfirm(event.target.value)
    }
  }

  // 3. Add a method to handle the form submission. Remember to prevent the default behavior of a form being submitted with e.preventDefault().
  // 4. Display a message if the user's inputs are valid or invalid.
  const handleSubmitForm = (event) => {
    event.preventDefault()
    // Bonus: Make sure passwords are at least 7 characters in length.
    // if (password.length < 7) {
    //   passwordMessage = 'Password must be at least 7 characters in length'
    // }
    if (password === passwordConfirm) {
      // console.log('Passwords match')
      setValid('valid')
      passwordMessage = 'The passwords match!'
    } else {
      // console.log('Passwords dont match')
      setValid('invalid')
      passwordMessage = 'Passwords do not match!'
    }
    setPasswordMessage(passwordMessage) // this actually displays the message depending id password is valid or invalid
  }

  // Bonus: Add a cancel button that clears the fields when clicked.
  const handleResetClick = () => {
    // username = ''
    // setUsername(username)
    // Lines 41-42 are being replaced by line 44; can do the same for the rest
    setUsername('')

    setPassword('')
    setPasswordConfirm('')
    setValid('')
    setPasswordMessage('Passwords must match.')
  }

  return (
    <Validator
      handleChange={handleChange}
      username={username}
      password={password}
      passwordConfirm={passwordConfirm}
      handleSubmitForm={handleSubmitForm}
      valid={valid}
      passwordMessage={passwordMessage}
      handleResetClick={handleResetClick}
    />
  )
}

export default App
