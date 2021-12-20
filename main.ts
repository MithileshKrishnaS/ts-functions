import { StringManipulationService  } from "./app-service";
import { NumberManipulationService  } from "./app-service";

export class wdComponent implements StringManipulationService {

    constructor() {}

    public print(word: string ) {
        var pos=2;
        var word1="world";
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(pos));
        console.log(word+word1);
        console.log(word.slice(0, 5));
        return word.length;
    }

    public printWithSpace(sentence: any){
        var between='';
        var ans=sentence.split('').join(between);
        return ans;
    }

    public findVowel(vowel:string){
        var count=0;
        for(let i=0;i<vowel.length;i++)
        {
            if(vowel[i]=='a'||vowel[i]=='e'||vowel[i]=='i'||vowel[i]=='o'||vowel[i]=='u')
            {
                count++;
            }
        }
        return count;

    }
 
}

export class noComponent implements NumberManipulationService  {

    constructor() {}

    public findPrime(num: number) {
       for(let i=2;i<num;i++)
       {
           if(num%i==0)
           {
               return "not a prime";
           }
       }
       return "prime number"
    }

    public findMagic(num: number){
        var result=num.toString().split('').map(Number).reduce(function (a, b) {return a + b;}, 0);
        while(result>10)
        {
            result=result.toString().split('').map(Number).reduce(function (a, b) {return a + b;}, 0);
        }
        return result;
    }

 
}

let word: string = "Hello";
let sentence="Nice to meet you";
let vowel="aeiousthjfkoiea"
let wd = new wdComponent();

console.log(wd.print(word));
console.log(wd.printWithSpace(sentence));
console.log(wd.findVowel(vowel));

let no = new noComponent();
let num=13;
console.log(no.findPrime(num));
console.log(no.findMagic(num));






