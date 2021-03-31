const prepare = require("./builder/prepare")
const validate = require("./builder/validate")
const make = require("./builder/make")

;(async () => {
  await execute("Convert new anime images to anime data", prepare)
  const validated = await execute("Check anime data and format it", validate)
  await execute("Write page with anime data", make, validated)
})().catch(console.error)

async function execute(task, callback, ...params) {
  console.time(task)
  const result = await callback(...params)
  console.timeEnd(task)
  return result
}
