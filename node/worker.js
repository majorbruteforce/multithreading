const { WorkerData, parentPort } = require("worker_threads");
const { generateKeyPair } = require("./tokenizer");

const KeyPair= generateKeyPair();

parentPort.postMessage(KeyPair);
