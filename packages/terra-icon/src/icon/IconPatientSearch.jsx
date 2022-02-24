/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M23.733 8.7a8.7 8.7 0 11-8.7-8.7 8.7 8.7 0 018.7 8.7zM19.79 33.408a13.467 13.467 0 015.463-10.816 12.909 12.909 0 00-3.945-2.2v-.011c-.052-.018-.106-.03-.158-.047-.164-.054-.33-.1-.5-.148a13.53 13.53 0 00-.645-.166 13.68 13.68 0 00-1.286-.223c-.119-.014-.236-.034-.355-.045-.4-.038-.8-.063-1.206-.063h-4.269c-.408 0-.809.025-1.206.063-.12.011-.237.031-.355.045-.271.034-.54.073-.806.123-.163.031-.325.067-.486.1-.217.05-.432.106-.645.166-.166.047-.333.094-.5.148-.052.017-.106.029-.158.047v.019A12.914 12.914 0 000 32.609V37h20.291a13.4 13.4 0 01-.501-3.592zm27.71 13.52l-.694.693a1.014 1.014 0 01-1.428 0l-6.336-6.334a.983.983 0 01-.148-.223 9.517 9.517 0 112.049-2.043 1 1 0 01.221.146L47.5 45.5a1.013 1.013 0 010 1.428zm-14.21-5.777a7.743 7.743 0 10-7.75-7.743 7.755 7.755 0 007.75 7.743z"/></svg>`;
  return (
    <IconBase {...attributes} svgSource={svgString} > </IconBase>
  );
};

SvgIcon.displayName = "IconPatientSearch";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;

/* eslint-enable */
