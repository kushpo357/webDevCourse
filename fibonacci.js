function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        let arr = new Array(n);
        
        for(let i = 0; i < n; i++)
        {
            if(i == 0)
            {
                arr[i] = 0;
            }
            else if(i == 1)
            {
                arr[i] = 1;
            }
            else
            {
                arr[i] = arr[i - 1] + arr[i - 2];
            }
        }
        
        return arr;
    
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    