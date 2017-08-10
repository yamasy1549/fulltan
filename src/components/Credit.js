import React from 'react'

const Credit = ({ credits, required_credits }) => {
  const general = credits["一般"]
  const special = credits["専門"]
  const all = general + special
  const required = {
    general: required_credits["一般"],
    special: required_credits["専門"],
    all:     required_credits["合計"]
  }

  return (
  <div style={{position:'fixed', bottom:0, right:0}}>
    一般: {general} 単位（のこり{required.general - general}）<br />
    専門: {special} 単位（のこり{required.special - special}）<br />
    合計: {general + special} 単位（のこり{required.all - all}）
  </div>
  )
}
export default Credit
