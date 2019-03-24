module.exports = {
  plugins: ["stylelint-react-native"],
  rules: {
    "react-native/css-property-no-unknown": true,
    "value-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "no-empty-source": null,
    "no-missing-end-of-source-newline": null,
    "at-rule-whitelist": [
      [],
      {
        severity: "warning",
        message:
          "this at-rule is not supported when using styled-components with React Native."
      }
    ],
    "function-whitelist": [
      [
        "rgb",
        "rgba",
        "hsl",
        "hsla",
        "perspective",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "scale",
        "scaleX",
        "scaleY",
        "translate",
        "translateX",
        "translateY",
        "skew",
        "skewX",
        "skewY",
        "matrix"
      ],
      {
        severity: "warning",
        message:
          "this function is not supported when using styled-components with React Native."
      }
    ],
    "unit-whitelist": [
      ["px", "deg", "%"],
      {
        severity: "warning",
        message:
          "this unit is not supported when using styled-components with React Native."
      }
    ],
    "selector-pseudo-class-whitelist": [
      [],
      {
        severity: "warning",
        message:
          "pseudo class selectors are not supported when using styled-components with React Native."
      }
    ],
    // stylelint-processor-styled-components creates
    // a wrapping class selector for the component.
    "selector-max-class": [
      1,
      {
        severity: "warning",
        message:
          "class selectors are not supported when using styled-components with React Native."
      }
    ],
    "selector-max-universal": [
      0,
      {
        severity: "warning",
        message:
          "universal selectors are not supported when using styled-components with React Native."
      }
    ],
    "selector-max-attribute": [
      0,
      {
        severity: "warning",
        message:
          "attribute selectors are not supported when using styled-components with React Native."
      }
    ],
    "selector-max-type": [
      0,
      {
        severity: "warning",
        message:
          "type selectors are not supported when using styled-components with React Native."
      }
    ],
    "selector-max-id": [
      0,
      {
        severity: "warning",
        message:
          "id selectors are not supported when using styled-components with React Native."
      }
    ]
  }
};
