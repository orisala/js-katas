module.exports = class OutOfSpace {

    constructor() {
        this.result = new Array(); 
    }

    Process(inputArray) {
        
        let tempString = "";

        for (let i=0; i<inputArray.length; i++) {
            tempString  = tempString + inputArray[i];
            this.result.push(tempString);  
        }
    
        return this.result;  
    }
}