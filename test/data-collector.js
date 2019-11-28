const DataCollector = require('../')

myDataCollector2 = DataCollector({
  fetchDataFunc: () => Promise.resolve('Collect data2'),
  interval: 1000,
  name: 'collector2',
  workerFunc: data => console.log('Work on data2 done.')
})

myDataCollector1 = DataCollector({
  fetchDataFunc: () => Promise.resolve('Collect data1'),
  interval: 1000,
  name: 'collector1',
  workerFunc: data => console.log('work on data1 done')
})

myDataCollector2.start()
myDataCollector1.start()

console.log(myDataCollector1.name())
console.log(myDataCollector2.name())
console.log('Collector2 is running? ' + myDataCollector2.isRunning())

setTimeout(()=>{myDataCollector1.stop()}, 2000)
setTimeout(()=>myDataCollector2.stop(), 7000)

setTimeout(()=>console.log('Collector1 is running? ' + myDataCollector1.isRunning()), 8000)
setTimeout(()=>console.log('Collector1 is running? ' + myDataCollector1.isRunning()), 2000)

setTimeout(()=>console.log('Collector2 is running? ' + myDataCollector2.isRunning()), 8000)
setTimeout(()=>console.log('Collector1 is running? ' + myDataCollector2.isRunning()), 2000)