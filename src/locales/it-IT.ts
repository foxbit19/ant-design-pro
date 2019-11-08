import component from './it-IT/component';
import globalHeader from './it-IT/globalHeader';
import menu from './it-IT/menu';
import pwa from './it-IT/pwa';
import settingDrawer from './it-IT/settingDrawer';
import settings from './it-IT/settings';

export default {
  'navBar.lang': 'Lingue',
  'layout.user.link.help': 'Aiuto',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Termini',
  'app.preview.down.block': 'Scarica questa pagina nel tuo progetto locale',
  'app.welcome.link.fetch-blocks': 'Scarica tutti i blocchi',
  'app.welcome.link.block-list': 'Quickly build standard, pages based on `block` development',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
};
