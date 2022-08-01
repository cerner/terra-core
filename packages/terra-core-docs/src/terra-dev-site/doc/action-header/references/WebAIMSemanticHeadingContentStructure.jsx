import React from 'react';
import classNamesBind from 'classnames/bind';
import styles from './WebAIMSemanticHeadingContentStructure.scss';

const cx = classNamesBind.bind(styles);

const WebAIMSemanticHeadingContentStructure = () => (
  <blockquote className={cx('webaim-semantic-heading-blockquote')}>
    <cite>
      <span>&mdash; excerpt from</span>
      <a href="https://webaim.org/techniques/semanticstructure/#headings">WebAIM: Semantic Structure: Regions, Headings, and Lists</a>
    </cite>
    <div className={cx('webaim-semantic-heading-content')}>
      <ul>
        <li>
          <b>H1:</b>
          My Favorite Recipes
          <ul>
            <li>
              <b>H2:</b>
              Quick and Easy
              <ul>
                <li>
                  <b>H3:</b>
                  Spaghetti
                </li>
                <li>
                  <b>H3:</b>
                  Hamburgers
                </li>
                <li>
                  <b>H3:</b>
                  Tacos
                  <ul>
                    <li>
                      <b>H4:</b>
                      Beef Tacos
                    </li>
                    <li>
                      <b>H4:</b>
                      Chicken Tacos
                    </li>
                    <li>
                      <b>H4:</b>
                      Fish Tacos
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <b>H2:</b>
              Some Assembly Required
              <ul>
                <li>
                  <b>H3:</b>
                  Tuna Casserole
                </li>
                <li>
                  <b>H3:</b>
                  Lasagna
                  <ul>
                    <li>
                      <b>H4:</b>
                      Vegetable Lasagna
                    </li>
                    <li>
                      <b>H4:</b>
                      Beef Lasagna
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <b>H2:</b>
              All-In
              <ul>
                <li>
                  <b>H3:</b>
                  Crab-Stuffed Filet Mignon with Whiskey Peppercorn Sauce
                </li>
                <li>
                  <b>H3:</b>
                  Sun Dried Tomato and Pine Nut Stuffed Beef Tenderloin
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </blockquote>
);

export default WebAIMSemanticHeadingContentStructure;
