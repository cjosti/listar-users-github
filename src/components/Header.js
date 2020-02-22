import React from "react";

export default function Header({ entrada, erro, handleEnter, handleChange }) {
  const style = {};

  if (erro) style.border = "2px solid red";
  else style.border = "1px solid #989898";

  return (
    <>
      <header id="header-page">
        <h1>GitHub</h1>
        <p>Veja os repositórios do seu usuário favorito!</p>
        <form onSubmit={handleEnter}>
          <input
            data-test="entrada"
            type="text"
            style={style}
            value={entrada}
            onChange={handleChange}
          />
        </form>
      </header>
    </>
  );
}
