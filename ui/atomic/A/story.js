import React from 'react'
import { storiesOf } from '@storybook/react'
import A from './index'

storiesOf('atomic', module).add('A', () => (
  <>
    <A>Label</A>
  </>
))
