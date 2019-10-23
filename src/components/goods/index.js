import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../action/goods';
import './index.css'

const goods = [{
  name: 'iPhone 7',
  price: '6,888',
  amount: 37
}, {
  name: 'iPad',
  price: '3,488',
  amount: 82
}, {
  name: 'MacBook Pro',
  price: '11,888',
  amount: 15
}];

class Goods extends React.Component{
  constructor(){
    super()
    this.state = {

    }
  }

  componentDidMount(){
    let dispatch = this.props.dispatch;
    dispatch(actions.getGoods(goods));
  }

  render (){
    const { goods } = this.props;
    return (
      <ul className="goods">
        { goods.map((item,index) => (
          <li key={index} className='list'>
            <span>{ item.name }</span>
            { item.price && <span> | ${ item.price }</span> }
            { item.amount && <span> | 剩余：{ item.amount }</span> }
          </li>
        ))}
      </ul>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  goods: state.goods.data
});
export default connect(mapStateToProps)(Goods);