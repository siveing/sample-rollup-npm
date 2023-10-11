"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importStar(require("../src"));
const chai_1 = require("chai");
describe("#Get Message", () => {
    it("Give basic message: siveing, should return siveing", () => {
        chai_1.assert.equal((0, src_1.getMessage)('siveing'), 'Hello everyone, My name is siveing, I have established one npm packages called "khmer date".');
    });
});
describe("#Get Meta Data", () => {
    it("Give basic username: siveing, should return { username: 'siveing', age: 21, dob: '080400' }", () => {
        chai_1.assert.deepEqual((0, src_1.default)('siveing'), { username: 'siveing', age: 21, dob: '080400' });
    });
});
