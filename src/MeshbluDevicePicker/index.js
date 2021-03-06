import React, { PropTypes } from 'react'
import Select from 'react-select'
import noop from 'lodash.noop'

import 'react-select/dist/react-select.css'

const propTypes = {
  devices: PropTypes.array,
  onSelection: PropTypes.func,
  defaultDevice: PropTypes.object
}

const defaultProps = {
  devices: [],
  onSelection: noop,
  defaultDevice: null
}

class MeshbluDevicePicker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedDevice: this.props.defaultDevice
    }
  }

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
