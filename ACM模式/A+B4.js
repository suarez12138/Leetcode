let line;
while(true){
    line=readline().split(' ');
    if(line.length===1&&line[0]==='0')break;
    let n=parseInt(line[0]);
    let sum=0;
    for (let i=1;i<n+1;i++)sum+=parseInt(line[i]);
    print(sum);
}
