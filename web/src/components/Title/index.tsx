import Styles from './styles.module.scss'

export const Title: React.FC = ({ children }) => {
  return <h1 className={Styles.title}>{children}</h1>
}
