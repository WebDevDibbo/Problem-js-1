let friends = ["Rahim","johnson","rock","karim","dornald"];
let n = friends.length;

let a = friends[0].length;
let ans;
for(let i=0;i<n;i++)
    {
        if(friends[i].length > a) 
        {
          ans = i;
          a = friends[i].length;
        }
    }
console.log(friends[ans]);