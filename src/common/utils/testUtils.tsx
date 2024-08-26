import { AnyAction, configureStore, Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { RenderOptions } from '@testing-library/react';
import React from 'react';
import rootReducer, { RootState } from '../../redux/rootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

let reduxStore: any;

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: any;
}

const TestReduxWrapper = (store: Store) => {
  const WrappedComponent: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );

  return WrappedComponent;
};

const renderWithProviders = (
  component: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: rootReducer,
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  reduxStore = store;
  return render(component, {
    wrapper: TestReduxWrapper(store),
    ...renderOptions,
  });
};

const changeState = (action: AnyAction) => {
  reduxStore.dispatch(action);
};

export * from '@testing-library/react';
export { renderWithProviders, changeState };
