import React from "react";
import { Card } from "semantic-ui-react";

const Etablissement = () => {
    return (
        <Card>
            <Card.Header>Nom d'établissement</Card.Header>
            <Card.Meta>Téléphone: 01.02.03.04.05</Card.Meta>
            <Card.Meta>Email: abc@def.fr</Card.Meta>
        </Card>
    );
}

export default Etablissement;