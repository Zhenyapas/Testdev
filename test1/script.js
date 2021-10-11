let arr = [1,3,5,4,5,7];


let funcArr = (arr) => {

 let copyArr = [];

   for(let i=0; i<arr.length-2; i++) {

      copyArr=[...copyArr,arr.slice(i,i+3)]
      console.log(copyArr);

   }

 let newArr = copyArr.map(arr => {

   
    ((arr[0]>arr[1] && arr[1]<arr[2]) || (arr[0]<arr[1] && arr[1]>arr[2])) ? arr=1 : arr=0;

    return arr;
   

  });

   console.log(newArr);
   return newArr;

}

   
alert(funcArr(arr));
funcArr(arr);
