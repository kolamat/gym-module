import { SelectedPage } from '../../../shared/types'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const home = ({setSelectedPage} : Props) => {
  return (
    <div>home</div>
  )
}

export default home