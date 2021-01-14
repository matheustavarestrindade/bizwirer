const latest = require('babel-preset-latest');
const presetReact = require('babel-preset-react');
require("babel-register")({
    presets: [latest, presetReact]
});
//Import our routes
const XMLRoutes = require("./components/Routes").default;
const Sitemap = require("react-router-sitemap").default;
const path = require('path');

(
    new Sitemap(XMLRoutes())
        .build("https://bizwirer.com")
        //Save it wherever you want
        .save(`${path.resolve(__dirname, "../public/sitemap.xml")}`)
)

