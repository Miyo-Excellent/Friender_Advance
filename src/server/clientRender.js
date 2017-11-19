// HTML
import html from './html';

export default function clientRender() {
  return (req, res, next) => {
    if (req.isBot) {
      return next();
    }
    const { isBot, isCurl, isDesktop, isMobile, isPlayStation } = req;
    const initialState = {
      devices: {
        isBot,
        isCurl,
        isDesktop,
        isMobile,
        isPlayStation
      }
    };
    res.send(html({
      markup: '',
      initialState
    }));
  };
}
