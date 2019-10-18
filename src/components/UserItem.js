import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Button } from "antd";
const MUTATION = gql`
    mutation mudarNome($id: ID!, $nome: String!) {
        mudarNome(id: $id, nome: $nome) {
            id
            nome_usuario
        }
    }
`;

const UserItem = props => {
    const [ editing, setEditing ] = useState(false);
    const [ novoNome, setNovoNome ] = useState(null);

    const [ updateNomeMutation, { loading, error}] = useMutation(MUTATION);

    if (!editing) {
        return <div onClick={() => { 
            setNovoNome(props.nome_usuario);
            setEditing(true);
        }}>{props.nome_usuario}</div>
    }
    
    return (
        <div>
            <div>
                {error && <div style={{color: "red"}}>{error.message}</div>}
                <input type="text" value={novoNome} onChange={(e) => setNovoNome(e.target.value)} /> 
                <Button type="primary" loading={loading} onClick={async () => {
                    await updateNomeMutation({variables: {
                        id: props.id,
                        nome: novoNome
                    }});

                    setEditing(false);
                }}> Salvar </Button>
                <Button onClick={()=> setEditing(false)}>cancelar</Button>
            </div>
        </div>
    )
};

export default UserItem;