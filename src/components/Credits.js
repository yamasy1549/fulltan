import React from 'react'
import styles from './Credits.css'

const Credit = ({ divide, credits, required_credits }) => {
  let remaining_credits = required_credits - credits
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

const Credits = ({ credits, required_credits }) => {
  const general = credits["一般"]
  const special = credits["専門"]
  const all = general + special
  const required = {
    general: required_credits["一般"],
    special: required_credits["専門"],
    all:     required_credits["合計"]
  }

  return (
    <section className={styles.creditsWrapper}>
      <Credit divide={'一般'} credits={general} required_credits={required.general} />
      <span className={styles.creditsSymbol}>+</span>
      <Credit divide={'専門'} credits={special} required_credits={required.special} />
      <span className={styles.creditsSymbol}>=</span>
      <Credit divide={'合計'}     credits={all}     required_credits={required.all} />
    </section>
  )
}
export default Credits
