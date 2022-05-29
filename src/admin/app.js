import Logo from "./extensions/logo.jpg";
import Logo2 from "./extensions/logo-2.png";
import favicon from "./extensions/favicon.ico";

export default {
  config: {
    locales: [],
    auth: {
      logo: Logo2,
    },
    head: {
      favicon: favicon,
    },
    menu: {
      logo: Logo,
    },
    tutorials: false,
    notifications: { release: false },
  },
  bootstrap(app) {
    console.log(app);
  },
};
