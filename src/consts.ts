export const currentYear: number = 2021

export type Grade = 1 | 2 | 3 | 4 | 5
export const grades: Grade[] = [1, 2, 3, 4, 5]

export type Course = 'M' | 'ED' | 'EJ' | 'C' | 'A'
export const courses: Course[] = ['M', 'ED', 'EJ', 'C', 'A']

export const required_credits: any = {
  "一般": 75,
  "専門": 82,
  "合計": 167
}

export const toJaTerm = (term: number): string => {
  switch(term) {
    case 0: return '通'
    case 1: return '前'
    case 2: return '後'
  }
}
