import React, { Component } from 'react'
import PropTypes, { shape, func, string } from 'prop-types'
import { connect } from 'react-redux'
import { typeThunk, categorizeThunk, categorizedSuccess } from '../../actions'
import loadingAnimation from '../../assets/pikaWave.gif'

class FakeContainer extends Component {

  componentDidMount() {
    this.props.typeThunk()
  }

  handleCardClick = (ids) => {
    ids.map(mon => this.props.categorizeThunk(mon))
  }

  makeTypeCards() {
    return this.props.typesSuccess.map((type, index) =>
      <div className='type-card' key={index} onClick={() => {this.handleCardClick(type.pokemon)}}>{type.name}</div>
    )
  }

  render() {
    return (
      <div className='card-flex'>
        <section className='card-container'>
        {this.makeTypeCards()}
        </section>
      </div>
    )
  }
}

FakeContainer.propTypes = {
  typeThunk: func.isRequired,
  categorizeThunk: func.isRequired
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  typesSuccess: state.typesSuccess
})

const mapDispatchToProps = dispatch => ({
  typeThunk: () => dispatch(typeThunk()),
  categorizeThunk: (ids) => dispatch(categorizeThunk(ids)),
  categorizedSuccess: (pokemon) => dispatch(categorizedSuccess(pokemon))
})
export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer)
