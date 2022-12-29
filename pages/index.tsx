import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Homepage from './home'

export default function Home() {
  const path = '/dashboard'
  return (
    <>
      <main className={styles.main}>
        <Homepage></Homepage>
        
      </main>
    </>
  )
}
