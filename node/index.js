const { Worker } = require("worker_threads");
const { generateKeyPair } = require("./tokenizer");
const ping = performance.now();

function newPair(WorkerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", { WorkerData });
    worker.on("message", resolve);
    worker.on("error", reject);
  });
}

(async function () {
  const result = [];
  for (i = 0; i < 1e6; i++) {
    result.push(await newPair(i));
  }
  //   console.log(await result);
  console.log("Worker: ", performance.now() - ping);
})();

(function () {
  const result = [];
  for (i = 0; i < 1e6; i++) {
    result.push(generateKeyPair());
  }
  // console.log(result)
  console.log("No Worker: ", performance.now() - ping);
})();
