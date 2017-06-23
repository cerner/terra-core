import './Base.scss';

// Checks to run when not in production
if (process.env.NODE_ENV !== 'production') {
  // Check to ensure dir attribute is set on html element
  if (!document.documentElement.hasAttribute('dir')) {
    // eslint-disable-next-line
    console.warn('The html element is missing the dir attribute. For terra directionality based styles to render correctly, add dir="ltr" or dir="rtl" to the html element.');
  }
}
