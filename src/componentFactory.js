import HomeContainer from 'home/components/HomeContainer';
import AboutContainer from 'about/components/AboutContainer';
import * as UI from 'ui/components';


const components = new Map();
components.set('Home', HomeContainer);
components.set('About', AboutContainer);
components.set('Heading', UI.Heading);
components.set('RichText', UI.RichText);
components.set('LinkButton', UI.LinkButton);
components.set('FileLink', UI.FileLink);
components.set('Carousel', UI.Carousel);
components.set('TwoColumn', UI.TwoColumn);
components.set('Tabs', UI.Tabs);
components.set('Tab', UI.Tab);
components.set('FormContent', UI.FormContent);
components.set('Jumbotron', UI.Jumbotron);
components.set('DownloadCallout', UI.DownloadCalloutContainer);

export default componentName => components.get(componentName);
