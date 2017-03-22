import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-title/docs/README.md';
// eslint-disable-next-line import/extensions
import 'terra-title';

const TitleExamples = () => (
  <div>
    <link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" />
    <Markdown id="readme" src={ReadMe} />
    <h2 id="caption">Caption</h2>
    <h1 className="terra-Title terra-Title--tiny terra-Title--horizontalMiddle">
      <span className="terra-Title--heading">
        Terra Title Horizontal Middle Caption
        <div className="terra-Title--caption">Terra Title Caption</div>
      </span>
    </h1>
    <br />
    <h1 className="terra-Title terra-Title--tiny terra-Title--verticalCenter">
      <span className="terra-Title--heading">
        Terra Title Vertical Center Caption
        <div className="terra-Title--caption">Terra Title Caption</div>
      </span>
    </h1>
    <br />
    <br />
    <h2 id="graphic">Graphic</h2>
    <h1 className="terra-Title terra-Title--tiny terra-Title--horizontalMiddle">
      <span className="terra-Title--graphic">
        <i className="fa fa-cloud" />
      </span>
      <span className="terra-Title--heading">
        Terra Title Horizontal Middle Graphic
      </span>
    </h1>
    <br />
    <h1 className="terra-Title terra-Title--tiny terra-Title--verticalCenter">
      <span className="terra-Title--graphic">
        <i className="fa fa-cloud" />
      </span>
      <span className="terra-Title--heading">
        Terra Title Vertical Center Graphic
      </span>
    </h1>
    <br />
    <br />
    <h2 id="horizontal">Horizontal</h2>
    <h1 className="terra-Title terra-Title--medium terra-Title--horizontalTop">
      <span className="terra-Title--graphic">
        <img src="https://placeholdit.imgix.net/~text?txtsize=20&txt=100%C3%97100&w=100&h=100" alt="Placeholder" />
      </span>
      <span className="terra-Title--heading">
        Terra Title Horizontal Top Graphic Caption
        <div className="terra-Title--caption">Terra Title Caption</div>
      </span>
    </h1>
    <hr />
    <h1 className="terra-Title terra-Title--medium terra-Title--horizontalMiddle">
      <span className="terra-Title--graphic">
        <img src="https://placeholdit.imgix.net/~text?txtsize=20&txt=100%C3%97100&w=100&h=100" alt="Placeholder" />
      </span>
      <span className="terra-Title--heading">
        Terra Title Horizontal Middle Graphic Caption
        <div className="terra-Title--caption">Terra Title Caption</div>
      </span>
    </h1>
    <hr />
    <h1 className="terra-Title terra-Title--medium terra-Title--horizontalBottom">
      <span className="terra-Title--graphic">
        <img src="https://placeholdit.imgix.net/~text?txtsize=20&txt=100%C3%97100&w=100&h=100" alt="Placeholder" />
      </span>
      <span className="terra-Title--heading">
        Terra Title Horizontal Bottom Graphic Caption
        <div className="terra-Title--caption">Terra Title Caption</div>
      </span>
    </h1>
    <br />
    <br />
    <h2 id="size">Size</h2>
    <h1 className="terra-Title terra-Title--huge">h1 terra-title-huge</h1>
    <h2 className="terra-Title terra-Title--huge">h2 terra-title-huge</h2>
    <h3 className="terra-Title terra-Title--huge">h3 terra-title-huge</h3>
    <h4 className="terra-Title terra-Title--huge">h4 terra-title-huge</h4>
    <h5 className="terra-Title terra-Title--huge">h5 terra-title-huge</h5>
    <h6 className="terra-Title terra-Title--huge">h6 terra-title-huge</h6>
    <br />
    <h1 className="terra-Title terra-Title--large">h1 terra-title-large</h1>
    <h2 className="terra-Title terra-Title--large">h2 terra-title-large</h2>
    <h3 className="terra-Title terra-Title--large">h3 terra-title-large</h3>
    <h4 className="terra-Title terra-Title--large">h4 terra-title-large</h4>
    <h5 className="terra-Title terra-Title--large">h5 terra-title-large</h5>
    <h6 className="terra-Title terra-Title--large">h6 terra-title-large</h6>
    <br />
    <h1 className="terra-Title terra-Title--medium">h1 terra-title-medium</h1>
    <h2 className="terra-Title terra-Title--medium">h2 terra-title-medium</h2>
    <h3 className="terra-Title terra-Title--medium">h3 terra-title-medium</h3>
    <h4 className="terra-Title terra-Title--medium">h4 terra-title-medium</h4>
    <h5 className="terra-Title terra-Title--medium">h5 terra-title-medium</h5>
    <h6 className="terra-Title terra-Title--medium">h6 terra-title-medium</h6>
    <br />
    <h1 className="terra-Title terra-Title--small">h1 terra-title-small</h1>
    <h2 className="terra-Title terra-Title--small">h2 terra-title-small</h2>
    <h3 className="terra-Title terra-Title--small">h3 terra-title-small</h3>
    <h4 className="terra-Title terra-Title--small">h4 terra-title-small</h4>
    <h5 className="terra-Title terra-Title--small">h5 terra-title-small</h5>
    <h6 className="terra-Title terra-Title--small">h6 terra-title-small</h6>
    <br />
    <h1 className="terra-Title terra-Title--tiny">h1 terra-title-tiny</h1>
    <h2 className="terra-Title terra-Title--tiny">h2 terra-title-tiny</h2>
    <h3 className="terra-Title terra-Title--tiny">h3 terra-title-tiny</h3>
    <h4 className="terra-Title terra-Title--tiny">h4 terra-title-tiny</h4>
    <h5 className="terra-Title terra-Title--tiny">h5 terra-title-tiny</h5>
    <h6 className="terra-Title terra-Title--tiny">h6 terra-title-tiny</h6>
    <br />
    <br />
    <h2 id="vertical">Vertical</h2>
    <h1 className="terra-Title terra-Title--medium terra-Title--verticalStart">
      <span className="terra-Title--graphic">
        <i className="fa fa-cloud" />
      </span>
      <span className="terra-Title--heading">
        Terra Title Horizontal Start Graphic Caption
        <div className="terra-Title--caption">Terra Title Caption</div>
      </span>
    </h1>
    <hr />
    <h1 className="terra-Title terra-Title--medium terra-Title--verticalCenter">
      <span className="terra-Title--graphic">
        <i className="fa fa-cloud" />
      </span>
      <span className="terra-Title--heading">
        Terra Title Horizontal Center Graphic Caption
        <div className="terra-Title--caption">Terra Title Caption</div>
      </span>
    </h1>
    <hr />
    <h1 className="terra-Title terra-Title--medium terra-Title--verticalEnd">
      <span className="terra-Title--graphic">
        <i className="fa fa-cloud" />
      </span>
      <span className="terra-Title--heading">
        Terra Title Horizontal End Graphic Caption
        <div className="terra-Title--caption">Terra Title Caption</div>
      </span>
    </h1>
  </div>
);

export default TitleExamples;
