/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s=s.trim();
    let arr=s.split(/\s+/g);
    // console.log(arr);
    // for(let j=0;j< arr.length;j++){
    //     let n=arr[j].length;
    //     for(let i=0;i<n>>1;i++){
    //         console.log(arr[j]);
    //         console.log(arr[j][i]);
    //
    //         // arr[j][i]='h'
    //         arr[j][i].s
    //         console.log(arr[j].charAt(i));
    //         [arr[j][i],arr[j][n-1-i]]=[arr[j][n-1-i],arr[j][i]];
    //         console.log(arr[j]);
    //
    //     }
    // }
    return arr.reverse().join(" ");
};

console.log(reverseWords("the sky is blue"))
