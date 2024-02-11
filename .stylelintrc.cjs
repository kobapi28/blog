module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-html/astro"],
  rules: {
    "no-unknown-animations": true,
    // "no-unknown-custom-properties": true,
    "declaration-no-important": true,
    // "at-rule-empty-line-before": "always",
    // "custom-property-empty-line-before": [
    //   "always", {
    //   except: ["after-comment", "after-custom-property", "first-nested"],
    // }],
    "declaration-empty-line-before": "never",
    // "rule-empty-line-before": "always",
    "alpha-value-notation": "number",
    "color-function-notation": "legacy",
    "color-hex-length": "long",
    "font-weight-notation": "numeric",
    "import-notation": "string",
    "keyframe-selector-notation": "keyword",
    "media-feature-range-notation": "context",
    "selector-pseudo-element-colon-notation": "double",
    "function-url-quotes": "always",
    "selector-attribute-quotes": "always",
    "declaration-block-no-redundant-longhand-properties": true,
    "shorthand-property-no-redundant-values": true,
    "comment-whitespace-inside": "always",
  }
}