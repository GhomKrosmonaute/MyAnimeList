
const prepare = require("./builder/prepare")
const make = require("./builder/make")
const validate = require('./builder/validate')

execute("built in", async () => {
  await execute("prepared in", prepare)
  await execute("makes in", make)
  await execute("validated in", validate)
}).catch(console.error)

async function execute( task, callback, ...params ){
  console.time(task)
  await callback(...params)
  console.timeEnd(task)
}