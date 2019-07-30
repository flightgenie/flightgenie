import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { reducers } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { globalStyle as GlobalStyle } from './utils';

// test result: https://www.kiwi.com/deep?from=LAX&to=BCN&departure=08-08-2019&return=09-08-2019&flightsId=243e10a146c4000086b859dd_0%7C10a101af46c40000addf1fc2_0%7C01af0a8946c546e5625da4e2_0%7C01af0a8946c546e5625da4e2_1%7C0a89243e46c600002c6fc147_0%7C01af0a8946c546e5625da4e2_2%7C01af0a8946c546e5625da4e2_3&price=1059&passengers=1&affilid=picky&lang=en&currency=EUR&booking_token=xlfCK4DnW9vdUZ+D9I2V7oeCzQomDQeVxMNtOeojJHCepvAJOToxpgcHOu8NspDcVZQgbsA87Qad4i9qxtWat1+1HVEn2VGQgMCG40xaLR3oeBFCcf4NKA\/Ka88lcJZGpmbZ5JWkKnqq\/WOqFQI711MWeqAYNQWG8PryaDWxIpt0xtBXgu2JJ\/F0Xydea7kPeeJNtFA4G+P\/NN5ZQqXWFjGZrnG4Sd4m98IEjXY6LNrfWJ1CcOnLWNjChdoRn3930h9Nppe7Qnv8sYz7peA4srVvNR9Py068kLHOmVfJmJ5s8cKl+VSXHJSplN+UK5+0PM3IzGoI4FC0tJVsPemPfF7H2HSK1p7nDR+vg7mVKH0TPJTHN1AysQ\/B4CVzUgIFCK63b9F3of5OM4r3HA32Q9XAFLHZrf\/YhscAQRM9xvp4LOfckVUsrN9YzmeHi+UBHotj0sFap6GPKT03oBHebnDZ59QGPP+bHQpezO\/oysZUAKONYMNcRTbKk0ClJ5AQZy1fOOdPa5pA56CkIIQwSEyLMdwWdPp6gBjfvSyTIElHAWs8ZSU0RvVBgr8gObokNrWknv0Z\/Y3bsINlWM4twWDd9i3\/YDtWoEkrSV3cQfoAcSqbFfTD1bFObME6Qf9DzsF7dOw24wciouLtL6Q+6IX0TLDCanuL93NWDsSh4mUjeEmSkUWwxLjtLdZLhcuXnZHbQHg+zOrcpT87XQL7LaYUJznEG0AvDNaB\/oaFi6iPcl\/MskSOaCF5q0Rp63JNgZFMl4pvwatB9CBHt4RohQIvfNQ5eovnI\/Lpsw25nzns+bnh6qb0wWjrtX4D6Y\/2+P\/Mmm45Fa29oGYzwXXiKA+QOo6Edh0CLwsJIhLs+N3+2dsOY\/pJdMqQt0rt5JxDoEro3JkBYnf7KrYsXMauYcrkfhZHMfDSlST0WwKqsjLXNsbuSNY8Xo3sloqX0Q4L+RagVRKvwPDkS\/7LUrUBDJ2qjeQ9h9uPWOxfus0aZ1Q7MSVO76ZqhE10Zz64Kg7SpXIG7GxQ3GTFQfmP7HHvgBs+mMid0iWDlaxO0IuLMyaoAjYzRL6ProWcs2IyYlqqdfrBaAjib0QatkFqiUaIqyYKnc3kS7xzlPyiAxS5iyzWkD\/A2\/itwTeRekzKTAr0hEWTJJbDqw\/+gUSUNdvllqrGUvLs\/ffvHgaF2WSlwv8H1xi1a6Z+AzIP97Oa\/ju7yXi4R8YDeTNhnBOwY3gNgFlyVYWPpbLr7tvQHDBw74hGPnqF8tU2t6Ie5+R39usheUAsnXoGXkvkKNxSAJEbmnIu7f608ffp+4OyiEj173NHdTyZ6\/EA5G1LEoNNvZh88gF5Z3k2fD+oIgx9UpYIB7lI4QSibpbv+xH7oe7iZlolMNhyHJiJslbUmVxPPtpfV1hp4\/Yz+8NQAkx2i2X8t64LsLwtb8JL0+cGpoJEThAQrehfxupKm\/fgqIjRdpANNNu3D+k7aN\/qKjVZ8hf2f27aqAnQFVpt\/uS9V4to9c0=
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
