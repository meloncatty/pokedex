import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { typeThunk } from '../../actions';
class FakeContainer extends Component {

  render() {
    return (
      <div>
        <button onClick={() => { this.props.typeThunk() }}>click me</button>
      </div>
    );
  }
}

FakeContainer.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = state => ({  });

const mapDispatchToProps = dispatch => ({
  typeThunk: () => dispatch(typeThunk())
})
export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer);
