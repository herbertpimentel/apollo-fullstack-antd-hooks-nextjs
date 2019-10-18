import React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";

const IdPage = props => {
  // like this works but renders aba as undefined first
  //   const {
  //     query: { aba }
  //   } = useRouter();
  const aba = props.aba;

  return (
    <>
      <h2>
        Essa é a pagina <u>create</u> no routes here{" "}
      </h2>

      <div>
        <Link href="/teste/create">
          <a>Aba padrao</a>
        </Link>{" "}
        |
        <Link href="/teste/create?aba=1">
          <a>Aba 1</a>
        </Link>{" "}
        |
        <Link href="/teste/create?aba=2">
          <a>Aba 2</a>
        </Link>{" "}
        |
        <Link href="/teste/create?aba=3">
          <a>Aba 3</a>
        </Link>{" "}
        |
        <Link href="/teste/create?aba=4">
          <a>Aba 4</a>
        </Link>
      </div>
      <div>
        {aba === undefined && <h3>Aba padrao</h3>}
        {aba === "1" && <h3>Aba 1</h3>}
        {aba === "2" && <h3>Aba 2</h3>}
        {aba === "3" && <h3>Aba 3</h3>}
        {aba === "4" && <h3>Aba 4</h3>}
      </div>
    </>
  );
};

IdPage.getInitialProps = ({ query }) => {
  return {
    aba: query.aba
  };
};

export default IdPage;
