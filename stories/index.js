import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Example from './Example'


const meshbluConfig = {
  uuid: '999ad5a1-74c8-11e4-96f2-b7ea45e5c402',
  token: '537c1192f16b7e06af7d742bc7f209c9aa351740',
  server: 'meshblu.octoblu.com',
}

storiesOf('Device Picker', module)
  .add('With meshbluConfig ', () => (
    <Example meshbluConfig={meshbluConfig} />
  ))
