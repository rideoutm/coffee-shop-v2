// Components

import Carousel from "../components/Carousel/Carousel";
import Mission from "../components/Mission/Mission";
import Video from "../components/Video/Video";
import Menu from "../components/Menu/Menu";
import HpBlogComp from "../components/HpBlogComp/HpBlogComp";
import ReviewCarousel from "../components/ReviewCarousel/ReviewCarousel";
import Partners from "../components/Partners/Partners";

// Utilities
import { useRef } from "react";

export default function Homepage({ menuRef }) {
  const smoothScrollRef = useRef();
  return (
    <>
      <Carousel smoothScrollRef={smoothScrollRef} />
      <Mission smoothScrollRef={smoothScrollRef} />
      <HpBlogComp />
      <Video />
      <Menu menuRef={menuRef} />
      <ReviewCarousel />
      <Partners />
    </>
  );
}
