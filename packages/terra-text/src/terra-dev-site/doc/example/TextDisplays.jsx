import React from 'react';
import Arrange from 'terra-arrange';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Text from 'terra-text/lib/Text';
import classNames from 'classnames/bind';
import styles from '../../../Text.module.scss';
import './colors.css';

const cx = classNames.bind(styles);


const TextDisplays = () => (
  <div>
    <h2>
      Fonts
      <br />
      <Text weight={400}>
        Font Stack:
        <span className={cx(['font-stack'])} />
      </Text>
    </h2>
    <br />
    <br />
    <h3>Font Weight: 300</h3>
    <Arrange
      fitStart={<Text weight={300} className="default" fontSize={100}>Aa</Text>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Text weight={300} fontSize={32}>a b c d e f g h i j k l m n o p q r s t u v w x y z</Text>
          <br />
          <Text weight={300} fontSize={32}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</Text>
          <br />
          <Text weight={300} fontSize={32}>1 2 3 4 5 6 7 8 9 0</Text>
        </div>
      )}
    />
    <br />
    <br />
    <h3>Font Style: Italic Font Weight: 300</h3>
    <Arrange
      fitStart={<Text isItalic weight={300} className="default" fontSize={100}>Aa</Text>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Text isItalic weight={300} fontSize={32}>a b c d e f g h i j k l m n o p q r s t u v w x y z</Text>
          <br />
          <Text isItalic weight={300} fontSize={32}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</Text>
          <br />
          <Text isItalic weight={300} fontSize={32}>1 2 3 4 5 6 7 8 9 0</Text>
        </div>
      )}
    />
    <br />
    <br />
    <h3>Font Weight: 400</h3>
    <Arrange
      fitStart={<Text className="default" fontSize={100}>Aa</Text>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Text fontSize={32}>a b c d e f g h i j k l m n o p q r s t u v w x y z</Text>
          <br />
          <Text fontSize={32}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</Text>
          <br />
          <Text fontSize={32}>1 2 3 4 5 6 7 8 9 0</Text>
        </div>
)}
    />
    <br />
    <br />
    <h3>Font Style: Italic</h3>
    <Arrange
      fitStart={<Text isItalic className="default" fontSize={100}>Aa</Text>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Text isItalic fontSize={32}>a b c d e f g h i j k l m n o p q r s t u v w x y z</Text>
          <br />
          <Text isItalic fontSize={32}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</Text>
          <br />
          <Text isItalic fontSize={32}>1 2 3 4 5 6 7 8 9 0</Text>
        </div>
)}
    />
    <br />
    <br />
    <h3>Font Weight: 700</h3>
    <Arrange
      fitStart={<Text weight={700} className="default" fontSize={100}>Aa</Text>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Text weight={700} fontSize={32}>a b c d e f g h i j k l m n o p q r s t u v w x y z</Text>
          <br />
          <Text weight={700} fontSize={32}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</Text>
          <br />
          <Text weight={700} fontSize={32}>1 2 3 4 5 6 7 8 9 0</Text>
        </div>
)}
    />
    <br />
    <br />
    <h3>Font Style: Italic Font Weight: 700</h3>
    <Arrange
      fitStart={<Text isItalic weight={700} className="default" fontSize={100}>Aa</Text>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Text isItalic weight={700} fontSize={32}>a b c d e f g h i j k l m n o p q r s t u v w x y z</Text>
          <br />
          <Text isItalic weight={700} fontSize={32}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</Text>
          <br />
          <Text isItalic weight={700} fontSize={32}>1 2 3 4 5 6 7 8 9 0</Text>
        </div>
)}
    />
  </div>
);

export default TextDisplays;
