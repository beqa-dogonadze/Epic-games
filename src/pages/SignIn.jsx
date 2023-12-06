import { useEffect, useState } from 'react'
import { SiEpicgames } from 'react-icons/si'
import LogInOptions from '../components/LogInOptions'
const SignIn = () => {
  // email validation
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email)

  const [email, setEmail] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }

  //disable button if email is not valid
  useEffect(() => {
    setIsDisabled(!validateEmail(email))
  }, [email])

  // styles for disabled and standart button
  let notdisabledbtn =
    'mt-10 p-4 rounded-md text-white text-sm -bold w-[370px] h-[60px] bg-blue-600'
  let disabledbtn =
    'mt-10 p-4 rounded-md text-gray-400 text-sm -bold w-[370px] h-[60px] bg-blue-800'

  // check if email field is empty and set style for this situation
  function emptyField() {
    let field = document.getElementById('email')
    let req = document.getElementById('req')

    if (field.value !== '') {
      field.style.borderColor = 'white'
      req.style.display = 'none'
    } else {
      field.style.borderColor = 'red'
      req.style.display = 'block'
    }
  }

  return (
    <div className='w-[480px] h-[800px] bg-[#202020] m-auto flex flex-col justify-center items-center mt-20 rounded'>
      <div className='flex flex-col items-center'>
        <SiEpicgames className='text-white text-5xl' />
        <h1 className='mt-16 text-white text-xl font-bold'>
          Sign In or Sign Up
        </h1>
        <input
          className='mt-5 bg-[#202020] text-gray-500 border-[1px] border-gray-600 p-4 rounded-md w-[370px] h-[60px]'
          type='email'
          id='email'
          value={email}
          onChange={onEmailChange}
          onBlur={emptyField}
          placeholder='Email Address'
        />
        <h1 className='absolute text-white pr-[243px] mt-[161px]'>
          Email addres
        </h1>
        <h1
          id='req'
          className='hidden absolute mt-[222px] pr-[310px] text-sm text-red-600'
        >
          Required
        </h1>

        <form action={isDisabled ? '@' : '/'}>
          <input
            className={isDisabled ? disabledbtn : notdisabledbtn}
            disabled={isDisabled}
            value='Continue'
            type='submit'
            id='submit'
          />
        </form>

        <hr className='text-xl text-black' />
        <div class='flex items-center justify-center'>
          <hr class='w-[370px] h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
          <span class='absolute px-3 text-sm text-gray-400 bg-[#202020] select-none'>
            or continue with
          </span>
        </div>
      </div>

      {/* log in options container */}
      <div className='flex justify-between items-center flex-wrap mt-5 gap-1 h-[140px] w-[380px]'>
        <LogInOptions />
      </div>
      <h1 className='text-gray-300 mt-10 w-[380px] text-center'>
        By signin in or signing up, you agree with our
        <span className='underline ml-1 hover:no-underline'>
          <a href='@'> Privacy Policy</a>
        </span>
      </h1>
    </div>
  )
}
export default SignIn
