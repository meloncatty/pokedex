import React, { Component } from 'react'
import PropTypes, { func } from 'prop-types'
import { connect } from 'react-redux'
import { typeThunk, categorizeThunk } from '../../actions'
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
    const existingIds = this.props.categorizedSuccess.map(pokemon => pokemon.id)
    const checkExisting = ids.find(id => existingIds.includes(id))

     ids.map(mon => this.props.categorizeThunk(mon))

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
          this.state.toggleExpand && this.props.categorizedSuccess.map((pokemon, index) => {
          return <section
                  className='poke-data'
                  key={index}>
                  <p className='poke-name'>{pokemon.name}</p>
                  <p className='poke-weight'>{pokemon.weight}</p>
                  <img className='poke-image' src={pokemon.sprites.front_default} alt='Pokemon' />
                </section>
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
