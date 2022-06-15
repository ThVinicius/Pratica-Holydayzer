export default function holidaysOfTheMonth(array, month) {
  const aux = array.filter(
    ({ date }) => month === date.slice(0, date.indexOf('/'))
  )

  return aux
}
