
export default {
  basePath: 'https://buhal.github.io/mollydolly',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
