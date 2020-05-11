
const adArr = [[0,1,1,0,0,0],[0,0,0,1,0,2],[0,0,0,0,8,1],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var bestAns = 10000;

let tsp = function(pivot,arr,ans,i){
    console.log("log"+pivot+" "+i+" "+arr);
    if(i==5){
        console.log("result"+ans);
        if(bestAns>ans){
            bestAns=ans;
        };
        return ans;
    }
    if(i==0){
        pivot=[1,0,0,0,0,0];
    }
    if(isEnd(arr)){
        return false;
    }
    for(let i=0;i<6;i++){
        if(arr[i]!=0){
            pivot[i]=1;
            ans = parseInt(ans)+parseInt(arr[i]);
            console.log(ans);
            if(!tsp(pivot,adArr[i],ans,i)){
                ans=parseInt(ans)-parseInt(arr[i]);
            };
           
        }
    }
}
let isEnd = function(arr){
    arr.filter(function(i){return i>0}).length==0;
}
console.log(tsp([1,0,0,0,0,0],adArr[0],0,0));