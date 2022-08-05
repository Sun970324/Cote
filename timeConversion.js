function timeConversion(s) {
  // Write your code here
  const AMPM = s.slice(-2)
  let hour = Number(s.slice(0,2))
  if(AMPM === 'PM' && hour !== 12) {
    hour = hour+12
  }
  if(AMPM === 'AM' && hour === 12) {
    hour = '00'
  }
  const result = String(hour).length === 1? `0${hour}${s.slice(2,-2)}` :`${hour}${s.slice(2,-2)}`
  return result
}
timeConversion('12:45:54PM')