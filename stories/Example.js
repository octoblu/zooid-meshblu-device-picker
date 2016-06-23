import axios from 'axios'
import MeshbluDevicePicker from '../src'
import React, { PropTypes } from 'react'

const propTypes = {
  meshbluConfig: PropTypes.object,
}

class Example extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      devices: [],
      error: null,
      loading: true,
    }

    this.handleDeviceSelection = this.handleDeviceSelection.bind(this)
  }

  componentWillMount() {
    if (!this.props.meshbluConfig) {
      this.setState({ error: new Error('No meshbluConfig'), loading: false })
      return
    }

    const { uuid, token, server } = this.props.meshbluConfig

    if (!server) {
      this.setState({ error: new Error('No server specified'), loading: false })
      return
    }

    if (!uuid || !token) {
      this.setState({ error: new Error('No uuid or token'), loading: false })
      return
    }

    const meshbluRequest = axios.create({
      baseURL: `https://${server}`,
      headers: {
        meshblu_auth_uuid: uuid,
        meshblu_auth_token: token,
      },
    })

    meshbluRequest.get('/mydevices')
      .then((response) => {
        console.log('Response!', response.data.devices)
        this.setState({ devices: response.data.devices, loading: false })
      })
      .catch((error) => {
        this.setState({ error: new Error(error.statusText), loading: false })
      })
  }

  handleDeviceSelection(e) {
    console.log('BOOM', e)
  }

  render() {
    const { devices, error, loading } = this.state

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return <MeshbluDevicePicker devices={devices} onSelection={this.handleDeviceSelection} />
  }
}

Example.propTypes = propTypes

export default Example
