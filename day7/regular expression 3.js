function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    
    const re = /\d+/g; // \d+ matches one or more digits (0-9).
    //g is used for global matching, so it will find all occurrences of numbers in the string.

    return re;
}