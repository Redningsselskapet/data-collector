const shortID = require('shortid')

module.exports = ({ fetchDataFunc, interval, name = '', workerFunc }) => {
  let _intervalID = null
  let _isRunning = false
  const _id = shortID()
  const _start = () => {
    _intervalID = setInterval(function () {
      fetchDataFunc().then(data => {
        workerFunc(data)
      })
    }, interval)
    _isRunning = true
  }

  const _stop = () => {
    clearInterval(_intervalID)
    _isRunning = false
  }
  return {
    start: () => {
      _start()
    },
    stop: () => {
      _stop()
    },
    isRunning: () => _isRunning,
    name: () => `${name}-${_id}`
  }
}
