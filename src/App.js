import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/nav';
import Header from './components/header';
import Goods from './components/goods';
import './App.css';

const List = [
  {
    url: '/home',
    text: '主页面'
  },{
    url: '/Goods',
    text: '商品页'
  }
];


function App() {
  return (
    <div className="App">
      <div className="nav-list">
        <Nav list={List}/>
      </div>
      <div className="main">
        <Route path='/home' component={Header} />
        <Route path='/goods' component={Goods} />
      </div>
    </div>
  );
}

export default App;
