### scss
```scss
@import "compass/reset";

// variables
$colorGreen: #008000;
$colorGreenDark: darken($colorGreen, 10);

div,
.navbar,
#header,
input[type="input"] {
    font-family: "Helvetica Neue", Arial, sans-serif;
    width: auto;
    margin: 0 auto;
    display: block;
    &:hover { color: $colorGreenDark; }
    .home {
          background: url('http://placehold.it/20') scroll no-repeat 0 0;
    }
    padding: {
        left: 5px; right: 5px;
    }
}

@for $i from 1 through 5 {
    .span#{$i} {
        width: 20px*$i;
    }
}

@mixin mobile {
  @media screen and (max-width : 600px) {
    @content;
  }
}
```