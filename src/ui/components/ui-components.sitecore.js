export default (manifest) => {
  manifest.addComponent({
    name: 'DownloadCallout',
    displayName: 'Download Callout',
    fields: [
      { name: 'linkText', displayName: 'Link Text', type: manifest.fieldTypes.singleLineText },
    ],
  });

  manifest.addComponent({
    name: 'FormContent',
    displayName: 'Form Content',
    fields: [
      { name: 'title', displayName: 'Title', type: manifest.fieldTypes.singleLineText },
      { name: 'body', displayName: 'Body', type: manifest.fieldTypes.richText },
      { name: 'image', displayName: 'Image', type: manifest.fieldTypes.image },
    ],
  });

  manifest.addComponent({
    name: 'LinkButton',
    displayName: 'Link Button',
    fields: [
      { name: 'link', displayName: 'Link', type: manifest.fieldTypes.generalLink }
    ]
  });

  manifest.addComponent({
    name: 'FileLink',
    displayName: 'File Link',
    fields: [
      { name: 'file', displayName: 'File', type: manifest.fieldTypes.file }
    ]
  });

  manifest.addComponent({
    name: 'Tab',
    displayName: 'Tab',
    fields: [
      { name: 'title', displayName: 'Title', type: manifest.fieldTypes.singleLineText },
    ],
    placeholders: [
      { name: 'tab' },
    ],
  });

  manifest.addComponent({
    name: 'Tabs',
    displayName: 'Tabs',
    placeholders: [
      { name: 'tabs' },
    ],
  });

  manifest.addComponent({
    name: 'CardList',
    displayName: 'Card List',
    placeholders: [
      { name: 'left' },
      { name: 'right' },
    ],
  });

  manifest.addComponent({
    name: 'HeroImage',
    displayName: 'Hero Image',
    fields: [
      { name: 'image', displayName: 'Image', type: manifest.fieldTypes.image },
      { name: 'ratio', displayName: 'Ratio', type: manifest.fieldTypes.singleLineText },
      { name: 'title', displayName: 'Title', type: manifest.fieldTypes.singleLineText },
      { name: 'body', displayName: 'Body', type: manifest.fieldTypes.richText },
        {name: 'link', displayName: 'Link', type: manifest.fieldTypes.generalLink}
    ],
  });

  manifest.addComponent({
    name: 'HeroSlider',
    displayName: 'Hero Slider',
    fields: [
      { name: 'items', displayName: 'Items', type: manifest.fieldTypes.contentList },
    ],
  });

  manifest.addComponent({
    name: 'HeroSlider-items-Item',
    displayName: 'Hero Slider Item',
    fields: [
      { name: 'image', displayName: 'Image', type: manifest.fieldTypes.image },
      { name: 'ratio', displayName: 'Ratio', type: manifest.fieldTypes.singleLineText },
      { name: 'title', displayName: 'Title', type: manifest.fieldTypes.singleLineText },
      { name: 'body', displayName: 'Body', type: manifest.fieldTypes.richText },
      {name: 'link', displayName: 'Link', type: manifest.fieldTypes.generalLink}
    ],
  });

  manifest.addComponent({
    name: 'Heading',
    displayName: 'Heading',
    fields: [
      { name: 'text', displayName: 'Text', type: manifest.fieldTypes.singleLineText },
    ],
    params: [
      { name: 'size' },
    ],
  });

  manifest.addComponent({
    name: 'Article',
    displayName: 'Article',
    fields: [
      { name: 'titleText', displayName: 'Title Text', type: manifest.fieldTypes.singleLineText },
      { name: 'body', displayName: 'Body', type: manifest.fieldTypes.richText },
    ],
    params: [
      { name: 'titleSize' },
      { name: 'shade' },
    ],
  });

  manifest.addComponent({
    name: 'RichText',
    displayName: 'Rich Text',
    fields: [
      { name: 'text', displayName: 'Text', type: manifest.fieldTypes.richText },
    ],
  });

};
