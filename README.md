## data-collector
Collects data from a datasource on interval

### Example:

```javascript
const DataCollector = require('redningsselskapet/data-collector')

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
```