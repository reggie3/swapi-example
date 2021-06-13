import "./App.css";
import { useState } from "react";

function App() {
  const [characterName, setCharacterName] = useState("");
  const [characterResponse, setCharacterResponse] = useState();

  const onChangeInput = (event) => {
    // console.log("event.target.value", event.target.value);
    setCharacterName(event.target.value);
  };

  const onClickSearch = () => {
    // console.log(`search for ${characterName}`);
    // https://swapi.dev/api/people/?search=r2
    fetch(`https://swapi.dev/api/people/?search=${characterName}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setCharacterResponse(jsonResponse.results[0]);
      });
  };

  return (
    <div className="App">
      <div>
        Character Name: <input onChange={onChangeInput} />
        <button onClick={onClickSearch}>Search</button>
      </div>
      <div>
        <h1>{characterResponse?.name ?? ""}</h1>
      </div>
    </div>
  );
}

export default App;
