import React from 'react';
import Header from './components/Header';
import ContextProvider from './context/CategoryContext';
import Form from './components/Form';
import EventsProvider from './context/EventsContext';
import EventList from './components/EventList';

function App() {
  return (
    <EventsProvider>
      <ContextProvider>
        <Header/>

        <div className="uk-container">
          <Form />
          
          <EventList />
        </div>
      </ContextProvider>
    </EventsProvider>
  );
}

export default App;
