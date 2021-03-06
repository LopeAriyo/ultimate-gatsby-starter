import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { GlobalStyle } from '../src/components/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../src/assets/theme';

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Welcome', 'Layout', 'Primary', 'Secondary'],
    },
  },
};

// Gatsby's Link overrides:
// Gatsby Link calls the "enqueue" & "hovering" methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

// __PATH_PREFIX__ is used inside gatsby-link an other various places. For storybook not to crash, you need to set it as well.
global.__PATH_PREFIX__ = '';
// Similar for __BASE_PATH__, see https://github.com/gatsbyjs/gatsby/issues/10668#issuecomment-639014099
global.__BASE_PATH__ = '';

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the "___navigate" method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.

window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Fragment>{story()}</Fragment>
  </ThemeProvider>
));
