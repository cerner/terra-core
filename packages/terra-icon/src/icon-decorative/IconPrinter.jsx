/* eslint-disable */
import React from 'react';
import IconBaseDec from '../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes}>
      <path d="M39.8 12H35V1.7c0-.9-.8-1.7-1.7-1.7H8.7C7.8 0 7 .8 7 1.7V12H2.2C1 12 0 13 0 14.2v19.7C.1 35.1 1 36 2.2 36H7v10.3c0 .9.8 1.7 1.7 1.7h24.6c.9 0 1.7-.8 1.7-1.7V36h4.8c1.2 0 2.2-1 2.2-2.2V14.2c0-1.2-1-2.2-2.2-2.2zM10 3h22v9H10V3zm22 42H10V29.9h22V45zm3.2-24C34 21 33 20 33 18.8s1-2.2 2.2-2.2 2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconPrinterDec";
SvgIcon.defaultProps = {"viewBox":"0 0 42 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
