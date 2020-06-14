import React from "react";
import { Card } from "semantic-ui-react";

const Etablissement = ({ properties }) => {
    //console.log(properties);
    const { nom, telephone, email, url } = properties;
    return (
        <Card>
            <Card.Header>{nom}</Card.Header>
            <Card.Meta>Téléphone: {telephone}</Card.Meta>
            <Card.Meta>Email: {email}</Card.Meta>
            <Card.Meta>Site: {url}</Card.Meta>
        </Card>
    );
}

export default Etablissement;