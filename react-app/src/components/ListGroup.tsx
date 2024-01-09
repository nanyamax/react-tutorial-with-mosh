// import { MouseEvent } from "react";
// in react a component cannot have more than one element
// to use multiple elements in one component:-
//  use div to wrap all the elements
//  import {Fragment} from "react"
// props are the input to our componnents
/* difference btw props and state
PROPS or properties are the inputs or arguments passed to a component.
similar to function arguments
treat props as immutatable(unchangeable). this means its readonly
cause a re-render

STATE- internal data managed by a component that can change over time.
similar to local variables inside a function
mutable
cause a re-render
*/

import { useState } from 'react';
/*
how can you make components reusable-: first you need to decide the shape of the input to the component
eg {cities: [], heading: string} to set this object with two properties you use a typeScript feature called an INTERFACE.
*/
interface Props {
  cities: string[];
  heading: string;
  header: string;
  onSelectItem: (city: string) => void;
}
//  use <></> without importing fragment, this tells react to use fragment to wrap all the children elements. this is simpler and shorter.
function ListCities({ cities, heading, header, onSelectItem }: Props) {
  // handling type annotation: with type annotations you can specify the type of variables, parameters e.t.c
  // event handler
  // const handleClick = (event: MouseEvent) => console.log(event)

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <h3 className="text-body-secondary">{header}</h3>
      {/* using the && instead of if statement or tenary operation
      {cities.length === 0 && <p>No cities found</p>} */}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={city}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(city);
            }}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListCities;
