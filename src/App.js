import './App.css';

import React, { useState, useEffect } from 'react';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Menubar } from 'primereact/menubar';

// eslint-disable-next-line
import { Calendar } from '@fullcalendar/core';
import { FullCalendar } from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import Footer from './Components/Footer';

function App() {
  const data = [
    { title: 'Exit', start: '2021-11-01T17:50' },
    { title: 'Entered', start: '2021-11-01T12:00' },

    { title: 'Exit', start: '2021-11-02T13:10' },
    { title: 'Entered', start: '2021-11-02T14:10' },

    { title: 'Exit', start: '2021-11-03T16:40' },
    { title: 'Entered', start: '2021-11-03T18:00' },

    { title: 'Exit', start: '2021-11-04T17:50' },
    { title: 'Entered', start: '2021-11-04T19:00' },

    { title: 'Exit', start: '2021-11-05T11:04' },
    { title: 'Entered', start: '2021-11-05T12:41' },

    { title: 'Exit', start: '2021-11-06T17:50' },
    { title: 'Entered', start: '2021-11-06T12:00' },

    { title: 'Absent', start: '2021-11-07', color: 'salmon' },

    { title: 'Exit', start: '2021-11-08T20:50' },
    { title: 'Entered', start: '2021-11-08T21:32' },

    { title: 'Exit', start: '2021-11-09T12:52' },
    { title: 'Entered', start: '2021-11-09T14:20' },

    { title: 'Exit', start: '2021-11-10T15:50' },
    { title: 'Entered', start: '2021-11-10T15:55' },

    { title: 'Exit', start: '2021-11-11T19:50' },
    { title: 'Entered', start: '2021-11-11T18:00' },

    { title: 'Exit', start: '2021-11-12T14:50' },
    { title: 'Entered', start: '2021-11-12T15:00' },

    { title: 'Absent', start: '2021-11-13', color: 'salmon' },

    { title: 'Exit', start: '2021-11-14T18:20' },
    { title: 'Entered', start: '2021-11-14T22:10' },

    { title: 'Exit', start: '2021-11-15T14:52' },
    { title: 'Entered', start: '2021-11-15T22:14' },

    { title: 'Exit', start: '2021-11-16T12:50' },
    { title: 'Entered', start: '2021-11-16T13:00' },

    { title: 'Exit', start: '2021-11-17T14:30' },
    { title: 'Entered', start: '2021-11-17T15:00' },

    { title: 'Exit', start: '2021-11-18T14:50' },
    { title: 'Entered', start: '2021-11-18T19:00' },

    { title: 'Exit', start: '2021-11-19T14:50' },
    { title: 'Entered', start: '2021-11-19T22:00' },

    { title: 'Exit', start: '2021-11-20T11:50' },
    { title: 'Entered', start: '2021-11-20T17:00' },

    { title: 'Absent', start: '2021-11-21', color: 'salmon' },

    { title: 'Exit', start: '2021-11-22T14:50' },
    { title: 'Entered', start: '2021-11-22T16:00' },

    { title: 'Absent', start: '2021-11-23', color: 'salmon' },

    { title: 'Exit', start: '2021-11-24T16:50' },
    { title: 'Entered', start: '2021-11-24T21:00' },

    { title: 'Exit', start: '2021-11-25T13:50' },
    { title: 'Entered', start: '2021-11-25T16:00' },

    { title: 'Exit', start: '2021-11-26T14:50' },
    { title: 'Entered', start: '2021-11-26T15:00' },

    { title: 'Absent', start: '2021-11-27', color: 'salmon' },

    { title: 'Exit', start: '2021-11-28T17:50' },
    { title: 'Entered', start: '2021-11-28T18:00' },

    { title: 'Exit', start: '2021-11-29T17:03' },
    { title: 'Entered', start: '2021-11-29T18:30' },

    { title: 'Exit', start: '2021-11-30T17:50' },
    { title: 'Entered', start: '2021-11-30T12:00' },

    // { title: 'Absent', start: '2021-11-20', color: 'salmon' },
    // // { title: '', start: '2021-11-20', color: 'red' },
  ];

  const fullCalendarOptions = {
    plugins: [dayGridPlugin],
    defaultView: 'dayGridMonth',
  };

  const [display, setDisplay] = useState('calendar');
  const [events, setEvents] = useState([]);
  const navBar = [
    {
      label: 'Calendar',
      icon: 'pi pi-fw pi-calendar',
      command: () => {
        setDisplay('calendar');
      },
    },
  ];

  useEffect(() => {
    data.sort((a, b) => new Date(a.start) - new Date(b.start));
    setEvents(data);
  }, []);

  return (
    <>
      <header>
        <Menubar model={navBar} />
      </header>

      <main>
        {display === 'calendar' && (
          <FullCalendar
            className='p-mx-3 p-mt-6 p-mb-3 p-mx-md-6'
            options={fullCalendarOptions}
            events={events}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
