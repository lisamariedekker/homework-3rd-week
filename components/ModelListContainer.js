import * as React from 'react'
import ModelList from './ModelList'
import { connect } from 'react-redux'

class ModelListContainer extends React.Component {
  selectModel = (name) => {
    this.props.dispatch({
      type: 'SELECT_MODEL',
      payload: name
    })
  }

  render() {
    return <ModelList models={this.props.models} selectModel={this.selectModel} />
  }
}

const mapStateToProps = (state) => {
  return {
    models: state.models
  }
}

export default connect(mapStateToProps)(ModelListContainer)