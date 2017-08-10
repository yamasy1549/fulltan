import React from 'react'

const Curriculum = ({ curriculum, grade, toggleCredit }) => (
  <form>
    {curriculum.map(c => {
      return (
        <p key={c.id}>
          <input
            id={c.id}
            type="checkbox"
            defaultChecked={c.required}
            onChange={(e) => toggleCredit(c.id, e.target.checked)}
          />
          <label htmlFor={c.id}>{c.title} [{c.credit}]</label>
        </p>
      )
    })}
  </form>
)

const Curriculums = ({ curriculums, toggleCredit }) => (
  <div>
    {curriculums.map((curriculums_of_grade, i) => {
      const grade = i+1
      return (
        <div key={grade}>
          <h3>{parseInt(grade)}年次</h3>
          <Curriculum curriculum={curriculums_of_grade} grade={grade} toggleCredit={toggleCredit} />
        </div>
      )
    })}
  </div>
)
export default Curriculums
