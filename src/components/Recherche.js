import React, { Component } from "react";
import { Button, Select } from "semantic-ui-react";

class Recherche extends Component {
    render() {
        const optionsDpt = [
            { key: "44", value: "44", text: "Loire Atlantique" },
            { key: "49", value: "49", text: "Maine et Loire" },
            { key: "53", value: "53", text: "Mayenne" },
            { key: "72", value: "72", text: "Sarthe" },
            { key: "85", value: "85", text: "Vendée" }
        ];
        const optionsAdministration = [
            { key: "cpam", value: "cpam", text: "Caisse primaire d'assurance maladie" },
            { key: "cci", value: "cci", text: "Chambre de commerce et d'industrie" },
            { key: "crous", value: "crous", text: "Crous et ses antennes" }
        ];
        return (
            <div className="recherche">
                <Select placeholder="Choisissez un département" options={optionsDpt} />
                <Select placeholder="Choisissez une administration" options={optionsAdministration} />
                <Button primary>Lancer la recherche</Button>
                <Button secondary>Vider la recherche</Button>
            </div>
        );
    }
}

export default Recherche;