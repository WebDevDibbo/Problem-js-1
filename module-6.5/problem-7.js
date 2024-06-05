var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let ans = [];

let i=0;

while(i<numbers.length)
    { 
        if(numbers[i]!=numbers[i+1])
        {
            ans.push(numbers[i]);
            ans.push(numbers[i+1]);
        }
        i+=2;
    }
console.log(ans);


