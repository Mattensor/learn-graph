import Styles from './styles.module.scss'

export const Footer: React.FC = () => {
  return (
    <footer className={Styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/vercel.svg" alt="Vercel Logo" className={Styles.logo} />
      </a>
    </footer>
  )
}
