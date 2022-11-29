displayNum=(num)=>{
    result.value += num;
}

clearBox=()=>{
    result.value="";
}

evaluateExpression=()=>{
    result.value=eval(result.value);
}

removeLast=()=>{
    result.value =result.value.slice(0,-1);
}