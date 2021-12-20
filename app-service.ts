export interface StringManipulationService  {
    print(word:string);
    printWithSpace(sentence:string) ;
    findVowel(str: string) ;
}

export interface NumberManipulationService {
    findPrime(num: number);
    findMagic(num: number);
}