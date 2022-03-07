import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import LogoImg from "../../assets/img/logo.png";
import IconBook from "../../assets/img/icon-book.svg";
import IconVideo from "../../assets/img/icon-video.svg";

import {
  Header,
  AboutHero,
  InfoHero,
  InfoHeroNumber,
  ComicsHero,
  Comic,
} from "./styles";

import { MessageError } from "../../components/MessageError";
import { Loading } from "../../components/Loading";

function HeroPage() {
  const idHero = useLocation().state;
  const [getHero, setHero] = useState([]);
  const [getComicsHero, setComicsHero] = useState([]);
  const [conditionErrorHero, setConditionErrorHero] = useState(false);
  const [conditionErrorComics, setConditionErrorHeroComics] = useState(false);
  const [getMessageError, setMessageError] = useState("");

  useEffect(
    function () {
      if (idHero) {
        fetch(
          `https://gateway.marvel.com:443/v1/public/characters/${idHero}?apikey=37e7928420ebfdcac88f6dbe3cbf39ec`
        )
          .then(function (response) {
            if (response.status === 200) {
              setConditionErrorHero(false);
              return response.json();
            }
          })
          .then(function (response) {
            setHero(...response.data.results);
          })
          .catch(() => {
            setConditionErrorHero(true);
            setMessageError(
              `Houve um erro de conexão com o servidor. Tente novamente mais tarde! Error 404`
            );
          });

        fetch(
          `https://gateway.marvel.com:443/v1/public/characters/${idHero}/comics?orderBy=onsaleDate&limit=12&apikey=37e7928420ebfdcac88f6dbe3cbf39ec`
        )
          .then(function (response) {
            if (response.status === 200) {
              setConditionErrorHeroComics(false);
              return response.json();
            }
          })
          .then(function (response) {
            setComicsHero(...getComicsHero, response.data.results);
          })
          .catch(() => {
            setConditionErrorHeroComics(true);
            setMessageError(
              "Houve um erro de conexão com o servidor. Tente novamente mais tarde!"
            );
          });
      }
    },
    [idHero]
  );

  function handleBackPage() {
    window.history.back();
  }

  return (
    <>
      <Header>
        <div>
          <button type="button" onClick={handleBackPage}>
            Voltar para homepage
          </button>
          <img src={LogoImg} alt="Marvel logo" />
        </div>
      </Header>

      {conditionErrorHero === true ? (
        <MessageError message={getMessageError} />
      ) : (
        <>
          {getHero.length === 0 ? (
            <Loading />
          ) : (
            <AboutHero>
              <InfoHero>
                <h1>{getHero.name}</h1>
                <p>{getHero.description}</p>
                <div>
                  <InfoHeroNumber>
                    <strong>Quadrinhos</strong>
                    <div>
                      <img src={IconBook} alt="Icon book" />
                      <span>{getHero.comics.available}</span>
                    </div>
                  </InfoHeroNumber>
                  <InfoHeroNumber>
                    <strong>Filmes</strong>
                    <div>
                      <img src={IconVideo} alt="Icon book" />
                      <span>{getHero.series.available}</span>
                    </div>
                  </InfoHeroNumber>
                </div>
              </InfoHero>
              <img
                src={`${getHero.thumbnail.path}.${getHero.thumbnail.extension}`}
                alt={getHero.name}
              />
            </AboutHero>
          )}
        </>
      )}

      <ComicsHero>
        <h2>Últimos lançamentos</h2>

        {conditionErrorComics === true ? (
          <MessageError message={getMessageError} />
        ) : (
          <>
            {getComicsHero.length === 0 ? (
              <Loading />
            ) : (
              <div>
                {getComicsHero.map((comic) => {
                  return (
                    <Comic key={comic.id}>
                      <img
                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        alt={comic.title}
                      />
                      <p>{comic.title}</p>
                    </Comic>
                  );
                })}
              </div>
            )}
          </>
        )}
      </ComicsHero>
    </>
  );
}

export default HeroPage;
