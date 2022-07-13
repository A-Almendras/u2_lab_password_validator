import { useState } from 'react'
import Validator from './components/Validator'

const App = () => {
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  let [passwordConfirm, setPasswordConfirm] = useState('')
  let [valid, setValid] = useState('')

  const handleChange = (event) => {
    if (event.target.id === 'username') {
      setUsername(event.target.value)
    } else if (event.target.id === 'password') {
      setPassword(event.target.value)
    } else if (event.target.id === 'passwordConfirm') {
      setPasswordConfirm(event.target.value)
    }
  }

  return (
    <Validator
      handleChange={handleChange}
      username={username}
      password={password}
      passwordConfirm={passwordConfirm}
    />
  )
}

export default App
