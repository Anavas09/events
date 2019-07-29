import React, { Component } from 'react';
import axios from 'axios';
//API KEY: BUAY3GZNB5QQE6EL3I

//Create Context
const ContextCategory = React.createContext();
export const ConsumerCategories = ContextCategory.Consumer

class ContextProvider extends Component {
    constructor(props){
        super(props)

        this.state = {
            categories: []
        }
    }

    componentDidMount(){
        this.fetchCategories()
    }

    token = 'KMFG4XO47WWJGSWOYYC7'
    fetchCategories = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`
        //let url = 'http://localhost:3006/categories'

        await axios.get(url)
            .then(res => {
                const { categories } = res.data
                this.setState({
                    categories
                })
            })
    }

    render() {
        return (
            <ContextCategory.Provider
                value={{
                    categories: this.state.categories
                }}
            >
                {this.props.children}
            </ContextCategory.Provider>
        );
    }
}

export default ContextProvider;