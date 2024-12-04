import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

describe('AuthService', () => {
  let service: AuthService;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UserService,
          useValue: {
            findUserByUsername: jest.fn(), // Mock de la méthode findUserByUsername
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateUser', () => {

    it('should return true for valid username and password', () => {
      // Arrange : user / mdp bon
      jest.spyOn(userService, 'findUserByUsername').mockReturnValue({
        username: 'validUser',
        password: 'validPassword',
      });

      // Act
      const result = service.validateUser('validUser', 'validPassword');

      // Assert
      expect(result).toBe(true);
    });

    it('should return false for valid username and invalid password', () => {
      // Arrange : user bon / mdp mauvais
      jest.spyOn(userService, 'findUserByUsername').mockReturnValue({
        username: 'validUser',
        password: 'validPassword',
      });

      // Act
      const result = service.validateUser('validUser', 'wrongPassword');

      // Assert
      expect(result).toBe(false);
    });

    it('should return false if user does not exist', () => {
      // Arrange : user n'existe pas
      jest.spyOn(userService, 'findUserByUsername').mockReturnValue(null);

      // Act
      const result = service.validateUser('nonexistentUser', 'anyPassword');

      // Assert
      expect(result).toBe(false);
    });
  })
});
