export default (manifest) => {
  manifest.addComponent({
    name: 'Private',
    displayName: 'Private',
    placeholders: [
      { name: 'page-header' },
      { name: 'page-content' },
    ],
  });
};
