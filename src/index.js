module.exports = function check(str, bracketsConfig) {
    if(str.length%2>0) return false;
  
    let result = '';
    let openBracket = '';
    let closeBracket = '';
    for(let i = 0; i<bracketsConfig.length; ++i){
      openBracket+=String(bracketsConfig[i][0]);
      closeBracket+=String(bracketsConfig[i][1]);
    }
  
    for(let i = 0; i!=str.length; ++i){
      if(result.length==0) {
        result=result + str[i];
        continue;
      }
  
      if(openBracket.includes(str[i]) && !closeBracket.includes(str[i])) result+=str[i];
      else if(openBracket.includes(str[i]) && closeBracket.includes(str[i])){
        if(result[result.length-1]==str[i]) result = result.slice(0, -1);
        else result=result + str[i];
      }else{
        let indic = 0;
        while(str[i]!=closeBracket[indic] && indic<closeBracket.length) ++indic;
        if(result[result.length-1]==openBracket[indic]) result = result.slice(0, -1);
        else {result='wrong';
        break;
      }
      }
  
    }
  
    return (result.length==0)
  }
  