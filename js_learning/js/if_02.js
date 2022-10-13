function check(){
    let value = document.getElementById("points").value;
    if(value>=90){
        alert("あなたの成績は秀です。");
        return false;
    }else if(value>=80 && value<90){
        alert("あなたの成績は優です。");
        return false;
    }else if(value>=70 && value<=80){
        alert("あなたの成績は良です。");
        return false;
    }else if(value>=60 && value<=70){
        alert("あなたの成績は可です。");
        return false;
    }else if(value<=59){
        alert("あなたの成績は不可です。");
        return false;
    }
}