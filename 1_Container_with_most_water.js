//Brute force solution

var maxArea = function(height) {
    var result=0;
    for(var i=0;i<height.length;i++){
        for(var j=i+1;j<height.length;j++){
            var area= (j-i)*Math.min(height[i],height[j]);
            result=Math.max(result,area)
        }
    }
    return result;
    
};

//optimised solution
var maxArea = function(height) {
    let left=0;
    let right=height.length-1;
    let ans=0;
     while(left<right){
         let area=(right-left)*Math.min(height[left],height[right]);
         ans=Math.max(ans,area);
         if(height[left]<height[right]){
             left++
         }
         else if(height[left]>height[right]){
             right--;
         }else{
             left++;
         }
    }

 return ans;
     
};