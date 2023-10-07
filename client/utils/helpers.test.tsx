import moment from 'moment'
import { getDateDifference, getArrayFromLength } from './helpers'

describe('getDateDifference', () => {
  it('should return "x days ago" if the difference is less than or equal to 31 days', () => {
    const today = moment()
    const dateWithin31Days = today.subtract(15, 'days').format('YYYY-MM-DD')
    expect(getDateDifference(dateWithin31Days)).toBe('15 days ago')
  })

  it('should return "x weeks ago" if the difference is more than 31 days', () => {
    const today = moment()
    const dateMoreThan31Days = today.subtract(35, 'days').format('YYYY-MM-DD')
    expect(getDateDifference(dateMoreThan31Days)).toBe('5 weeks ago')
  })

  it('should return "0 days ago" if the input date is the same as the current date', () => {
    const today = moment()
    const currentDate = today.format('YYYY-MM-DD')
    expect(getDateDifference(currentDate)).toBe('0 days ago')
  })
})

describe('getArrayFromLength', () => {
  it('should return an array of the specified length', () => {
    const length = 5
    const result = getArrayFromLength(length)
    expect(result).toHaveLength(length)
  })

  it('should return an empty array if the length is 0', () => {
    const length = 0
    const result = getArrayFromLength(length)
    expect(result).toEqual([])
  })
})
