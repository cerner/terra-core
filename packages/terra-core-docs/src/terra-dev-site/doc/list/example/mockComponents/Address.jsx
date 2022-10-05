import React from 'react';

const mockAddresses = [
  [<address key='address0' ><b>West Pharmacy</b><br />52nd Street New York,<br />NY 10019, USA</address>],
  [<address key='address1' ><b>East Pharmacy</b><br />123rd Street New York,<br />NY 10102, USA</address>],
  [<address key='address2' ><b>North Pharmacy</b><br />Sesame Street New York,<br />NY 10115, USA</address>],
  [<address key='address3' ><b>South Pharmacy</b><br />Baker Street New York,<br />NY 10221, USA</address>],
  [<address key='address4' ><b>Central Pharmacy</b><br /> Street New York,<br />NY 10009, USA</address>],
];

const Address = (props) => {
  return (
    mockAddresses[props.number]
  );
};

export default Address;
