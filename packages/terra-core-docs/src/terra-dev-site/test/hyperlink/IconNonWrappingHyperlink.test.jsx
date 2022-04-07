import React from 'react';
import Hyperlink from 'terra-hyperlink';
import HyperlinkButton from 'terra-hyperlink/lib/HyperlinkButton';

const loremipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const atvero = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.';

const hyperlinkShort = <Hyperlink text="Document hyperlink" href="https://www.cerner.com" variant="document" />;
const hyperlinkButtonShort = <HyperlinkButton text="Document hyperlink" onClick={() => {}} variant="document" />;

const hyperlinkLong = <Hyperlink text={loremipsum} href="https://www.cerner.com" variant="document" />;
const hyperlinkButtonLong = <HyperlinkButton text={loremipsum} onClick={() => {}} variant="document" />;

export default () => (
  <div role="main" id="link-example">
    <p>
      Example of a hyperlink inside some content that will wrap. With this, the icon should not wrap onto a separate line without the link text. I am a
      {` ${hyperlinkShort} `}
      that is forced to wrap due to space constraints. My icon wraps with me.
    </p>
    <p>
      Example of a hyperlink inside some content that will wrap. With this, the icon should not wrap onto a separate line without the link text. I am a
      {` ${hyperlinkButtonShort} `}
      that is forced to wrap due to space constraints. My icon wraps with me.
    </p>
    <hr />
    <p>
      {`${atvero} ${hyperlinkLong} ${atvero}`}
    </p>
    <p>
      {`${atvero} ${hyperlinkButtonLong} ${atvero}`}
    </p>
  </div>
);
