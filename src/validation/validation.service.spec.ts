import { Test, TestingModule } from '@nestjs/testing';
import { ValidationService } from './validation.service';

describe('ValidationService', () => {
  let service: ValidationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValidationService],
    }).compile();

    service = module.get<ValidationService>(ValidationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('isValidEmail', () => {

  })

  describe('isPalindrome', () => {

    // TRUE
    it('should return true if the word is a palindrome', () => {
      expect(service.isPalindrome('kayak')).toBe(true);
    });

    it('should return true if the word is a palindrome with upper case letters', () => {
      expect(service.isPalindrome('Kayak')).toBe(true);
    });

    it('should return true if the word is a palindrome with space', () => {
      expect(service.isPalindrome('Roma Amor')).toBe(true);
    });

    it('should return true if the word is a palindrome with special characters', () => {
      expect(service.isPalindrome('la mariée ira mal')).toBe(true);
    });

    // FALSE
    it('should return false if the word is not a palindrome', () => {
      expect(service.isPalindrome('test')).toBe(false);
    });

    it('should return false if the word is empty', () => {
      expect(service.isPalindrome('')).toBe(false);
    });

    it('should return false if the word is null', () => {
      expect(service.isPalindrome(null)).toBe(false);
    });
  })


});
