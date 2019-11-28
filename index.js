const shortID = require('shortid')

module.exports = ({ fetchDataFunc, interval, name = '', workerFunc }) => {
  // private 
  let _intervalID = null
  let _isRunning = false
  const _name = name
  const _fetchDataFunc = fetchDataFunc
  const _workerFunc = workerFunc
  const _id = shortID()

  // public
  return {
    start: () => {
      _intervalID = setInterval(function () {
        _fetchDataFunc().then(data => {
          _workerFunc(data)
        })
      }, interval)
      _isRunning = true
    },
    stop: () => {
      clearInterval(_intervalID)
      _isRunning = false
    },
    isRunning: () => _isRunning,
    name: () => `${_name}-${_id}`
  }
}
