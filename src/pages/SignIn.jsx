import { SiEpicgames } from 'react-icons/si'
import LogInOptions from '../components/LogInOptions'

const SignIn = () => {
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

  function displaySubmit() {
    let subm = document.getElementById('submit')
    if (subm.value.includes('@gmail.com')) {
      subm.style.backgroundColor = '#202020'
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
          className='mt-5 bg-[#202020] text-white border-[1px] border-gray-600 p-4 rounded-md w-[370px]'
          type='email'
          id='email'
          onBlur={emptyField}
          placeholder='Email Address'
        />
        <h1 id='req' className='hidden text-red-600'>
          Required
        </h1>
        <input
          className='mt-8 p-4 rounded-md text-white text-sm font-bold w-[370px] bg-blue-800'
          type='submit'
          value='CONTINUE'
          disabled={false}
          onChange={displaySubmit}
          name=''
          id='submit'
        />
        <hr className='text-xl text-black' />
        <div className='mt-8'>
          <h1 className='flex m-2 text-white'>or continue with</h1>
        </div>
      </div>

      <div className='flex justify-center items-center flex-wrap mt-10 gap-3 h-[140px] w-[380px]'>
        <LogInOptions />
      </div>
      <h1 className='text-gray-300 mt-10 w-[380px] text-center'>
        By signin in or signing up, you agree with our
        <span className='underline ml-1 hover:no-underline'>
          Privacy Policy
        </span>
      </h1>
    </div>
  )
}
export default SignIn
