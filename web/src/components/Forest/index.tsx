import { Card, Title } from '@components'
import { useFetchTreeQuery } from '@graph'
import Styles from './styles.module.scss'

export const Forest: React.FC = () => {
  useFetchTreeQuery({ variables: { id: '1' } })

  return (
    <main className={Styles.forest}>
      <Title>
        Welcome to <a href="#">The Forest</a>
      </Title>

      <p className={Styles.description}>
        Get started by editing <code>pages/index.js</code>
      </p>

      <div className={Styles.grid}>
        <Card to="https://#">
          <h3>Tree 1</h3>
          <p>Find in depth tree 1 info</p>
        </Card>

        <Card to="https://#">
          <h3>Tree 2</h3>
          <p>Learn about Tree 2</p>
        </Card>

        <Card to="https://#">
          <h3>Tree 3</h3>
          <p>Discover and Tree 3</p>
        </Card>

        <Card to="https://#">
          <h3>Tree 4</h3>
          <p>Instantly find out about Tree 4</p>
        </Card>
      </div>
    </main>
  )
}
