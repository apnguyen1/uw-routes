import React, {useState} from 'react';

import "./styles/global.css"
import {UserInterface} from "./components/UserInterface";
import {Map} from "./components/Map"

function App() {
    const [start, setStart] = useState("CSE");
    const [end, setEnd] = useState("CS2");
    const [path, setPath] = useState([
        {"start":{"x":2259.7112,"y":1715.5273},"end":{"x":2291.0259,"y":1720.5781},"cost":61.730251955377284},
        {"start":{"x":2291.0259,"y":1720.5781},"end":{"x":2298.4759,"y":1744.9308},"cost":51.81979607443278},
        {"start":{"x":2298.4759,"y":1744.9308},"end":{"x":2315.6199,"y":1747.3882},"cost":36.52426519042983},
        {"start":{"x":2315.6199,"y":1747.3882},"end":{"x":2313.6393,"y":1764.0426},"cost":35.08820880549876},
        {"start":{"x":2313.6393,"y":1764.0426},"end":{"x":2315.0936,"y":1780.7913},"cost":52.35194879147243}]);
  return (
      <>
          <UserInterface
              set={setPath}
              start={{type: start, set:setStart}}
              end={{type: end, set:setEnd}}
          />
          <Map path={path}/>
      </>

  );
}

export {App};
