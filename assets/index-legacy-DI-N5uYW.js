;
(function () {
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
  function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
  function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
  function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
  System.register([], function (exports, module) {
    'use strict';

    return {
      execute: function execute() {
        /**
         * Contains the list of OpenAPI data types
         * as defined by https://swagger.io/docs/specification/data-models/data-types/
         * @public
         */
        var SchemaType;
        exports("SchemaType", SchemaType);
        (function (SchemaType) {
          /** String type. */
          SchemaType["STRING"] = "string";
          /** Number type. */
          SchemaType["NUMBER"] = "number";
          /** Integer type. */
          SchemaType["INTEGER"] = "integer";
          /** Boolean type. */
          SchemaType["BOOLEAN"] = "boolean";
          /** Array type. */
          SchemaType["ARRAY"] = "array";
          /** Object type. */
          SchemaType["OBJECT"] = "object";
        })(SchemaType || exports("SchemaType", SchemaType = {}));

        /**
         * @license
         * Copyright 2024 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * @public
         */
        var ExecutableCodeLanguage;
        exports("ExecutableCodeLanguage", ExecutableCodeLanguage);
        (function (ExecutableCodeLanguage) {
          ExecutableCodeLanguage["LANGUAGE_UNSPECIFIED"] = "language_unspecified";
          ExecutableCodeLanguage["PYTHON"] = "python";
        })(ExecutableCodeLanguage || exports("ExecutableCodeLanguage", ExecutableCodeLanguage = {}));
        /**
         * Possible outcomes of code execution.
         * @public
         */
        var Outcome;
        exports("Outcome", Outcome);
        (function (Outcome) {
          /**
           * Unspecified status. This value should not be used.
           */
          Outcome["OUTCOME_UNSPECIFIED"] = "outcome_unspecified";
          /**
           * Code execution completed successfully.
           */
          Outcome["OUTCOME_OK"] = "outcome_ok";
          /**
           * Code execution finished but with a failure. `stderr` should contain the
           * reason.
           */
          Outcome["OUTCOME_FAILED"] = "outcome_failed";
          /**
           * Code execution ran for too long, and was cancelled. There may or may not
           * be a partial output present.
           */
          Outcome["OUTCOME_DEADLINE_EXCEEDED"] = "outcome_deadline_exceeded";
        })(Outcome || exports("Outcome", Outcome = {}));

        /**
         * @license
         * Copyright 2024 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Possible roles.
         * @public
         */
        var POSSIBLE_ROLES = exports("POSSIBLE_ROLES", ["user", "model", "function", "system"]);
        /**
         * Harm categories that would cause prompts or candidates to be blocked.
         * @public
         */
        var HarmCategory;
        exports("HarmCategory", HarmCategory);
        (function (HarmCategory) {
          HarmCategory["HARM_CATEGORY_UNSPECIFIED"] = "HARM_CATEGORY_UNSPECIFIED";
          HarmCategory["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
          HarmCategory["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
          HarmCategory["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
          HarmCategory["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
          HarmCategory["HARM_CATEGORY_CIVIC_INTEGRITY"] = "HARM_CATEGORY_CIVIC_INTEGRITY";
        })(HarmCategory || exports("HarmCategory", HarmCategory = {}));
        /**
         * Threshold above which a prompt or candidate will be blocked.
         * @public
         */
        var HarmBlockThreshold;
        exports("HarmBlockThreshold", HarmBlockThreshold);
        (function (HarmBlockThreshold) {
          /** Threshold is unspecified. */
          HarmBlockThreshold["HARM_BLOCK_THRESHOLD_UNSPECIFIED"] = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";
          /** Content with NEGLIGIBLE will be allowed. */
          HarmBlockThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
          /** Content with NEGLIGIBLE and LOW will be allowed. */
          HarmBlockThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
          /** Content with NEGLIGIBLE, LOW, and MEDIUM will be allowed. */
          HarmBlockThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
          /** All content will be allowed. */
          HarmBlockThreshold["BLOCK_NONE"] = "BLOCK_NONE";
        })(HarmBlockThreshold || exports("HarmBlockThreshold", HarmBlockThreshold = {}));
        /**
         * Probability that a prompt or candidate matches a harm category.
         * @public
         */
        var HarmProbability;
        exports("HarmProbability", HarmProbability);
        (function (HarmProbability) {
          /** Probability is unspecified. */
          HarmProbability["HARM_PROBABILITY_UNSPECIFIED"] = "HARM_PROBABILITY_UNSPECIFIED";
          /** Content has a negligible chance of being unsafe. */
          HarmProbability["NEGLIGIBLE"] = "NEGLIGIBLE";
          /** Content has a low chance of being unsafe. */
          HarmProbability["LOW"] = "LOW";
          /** Content has a medium chance of being unsafe. */
          HarmProbability["MEDIUM"] = "MEDIUM";
          /** Content has a high chance of being unsafe. */
          HarmProbability["HIGH"] = "HIGH";
        })(HarmProbability || exports("HarmProbability", HarmProbability = {}));
        /**
         * Reason that a prompt was blocked.
         * @public
         */
        var BlockReason;
        exports("BlockReason", BlockReason);
        (function (BlockReason) {
          // A blocked reason was not specified.
          BlockReason["BLOCKED_REASON_UNSPECIFIED"] = "BLOCKED_REASON_UNSPECIFIED";
          // Content was blocked by safety settings.
          BlockReason["SAFETY"] = "SAFETY";
          // Content was blocked, but the reason is uncategorized.
          BlockReason["OTHER"] = "OTHER";
        })(BlockReason || exports("BlockReason", BlockReason = {}));
        /**
         * Reason that a candidate finished.
         * @public
         */
        var FinishReason;
        exports("FinishReason", FinishReason);
        (function (FinishReason) {
          // Default value. This value is unused.
          FinishReason["FINISH_REASON_UNSPECIFIED"] = "FINISH_REASON_UNSPECIFIED";
          // Natural stop point of the model or provided stop sequence.
          FinishReason["STOP"] = "STOP";
          // The maximum number of tokens as specified in the request was reached.
          FinishReason["MAX_TOKENS"] = "MAX_TOKENS";
          // The candidate content was flagged for safety reasons.
          FinishReason["SAFETY"] = "SAFETY";
          // The candidate content was flagged for recitation reasons.
          FinishReason["RECITATION"] = "RECITATION";
          // The candidate content was flagged for using an unsupported language.
          FinishReason["LANGUAGE"] = "LANGUAGE";
          // Token generation stopped because the content contains forbidden terms.
          FinishReason["BLOCKLIST"] = "BLOCKLIST";
          // Token generation stopped for potentially containing prohibited content.
          FinishReason["PROHIBITED_CONTENT"] = "PROHIBITED_CONTENT";
          // Token generation stopped because the content potentially contains Sensitive Personally Identifiable Information (SPII).
          FinishReason["SPII"] = "SPII";
          // The function call generated by the model is invalid.
          FinishReason["MALFORMED_FUNCTION_CALL"] = "MALFORMED_FUNCTION_CALL";
          // Unknown reason.
          FinishReason["OTHER"] = "OTHER";
        })(FinishReason || exports("FinishReason", FinishReason = {}));
        /**
         * Task type for embedding content.
         * @public
         */
        var TaskType;
        exports("TaskType", TaskType);
        (function (TaskType) {
          TaskType["TASK_TYPE_UNSPECIFIED"] = "TASK_TYPE_UNSPECIFIED";
          TaskType["RETRIEVAL_QUERY"] = "RETRIEVAL_QUERY";
          TaskType["RETRIEVAL_DOCUMENT"] = "RETRIEVAL_DOCUMENT";
          TaskType["SEMANTIC_SIMILARITY"] = "SEMANTIC_SIMILARITY";
          TaskType["CLASSIFICATION"] = "CLASSIFICATION";
          TaskType["CLUSTERING"] = "CLUSTERING";
        })(TaskType || exports("TaskType", TaskType = {}));
        /**
         * @public
         */
        var FunctionCallingMode;
        exports("FunctionCallingMode", FunctionCallingMode);
        (function (FunctionCallingMode) {
          // Unspecified function calling mode. This value should not be used.
          FunctionCallingMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
          // Default model behavior, model decides to predict either a function call
          // or a natural language repspose.
          FunctionCallingMode["AUTO"] = "AUTO";
          // Model is constrained to always predicting a function call only.
          // If "allowed_function_names" are set, the predicted function call will be
          // limited to any one of "allowed_function_names", else the predicted
          // function call will be any one of the provided "function_declarations".
          FunctionCallingMode["ANY"] = "ANY";
          // Model will not predict any function call. Model behavior is same as when
          // not passing any function declarations.
          FunctionCallingMode["NONE"] = "NONE";
        })(FunctionCallingMode || exports("FunctionCallingMode", FunctionCallingMode = {}));
        /**
         * The mode of the predictor to be used in dynamic retrieval.
         * @public
         */
        var DynamicRetrievalMode;
        exports("DynamicRetrievalMode", DynamicRetrievalMode);
        (function (DynamicRetrievalMode) {
          // Unspecified function calling mode. This value should not be used.
          DynamicRetrievalMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
          // Run retrieval only when system decides it is necessary.
          DynamicRetrievalMode["MODE_DYNAMIC"] = "MODE_DYNAMIC";
        })(DynamicRetrievalMode || exports("DynamicRetrievalMode", DynamicRetrievalMode = {}));

        /**
         * @license
         * Copyright 2024 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Basic error type for this SDK.
         * @public
         */
        var GoogleGenerativeAIError = /*#__PURE__*/function (_Error) {
          function GoogleGenerativeAIError(message) {
            _classCallCheck(this, GoogleGenerativeAIError);
            return _callSuper(this, GoogleGenerativeAIError, ["[GoogleGenerativeAI Error]: ".concat(message)]);
          }
          _inherits(GoogleGenerativeAIError, _Error);
          return _createClass(GoogleGenerativeAIError);
        }(/*#__PURE__*/_wrapNativeSuper(Error));
        exports("GoogleGenerativeAIError", GoogleGenerativeAIError);
        /**
         * Errors in the contents of a response from the model. This includes parsing
         * errors, or responses including a safety block reason.
         * @public
         */
        var GoogleGenerativeAIResponseError = /*#__PURE__*/function (_GoogleGenerativeAIEr) {
          function GoogleGenerativeAIResponseError(message, response) {
            var _this;
            _classCallCheck(this, GoogleGenerativeAIResponseError);
            _this = _callSuper(this, GoogleGenerativeAIResponseError, [message]);
            _this.response = response;
            return _this;
          }
          _inherits(GoogleGenerativeAIResponseError, _GoogleGenerativeAIEr);
          return _createClass(GoogleGenerativeAIResponseError);
        }(GoogleGenerativeAIError);
        exports("GoogleGenerativeAIResponseError", GoogleGenerativeAIResponseError);
        /**
         * Error class covering HTTP errors when calling the server. Includes HTTP
         * status, statusText, and optional details, if provided in the server response.
         * @public
         */
        var GoogleGenerativeAIFetchError = /*#__PURE__*/function (_GoogleGenerativeAIEr2) {
          function GoogleGenerativeAIFetchError(message, status, statusText, errorDetails) {
            var _this2;
            _classCallCheck(this, GoogleGenerativeAIFetchError);
            _this2 = _callSuper(this, GoogleGenerativeAIFetchError, [message]);
            _this2.status = status;
            _this2.statusText = statusText;
            _this2.errorDetails = errorDetails;
            return _this2;
          }
          _inherits(GoogleGenerativeAIFetchError, _GoogleGenerativeAIEr2);
          return _createClass(GoogleGenerativeAIFetchError);
        }(GoogleGenerativeAIError);
        exports("GoogleGenerativeAIFetchError", GoogleGenerativeAIFetchError);
        /**
         * Errors in the contents of a request originating from user input.
         * @public
         */
        var GoogleGenerativeAIRequestInputError = /*#__PURE__*/function (_GoogleGenerativeAIEr3) {
          function GoogleGenerativeAIRequestInputError() {
            _classCallCheck(this, GoogleGenerativeAIRequestInputError);
            return _callSuper(this, GoogleGenerativeAIRequestInputError, arguments);
          }
          _inherits(GoogleGenerativeAIRequestInputError, _GoogleGenerativeAIEr3);
          return _createClass(GoogleGenerativeAIRequestInputError);
        }(GoogleGenerativeAIError);
        exports("GoogleGenerativeAIRequestInputError", GoogleGenerativeAIRequestInputError);
        /**
         * Error thrown when a request is aborted, either due to a timeout or
         * intentional cancellation by the user.
         * @public
         */
        var GoogleGenerativeAIAbortError = /*#__PURE__*/function (_GoogleGenerativeAIEr4) {
          function GoogleGenerativeAIAbortError() {
            _classCallCheck(this, GoogleGenerativeAIAbortError);
            return _callSuper(this, GoogleGenerativeAIAbortError, arguments);
          }
          _inherits(GoogleGenerativeAIAbortError, _GoogleGenerativeAIEr4);
          return _createClass(GoogleGenerativeAIAbortError);
        }(GoogleGenerativeAIError);
        exports("GoogleGenerativeAIAbortError", GoogleGenerativeAIAbortError);

        /**
         * @license
         * Copyright 2024 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var DEFAULT_BASE_URL = "https://generativelanguage.googleapis.com";
        var DEFAULT_API_VERSION = "v1beta";
        /**
         * We can't `require` package.json if this runs on web. We will use rollup to
         * swap in the version number here at build time.
         */
        var PACKAGE_VERSION = "0.24.1";
        var PACKAGE_LOG_HEADER = "genai-js";
        var Task;
        (function (Task) {
          Task["GENERATE_CONTENT"] = "generateContent";
          Task["STREAM_GENERATE_CONTENT"] = "streamGenerateContent";
          Task["COUNT_TOKENS"] = "countTokens";
          Task["EMBED_CONTENT"] = "embedContent";
          Task["BATCH_EMBED_CONTENTS"] = "batchEmbedContents";
        })(Task || (Task = {}));
        var RequestUrl = /*#__PURE__*/function () {
          function RequestUrl(model, task, apiKey, stream, requestOptions) {
            _classCallCheck(this, RequestUrl);
            this.model = model;
            this.task = task;
            this.apiKey = apiKey;
            this.stream = stream;
            this.requestOptions = requestOptions;
          }
          return _createClass(RequestUrl, [{
            key: "toString",
            value: function toString() {
              var _a, _b;
              var apiVersion = ((_a = this.requestOptions) === null || _a === void 0 ? void 0 : _a.apiVersion) || DEFAULT_API_VERSION;
              var baseUrl = ((_b = this.requestOptions) === null || _b === void 0 ? void 0 : _b.baseUrl) || DEFAULT_BASE_URL;
              var url = "".concat(baseUrl, "/").concat(apiVersion, "/").concat(this.model, ":").concat(this.task);
              if (this.stream) {
                url += "?alt=sse";
              }
              return url;
            }
          }]);
        }();
        /**
         * Simple, but may become more complex if we add more versions to log.
         */
        function getClientHeaders(requestOptions) {
          var clientHeaders = [];
          if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.apiClient) {
            clientHeaders.push(requestOptions.apiClient);
          }
          clientHeaders.push("".concat(PACKAGE_LOG_HEADER, "/").concat(PACKAGE_VERSION));
          return clientHeaders.join(" ");
        }
        function getHeaders(_x) {
          return _getHeaders.apply(this, arguments);
        }
        function _getHeaders() {
          _getHeaders = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(url) {
            var _a, headers, customHeaders, _iterator1, _step1, _step1$value, headerName, headerValue, _t, _t2;
            return _regenerator().w(function (_context0) {
              while (1) switch (_context0.p = _context0.n) {
                case 0:
                  headers = new Headers();
                  headers.append("Content-Type", "application/json");
                  headers.append("x-goog-api-client", getClientHeaders(url.requestOptions));
                  headers.append("x-goog-api-key", url.apiKey);
                  customHeaders = (_a = url.requestOptions) === null || _a === void 0 ? void 0 : _a.customHeaders;
                  if (!customHeaders) {
                    _context0.n = 12;
                    break;
                  }
                  if (customHeaders instanceof Headers) {
                    _context0.n = 3;
                    break;
                  }
                  _context0.p = 1;
                  customHeaders = new Headers(customHeaders);
                  _context0.n = 3;
                  break;
                case 2:
                  _context0.p = 2;
                  _t = _context0.v;
                  throw new GoogleGenerativeAIRequestInputError("unable to convert customHeaders value ".concat(JSON.stringify(customHeaders), " to Headers: ").concat(_t.message));
                case 3:
                  _iterator1 = _createForOfIteratorHelper(customHeaders.entries());
                  _context0.p = 4;
                  _iterator1.s();
                case 5:
                  if ((_step1 = _iterator1.n()).done) {
                    _context0.n = 9;
                    break;
                  }
                  _step1$value = _slicedToArray(_step1.value, 2), headerName = _step1$value[0], headerValue = _step1$value[1];
                  if (!(headerName === "x-goog-api-key")) {
                    _context0.n = 6;
                    break;
                  }
                  throw new GoogleGenerativeAIRequestInputError("Cannot set reserved header name ".concat(headerName));
                case 6:
                  if (!(headerName === "x-goog-api-client")) {
                    _context0.n = 7;
                    break;
                  }
                  throw new GoogleGenerativeAIRequestInputError("Header name ".concat(headerName, " can only be set using the apiClient field"));
                case 7:
                  headers.append(headerName, headerValue);
                case 8:
                  _context0.n = 5;
                  break;
                case 9:
                  _context0.n = 11;
                  break;
                case 10:
                  _context0.p = 10;
                  _t2 = _context0.v;
                  _iterator1.e(_t2);
                case 11:
                  _context0.p = 11;
                  _iterator1.f();
                  return _context0.f(11);
                case 12:
                  return _context0.a(2, headers);
              }
            }, _callee9, null, [[4, 10, 11, 12], [1, 2]]);
          }));
          return _getHeaders.apply(this, arguments);
        }
        function constructModelRequest(_x2, _x3, _x4, _x5, _x6, _x7) {
          return _constructModelRequest.apply(this, arguments);
        }
        function _constructModelRequest() {
          _constructModelRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(model, task, apiKey, stream, body, requestOptions) {
            var url, _t3, _t4, _t5, _t6, _t7, _t8;
            return _regenerator().w(function (_context1) {
              while (1) switch (_context1.n) {
                case 0:
                  url = new RequestUrl(model, task, apiKey, stream, requestOptions);
                  _t3 = url.toString();
                  _t4 = Object;
                  _t5 = Object.assign({}, buildFetchOptions(requestOptions));
                  _context1.n = 1;
                  return getHeaders(url);
                case 1:
                  _t6 = _context1.v;
                  _t7 = body;
                  _t8 = _t4.assign.call(_t4, _t5, {
                    method: "POST",
                    headers: _t6,
                    body: _t7
                  });
                  return _context1.a(2, {
                    url: _t3,
                    fetchOptions: _t8
                  });
              }
            }, _callee0);
          }));
          return _constructModelRequest.apply(this, arguments);
        }
        function makeModelRequest(_x8, _x9, _x0, _x1, _x10) {
          return _makeModelRequest.apply(this, arguments);
        }
        function _makeModelRequest() {
          _makeModelRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(model, task, apiKey, stream, body) {
            var requestOptions,
              fetchFn,
              _yield$constructModel,
              url,
              fetchOptions,
              _args10 = arguments;
            return _regenerator().w(function (_context10) {
              while (1) switch (_context10.n) {
                case 0:
                  requestOptions = _args10.length > 5 && _args10[5] !== undefined ? _args10[5] : {};
                  fetchFn = _args10.length > 6 && _args10[6] !== undefined ? _args10[6] : fetch;
                  _context10.n = 1;
                  return constructModelRequest(model, task, apiKey, stream, body, requestOptions);
                case 1:
                  _yield$constructModel = _context10.v;
                  url = _yield$constructModel.url;
                  fetchOptions = _yield$constructModel.fetchOptions;
                  return _context10.a(2, makeRequest(url, fetchOptions, fetchFn));
              }
            }, _callee1);
          }));
          return _makeModelRequest.apply(this, arguments);
        }
        function makeRequest(_x11, _x12) {
          return _makeRequest.apply(this, arguments);
        }
        function _makeRequest() {
          _makeRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(url, fetchOptions) {
            var fetchFn,
              response,
              _args11 = arguments,
              _t9;
            return _regenerator().w(function (_context11) {
              while (1) switch (_context11.p = _context11.n) {
                case 0:
                  fetchFn = _args11.length > 2 && _args11[2] !== undefined ? _args11[2] : fetch;
                  _context11.p = 1;
                  _context11.n = 2;
                  return fetchFn(url, fetchOptions);
                case 2:
                  response = _context11.v;
                  _context11.n = 4;
                  break;
                case 3:
                  _context11.p = 3;
                  _t9 = _context11.v;
                  handleResponseError(_t9, url);
                case 4:
                  if (response.ok) {
                    _context11.n = 5;
                    break;
                  }
                  _context11.n = 5;
                  return handleResponseNotOk(response, url);
                case 5:
                  return _context11.a(2, response);
              }
            }, _callee10, null, [[1, 3]]);
          }));
          return _makeRequest.apply(this, arguments);
        }
        function handleResponseError(e, url) {
          var err = e;
          if (err.name === "AbortError") {
            err = new GoogleGenerativeAIAbortError("Request aborted when fetching ".concat(url.toString(), ": ").concat(e.message));
            err.stack = e.stack;
          } else if (!(e instanceof GoogleGenerativeAIFetchError || e instanceof GoogleGenerativeAIRequestInputError)) {
            err = new GoogleGenerativeAIError("Error fetching from ".concat(url.toString(), ": ").concat(e.message));
            err.stack = e.stack;
          }
          throw err;
        }
        function handleResponseNotOk(_x13, _x14) {
          return _handleResponseNotOk.apply(this, arguments);
        }
        /**
         * Generates the request options to be passed to the fetch API.
         * @param requestOptions - The user-defined request options.
         * @returns The generated request options.
         */
        function _handleResponseNotOk() {
          _handleResponseNotOk = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(response, url) {
            var message, errorDetails, json, _t0;
            return _regenerator().w(function (_context12) {
              while (1) switch (_context12.p = _context12.n) {
                case 0:
                  message = "";
                  _context12.p = 1;
                  _context12.n = 2;
                  return response.json();
                case 2:
                  json = _context12.v;
                  message = json.error.message;
                  if (json.error.details) {
                    message += " ".concat(JSON.stringify(json.error.details));
                    errorDetails = json.error.details;
                  }
                  _context12.n = 4;
                  break;
                case 3:
                  _context12.p = 3;
                  _t0 = _context12.v;
                case 4:
                  throw new GoogleGenerativeAIFetchError("Error fetching from ".concat(url.toString(), ": [").concat(response.status, " ").concat(response.statusText, "] ").concat(message), response.status, response.statusText, errorDetails);
                case 5:
                  return _context12.a(2);
              }
            }, _callee11, null, [[1, 3]]);
          }));
          return _handleResponseNotOk.apply(this, arguments);
        }
        function buildFetchOptions(requestOptions) {
          var fetchOptions = {};
          if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) !== undefined || (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) {
            var controller = new AbortController();
            if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) {
              setTimeout(function () {
                return controller.abort();
              }, requestOptions.timeout);
            }
            if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) {
              requestOptions.signal.addEventListener("abort", function () {
                controller.abort();
              });
            }
            fetchOptions.signal = controller.signal;
          }
          return fetchOptions;
        }

        /**
         * @license
         * Copyright 2024 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Adds convenience helper methods to a response object, including stream
         * chunks (as long as each chunk is a complete GenerateContentResponse JSON).
         */
        function addHelpers(response) {
          response.text = function () {
            if (response.candidates && response.candidates.length > 0) {
              if (response.candidates.length > 1) {
                console.warn("This response had ".concat(response.candidates.length, " ") + "candidates. Returning text from the first candidate only. " + "Access response.candidates directly to use the other candidates.");
              }
              if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError("".concat(formatBlockErrorMessage(response)), response);
              }
              return getText(response);
            } else if (response.promptFeedback) {
              throw new GoogleGenerativeAIResponseError("Text not available. ".concat(formatBlockErrorMessage(response)), response);
            }
            return "";
          };
          /**
           * TODO: remove at next major version
           */
          response.functionCall = function () {
            if (response.candidates && response.candidates.length > 0) {
              if (response.candidates.length > 1) {
                console.warn("This response had ".concat(response.candidates.length, " ") + "candidates. Returning function calls from the first candidate only. " + "Access response.candidates directly to use the other candidates.");
              }
              if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError("".concat(formatBlockErrorMessage(response)), response);
              }
              console.warn("response.functionCall() is deprecated. " + "Use response.functionCalls() instead.");
              return getFunctionCalls(response)[0];
            } else if (response.promptFeedback) {
              throw new GoogleGenerativeAIResponseError("Function call not available. ".concat(formatBlockErrorMessage(response)), response);
            }
            return undefined;
          };
          response.functionCalls = function () {
            if (response.candidates && response.candidates.length > 0) {
              if (response.candidates.length > 1) {
                console.warn("This response had ".concat(response.candidates.length, " ") + "candidates. Returning function calls from the first candidate only. " + "Access response.candidates directly to use the other candidates.");
              }
              if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError("".concat(formatBlockErrorMessage(response)), response);
              }
              return getFunctionCalls(response);
            } else if (response.promptFeedback) {
              throw new GoogleGenerativeAIResponseError("Function call not available. ".concat(formatBlockErrorMessage(response)), response);
            }
            return undefined;
          };
          return response;
        }
        /**
         * Returns all text found in all parts of first candidate.
         */
        function getText(response) {
          var _a, _b, _c, _d;
          var textStrings = [];
          if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
            var _iterator = _createForOfIteratorHelper((_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var part = _step.value;
                if (part.text) {
                  textStrings.push(part.text);
                }
                if (part.executableCode) {
                  textStrings.push("\n```" + part.executableCode.language + "\n" + part.executableCode.code + "\n```\n");
                }
                if (part.codeExecutionResult) {
                  textStrings.push("\n```\n" + part.codeExecutionResult.output + "\n```\n");
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          if (textStrings.length > 0) {
            return textStrings.join("");
          } else {
            return "";
          }
        }
        /**
         * Returns functionCall of first candidate.
         */
        function getFunctionCalls(response) {
          var _a, _b, _c, _d;
          var functionCalls = [];
          if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
            var _iterator2 = _createForOfIteratorHelper((_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var part = _step2.value;
                if (part.functionCall) {
                  functionCalls.push(part.functionCall);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          if (functionCalls.length > 0) {
            return functionCalls;
          } else {
            return undefined;
          }
        }
        var badFinishReasons = [FinishReason.RECITATION, FinishReason.SAFETY, FinishReason.LANGUAGE];
        function hadBadFinishReason(candidate) {
          return !!candidate.finishReason && badFinishReasons.includes(candidate.finishReason);
        }
        function formatBlockErrorMessage(response) {
          var _a, _b, _c;
          var message = "";
          if ((!response.candidates || response.candidates.length === 0) && response.promptFeedback) {
            message += "Response was blocked";
            if ((_a = response.promptFeedback) === null || _a === void 0 ? void 0 : _a.blockReason) {
              message += " due to ".concat(response.promptFeedback.blockReason);
            }
            if ((_b = response.promptFeedback) === null || _b === void 0 ? void 0 : _b.blockReasonMessage) {
              message += ": ".concat(response.promptFeedback.blockReasonMessage);
            }
          } else if ((_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0]) {
            var firstCandidate = response.candidates[0];
            if (hadBadFinishReason(firstCandidate)) {
              message += "Candidate was blocked due to ".concat(firstCandidate.finishReason);
              if (firstCandidate.finishMessage) {
                message += ": ".concat(firstCandidate.finishMessage);
              }
            }
          }
          return message;
        }

        /******************************************************************************
        Copyright (c) Microsoft Corporation.
          Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.
          THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */
        /* global Reflect, Promise, SuppressedError, Symbol */

        function __await(v) {
          return this instanceof __await ? (this.v = v, this) : new __await(v);
        }
        function __asyncGenerator(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
            return this;
          }, i;
          function verb(n) {
            if (g[n]) i[n] = function (v) {
              return new Promise(function (a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
          }
        }
        typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
          var e = new Error(message);
          return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
        };

        /**
         * @license
         * Copyright 2024 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var responseLineRE = /^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
        /**
         * Process a response.body stream from the backend and return an
         * iterator that provides one complete GenerateContentResponse at a time
         * and a promise that resolves with a single aggregated
         * GenerateContentResponse.
         *
         * @param response - Response from a fetch call
         */
        function processStream(response) {
          var inputStream = response.body.pipeThrough(new TextDecoderStream("utf8", {
            fatal: true
          }));
          var responseStream = getResponseStream(inputStream);
          var _responseStream$tee = responseStream.tee(),
            _responseStream$tee2 = _slicedToArray(_responseStream$tee, 2),
            stream1 = _responseStream$tee2[0],
            stream2 = _responseStream$tee2[1];
          return {
            stream: generateResponseSequence(stream1),
            response: getResponsePromise(stream2)
          };
        }
        function getResponsePromise(_x15) {
          return _getResponsePromise.apply(this, arguments);
        }
        function _getResponsePromise() {
          _getResponsePromise = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(stream) {
            var allResponses, reader, _yield$reader$read, done, value;
            return _regenerator().w(function (_context13) {
              while (1) switch (_context13.n) {
                case 0:
                  allResponses = [];
                  reader = stream.getReader();
                case 1:
                  if (!true) {
                    _context13.n = 4;
                    break;
                  }
                  _context13.n = 2;
                  return reader.read();
                case 2:
                  _yield$reader$read = _context13.v;
                  done = _yield$reader$read.done;
                  value = _yield$reader$read.value;
                  if (!done) {
                    _context13.n = 3;
                    break;
                  }
                  return _context13.a(2, addHelpers(aggregateResponses(allResponses)));
                case 3:
                  allResponses.push(value);
                  _context13.n = 1;
                  break;
                case 4:
                  return _context13.a(2);
              }
            }, _callee12);
          }));
          return _getResponsePromise.apply(this, arguments);
        }
        function generateResponseSequence(stream) {
          return __asyncGenerator(this, arguments, /*#__PURE__*/_regenerator().m(function generateResponseSequence_1() {
            var reader, _yield$__await, value, done;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  reader = stream.getReader();
                case 1:
                  if (!true) {
                    _context.n = 6;
                    break;
                  }
                  _context.n = 2;
                  return __await(reader.read());
                case 2:
                  _yield$__await = _context.v;
                  value = _yield$__await.value;
                  done = _yield$__await.done;
                  if (!done) {
                    _context.n = 3;
                    break;
                  }
                  return _context.a(3, 6);
                case 3:
                  _context.n = 4;
                  return __await(addHelpers(value));
                case 4:
                  _context.n = 5;
                  return _context.v;
                case 5:
                  _context.n = 1;
                  break;
                case 6:
                  return _context.a(2);
              }
            }, generateResponseSequence_1);
          }));
        }
        /**
         * Reads a raw stream from the fetch response and join incomplete
         * chunks, returning a new stream that provides a single complete
         * GenerateContentResponse in each iteration.
         */
        function getResponseStream(inputStream) {
          var reader = inputStream.getReader();
          var stream = new ReadableStream({
            start: function start(controller) {
              var currentText = "";
              return pump();
              function pump() {
                return reader.read().then(function (_ref) {
                  var value = _ref.value,
                    done = _ref.done;
                  if (done) {
                    if (currentText.trim()) {
                      controller.error(new GoogleGenerativeAIError("Failed to parse stream"));
                      return;
                    }
                    controller.close();
                    return;
                  }
                  currentText += value;
                  var match = currentText.match(responseLineRE);
                  var parsedResponse;
                  while (match) {
                    try {
                      parsedResponse = JSON.parse(match[1]);
                    } catch (e) {
                      controller.error(new GoogleGenerativeAIError("Error parsing JSON response: \"".concat(match[1], "\"")));
                      return;
                    }
                    controller.enqueue(parsedResponse);
                    currentText = currentText.substring(match[0].length);
                    match = currentText.match(responseLineRE);
                  }
                  return pump();
                }).catch(function (e) {
                  var err = e;
                  err.stack = e.stack;
                  if (err.name === "AbortError") {
                    err = new GoogleGenerativeAIAbortError("Request aborted when reading from the stream");
                  } else {
                    err = new GoogleGenerativeAIError("Error reading from the stream");
                  }
                  throw err;
                });
              }
            }
          });
          return stream;
        }
        /**
         * Aggregates an array of `GenerateContentResponse`s into a single
         * GenerateContentResponse.
         */
        function aggregateResponses(responses) {
          var lastResponse = responses[responses.length - 1];
          var aggregatedResponse = {
            promptFeedback: lastResponse === null || lastResponse === void 0 ? void 0 : lastResponse.promptFeedback
          };
          var _iterator3 = _createForOfIteratorHelper(responses),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var response = _step3.value;
              if (response.candidates) {
                var candidateIndex = 0;
                var _iterator4 = _createForOfIteratorHelper(response.candidates),
                  _step4;
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var candidate = _step4.value;
                    if (!aggregatedResponse.candidates) {
                      aggregatedResponse.candidates = [];
                    }
                    if (!aggregatedResponse.candidates[candidateIndex]) {
                      aggregatedResponse.candidates[candidateIndex] = {
                        index: candidateIndex
                      };
                    }
                    // Keep overwriting, the last one will be final
                    aggregatedResponse.candidates[candidateIndex].citationMetadata = candidate.citationMetadata;
                    aggregatedResponse.candidates[candidateIndex].groundingMetadata = candidate.groundingMetadata;
                    aggregatedResponse.candidates[candidateIndex].finishReason = candidate.finishReason;
                    aggregatedResponse.candidates[candidateIndex].finishMessage = candidate.finishMessage;
                    aggregatedResponse.candidates[candidateIndex].safetyRatings = candidate.safetyRatings;
                    /**
                     * Candidates should always have content and parts, but this handles
                     * possible malformed responses.
                     */
                    if (candidate.content && candidate.content.parts) {
                      if (!aggregatedResponse.candidates[candidateIndex].content) {
                        aggregatedResponse.candidates[candidateIndex].content = {
                          role: candidate.content.role || "user",
                          parts: []
                        };
                      }
                      var newPart = {};
                      var _iterator5 = _createForOfIteratorHelper(candidate.content.parts),
                        _step5;
                      try {
                        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                          var part = _step5.value;
                          if (part.text) {
                            newPart.text = part.text;
                          }
                          if (part.functionCall) {
                            newPart.functionCall = part.functionCall;
                          }
                          if (part.executableCode) {
                            newPart.executableCode = part.executableCode;
                          }
                          if (part.codeExecutionResult) {
                            newPart.codeExecutionResult = part.codeExecutionResult;
                          }
                          if (Object.keys(newPart).length === 0) {
                            newPart.text = "";
                          }
                          aggregatedResponse.candidates[candidateIndex].content.parts.push(newPart);
                        }
                      } catch (err) {
                        _iterator5.e(err);
                      } finally {
                        _iterator5.f();
                      }
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
                candidateIndex++;
              }
              if (response.usageMetadata) {
                aggregatedResponse.usageMetadata = response.usageMetadata;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          return aggregatedResponse;
        }

        /**
         * @license
         * Copyright 2024 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        function _generateContentStream2(_x16, _x17, _x18, _x19) {
          return _generateContentStream.apply(this, arguments);
        }
        function _generateContentStream() {
          _generateContentStream = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(apiKey, model, params, requestOptions) {
            var response;
            return _regenerator().w(function (_context14) {
              while (1) switch (_context14.n) {
                case 0:
                  _context14.n = 1;
                  return makeModelRequest(model, Task.STREAM_GENERATE_CONTENT, apiKey, /* stream */true, JSON.stringify(params), requestOptions);
                case 1:
                  response = _context14.v;
                  return _context14.a(2, processStream(response));
              }
            }, _callee13);
          }));
          return _generateContentStream.apply(this, arguments);
        }
        function _generateContent2(_x20, _x21, _x22, _x23) {
          return _generateContent.apply(this, arguments);
        }
        /**
         * @license
         * Copyright 2024 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        function _generateContent() {
          _generateContent = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(apiKey, model, params, requestOptions) {
            var response, responseJson, enhancedResponse;
            return _regenerator().w(function (_context15) {
              while (1) switch (_context15.n) {
                case 0:
                  _context15.n = 1;
                  return makeModelRequest(model, Task.GENERATE_CONTENT, apiKey, /* stream */false, JSON.stringify(params), requestOptions);
                case 1:
                  response = _context15.v;
                  _context15.n = 2;
                  return response.json();
                case 2:
                  responseJson = _context15.v;
                  enhancedResponse = addHelpers(responseJson);
                  return _context15.a(2, {
                    response: enhancedResponse
                  });
              }
            }, _callee14);
          }));
          return _generateContent.apply(this, arguments);
        }
        function formatSystemInstruction(input) {
          // null or undefined
          if (input == null) {
            return undefined;
          } else if (typeof input === "string") {
            return {
              role: "system",
              parts: [{
                text: input
              }]
            };
          } else if (input.text) {
            return {
              role: "system",
              parts: [input]
            };
          } else if (input.parts) {
            if (!input.role) {
              return {
                role: "system",
                parts: input.parts
              };
            } else {
              return input;
            }
          }
        }
        function formatNewContent(request) {
          var newParts = [];
          if (typeof request === "string") {
            newParts = [{
              text: request
            }];
          } else {
            var _iterator6 = _createForOfIteratorHelper(request),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var partOrString = _step6.value;
                if (typeof partOrString === "string") {
                  newParts.push({
                    text: partOrString
                  });
                } else {
                  newParts.push(partOrString);
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
          return assignRoleToPartsAndValidateSendMessageRequest(newParts);
        }
        /**
         * When multiple Part types (i.e. FunctionResponsePart and TextPart) are
         * passed in a single Part array, we may need to assign different roles to each
         * part. Currently only FunctionResponsePart requires a role other than 'user'.
         * @private
         * @param parts Array of parts to pass to the model
         * @returns Array of content items
         */
        function assignRoleToPartsAndValidateSendMessageRequest(parts) {
          var userContent = {
            role: "user",
            parts: []
          };
          var functionContent = {
            role: "function",
            parts: []
          };
          var hasUserContent = false;
          var hasFunctionContent = false;
          var _iterator7 = _createForOfIteratorHelper(parts),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var part = _step7.value;
              if ("functionResponse" in part) {
                functionContent.parts.push(part);
                hasFunctionContent = true;
              } else {
                userContent.parts.push(part);
                hasUserContent = true;
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          if (hasUserContent && hasFunctionContent) {
            throw new GoogleGenerativeAIError("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");
          }
          if (!hasUserContent && !hasFunctionContent) {
            throw new GoogleGenerativeAIError("No content is provided for sending chat message.");
          }
          if (hasUserContent) {
            return userContent;
          }
          return functionContent;
        }
        function formatCountTokensInput(params, modelParams) {
          var _a;
          var formattedGenerateContentRequest = {
            model: modelParams === null || modelParams === void 0 ? void 0 : modelParams.model,
            generationConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.generationConfig,
            safetySettings: modelParams === null || modelParams === void 0 ? void 0 : modelParams.safetySettings,
            tools: modelParams === null || modelParams === void 0 ? void 0 : modelParams.tools,
            toolConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.toolConfig,
            systemInstruction: modelParams === null || modelParams === void 0 ? void 0 : modelParams.systemInstruction,
            cachedContent: (_a = modelParams === null || modelParams === void 0 ? void 0 : modelParams.cachedContent) === null || _a === void 0 ? void 0 : _a.name,
            contents: []
          };
          var containsGenerateContentRequest = params.generateContentRequest != null;
          if (params.contents) {
            if (containsGenerateContentRequest) {
              throw new GoogleGenerativeAIRequestInputError("CountTokensRequest must have one of contents or generateContentRequest, not both.");
            }
            formattedGenerateContentRequest.contents = params.contents;
          } else if (containsGenerateContentRequest) {
            formattedGenerateContentRequest = Object.assign(Object.assign({}, formattedGenerateContentRequest), params.generateContentRequest);
          } else {
            // Array or string
            var content = formatNewContent(params);
            formattedGenerateContentRequest.contents = [content];
          }
          return {
            generateContentRequest: formattedGenerateContentRequest
          };
        }
        function formatGenerateContentInput(params) {
          var formattedRequest;
          if (params.contents) {
            formattedRequest = params;
          } else {
            // Array or string
            var content = formatNewContent(params);
            formattedRequest = {
              contents: [content]
            };
          }
          if (params.systemInstruction) {
            formattedRequest.systemInstruction = formatSystemInstruction(params.systemInstruction);
          }
          return formattedRequest;
        }
        function formatEmbedContentInput(params) {
          if (typeof params === "string" || Array.isArray(params)) {
            var content = formatNewContent(params);
            return {
              content: content
            };
          }
          return params;
        }

        /**
         * @license
         * Copyright 2024 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        // https://ai.google.dev/api/rest/v1beta/Content#part
        var VALID_PART_FIELDS = ["text", "inlineData", "functionCall", "functionResponse", "executableCode", "codeExecutionResult"];
        var VALID_PARTS_PER_ROLE = {
          user: ["text", "inlineData"],
          function: ["functionResponse"],
          model: ["text", "functionCall", "executableCode", "codeExecutionResult"],
          // System instructions shouldn't be in history anyway.
          system: ["text"]
        };
        function validateChatHistory(history) {
          var prevContent = false;
          var _iterator8 = _createForOfIteratorHelper(history),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var currContent = _step8.value;
              var role = currContent.role,
                parts = currContent.parts;
              if (!prevContent && role !== "user") {
                throw new GoogleGenerativeAIError("First content should be with role 'user', got ".concat(role));
              }
              if (!POSSIBLE_ROLES.includes(role)) {
                throw new GoogleGenerativeAIError("Each item should include role field. Got ".concat(role, " but valid roles are: ").concat(JSON.stringify(POSSIBLE_ROLES)));
              }
              if (!Array.isArray(parts)) {
                throw new GoogleGenerativeAIError("Content should have 'parts' property with an array of Parts");
              }
              if (parts.length === 0) {
                throw new GoogleGenerativeAIError("Each Content should have at least one part");
              }
              var countFields = {
                text: 0,
                inlineData: 0,
                functionCall: 0,
                functionResponse: 0,
                fileData: 0,
                executableCode: 0,
                codeExecutionResult: 0
              };
              var _iterator9 = _createForOfIteratorHelper(parts),
                _step9;
              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var part = _step9.value;
                  for (var _i2 = 0, _VALID_PART_FIELDS2 = VALID_PART_FIELDS; _i2 < _VALID_PART_FIELDS2.length; _i2++) {
                    var _key = _VALID_PART_FIELDS2[_i2];
                    if (_key in part) {
                      countFields[_key] += 1;
                    }
                  }
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
              var validParts = VALID_PARTS_PER_ROLE[role];
              for (var _i = 0, _VALID_PART_FIELDS = VALID_PART_FIELDS; _i < _VALID_PART_FIELDS.length; _i++) {
                var key = _VALID_PART_FIELDS[_i];
                if (!validParts.includes(key) && countFields[key] > 0) {
                  throw new GoogleGenerativeAIError("Content with role '".concat(role, "' can't contain '").concat(key, "' part"));
                }
              }
              prevContent = true;
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
        /**
         * Returns true if the response is valid (could be appended to the history), flase otherwise.
         */
        function isValidResponse(response) {
          var _a;
          if (response.candidates === undefined || response.candidates.length === 0) {
            return false;
          }
          var content = (_a = response.candidates[0]) === null || _a === void 0 ? void 0 : _a.content;
          if (content === undefined) {
            return false;
          }
          if (content.parts === undefined || content.parts.length === 0) {
            return false;
          }
          var _iterator0 = _createForOfIteratorHelper(content.parts),
            _step0;
          try {
            for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
              var part = _step0.value;
              if (part === undefined || Object.keys(part).length === 0) {
                return false;
              }
              if (part.text !== undefined && part.text === "") {
                return false;
              }
            }
          } catch (err) {
            _iterator0.e(err);
          } finally {
            _iterator0.f();
          }
          return true;
        }

        /**
         * @license
         * Copyright 2024 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Do not log a message for this error.
         */
        var SILENT_ERROR = "SILENT_ERROR";
        /**
         * ChatSession class that enables sending chat messages and stores
         * history of sent and received messages so far.
         *
         * @public
         */
        var ChatSession = /*#__PURE__*/function () {
          function ChatSession(apiKey, model, params) {
            var _requestOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            _classCallCheck(this, ChatSession);
            this.model = model;
            this.params = params;
            this._requestOptions = _requestOptions;
            this._history = [];
            this._sendPromise = Promise.resolve();
            this._apiKey = apiKey;
            if (params === null || params === void 0 ? void 0 : params.history) {
              validateChatHistory(params.history);
              this._history = params.history;
            }
          }
          /**
           * Gets the chat history so far. Blocked prompts are not added to history.
           * Blocked candidates are not added to history, nor are the prompts that
           * generated them.
           */
          return _createClass(ChatSession, [{
            key: "getHistory",
            value: (function () {
              var _getHistory = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
                return _regenerator().w(function (_context2) {
                  while (1) switch (_context2.n) {
                    case 0:
                      _context2.n = 1;
                      return this._sendPromise;
                    case 1:
                      return _context2.a(2, this._history);
                  }
                }, _callee, this);
              }));
              function getHistory() {
                return _getHistory.apply(this, arguments);
              }
              return getHistory;
            }()
            /**
             * Sends a chat message and receives a non-streaming
             * {@link GenerateContentResult}.
             *
             * Fields set in the optional {@link SingleRequestOptions} parameter will
             * take precedence over the {@link RequestOptions} values provided to
             * {@link GoogleGenerativeAI.getGenerativeModel }.
             */
            )
          }, {
            key: "sendMessage",
            value: (function () {
              var _sendMessage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(request) {
                var _this3 = this;
                var requestOptions,
                  _a,
                  _b,
                  _c,
                  _d,
                  _e,
                  _f,
                  newContent,
                  generateContentRequest,
                  chatSessionRequestOptions,
                  finalResult,
                  _args3 = arguments;
                return _regenerator().w(function (_context3) {
                  while (1) switch (_context3.n) {
                    case 0:
                      requestOptions = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
                      _context3.n = 1;
                      return this._sendPromise;
                    case 1:
                      newContent = formatNewContent(request);
                      generateContentRequest = {
                        safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
                        generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
                        tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
                        toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
                        systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
                        cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
                        contents: [].concat(_toConsumableArray(this._history), [newContent])
                      };
                      chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
                      // Add onto the chain.
                      this._sendPromise = this._sendPromise.then(function () {
                        return _generateContent2(_this3._apiKey, _this3.model, generateContentRequest, chatSessionRequestOptions);
                      }).then(function (result) {
                        var _a;
                        if (isValidResponse(result.response)) {
                          _this3._history.push(newContent);
                          var responseContent = Object.assign({
                            parts: [],
                            // Response seems to come back without a role set.
                            role: "model"
                          }, (_a = result.response.candidates) === null || _a === void 0 ? void 0 : _a[0].content);
                          _this3._history.push(responseContent);
                        } else {
                          var blockErrorMessage = formatBlockErrorMessage(result.response);
                          if (blockErrorMessage) {
                            console.warn("sendMessage() was unsuccessful. ".concat(blockErrorMessage, ". Inspect response object for details."));
                          }
                        }
                        finalResult = result;
                      }).catch(function (e) {
                        // Resets _sendPromise to avoid subsequent calls failing and throw error.
                        _this3._sendPromise = Promise.resolve();
                        throw e;
                      });
                      _context3.n = 2;
                      return this._sendPromise;
                    case 2:
                      return _context3.a(2, finalResult);
                  }
                }, _callee2, this);
              }));
              function sendMessage(_x24) {
                return _sendMessage.apply(this, arguments);
              }
              return sendMessage;
            }()
            /**
             * Sends a chat message and receives the response as a
             * {@link GenerateContentStreamResult} containing an iterable stream
             * and a response promise.
             *
             * Fields set in the optional {@link SingleRequestOptions} parameter will
             * take precedence over the {@link RequestOptions} values provided to
             * {@link GoogleGenerativeAI.getGenerativeModel }.
             */
            )
          }, {
            key: "sendMessageStream",
            value: (function () {
              var _sendMessageStream = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(request) {
                var _this4 = this;
                var requestOptions,
                  _a,
                  _b,
                  _c,
                  _d,
                  _e,
                  _f,
                  newContent,
                  generateContentRequest,
                  chatSessionRequestOptions,
                  streamPromise,
                  _args4 = arguments;
                return _regenerator().w(function (_context4) {
                  while (1) switch (_context4.n) {
                    case 0:
                      requestOptions = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
                      _context4.n = 1;
                      return this._sendPromise;
                    case 1:
                      newContent = formatNewContent(request);
                      generateContentRequest = {
                        safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
                        generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
                        tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
                        toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
                        systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
                        cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
                        contents: [].concat(_toConsumableArray(this._history), [newContent])
                      };
                      chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
                      streamPromise = _generateContentStream2(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions); // Add onto the chain.
                      this._sendPromise = this._sendPromise.then(function () {
                        return streamPromise;
                      })
                      // This must be handled to avoid unhandled rejection, but jump
                      // to the final catch block with a label to not log this error.
                      .catch(function (_ignored) {
                        throw new Error(SILENT_ERROR);
                      }).then(function (streamResult) {
                        return streamResult.response;
                      }).then(function (response) {
                        if (isValidResponse(response)) {
                          _this4._history.push(newContent);
                          var responseContent = Object.assign({}, response.candidates[0].content);
                          // Response seems to come back without a role set.
                          if (!responseContent.role) {
                            responseContent.role = "model";
                          }
                          _this4._history.push(responseContent);
                        } else {
                          var blockErrorMessage = formatBlockErrorMessage(response);
                          if (blockErrorMessage) {
                            console.warn("sendMessageStream() was unsuccessful. ".concat(blockErrorMessage, ". Inspect response object for details."));
                          }
                        }
                      }).catch(function (e) {
                        // Errors in streamPromise are already catchable by the user as
                        // streamPromise is returned.
                        // Avoid duplicating the error message in logs.
                        if (e.message !== SILENT_ERROR) {
                          // Users do not have access to _sendPromise to catch errors
                          // downstream from streamPromise, so they should not throw.
                          console.error(e);
                        }
                      });
                      return _context4.a(2, streamPromise);
                  }
                }, _callee3, this);
              }));
              function sendMessageStream(_x25) {
                return _sendMessageStream.apply(this, arguments);
              }
              return sendMessageStream;
            }())
          }]);
        }();
        exports("ChatSession", ChatSession);

        /**
         * @license
         * Copyright 2024 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        function _countTokens2(_x26, _x27, _x28, _x29) {
          return _countTokens.apply(this, arguments);
        }
        /**
         * @license
         * Copyright 2024 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        function _countTokens() {
          _countTokens = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(apiKey, model, params, singleRequestOptions) {
            var response;
            return _regenerator().w(function (_context16) {
              while (1) switch (_context16.n) {
                case 0:
                  _context16.n = 1;
                  return makeModelRequest(model, Task.COUNT_TOKENS, apiKey, false, JSON.stringify(params), singleRequestOptions);
                case 1:
                  response = _context16.v;
                  return _context16.a(2, response.json());
              }
            }, _callee15);
          }));
          return _countTokens.apply(this, arguments);
        }
        function _embedContent2(_x30, _x31, _x32, _x33) {
          return _embedContent.apply(this, arguments);
        }
        function _embedContent() {
          _embedContent = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(apiKey, model, params, requestOptions) {
            var response;
            return _regenerator().w(function (_context17) {
              while (1) switch (_context17.n) {
                case 0:
                  _context17.n = 1;
                  return makeModelRequest(model, Task.EMBED_CONTENT, apiKey, false, JSON.stringify(params), requestOptions);
                case 1:
                  response = _context17.v;
                  return _context17.a(2, response.json());
              }
            }, _callee16);
          }));
          return _embedContent.apply(this, arguments);
        }
        function _batchEmbedContents2(_x34, _x35, _x36, _x37) {
          return _batchEmbedContents.apply(this, arguments);
        }
        /**
         * @license
         * Copyright 2024 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Class for generative model APIs.
         * @public
         */
        function _batchEmbedContents() {
          _batchEmbedContents = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(apiKey, model, params, requestOptions) {
            var requestsWithModel, response;
            return _regenerator().w(function (_context18) {
              while (1) switch (_context18.n) {
                case 0:
                  requestsWithModel = params.requests.map(function (request) {
                    return Object.assign(Object.assign({}, request), {
                      model: model
                    });
                  });
                  _context18.n = 1;
                  return makeModelRequest(model, Task.BATCH_EMBED_CONTENTS, apiKey, false, JSON.stringify({
                    requests: requestsWithModel
                  }), requestOptions);
                case 1:
                  response = _context18.v;
                  return _context18.a(2, response.json());
              }
            }, _callee17);
          }));
          return _batchEmbedContents.apply(this, arguments);
        }
        var GenerativeModel = /*#__PURE__*/function () {
          function GenerativeModel(apiKey, modelParams) {
            var _requestOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            _classCallCheck(this, GenerativeModel);
            this.apiKey = apiKey;
            this._requestOptions = _requestOptions;
            if (modelParams.model.includes("/")) {
              // Models may be named "models/model-name" or "tunedModels/model-name"
              this.model = modelParams.model;
            } else {
              // If path is not included, assume it's a non-tuned model.
              this.model = "models/".concat(modelParams.model);
            }
            this.generationConfig = modelParams.generationConfig || {};
            this.safetySettings = modelParams.safetySettings || [];
            this.tools = modelParams.tools;
            this.toolConfig = modelParams.toolConfig;
            this.systemInstruction = formatSystemInstruction(modelParams.systemInstruction);
            this.cachedContent = modelParams.cachedContent;
          }
          /**
           * Makes a single non-streaming call to the model
           * and returns an object containing a single {@link GenerateContentResponse}.
           *
           * Fields set in the optional {@link SingleRequestOptions} parameter will
           * take precedence over the {@link RequestOptions} values provided to
           * {@link GoogleGenerativeAI.getGenerativeModel }.
           */
          return _createClass(GenerativeModel, [{
            key: "generateContent",
            value: (function () {
              var _generateContent3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(request) {
                var requestOptions,
                  _a,
                  formattedParams,
                  generativeModelRequestOptions,
                  _args5 = arguments;
                return _regenerator().w(function (_context5) {
                  while (1) switch (_context5.n) {
                    case 0:
                      requestOptions = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
                      formattedParams = formatGenerateContentInput(request);
                      generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
                      return _context5.a(2, _generateContent2(this.apiKey, this.model, Object.assign({
                        generationConfig: this.generationConfig,
                        safetySettings: this.safetySettings,
                        tools: this.tools,
                        toolConfig: this.toolConfig,
                        systemInstruction: this.systemInstruction,
                        cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
                      }, formattedParams), generativeModelRequestOptions));
                  }
                }, _callee4, this);
              }));
              function generateContent(_x38) {
                return _generateContent3.apply(this, arguments);
              }
              return generateContent;
            }()
            /**
             * Makes a single streaming call to the model and returns an object
             * containing an iterable stream that iterates over all chunks in the
             * streaming response as well as a promise that returns the final
             * aggregated response.
             *
             * Fields set in the optional {@link SingleRequestOptions} parameter will
             * take precedence over the {@link RequestOptions} values provided to
             * {@link GoogleGenerativeAI.getGenerativeModel }.
             */
            )
          }, {
            key: "generateContentStream",
            value: (function () {
              var _generateContentStream3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(request) {
                var requestOptions,
                  _a,
                  formattedParams,
                  generativeModelRequestOptions,
                  _args6 = arguments;
                return _regenerator().w(function (_context6) {
                  while (1) switch (_context6.n) {
                    case 0:
                      requestOptions = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
                      formattedParams = formatGenerateContentInput(request);
                      generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
                      return _context6.a(2, _generateContentStream2(this.apiKey, this.model, Object.assign({
                        generationConfig: this.generationConfig,
                        safetySettings: this.safetySettings,
                        tools: this.tools,
                        toolConfig: this.toolConfig,
                        systemInstruction: this.systemInstruction,
                        cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
                      }, formattedParams), generativeModelRequestOptions));
                  }
                }, _callee5, this);
              }));
              function generateContentStream(_x39) {
                return _generateContentStream3.apply(this, arguments);
              }
              return generateContentStream;
            }()
            /**
             * Gets a new {@link ChatSession} instance which can be used for
             * multi-turn chats.
             */
            )
          }, {
            key: "startChat",
            value: function startChat(startChatParams) {
              var _a;
              return new ChatSession(this.apiKey, this.model, Object.assign({
                generationConfig: this.generationConfig,
                safetySettings: this.safetySettings,
                tools: this.tools,
                toolConfig: this.toolConfig,
                systemInstruction: this.systemInstruction,
                cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
              }, startChatParams), this._requestOptions);
            }
            /**
             * Counts the tokens in the provided request.
             *
             * Fields set in the optional {@link SingleRequestOptions} parameter will
             * take precedence over the {@link RequestOptions} values provided to
             * {@link GoogleGenerativeAI.getGenerativeModel }.
             */
          }, {
            key: "countTokens",
            value: (function () {
              var _countTokens3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(request) {
                var requestOptions,
                  formattedParams,
                  generativeModelRequestOptions,
                  _args7 = arguments;
                return _regenerator().w(function (_context7) {
                  while (1) switch (_context7.n) {
                    case 0:
                      requestOptions = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
                      formattedParams = formatCountTokensInput(request, {
                        model: this.model,
                        generationConfig: this.generationConfig,
                        safetySettings: this.safetySettings,
                        tools: this.tools,
                        toolConfig: this.toolConfig,
                        systemInstruction: this.systemInstruction,
                        cachedContent: this.cachedContent
                      });
                      generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
                      return _context7.a(2, _countTokens2(this.apiKey, this.model, formattedParams, generativeModelRequestOptions));
                  }
                }, _callee6, this);
              }));
              function countTokens(_x40) {
                return _countTokens3.apply(this, arguments);
              }
              return countTokens;
            }()
            /**
             * Embeds the provided content.
             *
             * Fields set in the optional {@link SingleRequestOptions} parameter will
             * take precedence over the {@link RequestOptions} values provided to
             * {@link GoogleGenerativeAI.getGenerativeModel }.
             */
            )
          }, {
            key: "embedContent",
            value: (function () {
              var _embedContent3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(request) {
                var requestOptions,
                  formattedParams,
                  generativeModelRequestOptions,
                  _args8 = arguments;
                return _regenerator().w(function (_context8) {
                  while (1) switch (_context8.n) {
                    case 0:
                      requestOptions = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};
                      formattedParams = formatEmbedContentInput(request);
                      generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
                      return _context8.a(2, _embedContent2(this.apiKey, this.model, formattedParams, generativeModelRequestOptions));
                  }
                }, _callee7, this);
              }));
              function embedContent(_x41) {
                return _embedContent3.apply(this, arguments);
              }
              return embedContent;
            }()
            /**
             * Embeds an array of {@link EmbedContentRequest}s.
             *
             * Fields set in the optional {@link SingleRequestOptions} parameter will
             * take precedence over the {@link RequestOptions} values provided to
             * {@link GoogleGenerativeAI.getGenerativeModel }.
             */
            )
          }, {
            key: "batchEmbedContents",
            value: (function () {
              var _batchEmbedContents3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(batchEmbedContentRequest) {
                var requestOptions,
                  generativeModelRequestOptions,
                  _args9 = arguments;
                return _regenerator().w(function (_context9) {
                  while (1) switch (_context9.n) {
                    case 0:
                      requestOptions = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {};
                      generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
                      return _context9.a(2, _batchEmbedContents2(this.apiKey, this.model, batchEmbedContentRequest, generativeModelRequestOptions));
                  }
                }, _callee8, this);
              }));
              function batchEmbedContents(_x42) {
                return _batchEmbedContents3.apply(this, arguments);
              }
              return batchEmbedContents;
            }())
          }]);
        }();
        exports("GenerativeModel", GenerativeModel);

        /**
         * @license
         * Copyright 2024 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Top-level class for this SDK
         * @public
         */
        var GoogleGenerativeAI = /*#__PURE__*/function () {
          function GoogleGenerativeAI(apiKey) {
            _classCallCheck(this, GoogleGenerativeAI);
            this.apiKey = apiKey;
          }
          /**
           * Gets a {@link GenerativeModel} instance for the provided model name.
           */
          return _createClass(GoogleGenerativeAI, [{
            key: "getGenerativeModel",
            value: function getGenerativeModel(modelParams, requestOptions) {
              if (!modelParams.model) {
                throw new GoogleGenerativeAIError("Must provide a model name. " + "Example: genai.getGenerativeModel({ model: 'my-model-name' })");
              }
              return new GenerativeModel(this.apiKey, modelParams, requestOptions);
            }
            /**
             * Creates a {@link GenerativeModel} instance from provided content cache.
             */
          }, {
            key: "getGenerativeModelFromCachedContent",
            value: function getGenerativeModelFromCachedContent(cachedContent, modelParams, requestOptions) {
              if (!cachedContent.name) {
                throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `name` field.");
              }
              if (!cachedContent.model) {
                throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `model` field.");
              }
              /**
               * Not checking tools and toolConfig for now as it would require a deep
               * equality comparison and isn't likely to be a common case.
               */
              var disallowedDuplicates = ["model", "systemInstruction"];
              for (var _i3 = 0, _disallowedDuplicates = disallowedDuplicates; _i3 < _disallowedDuplicates.length; _i3++) {
                var key = _disallowedDuplicates[_i3];
                if ((modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) && cachedContent[key] && (modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) !== cachedContent[key]) {
                  if (key === "model") {
                    var modelParamsComp = modelParams.model.startsWith("models/") ? modelParams.model.replace("models/", "") : modelParams.model;
                    var cachedContentComp = cachedContent.model.startsWith("models/") ? cachedContent.model.replace("models/", "") : cachedContent.model;
                    if (modelParamsComp === cachedContentComp) {
                      continue;
                    }
                  }
                  throw new GoogleGenerativeAIRequestInputError("Different value for \"".concat(key, "\" specified in modelParams") + " (".concat(modelParams[key], ") and cachedContent (").concat(cachedContent[key], ")"));
                }
              }
              var modelParamsFromCache = Object.assign(Object.assign({}, modelParams), {
                model: cachedContent.model,
                tools: cachedContent.tools,
                toolConfig: cachedContent.toolConfig,
                systemInstruction: cachedContent.systemInstruction,
                cachedContent: cachedContent
              });
              return new GenerativeModel(this.apiKey, modelParamsFromCache, requestOptions);
            }
          }]);
        }();
        exports("GoogleGenerativeAI", GoogleGenerativeAI);
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-DI-N5uYW.js.map
