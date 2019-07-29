import React, { Component } from 'react';
import { ConsumerCategories } from '../context/CategoryContext';
import { EventsConsumer } from '../context/EventsContext';

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            category: ''
        }
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <EventsConsumer>
                {(value) => {
                    return (
                        <form
                            onSubmit={(e) =>{
                                e.preventDefault()
                                value.fetchEvents(this.state)
                            }}
                        >
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Busca tu evento por Nombre o Categoría
                                </legend>
                            </fieldset>

                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input
                                        name="name"
                                        className="uk-input"
                                        type="text"
                                        placeholder="Busca tu evento por Nombre o Ciudad"
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                            </div>
                            <div className="uk-margin" uk-margin="true">
                                <select className="uk-select" name="category" onChange={this.handleOnChange}>
                                    <option value="">Seleccione una Categoría</option>
                                    <ConsumerCategories>
                                        {(value)=>{
                                            return (
                                                value.categories.map(category => {
                                                    return (
                                                        <option
                                                            key={category.id}
                                                            value={category.id}
                                                            data-uk-form-select>
                                                                {category.name_localized}
                                                        </option>
                                                    )
                                                })
                                            )
                                        }}
                                    </ConsumerCategories>
                                </select>
                            </div>
                            <div>
                                <input 
                                    className="uk-button uk-button-danger" 
                                    type="submit" 
                                    value="Buscar Eventos"
                                />
                            </div>
                        </form>
                    )
                }}
            </EventsConsumer>
        );
    }
}

export default Form;