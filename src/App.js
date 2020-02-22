import React, { useState, useEffect } from "react";
import "./App.css";
import { getRepositories } from "./services/api";
import Header from "./components/Header";
import Card from "./components/Card";

export default function App() {
  const [repo, setRepo] = useState([]);
  const [entrada, setEntrada] = useState("");
  const [erro, setErro] = useState(false);

  const handleChange = event => {
    const { value } = event.target;
    const validation = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

    if (!value.match(validation)) setErro(true);
    else setErro(false);

    setEntrada(value);
  };

  const handleEnter = event => {
    event.preventDefault();

    if (!erro)
      getRepositories(entrada)
        .then(json => setRepo(json))
        .catch(e => {
          console.log("Erro", e);
          setRepo([]);
        });
  };

  useEffect(() => {
    getRepositories("degrecci")
      .then(json => setRepo(json))
      .catch(e => {
        console.log("Erro", e);
        setRepo([]);
      });
  }, []);

  return (
    <main>
      <section>
        <Header
          entrada={entrada}
          erro={erro}
          handleEnter={handleEnter}
          handleChange={handleChange}
        />
        <Card repo={repo}/>
      </section>
    </main>
  );
}
