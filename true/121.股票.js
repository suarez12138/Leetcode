/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max=0,min=0;
    for (let i=1;i<prices.length;i++){
        if (prices[i]<prices[min]){
            min=i;
        }else if (prices[i]-prices[min]>max){
            max=prices[i]-prices[min];
        }
    }
    return max;
};