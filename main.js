Algorithm: SentenceStats

Input: sentence (string)
Output: length (integer), numWords (integer), numVowels (integer)

Variables:
    length = 0       // Counter for the length of the sentence
    numWords = 0     // Counter for the number of words
    numVowels = 0    // Counter for the number of vowels

// Procedure:
//     1. Initialize length, numWords, and numVowels to zero.
//     2. Loop through each character in the sentence:
//        - Increment length by 1 for each character.
//        - If the character is a letter (not a space or punctuation):
//             - If the previous character was a space or it's the first character, increment numWords by 1.
//             - If the character is a vowel (a, e, i, o, u), increment numVowels by 1.
//     3. Output length, numWords, and numVowels.

// End Procedure