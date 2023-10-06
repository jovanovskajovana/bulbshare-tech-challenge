import moment from 'moment'

/**
 * Get the difference in number of days or weeks
 * between now and the given date.
 * @param date - given date
 * @returns string - message consisting of number and the corresponding text variant
 */
export const getDateDifference = (date: string): string => {
  const now = moment()
  const days = now.diff(date, 'days')
  const weeks = now.diff(date, 'weeks')

  if (days > 31) {
    return `${weeks} weeks ago`
  } else {
    return `${days} days ago`
  }
}

/**
 * Get an array of a given length.
 * @param length - given length
 * @returns unknown[] - array of elements of the given length
 */
export const getArrayFromLength = (length: number): unknown[] => [
  ...Array(length),
]
