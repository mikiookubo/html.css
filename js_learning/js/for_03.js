
const eighteenYearsold = () =>{
    const participant =[{name:'taro',age:20},{name:'hanako' ,age:15} ,{name:'john',age:25}];

    let car = participant.map(i=>{
        if (i.age >=18){
            console.log(i.name+"さんは18歳以上のため参加可能です");
        }else{
            console.log(i.name+"さんは18歳未満のため参加できません");
        }
        
    })};
    console.log(eighteenYearsold());