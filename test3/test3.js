let condition=['LEFT','RIGHT','LEFT'];

let arr = [
  ['Hello','world'],
  ['Brad','came','to','dinner','with','us'],
  ['He','loves','tacos']
];
let arr2 = [
  ['Hello','world'],
  ['Brad','came','to','dinner','with','us','oh','no','yes'],
  ['He','loves','tacos']
];

function textEditor(arr,condition) {


  let a='*';
  for (let i=0; i<18; i++){a=a+'*';}

  arr.forEach((elem,i,array) => {
    
    if( elem.join(' ').length + elem.length -1 > 16 ){
      
      let copyArrSpace=[...elem];
      let del1;
      let delContainer=[];
      elem.forEach((e,i) => {
        copyArrSpace.push(' ');
      })

      let countSlice= Math.round(copyArrSpace.join(' ').length /16) ;
      let countSliceArr=Math.round(elem.length/countSlice);
     
      while(elem.join(' ').length + elem.length -1 > 16) {

          del1 = elem.slice(0,countSliceArr);
          elem.splice(0,countSliceArr);
          delContainer.push(del1);
      } 
      delContainer.push(elem);
      
      console.log(delContainer[0]);

      condition.splice(i,1);
      arr.splice(i,1);
      let k=0;
      for(let j=0;j<delContainer.length;j++){
      condition.splice(i,0,null);
      array.splice(i+k,0,delContainer[j])
      k++;
      }
    
    } 

  });

  function space(length) {
    let n=' ';
    for(let i=0; i<length; i++){
      n=n+' ';
    }
    return n;
  }

  let newArray = arr.map( (elem) => {
    return elem.join(' ');
  }); 
 
  let newArr = newArray.map((elem,i) => {
    if(condition[i] === 'LEFT') {
      elem ='*'+elem+space(16  - elem.length)+'*';
    } else {
      elem ='*'+ space(16  - elem.length) + elem +'*';
    }

    return elem

  });

  newArr.splice(0,0,a);
  newArr.push(a);
  
  return newArr;

} 

console.log(textEditor(arr,condition));
alert(textEditor(arr2,condition));
