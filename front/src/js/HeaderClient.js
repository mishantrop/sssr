import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from './store';
import { bindActionCreators } from 'redux';
import * as clientActions from './store/actions/client';
import console from 'console';

class HeaderClient extends React.Component {
  static propTypes = {
    client: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    client: null,
  };

  componentDidMount() {
    // store.dispatch(fetchClient());
  }

  render() {
    const { client } = this.props;

    console.log(client);

    return client !== null && (
      <div className="header-client">
        {client.name}
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    client: state.client,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(clientActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderClient);
