import { FC } from 'react'
import styles from './home.module.css'
import Diagram from '../../components/diagram/Diagram';

const HomePage : FC = () => {
  return (
      <main className={styles.main}>
		<h1>Diagram</h1>
    <Diagram />
    </main>
  )
}

export default HomePage;