import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const Wrapper = styled.table``

const cell = css`
  border-bottom: 1px solid #777;
  padding: 0.5em;
`

const TH = styled.td`
  ${cell}
  font-weight: bold;
`

const TD = styled.td`
  ${cell}
`

const TR = styled.tr`
  &:hover ${TD} {
    background-color: #eee;
  }
`

const Table = ({ items }) => (
  <Wrapper>
    <TR>
      <TH>id</TH>
      <TH>name</TH>
      <TH>stage</TH>
      <TH>close date</TH>
      <TH>amount</TH>
      <TH>type</TH>
      <TH>portal id</TH>
    </TR>
    {items.map(({ id, name, stage, closeDate, amount, type, portalId }, i) => (
      <TR key={i}>
        <TD>{id}</TD>
        <TD>{name}</TD>
        <TD>{stage}</TD>
        <TD>{closeDate || '-'}</TD>
        <TD>{amount || '-'}</TD>
        <TD>{type || '-'}</TD>
        <TD>{portalId}</TD>
      </TR>
    ))}
  </Wrapper>
)
Table.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.node,
    name: PropTypes.node,
    stage: PropTypes.string,
    closeDate: PropTypes.string,
    amount: PropTypes.number,
    type: PropTypes.string,
    portalId: PropTypes.number
  })
}

export default Table
