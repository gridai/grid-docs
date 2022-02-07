import React from "react";

type Props = {
  src: string;
  children?: React.ReactNode;
};

const Video = (props: Props) => {
  return (
    <video width="100%" height="320" controls>
      <source src={props.src} type="video/mp4" />
    </video>
  );
};

export default Video;
