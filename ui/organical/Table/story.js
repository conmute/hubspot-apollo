import React from 'react'
import { storiesOf } from '@storybook/react'
import Table from './index'

const data = [
  {
    id: '911953326',
    name: 'fhdfgh',
    stage: 'appointmentscheduled',
    closeDate: '2019-08-02T10:22:30.834Z',
    amount: null,
    type: null,
    portalId: 6217533
  },
  {
    id: '911957031',
    name: 'lost',
    stage: 'closedlost',
    closeDate: '2019-08-02T10:22:10.769Z',
    amount: null,
    type: null,
    portalId: 6217533
  },
  {
    id: '911957032',
    name: 'zxcqwe123',
    stage: 'appointmentscheduled',
    closeDate: '2019-08-02T10:22:23.896Z',
    amount: null,
    type: null,
    portalId: 6217533
  },
  {
    id: '911957132',
    name: 'ASd',
    stage: 'qualifiedtobuy',
    closeDate: '2019-08-02T10:21:31.512Z',
    amount: null,
    type: null,
    portalId: 6217533
  },
  {
    id: '911960534',
    name: 'qwe123',
    stage: 'appointmentscheduled',
    closeDate: '2019-08-02T10:21:45.150Z',
    amount: 2,
    type: null,
    portalId: 6217533
  },
  {
    id: '911960638',
    name: 'zxccvbcdsasdf',
    stage: 'decisionmakerboughtin',
    closeDate: '2019-08-02T10:21:56.330Z',
    amount: null,
    type: null,
    portalId: 6217533
  }
]

storiesOf('Organical', module).add('Table', () => <Table items={data} />)
