"use strict";
exports.__esModule = true;
exports.ArrayComponent = void 0;
var ArrayComponent = /** @class */ (function () {
    function ArrayComponent() {
    }
    ArrayComponent.prototype.arrayMultiply = function (myArray) {
        var array1 = [];
        var j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 5 == 0) {
                array1[j] = myArray[i];
                j++;
            }
        }
        return array1;
    };
    ArrayComponent.prototype.arraySeparate = function (myArray) {
        var array1 = [];
        var j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (typeof myArray[i] == "string") {
                array1[j] = myArray[i];
                j++;
            }
        }
        return array1;
    };
    ArrayComponent.prototype.arraySplit = function (myArray) {
        var array1 = [];
        var j = 0;
        var x = 0;
        for (var i = 0; i < myArray.length; i++) {
            x = 0;
            for (var k = 2; k < myArray[i]; k++) {
                if (myArray[i] % k == 0) {
                    x = 1;
                }
            }
            if (x != 1 && typeof myArray[i] == "number") {
                array1[j] = myArray[i];
                j++;
            }
        }
        return array1;
    };
    ArrayComponent.prototype.arraySort = function (myArray) {
        for (var i = 0; i < myArray.length - 1; i++) {
            for (var k = i; k < myArray.length; k++) {
                if (myArray[i] > myArray[k]) {
                    var temp = myArray[i];
                    myArray[i] = myArray[k];
                    myArray[k] = temp;
                }
            }
        }
        return myArray;
    };
    ArrayComponent.prototype.arrayReplace = function (myArray) {
        var array1 = [];
        var j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 3 == 0) {
                myArray[i] = 5;
            }
        }
        return myArray;
    };
    return ArrayComponent;
}());
exports.ArrayComponent = ArrayComponent;
var myArray = [34, 45, 60, 23, 13, 25, 70];
var a1 = [2, 3, 17, 13, 'hello', 4];
var array = new ArrayComponent();
console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(a1));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
