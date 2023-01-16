import React from 'react'
import './register.scss'
import { RegisterBg } from '../../assets'
import { Input, Button, Gap, Link } from '../../components/atoms'
import { useHistory } from 'react-router-dom';

const Register = () => {
  const History = useHistory();
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={RegisterBg} className='bg-image' alt='imgBg'/>
      </div>
      <div className='right'>
        <p className='title'>Register</p>
        <Input label="Full name" placeholder="Full Name" />
        <Gap height={18}/>
        <Input label="Email" placeholder="Email" />
        <Gap height={18}/>
        <Input label="Password" placeholder="Password" />
        <Gap height={20}/>
        <Button title="Submit" onClick={() => History.push('/login')}/>
        <Link title="Kembali ke login" onClick={() => History.push('/login')}/>
      </div>
    </div>
  )
}

export default Register
