
let data = [50,20,60,40,30,10];
let swapped = false;
let iterations=0;

for(i=0;i<data.length;i++)
{
    swapped = false;
    for(j=0;j<data.length;j++)
    {
        iterations=iterations+1;
        if(data[j]<data[j+1])
        {
            console.log(data); 
            let temp = data[j];
            data[j] = data[j+1];
            data[j+1] = temp;
            
            swapped = true;
            console.log(swapped);
        }
    }
    if(!swapped)
    {
        console.log("Final Answer =>");
        break;
    }
    
}

console.log(data);
console.log(iterations);