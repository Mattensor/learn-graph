import Styles from './styles.module.scss'

interface Props {
  to: string
}

export const Card: React.FC<Props> = ({ children, to }) => (
  <a href={to} className={Styles.card}>
    {children}
  </a>
)
