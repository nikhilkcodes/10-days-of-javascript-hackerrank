function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const regexString = '^([aeiou]).*\\1$';

    /*
     * Use the test() method to check if the regular expression matches the criteria
     */

       const re = new RegExp(regexString);
 
         return re;
}
