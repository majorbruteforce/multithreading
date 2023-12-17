const crypto = require("crypto");

function generateUniqueHash() {
  const data = crypto.randomBytes(64).toString("hex");
  const hash = crypto.createHash("sha256");
  hash.update(data);
  return hash.digest("hex");
}

function generateKeyPair() {
  const keyPair = {};
  keyPair.userId = generateUniqueHash();
  keyPair.secretKey = generateUniqueHash();
  return keyPair;
}

module.exports= {generateKeyPair};
//take users name
//salt it with a random string
// generate  a sha256 uid and password
