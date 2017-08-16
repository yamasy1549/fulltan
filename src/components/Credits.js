import React                from 'react'
import { inject, observer } from 'mobx-react'
import Credit               from './Credit'
import styles               from './Credits.css'

@inject('curriculumList')
@observer
export default class Credits extends React.Component {
  render() {
    const credits = this.props.curriculumList.gotCredits

    return (
      <section className={styles.creditsWrapper}>
        <Credit divide={'一般'} credits={credits['一般']} />
        <span className={styles.creditsSymbol}>+</span>
        <Credit divide={'専門'} credits={credits['専門']} />
        <span className={styles.creditsSymbol}>=</span>
        <Credit divide={'合計'} credits={credits['一般'] + credits['専門']} />
      </section>
    )
  }
}
