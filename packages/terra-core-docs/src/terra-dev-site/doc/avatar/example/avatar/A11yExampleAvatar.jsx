import React from "react";
import classNamesBind from "classnames/bind";
import Card from "terra-card";
import Avatar from 'terra-avatar';
import exampleAvatarImage from '../../assets/150x150.jpg';
import styles from "../common/A11yExamples.module.scss";

const cx = classNamesBind.bind(styles);

const A11yExampleAvatar = () => (
  <Card classNames={cx("card")}>
    <Card.Body>
      <Avatar image={exampleAvatarImage} initials="JS" alt="Deep Space" size="1.5em"/>
      <span className={cx("add-left-margin")}>
        Avatar with meaningful image assigned with proper alternative text
      </span>
    </Card.Body>
  </Card>
);

export default A11yExampleAvatar;
