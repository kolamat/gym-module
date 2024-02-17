import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {}

const ActionButton = ({children}: Props) => {
  return (
      <AnchorLink>
          {children}
    </AnchorLink>
  )
}

export default ActionButton