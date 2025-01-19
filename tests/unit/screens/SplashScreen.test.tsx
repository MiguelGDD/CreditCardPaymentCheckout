import React from 'react';
import {render} from '@testing-library/react-native';
import SplashScreen from '../../../src/screens/SplashScreen';
import {themes} from '../../../src/styles/themes';

describe('SplashScreen Component', () => {
  const theme = themes.light;

  it('should render the welcome text, subtitle, and activity indicator', () => {
    const {getByText, getByTestId} = render(<SplashScreen />);

    // Verifica el texto de bienvenida
    const welcomeText = getByText('Bienvenido');
    expect(welcomeText).toBeTruthy();
    expect(welcomeText.props.style).toContainEqual({color: theme.text});

    // Verifica el subtítulo
    const subtitle = getByText('Cargando la aplicación...');
    expect(subtitle).toBeTruthy();
    expect(subtitle.props.style).toContainEqual({color: theme.text});

    // Verifica el ActivityIndicator
    const activityIndicator = getByTestId('activity-indicator');
    expect(activityIndicator).toBeTruthy();
    expect(activityIndicator.props.color).toBe(theme.primary);
  });
});
