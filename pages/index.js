export default function Page() {
  let str1 = 'Hello'
  let str2 = ' world'
  let result = false ? 'wss' : 'https'
  result += `://${str1}`
  result += str2

  console.log(result)
  return null
}
