/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Base from '../../terra-base/src/Base';
import Image from '../../terra-image/src/Image';
import DemographicsBanner from '../src/DemographicsBanner';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ReadMe from '!raw-loader!../docs/README.md';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');
const base64Img = `data:image/png;base64, /9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcg
SlBFRyB2ODApLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcU
GBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigo
KCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAlgCW
AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMF
BQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkq
NDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqi
o6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/E
AB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMR
BAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVG
R0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKz
tLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A
7LTLRLCyit4xwi4PufWnyHJz3oeTGahkkA5PSuJnTYSRgtVJJwGIJ4qK6uecVi317jODU3NFE1pL
lVB5GKryX6qOtcpfaoVB+bpXOal4qgtjiSYZ9ByaaTexfKluehz36n7rc1l3F2SeG5rz5vG0IP8A
qLls9DtwD+ZqWHxfDLy1peY9RGG/kaHCXYa5TrZbog5zSC9JABNc7H4j0uY7WuRG3pKpTH51eiaO
ZQ8Miup7qQRSs1uXozUefeuM81UlLAkoxB9qRGwcNTigK0xNFU3ciHDKjf7yCpYNQ2Pn7PHn2JH9
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`;

storiesOf('Demographics Banner', module)
.addDecorator((story, context) => withInfo(ReadMe)(story)(context))
.add('Populated', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="populated-demographics"
      applicationContent={<span>St. Johns West Wing Room Cardiac Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gestationalAge="May 11, 1993"
      postMenstrualAge="May 13, 1993"
      photo={<Image alt="Avatar" src={base64Img} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Blank', () => (
  <Base locale={locale}>
    <DemographicsBanner id="blank-demographics-banner" />
  </Base>
))
.add('Deceased', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="deceased-demographics"
      applicationContent={<span className="risk-score">5%</span>}
      age="25 Years"
      dateOfBirth="May 9, 1992"
      deceasedDate="March 12, 2017"
      photo={<Image alt="Avatar" src={base64Img} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Deceased (No Label)', () => (
  <Base locale={locale}>
    <DemographicsBanner id="deceased-demographics-no-label" deceasedDate="March 12, 2017" />
  </Base>
))
.add('Gestational Age and Post Menstrual Age', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span className="risk-score">5%</span>}
      age="65 Years"
      dateOfBirth="May 9, 1993"
      gender="Female"
      gestationalAge="April 5, 2016"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Jane Doe"
      postMenstrualAge="April 7, 2016"
      preferredFirstName="Jane"
    />
  </Base>
))
.add('Gestational Age (No Label)', () => (
  <Base locale={locale}>
    <DemographicsBanner id="gestational-age-no-label" gestationalAge="April 5, 2016" />
  </Base>
))
.add('Post Menstrual (No Label)', () => (
  <Base locale={locale}>
    <DemographicsBanner id="post-menstrual-no-label" postMenstrualAge="April 5, 2016" />
  </Base>
))
.add('Additional Details', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
));
