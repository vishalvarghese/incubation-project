import React from 'react'

function loginform() {
  return (
    <div>  
      
        <form action="">
            <label htmlFor="email">Email</label>
            <input id='email' type="email" />
            <br />
            <label htmlFor="passsword">password</label>
            <input id="password" type="text" />
            <br />
            <button>Log In</button>
        </form>   
    </div>
  )
}

export default loginform
