import React, { Component } from 'react';
import axios from 'axios';

const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer

class EventsProvider extends Component {
    constructor(props){
        super(props)

        this.state = {
            events: []
        }
    }


    order = 'date'
    token = 'KMFG4XO47WWJGSWOYYC7'
    fetchEvents = async (search) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.name}&categories=${search.category}&sort_by=${this.order}&token=${this.token}`

        await axios.get(url)
            .then(res => {
                const { events } = res.data
                this.setState({
                    events
                }, () => console.log(this.state.events))
            })
    }

    render() {
        return (
            <EventsContext.Provider 
                value={{
                    events: this.state.events,
                    fetchEvents: this.fetchEvents
                }}
            >
                {this.props.children}
            </EventsContext.Provider>
        );
    }
}

export default EventsProvider;