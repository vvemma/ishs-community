import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Block.module.css";

function Block({ img, title, link }) {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className={styles.button}
        onClick={() => {
          navigate("/" + link);
        }}
      >
        <h1 style={{ fontFamily: "KCC-Ganpan" }}>{title}</h1>
        <img className={styles.img} src={img} />
      </button>
    </div>
  );
}

export default Block;
