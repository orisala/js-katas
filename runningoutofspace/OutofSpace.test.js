const OutOfSpace = require("./OutOfSpace.js");

describe("Out of Space", () => {

    let outspace;

    beforeEach(() => {
        outspace = new OutOfSpace();
    });
    
    test("Result should be ['i'] for input ['i']", () => {  
        let input = new Array;
        input.push('i');
        expect(outspace.Process(input)).toEqual(['i']);
    });

    test("Result should be ['i','have'] for input ['i','ihave']", () => {  
        let input = ['i','have'];
        expect(outspace.Process(input)).toEqual(['i','ihave']);
    });

    test("Result should be ['i','have','no'] for input ['i','ihave','ihaveno']", () => {  
        let input = ['i','have','no'];
        expect(outspace.Process(input)).toEqual(['i','ihave','ihaveno']);
    });

    test("Result should be ['i','have','no','space'] for input ['i','ihave','ihaveno','ihavenospace']", () => {  
        let input = ['i','have','no','space'];
        expect(outspace.Process(input)).toEqual(['i','ihave','ihaveno','ihavenospace']);
    });
})