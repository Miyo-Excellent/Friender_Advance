export default function deviceReducer(state = {}) {

  // console.log(state);
  // console.log(`Bot: ${state.isBot}`);
  // console.log(`Desktop: ${state.isDesktop}`);
  // console.log(`Mobile: ${state.isMobile}`);

  const { isBot, isCurl, isDesktop, isMobile, isPlayStation } = state;

  return {
    ...state,
    isBot,
    isCurl,
    isDesktop,
    isMobile,
    isPlayStation
  };
}
