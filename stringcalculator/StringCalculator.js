module.exports = class StringCalculator {

    constructor() {
        this.result = 0; 
        this.allowedDelimiters = '[(\n)+(,)+]+';
        this.numbers = "";
        this.invalidNumbers = new Array();
        this.numberAddInvocations = 0;
    }

    GetCalledCount() {
        return this.numberAddInvocations;
    }

    Add(input) {
        this.numberAddInvocations += 1;

        if (input === "") {
            this.result = 0;
        } else {

            if (input.startsWith('//')) {
                let test = input.match(new RegExp('(\/\/)(.*)(\\n)(.*)') );

                //extract delimiter
                let replacedExpression = test[2].replace('][',')|(').replace(']',')').replace('[','(');
                this.allowedDelimiters = `[${replacedExpression}]+`;
                   
                //extract numbers
                input = test[4];
            } 
            
            let numbers = input.split(new RegExp(this.allowedDelimiters));

            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i]<0) {   
                    this.invalidNumbers.push(numbers[i]); 
                } 
                else if (numbers[i]<=1000) {
                        this.result += parseInt(numbers[i]);
                } 
                else { }
            }

            if (this.invalidNumbers.length > 0 ) {
                throw new Error(`negatives not allowed ${this.invalidNumbers.toString()}`);
            }
            //console.log(`String: ${input}, Array Length: ${numbers.length}, ArraytoString: ${numbers.toString()}, Result: ${this.result}`);
        }  
        return this.result;  
    }
}