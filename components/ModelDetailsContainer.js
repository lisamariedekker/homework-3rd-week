import * as React from 'react'
import { connect } from 'react-redux'
import ModelDetails from './ModelDetails';

class ModelDetailsContainer extends React.Component {
  render() {
    const model = this.props.model
    if (!model) return null

    return <ModelDetails model={model} />
  }
}

const mapStateToProps = (state) => {
  if (state.selectedModel !== null) {
    return {
      model: state.models.find(model => model.name === state.selectedModel)
    }
  }
  return {}
}

export default connect(mapStateToProps)(ModelDetailsContainer)