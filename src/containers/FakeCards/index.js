import React, { Component } from 'react'
import { connect } from 'react-redux'
import { categorizeThunk } from '../../actions'

export class FakeCards extends Component {
  constructor() {
    super()

    this.state = {
      toggleExpand: false
    }
  }

  handleCardClick = (categoryToToggle) => {
    const existingIds = this.props.categorizedSuccess.map(pokemon => pokemon.id)
    if(this.state.toggleExpand) {
      this.setState({
        toggleExpand: false
      })
    }
    if(!this.state.toggleExpand) {
      this.setState({
        toggleExpand: true
      })
    }
    this.props.categorizeThunk(categoryToToggle.id)
  }

  render() {
    const toggleClass = this.state.toggleExpand ? 'type-card open' : 'type-card closed'
    return (
      this.props.typesSuccess.map(type =>
        <div
          className={toggleClass}
          key={type.id}
          onClick={() => {
            console.log(this.props.typesSuccess[type.id])
            this.handleCardClick(this.props.typesSuccess[type.id])
        }}>
          <span>{type.name}</span>
          {
            this.state.toggleExpand && this.props.categorizedSuccess.map(pokemon => {
            return <section
                    className='poke-data'
                    key={pokemon.id}>
                    <p className='poke-name'>{pokemon.name}</p>
                    <p className='poke-weight'>Weight: {pokemon.weight}</p>
                    <img className='poke-image' src={pokemon.sprites.front_default} alt='Pokemon' />
                  </section>
          })}
        </div>
      )
    )
  }
}

const mapStateToProps = state => ({
  typesSuccess: state.typesSuccess,
  categorizedSuccess: state.categorizedSuccess
})

const mapDispatchToProps = dispatch => ({
  categorizeThunk: (pokemon) => dispatch(categorizeThunk(pokemon))
})

export default connect(mapStateToProps, mapDispatchToProps)(FakeCards)
