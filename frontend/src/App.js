import React, {useEffect,useState} from 'react';

function App() {

  const [backendData,setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return(
    <div>

      {(typeof backendData.countryInfo === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.countryInfo.map((country, i) => (
          <p key={i}>{country}</p>
        ))
      )}
      
    </div>
  )
}

export default App;