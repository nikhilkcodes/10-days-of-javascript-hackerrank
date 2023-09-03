function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u']; // Vowels should be enclosed in single quotes
    const vowel_group = [];
    const consonant_group = [];
    
    // Convert the input string to lowercase
    const lowercaseString = s.toLowerCase();
    
    for (const char of lowercaseString) {
        if (vowels.includes(char)) {
            vowel_group.push(char);
        } else if (char >= 'a' && char <= 'z') {
            consonant_group.push(char);
        }
    }
    
    console.log(vowel_group.join('\n')); // Printing vowels on separate lines
    console.log(consonant_group.join('\n')); // Printing consonants on separate lines
}