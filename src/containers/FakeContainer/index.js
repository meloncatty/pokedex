import React, { Component } from 'react'
import PropTypes, { shape, func, string } from 'prop-types'
import { connect } from 'react-redux'
import { typeThunk, categorizeThunk, categorizedSuccess } from '../../actions'
import pikaWave from '../../assets/pikaWave.gif'

class FakeContainer extends Component {

  constructor() {
    super()

    this.state = {
      toggleExpand: false
    }
  }

  componentDidMount() {
    this.props.typeThunk()
  }

  handleCardClick = (ids) => {
    const checkExistingCategory = this.props.categorizedSuccess.filter(pokemon => ids.includes(pokemon.id))
    return checkExistingCategory.length
      ? this.props.categorizedSuccess
      : ids.map(mon => this.props.categorizeThunk(mon))
  }

  toggleExpand = () => {
    const updateStatus = this.state.toggleExpand ? false : true
    this.setState({
      toggleExpand: updateStatus
    })
  }

  makeTypeCards() {
    const toggleClass = this.state.toggleExpand ? 'type-card open' : 'type-card closed'
    return this.props.typesSuccess.map((type, index) =>
      <div
        className={toggleClass}
        key={index}
        onClick={() => {
          this.handleCardClick(type.pokemon)
          this.toggleExpand()
      }}>
        <span>{type.name}</span>
        {
          this.state.toggleExpand && this.props.categorizedSuccess.length > 0 && this.props.categorizedSuccess.map(pokemon => {
          return <section className='poke-data'><p>{pokemon.name}</p><p>{pokemon.weight}</p><img src={pokemon.sprites} /></section>
        })}
      </div>
    )
  }

  render() {
    return (
      <div className='card-flex'>
        <section className='card-container'>
        {this.props.catIsLoading || this.props.isLoading ? <img src={pikaWave} alt='Loading' /> : this.makeTypeCards()}
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
  catIsLoading: state.catIsLoading,
  typesSuccess: state.typesSuccess,
  categorizedSuccess: state.categorizedSuccess
})

const mapDispatchToProps = dispatch => ({
  typeThunk: () => dispatch(typeThunk()),
  categorizeThunk: (ids) => dispatch(categorizeThunk(ids))
})
export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer)
