function solution1(array,key)
{
    let len = array.length;
    let i=0,j=len-1;
    while(i<j)
    {
        while(array[i]<=key)
            i++
        while(array[j]>key)
            j--
        if(i<j) {
            [array[i],array[j]]=[array[j],array[i]]
            i++
            j--
        }
    }
}

let arr=[23,24,3,34,5,1,72]
solution1(arr,30);
console.log(arr)