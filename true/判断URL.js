// 写一个函数判断是否属于腾讯系的 URL

function judge(url){
    let regex=/^(http|https):\/\/(\w{3,}\.)+qq.com\//
    // let regex=/^(http|https):\/\/(\w+\.)+qq.com\//
    return regex.test(url)
}

console.log(judge("https://y.qq.com/?ADTAG=myqq#type=index"))
console.log(judge("https://mail.qq.com/"))