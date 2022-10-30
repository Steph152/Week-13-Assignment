import React from 'react';

export default class NavComponent extends React.Component{
    render(){
        return <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <button className="navbar-toggler" type="button" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Ducks</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
    }
}

/*
return <nav className="navbar navbar-light navbar-expand-lg" >
        <a className ="navbar-brand" href="#">Home</a>
        <a className ="navbar-brand" href="#">Ducks</a>
        <a className ="navbar-brand" href="#">About</a>
        <a className ="navbar-brand" href="#">Contact</a>
        </nav>

        */