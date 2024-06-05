function monthlySavings(allPayments,livingCost){
    let totalSavings = 0;
    if(Array.isArray(allPayments)== false || isNaN(livingCost))
           return "invalid input";
        
    for(let i=0;i<allPayments.length;i++)
        {
           if(allPayments[i] >= 3000) 
            {
                const afterTax = allPayments[i] - (allPayments[i] * 0.2);
                totalSavings += afterTax;
            }
            else totalSavings += allPayments[i];
        }
         return totalSavings-livingCost;
}
const ans = monthlySavings([900,2700,3400],10000);
if(ans >= 0) console.log(ans);
else if(ans < 0) console.log("earn more");
else console.log(ans);
