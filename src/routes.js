import React from "react";

//const untuk import screen

const AboutUs = React.lazy(() => import("./screens/PubAboutUs"));
const Activity = React.lazy(() => import("./screens/PubActivity"));
const Contact = React.lazy(() => import("./screens/PubContact"));
const Inquiries = React.lazy(() => import("./screens/PubInquiries"));
const Photo = React.lazy(() => import("./screens/PubPhoto"));
const Video = React.lazy(() => import("./screens/PubVideo"));
const Handcrafts = React.lazy(() => import("./screens/PubHandcrafts"));
const Tool = React.lazy(() => import("./screens/PubTool"));
const KerchangScanner = React.lazy(() =>
  import("./screens/PubKerchangScanner")
);

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/AboutUs", name: "AboutUs", component: AboutUs },
  { path: "/Activity", name: "Activity", component: Activity },
  { path: "/Archive", exact: true, name: "Archive", component: Handcrafts },
  { path: "/Archive/Handcrafts", name: "Handcrafts", component: Handcrafts },
  { path: "/Archive/Tool", name: "Tool", component: Tool },
  { path: "/GalleryPhoto", name: "Photo", component: Photo },
  { path: "/Video", name: "Video", component: Video },
  { path: "/Contact", name: "Contact", component: Contact },
  { path: "/Inquiries", name: "Inquiries", component: Inquiries },
  {
    path: "/KerchangScanner",
    name: "KerchangScanner",
    component: KerchangScanner
  }
];

export default routes;
