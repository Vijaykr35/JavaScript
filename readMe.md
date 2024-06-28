# LEARN JAVASCRIPT

Variables and Data Types
1.  const = can't be re-assigned a value and can't be declared again  (block scope)
2.  let = can be re-assigned a value but can't be declared again (block scope)
3.  var = it can be re-assigned a value and it can also be declared again  (Global scope)

 Never use var in your code instead of let because of block and functional scope issues.
 console.table([group of variables you want to show in tabular form])


### Data types:
    number = 2 ^ 53
    bigint = for large numbers
    string = "assembly of characters"
    boolean = true or false
    null = stand alone value (type = object)
    undefined = kindda place holder for a value which is not defined yet (type = undefined)
    symbol = uniquness

### Note:  "use strict";   treat all code as newer version of JS

Note: always check the data after type conversion


Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
# typeof Operator Results

``` Type of val -Result


Undefined -"undefined"
Null	-"object"

Boolean-"boolean"

Number	-"number"

String	-"string"

Object (native and does not implement [[Call]])-"object"

Object (native or host and does implement [[Call]])- "function"

Object (host and does not implement [[Call]])-Implementation-defined except may not be   "undefined", "boolean", "number", or "string".

```

IIFE : Immediately invoked function expressions
       use to maintain  a clean global scope.Functions that immediately executes
       syntax: ()()


Note: =  -> assignment operator
      == -> checking equality(2="2"  return true)
      === ->checking eqality with typechecking(2!="2" return false)
=>if (2 < 3) cout << "hello ",
            cout << "world"; //implicit scope for multiple line write ',' but it is a wrong practice



falsy values: assume that it is flase  always -> false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values :  assume that it is true always. All that is not flasy is truthy -> "0", 'false', 
" ", [], {}, function(){} 




### Terniary Operator:  condition ? true : false
### Nullish Coalescing Operator (??): if the object is null or undefined then insert some value
 let val1;
 val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 



### Async 

```
 Javascript :
       - synchronous 
       - single threaded
 