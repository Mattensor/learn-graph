import { Card, Title } from '@components'
import Styles from './styles.module.scss'
import Image from 'next/image'
import { useAllTheSardinesQuery } from '@graph'

export const TheOcean: React.FC = () => {
  const { data, loading } = useAllTheSardinesQuery()

  if (loading) return <div>loading</div>

  const sardines = data && data.sardines

  return (
    <main className={Styles.ocean}>
      <Title>
        There are <a href="#">{`${sardines?.length || 'empty'} Sardines`}</a>
      </Title>

      <div className={Styles.grid}>
        {sardines &&
          sardines.map(({ id, name }) => (
            <Card key={id} to={`sardine/${id}`}>
              <h3>{`meet ${name}`}</h3>
              <Image src="/sardine.png" width="auto" height="200px" />
            </Card>
          ))}
      </div>
    </main>
  )
}
