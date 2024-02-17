import { SelectedPage } from '../../../shared/types'
import useMediaQuery from '../../../hooks/useMediaQuery'
import ActionButton from '../../../shared/ActionButton'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const home = ({setSelectedPage} : Props) => {
  return (
    <div>home</div>
  )
}

export default home