// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.3.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";function r(t,n,r){return s(n)||s(r)||s(t)||n<=0||r<=0||t<0||t>1?NaN:r/e(1-t,1/n)}function i(t,r){var i;return s(t)||s(r)||t<=0||r<=0?n(NaN):(i=1/t,function(t){if(s(t)||t<0||t>1)return NaN;return r/e(1-t,i)})}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
