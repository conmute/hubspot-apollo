import React from 'react'
import { storiesOf } from '@storybook/react'
import Menu from './index'

storiesOf('molecular', module).add('Menu', () => (
  <>
    <Menu
      links={[
        { label: 'Menu item 1', href: '#' },
        { label: 'Menu item 2', href: '#' }
      ]}
    />
  </>
))
