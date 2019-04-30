window.addEventListener('load', async () => {
  console.log('Hello!')
  const response = await fetch('https://kas-workshop-api.netlify.com/polls/0.json')
  const json = await response.json()
  console.log(json)
})
