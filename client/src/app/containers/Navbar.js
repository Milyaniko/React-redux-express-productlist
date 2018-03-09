import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FilterCategory from '../components/FilterCategory';
import FilterColor from '../components/FilterColor';
import CategoryFilter from '../actions/CategoryFilter';
import ColorFilter from '../actions/ColorFilter';

class Navbar extends React.Component {

  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-title">Products Page</div>
          <FilterCategory 
            products={this.props.products}
            isFetching={this.props.isFetching}
            categoryFilter={this.props.categoryFilter} />
          <FilterColor 
            products={this.props.products}
            isFetching={this.props.isFetching}
            colorFilter={this.props.colorFilter} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      products: state.products.data,
      isFetching: state.products.isFetching
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      colorFilter: ColorFilter,
      categoryFilter: CategoryFilter
    }, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
  