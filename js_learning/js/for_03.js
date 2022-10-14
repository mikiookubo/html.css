
const eighteenYearsold = () =>{
    const participant =[{name:'taro',age:20},{name:'hanako' ,age:15} ,{name:'john',age:25}];
    for(let p of participant){
        if(p.age >= 18){
            console.log(p.name+"さんは18歳以上のため参加可能です");
        }else{
            console.log(p.name+"さんは18歳未満のため参加できません");
        }
    }};

   
    console.log(eighteenYearsold());