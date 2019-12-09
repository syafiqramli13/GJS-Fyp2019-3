export default {
  items: [
    {
      title: true,
      name: "Public & Participant",
      wrapper: {
        element: "",
        attributes: {}
      },
      class: "text-center"
    },
    {
      name: "AboutUs",
      url: "/AboutUs",
      icon: "icon-info"
    },
    {
      name: "Activity",
      url: "/Activity",
      icon: "icon-game-controller"
    },
    {
      name: "Archive",
      url: "/Archive",
      icon: " icon-notebook",
      children: [
        {
          name: "Handcrafts",
          url: "/Archive/Handcrafts",
          icon: "icon-puzzle "
        },
        {
          name: "Tools",
          url: "/Archive/Tool",
          icon: "icon-wrench"
        }
      ]
    },
    {
      name: "Photo Gallery",
      url: "/GalleryPhoto",
      icon: "icon-picture"
    },
    {
      name: "Video Gallery",
      url: "/Video",
      icon: "icon-film"
    },
    {
      name: "Kerchang's Scanner",
      url: "/KerchangScanner",
      icon: "icon-camera"
    },
    {
      name: "Contact",
      url: "/Contact",
      icon: "icon-people"
    },
    {
      name: "Inquiries",
      url: "/Inquiries",
      icon: "icon-pencil"
    },
    {
      name: "GJS Facebook",
      url: "https://www.facebook.com/JungleSchoolGombak/",
      icon: "icon-social-facebook ",
      class: "mt-auto",
      variant: "primary",
      attributes: { target: "_blank", rel: "noopener" }
    },
    {
      name: "GJS Instagram",
      url: "https://www.instagram.com/jungleschoolgombak/?hl=en",
      icon: "icon-social-instagram",
      variant: "primary",
      attributes: { target: "_blank", rel: "noopener" }
    }
  ]
};
