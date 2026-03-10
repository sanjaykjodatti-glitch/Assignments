// Common function to evaluate loan
function loanEvaluation(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number
): string { // returns the decision
    if (creditScore > 750) {
        return "approved";
    } 
    else if (creditScore >= 650 && creditScore <= 750) {
        if (income < 50000) return "denied";
        if (!isEmployed) return "denied";
        if (debtToIncomeRatio < 40) return "approved";
        return "denied";
    } 
    else {
        return "denied";
    }
}

let decision = loanEvaluation("John Doe", 720, 55000, true, 35);
console.log("Loan for John Doe:",decision);

