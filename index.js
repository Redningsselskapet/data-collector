const shortID = require('shortid')

module.exports = ({ fetchDataFunc, interval, name = '', workerFunc }) => {
  let intervalID = null
  let isRunning = false
  const id = shortID()
  return {
    start: () => {
      intervalID = setInterval(() => {
        fetchDataFunc()
          .then(data => {
            workerFunc(data)
          })
      }, interval)
      isRunning = true
    },
    stop: () => {
      clearInterval(intervalID)
      intervalID = null
      isRunning = false
    },
    isRunning: () => {
      return isRunning
    },
    name: () => {
      return `${name}-${id}`
    }
  }
}
