import React from 'react'

import { grades, courses, toClasscode } from '../consts'

const ClassOption = ({ grade, course, g, c, set_classcode }) => {
  const classcode = toClasscode(g, c)

  return (
    <span key={classcode}>
      <input
        id={classcode}
        type="radio"
        checked={grade == g && course == c}
        onChange={() => set_classcode(g, c)}
      />
      <label htmlFor={classcode}>{classcode}</label>
    </span>
  )
}

const Select = ({ grade, course, set_classcode }) => (
  <div>
    <span>クラスを選択</span>
    <form>
      {grades.map(g => {
        return courses.map(c => {
          return (
            <ClassOption
              grade={grade}
              course={course}
              g={g}
              c={c}
              set_classcode={set_classcode}
            />
          )
        })
      })}
    </form>
  </div>
)
export default Select
