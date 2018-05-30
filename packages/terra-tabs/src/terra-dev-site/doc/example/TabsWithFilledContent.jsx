import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Tabs from 'terra-tabs/lib/Tabs';
import TabContent from 'terra-tabs/lib/terra-dev-site/doc/example/TabContentTemplate';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TabsWithFilledContent = () => {
  const tab1 = (
    <Tabs.Pane
      label="Large content"
      key="LargeContent"
    >
      <TabContent label="Large Content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed elementum mauris. Nunc maximus erat eget mauris posuere, a efficitur ex consequat. Ut mollis justo vitae rutrum tempus. Cras eget nisl a metus convallis fringilla nec non lorem. Fusce viverra velit porta tellus interdum semper eu nec mauris. Suspendisse fringilla viverra dui, et scelerisque nulla aliquet vitae. Duis sodales id ex nec viverra. Cras vel arcu mattis, ullamcorper elit in, molestie neque. Pellentesque tellus nunc, bibendum at nisl ac, fermentum sodales urna. Maecenas ac interdum mi. Suspendisse at condimentum enim. Suspendisse porta ipsum sed lacus congue porttitor. Aenean varius dapibus faucibus. Sed ut est ante. Praesent pharetra luctus dolor, non porta tortor lobortis a.
        </p>
        <p>
          Vestibulum pellentesque nunc viverra, maximus ipsum sit amet, suscipit purus. Cras consequat mi et elit auctor rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tincidunt pharetra faucibus. Sed at sem commodo, eleifend ipsum non, vehicula eros. Aliquam ac odio sit amet ipsum ultricies convallis vel eu sapien. Suspendisse condimentum fringilla nibh non ornare. Nulla quis porttitor eros, a facilisis lacus. Integer nec suscipit felis, vel sodales massa. Aliquam id dolor ullamcorper purus volutpat efficitur. Vestibulum in est finibus, convallis nisi et, vulputate nunc. Sed metus mi, faucibus vel accumsan et, varius nec ipsum. Ut gravida consectetur sem, vel accumsan orci gravida a.
        </p>
        <p>
          Nam tincidunt nisl at nunc dictum, ac volutpat erat dignissim. Suspendisse ut augue nec enim malesuada lobortis. Etiam ut magna lacinia, eleifend orci quis, egestas sem. Morbi nulla mi, dignissim eget sem finibus, tempus sodales augue. Nullam dignissim augue ac diam semper euismod. Mauris ultricies condimentum nunc eu congue. Maecenas vehicula a dui in viverra. Vivamus id scelerisque felis. Morbi commodo feugiat feugiat. Aenean ac dapibus orci, quis pulvinar ante. Fusce faucibus porta est, malesuada pharetra libero scelerisque vel. Duis tempus turpis sit amet est lacinia condimentum. Fusce sollicitudin tincidunt ultrices.
        </p>
        <p>
          Mauris sit amet aliquet augue, imperdiet fringilla ligula. Ut sapien metus, auctor sit amet mauris quis, ullamcorper convallis risus. Sed congue nisi diam, eget consectetur massa feugiat a. Curabitur placerat posuere ipsum rutrum convallis. In iaculis aliquet velit ac scelerisque. Vestibulum eu interdum lectus. In rutrum vel lacus ac varius. Proin ac suscipit metus. Proin non tortor vel augue laoreet placerat vulputate in nisi. Etiam sagittis dapibus lobortis. Phasellus eros dui, lacinia et metus id, consectetur pretium turpis. Donec venenatis augue vitae leo condimentum, sit amet lacinia sem pretium. Aliquam sed dolor viverra, rhoncus arcu sit amet, porta velit. Aenean congue vel odio et tristique.
        </p>
        <p>
          Phasellus quis purus elementum, tincidunt erat eget, placerat arcu. Aenean in odio in nisi fringilla malesuada. Nunc et consectetur dolor, sed vestibulum tortor. Proin feugiat auctor eros et gravida. Nullam bibendum sagittis augue, convallis faucibus mi sagittis at. Nulla sit amet dolor luctus magna convallis lobortis eget in ligula. Nullam aliquet lacus interdum accumsan efficitur. In sed suscipit justo. Integer malesuada non sem vitae bibendum. Nullam felis augue, lacinia ut neque in, vulputate scelerisque eros.
        </p>
      </TabContent>
    </Tabs.Pane>
  );

  const tab2 = (
    <Tabs.Pane
      label="Short Content"
      key="ShortContent"
    >
      <TabContent label="Short Content" />
    </Tabs.Pane>
  );

  return (
    <div style={{ padding: '10px', height: '400px' }}>
      <Tabs fill>
        {tab1}
        {tab2}
      </Tabs>
    </div>
  );
};

export default TabsWithFilledContent;
