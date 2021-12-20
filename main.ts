import { ArrayService } from "./app-service";

export class ArrayComponent implements ArrayService {

    constructor() {}

    public arrayMultiply(myArray: number[]) : Array<Number> {
        var array1=[];
        var j=0;
        for(let i=0;i<myArray.length;i++)
        {
            if(myArray[i]%5==0)
            {
                array1[j]=myArray[i];
                j++;
            }
            
        }
        return array1;
    }

    public arraySeparate(myArray: any) : Array<string>{
        var array1=[];
        var j=0;
        for(let i=0;i<myArray.length;i++)
        {
            if(typeof myArray[i]=="string")
            {
                array1[j]=myArray[i];
                j++;
            }
        }
        return array1;
    }

    public arraySplit(myArray: any) : Array<any>{
        var array1=[];
        var j=0;
        var x=0;
        for(let i=0;i<myArray.length;i++)
        {
            x=0;
            for(let k=2;k<myArray[i];k++)
            {
                
                if(myArray[i]%k==0)
                {
                    x=1;
                }
                
            }
            if(x!=1 && typeof myArray[i]=="number")
            {
                array1[j]=myArray[i];
                j++;
            }
               
        }
        return array1;
    }

    public arraySort(myArray:any):Array<string>{
        for(let i=0;i<myArray.length-1;i++)
        {
            for(let k=i;k<myArray.length;k++)
            {
                if(myArray[i]>myArray[k])
                {
                    let temp = myArray[i];
                    myArray[i] = myArray[k];
                    myArray[k] = temp;
                }
            }
        }
        return myArray;
    }

    public arrayReplace(myArray:any):Array<number>{
       var array1=[];
        var j=0;
        for(let i=0;i<myArray.length;i++)
        {
            if(myArray[i]%3==0)
            {
                myArray[i]=5;
            }
        }
        return myArray;
    }

}

let myArray: number[] = [34, 45, 60, 23, 13, 25, 70];
let a1=[2,3,17,13,'hello',4]
let array = new ArrayComponent();

console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(a1));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));



