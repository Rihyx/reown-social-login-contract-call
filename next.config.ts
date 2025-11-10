import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: [
  //         {
  //           key: 'Content-Security-Policy',
  //           value: [
  //             "default-src 'self'",
  //             "connect-src 'self' https://services.datahaven-testnet.network https://api.web3modal.org https://*.reown.com https://*.walletconnect.com https://*.walletconnect.org https://rpc.walletconnect.org https://cca-lite.coinbase.com https://*.magic.link https://*.magiclabs.com https://vercel.live https://cognito.us-west-2.amazonaws.com https://kms.us-west-2.amazonaws.com https://cognito-identity.us-west-2.amazonaws.com https://*.hightouch-events.com https://browser-intake-datadoghq.com https://*.launchdarkly.com https://*.google.com https://*.alchemy.com https://*.infura.io https://relay.farcaster.xyz https://*.alchemyapi.io https://oauth.telegram.org wss://services.datahaven-testnet.network wss://*.walletconnect.com wss://*.walletconnect.org",
  //             "frame-src 'self' https://secure.walletconnect.org https://*.walletconnect.com https://*.walletconnect.org https://*.magic.link https://*.magiclabs.com",
  //             "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
  //             "style-src 'self' 'unsafe-inline'",
  //             "img-src 'self' data: https:",
  //             "font-src 'self' data: https: https://fonts.reown.com",
  //           ].join('; '),
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
