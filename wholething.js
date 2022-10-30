import React from 'react';
import EnterInfo from './form';
import LogIn from './logIn';
import NavComponent from './navcomponent';

export default class WholeThing extends React.Component {
    render(){
        return(
        <div className = "container">
            <div><NavComponent/></div>
            <div><LogIn/></div>
            <div><EnterInfo/></div>
        </div>
        );
    }
}

console.log('hello');