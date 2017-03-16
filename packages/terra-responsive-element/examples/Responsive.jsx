 import React, { PropTypes } from 'react';
 import ResponsiveElement from '../src/ResponsiveElement';

 const propTypes = {
  /**
   * The viewport the element will be responsive to, one of `window` or `parent`
   */
   responsiveTo: PropTypes.oneOf(['window', 'parent']),
 };

 const defaultProps = {
   responsiveTo: 'parent',
 };

 const Responsive = ({ responsiveTo }) => {
   const tiny = <div>Tiny</div>;
   const small = <div>Small</div>;
   const medium = <div>Medium</div>;
   const large = <div>Large</div>;
   const huge = <div>Huge</div>;
   const defaultElement = <div>Default</div>;
   const responsiveElement = (
     <ResponsiveElement
       responsiveTo={responsiveTo}
       defaultElement={defaultElement}
       tiny={tiny}
       small={small}
       medium={medium}
       large={large}
       huge={huge}
     />
        );
   return (
     <div style={{ border: '1px dashed grey', width: '100%', marginTop: '10px', padding: '5px' }}>
       <div style={{ borderRight: '1px dashed grey', display: 'inline-block', width: '20%', padding: '5px' }}>
         {responsiveElement}
       </div>
       <div style={{ borderRight: '1px dashed grey', display: 'inline-block', width: '50%', padding: '5px' }}>
         {responsiveElement}
       </div>
       <div style={{ display: 'inline-block', width: '20%', padding: '5px' }}>
         {responsiveElement}
       </div>

     </div>
   );
 };

 Responsive.propTypes = propTypes;
 Responsive.defaultProps = defaultProps;

 export default Responsive;
