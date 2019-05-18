import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {BasketAction} from '../actions/BasketAction';

class Basket extends React.Component {
    render(){
        let totalPrice = 0;
        const basketlist = this.props.basketState.list.map(item=>{
            totalPrice += item.price;
            return <li key={'basket_row_'+item.id}>{item.name}</li>
        });
      return (
          <>
              SEPET
          <ul>
              {basketlist}
              <li>Total Price : {totalPrice} $</li>
          </ul>
              </>
      )
    }

}

function mapStateToProps(state){
    return {
        basketState: state.basket
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        basketAction: BasketAction
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Basket);