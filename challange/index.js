const xorCrypt = require("xor-crypt");
const strEncode = require("str-encode");
const toHex = require("to-hex");

// TODO : NO 1

let xor_cipher = xorCrypt("Hello World");

console.log(`Soal no 1 : ${xor_cipher}`);

// TODO : NO 2

let base64_encode = strEncode("Hello World", "base64");

console.log(`Soal no 2 : ${base64_encode}`);

// TODO : NO 3

let transform_hex = toHex("abc");

console.log(`Soal no 3 : ${transform_hex}`);
