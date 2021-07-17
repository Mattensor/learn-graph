import { useRouter } from 'next/router'
import { Sardine } from '@components'

const Home: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  return <Sardine id={id as string} />
}

export default Home
