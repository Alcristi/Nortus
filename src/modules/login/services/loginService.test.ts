import { AuthProvider } from '../types';
import { createLoginService } from './loginService';

describe('LoginService', () => {
    let mockAuthProvider: jest.Mocked<AuthProvider>;

    beforeEach(() => {
        mockAuthProvider = {
            signIn: jest.fn(),
        };
    });

    it('should call authProvider.signIn with correct arguments', async () => {
        const loginService = createLoginService(mockAuthProvider);
        const loginData = { username: 'testuser', password: 'password123' };

        await loginService.executeLogin(loginData);

        expect(mockAuthProvider.signIn).toHaveBeenCalledWith({
            username: loginData.username,
            password: loginData.password,
        });
    });
});
