'use client'
import Mesages from './components/Mesages'
import styles from './page.module.css'
export default function Home() {
  return (
   <div className={styles.main}>
    <Mesages/>
    {/* <Mesages/> */}
   </div>
  )
}
