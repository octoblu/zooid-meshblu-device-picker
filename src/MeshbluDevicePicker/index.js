import React, { PropTypes } from 'react'
import Select from 'react-select'
import noop from 'lodash.noop'

// import styles from './styles.css'

import 'react-select/dist/react-select.css'

const propTypes = {
  devices: PropTypes.array,
  onSelection: PropTypes.func,
}

const defaultProps = {
  devices: [],
  onSelection: noop,
}

const MeshbluDevicePicker = ({ devices, onSelection }) => {
  return (
    <Select
      options={devices}
      onChange={onSelection}
      placeholder="Device name..."
      matchProp="name"
      labelKey="name"
      optionRenderer={({ name, uuid }) => {
        if (name) return <span>{name}</span>

        return <span>{uuid}</span>
      }}
    />
  )
}

MeshbluDevicePicker.propTypes    = propTypes
MeshbluDevicePicker.defaultProps = defaultProps

export default MeshbluDevicePicker
