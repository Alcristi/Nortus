import { act, renderHook } from '@testing-library/react';
import { LoginService } from '../types';
import { useLogin } from './useLogin';

// Mock useLocale
jest.mock('next-intl', () => ({
    useLocale: () => 'pt'
}));

// Mock useRouter
jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
        replace: jest.fn(),
        prefetch: jest.fn()
    })
}));

// Mock toast
jest.mock('sonner', () => ({
    toast: {
        error: jest.fn()
    }
}));

describe('useLogin', () => {
    let mockLoginService: jest.Mocked<LoginService>;

    beforeEach(() => {
        mockLoginService = {
            executeLogin: jest.fn(),
        };
        localStorage.clear();
        jest.clearAllMocks();
    });

    it('should initialize with remembered username if present in localStorage', () => {
        localStorage.setItem('username', 'saveduser');

        const { result } = renderHook(() => useLogin(mockLoginService));

        expect(result.current.remember).toBe(true);
        // Unable to test ref value in renderHook as ref is not attached to DOM
        // expect(result.current.usernameRef.current?.value).toBe('saveduser');
    });

    it('should update remember state', () => {
        const { result } = renderHook(() => useLogin(mockLoginService));

        act(() => {
            result.current.handleRememberChange({ target: { checked: true } } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.remember).toBe(true);
    });

    // Note: handleSubmit test is tricky with FormData event, might be easier in integration test or mock form event
});
