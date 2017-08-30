import * as React from 'react'

const styles: any = require('./Title.css')

const Title: React.SFC<{}> = () =>
  <section className={styles.titleWrapper}>
    <h1 className={styles.title}>fulltan</h1>
    <p className={styles.lead}>
      単位、足りてますか？
    </p>
  </section>

export default Title
