
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://buhal.github.io/mollydolly/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/mollydolly"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 469, hash: '1d05197bcd4c1c81eadfde1564361c5a622c7060345753d7747b973dc2abbc36', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 982, hash: '61c6bc3bafc0c73d4b6eb31b76a066ddc5672d4833a25e36819de271568e271c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21602, hash: '07aa50eaf05cf20f866b97a178326f788017646f462f0e6f95705ea94ad282df', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
