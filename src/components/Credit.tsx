import * as React           from 'react'
import { required_credits } from '../consts'

const styles: any = require('./Credits.css')

const Credit: React.SFC<{ divide: string, credits: number }> = ({ divide, credits }) => {
  let remaining_credits = required_credits[divide] - credits
  remaining_credits = (remaining_credits > 0) ? remaining_credits : 0

  return (
    <div className={styles.creditWrapper}>
      {(() => {
        if(remaining_credits > 0) {
          return (
            <div className={styles.remainingCredits}>
              あと<span className={styles.number}>{remaining_credits}</span>
            </div>
          )
        }
      })()}
      <div className={styles.currentCredits}>
        <div className={styles.currentCreditsDivide}>{divide}</div>
        <div className={styles.number}>{credits}</div>
      </div>
    </div>
  )
}

export default Credit
