let studentNames:string[]= ["Suresh","Mahesh","Naresh"];
let studentMarks:number[]= [75, 80, 82];

let updatedMarks:number[]=[];
let total: number = 0;

for(i=0; i<studentMarks.length; i++)
{
    updatedMarks[i] = studentMarks[i]+10;
    
    total+=updatedMarks[i];
     console.log(studentNames[i],updatedMarks[i]);
}
avg=total/studentMarks.length;
console.log("avg marks:",avg);  
