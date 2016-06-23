import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import noop from 'lodash.noop'
import { mount } from 'enzyme'

import MeshbluDevicePicker from './'

chai.use(chaiEnzyme())

describe('<MeshbluDevicePicker />', () => {
  it('should set devices prop to [] if none is provided', () => {
    const sut = mount(<MeshbluDevicePicker />)
    expect(sut).to.have.prop('devices').deep.equal([])
  })
  it('should default onSelection prop to noop if none is provided', () => {
    const sut = mount(<MeshbluDevicePicker />)
    expect(sut).to.have.prop('onSelection').equal(noop)
  })


  //
  // it('should render an error message if state has an error property', () => {
  //   const sut = shallow(<MeshbluDevicePicker />)
  //   sut.setState({ error: new Error('BANG!') })
  //   expect(sut).to.contain('BANG!')
  // })
  //
  // it('should render an input if state has no errors', () => {
  //   const meshblu = {
  //     'uuid': 'magic-uuid',
  //     'token': 'magic-token',
  //     'server': 'meshblu.octoblu.com'
  //   }
  //   const sut = shallow(<MeshbluDevicePicker meshbluConfig={meshblu}/>)
  //   expect(sut).to.have.className('MeshbluMeshbluDevicePicker')
  // })
  //
  // describe('When meshbluConfig prop is not passed in', () => {
  //   it('should update the error state appropriately', () => {
  //     const sut = shallow(<MeshbluDevicePicker />)
  //     expect(sut.state('error').message).to.equal('No meshbluConfig')
  //   })
  // })
  //
  // describe('When meshbluConfig prop is passed in', () => {
  //
  //   describe('When meshbluConfig does not contain a server', () => {
  //     it('should update the error state appropriately', () => {
  //       const meshblu = {
  //         'uuid': 'magic-uuid',
  //         'token': 'magic-token'
  //       }
  //       const sut = mount(<MeshbluDevicePicker meshbluConfig={meshblu} />)
  //       expect(sut.state('error').message).to.equal('No server specified')
  //     })
  //   })
  //
  //   describe('When meshbluConfig does not contain a uuid/token', () => {
  //     it('should update the error state appropriately', () => {
  //       const meshblu = {
  //         'server': 'meshblu.octoblu.com'
  //       }
  //       const sut = mount(<MeshbluDevicePicker meshbluConfig={meshblu} />)
  //       expect(sut.state('error').message).to.equal('No uuid or token')
  //     })
  //   })
  // })
})
