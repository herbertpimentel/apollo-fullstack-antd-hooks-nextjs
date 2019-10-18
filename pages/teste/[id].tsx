import React from "react";
import { useRouter } from "next/router";

const IdPage = props => {
  const router = useRouter();
  const { id } = router.query;

  return <h2>Essa é codigo {id}</h2>;
};

export default IdPage;
