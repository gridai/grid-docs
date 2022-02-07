import Head from "@docusaurus/Head";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Termy = (props: Props) => {
  return (
    <div className="termy">
      <Head>
        {/* <script src="/js/termynal.js"></script> */}
      </Head>
      {props.children}
    </div>
  );
};

export default Termy;
