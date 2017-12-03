// Assets
import notifications from "../assets/img/035-bell-1.svg";
import mesages from "../assets/img/029-envelope.svg";
import settings from "../assets/img/023-settings-cogwheel.svg";
import share from "../assets/img/010-shapes-3.svg";
import search from "../assets/img/002-search-1.svg";

export default function menuMap(user, devices) {
  const commonConfig = [
    {
      name: "configuration",
      image: settings,
      path: "user/configuration"
    },
    {
      name: "profile",
      image: user.picture.toString(),
      path: "user/profile"
    },
    {
      name: "notifications",
      image: notifications,
      path: "user/notifications"
    },
    {
      name: "messages",
      image: mesages,
      path: "user/messages"
    },
    {
      name: "share",
      image: share,
      path: "user/share"
    }
  ];
  if (devices.isMobile) {
    return commonConfig;
  } else {
    const newCommonConfig = commonConfig.concat({
      name: 'search',
      image: search,
      path: '/user'
    });
    console.dir(newCommonConfig);
    return newCommonConfig;
  }
}
