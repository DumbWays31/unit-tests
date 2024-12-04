import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidationService {

  // retourne si le mot est un palindrome ou non
  isPalindrome(word: string): boolean {
    if (!word) return false;

    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedWord = cleanedWord.split('').reverse().join('');

    return cleanedWord === reversedWord;
  }
      
}
