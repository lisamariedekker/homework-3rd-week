import * as React from 'react'

export default function ModelDetails(props) {
  const model = props.model
  return (<main>
    <ul>
      <li>{model.name}</li>
      <li>{model.manufacturer}</li>
      <li>{model.year}</li>
      <li>{model.origin}</li>
    </ul>
  </main>)
}