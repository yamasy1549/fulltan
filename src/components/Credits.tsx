import * as React           from 'react'
import { inject, observer } from 'mobx-react'
import CurriculumListStore  from '../stores/CurriculumListStore'
import Credit               from './Credit'

const styles: any = require('./Credits.css')

@inject('curriculumList')
@observer
export default class Credits extends React.Component<{ curriculumList?: CurriculumListStore }, {}> {
  render() {
    const credits: any = this.props.curriculumList.gotCredits

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
