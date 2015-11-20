# tooly.js

[![Build Status](https://travis-ci.org/Daio-io/tooly.svg)](https://travis-ci.org/Daio-io/tooly)

A micro utility library for Javascript


## API


    existy(value);
    
Checks the existence of any value given. Under the hood it checks if the value is null or undefined and returns a bool.
 If the value passed in is a ```string``` it checks for empty strings and string representations of null and undefined. 
