const DataCollector = require('../')

myDataCollector = DataCollector({
  fetchDataFunc: () => Promise.resolve('data'),
  interval: 2000,
  name: 'test-collector',
  workerFunc: data => console.log('work done on data')
})



myDataCollector.start() // start collecting
myDataCollector.stop() // stop collecting
myDataCollector.isRunning() // return true | false
myDataCollector.name() // returns name + unique id 
