import ImageGallery from "react-image-gallery";
import React, { Component } from "react";

const images = [
  {
    src: "./assets/img/gallery/gjs1.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
    width: 5,
    height: 3
  },
  {
    src: "./assets/img/gallery/gjs2.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
    width: 5,
    height: 3
  },
  {
    src: "./assets/img/gallery/gjs3.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
    width: 4,
    height: 3
  },
  {
    src: "./assets/img/gallery/gjs4.jpg",
    altText: "Slide 4",
    caption: "Slide 4",
    width: 5,
    height: 3
  },
  {
    src: "./assets/img/gallery/gjs5.jpg",
    altText: "Slide 5",
    caption: "Slide 5",
    width: 4,
    height: 3
  },
  {
    src: "./assets/img/gallery/gjs6.jpg",
    altText: "Slide 6",
    caption: "Slide 6",
    width: 4,
    height: 3
  },
  {
    src: "./assets/img/gallery/gjs8.jpg",
    altText: "Slide 7",
    caption: "Slide 7",
    width: 4,
    height: 3
  }
];

export default class PhotoGallery extends Component {
  render() {
    return <ImageGallery items={images} />;
  }
}
