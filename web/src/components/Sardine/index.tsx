import { useGetSardineQuery } from '@graph'
import Styles from './styles.module.scss'
import { Title } from '../Title'
import { Detail } from '../Detail'

interface Props {
  id: string
}

export const Sardine: React.FC<Props> = ({ id }) => {
  const { data, loading } = useGetSardineQuery({ variables: { id } })

  if (loading) return <div>loading</div>

  const sardine = data?.getSardine

  if (!sardine) return <div>lost in the ocean</div>

  const { name, potency, age, source } = sardine

  return (
    <main className={Styles.page}>
      <Title>{`You've got to meet ${name}`}</Title>

      <div className={Styles.details}>
        <Detail>{`The potency is ${potency}`}</Detail>
        <Detail>{`I am ${age}`}</Detail>
        <Detail>{`and I live in the ${source}`}</Detail>
      </div>
    </main>
  )
}
