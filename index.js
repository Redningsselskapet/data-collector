const shortID = require('shortid')

module.exports = ({ fetchDataFunc, interval, name = '', workerFunc }) => {
  let intervalID = null
  const id = shortID()
  return {
    start: () => {
      intervalID = setInterval(() => {
        fetchDataFunc()
          .then(data => {
            workerFunc(data)
          })
      }, interval)
    },
    stop: () => {
      clearInterval(intervalID)
      intervalID = null
    },
    isRunning: () => {
      return intervalID !== null
    },
    name: () => {
      return `${name}-${id}`
    }
  }
}
