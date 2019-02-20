/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let countTriangle=0;
  let array=preferences;
     
   for (var i=0; i<array.length; i++){
     	let a=array[i];        
			let b=array[a-1];
    	let c=array[b-1]; 
              
     if (c===i+1&&a!=i+1){
        countTriangle++;            
      };
           
    };//close for
 
	return countTriangle/3;
};//close getLoveTrianglesCount
