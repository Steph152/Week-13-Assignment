import React from 'react';
import LogIn from './logIn';

export default class EnterInfo extends React.Component{
    render(){
        return <div style={{
        direction: "column",
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        }} className = "container" >

            
        <form>
        <div className="form-group" >
          <label for="exampleInputEmail1">E-mail address</label>
          <input type="email" className="form-control"></input>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control"></input>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        
    }
}  

/*
<Stack spacing = {2}>
</Stack>

function Center({children}) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        {children}
      </div>
    );
  }
  
 Center();
 */