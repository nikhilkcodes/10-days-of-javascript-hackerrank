function reverseString(s) {
    try {
        s = s.split("").reverse().join("");
    }
    catch (ex) {
        console.log(ex.message)
    }
    finally {
        console.log(s);
    }    
}