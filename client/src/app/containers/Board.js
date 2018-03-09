import React from 'react';
import FetchProducts from '../actions/FetchProducts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Product from '../components/Product'

class Board extends React.Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="products-container">
        <Product products={this.props.products}
          category={this.props.category}
          color={this.props.color}
          visibleProducts={this.visibleProducts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.data,
    category: state.category,
    color: state.color,
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchProducts: FetchProducts
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);

