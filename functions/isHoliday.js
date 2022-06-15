export default function isHoliday(array, day) {
  let name = undefined

  array.find(item => {
    if (item.date === day) {
      name = item.name
    }
    return item.date === day
  })

  if (name !== undefined) {
    return `Sim, hoje é ${name}`
  }

  return `Não, hoje não é feriado`
}
