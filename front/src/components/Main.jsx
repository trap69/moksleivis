import React from 'react'
import SetTransaction from './SetTransaction'
import Register from './Register'
import Transactions from './Transactions'
import LogIn from './LogIn'
import Login2 from './Login2'


const Main = () => {
  return (
    <div>
        <Register/>
        <LogIn/>
        <Login2/>
        <Transactions/>
        <SetTransaction/>
        {/* <Login2/> */}
    </div>
  )
}

export default Main