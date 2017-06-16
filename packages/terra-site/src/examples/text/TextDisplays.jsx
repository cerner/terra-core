import React from 'react';
import Heading from 'terra-heading';
import Text from 'terra-text';
import Arrange from 'terra-arrange';

const TextDisplays = () => (
  <div>
    <Heading level={2}>
      Fonts<br />
      <Text weight={400}>Font Stack: Helvetica Neue, Helvetica, Arial, sans-serif</Text>
    </Heading>
    <br />
    <br />
    <Heading level={3} weight={400}>Font Weight: 400</Heading>
    <Arrange
      fitStart={<Text color="#333" fontSize={100}>Aa</Text>}
      fill={<div style={{ marginLeft: '10px', marginRight: '10px' }}>
        <Text fontSize={32}>a b c d e f g h i j k l m n o p q r s t u v w x y z</Text>
        <br />
        <Text fontSize={32}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</Text>
        <br />
        <Text fontSize={32}>1 2 3 4 5 6 7 8 9 0</Text>
      </div>}
    />
    <br />
    <br />
    <Heading level={3} weight={400}>Font Style: Italic</Heading>
    <Arrange
      fitStart={<Text isItalic color="#333" fontSize={100}>Aa</Text>}
      fill={<div style={{ marginLeft: '10px', marginRight: '10px' }}>
        <Text isItalic fontSize={32}>a b c d e f g h i j k l m n o p q r s t u v w x y z</Text>
        <br />
        <Text isItalic fontSize={32}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</Text>
        <br />
        <Text isItalic fontSize={32}>1 2 3 4 5 6 7 8 9 0</Text>
      </div>}
    />
    <br />
    <br />
    <Heading level={3} weight={400}>Font Weight: 700</Heading>
    <Arrange
      fitStart={<Text weight={700} color="#333" fontSize={100}>Aa</Text>}
      fill={<div style={{ marginLeft: '10px', marginRight: '10px' }}>
        <Text weight={700} fontSize={32}>a b c d e f g h i j k l m n o p q r s t u v w x y z</Text>
        <br />
        <Text weight={700} fontSize={32}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</Text>
        <br />
        <Text weight={700} fontSize={32}>1 2 3 4 5 6 7 8 9 0</Text>
      </div>}
    />
    <br />
    <br />
    <Heading level={3} weight={400}>Font Style: Italic Font Weight: 700</Heading>
    <Arrange
      fitStart={<Text isItalic weight={700} color="#333" fontSize={100}>Aa</Text>}
      fill={<div style={{ marginLeft: '10px', marginRight: '10px' }}>
        <Text isItalic weight={700} fontSize={32}>a b c d e f g h i j k l m n o p q r s t u v w x y z</Text>
        <br />
        <Text isItalic weight={700} fontSize={32}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</Text>
        <br />
        <Text isItalic weight={700} fontSize={32}>1 2 3 4 5 6 7 8 9 0</Text>
      </div>}
    />
  </div>
);

export default TextDisplays;
