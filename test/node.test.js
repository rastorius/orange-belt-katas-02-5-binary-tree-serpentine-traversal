const {Node} = require("../src/node");

describe("Serpentine traverse input validation tests", () => {
    it("GIVEN a node WHEN serpentine traversed THEN should return correct sequence", () => {
        // given
        const expectedResult = ['A', 'C', 'B'];
        const node = new Node('A',
            new Node('B', null, null),
            new Node('C', null, null));

        // when
        const actualResult = node.serpentineTraverse();

        // then
        expect(actualResult).toEqual(expectedResult);
    })
})