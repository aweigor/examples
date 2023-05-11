"use strict";
var A;
(function (A) {
    A.a = 5;
})(A || (A = {}));
/// <reference path="./module/namespaces.ts"/>
console.log(A.a);
