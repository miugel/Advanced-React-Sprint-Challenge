import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DarkModeButton from './DarkModeButton';

describe('dark mode button', () => {
    test('button renders without crashing using test id', () => {
        const {getByTestId} = render(<DarkModeButton/>);
        expect(getByTestId('dark-mode-button')).toBeInTheDocument();
    });
    
    test('button renders without crashing using text', () => {
        const {getByText} = render(<DarkModeButton/>);
        expect(getByText(/dark mode/i)).toBeInTheDocument();
    });
});
