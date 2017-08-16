export const heiseiYear = 29 // 平成
export const grades = [1, 2, 3, 4, 5]
export const courses = ['M', 'ED', 'EJ', 'C', 'A']

export const required_credits = {
  "一般": 75,
  "専門": 82,
  "合計": 167
}

export const toJaTerm = (term) => {
  switch(term) {
    case 0: return '通'
    case 1: return '前'
    case 2: return '後'
  }
}
