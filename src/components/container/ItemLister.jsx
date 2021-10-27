import React from 'react';
import {connect} from 'react-redux';
import {fetchItemLister, ITEM_LISTER_FAILURE, ITEM_LISTER_INITIATED} from '../../actions/itemLister';

class ItemLister extends React.Component {
  componentDidMount() {
      this.props.getItemLister()
  }

  render() {
    if (this.props.itemLister.status === ITEM_LISTER_INITIATED) {
      return <div>...LOADING</div>
    }
    if (this.props.itemLister.status === ITEM_LISTER_FAILURE) {
      return <div>...DATA LOADING FAILED</div>
    }
    return (
      <div>
        <div>Items:</div>
        {this.props.itemLister?.data?.data.map( item => {
          return (
            <div key={item.email}>
              <div> {item.name} {'   '} {item.email}</div>
              <img src={item.avatar} />
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemLister: state.itemLister
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItemLister: () => {
      dispatch(fetchItemLister());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemLister);
