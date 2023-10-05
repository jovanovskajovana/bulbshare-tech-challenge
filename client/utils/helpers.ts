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
