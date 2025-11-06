const prompt=require("prompt-sync")();

let n=prompt("Dame la altua de la piramide");
n=Number(n);
for(let i=0;i<n;i++){
    for(let j;j<n;j++){
         console.log(" ");
         
    }
    process.stdout.write("*");
 
}