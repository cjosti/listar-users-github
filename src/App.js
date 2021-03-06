import React, { useState } from "react";
import "./App.css";
import { getRepositories } from "./services/api";
import Header from "./components/Header";
import Card from "./components/Card";
import PageError from "./components/PageError";

export default function App() {
  const [repo, setRepo] = useState([]);
  const [entrada, setEntrada] = useState("");
  const [erroEntrada, setErroEntrada] = useState(false);
  const [page, setPage] = useState(0);
  const PageEnum = { Ok: 0, Empty: 1, NotFound: 2 };

  const handleChange = event => {
    const { value } = event.target;
    const validation = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

    if (!value.match(validation)) setErroEntrada(true);
    else setErroEntrada(false);

    setEntrada(value);
  };

  const handleEnter = event => {
    event.preventDefault();

    if (!erroEntrada)
      getRepositories(entrada)
        .then(json => {
          if (json.message) setPage(PageEnum.NotFound);
          else if (json.length) {
            setPage(PageEnum.Ok);
            setRepo(json);
          } else if (!json.length) setPage(PageEnum.Empty);
        })
        .catch(e => {
          setPage(PageEnum.NotFound);
          setRepo([]);
        });
  };

  const pageSwitch = param => {
    switch (page) {
      case PageEnum.Empty:
        return <PageError image="empty" test="sem-repositorios" />
      case PageEnum.NotFound:
        return <PageError image="404" test="nao-encontrado"/>
      default:
        return <Card repo={repo} />;
    }
  };

  return (
    <main>
      <section>
        <Header
          entrada={entrada}
          erro={erroEntrada}
          handleEnter={handleEnter}
          handleChange={handleChange}
        />
        <section>{pageSwitch(page)}</section>
      </section>
    </main>
  );
}
