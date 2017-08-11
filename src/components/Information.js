import React from 'react'
import styles from './Information.css'

const Information = () => (
  <section className={styles.informationWrapper}>
    <ul className={styles.informationList}>
      <li>正しさの保証はできません、必ずご自身でのチェックをお願いします</li>
      <li>間違いを見つけたとき、追加してほしい機能があるときなどは<a href='//twitter.com/yamasy1549' className={styles.link}>@yamasy1549</a>までご連絡ください！</li>
      <li>詳細は<a href='//github.com/yamasy1549/fulltan/wiki/fulltan%E3%80%9C%E5%8D%98%E4%BD%8D%E3%80%81%E8%B6%B3%E3%82%8A%E3%81%A6%E3%81%BE%E3%81%99%E3%81%8B%EF%BC%9F%E3%80%9C' className={styles.link}>こちら</a></li>
    </ul>
  </section>
)
export default Information
