const prepare = require("./builder/prepare");
const validate = require("./builder/validate");
const make = require("./builder/make");

execute("built in", async () => {
  await execute("prepared in", prepare);
  const validated = await execute("validated in", validate);
  await execute("makes in", make, validated);
}).catch(console.error);

async function execute(task, callback, ...params) {
  console.time(task);
  const result = await callback(...params);
  console.timeEnd(task);
  return result;
}
