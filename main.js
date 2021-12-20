"use strict";
exports.__esModule = true;
exports.noComponent = exports.wdComponent = void 0;
var wdComponent = /** @class */ (function () {
    function wdComponent() {
    }
    wdComponent.prototype.print = function (word) {
        var pos = 2;
        var word1 = "world";
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(pos));
        console.log(word + word1);
        console.log(word.slice(0, 5));
        return word.length;
    };
    wdComponent.prototype.printWithSpace = function (sentence) {
        var between = '';
        var ans = sentence.split('').join(between);
        return ans;
    };
    wdComponent.prototype.findVowel = function (vowel) {
        var count = 0;
        for (var i = 0; i < vowel.length; i++) {
            if (vowel[i] == 'a' || vowel[i] == 'e' || vowel[i] == 'i' || vowel[i] == 'o' || vowel[i] == 'u') {
                count++;
            }
        }
        return count;
    };
    return wdComponent;
}());
exports.wdComponent = wdComponent;
var noComponent = /** @class */ (function () {
    function noComponent() {
    }
    noComponent.prototype.findPrime = function (num) {
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                return "not a prime";
            }
        }
        return "prime number";
    };
    noComponent.prototype.findMagic = function (num) {
        var result = num.toString().split('').map(Number).reduce(function (a, b) { return a + b; }, 0);
        while (result > 10) {
            result = result.toString().split('').map(Number).reduce(function (a, b) { return a + b; }, 0);
        }
        return result;
    };
    return noComponent;
}());
exports.noComponent = noComponent;
var word = "Hello";
var sentence = "Nice to meet you";
var vowel = "aeiousthjfkoiea";
var wd = new wdComponent();
console.log(wd.print(word));
console.log(wd.printWithSpace(sentence));
console.log(wd.findVowel(vowel));
var no = new noComponent();
var num = 13;
console.log(no.findPrime(num));
console.log(no.findMagic(num));
