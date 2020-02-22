import React from "react";

export default function PageError({ image, test}) {
  return (
    <div data-test={test}>
      <img
        className="repo-empty"
        src={require(`../assets/images/${image}.png`)}
        alt=""
      />
    </div>
  );
}
