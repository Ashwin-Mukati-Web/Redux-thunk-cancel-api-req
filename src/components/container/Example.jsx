import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from '../presentational/List.jsx';
import {fetchList} from '../../actions/list';
import isEmpty from 'lodash.isempty';
import {INITIATED} from '../../actions/list'

class Example extends Component {
  render() {
    if (this.props.list.status === INITIATED) {
      return <div>Loading...</div>;
    }
    if (!isEmpty(this.props.list.data)) {
      return (
        <div>
          <h2>The list below is being pulled via the usual http external api.</h2>
          <List list={this.props.list.data} />
        </div>
      );
    } else {
      return null;
    }
  }

  componentDidMount() {
    this.props.getList();
  }
}

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getList: () => {
      dispatch(fetchList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);
