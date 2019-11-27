const DataCollector = require('../')

myDataCollector2 = DataCollector({
  fetchDataFunc: () => Promise.resolve('data2'),
  interval: 1000,
  name: 'jabba dabba',
  workerFunc: data => console.log('work done on data2')
})

myDataCollector = DataCollector({
  fetchDataFunc: () => Promise.resolve('data'),
  interval: 1000,
  name: 'test-collector',
  workerFunc: data => console.log('work done on data')
})

myDataCollector2.start()
myDataCollector.start()

console.log(myDataCollector2.name())
console.log(myDataCollector.name())
console.log(myDataCollector2.isRunning())
setTimeout(()=>{myDataCollector.stop()}, 4000)
setTimeout(()=>myDataCollector2.stop(), 5000)

setTimeout(()=>console.log(myDataCollector.isRunning()), 8000)
setTimeout(()=>console.log(myDataCollector.isRunning()), 2000)

setTimeout(()=>console.log(myDataCollector.isRunning()), 8000)
setTimeout(()=>console.log(myDataCollector.isRunning()), 2000)
/*
const id1 = setInterval(() => {
  console.log('worker1')
}, 2000);

const id2 = setInterval(() => {
  console.log('worker2')
}, 2000);

setTimeout(() => {
  clearInterval(id1)
}, 4000);

setTimeout(() => {
  clearInterval(id2)
}, 8000); */