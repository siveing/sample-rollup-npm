import getMetaData, { getMessage } from "../src";
import { assert } from 'chai';

describe("#Get Message", () => {
    it("Give basic message: siveing, should return siveing", () => {
        assert.equal(getMessage('siveing'), 'Hello everyone, My name is siveing, I have established one npm packages called "khmer date".');
    });
});

describe("#Get Meta Data", () => {
    it("Give basic username: siveing, should return { username: 'siveing', age: 21, dob: '080400' }", () => {
        assert.deepEqual(getMetaData('siveing'), { username: 'siveing', age: 21, dob: '080400' });
    });
});