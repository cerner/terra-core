import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import ProgressBar from '../src/ProgressBar';
import '../src/progress-bar.scss';

const propTypes = {
  children: PropTypes.element,
};

const defaultProps = {
  children: null,
};

const ProgressBarWrapper = props => (
  <div style={{ width: '100%', border: '1px solid black', padding: '5px 5px 5px 5px' }}>
    {props.children}
  </div>
);

ProgressBarWrapper.propTypes = propTypes;

ProgressBarWrapper.defaultProps = defaultProps;

render(
  (<div>
    <h1>{'ProgressBar Usages'}</h1>

    <h3>{'Without Props: Default size: small, intent: info, value: 0, max:100'}
      <ProgressBarWrapper>
        <ProgressBar />
      </ProgressBarWrapper>
    </h3>


    <h3>{'With Height prop:'}</h3>
    <ul>
      <li>
        <h5>{'With Height prop: height=\'tiny\' value={15}'}
          <ProgressBarWrapper>
            <ProgressBar height="tiny" value={15} />
          </ProgressBarWrapper>
        </h5>
      </li>

      <li>
        <h5>{'With Height prop: height=\'small\' value={30}'}
          <ProgressBarWrapper>
            <ProgressBar height="small" value={30} />
          </ProgressBarWrapper>
        </h5>
      </li>

      <li>
        <h5>{'With Height prop: height=\'medium\' value={45}'}
          <ProgressBarWrapper>
            <ProgressBar height="medium" value={45} />
          </ProgressBarWrapper>
        </h5>
      </li>

      <li>
        <h5>{'With Height prop: height=\'large\' value={60}'}
          <ProgressBarWrapper>
            <ProgressBar height="large" value={60} />
          </ProgressBarWrapper>
        </h5>
      </li>

      <li>
        <h5>{'With Height prop: height=\'huge\' value={75}'}
          <ProgressBarWrapper>
            <ProgressBar height="huge" value={75} />
          </ProgressBarWrapper>
        </h5>
      </li>
    </ul>

    <h3>{'With Color props:'}
      <h5>{'With value={5} max={10} color=\'Orange\''}
        <ProgressBarWrapper>
          <ProgressBar value={5} max={10} color="Orange" />
        </ProgressBarWrapper>
      </h5>
      <h5>{'With value={7.5} max={10} color=\'#8ccc62\'(Green)'}
        <ProgressBarWrapper>
          <ProgressBar value={7.5} max={10} color="#8ccc62" />
        </ProgressBarWrapper>
      </h5>
      <h5>{'With value={10} max={10} color=\'rgb(255, 0, 0) (Red)\''}
        <ProgressBarWrapper>
          <ProgressBar value={10} max={10} color="rgb(255, 0, 0)" />
        </ProgressBarWrapper>
      </h5>
    </h3>

    <h3>{'With Custom props:'}
      <h5>{'With value={4} max={12} title=\'ProgressBarTest\''}
        <ProgressBarWrapper>
          <ProgressBar value={4} max={12} title="ProgressBarTest" />
        </ProgressBarWrapper>
      </h5>
    </h3>
  </div>),
  document.getElementById('app'),
);
