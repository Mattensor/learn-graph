import Styles from './index.module.scss'

export const Detail: React.FC = ({ children }) => (
  <div className={Styles.description}>{children}</div>
)
