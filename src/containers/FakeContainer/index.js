import React, { Component } from 'react'
import PropTypes, { shape, func, string } from 'prop-types'
import { connect } from 'react-redux'
import { typeThunk } from '../../actions'
import loadingAnimation from '../../assets/pikaWave.gif'

class FakeContainer extends Component {

  componentDidMount() {
    this.props.typeThunk()
  }

  makeTypeCards() {
    return this.props.typesSuccess.map(type =>
      <div>{type.name}</div>
    )
  }

  render() {
    return (
      <div>
        <section className='card-container'>
        {this.makeTypeCards()}
        </section>
      </div>
    )
  }
}

FakeContainer.propTypes = {
  typeThunk: func.isRequired
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  typesSuccess: state.typesSuccess
})

const mapDispatchToProps = dispatch => ({
  typeThunk: () => dispatch(typeThunk())
})
export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer)
