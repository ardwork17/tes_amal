class Calculator {
    constructor() {
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = null;
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand += number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                this.currentOperand = (prev + current).toString();
                break;
            case '-':
                this.currentOperand = (prev - current).toString();
                break;
            case '*':
                this.currentOperand = (prev * current).toString();
                break;
            case '/':
                if (current !== 0) {
                    this.currentOperand = (prev / current).toString();
                } else {
                    this.currentOperand = 'Error';
                }
                break;
            default:
                return;
        }

        this.operation = null;
        this.previousOperand = '';
    }

    getResult() {
        return this.currentOperand;
    }
}

export default Calculator;
