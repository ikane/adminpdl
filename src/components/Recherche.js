import React, { Component } from "react";
import { Button, Select } from "semantic-ui-react";
import './recherche.css'

class Recherche extends Component {

    state = {
        departement: '',
        type: ''
    }

    onDepartementChange = (e, data) => {
        this.setState({ departement: data.value });
    }

    onTypeChange = (e, data) => {
        this.setState({ type: data.value });
    }

    render() {
        const optionsDpt = [
            { key: "44", value: "44", text: "Loire Atlantique" },
            { key: "49", value: "49", text: "Maine et Loire" },
            { key: "53", value: "53", text: "Mayenne" },
            { key: "75", value: "75", text: "Paris" },
            { key: "72", value: "72", text: "Sarthe" },
            { key: "94", value: "94", text: "Val de Marne" },
            { key: "85", value: "85", text: "Vendée" }
        ];
        const optionsAdministration = [
            { key: "cpam", value: "cpam", text: "Caisse primaire d'assurance maladie" },
            { key: "cci", value: "cci", text: "Chambre de commerce et d'industrie" },
            { key: "crous", value: "crous", text: "Crous et ses antennes" }
        ];
        return (
            <div className="recherche">
                <Select placeholder="Choisissez un département" onChange={this.onDepartementChange} options={optionsDpt} value={this.state.departement} />
                <Select placeholder="Choisissez une administration" onChange={this.onTypeChange} options={optionsAdministration} value={this.state.type} />
                <Button primary onClick={() => this.props.onSearch(this.state.departement, this.state.type)}>Lancer la recherche</Button>
                <Button secondary onClick={this.props.onEmpty}>Vider la recherche</Button>
            </div>
        );
    }
}

export default Recherche;