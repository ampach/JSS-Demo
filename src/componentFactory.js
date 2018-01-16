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
components.set('HeroSlider', UI.HeroSlider);
components.set('CardList', UI.CardList);
components.set('Article', UI.Article);
components.set('HeroImage', UI.HeroImage);

export default componentName => components.get(componentName);
