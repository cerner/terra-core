import Button from './Button';
import IconButton from './variants/_IconButton';

const ButtonVariants = {
  NEUTRAL: 'neutral',
  EMPHASIS: 'emphasis',
  GHOST: 'ghost',
  'DE-EMPHASIS': 'de-emphasis',
  ACTION: 'action',
  UTILITY: 'utility',
};

const ButtonTypes = {
  BUTTON: 'button',
  SUBMIT: 'submit',
  RESET: 'reset',
};

const IconTypes = {
  DECORATIVE: 'decorative',
  INFORMATIVE: 'informative',
};

export default Button;

export {
  IconButton, ButtonTypes, ButtonVariants, IconTypes,
};
