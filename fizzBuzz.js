let arr = [];
function fizzBuzz()
{
    for(let i = 0; i < 100; i++)
    {
        if(i%15 == 0)
        {
            arr.push("fizzBuzz");
        }
        else if(i%5 == 0)
        {
            arr.push("Buzz");
        }
        else if(i%3 == 0)
        {
            arr.push("fizz");
        }
        else
        {
            arr.push(i);
        }
    }
    console.log(arr);
}