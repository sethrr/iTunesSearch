import { useState, useEffect } from "react";
import useResults from "../utils/useResults";
import ShowResults from "./ShowResults";

export default function TypesSelector() {
  // const { loading, error } = useBrews(
  //     'https://api.openbrewerydb.org/breweries'
  // );
  const [type, setType] = useState('micro');

  const types = [
      "micro",
      "nano",
      "regional",
      "brewpub",
      "large",
      "planning",
      "bar",
      "contract",
      "proprieter",
      "closed",
  ];

  return (
      <div>
          <h2>Currently Showing {type}</h2>
          <select onChange={e => {setType(e.target.value);}}>
              {types.map((type) => (
              <option key={type} value={type} >
                  {type}
              </option>
              ))}
          </select>
          <ShowResults
              url={`https://api.openbrewerydb.org/breweries?by_type=${type}`}
          ></ShowResults>
      </div>
  );
}
