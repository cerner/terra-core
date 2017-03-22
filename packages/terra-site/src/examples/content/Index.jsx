import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-content/docs/README.md';
// eslint-disable-next-line import/extensions
import 'terra-content';

const ContentExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Content</h2>
    <div className="terra-Content">
      <h1>Level 1 Heading</h1>
      <h2>Level 2 Heading</h2>
      <h3>Level 3 Heading</h3>
      <h4>Level 4 Heading</h4>
      <h5>Level 5 Heading</h5>
      <h6>Level 6 Heading</h6>
    </div>
    <br />
    <br />
    <div className="terra-Content">
      <h2>Unordered List</h2>
      <ul>
        <li>Cereal</li>
        <li>Bread</li>
        <li>Pizza
          <ul>
            <li>Sauce</li>
            <li>Cheese</li>
            <li>Crust</li>
            <li>Toppings</li>
          </ul>
        </li>
        <li>Milk</li>
        <li>Fruit</li>
      </ul>

      <h2>Ordered List</h2>
      <ol>
        <li>First Item</li>
        <li>Second Item</li>
        <li>Third Item</li>
      </ol>

      <h2>Description list</h2>
      <dl>
        <dt>Coffee</dt>
        <dd>Black hot drink</dd>
        <dt>Milk</dt>
        <dd>White cold drink</dd>
      </dl>
    </div>
    <br />
    <br />
    <div className="terra-Content">
      <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
      <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
      <p>The <a href="#0">a element</a> example</p>
      <p>The <abbr>abbr element</abbr> and an <abbr title="Abbreviation">abbr</abbr> element with title examples</p>
      <p>The <b>b element</b> example</p>
      <p>The <cite>cite element</cite> example</p>
      <p>The <code>code element</code> example</p>
      <p>The <em>em element</em> example</p>
      <p>The <del>del element</del> example</p>
      <p>The <dfn>dfn element</dfn> and <dfn title="Title text">dfn element with title</dfn> examples</p>
      <p>The <i>i element</i> example</p>
      <p>The <ins>ins element</ins> example</p>
      <p>The <mark>mark element</mark> example</p>
      <p>The <s>s element</s> example</p>
      <p>The <samp>samp element</samp> example</p>
      <p>The <small>small element</small> example</p>
      <p>The <span>span element</span> example</p>
      <p>The <strong>strong element</strong> example</p>
      <p>The <sub>sub element</sub> example</p>
      <p>The <sup>sup element</sup> example</p>
      <p>The <u>u element</u> example</p>
      <p>Preformatted text</p>
      <pre>
        {`1   3     6     9
      P R E F O R M A T T E D T E X T
      ! " # $ % & ' ( ) * + , - . /
      0 1 2 3 4 5 6 7 8 9 : ; < = > ?
      @ A B C D E F G H I J K L M N O
      P Q R S T U V W X Y Z [ \\ ] ^ _
      \` a b c d e f g h i j k l m n o
      p q r s t u v w x y z { | } ~`}
      </pre>
      <p>Code element inside of pre element</p>
      <pre>
        <code>
          {`a {
            color: @link-color;
          `}
        </code>
      </pre>
    </div>
  </div>
);

export default ContentExamples;
