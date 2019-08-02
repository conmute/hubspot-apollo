import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import A from '~/ui/atomic/A'

const Wrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Item = styled.li`
  display: inline-block;
`

const StyledA = styled(A)`
  padding: 0.5em;

  &:hover {
    background-color: #eee;
  }
`

const Menu = ({ links }) => (
  <Wrapper>
    {links.map(({ label, href, ...rest }, i) => (
      <Item key={i}>
        <StyledA href={href} {...rest}>
          {label}
        </StyledA>
      </Item>
    ))}
  </Wrapper>
)
Menu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
      href: PropTypes.string
    })
  )
}
Menu.defaultProps = {
  links: []
}

export default Menu
