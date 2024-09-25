import React from 'react';
import './App.css';
import Card from './components/Card';

const europe = [
  {title: 'Lithuania', link: 'https://en.wikipedia.org/wiki/Lithuania'},
  {title: 'France', link: 'https://en.wikipedia.org/wiki/France'},
  {title: 'Germany', link: 'https://en.wikipedia.org/wiki/Germany'},
  {title: 'Sweden', link: 'https://en.wikipedia.org/wiki/Sweden'},
  {title: 'Italy', link: 'https://en.wikipedia.org/wiki/Italy'}

]

const southAmerica = [
  {title: 'Colombia', link: 'https://en.wikipedia.org/wiki/Colombia'},
  {title: 'Brazil', link: 'https://en.wikipedia.org/wiki/Brazil'},
  {title: 'Argentina', link: 'https://en.wikipedia.org/wiki/Argentina'},
  {title: 'Chile', link: 'https://en.wikipedia.org/wiki/Chile'},
  {title: 'Peru', link: 'https://en.wikipedia.org/wiki/Peru'}
]

const asia = [
  {title: 'Japan', link: 'https://en.wikipedia.org/wiki/Japan'},
  {title: 'Thailand', link: 'https://en.wikipedia.org/wiki/Thailand'},
  {title: 'Korea', link: 'https://en.wikipedia.org/wiki/South_Korea'},
  {title: 'Singapore', link: 'https://en.wikipedia.org/wiki/Singapore'},
  {title: 'Vietnam', link: 'https://en.wikipedia.org/wiki/Vietnam'}
]



function App() {
  return (
    <div className="app-container">
      <h1>Countries To Visit</h1>
      
      
      <div className="section">
        <h3>Europe</h3>
        <div className="card-list">
          {europe.map((event, index) => (
            <Card key={index} title={event.title} description={event.description} link={event.link} />
          ))}
        </div>
      </div>

     
      <div className="section">
        <h3>South America</h3>
        <div className="card-list">
          {southAmerica.map((event, index) => (
            <Card key={index} title={event.title} description={event.description} link={event.link} />
          ))}
        </div>
      </div>

      
      <div className="section">
        <h3>Asia</h3>
        <div className="card-list">
          {asia.map((event, index) => (
            <Card key={index} title={event.title} description={event.description} link={event.link} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;