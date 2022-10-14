const multiple = () =>{
    let i = 0
    while(i<=100){
        if(i%3===0){
            console.log(`${i}:は３の倍数です`);
            i++
        }else{
            console.log(i);
            i++
        }   
    }
}
console.log(multiple());
