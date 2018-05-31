import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { typeThunk } from '../../actions';
class FakeContainer extends Component {

  render() {
    return (
      <div>
        <button onClick={() => { typeThunk() }}>click me</button>
      </div>
    );
  }
}

FakeContainer.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = state => ({  });
const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer);
