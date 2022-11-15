import React from 'react';
import Card from 'terra-card';
import Divider from 'terra-divider';

const date1 = '1979 Cerner is founded';
const date2 = '2006 Cerner opens Healthe Clinic';

const DividerExampleAccess = () => (
  <div>
    <Card>
      <Card.Body>
        <div>
          <p>
            For over four decades, Cerner has pursued breakthrough innovation that’s helped shape the health care
            industry as we know it.
          </p>
          <Divider text={date1} level={3} />
          <p>
            Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat
            around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas.
            It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that
            would eventually become Cerner.
          </p>
          <Divider text={date2} level={3} />
          <p>The company’s first on-site health clinic opened on its World Headquarters campus.</p>
          <Divider />
          <p>
            Since 1979, we’ve been proud to work at the intersection of health care and information technology to
            connect people and systems around the world.
          </p>
        </div>
      </Card.Body>
    </Card>
  </div>
);

export default DividerExampleAccess;
