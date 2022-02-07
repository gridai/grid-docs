import Admonition from "@theme/Admonition";
import React from "react";
import styles from "./index.module.css";

const Note: React.FC = (props) => {
  return (
    <div className={styles.admonition_heading}>
      <Admonition type={"info"} title="Note">
        &nbsp;&nbsp;<b>{props.children}</b>
      </Admonition>
    </div>
  );
};
export default Note;
