const assert = require('assert');
const {Given, When, Then} = require('@cucumber/cucumber');
const {Node} = require("../../src/node");

Given('node', function () {
    this.node = new Node('A',
        new Node('B', null, null),
        new Node('C', null, null));
});

When('serpentine traversed', function () {
    this.actualResult = this.node.serpentineTraverse();
});

Then('should return correct sequence', function () {
    assert.deepEqual(this.actualResult, ['A', 'C', 'B'])
});