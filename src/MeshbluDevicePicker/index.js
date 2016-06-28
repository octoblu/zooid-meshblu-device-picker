import React, { PropTypes } from 'react'
import Select from 'react-select'
import noop from 'lodash.noop'

// import styles from './styles.css'

import 'react-select/dist/react-select.css'

const defaultProps = {
  devices: [],
  onSelection: noop,
}

const propTypes = {
  devices: PropTypes.array,
  onSelection: PropTypes.func,
}

class MeshbluDevicePicker extends React.Component {

  state = {}

  handleSelect = (device) => {
    this.setState({selectedDevice: device})
    this.props.onSelection(device)
  }

  render = () => {
    return (
      <Select
        options={this.props.devices}
        onChange={this.handleSelect}
        placeholder="Device name..."
        matchProp="any"
        labelKey="name"
        valueKey="name"
        value={this.state.selectedDevice}
        optionRenderer={({ name, uuid }) => {
          if (name) return <span>{name}</span>

          return <span>{uuid}</span>
        }}
      />
    )
  }

}

MeshbluDevicePicker.propTypes    = propTypes
MeshbluDevicePicker.defaultProps = defaultProps

export default MeshbluDevicePicker
