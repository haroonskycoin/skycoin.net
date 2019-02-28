
import included from './images/included.jpg';
import live from './images/live.jpg';
import security from './images/security.jpg';
import support from './images/support.svg';
import intuitive from './images/hero.jpg';


const features = [{
  title: 'landing.skywallet.features.live.title',
  description: 'landing.skywallet.features.live.description',
  image: live,
  flexDirection:"row",
  icon:false,
}, {
  title: 'landing.skywallet.features.security.title',
  description: 'landing.skywallet.features.security.description',
  image: security,
  flexDirection:"row-reverse",
  icon:false,
}, {
  title: 'landing.skywallet.features.support.title',
  description: 'landing.skywallet.features.support.description',
  image: support,
  flexDirection:"row-reverse",
  icon:true,
}, {
  title: 'landing.skywallet.features.intuitive.title',
  description: 'landing.skywallet.features.intuitive.description',
  image: intuitive,
  flexDirection:"row-reverse",
  icon:false,
}, {
  title: 'landing.skywallet.features.included.title',
  description: 'landing.skywallet.features.included.description',
  image: included,
  flexDirection:"row-reverse",
  icon:false,
}];

export default features;
