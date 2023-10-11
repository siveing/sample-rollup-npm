"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessage = void 0;
function getMetaData(username) {
    return {
        username,
        age: 21,
        dob: '080400'
    };
}
exports.default = getMetaData;
;
const getMessage = (username) => {
    return `Hello everyone, My name is ${username}, I have established one npm packages called "khmer date".`;
};
exports.getMessage = getMessage;
