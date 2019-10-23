import React from "react";
import { useQuery } from '@apollo/react-hooks'
import gql from "graphql-tag";
import { getValue } from "../lib/util";

import UserItem from "./UserItem";

const QUERY = gql`
  query ViewerQuery {
    usuarios {
      id
      nome_usuario
    }
  }
`

const UserList = props => {

    const {data, loading, error } = useQuery(QUERY);
    const usuarios = getValue(data, 'usuarios');

    if (error) {
        return `Error: ${error.message}`;
    }

    if (loading) {
        return "loading...";
    }

    if (usuarios) {
        return usuarios.map(u => {
            return (
                <UserItem key={u.id} {...u} />
            );
        });
    }

    return null;
}


export default UserList;