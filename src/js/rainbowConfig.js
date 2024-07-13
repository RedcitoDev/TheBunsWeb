import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient } from 'wagmi';
import { chain, publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'The Buns',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export { chains, wagmiClient, RainbowKitProvider };
