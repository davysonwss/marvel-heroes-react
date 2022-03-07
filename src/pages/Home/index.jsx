import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo.png";
import IconHero from "../../assets/img/icon-hero.svg";

import {
  Header,
  FilterContainer,
  Filter,
  FilterOrder,
  Search,
  HeroInfoQuantity,
  Heroes,
  Hero,
} from "./styles";

import { MessageError } from "../../components/MessageError";
import { Loading } from "../../components/Loading";

function Homepage() {
  const [getHeroes, setHeroes] = useState([]);
  const [getSearchHero, setSearchHero] = useState("");
  const [checked, setChecked] = useState(false);
  const [conditionError, setConditionError] = useState(false);
  const [getMessageError, setMessageError] = useState("");

  console.log();

  useEffect(
    function () {
      if (getSearchHero === "") {
        fetch(
          `https://gateway.marvel.com:443/v1/public/characters?orderBy=${
            checked === true ? "-name" : "name"
          }&limit=20&apikey=${process.env.REACT_APP_API_KEY}`
        )
          .then(function (response) {
            if (response.status === 200) {
              setConditionError(false);
              return response.json();
            }
          })
          .then(function (response) {
            setHeroes(response.data);
          })
          .catch(() => {
            setConditionError(true);
            setMessageError(
              `Houve um erro de conexão com o servidor. Tente novamente mais tarde!`
            );
          });
      }
    },
    [checked, getSearchHero]
  );

  useEffect(() => {
    if (getSearchHero.length > 1) {
      fetch(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${getSearchHero}&orderBy=${
          checked === true ? "-name" : "name"
        }&apikey=${process.env.REACT_APP_API_KEY}`
      )
        .then(function (response) {
          if (response.status === 200) {
            setConditionError(false);
            return response.json();
          }
        })
        .then(function (response) {
          if (response.data.results.length > 0) {
            setHeroes(response.data);
          } else {
            setHeroes([]);
            setConditionError(true);
            setMessageError(
              "Ops! Nenhum herói foi encontrado, refaça sua pesquisa."
            );
          }
        })
        .catch(() => {
          setConditionError(true);
          setMessageError(
            "Houve um erro de conexão com o servidor. Tente novamente mais tarde!"
          );
        });
    }
  }, [checked, getSearchHero]);

  return (
    <>
      <Header>
        <img src={Logo} alt="Logo marvel" />
        <div>
          <h1>Explore o universo</h1>
          <p>
            Mergulhe no domínio deslumbrante de todos os personagens clássicos
            que você ama, e aqueles que você descobrirá em breve.
          </p>
        </div>
      </Header>
      <FilterContainer>
        <Filter>
          <img src={IconHero} alt="Icon hero" />
          <label htmlFor="order-filter">Odernar por nome Z-A</label>
          <FilterOrder
            type="checkbox"
            name="order-filter"
            id="order-filter"
            defaultChecked={checked}
            onChange={() => setChecked(!checked)}
          ></FilterOrder>
        </Filter>
        <Search>
          <input
            type="text"
            placeholder="Busque por nome"
            value={getSearchHero}
            onChange={(e) => setSearchHero(e.target.value)}
          />
          <ion-icon name="search-outline"></ion-icon>
        </Search>
      </FilterContainer>

      <HeroInfoQuantity>
        <span>{getHeroes.count || 0}</span>
        {getHeroes.count <= 1 || getHeroes.count === undefined
          ? " herói encontrado"
          : " heróis encontrados"}
      </HeroInfoQuantity>

      {conditionError === true ? (
        <MessageError message={getMessageError} />
      ) : (
        <>
          {getHeroes.length === 0 ? (
            <Loading />
          ) : (
            <Heroes>
              {getHeroes.results.map((hero) => {
                return (
                  <Hero key={hero.id}>
                    <Link
                      to={`hero/${hero.name.toLowerCase()}`}
                      state={hero.id}
                    >
                      <img
                        src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                        alt={hero.name}
                      />
                      <p>{hero.name}</p>
                    </Link>
                  </Hero>
                );
              })}
            </Heroes>
          )}
        </>
      )}
    </>
  );
}

export default Homepage;
