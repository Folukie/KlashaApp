import {
  DashboardIcon,
  BalancesIcon,
  TransactionsIcon,
  AnalyticsIcon,
  MarketingIcon,
  ExchangeIcon,
  CheckoutIcon,
  PaymentIcon,
  WireIcon,
} from '../components/Icons'

export const MainPageNavigationLinks = [
  {
    name: 'Dashboard',
    icon: <DashboardIcon />,
    route: '/',
  },

  {
    name: 'Balances',
    icon: <BalancesIcon />,
    route: '',
  },
  {
    name: 'Transactions',
    icon: <TransactionsIcon />,
    route: '/transactions',
  },
  {
    name: 'Analytics',
    icon: <AnalyticsIcon />,
    route: '',
  },
  {
    name: 'Marketing',
    icon: <MarketingIcon />,
    route: '',
  },
  {
    name: 'Exchange Rates',
    icon: <ExchangeIcon />,
    route: '',
  },
]

export const AcceptPaymentLinks = [
  {
    name: 'Checkout',
    icon: <CheckoutIcon />,
    route: '',
  },

  {
    name: 'Payment Links',
    icon: <PaymentIcon />,
    route: '',
  },
]
export const SendPaymentLinks = [
  {
    name: 'Wire',
    icon: <WireIcon />,
    route: '',
  },
]
