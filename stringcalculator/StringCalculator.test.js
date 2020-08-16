const StringCalculator = require("./StringCalculator.js");

describe("String Calculator 1", () => {

    let calc;

    beforeEach(() => {
        calc = new StringCalculator();
    });
    
    test("Result should be 0 if no paramaters", () => {  
        expect(calc.Add("")).toBe(0);
    });

    test("Result should be same number if only one param is passed", () => { 
        calc = new StringCalculator;
        expect(calc.Add("100")).toBe(100);
    });

    test("Result should be 1 if input is 1", () => {
        expect(calc.Add("1")).toBe(1);
    });

    test("Result should be 3 if input is 1,2", () => {
        expect(calc.Add("1,2")).toBe(3);
    });

    test("Result should be 6 if input is 1,2,3", () => {
        expect(calc.Add("1,2,3")).toBe(6);
    });
})

describe("String Calculator 2", () => {

    let calc;

    beforeEach(() => {
        calc = new StringCalculator();
    });

    test("Result should be 10 if input is 1,2,3,4", () => {
        expect(calc.Add("1,2,3,4")).toBe(10);
    });
})

describe("String Calculator 3", () => {

    let calc;

    beforeEach(() => {
        calc = new StringCalculator();
    });

    test("Result should be 10 if \\n character or colon are used", () => {
        expect(calc.Add("1\n2,3,4")).toBe(10);
    });
})

describe("String Calculator 4: Support different delimiters", () => {

    let calc;

    beforeEach(() => {
        calc = new StringCalculator();
    });
    
    test("Result should be 3 if custom delimiter # is used", () => {
        expect(calc.Add("//#\n1#2")).toBe(3);
    });

    test("Result should be 6 if custom delimiter ; is used", () => {
        expect(calc.Add("//;\n1;2;3")).toBe(6);
    });

    test("Result should be  if custom delimiter ? is used", () => {
        expect(calc.Add("//?\n4?2?10")).toBe(16);
    });
})

describe("String Calculator 5: Calling Add with negative numbers", () => {
    let calc;

    beforeEach(() => {
        calc = new StringCalculator();
    });
    
    test("Throw an exception if negative number is used -2", () => {
        expect(() => {
            calc.Add("1,2,-2")
        }).toThrowError("negatives not allowed -2");  
    });

    test("Throw an exception is negative number is used -3", () => {
        expect(() => {
            calc.Add("1,2,-3")
        }).toThrowError("negatives not allowed -3");  
    });
});

describe("String Calculator 6: If there any negative numbers show all of them", () => {
    let calc;

    beforeEach(() => {
        calc = new StringCalculator();
    });

    test("Throw an exception with all negative numbers if there's more than 1 with input 1,2,-3,-9", () => {
        expect(() => {
            calc.Add("1,2,-3,-9")
        }).toThrowError("negatives not allowed -3,-9");
    });

    test("Throw an exception with all negative numbers if there's more than 1 ", () => {
        expect(() => {
            calc.Add("//?\n4?-2?10")
        }).toThrowError("negatives not allowed -2");
    });
});

describe("String Calculator 7: Add a method that returns how many times Add was invoked", () => {
    let calc;

    beforeEach(() => {
        calc = new StringCalculator();
    });

    test("Add method should be called only once when input 1,2,-3,-9", () => {
        calc.Add("//?\n4?2?10");
        expect(calc.GetCalledCount()).toBe(1);
    });
    
});

describe("String Calculator 9: Numbers bigger than 1000 should be ignored", () => {
    let calc;

    beforeEach(() => {
        calc = new StringCalculator();
    });

    test("Numbers bigger than 1000 should be ignored", () => {       
        expect(calc.Add("//?\n4?2?1001")).toBe(6);
    });
    
    test("Numbers smaller or equal than 1000 should be added", () => {       
        expect(calc.Add("//?\n4?2?1000")).toBe(1006);
    });

    test("Numbers smaller or equal than 1000 should be added", () => {       
        expect(calc.Add("4,5,3,3000")).toBe(12);
    });
});

describe("String Calculator 10: Delimiters can be of any lenght", () => {
    let calc;

    beforeEach(() => {
        calc = new StringCalculator();
    });

    test("Result should be 10", () => {
        expect(calc.Add("//##\n5##5")).toBe(10);
    })

    test("Result should be 11", () => {
        expect(calc.Add("//##\n5##5##1")).toBe(11);
    })

    test("Result should be 309", () => {
        expect(calc.Add("//##\n300##5##4")).toBe(309);
    })

    test("Result should be 309 ", () => {
        expect(calc.Add("//###\n300###5###4")).toBe(309);
    })

    test("Numbers smaller or equal than 1000 should be added when a delimiter of more than 1 chr is used", () => {       
        expect(calc.Add("//##\n300##5##4000")).toBe(305);
    });

});

describe("String Calculator 11: Multiple Delimiters can be used", () => {
    let calc;

    beforeEach(() => {
        calc = new StringCalculator();
    });

    test("Multiple delimoters can be used, result should return 6", () => {
        expect(calc.Add("//[#][%]\n1#2%3")).toBe(6);
    })

});

describe("String Calculator 2: Multiple Delimiters can be longer than 1 char", () => {
    let calc;

    beforeEach(() => {
        calc = new StringCalculator();
    });

    test("Multiple delimoters can be used, result should return 6", () => {
        expect(calc.Add("//[##][%%]\n1##2%%3")).toBe(6);
    })

});