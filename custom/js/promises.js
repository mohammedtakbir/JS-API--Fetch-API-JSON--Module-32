let p = new Promise((resolved, rejected) => {
    let a = 1 + 2
    if(a === 2){
        resolved('success')
    }else{
        rejected('failed')
    }
})
p.then((message) => {
    console.log('this is the ' + message)
}).catch((message) => {
    console.log('this is the ' + message)
})