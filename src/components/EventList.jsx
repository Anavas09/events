import React from 'react';
import { EventsConsumer } from '../context/EventsContext';
import Event from './Event';

const EventList = () => {
    return (
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <EventsConsumer>
                {({events}) => {
                    if (events.length > 0){
                        return (
                            events.map(event => {
                                return(
                                    <Event key={event.id} event={event}/>
                                )
                            })
                        )
                    }else{
                        return null
                    }
                }}
            </EventsConsumer>
        </div>
    );
};

export default EventList;