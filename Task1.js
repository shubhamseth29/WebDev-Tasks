// var obj= { one: 1};
// var arr= [ 'one'];

var obj= { one: { two: { three: 3 } } };
var arr= [ 'four','one','two', 'three'];
var i=0;

function calculateResult(obj,arr)
{
    if(obj.hasOwnProperty(arr[i]))
    {
        if(typeof obj[arr[i]]==="object")
        {
            var value=obj[arr[i]];
            i++;
            calculateResult(value,arr);
        }
        else
        {
            console.log(obj[arr[i]]);
        }
    }
    else{
            console.log("String '"+arr[i]+"' does not exist in Object.");
    }
    
}
calculateResult(obj,arr);