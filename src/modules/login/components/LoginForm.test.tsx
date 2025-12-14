import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LoginForm } from './LoginForm';

// Mock useTranslations
jest.mock('next-intl', () => ({
    useTranslations: () => (key: string) => key,
    useLocale: () => 'pt'
}));

// Mock useLogin hook
jest.mock('../hook/useLogin', () => ({
    useLogin: () => ({
        handleSubmit: jest.fn((e) => e.preventDefault()),
        isPending: false,
        remember: false,
        handleRememberChange: jest.fn(),
        usernameRef: { current: null }
    })
}));

describe('LoginForm', () => {
    it('renders login form correctly', () => {
        render(<LoginForm />);

        expect(screen.getByPlaceholderText('usernamePlaceholder')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('passwordPlaceholder')).toBeInTheDocument();
        expect(screen.getByText('submit')).toBeInTheDocument();
    });
});
