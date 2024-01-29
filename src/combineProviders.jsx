import { BasketProvider } from './context/basketContext';
import { AuthProvider } from './context/authContext';
import { ProductProvider } from './context/productContext';
import PropTypes from 'prop-types';

const combineProviders = (providers) => providers.reduce((AccumulatedComponents, CurrentComponent) => {
  const CombinedProvider = ({ children }) => (
    <AccumulatedComponents>
      <CurrentComponent>
        {children}
      </CurrentComponent>
    </AccumulatedComponents>
  );

  CombinedProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return CombinedProvider;
});

export const AllProviders = combineProviders([ProductProvider, BasketProvider, AuthProvider]);


