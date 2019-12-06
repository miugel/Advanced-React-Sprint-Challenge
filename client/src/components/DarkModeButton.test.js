import React from 'react';
import {render} from '@testing-library/react';
import DarkModeButton from './DarkModeButton';

test('dark mode button renders without crashinwg', () => {
    render(<DarkModeButton/>);
});