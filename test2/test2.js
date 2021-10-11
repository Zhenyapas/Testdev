
let arr = [ 
            [1,2,3,2,7],
            [4,5,6,8,1],
            [7,8,9,4,5],
          ];

let count =[1,2,3,4,5,6,7,8,9];

function compare(arr1,arr2){

   arr1.sort((a,b) => a-b );

    return !arr1.some((e, i) => {
        return (e != arr2[i]);
});
}

let compMatrix = (arr) => {

      let copyArr = [];    

   for(let j=0; j<arr[0].length-2; j++) {

      for (let i=0; i<3; i++){

      copyArr=[...copyArr,arr[i].slice(j,j+3)]
      
      }  
   }

      let merged = [].concat.apply([], copyArr);
      let newArr =[];
      let k=0, n=9;

   for (let i=0; i<(merged.length/9); i++) {
   
      (compare(merged.slice(k,n),count)) ? newArr=[...newArr,true] : newArr=[...newArr,false]; 

       k=k+9;
       n=n+9;

   }
   
   return newArr;

}


console.log(compMatrix(arr));
alert(compMatrix(arr));









