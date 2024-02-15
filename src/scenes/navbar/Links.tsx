import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
}

const Links = ({
    page,
}: Props) => {
  return (
 <AnchorLink>
    {page}
 </AnchorLink>
  )
}