import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShareSquare } from "@fortawesome/free-solid-svg-icons";

export default function Card({repo}) {
  return (
    <>
        <ul>
          {repo.map((item, index) => {
            return (
              <li key={index} data-test="repositorio">
                <header>
                  <h1>{item.name}</h1>
                  <a
                    href={item.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faShareSquare}
                      color="#3976C2"
                      size="lg"
                    />
                  </a>
                </header>
                <article>
                  <header>
                    <img src={item.owner.avatar_url} alt="" />
                    <div>
                      <h1>{item.name}</h1>
                      <FontAwesomeIcon icon={faStar} color="#FDCC0D" />{" "}
                      <span>{item.stargazers_count}</span>
                    </div>
                  </header>
                  <main>
                    <p>{item.description}</p>
                    <span>#{item.language}</span>
                    <p>
                      {new Date(
                        Date.parse(item.created_at)
                      ).toLocaleDateString()}
                    </p>
                  </main>
                </article>
              </li>
            );
          })}
        </ul>
    </>
  );
}
