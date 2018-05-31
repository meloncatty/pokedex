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
  typesSuccess: state.typesSuccess
})

const mapDispatchToProps = dispatch => ({
  typeThunk: () => dispatch(typeThunk()),
  categorizeThunk: (ids) => dispatch(categorizeThunk(ids)),
  categorizedSuccess: (pokemon) => dispatch(categorizedSuccess(pokemon))
})
export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer)
