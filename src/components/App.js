import React                from 'react'
import SelectContainer      from '../containers/SelectContainer'
import CurriculumsContainer from '../containers/CurriculumsContainer'
import CreditContainer      from '../containers/CreditContainer'
import Title                from '../components/Title'
import Information          from '../components/Information'
import reset                from '../components/reset.css'
import base                 from '../components/base.css'
import styles               from '../components/App.css'

const App = () => (
  <div className={styles.app}>
    <Title />
    <SelectContainer />
    <CurriculumsContainer />
    <Information />
    <div className={styles.twitter}>
      <a
        href='//twitter.com/share'
        className='twitter-share-button'
        data-url='http://yamasy.info/fulltan/'
        data-text='fulltan〜単位、足りてますか？〜'
      >Tweet</a>
    </div>
    <CreditContainer />
  </div>
)
export default App
