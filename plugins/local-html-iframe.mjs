import fs from 'node:fs';
import path from 'node:path';

function isExternalOrDataUrl(src) {
  return /^[a-z][a-z0-9+.-]*:/i.test(src) || src.startsWith('//');
}

function htmlDataUrl(filePath) {
  const html = fs.readFileSync(filePath);
  return `data:text/html;charset=utf-8;base64,${Buffer.from(html).toString('base64')}`;
}

const localHtmlIframeTransform = {
  name: 'local-html-iframe',
  stage: 'document',
  plugin: (_, utils) => (tree, file) => {
    if (!file?.path) return;

    utils.selectAll('iframe', tree).forEach((node) => {
      if (!node.src || isExternalOrDataUrl(node.src)) return;
      if (!node.src.endsWith('.html')) return;

      const src = node.src;
      const htmlPath = path.resolve(path.dirname(file.path), node.src);
      if (!fs.existsSync(htmlPath)) return;

      node.src = htmlDataUrl(htmlPath);
      if (src.endsWith('worked-example-stepper.html')) {
        node.height = '700px';
        node.scrolling = 'no';
      }
      if (src.endsWith('geometric-one-dimensional.html')) {
        node.height = '500px';
        node.scrolling = 'no';
      }
      if (src.endsWith('geometric-contour-descent.html')) {
        node.height = '520px';
        node.scrolling = 'no';
      }
      if (src.endsWith('geometric-learning-rate.html')) {
        node.height = '470px';
        node.scrolling = 'no';
      }
    });
  },
};

export default {
  name: 'Local HTML iframe',
  transforms: [localHtmlIframeTransform],
};
