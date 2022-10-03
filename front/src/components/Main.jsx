import React from 'react'
import SetTransaction from './SetTransaction'
import Register from './Register'
import Transactions from './Transactions'
import LogIn from './LogIn'
import Login2 from './Login2'
import TextLinkExample from './Navbar'
import Second from './Second'


const Main = () => {
  return (
    <div>
      <TextLinkExample/>
        <Register/>
        {/* <Second/> */}
        {/* <LogIn/> */}
        {/* <Login2/> */}
        <Transactions/>
        <SetTransaction/>
        {/* <Login2/> */}
    </div>
  )
}

export default Main