import * as React from 'react'

export default function ModelList(props) {
  return (<div>
    <select>
      {props.models.map(model =>
        <option key={model.name} onChange={() => props.selectModel(model.name)}>
          {model.name}(
          {model.year}
          )
        </option>
      )}
    </select>
  </div>)
}