import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types';

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage)
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
      <AnchorLink>
          {children}
    </AnchorLink>
  )
}

export default ActionButton