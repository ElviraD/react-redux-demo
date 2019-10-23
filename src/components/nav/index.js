import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Nav = props => (
  <ul className="nav">
    { props.list.map((item, index) => (
      <Link to={item.url} key={index}>
        <li>{ item.text }</li>
      </Link> 
    ))}
  </ul>
)

export default Nav;