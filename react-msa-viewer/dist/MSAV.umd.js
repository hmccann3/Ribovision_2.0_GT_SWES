(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('prop-types'), require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'prop-types', 'react'], factory) :
  (factory((global.ReactMSAViewer = {}),global.PropTypes,global.React));
}(this, (function (exports,PropTypes,React) { 'use strict';

  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  var React__default = 'default' in React ? React['default'] : React;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _inheritsLoose$1(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var subscriptionShape = PropTypes.shape({
    trySubscribe: PropTypes.func.isRequired,
    tryUnsubscribe: PropTypes.func.isRequired,
    notifyNestedSubs: PropTypes.func.isRequired,
    isSubscribed: PropTypes.func.isRequired
  });
  var storeShape = PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  });

  /**
   * Prints a warning in the console if it exists.
   *
   * @param {String} message The warning message.
   * @returns {void}
   */

  var prefixUnsafeLifecycleMethods = typeof React__default.forwardRef !== "undefined";

  function createProvider(storeKey) {
    var _Provider$childContex;

    if (storeKey === void 0) {
      storeKey = 'store';
    }

    var subscriptionKey = storeKey + "Subscription";

    var Provider =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose$1(Provider, _Component);

      var _proto = Provider.prototype;

      _proto.getChildContext = function getChildContext() {
        var _ref;

        return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
      };

      function Provider(props, context) {
        var _this;

        _this = _Component.call(this, props, context) || this;
        _this[storeKey] = props.store;
        return _this;
      }

      _proto.render = function render() {
        return React.Children.only(this.props.children);
      };

      return Provider;
    }(React.Component);

    Provider.propTypes = {
      store: storeShape.isRequired,
      children: PropTypes.element.isRequired
    };
    Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = storeShape.isRequired, _Provider$childContex[subscriptionKey] = subscriptionShape, _Provider$childContex);
    return Provider;
  }
  createProvider();

  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _extends$1() {
    _extends$1 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$1.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
  Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
  function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
  var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
  var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
  var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

  var reactIs_production_min = {
  	AsyncMode: AsyncMode,
  	ConcurrentMode: ConcurrentMode,
  	ContextConsumer: ContextConsumer,
  	ContextProvider: ContextProvider,
  	Element: Element,
  	ForwardRef: ForwardRef,
  	Fragment: Fragment,
  	Lazy: Lazy,
  	Memo: Memo,
  	Portal: Portal,
  	Profiler: Profiler,
  	StrictMode: StrictMode,
  	Suspense: Suspense,
  	isAsyncMode: isAsyncMode,
  	isConcurrentMode: isConcurrentMode,
  	isContextConsumer: isContextConsumer,
  	isContextProvider: isContextProvider,
  	isElement: isElement,
  	isForwardRef: isForwardRef,
  	isFragment: isFragment,
  	isLazy: isLazy,
  	isMemo: isMemo,
  	isPortal: isPortal,
  	isProfiler: isProfiler,
  	isStrictMode: isStrictMode,
  	isSuspense: isSuspense,
  	isValidElementType: isValidElementType,
  	typeOf: typeOf
  };

  var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_production_min;
  }
  });
  var reactIs_1 = reactIs.isValidElementType;

  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
  var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  };
  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  };
  var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

  function getStatics(component) {
    // React v16.11 and below
    if (reactIs.isMemo(component)) {
      return MEMO_STATICS;
    } // React v16.12 and above


    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
  }

  var defineProperty = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getPrototypeOf = Object.getPrototypeOf;
  var objectPrototype = Object.prototype;
  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
      // don't hoist over string (html) components
      if (objectPrototype) {
        var inheritedComponent = getPrototypeOf(sourceComponent);

        if (inheritedComponent && inheritedComponent !== objectPrototype) {
          hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
        }
      }

      var keys = getOwnPropertyNames(sourceComponent);

      if (getOwnPropertySymbols) {
        keys = keys.concat(getOwnPropertySymbols(sourceComponent));
      }

      var targetStatics = getStatics(targetComponent);
      var sourceStatics = getStatics(sourceComponent);

      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];

        if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
          var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

          try {
            // Avoid failures from read-only properties
            defineProperty(targetComponent, key, descriptor);
          } catch (e) {}
        }
      }
    }

    return targetComponent;
  }

  var hoistNonReactStatics_cjs = hoistNonReactStatics;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var invariant = function(condition, format, a, b, c, d, e, f) {

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error(
          'Minified exception occurred; use the non-minified dev environment ' +
          'for the full error message and additional helpful warnings.'
        );
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(
          format.replace(/%s/g, function() { return args[argIndex++]; })
        );
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  };

  var browser = invariant;

  // encapsulates the subscription logic for connecting a component to the redux store, as
  // well as nesting subscriptions of descendant components, so that we can ensure the
  // ancestor components re-render before descendants
  var CLEARED = null;
  var nullListeners = {
    notify: function notify() {}
  };

  function createListenerCollection() {
    // the current/next pattern is copied from redux's createStore code.
    // TODO: refactor+expose that code to be reusable here?
    var current = [];
    var next = [];
    return {
      clear: function clear() {
        next = CLEARED;
        current = CLEARED;
      },
      notify: function notify() {
        var listeners = current = next;

        for (var i = 0; i < listeners.length; i++) {
          listeners[i]();
        }
      },
      get: function get() {
        return next;
      },
      subscribe: function subscribe(listener) {
        var isSubscribed = true;
        if (next === current) next = current.slice();
        next.push(listener);
        return function unsubscribe() {
          if (!isSubscribed || current === CLEARED) return;
          isSubscribed = false;
          if (next === current) next = current.slice();
          next.splice(next.indexOf(listener), 1);
        };
      }
    };
  }

  var Subscription =
  /*#__PURE__*/
  function () {
    function Subscription(store, parentSub, onStateChange) {
      this.store = store;
      this.parentSub = parentSub;
      this.onStateChange = onStateChange;
      this.unsubscribe = null;
      this.listeners = nullListeners;
    }

    var _proto = Subscription.prototype;

    _proto.addNestedSub = function addNestedSub(listener) {
      this.trySubscribe();
      return this.listeners.subscribe(listener);
    };

    _proto.notifyNestedSubs = function notifyNestedSubs() {
      this.listeners.notify();
    };

    _proto.isSubscribed = function isSubscribed() {
      return Boolean(this.unsubscribe);
    };

    _proto.trySubscribe = function trySubscribe() {
      if (!this.unsubscribe) {
        this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
        this.listeners = createListenerCollection();
      }
    };

    _proto.tryUnsubscribe = function tryUnsubscribe() {
      if (this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
        this.listeners.clear();
        this.listeners = nullListeners;
      }
    };

    return Subscription;
  }();

  var prefixUnsafeLifecycleMethods$1 = typeof React__default.forwardRef !== "undefined";
  var hotReloadingVersion = 0;
  var dummyState = {};

  function noop() {}

  function makeSelectorStateful(sourceSelector, store) {
    // wrap the selector in an object that tracks its results between runs.
    var selector = {
      run: function runComponentSelector(props) {
        try {
          var nextProps = sourceSelector(store.getState(), props);

          if (nextProps !== selector.props || selector.error) {
            selector.shouldComponentUpdate = true;
            selector.props = nextProps;
            selector.error = null;
          }
        } catch (error) {
          selector.shouldComponentUpdate = true;
          selector.error = error;
        }
      }
    };
    return selector;
  }

  function connectAdvanced(
  /*
    selectorFactory is a func that is responsible for returning the selector function used to
    compute new props from state, props, and dispatch. For example:
       export default connectAdvanced((dispatch, options) => (state, props) => ({
        thing: state.things[props.thingId],
        saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
      }))(YourComponent)
     Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
    outside of their selector as an optimization. Options passed to connectAdvanced are passed to
    the selectorFactory, along with displayName and WrappedComponent, as the second argument.
     Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
    props. Do not use connectAdvanced directly without memoizing results between calls to your
    selector, otherwise the Connect component will re-render on every state or props change.
  */
  selectorFactory, // options object:
  _ref) {
    var _contextTypes, _childContextTypes;

    if (_ref === void 0) {
      _ref = {};
    }

    var _ref2 = _ref,
        _ref2$getDisplayName = _ref2.getDisplayName,
        getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
      return "ConnectAdvanced(" + name + ")";
    } : _ref2$getDisplayName,
        _ref2$methodName = _ref2.methodName,
        methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
        _ref2$renderCountProp = _ref2.renderCountProp,
        renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
        _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
        shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
        _ref2$storeKey = _ref2.storeKey,
        storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
        _ref2$withRef = _ref2.withRef,
        withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
        connectOptions = _objectWithoutPropertiesLoose$1(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]);

    var subscriptionKey = storeKey + 'Subscription';
    var version = hotReloadingVersion++;
    var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = storeShape, _contextTypes[subscriptionKey] = subscriptionShape, _contextTypes);
    var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = subscriptionShape, _childContextTypes);
    return function wrapWithConnect(WrappedComponent) {
      browser(reactIs_1(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + JSON.stringify(WrappedComponent)));
      var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      var displayName = getDisplayName(wrappedComponentName);

      var selectorFactoryOptions = _extends$1({}, connectOptions, {
        getDisplayName: getDisplayName,
        methodName: methodName,
        renderCountProp: renderCountProp,
        shouldHandleStateChanges: shouldHandleStateChanges,
        storeKey: storeKey,
        withRef: withRef,
        displayName: displayName,
        wrappedComponentName: wrappedComponentName,
        WrappedComponent: WrappedComponent // TODO Actually fix our use of componentWillReceiveProps

        /* eslint-disable react/no-deprecated */

      });

      var Connect =
      /*#__PURE__*/
      function (_Component) {
        _inheritsLoose$1(Connect, _Component);

        function Connect(props, context) {
          var _this;

          _this = _Component.call(this, props, context) || this;
          _this.version = version;
          _this.state = {};
          _this.renderCount = 0;
          _this.store = props[storeKey] || context[storeKey];
          _this.propsMode = Boolean(props[storeKey]);
          _this.setWrappedInstance = _this.setWrappedInstance.bind(_assertThisInitialized$1(_assertThisInitialized$1(_this)));
          browser(_this.store, "Could not find \"" + storeKey + "\" in either the context or props of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + ("or explicitly pass \"" + storeKey + "\" as a prop to \"" + displayName + "\"."));

          _this.initSelector();

          _this.initSubscription();

          return _this;
        }

        var _proto = Connect.prototype;

        _proto.getChildContext = function getChildContext() {
          var _ref3;

          // If this component received store from props, its subscription should be transparent
          // to any descendants receiving store+subscription from context; it passes along
          // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
          // Connect to control ordering of notifications to flow top-down.
          var subscription = this.propsMode ? null : this.subscription;
          return _ref3 = {}, _ref3[subscriptionKey] = subscription || this.context[subscriptionKey], _ref3;
        };

        _proto.componentDidMount = function componentDidMount() {
          if (!shouldHandleStateChanges) return; // componentWillMount fires during server side rendering, but componentDidMount and
          // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
          // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
          // To handle the case where a child component may have triggered a state change by
          // dispatching an action in its componentWillMount, we have to re-run the select and maybe
          // re-render.

          this.subscription.trySubscribe();
          this.selector.run(this.props);
          if (this.selector.shouldComponentUpdate) this.forceUpdate();
        }; // Note: this is renamed below to the UNSAFE_ version in React >=16.3.0


        _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
          this.selector.run(nextProps);
        };

        _proto.shouldComponentUpdate = function shouldComponentUpdate() {
          return this.selector.shouldComponentUpdate;
        };

        _proto.componentWillUnmount = function componentWillUnmount() {
          if (this.subscription) this.subscription.tryUnsubscribe();
          this.subscription = null;
          this.notifyNestedSubs = noop;
          this.store = null;
          this.selector.run = noop;
          this.selector.shouldComponentUpdate = false;
        };

        _proto.getWrappedInstance = function getWrappedInstance() {
          browser(withRef, "To access the wrapped instance, you need to specify " + ("{ withRef: true } in the options argument of the " + methodName + "() call."));
          return this.wrappedInstance;
        };

        _proto.setWrappedInstance = function setWrappedInstance(ref) {
          this.wrappedInstance = ref;
        };

        _proto.initSelector = function initSelector() {
          var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
          this.selector = makeSelectorStateful(sourceSelector, this.store);
          this.selector.run(this.props);
        };

        _proto.initSubscription = function initSubscription() {
          if (!shouldHandleStateChanges) return; // parentSub's source should match where store came from: props vs. context. A component
          // connected to the store via props shouldn't use subscription from context, or vice versa.

          var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
          this.subscription = new Subscription(this.store, parentSub, this.onStateChange.bind(this)); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
          // the middle of the notification loop, where `this.subscription` will then be null. An
          // extra null check every change can be avoided by copying the method onto `this` and then
          // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
          // listeners logic is changed to not call listeners that have been unsubscribed in the
          // middle of the notification loop.

          this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
        };

        _proto.onStateChange = function onStateChange() {
          this.selector.run(this.props);

          if (!this.selector.shouldComponentUpdate) {
            this.notifyNestedSubs();
          } else {
            this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
            this.setState(dummyState);
          }
        };

        _proto.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
          // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
          // needs to notify nested subs. Once called, it unimplements itself until further state
          // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
          // a boolean check every time avoids an extra method call most of the time, resulting
          // in some perf boost.
          this.componentDidUpdate = undefined;
          this.notifyNestedSubs();
        };

        _proto.isSubscribed = function isSubscribed() {
          return Boolean(this.subscription) && this.subscription.isSubscribed();
        };

        _proto.addExtraProps = function addExtraProps(props) {
          if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props; // make a shallow copy so that fields added don't leak to the original selector.
          // this is especially important for 'ref' since that's a reference back to the component
          // instance. a singleton memoized selector would then be holding a reference to the
          // instance, preventing the instance from being garbage collected, and that would be bad

          var withExtras = _extends$1({}, props);

          if (withRef) withExtras.ref = this.setWrappedInstance;
          if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
          if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
          return withExtras;
        };

        _proto.render = function render() {
          var selector = this.selector;
          selector.shouldComponentUpdate = false;

          if (selector.error) {
            throw selector.error;
          } else {
            return React.createElement(WrappedComponent, this.addExtraProps(selector.props));
          }
        };

        return Connect;
      }(React.Component);

      if (prefixUnsafeLifecycleMethods$1) {
        // Use UNSAFE_ event name where supported
        Connect.prototype.UNSAFE_componentWillReceiveProps = Connect.prototype.componentWillReceiveProps;
        delete Connect.prototype.componentWillReceiveProps;
      }
      /* eslint-enable react/no-deprecated */


      Connect.WrappedComponent = WrappedComponent;
      Connect.displayName = displayName;
      Connect.childContextTypes = childContextTypes;
      Connect.contextTypes = contextTypes;
      Connect.propTypes = contextTypes;

      return hoistNonReactStatics_cjs(Connect, WrappedComponent);
    };
  }

  var hasOwn = Object.prototype.hasOwnProperty;

  function is(x, y) {
    if (x === y) {
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }

  function shallowEqual(objA, objB) {
    if (is(objA, objB)) return true;

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
      return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;

    for (var i = 0; i < keysA.length; i++) {
      if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }

    return true;
  }

  function symbolObservablePonyfill(root) {
  	var result;
  	var Symbol = root.Symbol;

  	if (typeof Symbol === 'function') {
  		if (Symbol.observable) {
  			result = Symbol.observable;
  		} else {
  			result = Symbol('observable');
  			Symbol.observable = result;
  		}
  	} else {
  		result = '@@observable';
  	}

  	return result;
  }

  /* global window */

  var root;

  if (typeof self !== 'undefined') {
    root = self;
  } else if (typeof window !== 'undefined') {
    root = window;
  } else if (typeof global !== 'undefined') {
    root = global;
  } else if (typeof module !== 'undefined') {
    root = module;
  } else {
    root = Function('return this')();
  }

  var result = symbolObservablePonyfill(root);

  /**
   * These are private action types reserved by Redux.
   * For any unknown actions, you must return the current state.
   * If the current state is undefined, you must return the initial state.
   * Do not reference these action types directly in your code.
   */
  var randomString = function randomString() {
    return Math.random().toString(36).substring(7).split('').join('.');
  };

  var ActionTypes = {
    INIT: "@@redux/INIT" + randomString(),
    REPLACE: "@@redux/REPLACE" + randomString(),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
      return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
    }
  };

  /**
   * @param {any} obj The object to inspect.
   * @returns {boolean} True if the argument appears to be a plain object.
   */
  function isPlainObject(obj) {
    if (typeof obj !== 'object' || obj === null) return false;
    var proto = obj;

    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }

    return Object.getPrototypeOf(obj) === proto;
  }

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */

  function createStore(reducer, preloadedState, enhancer) {
    var _ref2;

    if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
      throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
    }

    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
      enhancer = preloadedState;
      preloadedState = undefined;
    }

    if (typeof enhancer !== 'undefined') {
      if (typeof enhancer !== 'function') {
        throw new Error('Expected the enhancer to be a function.');
      }

      return enhancer(createStore)(reducer, preloadedState);
    }

    if (typeof reducer !== 'function') {
      throw new Error('Expected the reducer to be a function.');
    }

    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    /**
     * This makes a shallow copy of currentListeners so we can use
     * nextListeners as a temporary list while dispatching.
     *
     * This prevents any bugs around consumers calling
     * subscribe/unsubscribe in the middle of a dispatch.
     */

    function ensureCanMutateNextListeners() {
      if (nextListeners === currentListeners) {
        nextListeners = currentListeners.slice();
      }
    }
    /**
     * Reads the state tree managed by the store.
     *
     * @returns {any} The current state tree of your application.
     */


    function getState() {
      if (isDispatching) {
        throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
      }

      return currentState;
    }
    /**
     * Adds a change listener. It will be called any time an action is dispatched,
     * and some part of the state tree may potentially have changed. You may then
     * call `getState()` to read the current state tree inside the callback.
     *
     * You may call `dispatch()` from a change listener, with the following
     * caveats:
     *
     * 1. The subscriptions are snapshotted just before every `dispatch()` call.
     * If you subscribe or unsubscribe while the listeners are being invoked, this
     * will not have any effect on the `dispatch()` that is currently in progress.
     * However, the next `dispatch()` call, whether nested or not, will use a more
     * recent snapshot of the subscription list.
     *
     * 2. The listener should not expect to see all state changes, as the state
     * might have been updated multiple times during a nested `dispatch()` before
     * the listener is called. It is, however, guaranteed that all subscribers
     * registered before the `dispatch()` started will be called with the latest
     * state by the time it exits.
     *
     * @param {Function} listener A callback to be invoked on every dispatch.
     * @returns {Function} A function to remove this change listener.
     */


    function subscribe(listener) {
      if (typeof listener !== 'function') {
        throw new Error('Expected the listener to be a function.');
      }

      if (isDispatching) {
        throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      var isSubscribed = true;
      ensureCanMutateNextListeners();
      nextListeners.push(listener);
      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }

        if (isDispatching) {
          throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
        }

        isSubscribed = false;
        ensureCanMutateNextListeners();
        var index = nextListeners.indexOf(listener);
        nextListeners.splice(index, 1);
        currentListeners = null;
      };
    }
    /**
     * Dispatches an action. It is the only way to trigger a state change.
     *
     * The `reducer` function, used to create the store, will be called with the
     * current state tree and the given `action`. Its return value will
     * be considered the **next** state of the tree, and the change listeners
     * will be notified.
     *
     * The base implementation only supports plain object actions. If you want to
     * dispatch a Promise, an Observable, a thunk, or something else, you need to
     * wrap your store creating function into the corresponding middleware. For
     * example, see the documentation for the `redux-thunk` package. Even the
     * middleware will eventually dispatch plain object actions using this method.
     *
     * @param {Object} action A plain object representing “what changed”. It is
     * a good idea to keep actions serializable so you can record and replay user
     * sessions, or use the time travelling `redux-devtools`. An action must have
     * a `type` property which may not be `undefined`. It is a good idea to use
     * string constants for action types.
     *
     * @returns {Object} For convenience, the same action object you dispatched.
     *
     * Note that, if you use a custom middleware, it may wrap `dispatch()` to
     * return something else (for example, a Promise you can await).
     */


    function dispatch(action) {
      if (!isPlainObject(action)) {
        throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
      }

      if (typeof action.type === 'undefined') {
        throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
      }

      if (isDispatching) {
        throw new Error('Reducers may not dispatch actions.');
      }

      try {
        isDispatching = true;
        currentState = currentReducer(currentState, action);
      } finally {
        isDispatching = false;
      }

      var listeners = currentListeners = nextListeners;

      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        listener();
      }

      return action;
    }
    /**
     * Replaces the reducer currently used by the store to calculate the state.
     *
     * You might need this if your app implements code splitting and you want to
     * load some of the reducers dynamically. You might also need this if you
     * implement a hot reloading mechanism for Redux.
     *
     * @param {Function} nextReducer The reducer for the store to use instead.
     * @returns {void}
     */


    function replaceReducer(nextReducer) {
      if (typeof nextReducer !== 'function') {
        throw new Error('Expected the nextReducer to be a function.');
      }

      currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
      // Any reducers that existed in both the new and old rootReducer
      // will receive the previous state. This effectively populates
      // the new state tree with any relevant data from the old one.

      dispatch({
        type: ActionTypes.REPLACE
      });
    }
    /**
     * Interoperability point for observable/reactive libraries.
     * @returns {observable} A minimal observable of state changes.
     * For more information, see the observable proposal:
     * https://github.com/tc39/proposal-observable
     */


    function observable() {
      var _ref;

      var outerSubscribe = subscribe;
      return _ref = {
        /**
         * The minimal observable subscription method.
         * @param {Object} observer Any object that can be used as an observer.
         * The observer object should have a `next` method.
         * @returns {subscription} An object with an `unsubscribe` method that can
         * be used to unsubscribe the observable from the store, and prevent further
         * emission of values from the observable.
         */
        subscribe: function subscribe(observer) {
          if (typeof observer !== 'object' || observer === null) {
            throw new TypeError('Expected the observer to be an object.');
          }

          function observeState() {
            if (observer.next) {
              observer.next(getState());
            }
          }

          observeState();
          var unsubscribe = outerSubscribe(observeState);
          return {
            unsubscribe: unsubscribe
          };
        }
      }, _ref[result] = function () {
        return this;
      }, _ref;
    } // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.


    dispatch({
      type: ActionTypes.INIT
    });
    return _ref2 = {
      dispatch: dispatch,
      subscribe: subscribe,
      getState: getState,
      replaceReducer: replaceReducer
    }, _ref2[result] = observable, _ref2;
  }

  function bindActionCreator(actionCreator, dispatch) {
    return function () {
      return dispatch(actionCreator.apply(this, arguments));
    };
  }
  /**
   * Turns an object whose values are action creators, into an object with the
   * same keys, but with every function wrapped into a `dispatch` call so they
   * may be invoked directly. This is just a convenience method, as you can call
   * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
   *
   * For convenience, you can also pass an action creator as the first argument,
   * and get a dispatch wrapped function in return.
   *
   * @param {Function|Object} actionCreators An object whose values are action
   * creator functions. One handy way to obtain it is to use ES6 `import * as`
   * syntax. You may also pass a single function.
   *
   * @param {Function} dispatch The `dispatch` function available on your Redux
   * store.
   *
   * @returns {Function|Object} The object mimicking the original object, but with
   * every action creator wrapped into the `dispatch` call. If you passed a
   * function as `actionCreators`, the return value will also be a single
   * function.
   */


  function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === 'function') {
      return bindActionCreator(actionCreators, dispatch);
    }

    if (typeof actionCreators !== 'object' || actionCreators === null) {
      throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
    }

    var boundActionCreators = {};

    for (var key in actionCreators) {
      var actionCreator = actionCreators[key];

      if (typeof actionCreator === 'function') {
        boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
      }
    }

    return boundActionCreators;
  }

  /**
   * @param {any} obj The object to inspect.
   * @returns {boolean} True if the argument appears to be a plain object.
   */

  function wrapMapToPropsConstant(getConstant) {
    return function initConstantSelector(dispatch, options) {
      var constant = getConstant(dispatch, options);

      function constantSelector() {
        return constant;
      }

      constantSelector.dependsOnOwnProps = false;
      return constantSelector;
    };
  } // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
  // to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
  // whether mapToProps needs to be invoked when props have changed.
  // 
  // A length of one signals that mapToProps does not depend on props from the parent component.
  // A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
  // therefore not reporting its length accurately..

  function getDependsOnOwnProps(mapToProps) {
    return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
  } // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
  // this function wraps mapToProps in a proxy function which does several things:
  // 
  //  * Detects whether the mapToProps function being called depends on props, which
  //    is used by selectorFactory to decide if it should reinvoke on props changes.
  //    
  //  * On first call, handles mapToProps if returns another function, and treats that
  //    new function as the true mapToProps for subsequent calls.
  //    
  //  * On first call, verifies the first result is a plain object, in order to warn
  //    the developer that their mapToProps function is not returning a valid result.
  //    

  function wrapMapToPropsFunc(mapToProps, methodName) {
    return function initProxySelector(dispatch, _ref) {
      var displayName = _ref.displayName;

      var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
        return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
      }; // allow detectFactoryAndVerify to get ownProps


      proxy.dependsOnOwnProps = true;

      proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
        proxy.mapToProps = mapToProps;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
        var props = proxy(stateOrDispatch, ownProps);

        if (typeof props === 'function') {
          proxy.mapToProps = props;
          proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
          props = proxy(stateOrDispatch, ownProps);
        }
        return props;
      };

      return proxy;
    };
  }

  function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
    return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
  }
  function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
    return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
      return {
        dispatch: dispatch
      };
    }) : undefined;
  }
  function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
    return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
      return bindActionCreators(mapDispatchToProps, dispatch);
    }) : undefined;
  }
  var defaultMapDispatchToPropsFactories = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

  function whenMapStateToPropsIsFunction(mapStateToProps) {
    return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
  }
  function whenMapStateToPropsIsMissing(mapStateToProps) {
    return !mapStateToProps ? wrapMapToPropsConstant(function () {
      return {};
    }) : undefined;
  }
  var defaultMapStateToPropsFactories = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

  function defaultMergeProps(stateProps, dispatchProps, ownProps) {
    return _extends$1({}, ownProps, stateProps, dispatchProps);
  }
  function wrapMergePropsFunc(mergeProps) {
    return function initMergePropsProxy(dispatch, _ref) {
      var displayName = _ref.displayName,
          pure = _ref.pure,
          areMergedPropsEqual = _ref.areMergedPropsEqual;
      var hasRunOnce = false;
      var mergedProps;
      return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
        var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

        if (hasRunOnce) {
          if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
        } else {
          hasRunOnce = true;
          mergedProps = nextMergedProps;
        }

        return mergedProps;
      };
    };
  }
  function whenMergePropsIsFunction(mergeProps) {
    return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
  }
  function whenMergePropsIsOmitted(mergeProps) {
    return !mergeProps ? function () {
      return defaultMergeProps;
    } : undefined;
  }
  var defaultMergePropsFactories = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

  function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
    return function impureFinalPropsSelector(state, ownProps) {
      return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
    };
  }
  function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
    var areStatesEqual = _ref.areStatesEqual,
        areOwnPropsEqual = _ref.areOwnPropsEqual,
        areStatePropsEqual = _ref.areStatePropsEqual;
    var hasRunAtLeastOnce = false;
    var state;
    var ownProps;
    var stateProps;
    var dispatchProps;
    var mergedProps;

    function handleFirstCall(firstState, firstOwnProps) {
      state = firstState;
      ownProps = firstOwnProps;
      stateProps = mapStateToProps(state, ownProps);
      dispatchProps = mapDispatchToProps(dispatch, ownProps);
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      hasRunAtLeastOnce = true;
      return mergedProps;
    }

    function handleNewPropsAndNewState() {
      stateProps = mapStateToProps(state, ownProps);
      if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      return mergedProps;
    }

    function handleNewProps() {
      if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
      if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      return mergedProps;
    }

    function handleNewState() {
      var nextStateProps = mapStateToProps(state, ownProps);
      var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
      stateProps = nextStateProps;
      if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      return mergedProps;
    }

    function handleSubsequentCalls(nextState, nextOwnProps) {
      var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
      var stateChanged = !areStatesEqual(nextState, state);
      state = nextState;
      ownProps = nextOwnProps;
      if (propsChanged && stateChanged) return handleNewPropsAndNewState();
      if (propsChanged) return handleNewProps();
      if (stateChanged) return handleNewState();
      return mergedProps;
    }

    return function pureFinalPropsSelector(nextState, nextOwnProps) {
      return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
    };
  } // TODO: Add more comments
  // If pure is true, the selector returned by selectorFactory will memoize its results,
  // allowing connectAdvanced's shouldComponentUpdate to return false if final
  // props have not changed. If false, the selector will always return a new
  // object and shouldComponentUpdate will always return true.

  function finalPropsSelectorFactory(dispatch, _ref2) {
    var initMapStateToProps = _ref2.initMapStateToProps,
        initMapDispatchToProps = _ref2.initMapDispatchToProps,
        initMergeProps = _ref2.initMergeProps,
        options = _objectWithoutPropertiesLoose$1(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

    var mapStateToProps = initMapStateToProps(dispatch, options);
    var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
    var mergeProps = initMergeProps(dispatch, options);

    var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
    return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
  }

  /*
    connect is a facade over connectAdvanced. It turns its args into a compatible
    selectorFactory, which has the signature:

      (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
    
    connect passes its args to connectAdvanced as options, which will in turn pass them to
    selectorFactory each time a Connect component instance is instantiated or hot reloaded.

    selectorFactory returns a final props selector from its mapStateToProps,
    mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
    mergePropsFactories, and pure args.

    The resulting final props selector is called by the Connect component instance whenever
    it receives new props or store state.
   */

  function match(arg, factories, name) {
    for (var i = factories.length - 1; i >= 0; i--) {
      var result = factories[i](arg);
      if (result) return result;
    }

    return function (dispatch, options) {
      throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
    };
  }

  function strictEqual(a, b) {
    return a === b;
  } // createConnect with default args builds the 'official' connect behavior. Calling it with
  // different options opens up some testing and extensibility scenarios


  function createConnect(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$connectHOC = _ref.connectHOC,
        connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
        _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
        mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? defaultMapStateToPropsFactories : _ref$mapStateToPropsF,
        _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
        mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? defaultMapDispatchToPropsFactories : _ref$mapDispatchToPro,
        _ref$mergePropsFactor = _ref.mergePropsFactories,
        mergePropsFactories = _ref$mergePropsFactor === void 0 ? defaultMergePropsFactories : _ref$mergePropsFactor,
        _ref$selectorFactory = _ref.selectorFactory,
        selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;

    return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
      if (_ref2 === void 0) {
        _ref2 = {};
      }

      var _ref3 = _ref2,
          _ref3$pure = _ref3.pure,
          pure = _ref3$pure === void 0 ? true : _ref3$pure,
          _ref3$areStatesEqual = _ref3.areStatesEqual,
          areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
          _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
          areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
          _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
          areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
          _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
          areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
          extraOptions = _objectWithoutPropertiesLoose$1(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

      var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
      var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
      var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
      return connectHOC(selectorFactory, _extends$1({
        // used in error messages
        methodName: 'connect',
        // used to compute Connect's displayName from the wrapped component's displayName.
        getDisplayName: function getDisplayName(name) {
          return "Connect(" + name + ")";
        },
        // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
        shouldHandleStateChanges: Boolean(mapStateToProps),
        // passed through to selectorFactory
        initMapStateToProps: initMapStateToProps,
        initMapDispatchToProps: initMapDispatchToProps,
        initMergeProps: initMergeProps,
        pure: pure,
        areStatesEqual: areStatesEqual,
        areOwnPropsEqual: areOwnPropsEqual,
        areStatePropsEqual: areStatePropsEqual,
        areMergedPropsEqual: areMergedPropsEqual
      }, extraOptions));
    };
  }
  var connect = createConnect();

  /**
  * Copyright 2018, Plotly, Inc.
  * All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
  var storeKey = 'msaStore';

  /**
  * Copyright 2018, Plotly, Inc.
  * All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
  /**
   * Injects the msaStore into a component.
   *
   * @param {Object} mapStateToProps - plain object of store state to be mapped into the component
   * @param {Object} mapDispatchToProps - methods to be mapped into the component
   * @param {Object} mergeProps - custom merge method for (stateProps, dispatchProps, ownProps)
   * @param {Object} options - further customization for the connector
   *
   * See also: https://react-redux.js.org/docs/api
   */

  function msaConnect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    options.storeKey = storeKey;
    return connect(mapStateToProps, mapDispatchToProps, mergeProps, options);
  }

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root$1 = freeGlobal || freeSelf || Function('return this')();

  /** Built-in value references. */
  var Symbol$1 = root$1.Symbol;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag$1 && symToStringTag$1 in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && baseGetTag(value) == symbolTag);
  }

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /**
   * The base implementation of `_.toNumber` which doesn't ensure correct
   * conversions of binary, hexadecimal, or octal string values.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   */
  function baseToNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    return +value;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap(value, baseToString) + '';
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }

  /**
   * Creates a function that performs a mathematical operation on two values.
   *
   * @private
   * @param {Function} operator The function to perform the operation.
   * @param {number} [defaultValue] The value used for `undefined` arguments.
   * @returns {Function} Returns the new mathematical operation function.
   */
  function createMathOperation(operator, defaultValue) {
    return function(value, other) {
      var result;
      if (value === undefined && other === undefined) {
        return defaultValue;
      }
      if (value !== undefined) {
        result = value;
      }
      if (other !== undefined) {
        if (result === undefined) {
          return other;
        }
        if (typeof value == 'string' || typeof other == 'string') {
          value = baseToString(value);
          other = baseToString(other);
        } else {
          value = baseToNumber(value);
          other = baseToNumber(other);
        }
        result = operator(value, other);
      }
      return result;
    };
  }

  /**
   * Adds two numbers.
   *
   * @static
   * @memberOf _
   * @since 3.4.0
   * @category Math
   * @param {number} augend The first number in an addition.
   * @param {number} addend The second number in an addition.
   * @returns {number} Returns the total.
   * @example
   *
   * _.add(6, 4);
   * // => 10
   */
  var add = createMathOperation(function(augend, addend) {
    return augend + addend;
  }, 0);

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /** Used as references for various `Number` constants. */
  var NAN$1 = 0 / 0;

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN$1;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN$1 : +value);
  }

  /** Used as references for various `Number` constants. */
  var INFINITY$1 = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308;

  /**
   * Converts `value` to a finite number.
   *
   * @static
   * @memberOf _
   * @since 4.12.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted number.
   * @example
   *
   * _.toFinite(3.2);
   * // => 3.2
   *
   * _.toFinite(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toFinite(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toFinite('3.2');
   * // => 3.2
   */
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY$1 || value === -INFINITY$1) {
      var sign = (value < 0 ? -1 : 1);
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }

  /**
   * Converts `value` to an integer.
   *
   * **Note:** This method is loosely based on
   * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toInteger(3.2);
   * // => 3
   *
   * _.toInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toInteger(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toInteger('3.2');
   * // => 3
   */
  function toInteger(value) {
    var result = toFinite(value),
        remainder = result % 1;

    return result === result ? (remainder ? result - remainder : result) : 0;
  }

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * The opposite of `_.before`; this method creates a function that invokes
   * `func` once it's called `n` or more times.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {number} n The number of calls before `func` is invoked.
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new restricted function.
   * @example
   *
   * var saves = ['profile', 'settings'];
   *
   * var done = _.after(saves.length, function() {
   *   console.log('done saving!');
   * });
   *
   * _.forEach(saves, function(type) {
   *   asyncSave({ 'type': type, 'complete': done });
   * });
   * // => Logs 'done saving!' after the two async saves have completed.
   */
  function after(n, func) {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    n = toInteger(n);
    return function() {
      if (--n < 1) {
        return func.apply(this, arguments);
      }
    };
  }

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root$1['__core-js_shared__'];

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  /** Used for built-in method references. */
  var funcProto = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype,
      objectProto$2 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /* Built-in method references that are verified to be native. */
  var WeakMap$1 = getNative(root$1, 'WeakMap');

  /** Used to store function metadata. */
  var metaMap = WeakMap$1 && new WeakMap$1;

  /**
   * The base implementation of `setData` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to associate metadata with.
   * @param {*} data The metadata.
   * @returns {Function} Returns `func`.
   */
  var baseSetData = !metaMap ? identity : function(func, data) {
    metaMap.set(func, data);
    return func;
  };

  /** Built-in value references. */
  var objectCreate = Object.create;

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function() {
    function object() {}
    return function(proto) {
      if (!isObject(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object;
      object.prototype = undefined;
      return result;
    };
  }());

  /**
   * Creates a function that produces an instance of `Ctor` regardless of
   * whether it was invoked as part of a `new` expression or by `call` or `apply`.
   *
   * @private
   * @param {Function} Ctor The constructor to wrap.
   * @returns {Function} Returns the new wrapped function.
   */
  function createCtor(Ctor) {
    return function() {
      // Use a `switch` statement to work with class constructors. See
      // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
      // for more details.
      var args = arguments;
      switch (args.length) {
        case 0: return new Ctor;
        case 1: return new Ctor(args[0]);
        case 2: return new Ctor(args[0], args[1]);
        case 3: return new Ctor(args[0], args[1], args[2]);
        case 4: return new Ctor(args[0], args[1], args[2], args[3]);
        case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
        case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
        case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
      }
      var thisBinding = baseCreate(Ctor.prototype),
          result = Ctor.apply(thisBinding, args);

      // Mimic the constructor's `return` behavior.
      // See https://es5.github.io/#x13.2.2 for more details.
      return isObject(result) ? result : thisBinding;
    };
  }

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1;

  /**
   * Creates a function that wraps `func` to invoke it with the optional `this`
   * binding of `thisArg`.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createBind(func, bitmask, thisArg) {
    var isBind = bitmask & WRAP_BIND_FLAG,
        Ctor = createCtor(func);

    function wrapper() {
      var fn = (this && this !== root$1 && this instanceof wrapper) ? Ctor : func;
      return fn.apply(isBind ? thisArg : this, arguments);
    }
    return wrapper;
  }

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;

  /**
   * Creates an array that is the composition of partially applied arguments,
   * placeholders, and provided arguments into a single array of arguments.
   *
   * @private
   * @param {Array} args The provided arguments.
   * @param {Array} partials The arguments to prepend to those provided.
   * @param {Array} holders The `partials` placeholder indexes.
   * @params {boolean} [isCurried] Specify composing for a curried function.
   * @returns {Array} Returns the new array of composed arguments.
   */
  function composeArgs(args, partials, holders, isCurried) {
    var argsIndex = -1,
        argsLength = args.length,
        holdersLength = holders.length,
        leftIndex = -1,
        leftLength = partials.length,
        rangeLength = nativeMax(argsLength - holdersLength, 0),
        result = Array(leftLength + rangeLength),
        isUncurried = !isCurried;

    while (++leftIndex < leftLength) {
      result[leftIndex] = partials[leftIndex];
    }
    while (++argsIndex < holdersLength) {
      if (isUncurried || argsIndex < argsLength) {
        result[holders[argsIndex]] = args[argsIndex];
      }
    }
    while (rangeLength--) {
      result[leftIndex++] = args[argsIndex++];
    }
    return result;
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$1 = Math.max;

  /**
   * This function is like `composeArgs` except that the arguments composition
   * is tailored for `_.partialRight`.
   *
   * @private
   * @param {Array} args The provided arguments.
   * @param {Array} partials The arguments to append to those provided.
   * @param {Array} holders The `partials` placeholder indexes.
   * @params {boolean} [isCurried] Specify composing for a curried function.
   * @returns {Array} Returns the new array of composed arguments.
   */
  function composeArgsRight(args, partials, holders, isCurried) {
    var argsIndex = -1,
        argsLength = args.length,
        holdersIndex = -1,
        holdersLength = holders.length,
        rightIndex = -1,
        rightLength = partials.length,
        rangeLength = nativeMax$1(argsLength - holdersLength, 0),
        result = Array(rangeLength + rightLength),
        isUncurried = !isCurried;

    while (++argsIndex < rangeLength) {
      result[argsIndex] = args[argsIndex];
    }
    var offset = argsIndex;
    while (++rightIndex < rightLength) {
      result[offset + rightIndex] = partials[rightIndex];
    }
    while (++holdersIndex < holdersLength) {
      if (isUncurried || argsIndex < argsLength) {
        result[offset + holders[holdersIndex]] = args[argsIndex++];
      }
    }
    return result;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * The function whose prototype chain sequence wrappers inherit from.
   *
   * @private
   */
  function baseLodash() {
    // No operation performed.
  }

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295;

  /**
   * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
   *
   * @private
   * @constructor
   * @param {*} value The value to wrap.
   */
  function LazyWrapper(value) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__dir__ = 1;
    this.__filtered__ = false;
    this.__iteratees__ = [];
    this.__takeCount__ = MAX_ARRAY_LENGTH;
    this.__views__ = [];
  }

  // Ensure `LazyWrapper` is an instance of `baseLodash`.
  LazyWrapper.prototype = baseCreate(baseLodash.prototype);
  LazyWrapper.prototype.constructor = LazyWrapper;

  /**
   * This method returns `undefined`.
   *
   * @static
   * @memberOf _
   * @since 2.3.0
   * @category Util
   * @example
   *
   * _.times(2, _.noop);
   * // => [undefined, undefined]
   */
  function noop$1() {
    // No operation performed.
  }

  /**
   * Gets metadata for `func`.
   *
   * @private
   * @param {Function} func The function to query.
   * @returns {*} Returns the metadata for `func`.
   */
  var getData = !metaMap ? noop$1 : function(func) {
    return metaMap.get(func);
  };

  /** Used to lookup unminified function names. */
  var realNames = {};

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

  /**
   * Gets the name of `func`.
   *
   * @private
   * @param {Function} func The function to query.
   * @returns {string} Returns the function name.
   */
  function getFuncName(func) {
    var result = (func.name + ''),
        array = realNames[result],
        length = hasOwnProperty$2.call(realNames, result) ? array.length : 0;

    while (length--) {
      var data = array[length],
          otherFunc = data.func;
      if (otherFunc == null || otherFunc == func) {
        return data.name;
      }
    }
    return result;
  }

  /**
   * The base constructor for creating `lodash` wrapper objects.
   *
   * @private
   * @param {*} value The value to wrap.
   * @param {boolean} [chainAll] Enable explicit method chain sequences.
   */
  function LodashWrapper(value, chainAll) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__chain__ = !!chainAll;
    this.__index__ = 0;
    this.__values__ = undefined;
  }

  LodashWrapper.prototype = baseCreate(baseLodash.prototype);
  LodashWrapper.prototype.constructor = LodashWrapper;

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  /**
   * Creates a clone of `wrapper`.
   *
   * @private
   * @param {Object} wrapper The wrapper to clone.
   * @returns {Object} Returns the cloned wrapper.
   */
  function wrapperClone(wrapper) {
    if (wrapper instanceof LazyWrapper) {
      return wrapper.clone();
    }
    var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
    result.__actions__ = copyArray(wrapper.__actions__);
    result.__index__  = wrapper.__index__;
    result.__values__ = wrapper.__values__;
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  /**
   * Creates a `lodash` object which wraps `value` to enable implicit method
   * chain sequences. Methods that operate on and return arrays, collections,
   * and functions can be chained together. Methods that retrieve a single value
   * or may return a primitive value will automatically end the chain sequence
   * and return the unwrapped value. Otherwise, the value must be unwrapped
   * with `_#value`.
   *
   * Explicit chain sequences, which must be unwrapped with `_#value`, may be
   * enabled using `_.chain`.
   *
   * The execution of chained methods is lazy, that is, it's deferred until
   * `_#value` is implicitly or explicitly called.
   *
   * Lazy evaluation allows several methods to support shortcut fusion.
   * Shortcut fusion is an optimization to merge iteratee calls; this avoids
   * the creation of intermediate arrays and can greatly reduce the number of
   * iteratee executions. Sections of a chain sequence qualify for shortcut
   * fusion if the section is applied to an array and iteratees accept only
   * one argument. The heuristic for whether a section qualifies for shortcut
   * fusion is subject to change.
   *
   * Chaining is supported in custom builds as long as the `_#value` method is
   * directly or indirectly included in the build.
   *
   * In addition to lodash methods, wrappers have `Array` and `String` methods.
   *
   * The wrapper `Array` methods are:
   * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
   *
   * The wrapper `String` methods are:
   * `replace` and `split`
   *
   * The wrapper methods that support shortcut fusion are:
   * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
   * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
   * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
   *
   * The chainable wrapper methods are:
   * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
   * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
   * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
   * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
   * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
   * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
   * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
   * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
   * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
   * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
   * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
   * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
   * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
   * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
   * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
   * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
   * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
   * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
   * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
   * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
   * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
   * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
   * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
   * `zipObject`, `zipObjectDeep`, and `zipWith`
   *
   * The wrapper methods that are **not** chainable by default are:
   * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
   * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
   * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
   * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
   * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
   * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
   * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
   * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
   * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
   * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
   * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
   * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
   * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
   * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
   * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
   * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
   * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
   * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
   * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
   * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
   * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
   * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
   * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
   * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
   * `upperFirst`, `value`, and `words`
   *
   * @name _
   * @constructor
   * @category Seq
   * @param {*} value The value to wrap in a `lodash` instance.
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * var wrapped = _([1, 2, 3]);
   *
   * // Returns an unwrapped value.
   * wrapped.reduce(_.add);
   * // => 6
   *
   * // Returns a wrapped value.
   * var squares = wrapped.map(square);
   *
   * _.isArray(squares);
   * // => false
   *
   * _.isArray(squares.value());
   * // => true
   */
  function lodash(value) {
    if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
      if (value instanceof LodashWrapper) {
        return value;
      }
      if (hasOwnProperty$3.call(value, '__wrapped__')) {
        return wrapperClone(value);
      }
    }
    return new LodashWrapper(value);
  }

  // Ensure wrappers are instances of `baseLodash`.
  lodash.prototype = baseLodash.prototype;
  lodash.prototype.constructor = lodash;

  /**
   * Checks if `func` has a lazy counterpart.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
   *  else `false`.
   */
  function isLaziable(func) {
    var funcName = getFuncName(func),
        other = lodash[funcName];

    if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
      return false;
    }
    if (func === other) {
      return true;
    }
    var data = getData(other);
    return !!data && func === data[0];
  }

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeNow = Date.now;

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut(func) {
    var count = 0,
        lastCalled = 0;

    return function() {
      var stamp = nativeNow(),
          remaining = HOT_SPAN - (stamp - lastCalled);

      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }

  /**
   * Sets metadata for `func`.
   *
   * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
   * period of time, it will trip its breaker and transition to an identity
   * function to avoid garbage collection pauses in V8. See
   * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
   * for more details.
   *
   * @private
   * @param {Function} func The function to associate metadata with.
   * @param {*} data The metadata.
   * @returns {Function} Returns `func`.
   */
  var setData = shortOut(baseSetData);

  /** Used to match wrap detail comments. */
  var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /**
   * Extracts wrapper details from the `source` body comment.
   *
   * @private
   * @param {string} source The source to inspect.
   * @returns {Array} Returns the wrapper details.
   */
  function getWrapDetails(source) {
    var match = source.match(reWrapDetails);
    return match ? match[1].split(reSplitDetails) : [];
  }

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

  /**
   * Inserts wrapper `details` in a comment at the top of the `source` body.
   *
   * @private
   * @param {string} source The source to modify.
   * @returns {Array} details The details to insert.
   * @returns {string} Returns the modified source.
   */
  function insertWrapDetails(source, details) {
    var length = details.length;
    if (!length) {
      return source;
    }
    var lastIndex = length - 1;
    details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
    details = details.join(length > 2 ? ', ' : ' ');
    return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
  }

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */
  function constant(value) {
    return function() {
      return value;
    };
  }

  var defineProperty$1 = (function() {
    try {
      var func = getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }());

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString = !defineProperty$1 ? identity : function(func, string) {
    return defineProperty$1(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': constant(string),
      'writable': true
    });
  };

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString = shortOut(baseSetToString);

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG$1 = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG$1],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /**
   * Updates wrapper `details` based on `bitmask` flags.
   *
   * @private
   * @returns {Array} details The details to modify.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @returns {Array} Returns `details`.
   */
  function updateWrapDetails(details, bitmask) {
    arrayEach(wrapFlags, function(pair) {
      var value = '_.' + pair[0];
      if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
        details.push(value);
      }
    });
    return details.sort();
  }

  /**
   * Sets the `toString` method of `wrapper` to mimic the source of `reference`
   * with wrapper details in a comment at the top of the source body.
   *
   * @private
   * @param {Function} wrapper The function to modify.
   * @param {Function} reference The reference function.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @returns {Function} Returns `wrapper`.
   */
  function setWrapToString(wrapper, reference, bitmask) {
    var source = (reference + '');
    return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
  }

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG$2 = 1,
      WRAP_BIND_KEY_FLAG$1 = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG$1 = 8,
      WRAP_PARTIAL_FLAG$1 = 32,
      WRAP_PARTIAL_RIGHT_FLAG$1 = 64;

  /**
   * Creates a function that wraps `func` to continue currying.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {Function} wrapFunc The function to create the `func` wrapper.
   * @param {*} placeholder The placeholder value.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {Array} [partials] The arguments to prepend to those provided to
   *  the new function.
   * @param {Array} [holders] The `partials` placeholder indexes.
   * @param {Array} [argPos] The argument positions of the new function.
   * @param {number} [ary] The arity cap of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
    var isCurry = bitmask & WRAP_CURRY_FLAG$1,
        newHolders = isCurry ? holders : undefined,
        newHoldersRight = isCurry ? undefined : holders,
        newPartials = isCurry ? partials : undefined,
        newPartialsRight = isCurry ? undefined : partials;

    bitmask |= (isCurry ? WRAP_PARTIAL_FLAG$1 : WRAP_PARTIAL_RIGHT_FLAG$1);
    bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG$1 : WRAP_PARTIAL_FLAG$1);

    if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
      bitmask &= ~(WRAP_BIND_FLAG$2 | WRAP_BIND_KEY_FLAG$1);
    }
    var newData = [
      func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
      newHoldersRight, argPos, ary, arity
    ];

    var result = wrapFunc.apply(undefined, newData);
    if (isLaziable(func)) {
      setData(result, newData);
    }
    result.placeholder = placeholder;
    return setWrapToString(result, func, bitmask);
  }

  /**
   * Gets the argument placeholder value for `func`.
   *
   * @private
   * @param {Function} func The function to inspect.
   * @returns {*} Returns the placeholder value.
   */
  function getHolder(func) {
    var object = func;
    return object.placeholder;
  }

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;

    return !!length &&
      (type == 'number' ||
        (type != 'symbol' && reIsUint.test(value))) &&
          (value > -1 && value % 1 == 0 && value < length);
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMin = Math.min;

  /**
   * Reorder `array` according to the specified indexes where the element at
   * the first index is assigned as the first element, the element at
   * the second index is assigned as the second element, and so on.
   *
   * @private
   * @param {Array} array The array to reorder.
   * @param {Array} indexes The arranged array indexes.
   * @returns {Array} Returns `array`.
   */
  function reorder(array, indexes) {
    var arrLength = array.length,
        length = nativeMin(indexes.length, arrLength),
        oldArray = copyArray(array);

    while (length--) {
      var index = indexes[length];
      array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
    }
    return array;
  }

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG$3 = 1,
      WRAP_BIND_KEY_FLAG$2 = 2,
      WRAP_CURRY_FLAG$2 = 8,
      WRAP_CURRY_RIGHT_FLAG$1 = 16,
      WRAP_ARY_FLAG$1 = 128,
      WRAP_FLIP_FLAG$1 = 512;

  /**
   * Creates a function that wraps `func` to invoke it with optional `this`
   * binding of `thisArg`, partial application, and currying.
   *
   * @private
   * @param {Function|string} func The function or method name to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {Array} [partials] The arguments to prepend to those provided to
   *  the new function.
   * @param {Array} [holders] The `partials` placeholder indexes.
   * @param {Array} [partialsRight] The arguments to append to those provided
   *  to the new function.
   * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
   * @param {Array} [argPos] The argument positions of the new function.
   * @param {number} [ary] The arity cap of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
    var isAry = bitmask & WRAP_ARY_FLAG$1,
        isBind = bitmask & WRAP_BIND_FLAG$3,
        isBindKey = bitmask & WRAP_BIND_KEY_FLAG$2,
        isCurried = bitmask & (WRAP_CURRY_FLAG$2 | WRAP_CURRY_RIGHT_FLAG$1),
        isFlip = bitmask & WRAP_FLIP_FLAG$1,
        Ctor = isBindKey ? undefined : createCtor(func);

    function wrapper() {
      var length = arguments.length,
          args = Array(length),
          index = length;

      while (index--) {
        args[index] = arguments[index];
      }
      if (isCurried) {
        var placeholder = getHolder(wrapper),
            holdersCount = countHolders(args, placeholder);
      }
      if (partials) {
        args = composeArgs(args, partials, holders, isCurried);
      }
      if (partialsRight) {
        args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
      }
      length -= holdersCount;
      if (isCurried && length < arity) {
        var newHolders = replaceHolders(args, placeholder);
        return createRecurry(
          func, bitmask, createHybrid, wrapper.placeholder, thisArg,
          args, newHolders, argPos, ary, arity - length
        );
      }
      var thisBinding = isBind ? thisArg : this,
          fn = isBindKey ? thisBinding[func] : func;

      length = args.length;
      if (argPos) {
        args = reorder(args, argPos);
      } else if (isFlip && length > 1) {
        args.reverse();
      }
      if (isAry && ary < length) {
        args.length = ary;
      }
      if (this && this !== root$1 && this instanceof wrapper) {
        fn = Ctor || createCtor(fn);
      }
      return fn.apply(thisBinding, args);
    }
    return wrapper;
  }

  /**
   * Creates a function that wraps `func` to enable currying.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {number} arity The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createCurry(func, bitmask, arity) {
    var Ctor = createCtor(func);

    function wrapper() {
      var length = arguments.length,
          args = Array(length),
          index = length,
          placeholder = getHolder(wrapper);

      while (index--) {
        args[index] = arguments[index];
      }
      var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
        ? []
        : replaceHolders(args, placeholder);

      length -= holders.length;
      if (length < arity) {
        return createRecurry(
          func, bitmask, createHybrid, wrapper.placeholder, undefined,
          args, holders, undefined, undefined, arity - length);
      }
      var fn = (this && this !== root$1 && this instanceof wrapper) ? Ctor : func;
      return apply(fn, this, args);
    }
    return wrapper;
  }

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG$4 = 1;

  /**
   * Creates a function that wraps `func` to invoke it with the `this` binding
   * of `thisArg` and `partials` prepended to the arguments it receives.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} partials The arguments to prepend to those provided to
   *  the new function.
   * @returns {Function} Returns the new wrapped function.
   */
  function createPartial(func, bitmask, thisArg, partials) {
    var isBind = bitmask & WRAP_BIND_FLAG$4,
        Ctor = createCtor(func);

    function wrapper() {
      var argsIndex = -1,
          argsLength = arguments.length,
          leftIndex = -1,
          leftLength = partials.length,
          args = Array(leftLength + argsLength),
          fn = (this && this !== root$1 && this instanceof wrapper) ? Ctor : func;

      while (++leftIndex < leftLength) {
        args[leftIndex] = partials[leftIndex];
      }
      while (argsLength--) {
        args[leftIndex++] = arguments[++argsIndex];
      }
      return apply(fn, isBind ? thisArg : this, args);
    }
    return wrapper;
  }

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER$1 = '__lodash_placeholder__';

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG$5 = 1,
      WRAP_BIND_KEY_FLAG$3 = 2,
      WRAP_CURRY_BOUND_FLAG$1 = 4,
      WRAP_CURRY_FLAG$3 = 8,
      WRAP_ARY_FLAG$2 = 128,
      WRAP_REARG_FLAG$1 = 256;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMin$1 = Math.min;

  /**
   * Merges the function metadata of `source` into `data`.
   *
   * Merging metadata reduces the number of wrappers used to invoke a function.
   * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
   * may be applied regardless of execution order. Methods like `_.ary` and
   * `_.rearg` modify function arguments, making the order in which they are
   * executed important, preventing the merging of metadata. However, we make
   * an exception for a safe combined case where curried functions have `_.ary`
   * and or `_.rearg` applied.
   *
   * @private
   * @param {Array} data The destination metadata.
   * @param {Array} source The source metadata.
   * @returns {Array} Returns `data`.
   */
  function mergeData(data, source) {
    var bitmask = data[1],
        srcBitmask = source[1],
        newBitmask = bitmask | srcBitmask,
        isCommon = newBitmask < (WRAP_BIND_FLAG$5 | WRAP_BIND_KEY_FLAG$3 | WRAP_ARY_FLAG$2);

    var isCombo =
      ((srcBitmask == WRAP_ARY_FLAG$2) && (bitmask == WRAP_CURRY_FLAG$3)) ||
      ((srcBitmask == WRAP_ARY_FLAG$2) && (bitmask == WRAP_REARG_FLAG$1) && (data[7].length <= source[8])) ||
      ((srcBitmask == (WRAP_ARY_FLAG$2 | WRAP_REARG_FLAG$1)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG$3));

    // Exit early if metadata can't be merged.
    if (!(isCommon || isCombo)) {
      return data;
    }
    // Use source `thisArg` if available.
    if (srcBitmask & WRAP_BIND_FLAG$5) {
      data[2] = source[2];
      // Set when currying a bound function.
      newBitmask |= bitmask & WRAP_BIND_FLAG$5 ? 0 : WRAP_CURRY_BOUND_FLAG$1;
    }
    // Compose partial arguments.
    var value = source[3];
    if (value) {
      var partials = data[3];
      data[3] = partials ? composeArgs(partials, value, source[4]) : value;
      data[4] = partials ? replaceHolders(data[3], PLACEHOLDER$1) : source[4];
    }
    // Compose partial right arguments.
    value = source[5];
    if (value) {
      partials = data[5];
      data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
      data[6] = partials ? replaceHolders(data[5], PLACEHOLDER$1) : source[6];
    }
    // Use source `argPos` if available.
    value = source[7];
    if (value) {
      data[7] = value;
    }
    // Use source `ary` if it's smaller.
    if (srcBitmask & WRAP_ARY_FLAG$2) {
      data[8] = data[8] == null ? source[8] : nativeMin$1(data[8], source[8]);
    }
    // Use source `arity` if one is not provided.
    if (data[9] == null) {
      data[9] = source[9];
    }
    // Use source `func` and merge bitmasks.
    data[0] = source[0];
    data[1] = newBitmask;

    return data;
  }

  /** Error message constants. */
  var FUNC_ERROR_TEXT$1 = 'Expected a function';

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG$6 = 1,
      WRAP_BIND_KEY_FLAG$4 = 2,
      WRAP_CURRY_FLAG$4 = 8,
      WRAP_CURRY_RIGHT_FLAG$2 = 16,
      WRAP_PARTIAL_FLAG$2 = 32,
      WRAP_PARTIAL_RIGHT_FLAG$2 = 64;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$2 = Math.max;

  /**
   * Creates a function that either curries or invokes `func` with optional
   * `this` binding and partially applied arguments.
   *
   * @private
   * @param {Function|string} func The function or method name to wrap.
   * @param {number} bitmask The bitmask flags.
   *    1 - `_.bind`
   *    2 - `_.bindKey`
   *    4 - `_.curry` or `_.curryRight` of a bound function
   *    8 - `_.curry`
   *   16 - `_.curryRight`
   *   32 - `_.partial`
   *   64 - `_.partialRight`
   *  128 - `_.rearg`
   *  256 - `_.ary`
   *  512 - `_.flip`
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {Array} [partials] The arguments to be partially applied.
   * @param {Array} [holders] The `partials` placeholder indexes.
   * @param {Array} [argPos] The argument positions of the new function.
   * @param {number} [ary] The arity cap of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
    var isBindKey = bitmask & WRAP_BIND_KEY_FLAG$4;
    if (!isBindKey && typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    var length = partials ? partials.length : 0;
    if (!length) {
      bitmask &= ~(WRAP_PARTIAL_FLAG$2 | WRAP_PARTIAL_RIGHT_FLAG$2);
      partials = holders = undefined;
    }
    ary = ary === undefined ? ary : nativeMax$2(toInteger(ary), 0);
    arity = arity === undefined ? arity : toInteger(arity);
    length -= holders ? holders.length : 0;

    if (bitmask & WRAP_PARTIAL_RIGHT_FLAG$2) {
      var partialsRight = partials,
          holdersRight = holders;

      partials = holders = undefined;
    }
    var data = isBindKey ? undefined : getData(func);

    var newData = [
      func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
      argPos, ary, arity
    ];

    if (data) {
      mergeData(newData, data);
    }
    func = newData[0];
    bitmask = newData[1];
    thisArg = newData[2];
    partials = newData[3];
    holders = newData[4];
    arity = newData[9] = newData[9] === undefined
      ? (isBindKey ? 0 : func.length)
      : nativeMax$2(newData[9] - length, 0);

    if (!arity && bitmask & (WRAP_CURRY_FLAG$4 | WRAP_CURRY_RIGHT_FLAG$2)) {
      bitmask &= ~(WRAP_CURRY_FLAG$4 | WRAP_CURRY_RIGHT_FLAG$2);
    }
    if (!bitmask || bitmask == WRAP_BIND_FLAG$6) {
      var result = createBind(func, bitmask, thisArg);
    } else if (bitmask == WRAP_CURRY_FLAG$4 || bitmask == WRAP_CURRY_RIGHT_FLAG$2) {
      result = createCurry(func, bitmask, arity);
    } else if ((bitmask == WRAP_PARTIAL_FLAG$2 || bitmask == (WRAP_BIND_FLAG$6 | WRAP_PARTIAL_FLAG$2)) && !holders.length) {
      result = createPartial(func, bitmask, thisArg, partials);
    } else {
      result = createHybrid.apply(undefined, newData);
    }
    var setter = data ? baseSetData : setData;
    return setWrapToString(setter(result, newData), func, bitmask);
  }

  /** Used to compose bitmasks for function metadata. */
  var WRAP_ARY_FLAG$3 = 128;

  /**
   * Creates a function that invokes `func`, with up to `n` arguments,
   * ignoring any additional arguments.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Function
   * @param {Function} func The function to cap arguments for.
   * @param {number} [n=func.length] The arity cap.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Function} Returns the new capped function.
   * @example
   *
   * _.map(['6', '8', '10'], _.ary(parseInt, 1));
   * // => [6, 8, 10]
   */
  function ary(func, n, guard) {
    n = guard ? undefined : n;
    n = (func && n == null) ? func.length : n;
    return createWrap(func, WRAP_ARY_FLAG$3, undefined, undefined, undefined, undefined, n);
  }

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && defineProperty$1) {
      defineProperty$1(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$4.call(object, key) && eq(objValue, value)) ||
        (value === undefined && !(key in object))) {
      baseAssignValue(object, key, value);
    }
  }

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$3 = Math.max;

  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */
  function overRest(func, start, transform) {
    start = nativeMax$3(start === undefined ? (func.length - 1) : start, 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax$3(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + '');
  }

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
  }

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number'
          ? (isArrayLike(object) && isIndex(index, object.length))
          : (type == 'string' && index in object)
        ) {
      return eq(object[index], value);
    }
    return false;
  }

  /**
   * Creates a function like `_.assign`.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */
  function createAssigner(assigner) {
    return baseRest(function(object, sources) {
      var index = -1,
          length = sources.length,
          customizer = length > 1 ? sources[length - 1] : undefined,
          guard = length > 2 ? sources[2] : undefined;

      customizer = (assigner.length > 3 && typeof customizer == 'function')
        ? (length--, customizer)
        : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }

  /** Used for built-in method references. */
  var objectProto$6 = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$6;

    return value === proto;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }

  /** Used for built-in method references. */
  var objectProto$7 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$7.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty$5.call(value, 'callee') &&
      !propertyIsEnumerable.call(value, 'callee');
  };

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? root$1.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag$1 = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike(value) &&
      isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /** Detect free variable `exports`. */
  var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports$1 && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

  /** Used for built-in method references. */
  var objectProto$8 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value),
        isArg = !isArr && isArguments(value),
        isBuff = !isArr && !isArg && isBuffer(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$6.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             isIndex(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys = overArg(Object.keys, Object);

  /** Used for built-in method references. */
  var objectProto$9 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  /** Used for built-in method references. */
  var objectProto$a = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

  /**
   * Assigns own enumerable string keyed properties of source objects to the
   * destination object. Source objects are applied from left to right.
   * Subsequent sources overwrite property assignments of previous sources.
   *
   * **Note:** This method mutates `object` and is loosely based on
   * [`Object.assign`](https://mdn.io/Object/assign).
   *
   * @static
   * @memberOf _
   * @since 0.10.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.assignIn
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * function Bar() {
   *   this.c = 3;
   * }
   *
   * Foo.prototype.b = 2;
   * Bar.prototype.d = 4;
   *
   * _.assign({ 'a': 0 }, new Foo, new Bar);
   * // => { 'a': 1, 'c': 3 }
   */
  var assign = createAssigner(function(object, source) {
    if (isPrototype(source) || isArrayLike(source)) {
      copyObject(source, keys(source), object);
      return;
    }
    for (var key in source) {
      if (hasOwnProperty$8.call(source, key)) {
        assignValue(object, key, source[key]);
      }
    }
  });

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$b = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$9.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn$1(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  /**
   * This method is like `_.assign` except that it iterates over own and
   * inherited source properties.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @alias extend
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.assign
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * function Bar() {
   *   this.c = 3;
   * }
   *
   * Foo.prototype.b = 2;
   * Bar.prototype.d = 4;
   *
   * _.assignIn({ 'a': 0 }, new Foo, new Bar);
   * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
   */
  var assignIn = createAssigner(function(object, source) {
    copyObject(source, keysIn$1(source), object);
  });

  /**
   * This method is like `_.assignIn` except that it accepts `customizer`
   * which is invoked to produce the assigned values. If `customizer` returns
   * `undefined`, assignment is handled by the method instead. The `customizer`
   * is invoked with five arguments: (objValue, srcValue, key, object, source).
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @alias extendWith
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} sources The source objects.
   * @param {Function} [customizer] The function to customize assigned values.
   * @returns {Object} Returns `object`.
   * @see _.assignWith
   * @example
   *
   * function customizer(objValue, srcValue) {
   *   return _.isUndefined(objValue) ? srcValue : objValue;
   * }
   *
   * var defaults = _.partialRight(_.assignInWith, customizer);
   *
   * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
   * // => { 'a': 1, 'b': 2 }
   */
  var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
    copyObject(source, keysIn$1(source), object, customizer);
  });

  /**
   * This method is like `_.assign` except that it accepts `customizer`
   * which is invoked to produce the assigned values. If `customizer` returns
   * `undefined`, assignment is handled by the method instead. The `customizer`
   * is invoked with five arguments: (objValue, srcValue, key, object, source).
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} sources The source objects.
   * @param {Function} [customizer] The function to customize assigned values.
   * @returns {Object} Returns `object`.
   * @see _.assignInWith
   * @example
   *
   * function customizer(objValue, srcValue) {
   *   return _.isUndefined(objValue) ? srcValue : objValue;
   * }
   *
   * var defaults = _.partialRight(_.assignWith, customizer);
   *
   * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
   * // => { 'a': 1, 'b': 2 }
   */
  var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
    copyObject(source, keys(source), object, customizer);
  });

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey(value, object) {
    if (isArray(value)) {
      return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' ||
        value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
      (object != null && value in Object(object));
  }

  /* Built-in method references that are verified to be native. */
  var nativeCreate = getNative(Object, 'create');

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$c = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$a = objectProto$c.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty$a.call(data, key) ? data[key] : undefined;
  }

  /** Used for built-in method references. */
  var objectProto$d = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$b = objectProto$d.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? (data[key] !== undefined) : hasOwnProperty$b.call(data, key);
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
    return this;
  }

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /* Built-in method references that are verified to be native. */
  var Map$1 = getNative(root$1, 'Map');

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map$1 || ListCache),
      'string': new Hash
    };
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /** Error message constants. */
  var FUNC_ERROR_TEXT$2 = 'Expected a function';

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
      throw new TypeError(FUNC_ERROR_TEXT$2);
    }
    var memoized = function() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
  }

  // Expose `MapCache`.
  memoize.Cache = MapCache;

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped(func) {
    var result = memoize(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });

    var cache = result.cache;
    return result;
  }

  /** Used to match property names within property paths. */
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */) {
      result.push('');
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
  });

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString(value) {
    return value == null ? '' : baseToString(value);
  }

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value, object) {
    if (isArray(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath(toString(value));
  }

  /** Used as references for various `Number` constants. */
  var INFINITY$2 = 1 / 0;

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value;
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY$2) ? '-0' : result;
  }

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = castPath(path, object);

    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }
    return (index && index == length) ? object : undefined;
  }

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  /**
   * The base implementation of `_.at` without support for individual paths.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {string[]} paths The property paths to pick.
   * @returns {Array} Returns the picked elements.
   */
  function baseAt(object, paths) {
    var index = -1,
        length = paths.length,
        result = Array(length),
        skip = object == null;

    while (++index < length) {
      result[index] = skip ? undefined : get(object, paths[index]);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /** Built-in value references. */
  var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined;

  /**
   * Checks if `value` is a flattenable `arguments` object or array.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
   */
  function isFlattenable(value) {
    return isArray(value) || isArguments(value) ||
      !!(spreadableSymbol && value && value[spreadableSymbol]);
  }

  /**
   * The base implementation of `_.flatten` with support for restricting flattening.
   *
   * @private
   * @param {Array} array The array to flatten.
   * @param {number} depth The maximum recursion depth.
   * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
   * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
   * @param {Array} [result=[]] The initial result value.
   * @returns {Array} Returns the new flattened array.
   */
  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1,
        length = array.length;

    predicate || (predicate = isFlattenable);
    result || (result = []);

    while (++index < length) {
      var value = array[index];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }

  /**
   * Flattens `array` a single level deep.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flatten([1, [2, [3, [4]], 5]]);
   * // => [1, 2, [3, [4]], 5]
   */
  function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
  }

  /**
   * A specialized version of `baseRest` which flattens the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @returns {Function} Returns the new function.
   */
  function flatRest(func) {
    return setToString(overRest(func, undefined, flatten), func + '');
  }

  /**
   * Creates an array of values corresponding to `paths` of `object`.
   *
   * @static
   * @memberOf _
   * @since 1.0.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {...(string|string[])} [paths] The property paths to pick.
   * @returns {Array} Returns the picked values.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
   *
   * _.at(object, ['a[0].b.c', 'a[1]']);
   * // => [3, 4]
   */
  var at = flatRest(baseAt);

  /** Built-in value references. */
  var getPrototype = overArg(Object.getPrototypeOf, Object);

  /** `Object#toString` result references. */
  var objectTag$1 = '[object Object]';

  /** Used for built-in method references. */
  var funcProto$2 = Function.prototype,
      objectProto$e = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$2 = funcProto$2.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$c = objectProto$e.hasOwnProperty;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString$2.call(Object);

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject$2(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag$1) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty$c.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor &&
      funcToString$2.call(Ctor) == objectCtorString;
  }

  /** `Object#toString` result references. */
  var domExcTag = '[object DOMException]',
      errorTag$1 = '[object Error]';

  /**
   * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
   * `SyntaxError`, `TypeError`, or `URIError` object.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
   * @example
   *
   * _.isError(new Error);
   * // => true
   *
   * _.isError(Error);
   * // => false
   */
  function isError(value) {
    if (!isObjectLike(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == errorTag$1 || tag == domExcTag ||
      (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject$2(value));
  }

  /**
   * Attempts to invoke `func`, returning either the result or the caught error
   * object. Any additional arguments are provided to `func` when it's invoked.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Util
   * @param {Function} func The function to attempt.
   * @param {...*} [args] The arguments to invoke `func` with.
   * @returns {*} Returns the `func` result or error object.
   * @example
   *
   * // Avoid throwing errors for invalid selectors.
   * var elements = _.attempt(function(selector) {
   *   return document.querySelectorAll(selector);
   * }, '>_>');
   *
   * if (_.isError(elements)) {
   *   elements = [];
   * }
   */
  var attempt = baseRest(function(func, args) {
    try {
      return apply(func, undefined, args);
    } catch (e) {
      return isError(e) ? e : new Error(e);
    }
  });

  /** Error message constants. */
  var FUNC_ERROR_TEXT$3 = 'Expected a function';

  /**
   * Creates a function that invokes `func`, with the `this` binding and arguments
   * of the created function, while it's called less than `n` times. Subsequent
   * calls to the created function return the result of the last `func` invocation.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Function
   * @param {number} n The number of calls at which `func` is no longer invoked.
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new restricted function.
   * @example
   *
   * jQuery(element).on('click', _.before(5, addContactToList));
   * // => Allows adding up to 4 contacts to the list.
   */
  function before(n, func) {
    var result;
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$3);
    }
    n = toInteger(n);
    return function() {
      if (--n > 0) {
        result = func.apply(this, arguments);
      }
      if (n <= 1) {
        func = undefined;
      }
      return result;
    };
  }

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG$7 = 1,
      WRAP_PARTIAL_FLAG$3 = 32;

  /**
   * Creates a function that invokes `func` with the `this` binding of `thisArg`
   * and `partials` prepended to the arguments it receives.
   *
   * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
   * may be used as a placeholder for partially applied arguments.
   *
   * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
   * property of bound functions.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to bind.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {...*} [partials] The arguments to be partially applied.
   * @returns {Function} Returns the new bound function.
   * @example
   *
   * function greet(greeting, punctuation) {
   *   return greeting + ' ' + this.user + punctuation;
   * }
   *
   * var object = { 'user': 'fred' };
   *
   * var bound = _.bind(greet, object, 'hi');
   * bound('!');
   * // => 'hi fred!'
   *
   * // Bound with placeholders.
   * var bound = _.bind(greet, object, _, '!');
   * bound('hi');
   * // => 'hi fred!'
   */
  var bind = baseRest(function(func, thisArg, partials) {
    var bitmask = WRAP_BIND_FLAG$7;
    if (partials.length) {
      var holders = replaceHolders(partials, getHolder(bind));
      bitmask |= WRAP_PARTIAL_FLAG$3;
    }
    return createWrap(func, bitmask, thisArg, partials, holders);
  });

  // Assign default placeholders.
  bind.placeholder = {};

  /**
   * Binds methods of an object to the object itself, overwriting the existing
   * method.
   *
   * **Note:** This method doesn't set the "length" property of bound functions.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {Object} object The object to bind and assign the bound methods to.
   * @param {...(string|string[])} methodNames The object method names to bind.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var view = {
   *   'label': 'docs',
   *   'click': function() {
   *     console.log('clicked ' + this.label);
   *   }
   * };
   *
   * _.bindAll(view, ['click']);
   * jQuery(element).on('click', view.click);
   * // => Logs 'clicked docs' when clicked.
   */
  var bindAll = flatRest(function(object, methodNames) {
    arrayEach(methodNames, function(key) {
      key = toKey(key);
      baseAssignValue(object, key, bind(object[key], object));
    });
    return object;
  });

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG$8 = 1,
      WRAP_BIND_KEY_FLAG$5 = 2,
      WRAP_PARTIAL_FLAG$4 = 32;

  /**
   * Creates a function that invokes the method at `object[key]` with `partials`
   * prepended to the arguments it receives.
   *
   * This method differs from `_.bind` by allowing bound functions to reference
   * methods that may be redefined or don't yet exist. See
   * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
   * for more details.
   *
   * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
   * builds, may be used as a placeholder for partially applied arguments.
   *
   * @static
   * @memberOf _
   * @since 0.10.0
   * @category Function
   * @param {Object} object The object to invoke the method on.
   * @param {string} key The key of the method.
   * @param {...*} [partials] The arguments to be partially applied.
   * @returns {Function} Returns the new bound function.
   * @example
   *
   * var object = {
   *   'user': 'fred',
   *   'greet': function(greeting, punctuation) {
   *     return greeting + ' ' + this.user + punctuation;
   *   }
   * };
   *
   * var bound = _.bindKey(object, 'greet', 'hi');
   * bound('!');
   * // => 'hi fred!'
   *
   * object.greet = function(greeting, punctuation) {
   *   return greeting + 'ya ' + this.user + punctuation;
   * };
   *
   * bound('!');
   * // => 'hiya fred!'
   *
   * // Bound with placeholders.
   * var bound = _.bindKey(object, 'greet', _, '!');
   * bound('hi');
   * // => 'hiya fred!'
   */
  var bindKey = baseRest(function(object, key, partials) {
    var bitmask = WRAP_BIND_FLAG$8 | WRAP_BIND_KEY_FLAG$5;
    if (partials.length) {
      var holders = replaceHolders(partials, getHolder(bindKey));
      bitmask |= WRAP_PARTIAL_FLAG$4;
    }
    return createWrap(key, bitmask, object, partials, holders);
  });

  // Assign default placeholders.
  bindKey.placeholder = {};

  /**
   * The base implementation of `_.slice` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */
  function baseSlice(array, start, end) {
    var index = -1,
        length = array.length;

    if (start < 0) {
      start = -start > length ? 0 : (length + start);
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;

    var result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }

  /**
   * Casts `array` to a slice if it's needed.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {number} start The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the cast slice.
   */
  function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return (!start && end >= length) ? array : baseSlice(array, start, end);
  }

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsVarRange = '\\ufe0e\\ufe0f';

  /** Used to compose unicode capture groups. */
  var rsZWJ = '\\u200d';

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /** Used to compose unicode character classes. */
  var rsAstralRange$1 = '\\ud800-\\udfff',
      rsComboMarksRange$1 = '\\u0300-\\u036f',
      reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
      rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
      rsVarRange$1 = '\\ufe0e\\ufe0f';

  /** Used to compose unicode capture groups. */
  var rsAstral = '[' + rsAstralRange$1 + ']',
      rsCombo = '[' + rsComboRange$1 + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange$1 + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsZWJ$1 = '\\u200d';

  /** Used to compose unicode regexes. */
  var reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange$1 + ']?',
      rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Creates a function like `_.lowerFirst`.
   *
   * @private
   * @param {string} methodName The name of the `String` case method to use.
   * @returns {Function} Returns the new case function.
   */
  function createCaseFirst(methodName) {
    return function(string) {
      string = toString(string);

      var strSymbols = hasUnicode(string)
        ? stringToArray(string)
        : undefined;

      var chr = strSymbols
        ? strSymbols[0]
        : string.charAt(0);

      var trailing = strSymbols
        ? castSlice(strSymbols, 1).join('')
        : string.slice(1);

      return chr[methodName]() + trailing;
    };
  }

  /**
   * Converts the first character of `string` to upper case.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.upperFirst('fred');
   * // => 'Fred'
   *
   * _.upperFirst('FRED');
   * // => 'FRED'
   */
  var upperFirst = createCaseFirst('toUpperCase');

  /**
   * Converts the first character of `string` to upper case and the remaining
   * to lower case.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to capitalize.
   * @returns {string} Returns the capitalized string.
   * @example
   *
   * _.capitalize('FRED');
   * // => 'Fred'
   */
  function capitalize(string) {
    return upperFirst(toString(string).toLowerCase());
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to compose unicode character classes. */
  var rsComboMarksRange$2 = '\\u0300-\\u036f',
      reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
      rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2;

  /** Used to compose unicode capture groups. */
  var rsCombo$1 = '[' + rsComboRange$2 + ']';

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo$1, 'g');

  /**
   * Deburrs `string` by converting
   * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
   * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
   * letters to basic Latin letters and removing
   * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to deburr.
   * @returns {string} Returns the deburred string.
   * @example
   *
   * _.deburr('déjà vu');
   * // => 'deja vu'
   */
  function deburr(string) {
    string = toString(string);
    return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
  }

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /** Used to compose unicode character classes. */
  var rsAstralRange$2 = '\\ud800-\\udfff',
      rsComboMarksRange$3 = '\\u0300-\\u036f',
      reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
      rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange$2 = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo$2 = '[' + rsComboRange$3 + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange$2 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
      rsModifier$1 = '(?:' + rsCombo$2 + '|' + rsFitz$1 + ')',
      rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
      rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ$2 = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod$1 = rsModifier$1 + '?',
      rsOptVar$1 = '[' + rsVarRange$2 + ']?',
      rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
      rsEmoji = '(?:' + [rsDingbat, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsSeq$1;

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /**
   * Splits `string` into an array of its words.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to inspect.
   * @param {RegExp|string} [pattern] The pattern to match words.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the words of `string`.
   * @example
   *
   * _.words('fred, barney, & pebbles');
   * // => ['fred', 'barney', 'pebbles']
   *
   * _.words('fred, barney, & pebbles', /[^, ]+/g);
   * // => ['fred', 'barney', '&', 'pebbles']
   */
  function words(string, pattern, guard) {
    string = toString(string);
    pattern = guard ? undefined : pattern;

    if (pattern === undefined) {
      return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
    }
    return string.match(pattern) || [];
  }

  /** Used to compose unicode capture groups. */
  var rsApos$1 = "['\u2019]";

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos$1, 'g');

  /**
   * Creates a function like `_.camelCase`.
   *
   * @private
   * @param {Function} callback The function to combine each word.
   * @returns {Function} Returns the new compounder function.
   */
  function createCompounder(callback) {
    return function(string) {
      return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
    };
  }

  /**
   * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the camel cased string.
   * @example
   *
   * _.camelCase('Foo Bar');
   * // => 'fooBar'
   *
   * _.camelCase('--foo-bar--');
   * // => 'fooBar'
   *
   * _.camelCase('__FOO_BAR__');
   * // => 'fooBar'
   */
  var camelCase = createCompounder(function(result, word, index) {
    word = word.toLowerCase();
    return result + (index ? capitalize(word) : word);
  });

  /**
   * Casts `value` as an array if it's not one.
   *
   * @static
   * @memberOf _
   * @since 4.4.0
   * @category Lang
   * @param {*} value The value to inspect.
   * @returns {Array} Returns the cast array.
   * @example
   *
   * _.castArray(1);
   * // => [1]
   *
   * _.castArray({ 'a': 1 });
   * // => [{ 'a': 1 }]
   *
   * _.castArray('abc');
   * // => ['abc']
   *
   * _.castArray(null);
   * // => [null]
   *
   * _.castArray(undefined);
   * // => [undefined]
   *
   * _.castArray();
   * // => []
   *
   * var array = [1, 2, 3];
   * console.log(_.castArray(array) === array);
   * // => true
   */
  function castArray() {
    if (!arguments.length) {
      return [];
    }
    var value = arguments[0];
    return isArray(value) ? value : [value];
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsFinite = root$1.isFinite,
      nativeMin$2 = Math.min;

  /**
   * Creates a function like `_.round`.
   *
   * @private
   * @param {string} methodName The name of the `Math` method to use when rounding.
   * @returns {Function} Returns the new round function.
   */
  function createRound(methodName) {
    var func = Math[methodName];
    return function(number, precision) {
      number = toNumber(number);
      precision = precision == null ? 0 : nativeMin$2(toInteger(precision), 292);
      if (precision && nativeIsFinite(number)) {
        // Shift with exponential notation to avoid floating-point issues.
        // See [MDN](https://mdn.io/round#Examples) for more details.
        var pair = (toString(number) + 'e').split('e'),
            value = func(pair[0] + 'e' + (+pair[1] + precision));

        pair = (toString(value) + 'e').split('e');
        return +(pair[0] + 'e' + (+pair[1] - precision));
      }
      return func(number);
    };
  }

  /**
   * Computes `number` rounded up to `precision`.
   *
   * @static
   * @memberOf _
   * @since 3.10.0
   * @category Math
   * @param {number} number The number to round up.
   * @param {number} [precision=0] The precision to round up to.
   * @returns {number} Returns the rounded up number.
   * @example
   *
   * _.ceil(4.006);
   * // => 5
   *
   * _.ceil(6.004, 2);
   * // => 6.01
   *
   * _.ceil(6040, -2);
   * // => 6100
   */
  var ceil = createRound('ceil');

  /**
   * Creates a `lodash` wrapper instance that wraps `value` with explicit method
   * chain sequences enabled. The result of such sequences must be unwrapped
   * with `_#value`.
   *
   * @static
   * @memberOf _
   * @since 1.3.0
   * @category Seq
   * @param {*} value The value to wrap.
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'age': 36 },
   *   { 'user': 'fred',    'age': 40 },
   *   { 'user': 'pebbles', 'age': 1 }
   * ];
   *
   * var youngest = _
   *   .chain(users)
   *   .sortBy('age')
   *   .map(function(o) {
   *     return o.user + ' is ' + o.age;
   *   })
   *   .head()
   *   .value();
   * // => 'pebbles is 1'
   */
  function chain(value) {
    var result = lodash(value);
    result.__chain__ = true;
    return result;
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeCeil = Math.ceil,
      nativeMax$4 = Math.max;

  /**
   * Creates an array of elements split into groups the length of `size`.
   * If `array` can't be split evenly, the final chunk will be the remaining
   * elements.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to process.
   * @param {number} [size=1] The length of each chunk
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the new array of chunks.
   * @example
   *
   * _.chunk(['a', 'b', 'c', 'd'], 2);
   * // => [['a', 'b'], ['c', 'd']]
   *
   * _.chunk(['a', 'b', 'c', 'd'], 3);
   * // => [['a', 'b', 'c'], ['d']]
   */
  function chunk(array, size, guard) {
    if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
      size = 1;
    } else {
      size = nativeMax$4(toInteger(size), 0);
    }
    var length = array == null ? 0 : array.length;
    if (!length || size < 1) {
      return [];
    }
    var index = 0,
        resIndex = 0,
        result = Array(nativeCeil(length / size));

    while (index < length) {
      result[resIndex++] = baseSlice(array, index, (index += size));
    }
    return result;
  }

  /**
   * The base implementation of `_.clamp` which doesn't coerce arguments.
   *
   * @private
   * @param {number} number The number to clamp.
   * @param {number} [lower] The lower bound.
   * @param {number} upper The upper bound.
   * @returns {number} Returns the clamped number.
   */
  function baseClamp(number, lower, upper) {
    if (number === number) {
      if (upper !== undefined) {
        number = number <= upper ? number : upper;
      }
      if (lower !== undefined) {
        number = number >= lower ? number : lower;
      }
    }
    return number;
  }

  /**
   * Clamps `number` within the inclusive `lower` and `upper` bounds.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Number
   * @param {number} number The number to clamp.
   * @param {number} [lower] The lower bound.
   * @param {number} upper The upper bound.
   * @returns {number} Returns the clamped number.
   * @example
   *
   * _.clamp(-10, -5, 5);
   * // => -5
   *
   * _.clamp(10, -5, 5);
   * // => 5
   */
  function clamp(number, lower, upper) {
    if (upper === undefined) {
      upper = lower;
      lower = undefined;
    }
    if (upper !== undefined) {
      upper = toNumber(upper);
      upper = upper === upper ? upper : 0;
    }
    if (lower !== undefined) {
      lower = toNumber(lower);
      lower = lower === lower ? lower : 0;
    }
    return baseClamp(toNumber(number), lower, upper);
  }

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map$1 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }

  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn$1(source), object);
  }

  /** Detect free variable `exports`. */
  var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;

  /** Built-in value references. */
  var Buffer$1 = moduleExports$2 ? root$1.Buffer : undefined,
      allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : undefined;

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

    buffer.copy(result);
    return result;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  /** Used for built-in method references. */
  var objectProto$f = Object.prototype;

  /** Built-in value references. */
  var propertyIsEnumerable$1 = objectProto$f.propertyIsEnumerable;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable$1.call(object, symbol);
    });
  };

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn = !nativeGetSymbols$1 ? stubArray : function(object) {
    var result = [];
    while (object) {
      arrayPush(result, getSymbols(object));
      object = getPrototype(object);
    }
    return result;
  };

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
  }

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
  }

  /* Built-in method references that are verified to be native. */
  var DataView = getNative(root$1, 'DataView');

  /* Built-in method references that are verified to be native. */
  var Promise$1 = getNative(root$1, 'Promise');

  /* Built-in method references that are verified to be native. */
  var Set = getNative(root$1, 'Set');

  /** `Object#toString` result references. */
  var mapTag$1 = '[object Map]',
      objectTag$2 = '[object Object]',
      promiseTag = '[object Promise]',
      setTag$1 = '[object Set]',
      weakMapTag$1 = '[object WeakMap]';

  var dataViewTag$1 = '[object DataView]';

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map$1),
      promiseCtorString = toSource(Promise$1),
      setCtorString = toSource(Set),
      weakMapCtorString = toSource(WeakMap$1);

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
      (Map$1 && getTag(new Map$1) != mapTag$1) ||
      (Promise$1 && getTag(Promise$1.resolve()) != promiseTag) ||
      (Set && getTag(new Set) != setTag$1) ||
      (WeakMap$1 && getTag(new WeakMap$1) != weakMapTag$1)) {
    getTag = function(value) {
      var result = baseGetTag(value),
          Ctor = result == objectTag$2 ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag$1;
          case mapCtorString: return mapTag$1;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag$1;
          case weakMapCtorString: return weakMapTag$1;
        }
      }
      return result;
    };
  }

  var getTag$1 = getTag;

  /** Used for built-in method references. */
  var objectProto$g = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$d = objectProto$g.hasOwnProperty;

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray(array) {
    var length = array.length,
        result = new array.constructor(length);

    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty$d.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }

  /** Built-in value references. */
  var Uint8Array = root$1.Uint8Array;

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : undefined,
      symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  /** `Object#toString` result references. */
  var boolTag$1 = '[object Boolean]',
      dateTag$1 = '[object Date]',
      mapTag$2 = '[object Map]',
      numberTag$1 = '[object Number]',
      regexpTag$1 = '[object RegExp]',
      setTag$2 = '[object Set]',
      stringTag$1 = '[object String]',
      symbolTag$1 = '[object Symbol]';

  var arrayBufferTag$1 = '[object ArrayBuffer]',
      dataViewTag$2 = '[object DataView]',
      float32Tag$1 = '[object Float32Array]',
      float64Tag$1 = '[object Float64Array]',
      int8Tag$1 = '[object Int8Array]',
      int16Tag$1 = '[object Int16Array]',
      int32Tag$1 = '[object Int32Array]',
      uint8Tag$1 = '[object Uint8Array]',
      uint8ClampedTag$1 = '[object Uint8ClampedArray]',
      uint16Tag$1 = '[object Uint16Array]',
      uint32Tag$1 = '[object Uint32Array]';

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$1:
        return cloneArrayBuffer(object);

      case boolTag$1:
      case dateTag$1:
        return new Ctor(+object);

      case dataViewTag$2:
        return cloneDataView(object, isDeep);

      case float32Tag$1: case float64Tag$1:
      case int8Tag$1: case int16Tag$1: case int32Tag$1:
      case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
        return cloneTypedArray(object, isDeep);

      case mapTag$2:
        return new Ctor;

      case numberTag$1:
      case stringTag$1:
        return new Ctor(object);

      case regexpTag$1:
        return cloneRegExp(object);

      case setTag$2:
        return new Ctor;

      case symbolTag$1:
        return cloneSymbol(object);
    }
  }

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return (typeof object.constructor == 'function' && !isPrototype(object))
      ? baseCreate(getPrototype(object))
      : {};
  }

  /** `Object#toString` result references. */
  var mapTag$3 = '[object Map]';

  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap(value) {
    return isObjectLike(value) && getTag$1(value) == mapTag$3;
  }

  /* Node.js helper references. */
  var nodeIsMap = nodeUtil && nodeUtil.isMap;

  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

  /** `Object#toString` result references. */
  var setTag$3 = '[object Set]';

  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet(value) {
    return isObjectLike(value) && getTag$1(value) == setTag$3;
  }

  /* Node.js helper references. */
  var nodeIsSet = nodeUtil && nodeUtil.isSet;

  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** `Object#toString` result references. */
  var argsTag$2 = '[object Arguments]',
      arrayTag$1 = '[object Array]',
      boolTag$2 = '[object Boolean]',
      dateTag$2 = '[object Date]',
      errorTag$2 = '[object Error]',
      funcTag$2 = '[object Function]',
      genTag$1 = '[object GeneratorFunction]',
      mapTag$4 = '[object Map]',
      numberTag$2 = '[object Number]',
      objectTag$3 = '[object Object]',
      regexpTag$2 = '[object RegExp]',
      setTag$4 = '[object Set]',
      stringTag$2 = '[object String]',
      symbolTag$2 = '[object Symbol]',
      weakMapTag$2 = '[object WeakMap]';

  var arrayBufferTag$2 = '[object ArrayBuffer]',
      dataViewTag$3 = '[object DataView]',
      float32Tag$2 = '[object Float32Array]',
      float64Tag$2 = '[object Float64Array]',
      int8Tag$2 = '[object Int8Array]',
      int16Tag$2 = '[object Int16Array]',
      int32Tag$2 = '[object Int32Array]',
      uint8Tag$2 = '[object Uint8Array]',
      uint8ClampedTag$2 = '[object Uint8ClampedArray]',
      uint16Tag$2 = '[object Uint16Array]',
      uint32Tag$2 = '[object Uint32Array]';

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] =
  cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] =
  cloneableTags[boolTag$2] = cloneableTags[dateTag$2] =
  cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
  cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
  cloneableTags[int32Tag$2] = cloneableTags[mapTag$4] =
  cloneableTags[numberTag$2] = cloneableTags[objectTag$3] =
  cloneableTags[regexpTag$2] = cloneableTags[setTag$4] =
  cloneableTags[stringTag$2] = cloneableTags[symbolTag$2] =
  cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
  cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
  cloneableTags[errorTag$2] = cloneableTags[funcTag$2] =
  cloneableTags[weakMapTag$2] = false;

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result,
        isDeep = bitmask & CLONE_DEEP_FLAG,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag$1(value),
          isFunc = tag == funcTag$2 || tag == genTag$1;

      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag$3 || tag == argsTag$2 || (isFunc && !object)) {
        result = (isFlat || isFunc) ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat
            ? copySymbolsIn(value, baseAssignIn(result, value))
            : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack);
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);

    if (isSet(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function(subValue, key) {
        result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
    }

    var keysFunc = isFull
      ? (isFlat ? getAllKeysIn : getAllKeys)
      : (isFlat ? keysIn : keys);

    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function(subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }
      // Recursively populate clone (susceptible to call stack limits).
      assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  /** Used to compose bitmasks for cloning. */
  var CLONE_SYMBOLS_FLAG$1 = 4;

  /**
   * Creates a shallow clone of `value`.
   *
   * **Note:** This method is loosely based on the
   * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
   * and supports cloning arrays, array buffers, booleans, date objects, maps,
   * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
   * arrays. The own enumerable properties of `arguments` objects are cloned
   * as plain objects. An empty object is returned for uncloneable values such
   * as error objects, functions, DOM nodes, and WeakMaps.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to clone.
   * @returns {*} Returns the cloned value.
   * @see _.cloneDeep
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var shallow = _.clone(objects);
   * console.log(shallow[0] === objects[0]);
   * // => true
   */
  function clone(value) {
    return baseClone(value, CLONE_SYMBOLS_FLAG$1);
  }

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$1 = 1,
      CLONE_SYMBOLS_FLAG$2 = 4;

  /**
   * This method is like `_.clone` except that it recursively clones `value`.
   *
   * @static
   * @memberOf _
   * @since 1.0.0
   * @category Lang
   * @param {*} value The value to recursively clone.
   * @returns {*} Returns the deep cloned value.
   * @see _.clone
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var deep = _.cloneDeep(objects);
   * console.log(deep[0] === objects[0]);
   * // => false
   */
  function cloneDeep(value) {
    return baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$2);
  }

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$2 = 1,
      CLONE_SYMBOLS_FLAG$3 = 4;

  /**
   * This method is like `_.cloneWith` except that it recursively clones `value`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to recursively clone.
   * @param {Function} [customizer] The function to customize cloning.
   * @returns {*} Returns the deep cloned value.
   * @see _.cloneWith
   * @example
   *
   * function customizer(value) {
   *   if (_.isElement(value)) {
   *     return value.cloneNode(true);
   *   }
   * }
   *
   * var el = _.cloneDeepWith(document.body, customizer);
   *
   * console.log(el === document.body);
   * // => false
   * console.log(el.nodeName);
   * // => 'BODY'
   * console.log(el.childNodes.length);
   * // => 20
   */
  function cloneDeepWith(value, customizer) {
    customizer = typeof customizer == 'function' ? customizer : undefined;
    return baseClone(value, CLONE_DEEP_FLAG$2 | CLONE_SYMBOLS_FLAG$3, customizer);
  }

  /** Used to compose bitmasks for cloning. */
  var CLONE_SYMBOLS_FLAG$4 = 4;

  /**
   * This method is like `_.clone` except that it accepts `customizer` which
   * is invoked to produce the cloned value. If `customizer` returns `undefined`,
   * cloning is handled by the method instead. The `customizer` is invoked with
   * up to four arguments; (value [, index|key, object, stack]).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to clone.
   * @param {Function} [customizer] The function to customize cloning.
   * @returns {*} Returns the cloned value.
   * @see _.cloneDeepWith
   * @example
   *
   * function customizer(value) {
   *   if (_.isElement(value)) {
   *     return value.cloneNode(false);
   *   }
   * }
   *
   * var el = _.cloneWith(document.body, customizer);
   *
   * console.log(el === document.body);
   * // => false
   * console.log(el.nodeName);
   * // => 'BODY'
   * console.log(el.childNodes.length);
   * // => 0
   */
  function cloneWith(value, customizer) {
    customizer = typeof customizer == 'function' ? customizer : undefined;
    return baseClone(value, CLONE_SYMBOLS_FLAG$4, customizer);
  }

  /**
   * Executes the chain sequence and returns the wrapped result.
   *
   * @name commit
   * @memberOf _
   * @since 3.2.0
   * @category Seq
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * var array = [1, 2];
   * var wrapped = _(array).push(3);
   *
   * console.log(array);
   * // => [1, 2]
   *
   * wrapped = wrapped.commit();
   * console.log(array);
   * // => [1, 2, 3]
   *
   * wrapped.last();
   * // => 3
   *
   * console.log(array);
   * // => [1, 2, 3]
   */
  function wrapperCommit() {
    return new LodashWrapper(this.value(), this.__chain__);
  }

  /**
   * Creates an array with all falsey values removed. The values `false`, `null`,
   * `0`, `""`, `undefined`, and `NaN` are falsey.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to compact.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * _.compact([0, 1, false, 2, '', 3]);
   * // => [1, 2, 3]
   */
  function compact(array) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * Creates a new array concatenating `array` with any additional arrays
   * and/or values.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to concatenate.
   * @param {...*} [values] The values to concatenate.
   * @returns {Array} Returns the new concatenated array.
   * @example
   *
   * var array = [1];
   * var other = _.concat(array, 2, [3], [[4]]);
   *
   * console.log(other);
   * // => [1, 2, 3, [4]]
   *
   * console.log(array);
   * // => [1]
   */
  function concat() {
    var length = arguments.length;
    if (!length) {
      return [];
    }
    var args = Array(length - 1),
        array = arguments[0],
        index = length;

    while (index--) {
      args[index - 1] = arguments[index];
    }
    return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED$2);
    return this;
  }

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
  function setCacheHas(value) {
    return this.__data__.has(value);
  }

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new MapCache;
    while (++index < length) {
      this.add(values[index]);
    }
  }

  // Add methods to `SetCache`.
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        arrLength = array.length,
        othLength = other.length;

    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var index = -1,
        result = true,
        seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

    stack.set(array, other);
    stack.set(other, array);

    // Ignore non-index properties.
    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, arrValue, index, other, array, stack)
          : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== undefined) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      // Recursively compare arrays (susceptible to call stack limits).
      if (seen) {
        if (!arraySome(other, function(othValue, othIndex) {
              if (!cacheHas(seen, othIndex) &&
                  (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
          result = false;
          break;
        }
      } else if (!(
            arrValue === othValue ||
              equalFunc(arrValue, othValue, bitmask, customizer, stack)
          )) {
        result = false;
        break;
      }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$1 = 1,
      COMPARE_UNORDERED_FLAG$1 = 2;

  /** `Object#toString` result references. */
  var boolTag$3 = '[object Boolean]',
      dateTag$3 = '[object Date]',
      errorTag$3 = '[object Error]',
      mapTag$5 = '[object Map]',
      numberTag$3 = '[object Number]',
      regexpTag$3 = '[object RegExp]',
      setTag$5 = '[object Set]',
      stringTag$3 = '[object String]',
      symbolTag$3 = '[object Symbol]';

  var arrayBufferTag$3 = '[object ArrayBuffer]',
      dataViewTag$4 = '[object DataView]';

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$2 = Symbol$1 ? Symbol$1.prototype : undefined,
      symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;

  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag$4:
        if ((object.byteLength != other.byteLength) ||
            (object.byteOffset != other.byteOffset)) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;

      case arrayBufferTag$3:
        if ((object.byteLength != other.byteLength) ||
            !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
          return false;
        }
        return true;

      case boolTag$3:
      case dateTag$3:
      case numberTag$3:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq(+object, +other);

      case errorTag$3:
        return object.name == other.name && object.message == other.message;

      case regexpTag$3:
      case stringTag$3:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == (other + '');

      case mapTag$5:
        var convert = mapToArray;

      case setTag$5:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
        convert || (convert = setToArray);

        if (object.size != other.size && !isPartial) {
          return false;
        }
        // Assume cyclic values are equal.
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG$1;

        // Recursively compare objects (susceptible to call stack limits).
        stack.set(object, other);
        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack['delete'](object);
        return result;

      case symbolTag$3:
        if (symbolValueOf$1) {
          return symbolValueOf$1.call(object) == symbolValueOf$1.call(other);
        }
    }
    return false;
  }

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$2 = 1;

  /** Used for built-in method references. */
  var objectProto$h = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$e = objectProto$h.hasOwnProperty;

  /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
        objProps = getAllKeys(object),
        objLength = objProps.length,
        othProps = getAllKeys(other),
        othLength = othProps.length;

    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty$e.call(other, key))) {
        return false;
      }
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);

    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, objValue, key, other, object, stack)
          : customizer(objValue, othValue, key, object, other, stack);
      }
      // Recursively compare objects (susceptible to call stack limits).
      if (!(compared === undefined
            ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
            : compared
          )) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;

      // Non `Object` object instances with different constructors are not equal.
      if (objCtor != othCtor &&
          ('constructor' in object && 'constructor' in other) &&
          !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
            typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
  }

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$3 = 1;

  /** `Object#toString` result references. */
  var argsTag$3 = '[object Arguments]',
      arrayTag$2 = '[object Array]',
      objectTag$4 = '[object Object]';

  /** Used for built-in method references. */
  var objectProto$i = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$f = objectProto$i.hasOwnProperty;

  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object),
        othIsArr = isArray(other),
        objTag = objIsArr ? arrayTag$2 : getTag$1(object),
        othTag = othIsArr ? arrayTag$2 : getTag$1(other);

    objTag = objTag == argsTag$3 ? objectTag$4 : objTag;
    othTag = othTag == argsTag$3 ? objectTag$4 : othTag;

    var objIsObj = objTag == objectTag$4,
        othIsObj = othTag == objectTag$4,
        isSameTag = objTag == othTag;

    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack);
      return (objIsArr || isTypedArray(object))
        ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
        : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
      var objIsWrapped = objIsObj && hasOwnProperty$f.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty$f.call(other, '__wrapped__');

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;

        stack || (stack = new Stack);
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }

  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$4 = 1,
      COMPARE_UNORDERED_FLAG$2 = 2;

  /**
   * The base implementation of `_.isMatch` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property values to match.
   * @param {Array} matchData The property names, values, and compare flags to match.
   * @param {Function} [customizer] The function to customize comparisons.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   */
  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length,
        length = index,
        noCustomizer = !customizer;

    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index--) {
      var data = matchData[index];
      if ((noCustomizer && data[2])
            ? data[1] !== object[data[0]]
            : !(data[0] in object)
          ) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0],
          objValue = object[key],
          srcValue = data[1];

      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack;
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (!(result === undefined
              ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
              : result
            )) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` if suitable for strict
   *  equality comparisons, else `false`.
   */
  function isStrictComparable(value) {
    return value === value && !isObject(value);
  }

  /**
   * Gets the property names, values, and compare flags of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the match data of `object`.
   */
  function getMatchData(object) {
    var result = keys(object),
        length = result.length;

    while (length--) {
      var key = result[length],
          value = object[key];

      result[length] = [key, value, isStrictComparable(value)];
    }
    return result;
  }

  /**
   * A specialized version of `matchesProperty` for source values suitable
   * for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function matchesStrictComparable(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue &&
        (srcValue !== undefined || (key in Object(object)));
    };
  }

  /**
   * The base implementation of `_.matches` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
      return object === source || baseIsMatch(object, source, matchData);
    };
  }

  /**
   * The base implementation of `_.hasIn` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }

  /**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */
  function hasPath(object, path, hasFunc) {
    path = castPath(path, object);

    var index = -1,
        length = path.length,
        result = false;

    while (++index < length) {
      var key = toKey(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) &&
      (isArray(object) || isArguments(object));
  }

  /**
   * Checks if `path` is a direct or inherited property of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.hasIn(object, 'a');
   * // => true
   *
   * _.hasIn(object, 'a.b');
   * // => true
   *
   * _.hasIn(object, ['a', 'b']);
   * // => true
   *
   * _.hasIn(object, 'b');
   * // => false
   */
  function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
  }

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$5 = 1,
      COMPARE_UNORDERED_FLAG$3 = 2;

  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(toKey(path), srcValue);
    }
    return function(object) {
      var objValue = get(object, path);
      return (objValue === undefined && objValue === srcValue)
        ? hasIn(object, path)
        : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
    };
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyDeep(path) {
    return function(object) {
      return baseGet(object, path);
    };
  }

  /**
   * Creates a function that returns the value at `path` of a given object.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': 2 } },
   *   { 'a': { 'b': 1 } }
   * ];
   *
   * _.map(objects, _.property('a.b'));
   * // => [2, 1]
   *
   * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
   * // => [1, 2]
   */
  function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
  }

  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */
  function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
      return value;
    }
    if (value == null) {
      return identity;
    }
    if (typeof value == 'object') {
      return isArray(value)
        ? baseMatchesProperty(value[0], value[1])
        : baseMatches(value);
    }
    return property(value);
  }

  /** Error message constants. */
  var FUNC_ERROR_TEXT$4 = 'Expected a function';

  /**
   * Creates a function that iterates over `pairs` and invokes the corresponding
   * function of the first predicate to return truthy. The predicate-function
   * pairs are invoked with the `this` binding and arguments of the created
   * function.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {Array} pairs The predicate-function pairs.
   * @returns {Function} Returns the new composite function.
   * @example
   *
   * var func = _.cond([
   *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
   *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
   *   [_.stubTrue,                      _.constant('no match')]
   * ]);
   *
   * func({ 'a': 1, 'b': 2 });
   * // => 'matches A'
   *
   * func({ 'a': 0, 'b': 1 });
   * // => 'matches B'
   *
   * func({ 'a': '1', 'b': '2' });
   * // => 'no match'
   */
  function cond(pairs) {
    var length = pairs == null ? 0 : pairs.length,
        toIteratee = baseIteratee;

    pairs = !length ? [] : arrayMap(pairs, function(pair) {
      if (typeof pair[1] != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT$4);
      }
      return [toIteratee(pair[0]), pair[1]];
    });

    return baseRest(function(args) {
      var index = -1;
      while (++index < length) {
        var pair = pairs[index];
        if (apply(pair[0], this, args)) {
          return apply(pair[1], this, args);
        }
      }
    });
  }

  /**
   * The base implementation of `_.conformsTo` which accepts `props` to check.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property predicates to conform to.
   * @returns {boolean} Returns `true` if `object` conforms, else `false`.
   */
  function baseConformsTo(object, source, props) {
    var length = props.length;
    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (length--) {
      var key = props[length],
          predicate = source[key],
          value = object[key];

      if ((value === undefined && !(key in object)) || !predicate(value)) {
        return false;
      }
    }
    return true;
  }

  /**
   * The base implementation of `_.conforms` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property predicates to conform to.
   * @returns {Function} Returns the new spec function.
   */
  function baseConforms(source) {
    var props = keys(source);
    return function(object) {
      return baseConformsTo(object, source, props);
    };
  }

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$3 = 1;

  /**
   * Creates a function that invokes the predicate properties of `source` with
   * the corresponding property values of a given object, returning `true` if
   * all predicates return truthy, else `false`.
   *
   * **Note:** The created function is equivalent to `_.conformsTo` with
   * `source` partially applied.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {Object} source The object of property predicates to conform to.
   * @returns {Function} Returns the new spec function.
   * @example
   *
   * var objects = [
   *   { 'a': 2, 'b': 1 },
   *   { 'a': 1, 'b': 2 }
   * ];
   *
   * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
   * // => [{ 'a': 1, 'b': 2 }]
   */
  function conforms(source) {
    return baseConforms(baseClone(source, CLONE_DEEP_FLAG$3));
  }

  /**
   * Checks if `object` conforms to `source` by invoking the predicate
   * properties of `source` with the corresponding property values of `object`.
   *
   * **Note:** This method is equivalent to `_.conforms` when `source` is
   * partially applied.
   *
   * @static
   * @memberOf _
   * @since 4.14.0
   * @category Lang
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property predicates to conform to.
   * @returns {boolean} Returns `true` if `object` conforms, else `false`.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   *
   * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
   * // => true
   *
   * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
   * // => false
   */
  function conformsTo(object, source) {
    return source == null || baseConformsTo(object, source, keys(source));
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor = createBaseFor();

  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
  }

  /**
   * Creates a `baseEach` or `baseEachRight` function.
   *
   * @private
   * @param {Function} eachFunc The function to iterate over a collection.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length,
          index = fromRight ? length : -1,
          iterable = Object(collection);

      while ((fromRight ? index-- : ++index < length)) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }

  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */
  var baseEach = createBaseEach(baseForOwn);

  /**
   * Aggregates elements of `collection` on `accumulator` with keys transformed
   * by `iteratee` and values set by `setter`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function baseAggregator(collection, setter, iteratee, accumulator) {
    baseEach(collection, function(value, key, collection) {
      setter(accumulator, value, iteratee(value), collection);
    });
    return accumulator;
  }

  /**
   * Creates a function like `_.groupBy`.
   *
   * @private
   * @param {Function} setter The function to set accumulator values.
   * @param {Function} [initializer] The accumulator object initializer.
   * @returns {Function} Returns the new aggregator function.
   */
  function createAggregator(setter, initializer) {
    return function(collection, iteratee) {
      var func = isArray(collection) ? arrayAggregator : baseAggregator,
          accumulator = initializer ? initializer() : {};

      return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
    };
  }

  /** Used for built-in method references. */
  var objectProto$j = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$g = objectProto$j.hasOwnProperty;

  /**
   * Creates an object composed of keys generated from the results of running
   * each element of `collection` thru `iteratee`. The corresponding value of
   * each key is the number of times the key was returned by `iteratee`. The
   * iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 0.5.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
   * @returns {Object} Returns the composed aggregate object.
   * @example
   *
   * _.countBy([6.1, 4.2, 6.3], Math.floor);
   * // => { '4': 1, '6': 2 }
   *
   * // The `_.property` iteratee shorthand.
   * _.countBy(['one', 'two', 'three'], 'length');
   * // => { '3': 2, '5': 1 }
   */
  var countBy = createAggregator(function(result, value, key) {
    if (hasOwnProperty$g.call(result, key)) {
      ++result[key];
    } else {
      baseAssignValue(result, key, 1);
    }
  });

  /**
   * Creates an object that inherits from the `prototype` object. If a
   * `properties` object is given, its own enumerable string keyed properties
   * are assigned to the created object.
   *
   * @static
   * @memberOf _
   * @since 2.3.0
   * @category Object
   * @param {Object} prototype The object to inherit from.
   * @param {Object} [properties] The properties to assign to the object.
   * @returns {Object} Returns the new object.
   * @example
   *
   * function Shape() {
   *   this.x = 0;
   *   this.y = 0;
   * }
   *
   * function Circle() {
   *   Shape.call(this);
   * }
   *
   * Circle.prototype = _.create(Shape.prototype, {
   *   'constructor': Circle
   * });
   *
   * var circle = new Circle;
   * circle instanceof Circle;
   * // => true
   *
   * circle instanceof Shape;
   * // => true
   */
  function create(prototype, properties) {
    var result = baseCreate(prototype);
    return properties == null ? result : baseAssign(result, properties);
  }

  /** Used to compose bitmasks for function metadata. */
  var WRAP_CURRY_FLAG$5 = 8;

  /**
   * Creates a function that accepts arguments of `func` and either invokes
   * `func` returning its result, if at least `arity` number of arguments have
   * been provided, or returns a function that accepts the remaining `func`
   * arguments, and so on. The arity of `func` may be specified if `func.length`
   * is not sufficient.
   *
   * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
   * may be used as a placeholder for provided arguments.
   *
   * **Note:** This method doesn't set the "length" property of curried functions.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Function
   * @param {Function} func The function to curry.
   * @param {number} [arity=func.length] The arity of `func`.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Function} Returns the new curried function.
   * @example
   *
   * var abc = function(a, b, c) {
   *   return [a, b, c];
   * };
   *
   * var curried = _.curry(abc);
   *
   * curried(1)(2)(3);
   * // => [1, 2, 3]
   *
   * curried(1, 2)(3);
   * // => [1, 2, 3]
   *
   * curried(1, 2, 3);
   * // => [1, 2, 3]
   *
   * // Curried with placeholders.
   * curried(1)(_, 3)(2);
   * // => [1, 2, 3]
   */
  function curry(func, arity, guard) {
    arity = guard ? undefined : arity;
    var result = createWrap(func, WRAP_CURRY_FLAG$5, undefined, undefined, undefined, undefined, undefined, arity);
    result.placeholder = curry.placeholder;
    return result;
  }

  // Assign default placeholders.
  curry.placeholder = {};

  /** Used to compose bitmasks for function metadata. */
  var WRAP_CURRY_RIGHT_FLAG$3 = 16;

  /**
   * This method is like `_.curry` except that arguments are applied to `func`
   * in the manner of `_.partialRight` instead of `_.partial`.
   *
   * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
   * builds, may be used as a placeholder for provided arguments.
   *
   * **Note:** This method doesn't set the "length" property of curried functions.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Function
   * @param {Function} func The function to curry.
   * @param {number} [arity=func.length] The arity of `func`.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Function} Returns the new curried function.
   * @example
   *
   * var abc = function(a, b, c) {
   *   return [a, b, c];
   * };
   *
   * var curried = _.curryRight(abc);
   *
   * curried(3)(2)(1);
   * // => [1, 2, 3]
   *
   * curried(2, 3)(1);
   * // => [1, 2, 3]
   *
   * curried(1, 2, 3);
   * // => [1, 2, 3]
   *
   * // Curried with placeholders.
   * curried(3)(1, _)(2);
   * // => [1, 2, 3]
   */
  function curryRight(func, arity, guard) {
    arity = guard ? undefined : arity;
    var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG$3, undefined, undefined, undefined, undefined, undefined, arity);
    result.placeholder = curryRight.placeholder;
    return result;
  }

  // Assign default placeholders.
  curryRight.placeholder = {};

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function() {
    return root$1.Date.now();
  };

  /** Error message constants. */
  var FUNC_ERROR_TEXT$5 = 'Expected a function';

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$5 = Math.max,
      nativeMin$3 = Math.min;

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$5);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax$5(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          timeWaiting = wait - timeSinceLastCall;

      return maxing
        ? nativeMin$3(timeWaiting, maxWait - timeSinceLastInvoke)
        : timeWaiting;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
        (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now());
    }

    function debounced() {
      var time = now(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  /**
   * Checks `value` to determine whether a default value should be returned in
   * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
   * or `undefined`.
   *
   * @static
   * @memberOf _
   * @since 4.14.0
   * @category Util
   * @param {*} value The value to check.
   * @param {*} defaultValue The default value.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * _.defaultTo(1, 10);
   * // => 1
   *
   * _.defaultTo(undefined, 10);
   * // => 10
   */
  function defaultTo(value, defaultValue) {
    return (value == null || value !== value) ? defaultValue : value;
  }

  /** Used for built-in method references. */
  var objectProto$k = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$h = objectProto$k.hasOwnProperty;

  /**
   * Assigns own and inherited enumerable string keyed properties of source
   * objects to the destination object for all destination properties that
   * resolve to `undefined`. Source objects are applied from left to right.
   * Once a property is set, additional values of the same property are ignored.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.defaultsDeep
   * @example
   *
   * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
   * // => { 'a': 1, 'b': 2 }
   */
  var defaults = baseRest(function(object, sources) {
    object = Object(object);

    var index = -1;
    var length = sources.length;
    var guard = length > 2 ? sources[2] : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      length = 1;
    }

    while (++index < length) {
      var source = sources[index];
      var props = keysIn$1(source);
      var propsIndex = -1;
      var propsLength = props.length;

      while (++propsIndex < propsLength) {
        var key = props[propsIndex];
        var value = object[key];

        if (value === undefined ||
            (eq(value, objectProto$k[key]) && !hasOwnProperty$h.call(object, key))) {
          object[key] = source[key];
        }
      }
    }

    return object;
  });

  /**
   * This function is like `assignValue` except that it doesn't assign
   * `undefined` values.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignMergeValue(object, key, value) {
    if ((value !== undefined && !eq(object[key], value)) ||
        (value === undefined && !(key in object))) {
      baseAssignValue(object, key, value);
    }
  }

  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }

  /**
   * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function safeGet(object, key) {
    if (key === 'constructor' && typeof object[key] === 'function') {
      return;
    }

    if (key == '__proto__') {
      return;
    }

    return object[key];
  }

  /**
   * Converts `value` to a plain object flattening inherited enumerable string
   * keyed properties of `value` to own properties of the plain object.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Object} Returns the converted plain object.
   * @example
   *
   * function Foo() {
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.assign({ 'a': 1 }, new Foo);
   * // => { 'a': 1, 'b': 2 }
   *
   * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
   * // => { 'a': 1, 'b': 2, 'c': 3 }
   */
  function toPlainObject(value) {
    return copyObject(value, keysIn$1(value));
  }

  /**
   * A specialized version of `baseMerge` for arrays and objects which performs
   * deep merges and tracks traversed objects enabling objects with circular
   * references to be merged.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {string} key The key of the value to merge.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} mergeFunc The function to merge values.
   * @param {Function} [customizer] The function to customize assigned values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object, key),
        srcValue = safeGet(source, key),
        stacked = stack.get(srcValue);

    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer
      ? customizer(objValue, srcValue, (key + ''), object, source, stack)
      : undefined;

    var isCommon = newValue === undefined;

    if (isCommon) {
      var isArr = isArray(srcValue),
          isBuff = !isArr && isBuffer(srcValue),
          isTyped = !isArr && !isBuff && isTypedArray(srcValue);

      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray(objValue)) {
          newValue = objValue;
        }
        else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        }
        else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        }
        else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        }
        else {
          newValue = [];
        }
      }
      else if (isPlainObject$2(srcValue) || isArguments(srcValue)) {
        newValue = objValue;
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        }
        else if (!isObject(objValue) || isFunction(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      }
      else {
        isCommon = false;
      }
    }
    if (isCommon) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack['delete'](srcValue);
    }
    assignMergeValue(object, key, newValue);
  }

  /**
   * The base implementation of `_.merge` without support for multiple sources.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} [customizer] The function to customize merged values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor(source, function(srcValue, key) {
      stack || (stack = new Stack);
      if (isObject(srcValue)) {
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      }
      else {
        var newValue = customizer
          ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
          : undefined;

        if (newValue === undefined) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    }, keysIn$1);
  }

  /**
   * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
   * objects into destination objects that are passed thru.
   *
   * @private
   * @param {*} objValue The destination value.
   * @param {*} srcValue The source value.
   * @param {string} key The key of the property to merge.
   * @param {Object} object The parent object of `objValue`.
   * @param {Object} source The parent object of `srcValue`.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   * @returns {*} Returns the value to assign.
   */
  function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
    if (isObject(objValue) && isObject(srcValue)) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      stack.set(srcValue, objValue);
      baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
      stack['delete'](srcValue);
    }
    return objValue;
  }

  /**
   * This method is like `_.merge` except that it accepts `customizer` which
   * is invoked to produce the merged values of the destination and source
   * properties. If `customizer` returns `undefined`, merging is handled by the
   * method instead. The `customizer` is invoked with six arguments:
   * (objValue, srcValue, key, object, source, stack).
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} sources The source objects.
   * @param {Function} customizer The function to customize assigned values.
   * @returns {Object} Returns `object`.
   * @example
   *
   * function customizer(objValue, srcValue) {
   *   if (_.isArray(objValue)) {
   *     return objValue.concat(srcValue);
   *   }
   * }
   *
   * var object = { 'a': [1], 'b': [2] };
   * var other = { 'a': [3], 'b': [4] };
   *
   * _.mergeWith(object, other, customizer);
   * // => { 'a': [1, 3], 'b': [2, 4] }
   */
  var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
    baseMerge(object, source, srcIndex, customizer);
  });

  /**
   * This method is like `_.defaults` except that it recursively assigns
   * default properties.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 3.10.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.defaults
   * @example
   *
   * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
   * // => { 'a': { 'b': 2, 'c': 3 } }
   */
  var defaultsDeep = baseRest(function(args) {
    args.push(undefined, customDefaultsMerge);
    return apply(mergeWith, undefined, args);
  });

  /** Error message constants. */
  var FUNC_ERROR_TEXT$6 = 'Expected a function';

  /**
   * The base implementation of `_.delay` and `_.defer` which accepts `args`
   * to provide to `func`.
   *
   * @private
   * @param {Function} func The function to delay.
   * @param {number} wait The number of milliseconds to delay invocation.
   * @param {Array} args The arguments to provide to `func`.
   * @returns {number|Object} Returns the timer id or timeout object.
   */
  function baseDelay(func, wait, args) {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$6);
    }
    return setTimeout(function() { func.apply(undefined, args); }, wait);
  }

  /**
   * Defers invoking the `func` until the current call stack has cleared. Any
   * additional arguments are provided to `func` when it's invoked.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to defer.
   * @param {...*} [args] The arguments to invoke `func` with.
   * @returns {number} Returns the timer id.
   * @example
   *
   * _.defer(function(text) {
   *   console.log(text);
   * }, 'deferred');
   * // => Logs 'deferred' after one millisecond.
   */
  var defer = baseRest(function(func, args) {
    return baseDelay(func, 1, args);
  });

  /**
   * Invokes `func` after `wait` milliseconds. Any additional arguments are
   * provided to `func` when it's invoked.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to delay.
   * @param {number} wait The number of milliseconds to delay invocation.
   * @param {...*} [args] The arguments to invoke `func` with.
   * @returns {number} Returns the timer id.
   * @example
   *
   * _.delay(function(text) {
   *   console.log(text);
   * }, 1000, 'later');
   * // => Logs 'later' after one second.
   */
  var delay = baseRest(function(func, wait, args) {
    return baseDelay(func, toNumber(wait) || 0, args);
  });

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE$1 = 200;

  /**
   * The base implementation of methods like `_.difference` without support
   * for excluding multiple arrays or iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Array} values The values to exclude.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of filtered values.
   */
  function baseDifference(array, values, iteratee, comparator) {
    var index = -1,
        includes = arrayIncludes,
        isCommon = true,
        length = array.length,
        result = [],
        valuesLength = values.length;

    if (!length) {
      return result;
    }
    if (iteratee) {
      values = arrayMap(values, baseUnary(iteratee));
    }
    if (comparator) {
      includes = arrayIncludesWith;
      isCommon = false;
    }
    else if (values.length >= LARGE_ARRAY_SIZE$1) {
      includes = cacheHas;
      isCommon = false;
      values = new SetCache(values);
    }
    outer:
    while (++index < length) {
      var value = array[index],
          computed = iteratee == null ? value : iteratee(value);

      value = (comparator || value !== 0) ? value : 0;
      if (isCommon && computed === computed) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values[valuesIndex] === computed) {
            continue outer;
          }
        }
        result.push(value);
      }
      else if (!includes(values, computed, comparator)) {
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Creates an array of `array` values not included in the other given arrays
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons. The order and references of result values are
   * determined by the first array.
   *
   * **Note:** Unlike `_.pullAll`, this method returns a new array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {...Array} [values] The values to exclude.
   * @returns {Array} Returns the new array of filtered values.
   * @see _.without, _.xor
   * @example
   *
   * _.difference([2, 1], [2, 3]);
   * // => [1]
   */
  var difference = baseRest(function(array, values) {
    return isArrayLikeObject(array)
      ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
      : [];
  });

  /**
   * Gets the last element of `array`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to query.
   * @returns {*} Returns the last element of `array`.
   * @example
   *
   * _.last([1, 2, 3]);
   * // => 3
   */
  function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
  }

  /**
   * This method is like `_.difference` except that it accepts `iteratee` which
   * is invoked for each element of `array` and `values` to generate the criterion
   * by which they're compared. The order and references of result values are
   * determined by the first array. The iteratee is invoked with one argument:
   * (value).
   *
   * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {...Array} [values] The values to exclude.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
   * // => [1.2]
   *
   * // The `_.property` iteratee shorthand.
   * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
   * // => [{ 'x': 2 }]
   */
  var differenceBy = baseRest(function(array, values) {
    var iteratee = last(values);
    if (isArrayLikeObject(iteratee)) {
      iteratee = undefined;
    }
    return isArrayLikeObject(array)
      ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), baseIteratee(iteratee, 2))
      : [];
  });

  /**
   * This method is like `_.difference` except that it accepts `comparator`
   * which is invoked to compare elements of `array` to `values`. The order and
   * references of result values are determined by the first array. The comparator
   * is invoked with two arguments: (arrVal, othVal).
   *
   * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {...Array} [values] The values to exclude.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
   *
   * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
   * // => [{ 'x': 2, 'y': 1 }]
   */
  var differenceWith = baseRest(function(array, values) {
    var comparator = last(values);
    if (isArrayLikeObject(comparator)) {
      comparator = undefined;
    }
    return isArrayLikeObject(array)
      ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
      : [];
  });

  /**
   * Divide two numbers.
   *
   * @static
   * @memberOf _
   * @since 4.7.0
   * @category Math
   * @param {number} dividend The first number in a division.
   * @param {number} divisor The second number in a division.
   * @returns {number} Returns the quotient.
   * @example
   *
   * _.divide(6, 4);
   * // => 1.5
   */
  var divide = createMathOperation(function(dividend, divisor) {
    return dividend / divisor;
  }, 1);

  /**
   * Creates a slice of `array` with `n` elements dropped from the beginning.
   *
   * @static
   * @memberOf _
   * @since 0.5.0
   * @category Array
   * @param {Array} array The array to query.
   * @param {number} [n=1] The number of elements to drop.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.drop([1, 2, 3]);
   * // => [2, 3]
   *
   * _.drop([1, 2, 3], 2);
   * // => [3]
   *
   * _.drop([1, 2, 3], 5);
   * // => []
   *
   * _.drop([1, 2, 3], 0);
   * // => [1, 2, 3]
   */
  function drop(array, n, guard) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return [];
    }
    n = (guard || n === undefined) ? 1 : toInteger(n);
    return baseSlice(array, n < 0 ? 0 : n, length);
  }

  /**
   * Creates a slice of `array` with `n` elements dropped from the end.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to query.
   * @param {number} [n=1] The number of elements to drop.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.dropRight([1, 2, 3]);
   * // => [1, 2]
   *
   * _.dropRight([1, 2, 3], 2);
   * // => [1]
   *
   * _.dropRight([1, 2, 3], 5);
   * // => []
   *
   * _.dropRight([1, 2, 3], 0);
   * // => [1, 2, 3]
   */
  function dropRight(array, n, guard) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return [];
    }
    n = (guard || n === undefined) ? 1 : toInteger(n);
    n = length - n;
    return baseSlice(array, 0, n < 0 ? 0 : n);
  }

  /**
   * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
   * without support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to query.
   * @param {Function} predicate The function invoked per iteration.
   * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Array} Returns the slice of `array`.
   */
  function baseWhile(array, predicate, isDrop, fromRight) {
    var length = array.length,
        index = fromRight ? length : -1;

    while ((fromRight ? index-- : ++index < length) &&
      predicate(array[index], index, array)) {}

    return isDrop
      ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
      : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
  }

  /**
   * Creates a slice of `array` excluding elements dropped from the end.
   * Elements are dropped until `predicate` returns falsey. The predicate is
   * invoked with three arguments: (value, index, array).
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to query.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': true },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': false }
   * ];
   *
   * _.dropRightWhile(users, function(o) { return !o.active; });
   * // => objects for ['barney']
   *
   * // The `_.matches` iteratee shorthand.
   * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
   * // => objects for ['barney', 'fred']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.dropRightWhile(users, ['active', false]);
   * // => objects for ['barney']
   *
   * // The `_.property` iteratee shorthand.
   * _.dropRightWhile(users, 'active');
   * // => objects for ['barney', 'fred', 'pebbles']
   */
  function dropRightWhile(array, predicate) {
    return (array && array.length)
      ? baseWhile(array, baseIteratee(predicate, 3), true, true)
      : [];
  }

  /**
   * Creates a slice of `array` excluding elements dropped from the beginning.
   * Elements are dropped until `predicate` returns falsey. The predicate is
   * invoked with three arguments: (value, index, array).
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to query.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': false },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': true }
   * ];
   *
   * _.dropWhile(users, function(o) { return !o.active; });
   * // => objects for ['pebbles']
   *
   * // The `_.matches` iteratee shorthand.
   * _.dropWhile(users, { 'user': 'barney', 'active': false });
   * // => objects for ['fred', 'pebbles']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.dropWhile(users, ['active', false]);
   * // => objects for ['pebbles']
   *
   * // The `_.property` iteratee shorthand.
   * _.dropWhile(users, 'active');
   * // => objects for ['barney', 'fred', 'pebbles']
   */
  function dropWhile(array, predicate) {
    return (array && array.length)
      ? baseWhile(array, baseIteratee(predicate, 3), true)
      : [];
  }

  /**
   * Casts `value` to `identity` if it's not a function.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Function} Returns cast function.
   */
  function castFunction(value) {
    return typeof value == 'function' ? value : identity;
  }

  /**
   * Iterates over elements of `collection` and invokes `iteratee` for each element.
   * The iteratee is invoked with three arguments: (value, index|key, collection).
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * **Note:** As with other "Collections" methods, objects with a "length"
   * property are iterated like arrays. To avoid this behavior use `_.forIn`
   * or `_.forOwn` for object iteration.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @alias each
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   * @see _.forEachRight
   * @example
   *
   * _.forEach([1, 2], function(value) {
   *   console.log(value);
   * });
   * // => Logs `1` then `2`.
   *
   * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'a' then 'b' (iteration order is not guaranteed).
   */
  function forEach(collection, iteratee) {
    var func = isArray(collection) ? arrayEach : baseEach;
    return func(collection, castFunction(iteratee));
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * This function is like `baseFor` except that it iterates over properties
   * in the opposite order.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseForRight = createBaseFor(true);

  /**
   * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwnRight(object, iteratee) {
    return object && baseForRight(object, iteratee, keys);
  }

  /**
   * The base implementation of `_.forEachRight` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */
  var baseEachRight = createBaseEach(baseForOwnRight, true);

  /**
   * This method is like `_.forEach` except that it iterates over elements of
   * `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @alias eachRight
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   * @see _.forEach
   * @example
   *
   * _.forEachRight([1, 2], function(value) {
   *   console.log(value);
   * });
   * // => Logs `2` then `1`.
   */
  function forEachRight(collection, iteratee) {
    var func = isArray(collection) ? arrayEachRight : baseEachRight;
    return func(collection, castFunction(iteratee));
  }

  /**
   * Checks if `string` ends with the given target string.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to inspect.
   * @param {string} [target] The string to search for.
   * @param {number} [position=string.length] The position to search up to.
   * @returns {boolean} Returns `true` if `string` ends with `target`,
   *  else `false`.
   * @example
   *
   * _.endsWith('abc', 'c');
   * // => true
   *
   * _.endsWith('abc', 'b');
   * // => false
   *
   * _.endsWith('abc', 'b', 2);
   * // => true
   */
  function endsWith(string, target, position) {
    string = toString(string);
    target = baseToString(target);

    var length = string.length;
    position = position === undefined
      ? length
      : baseClamp(toInteger(position), 0, length);

    var end = position;
    position -= target.length;
    return position >= 0 && string.slice(position, end) == target;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /** `Object#toString` result references. */
  var mapTag$6 = '[object Map]',
      setTag$6 = '[object Set]';

  /**
   * Creates a `_.toPairs` or `_.toPairsIn` function.
   *
   * @private
   * @param {Function} keysFunc The function to get the keys of a given object.
   * @returns {Function} Returns the new pairs function.
   */
  function createToPairs(keysFunc) {
    return function(object) {
      var tag = getTag$1(object);
      if (tag == mapTag$6) {
        return mapToArray(object);
      }
      if (tag == setTag$6) {
        return setToPairs(object);
      }
      return baseToPairs(object, keysFunc(object));
    };
  }

  /**
   * Creates an array of own enumerable string keyed-value pairs for `object`
   * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
   * entries are returned.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @alias entries
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the key-value pairs.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.toPairs(new Foo);
   * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
   */
  var toPairs = createToPairs(keys);

  /**
   * Creates an array of own and inherited enumerable string keyed-value pairs
   * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
   * or set, its entries are returned.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @alias entriesIn
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the key-value pairs.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.toPairsIn(new Foo);
   * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
   */
  var toPairsIn = createToPairs(keysIn$1);

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /** Used to match HTML entities and HTML characters. */
  var reUnescapedHtml = /[&<>"']/g,
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /**
   * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
   * corresponding HTML entities.
   *
   * **Note:** No other characters are escaped. To escape additional
   * characters use a third-party library like [_he_](https://mths.be/he).
   *
   * Though the ">" character is escaped for symmetry, characters like
   * ">" and "/" don't need escaping in HTML and have no special meaning
   * unless they're part of a tag or unquoted attribute value. See
   * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
   * (under "semi-related fun fact") for more details.
   *
   * When working with HTML you should always
   * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
   * XSS vectors.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to escape.
   * @returns {string} Returns the escaped string.
   * @example
   *
   * _.escape('fred, barney, & pebbles');
   * // => 'fred, barney, &amp; pebbles'
   */
  function escape(string) {
    string = toString(string);
    return (string && reHasUnescapedHtml.test(string))
      ? string.replace(reUnescapedHtml, escapeHtmlChar)
      : string;
  }

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar$1 = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar$1.source);

  /**
   * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
   * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to escape.
   * @returns {string} Returns the escaped string.
   * @example
   *
   * _.escapeRegExp('[lodash](https://lodash.com/)');
   * // => '\[lodash\]\(https://lodash\.com/\)'
   */
  function escapeRegExp(string) {
    string = toString(string);
    return (string && reHasRegExpChar.test(string))
      ? string.replace(reRegExpChar$1, '\\$&')
      : string;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * The base implementation of `_.every` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`
   */
  function baseEvery(collection, predicate) {
    var result = true;
    baseEach(collection, function(value, index, collection) {
      result = !!predicate(value, index, collection);
      return result;
    });
    return result;
  }

  /**
   * Checks if `predicate` returns truthy for **all** elements of `collection`.
   * Iteration is stopped once `predicate` returns falsey. The predicate is
   * invoked with three arguments: (value, index|key, collection).
   *
   * **Note:** This method returns `true` for
   * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
   * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
   * elements of empty collections.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   * @example
   *
   * _.every([true, 1, null, 'yes'], Boolean);
   * // => false
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36, 'active': false },
   *   { 'user': 'fred',   'age': 40, 'active': false }
   * ];
   *
   * // The `_.matches` iteratee shorthand.
   * _.every(users, { 'user': 'barney', 'active': false });
   * // => false
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.every(users, ['active', false]);
   * // => true
   *
   * // The `_.property` iteratee shorthand.
   * _.every(users, 'active');
   * // => false
   */
  function every(collection, predicate, guard) {
    var func = isArray(collection) ? arrayEvery : baseEvery;
    if (guard && isIterateeCall(collection, predicate, guard)) {
      predicate = undefined;
    }
    return func(collection, baseIteratee(predicate, 3));
  }

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH$1 = 4294967295;

  /**
   * Converts `value` to an integer suitable for use as the length of an
   * array-like object.
   *
   * **Note:** This method is based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toLength(3.2);
   * // => 3
   *
   * _.toLength(Number.MIN_VALUE);
   * // => 0
   *
   * _.toLength(Infinity);
   * // => 4294967295
   *
   * _.toLength('3.2');
   * // => 3
   */
  function toLength(value) {
    return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH$1) : 0;
  }

  /**
   * The base implementation of `_.fill` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to fill.
   * @param {*} value The value to fill `array` with.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns `array`.
   */
  function baseFill(array, value, start, end) {
    var length = array.length;

    start = toInteger(start);
    if (start < 0) {
      start = -start > length ? 0 : (length + start);
    }
    end = (end === undefined || end > length) ? length : toInteger(end);
    if (end < 0) {
      end += length;
    }
    end = start > end ? 0 : toLength(end);
    while (start < end) {
      array[start++] = value;
    }
    return array;
  }

  /**
   * Fills elements of `array` with `value` from `start` up to, but not
   * including, `end`.
   *
   * **Note:** This method mutates `array`.
   *
   * @static
   * @memberOf _
   * @since 3.2.0
   * @category Array
   * @param {Array} array The array to fill.
   * @param {*} value The value to fill `array` with.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns `array`.
   * @example
   *
   * var array = [1, 2, 3];
   *
   * _.fill(array, 'a');
   * console.log(array);
   * // => ['a', 'a', 'a']
   *
   * _.fill(Array(3), 2);
   * // => [2, 2, 2]
   *
   * _.fill([4, 6, 8, 10], '*', 1, 3);
   * // => [4, '*', '*', 10]
   */
  function fill(array, value, start, end) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return [];
    }
    if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
      start = 0;
      end = length;
    }
    return baseFill(array, value, start, end);
  }

  /**
   * The base implementation of `_.filter` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function baseFilter(collection, predicate) {
    var result = [];
    baseEach(collection, function(value, index, collection) {
      if (predicate(value, index, collection)) {
        result.push(value);
      }
    });
    return result;
  }

  /**
   * Iterates over elements of `collection`, returning an array of all elements
   * `predicate` returns truthy for. The predicate is invoked with three
   * arguments: (value, index|key, collection).
   *
   * **Note:** Unlike `_.remove`, this method returns a new array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   * @see _.reject
   * @example
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36, 'active': true },
   *   { 'user': 'fred',   'age': 40, 'active': false }
   * ];
   *
   * _.filter(users, function(o) { return !o.active; });
   * // => objects for ['fred']
   *
   * // The `_.matches` iteratee shorthand.
   * _.filter(users, { 'age': 36, 'active': true });
   * // => objects for ['barney']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.filter(users, ['active', false]);
   * // => objects for ['fred']
   *
   * // The `_.property` iteratee shorthand.
   * _.filter(users, 'active');
   * // => objects for ['barney']
   */
  function filter(collection, predicate) {
    var func = isArray(collection) ? arrayFilter : baseFilter;
    return func(collection, baseIteratee(predicate, 3));
  }

  /**
   * Creates a `_.find` or `_.findLast` function.
   *
   * @private
   * @param {Function} findIndexFunc The function to find the collection index.
   * @returns {Function} Returns the new find function.
   */
  function createFind(findIndexFunc) {
    return function(collection, predicate, fromIndex) {
      var iterable = Object(collection);
      if (!isArrayLike(collection)) {
        var iteratee = baseIteratee(predicate, 3);
        collection = keys(collection);
        predicate = function(key) { return iteratee(iterable[key], key, iterable); };
      }
      var index = findIndexFunc(collection, predicate, fromIndex);
      return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
    };
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$6 = Math.max;

  /**
   * This method is like `_.find` except that it returns the index of the first
   * element `predicate` returns truthy for instead of the element itself.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {number} Returns the index of the found element, else `-1`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': false },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': true }
   * ];
   *
   * _.findIndex(users, function(o) { return o.user == 'barney'; });
   * // => 0
   *
   * // The `_.matches` iteratee shorthand.
   * _.findIndex(users, { 'user': 'fred', 'active': false });
   * // => 1
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.findIndex(users, ['active', false]);
   * // => 0
   *
   * // The `_.property` iteratee shorthand.
   * _.findIndex(users, 'active');
   * // => 2
   */
  function findIndex(array, predicate, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return -1;
    }
    var index = fromIndex == null ? 0 : toInteger(fromIndex);
    if (index < 0) {
      index = nativeMax$6(length + index, 0);
    }
    return baseFindIndex(array, baseIteratee(predicate, 3), index);
  }

  /**
   * Iterates over elements of `collection`, returning the first element
   * `predicate` returns truthy for. The predicate is invoked with three
   * arguments: (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {*} Returns the matched element, else `undefined`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'age': 36, 'active': true },
   *   { 'user': 'fred',    'age': 40, 'active': false },
   *   { 'user': 'pebbles', 'age': 1,  'active': true }
   * ];
   *
   * _.find(users, function(o) { return o.age < 40; });
   * // => object for 'barney'
   *
   * // The `_.matches` iteratee shorthand.
   * _.find(users, { 'age': 1, 'active': true });
   * // => object for 'pebbles'
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.find(users, ['active', false]);
   * // => object for 'fred'
   *
   * // The `_.property` iteratee shorthand.
   * _.find(users, 'active');
   * // => object for 'barney'
   */
  var find = createFind(findIndex);

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * This method is like `_.find` except that it returns the key of the first
   * element `predicate` returns truthy for instead of the element itself.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Object
   * @param {Object} object The object to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns {string|undefined} Returns the key of the matched element,
   *  else `undefined`.
   * @example
   *
   * var users = {
   *   'barney':  { 'age': 36, 'active': true },
   *   'fred':    { 'age': 40, 'active': false },
   *   'pebbles': { 'age': 1,  'active': true }
   * };
   *
   * _.findKey(users, function(o) { return o.age < 40; });
   * // => 'barney' (iteration order is not guaranteed)
   *
   * // The `_.matches` iteratee shorthand.
   * _.findKey(users, { 'age': 1, 'active': true });
   * // => 'pebbles'
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.findKey(users, ['active', false]);
   * // => 'fred'
   *
   * // The `_.property` iteratee shorthand.
   * _.findKey(users, 'active');
   * // => 'barney'
   */
  function findKey(object, predicate) {
    return baseFindKey(object, baseIteratee(predicate, 3), baseForOwn);
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$7 = Math.max,
      nativeMin$4 = Math.min;

  /**
   * This method is like `_.findIndex` except that it iterates over elements
   * of `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param {number} [fromIndex=array.length-1] The index to search from.
   * @returns {number} Returns the index of the found element, else `-1`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': true },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': false }
   * ];
   *
   * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
   * // => 2
   *
   * // The `_.matches` iteratee shorthand.
   * _.findLastIndex(users, { 'user': 'barney', 'active': true });
   * // => 0
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.findLastIndex(users, ['active', false]);
   * // => 2
   *
   * // The `_.property` iteratee shorthand.
   * _.findLastIndex(users, 'active');
   * // => 0
   */
  function findLastIndex(array, predicate, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return -1;
    }
    var index = length - 1;
    if (fromIndex !== undefined) {
      index = toInteger(fromIndex);
      index = fromIndex < 0
        ? nativeMax$7(length + index, 0)
        : nativeMin$4(index, length - 1);
    }
    return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
  }

  /**
   * This method is like `_.find` except that it iterates over elements of
   * `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param {number} [fromIndex=collection.length-1] The index to search from.
   * @returns {*} Returns the matched element, else `undefined`.
   * @example
   *
   * _.findLast([1, 2, 3, 4], function(n) {
   *   return n % 2 == 1;
   * });
   * // => 3
   */
  var findLast = createFind(findLastIndex);

  /**
   * This method is like `_.findKey` except that it iterates over elements of
   * a collection in the opposite order.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Object
   * @param {Object} object The object to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns {string|undefined} Returns the key of the matched element,
   *  else `undefined`.
   * @example
   *
   * var users = {
   *   'barney':  { 'age': 36, 'active': true },
   *   'fred':    { 'age': 40, 'active': false },
   *   'pebbles': { 'age': 1,  'active': true }
   * };
   *
   * _.findLastKey(users, function(o) { return o.age < 40; });
   * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
   *
   * // The `_.matches` iteratee shorthand.
   * _.findLastKey(users, { 'age': 36, 'active': true });
   * // => 'barney'
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.findLastKey(users, ['active', false]);
   * // => 'fred'
   *
   * // The `_.property` iteratee shorthand.
   * _.findLastKey(users, 'active');
   * // => 'pebbles'
   */
  function findLastKey(object, predicate) {
    return baseFindKey(object, baseIteratee(predicate, 3), baseForOwnRight);
  }

  /**
   * Gets the first element of `array`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @alias first
   * @category Array
   * @param {Array} array The array to query.
   * @returns {*} Returns the first element of `array`.
   * @example
   *
   * _.head([1, 2, 3]);
   * // => 1
   *
   * _.head([]);
   * // => undefined
   */
  function head(array) {
    return (array && array.length) ? array[0] : undefined;
  }

  /**
   * The base implementation of `_.map` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function baseMap(collection, iteratee) {
    var index = -1,
        result = isArrayLike(collection) ? Array(collection.length) : [];

    baseEach(collection, function(value, key, collection) {
      result[++index] = iteratee(value, key, collection);
    });
    return result;
  }

  /**
   * Creates an array of values by running each element in `collection` thru
   * `iteratee`. The iteratee is invoked with three arguments:
   * (value, index|key, collection).
   *
   * Many lodash methods are guarded to work as iteratees for methods like
   * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
   *
   * The guarded methods are:
   * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
   * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
   * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
   * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * _.map([4, 8], square);
   * // => [16, 64]
   *
   * _.map({ 'a': 4, 'b': 8 }, square);
   * // => [16, 64] (iteration order is not guaranteed)
   *
   * var users = [
   *   { 'user': 'barney' },
   *   { 'user': 'fred' }
   * ];
   *
   * // The `_.property` iteratee shorthand.
   * _.map(users, 'user');
   * // => ['barney', 'fred']
   */
  function map(collection, iteratee) {
    var func = isArray(collection) ? arrayMap : baseMap;
    return func(collection, baseIteratee(iteratee, 3));
  }

  /**
   * Creates a flattened array of values by running each element in `collection`
   * thru `iteratee` and flattening the mapped results. The iteratee is invoked
   * with three arguments: (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * function duplicate(n) {
   *   return [n, n];
   * }
   *
   * _.flatMap([1, 2], duplicate);
   * // => [1, 1, 2, 2]
   */
  function flatMap(collection, iteratee) {
    return baseFlatten(map(collection, iteratee), 1);
  }

  /** Used as references for various `Number` constants. */
  var INFINITY$3 = 1 / 0;

  /**
   * This method is like `_.flatMap` except that it recursively flattens the
   * mapped results.
   *
   * @static
   * @memberOf _
   * @since 4.7.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * function duplicate(n) {
   *   return [[[n, n]]];
   * }
   *
   * _.flatMapDeep([1, 2], duplicate);
   * // => [1, 1, 2, 2]
   */
  function flatMapDeep(collection, iteratee) {
    return baseFlatten(map(collection, iteratee), INFINITY$3);
  }

  /**
   * This method is like `_.flatMap` except that it recursively flattens the
   * mapped results up to `depth` times.
   *
   * @static
   * @memberOf _
   * @since 4.7.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {number} [depth=1] The maximum recursion depth.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * function duplicate(n) {
   *   return [[[n, n]]];
   * }
   *
   * _.flatMapDepth([1, 2], duplicate, 2);
   * // => [[1, 1], [2, 2]]
   */
  function flatMapDepth(collection, iteratee, depth) {
    depth = depth === undefined ? 1 : toInteger(depth);
    return baseFlatten(map(collection, iteratee), depth);
  }

  /** Used as references for various `Number` constants. */
  var INFINITY$4 = 1 / 0;

  /**
   * Recursively flattens `array`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flattenDeep([1, [2, [3, [4]], 5]]);
   * // => [1, 2, 3, 4, 5]
   */
  function flattenDeep(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, INFINITY$4) : [];
  }

  /**
   * Recursively flatten `array` up to `depth` times.
   *
   * @static
   * @memberOf _
   * @since 4.4.0
   * @category Array
   * @param {Array} array The array to flatten.
   * @param {number} [depth=1] The maximum recursion depth.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * var array = [1, [2, [3, [4]], 5]];
   *
   * _.flattenDepth(array, 1);
   * // => [1, 2, [3, [4]], 5]
   *
   * _.flattenDepth(array, 2);
   * // => [1, 2, 3, [4], 5]
   */
  function flattenDepth(array, depth) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return [];
    }
    depth = depth === undefined ? 1 : toInteger(depth);
    return baseFlatten(array, depth);
  }

  /** Used to compose bitmasks for function metadata. */
  var WRAP_FLIP_FLAG$2 = 512;

  /**
   * Creates a function that invokes `func` with arguments reversed.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Function
   * @param {Function} func The function to flip arguments for.
   * @returns {Function} Returns the new flipped function.
   * @example
   *
   * var flipped = _.flip(function() {
   *   return _.toArray(arguments);
   * });
   *
   * flipped('a', 'b', 'c', 'd');
   * // => ['d', 'c', 'b', 'a']
   */
  function flip(func) {
    return createWrap(func, WRAP_FLIP_FLAG$2);
  }

  /**
   * Computes `number` rounded down to `precision`.
   *
   * @static
   * @memberOf _
   * @since 3.10.0
   * @category Math
   * @param {number} number The number to round down.
   * @param {number} [precision=0] The precision to round down to.
   * @returns {number} Returns the rounded down number.
   * @example
   *
   * _.floor(4.006);
   * // => 4
   *
   * _.floor(0.046, 2);
   * // => 0.04
   *
   * _.floor(4060, -2);
   * // => 4000
   */
  var floor = createRound('floor');

  /** Error message constants. */
  var FUNC_ERROR_TEXT$7 = 'Expected a function';

  /** Used to compose bitmasks for function metadata. */
  var WRAP_CURRY_FLAG$6 = 8,
      WRAP_PARTIAL_FLAG$5 = 32,
      WRAP_ARY_FLAG$4 = 128,
      WRAP_REARG_FLAG$2 = 256;

  /**
   * Creates a `_.flow` or `_.flowRight` function.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new flow function.
   */
  function createFlow(fromRight) {
    return flatRest(function(funcs) {
      var length = funcs.length,
          index = length,
          prereq = LodashWrapper.prototype.thru;

      if (fromRight) {
        funcs.reverse();
      }
      while (index--) {
        var func = funcs[index];
        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT$7);
        }
        if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
          var wrapper = new LodashWrapper([], true);
        }
      }
      index = wrapper ? index : length;
      while (++index < length) {
        func = funcs[index];

        var funcName = getFuncName(func),
            data = funcName == 'wrapper' ? getData(func) : undefined;

        if (data && isLaziable(data[0]) &&
              data[1] == (WRAP_ARY_FLAG$4 | WRAP_CURRY_FLAG$6 | WRAP_PARTIAL_FLAG$5 | WRAP_REARG_FLAG$2) &&
              !data[4].length && data[9] == 1
            ) {
          wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
        } else {
          wrapper = (func.length == 1 && isLaziable(func))
            ? wrapper[funcName]()
            : wrapper.thru(func);
        }
      }
      return function() {
        var args = arguments,
            value = args[0];

        if (wrapper && args.length == 1 && isArray(value)) {
          return wrapper.plant(value).value();
        }
        var index = 0,
            result = length ? funcs[index].apply(this, args) : value;

        while (++index < length) {
          result = funcs[index].call(this, result);
        }
        return result;
      };
    });
  }

  /**
   * Creates a function that returns the result of invoking the given functions
   * with the `this` binding of the created function, where each successive
   * invocation is supplied the return value of the previous.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Util
   * @param {...(Function|Function[])} [funcs] The functions to invoke.
   * @returns {Function} Returns the new composite function.
   * @see _.flowRight
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * var addSquare = _.flow([_.add, square]);
   * addSquare(1, 2);
   * // => 9
   */
  var flow = createFlow();

  /**
   * This method is like `_.flow` except that it creates a function that
   * invokes the given functions from right to left.
   *
   * @static
   * @since 3.0.0
   * @memberOf _
   * @category Util
   * @param {...(Function|Function[])} [funcs] The functions to invoke.
   * @returns {Function} Returns the new composite function.
   * @see _.flow
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * var addSquare = _.flowRight([square, _.add]);
   * addSquare(1, 2);
   * // => 9
   */
  var flowRight = createFlow(true);

  /**
   * Iterates over own and inherited enumerable string keyed properties of an
   * object and invokes `iteratee` for each property. The iteratee is invoked
   * with three arguments: (value, key, object). Iteratee functions may exit
   * iteration early by explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @since 0.3.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns `object`.
   * @see _.forInRight
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.forIn(new Foo, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
   */
  function forIn(object, iteratee) {
    return object == null
      ? object
      : baseFor(object, castFunction(iteratee), keysIn$1);
  }

  /**
   * This method is like `_.forIn` except that it iterates over properties of
   * `object` in the opposite order.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns `object`.
   * @see _.forIn
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.forInRight(new Foo, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
   */
  function forInRight(object, iteratee) {
    return object == null
      ? object
      : baseForRight(object, castFunction(iteratee), keysIn$1);
  }

  /**
   * Iterates over own enumerable string keyed properties of an object and
   * invokes `iteratee` for each property. The iteratee is invoked with three
   * arguments: (value, key, object). Iteratee functions may exit iteration
   * early by explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @since 0.3.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns `object`.
   * @see _.forOwnRight
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.forOwn(new Foo, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'a' then 'b' (iteration order is not guaranteed).
   */
  function forOwn(object, iteratee) {
    return object && baseForOwn(object, castFunction(iteratee));
  }

  /**
   * This method is like `_.forOwn` except that it iterates over properties of
   * `object` in the opposite order.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns `object`.
   * @see _.forOwn
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.forOwnRight(new Foo, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
   */
  function forOwnRight(object, iteratee) {
    return object && baseForOwnRight(object, castFunction(iteratee));
  }

  /**
   * The inverse of `_.toPairs`; this method returns an object composed
   * from key-value `pairs`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} pairs The key-value pairs.
   * @returns {Object} Returns the new object.
   * @example
   *
   * _.fromPairs([['a', 1], ['b', 2]]);
   * // => { 'a': 1, 'b': 2 }
   */
  function fromPairs(pairs) {
    var index = -1,
        length = pairs == null ? 0 : pairs.length,
        result = {};

    while (++index < length) {
      var pair = pairs[index];
      result[pair[0]] = pair[1];
    }
    return result;
  }

  /**
   * The base implementation of `_.functions` which creates an array of
   * `object` function property names filtered from `props`.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Array} props The property names to filter.
   * @returns {Array} Returns the function names.
   */
  function baseFunctions(object, props) {
    return arrayFilter(props, function(key) {
      return isFunction(object[key]);
    });
  }

  /**
   * Creates an array of function property names from own enumerable properties
   * of `object`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns the function names.
   * @see _.functionsIn
   * @example
   *
   * function Foo() {
   *   this.a = _.constant('a');
   *   this.b = _.constant('b');
   * }
   *
   * Foo.prototype.c = _.constant('c');
   *
   * _.functions(new Foo);
   * // => ['a', 'b']
   */
  function functions(object) {
    return object == null ? [] : baseFunctions(object, keys(object));
  }

  /**
   * Creates an array of function property names from own and inherited
   * enumerable properties of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns the function names.
   * @see _.functions
   * @example
   *
   * function Foo() {
   *   this.a = _.constant('a');
   *   this.b = _.constant('b');
   * }
   *
   * Foo.prototype.c = _.constant('c');
   *
   * _.functionsIn(new Foo);
   * // => ['a', 'b', 'c']
   */
  function functionsIn(object) {
    return object == null ? [] : baseFunctions(object, keysIn$1(object));
  }

  /** Used for built-in method references. */
  var objectProto$l = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$i = objectProto$l.hasOwnProperty;

  /**
   * Creates an object composed of keys generated from the results of running
   * each element of `collection` thru `iteratee`. The order of grouped values
   * is determined by the order they occur in `collection`. The corresponding
   * value of each key is an array of elements responsible for generating the
   * key. The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
   * @returns {Object} Returns the composed aggregate object.
   * @example
   *
   * _.groupBy([6.1, 4.2, 6.3], Math.floor);
   * // => { '4': [4.2], '6': [6.1, 6.3] }
   *
   * // The `_.property` iteratee shorthand.
   * _.groupBy(['one', 'two', 'three'], 'length');
   * // => { '3': ['one', 'two'], '5': ['three'] }
   */
  var groupBy = createAggregator(function(result, value, key) {
    if (hasOwnProperty$i.call(result, key)) {
      result[key].push(value);
    } else {
      baseAssignValue(result, key, [value]);
    }
  });

  /**
   * The base implementation of `_.gt` which doesn't coerce arguments.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if `value` is greater than `other`,
   *  else `false`.
   */
  function baseGt(value, other) {
    return value > other;
  }

  /**
   * Creates a function that performs a relational operation on two values.
   *
   * @private
   * @param {Function} operator The function to perform the operation.
   * @returns {Function} Returns the new relational operation function.
   */
  function createRelationalOperation(operator) {
    return function(value, other) {
      if (!(typeof value == 'string' && typeof other == 'string')) {
        value = toNumber(value);
        other = toNumber(other);
      }
      return operator(value, other);
    };
  }

  /**
   * Checks if `value` is greater than `other`.
   *
   * @static
   * @memberOf _
   * @since 3.9.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if `value` is greater than `other`,
   *  else `false`.
   * @see _.lt
   * @example
   *
   * _.gt(3, 1);
   * // => true
   *
   * _.gt(3, 3);
   * // => false
   *
   * _.gt(1, 3);
   * // => false
   */
  var gt = createRelationalOperation(baseGt);

  /**
   * Checks if `value` is greater than or equal to `other`.
   *
   * @static
   * @memberOf _
   * @since 3.9.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if `value` is greater than or equal to
   *  `other`, else `false`.
   * @see _.lte
   * @example
   *
   * _.gte(3, 1);
   * // => true
   *
   * _.gte(3, 3);
   * // => true
   *
   * _.gte(1, 3);
   * // => false
   */
  var gte = createRelationalOperation(function(value, other) {
    return value >= other;
  });

  /** Used for built-in method references. */
  var objectProto$m = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$j = objectProto$m.hasOwnProperty;

  /**
   * The base implementation of `_.has` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */
  function baseHas(object, key) {
    return object != null && hasOwnProperty$j.call(object, key);
  }

  /**
   * Checks if `path` is a direct property of `object`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = { 'a': { 'b': 2 } };
   * var other = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.has(object, 'a');
   * // => true
   *
   * _.has(object, 'a.b');
   * // => true
   *
   * _.has(object, ['a', 'b']);
   * // => true
   *
   * _.has(other, 'a');
   * // => false
   */
  function has(object, path) {
    return object != null && hasPath(object, path, baseHas);
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$8 = Math.max,
      nativeMin$5 = Math.min;

  /**
   * The base implementation of `_.inRange` which doesn't coerce arguments.
   *
   * @private
   * @param {number} number The number to check.
   * @param {number} start The start of the range.
   * @param {number} end The end of the range.
   * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
   */
  function baseInRange(number, start, end) {
    return number >= nativeMin$5(start, end) && number < nativeMax$8(start, end);
  }

  /**
   * Checks if `n` is between `start` and up to, but not including, `end`. If
   * `end` is not specified, it's set to `start` with `start` then set to `0`.
   * If `start` is greater than `end` the params are swapped to support
   * negative ranges.
   *
   * @static
   * @memberOf _
   * @since 3.3.0
   * @category Number
   * @param {number} number The number to check.
   * @param {number} [start=0] The start of the range.
   * @param {number} end The end of the range.
   * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
   * @see _.range, _.rangeRight
   * @example
   *
   * _.inRange(3, 2, 4);
   * // => true
   *
   * _.inRange(4, 8);
   * // => true
   *
   * _.inRange(4, 2);
   * // => false
   *
   * _.inRange(2, 2);
   * // => false
   *
   * _.inRange(1.2, 2);
   * // => true
   *
   * _.inRange(5.2, 4);
   * // => false
   *
   * _.inRange(-3, -2, -6);
   * // => true
   */
  function inRange(number, start, end) {
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    number = toNumber(number);
    return baseInRange(number, start, end);
  }

  /** `Object#toString` result references. */
  var stringTag$4 = '[object String]';

  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
  function isString(value) {
    return typeof value == 'string' ||
      (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag$4);
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Creates an array of the own enumerable string keyed property values of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property values.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.values(new Foo);
   * // => [1, 2] (iteration order is not guaranteed)
   *
   * _.values('hi');
   * // => ['h', 'i']
   */
  function values(object) {
    return object == null ? [] : baseValues(object, keys(object));
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$9 = Math.max;

  /**
   * Checks if `value` is in `collection`. If `collection` is a string, it's
   * checked for a substring of `value`, otherwise
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * is used for equality comparisons. If `fromIndex` is negative, it's used as
   * the offset from the end of `collection`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object|string} collection The collection to inspect.
   * @param {*} value The value to search for.
   * @param {number} [fromIndex=0] The index to search from.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
   * @returns {boolean} Returns `true` if `value` is found, else `false`.
   * @example
   *
   * _.includes([1, 2, 3], 1);
   * // => true
   *
   * _.includes([1, 2, 3], 1, 2);
   * // => false
   *
   * _.includes({ 'a': 1, 'b': 2 }, 1);
   * // => true
   *
   * _.includes('abcd', 'bc');
   * // => true
   */
  function includes(collection, value, fromIndex, guard) {
    collection = isArrayLike(collection) ? collection : values(collection);
    fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

    var length = collection.length;
    if (fromIndex < 0) {
      fromIndex = nativeMax$9(length + fromIndex, 0);
    }
    return isString(collection)
      ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
      : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$a = Math.max;

  /**
   * Gets the index at which the first occurrence of `value` is found in `array`
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons. If `fromIndex` is negative, it's used as the
   * offset from the end of `array`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   * @example
   *
   * _.indexOf([1, 2, 1, 2], 2);
   * // => 1
   *
   * // Search from the `fromIndex`.
   * _.indexOf([1, 2, 1, 2], 2, 2);
   * // => 3
   */
  function indexOf(array, value, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return -1;
    }
    var index = fromIndex == null ? 0 : toInteger(fromIndex);
    if (index < 0) {
      index = nativeMax$a(length + index, 0);
    }
    return baseIndexOf(array, value, index);
  }

  /**
   * Gets all but the last element of `array`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to query.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.initial([1, 2, 3]);
   * // => [1, 2]
   */
  function initial(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseSlice(array, 0, -1) : [];
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMin$6 = Math.min;

  /**
   * The base implementation of methods like `_.intersection`, without support
   * for iteratee shorthands, that accepts an array of arrays to inspect.
   *
   * @private
   * @param {Array} arrays The arrays to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of shared values.
   */
  function baseIntersection(arrays, iteratee, comparator) {
    var includes = comparator ? arrayIncludesWith : arrayIncludes,
        length = arrays[0].length,
        othLength = arrays.length,
        othIndex = othLength,
        caches = Array(othLength),
        maxLength = Infinity,
        result = [];

    while (othIndex--) {
      var array = arrays[othIndex];
      if (othIndex && iteratee) {
        array = arrayMap(array, baseUnary(iteratee));
      }
      maxLength = nativeMin$6(array.length, maxLength);
      caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
        ? new SetCache(othIndex && array)
        : undefined;
    }
    array = arrays[0];

    var index = -1,
        seen = caches[0];

    outer:
    while (++index < length && result.length < maxLength) {
      var value = array[index],
          computed = iteratee ? iteratee(value) : value;

      value = (comparator || value !== 0) ? value : 0;
      if (!(seen
            ? cacheHas(seen, computed)
            : includes(result, computed, comparator)
          )) {
        othIndex = othLength;
        while (--othIndex) {
          var cache = caches[othIndex];
          if (!(cache
                ? cacheHas(cache, computed)
                : includes(arrays[othIndex], computed, comparator))
              ) {
            continue outer;
          }
        }
        if (seen) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Casts `value` to an empty array if it's not an array like object.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Array|Object} Returns the cast array-like object.
   */
  function castArrayLikeObject(value) {
    return isArrayLikeObject(value) ? value : [];
  }

  /**
   * Creates an array of unique values that are included in all given arrays
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons. The order and references of result values are
   * determined by the first array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @returns {Array} Returns the new array of intersecting values.
   * @example
   *
   * _.intersection([2, 1], [2, 3]);
   * // => [2]
   */
  var intersection = baseRest(function(arrays) {
    var mapped = arrayMap(arrays, castArrayLikeObject);
    return (mapped.length && mapped[0] === arrays[0])
      ? baseIntersection(mapped)
      : [];
  });

  /**
   * This method is like `_.intersection` except that it accepts `iteratee`
   * which is invoked for each element of each `arrays` to generate the criterion
   * by which they're compared. The order and references of result values are
   * determined by the first array. The iteratee is invoked with one argument:
   * (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {Array} Returns the new array of intersecting values.
   * @example
   *
   * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
   * // => [2.1]
   *
   * // The `_.property` iteratee shorthand.
   * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
   * // => [{ 'x': 1 }]
   */
  var intersectionBy = baseRest(function(arrays) {
    var iteratee = last(arrays),
        mapped = arrayMap(arrays, castArrayLikeObject);

    if (iteratee === last(mapped)) {
      iteratee = undefined;
    } else {
      mapped.pop();
    }
    return (mapped.length && mapped[0] === arrays[0])
      ? baseIntersection(mapped, baseIteratee(iteratee, 2))
      : [];
  });

  /**
   * This method is like `_.intersection` except that it accepts `comparator`
   * which is invoked to compare elements of `arrays`. The order and references
   * of result values are determined by the first array. The comparator is
   * invoked with two arguments: (arrVal, othVal).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of intersecting values.
   * @example
   *
   * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
   * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
   *
   * _.intersectionWith(objects, others, _.isEqual);
   * // => [{ 'x': 1, 'y': 2 }]
   */
  var intersectionWith = baseRest(function(arrays) {
    var comparator = last(arrays),
        mapped = arrayMap(arrays, castArrayLikeObject);

    comparator = typeof comparator == 'function' ? comparator : undefined;
    if (comparator) {
      mapped.pop();
    }
    return (mapped.length && mapped[0] === arrays[0])
      ? baseIntersection(mapped, undefined, comparator)
      : [];
  });

  /**
   * The base implementation of `_.invert` and `_.invertBy` which inverts
   * `object` with values transformed by `iteratee` and set by `setter`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform values.
   * @param {Object} accumulator The initial inverted object.
   * @returns {Function} Returns `accumulator`.
   */
  function baseInverter(object, setter, iteratee, accumulator) {
    baseForOwn(object, function(value, key, object) {
      setter(accumulator, iteratee(value), key, object);
    });
    return accumulator;
  }

  /**
   * Creates a function like `_.invertBy`.
   *
   * @private
   * @param {Function} setter The function to set accumulator values.
   * @param {Function} toIteratee The function to resolve iteratees.
   * @returns {Function} Returns the new inverter function.
   */
  function createInverter(setter, toIteratee) {
    return function(object, iteratee) {
      return baseInverter(object, setter, toIteratee(iteratee), {});
    };
  }

  /** Used for built-in method references. */
  var objectProto$n = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$2 = objectProto$n.toString;

  /**
   * Creates an object composed of the inverted keys and values of `object`.
   * If `object` contains duplicate values, subsequent values overwrite
   * property assignments of previous values.
   *
   * @static
   * @memberOf _
   * @since 0.7.0
   * @category Object
   * @param {Object} object The object to invert.
   * @returns {Object} Returns the new inverted object.
   * @example
   *
   * var object = { 'a': 1, 'b': 2, 'c': 1 };
   *
   * _.invert(object);
   * // => { '1': 'c', '2': 'b' }
   */
  var invert = createInverter(function(result, value, key) {
    if (value != null &&
        typeof value.toString != 'function') {
      value = nativeObjectToString$2.call(value);
    }

    result[value] = key;
  }, constant(identity));

  /** Used for built-in method references. */
  var objectProto$o = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$k = objectProto$o.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$3 = objectProto$o.toString;

  /**
   * This method is like `_.invert` except that the inverted object is generated
   * from the results of running each element of `object` thru `iteratee`. The
   * corresponding inverted value of each inverted key is an array of keys
   * responsible for generating the inverted value. The iteratee is invoked
   * with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.1.0
   * @category Object
   * @param {Object} object The object to invert.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {Object} Returns the new inverted object.
   * @example
   *
   * var object = { 'a': 1, 'b': 2, 'c': 1 };
   *
   * _.invertBy(object);
   * // => { '1': ['a', 'c'], '2': ['b'] }
   *
   * _.invertBy(object, function(value) {
   *   return 'group' + value;
   * });
   * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
   */
  var invertBy = createInverter(function(result, value, key) {
    if (value != null &&
        typeof value.toString != 'function') {
      value = nativeObjectToString$3.call(value);
    }

    if (hasOwnProperty$k.call(result, value)) {
      result[value].push(key);
    } else {
      result[value] = [key];
    }
  }, baseIteratee);

  /**
   * Gets the parent value at `path` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} path The path to get the parent value of.
   * @returns {*} Returns the parent value.
   */
  function parent(object, path) {
    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
  }

  /**
   * The base implementation of `_.invoke` without support for individual
   * method arguments.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the method to invoke.
   * @param {Array} args The arguments to invoke the method with.
   * @returns {*} Returns the result of the invoked method.
   */
  function baseInvoke(object, path, args) {
    path = castPath(path, object);
    object = parent(object, path);
    var func = object == null ? object : object[toKey(last(path))];
    return func == null ? undefined : apply(func, object, args);
  }

  /**
   * Invokes the method at `path` of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the method to invoke.
   * @param {...*} [args] The arguments to invoke the method with.
   * @returns {*} Returns the result of the invoked method.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
   *
   * _.invoke(object, 'a[0].b.c.slice', 1, 3);
   * // => [2, 3]
   */
  var invoke = baseRest(baseInvoke);

  /**
   * Invokes the method at `path` of each element in `collection`, returning
   * an array of the results of each invoked method. Any additional arguments
   * are provided to each invoked method. If `path` is a function, it's invoked
   * for, and `this` bound to, each element in `collection`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Array|Function|string} path The path of the method to invoke or
   *  the function invoked per iteration.
   * @param {...*} [args] The arguments to invoke each method with.
   * @returns {Array} Returns the array of results.
   * @example
   *
   * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
   * // => [[1, 5, 7], [1, 2, 3]]
   *
   * _.invokeMap([123, 456], String.prototype.split, '');
   * // => [['1', '2', '3'], ['4', '5', '6']]
   */
  var invokeMap = baseRest(function(collection, path, args) {
    var index = -1,
        isFunc = typeof path == 'function',
        result = isArrayLike(collection) ? Array(collection.length) : [];

    baseEach(collection, function(value) {
      result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
    });
    return result;
  });

  var arrayBufferTag$4 = '[object ArrayBuffer]';

  /**
   * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
   */
  function baseIsArrayBuffer(value) {
    return isObjectLike(value) && baseGetTag(value) == arrayBufferTag$4;
  }

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer;

  /**
   * Checks if `value` is classified as an `ArrayBuffer` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
   * @example
   *
   * _.isArrayBuffer(new ArrayBuffer(2));
   * // => true
   *
   * _.isArrayBuffer(new Array(2));
   * // => false
   */
  var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

  /** `Object#toString` result references. */
  var boolTag$4 = '[object Boolean]';

  /**
   * Checks if `value` is classified as a boolean primitive or object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
   * @example
   *
   * _.isBoolean(false);
   * // => true
   *
   * _.isBoolean(null);
   * // => false
   */
  function isBoolean(value) {
    return value === true || value === false ||
      (isObjectLike(value) && baseGetTag(value) == boolTag$4);
  }

  /** `Object#toString` result references. */
  var dateTag$4 = '[object Date]';

  /**
   * The base implementation of `_.isDate` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
   */
  function baseIsDate(value) {
    return isObjectLike(value) && baseGetTag(value) == dateTag$4;
  }

  /* Node.js helper references. */
  var nodeIsDate = nodeUtil && nodeUtil.isDate;

  /**
   * Checks if `value` is classified as a `Date` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
   * @example
   *
   * _.isDate(new Date);
   * // => true
   *
   * _.isDate('Mon April 23 2012');
   * // => false
   */
  var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

  /**
   * Checks if `value` is likely a DOM element.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
   * @example
   *
   * _.isElement(document.body);
   * // => true
   *
   * _.isElement('<body>');
   * // => false
   */
  function isElement$1(value) {
    return isObjectLike(value) && value.nodeType === 1 && !isPlainObject$2(value);
  }

  /** `Object#toString` result references. */
  var mapTag$7 = '[object Map]',
      setTag$7 = '[object Set]';

  /** Used for built-in method references. */
  var objectProto$p = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$l = objectProto$p.hasOwnProperty;

  /**
   * Checks if `value` is an empty object, collection, map, or set.
   *
   * Objects are considered empty if they have no own enumerable string keyed
   * properties.
   *
   * Array-like values such as `arguments` objects, arrays, buffers, strings, or
   * jQuery-like collections are considered empty if they have a `length` of `0`.
   * Similarly, maps and sets are considered empty if they have a `size` of `0`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is empty, else `false`.
   * @example
   *
   * _.isEmpty(null);
   * // => true
   *
   * _.isEmpty(true);
   * // => true
   *
   * _.isEmpty(1);
   * // => true
   *
   * _.isEmpty([1, 2, 3]);
   * // => false
   *
   * _.isEmpty({ 'a': 1 });
   * // => false
   */
  function isEmpty(value) {
    if (value == null) {
      return true;
    }
    if (isArrayLike(value) &&
        (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
          isBuffer(value) || isTypedArray(value) || isArguments(value))) {
      return !value.length;
    }
    var tag = getTag$1(value);
    if (tag == mapTag$7 || tag == setTag$7) {
      return !value.size;
    }
    if (isPrototype(value)) {
      return !baseKeys(value).length;
    }
    for (var key in value) {
      if (hasOwnProperty$l.call(value, key)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Performs a deep comparison between two values to determine if they are
   * equivalent.
   *
   * **Note:** This method supports comparing arrays, array buffers, booleans,
   * date objects, error objects, maps, numbers, `Object` objects, regexes,
   * sets, strings, symbols, and typed arrays. `Object` objects are compared
   * by their own, not inherited, enumerable properties. Functions and DOM
   * nodes are compared by strict equality, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.isEqual(object, other);
   * // => true
   *
   * object === other;
   * // => false
   */
  function isEqual(value, other) {
    return baseIsEqual(value, other);
  }

  /**
   * This method is like `_.isEqual` except that it accepts `customizer` which
   * is invoked to compare values. If `customizer` returns `undefined`, comparisons
   * are handled by the method instead. The `customizer` is invoked with up to
   * six arguments: (objValue, othValue [, index|key, object, other, stack]).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {Function} [customizer] The function to customize comparisons.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * function isGreeting(value) {
   *   return /^h(?:i|ello)$/.test(value);
   * }
   *
   * function customizer(objValue, othValue) {
   *   if (isGreeting(objValue) && isGreeting(othValue)) {
   *     return true;
   *   }
   * }
   *
   * var array = ['hello', 'goodbye'];
   * var other = ['hi', 'goodbye'];
   *
   * _.isEqualWith(array, other, customizer);
   * // => true
   */
  function isEqualWith(value, other, customizer) {
    customizer = typeof customizer == 'function' ? customizer : undefined;
    var result = customizer ? customizer(value, other) : undefined;
    return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsFinite$1 = root$1.isFinite;

  /**
   * Checks if `value` is a finite primitive number.
   *
   * **Note:** This method is based on
   * [`Number.isFinite`](https://mdn.io/Number/isFinite).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
   * @example
   *
   * _.isFinite(3);
   * // => true
   *
   * _.isFinite(Number.MIN_VALUE);
   * // => true
   *
   * _.isFinite(Infinity);
   * // => false
   *
   * _.isFinite('3');
   * // => false
   */
  function isFinite(value) {
    return typeof value == 'number' && nativeIsFinite$1(value);
  }

  /**
   * Checks if `value` is an integer.
   *
   * **Note:** This method is based on
   * [`Number.isInteger`](https://mdn.io/Number/isInteger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
   * @example
   *
   * _.isInteger(3);
   * // => true
   *
   * _.isInteger(Number.MIN_VALUE);
   * // => false
   *
   * _.isInteger(Infinity);
   * // => false
   *
   * _.isInteger('3');
   * // => false
   */
  function isInteger(value) {
    return typeof value == 'number' && value == toInteger(value);
  }

  /**
   * Performs a partial deep comparison between `object` and `source` to
   * determine if `object` contains equivalent property values.
   *
   * **Note:** This method is equivalent to `_.matches` when `source` is
   * partially applied.
   *
   * Partial comparisons will match empty array and empty object `source`
   * values against any array or object value, respectively. See `_.isEqual`
   * for a list of supported value comparisons.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property values to match.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   *
   * _.isMatch(object, { 'b': 2 });
   * // => true
   *
   * _.isMatch(object, { 'b': 1 });
   * // => false
   */
  function isMatch(object, source) {
    return object === source || baseIsMatch(object, source, getMatchData(source));
  }

  /**
   * This method is like `_.isMatch` except that it accepts `customizer` which
   * is invoked to compare values. If `customizer` returns `undefined`, comparisons
   * are handled by the method instead. The `customizer` is invoked with five
   * arguments: (objValue, srcValue, index|key, object, source).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property values to match.
   * @param {Function} [customizer] The function to customize comparisons.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   * @example
   *
   * function isGreeting(value) {
   *   return /^h(?:i|ello)$/.test(value);
   * }
   *
   * function customizer(objValue, srcValue) {
   *   if (isGreeting(objValue) && isGreeting(srcValue)) {
   *     return true;
   *   }
   * }
   *
   * var object = { 'greeting': 'hello' };
   * var source = { 'greeting': 'hi' };
   *
   * _.isMatchWith(object, source, customizer);
   * // => true
   */
  function isMatchWith(object, source, customizer) {
    customizer = typeof customizer == 'function' ? customizer : undefined;
    return baseIsMatch(object, source, getMatchData(source), customizer);
  }

  /** `Object#toString` result references. */
  var numberTag$4 = '[object Number]';

  /**
   * Checks if `value` is classified as a `Number` primitive or object.
   *
   * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
   * classified as numbers, use the `_.isFinite` method.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a number, else `false`.
   * @example
   *
   * _.isNumber(3);
   * // => true
   *
   * _.isNumber(Number.MIN_VALUE);
   * // => true
   *
   * _.isNumber(Infinity);
   * // => true
   *
   * _.isNumber('3');
   * // => false
   */
  function isNumber(value) {
    return typeof value == 'number' ||
      (isObjectLike(value) && baseGetTag(value) == numberTag$4);
  }

  /**
   * Checks if `value` is `NaN`.
   *
   * **Note:** This method is based on
   * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
   * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
   * `undefined` and other non-number values.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   * @example
   *
   * _.isNaN(NaN);
   * // => true
   *
   * _.isNaN(new Number(NaN));
   * // => true
   *
   * isNaN(undefined);
   * // => true
   *
   * _.isNaN(undefined);
   * // => false
   */
  function isNaN$1(value) {
    // An `NaN` primitive is the only value that is not equal to itself.
    // Perform the `toStringTag` check first to avoid errors with some
    // ActiveX objects in IE.
    return isNumber(value) && value != +value;
  }

  /**
   * Checks if `func` is capable of being masked.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
   */
  var isMaskable = coreJsData ? isFunction : stubFalse;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.';

  /**
   * Checks if `value` is a pristine native function.
   *
   * **Note:** This method can't reliably detect native functions in the presence
   * of the core-js package because core-js circumvents this kind of detection.
   * Despite multiple requests, the core-js maintainer has made it clear: any
   * attempt to fix the detection will be obstructed. As a result, we're left
   * with little choice but to throw an error. Unfortunately, this also affects
   * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
   * which rely on core-js.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   * @example
   *
   * _.isNative(Array.prototype.push);
   * // => true
   *
   * _.isNative(_);
   * // => false
   */
  function isNative(value) {
    if (isMaskable(value)) {
      throw new Error(CORE_ERROR_TEXT);
    }
    return baseIsNative(value);
  }

  /**
   * Checks if `value` is `null` or `undefined`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
   * @example
   *
   * _.isNil(null);
   * // => true
   *
   * _.isNil(void 0);
   * // => true
   *
   * _.isNil(NaN);
   * // => false
   */
  function isNil(value) {
    return value == null;
  }

  /**
   * Checks if `value` is `null`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
   * @example
   *
   * _.isNull(null);
   * // => true
   *
   * _.isNull(void 0);
   * // => false
   */
  function isNull(value) {
    return value === null;
  }

  /** `Object#toString` result references. */
  var regexpTag$4 = '[object RegExp]';

  /**
   * The base implementation of `_.isRegExp` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
   */
  function baseIsRegExp(value) {
    return isObjectLike(value) && baseGetTag(value) == regexpTag$4;
  }

  /* Node.js helper references. */
  var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

  /**
   * Checks if `value` is classified as a `RegExp` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
   * @example
   *
   * _.isRegExp(/abc/);
   * // => true
   *
   * _.isRegExp('/abc/');
   * // => false
   */
  var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$2 = 9007199254740991;

  /**
   * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
   * double precision number which isn't the result of a rounded unsafe integer.
   *
   * **Note:** This method is based on
   * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
   * @example
   *
   * _.isSafeInteger(3);
   * // => true
   *
   * _.isSafeInteger(Number.MIN_VALUE);
   * // => false
   *
   * _.isSafeInteger(Infinity);
   * // => false
   *
   * _.isSafeInteger('3');
   * // => false
   */
  function isSafeInteger(value) {
    return isInteger(value) && value >= -MAX_SAFE_INTEGER$2 && value <= MAX_SAFE_INTEGER$2;
  }

  /**
   * Checks if `value` is `undefined`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
   * @example
   *
   * _.isUndefined(void 0);
   * // => true
   *
   * _.isUndefined(null);
   * // => false
   */
  function isUndefined(value) {
    return value === undefined;
  }

  /** `Object#toString` result references. */
  var weakMapTag$3 = '[object WeakMap]';

  /**
   * Checks if `value` is classified as a `WeakMap` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
   * @example
   *
   * _.isWeakMap(new WeakMap);
   * // => true
   *
   * _.isWeakMap(new Map);
   * // => false
   */
  function isWeakMap(value) {
    return isObjectLike(value) && getTag$1(value) == weakMapTag$3;
  }

  /** `Object#toString` result references. */
  var weakSetTag = '[object WeakSet]';

  /**
   * Checks if `value` is classified as a `WeakSet` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
   * @example
   *
   * _.isWeakSet(new WeakSet);
   * // => true
   *
   * _.isWeakSet(new Set);
   * // => false
   */
  function isWeakSet(value) {
    return isObjectLike(value) && baseGetTag(value) == weakSetTag;
  }

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$4 = 1;

  /**
   * Creates a function that invokes `func` with the arguments of the created
   * function. If `func` is a property name, the created function returns the
   * property value for a given element. If `func` is an array or object, the
   * created function returns `true` for elements that contain the equivalent
   * source properties, otherwise it returns `false`.
   *
   * @static
   * @since 4.0.0
   * @memberOf _
   * @category Util
   * @param {*} [func=_.identity] The value to convert to a callback.
   * @returns {Function} Returns the callback.
   * @example
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36, 'active': true },
   *   { 'user': 'fred',   'age': 40, 'active': false }
   * ];
   *
   * // The `_.matches` iteratee shorthand.
   * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
   * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.filter(users, _.iteratee(['user', 'fred']));
   * // => [{ 'user': 'fred', 'age': 40 }]
   *
   * // The `_.property` iteratee shorthand.
   * _.map(users, _.iteratee('user'));
   * // => ['barney', 'fred']
   *
   * // Create custom iteratee shorthands.
   * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
   *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
   *     return func.test(string);
   *   };
   * });
   *
   * _.filter(['abc', 'def'], /ef/);
   * // => ['def']
   */
  function iteratee(func) {
    return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG$4));
  }

  /** Used for built-in method references. */
  var arrayProto$1 = Array.prototype;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeJoin = arrayProto$1.join;

  /**
   * Converts all elements in `array` into a string separated by `separator`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to convert.
   * @param {string} [separator=','] The element separator.
   * @returns {string} Returns the joined string.
   * @example
   *
   * _.join(['a', 'b', 'c'], '~');
   * // => 'a~b~c'
   */
  function join(array, separator) {
    return array == null ? '' : nativeJoin.call(array, separator);
  }

  /**
   * Converts `string` to
   * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the kebab cased string.
   * @example
   *
   * _.kebabCase('Foo Bar');
   * // => 'foo-bar'
   *
   * _.kebabCase('fooBar');
   * // => 'foo-bar'
   *
   * _.kebabCase('__FOO_BAR__');
   * // => 'foo-bar'
   */
  var kebabCase = createCompounder(function(result, word, index) {
    return result + (index ? '-' : '') + word.toLowerCase();
  });

  /**
   * Creates an object composed of keys generated from the results of running
   * each element of `collection` thru `iteratee`. The corresponding value of
   * each key is the last element responsible for generating the key. The
   * iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
   * @returns {Object} Returns the composed aggregate object.
   * @example
   *
   * var array = [
   *   { 'dir': 'left', 'code': 97 },
   *   { 'dir': 'right', 'code': 100 }
   * ];
   *
   * _.keyBy(array, function(o) {
   *   return String.fromCharCode(o.code);
   * });
   * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
   *
   * _.keyBy(array, 'dir');
   * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
   */
  var keyBy = createAggregator(function(result, value, key) {
    baseAssignValue(result, key, value);
  });

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$b = Math.max,
      nativeMin$7 = Math.min;

  /**
   * This method is like `_.indexOf` except that it iterates over elements of
   * `array` from right to left.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} [fromIndex=array.length-1] The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   * @example
   *
   * _.lastIndexOf([1, 2, 1, 2], 2);
   * // => 3
   *
   * // Search from the `fromIndex`.
   * _.lastIndexOf([1, 2, 1, 2], 2, 2);
   * // => 1
   */
  function lastIndexOf(array, value, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return -1;
    }
    var index = length;
    if (fromIndex !== undefined) {
      index = toInteger(fromIndex);
      index = index < 0 ? nativeMax$b(length + index, 0) : nativeMin$7(index, length - 1);
    }
    return value === value
      ? strictLastIndexOf(array, value, index)
      : baseFindIndex(array, baseIsNaN, index, true);
  }

  /**
   * Converts `string`, as space separated words, to lower case.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the lower cased string.
   * @example
   *
   * _.lowerCase('--Foo-Bar--');
   * // => 'foo bar'
   *
   * _.lowerCase('fooBar');
   * // => 'foo bar'
   *
   * _.lowerCase('__FOO_BAR__');
   * // => 'foo bar'
   */
  var lowerCase = createCompounder(function(result, word, index) {
    return result + (index ? ' ' : '') + word.toLowerCase();
  });

  /**
   * Converts the first character of `string` to lower case.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.lowerFirst('Fred');
   * // => 'fred'
   *
   * _.lowerFirst('FRED');
   * // => 'fRED'
   */
  var lowerFirst = createCaseFirst('toLowerCase');

  /**
   * The base implementation of `_.lt` which doesn't coerce arguments.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if `value` is less than `other`,
   *  else `false`.
   */
  function baseLt(value, other) {
    return value < other;
  }

  /**
   * Checks if `value` is less than `other`.
   *
   * @static
   * @memberOf _
   * @since 3.9.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if `value` is less than `other`,
   *  else `false`.
   * @see _.gt
   * @example
   *
   * _.lt(1, 3);
   * // => true
   *
   * _.lt(3, 3);
   * // => false
   *
   * _.lt(3, 1);
   * // => false
   */
  var lt = createRelationalOperation(baseLt);

  /**
   * Checks if `value` is less than or equal to `other`.
   *
   * @static
   * @memberOf _
   * @since 3.9.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if `value` is less than or equal to
   *  `other`, else `false`.
   * @see _.gte
   * @example
   *
   * _.lte(1, 3);
   * // => true
   *
   * _.lte(3, 3);
   * // => true
   *
   * _.lte(3, 1);
   * // => false
   */
  var lte = createRelationalOperation(function(value, other) {
    return value <= other;
  });

  /**
   * The opposite of `_.mapValues`; this method creates an object with the
   * same values as `object` and keys generated by running each own enumerable
   * string keyed property of `object` thru `iteratee`. The iteratee is invoked
   * with three arguments: (value, key, object).
   *
   * @static
   * @memberOf _
   * @since 3.8.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns the new mapped object.
   * @see _.mapValues
   * @example
   *
   * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
   *   return key + value;
   * });
   * // => { 'a1': 1, 'b2': 2 }
   */
  function mapKeys(object, iteratee) {
    var result = {};
    iteratee = baseIteratee(iteratee, 3);

    baseForOwn(object, function(value, key, object) {
      baseAssignValue(result, iteratee(value, key, object), value);
    });
    return result;
  }

  /**
   * Creates an object with the same keys as `object` and values generated
   * by running each own enumerable string keyed property of `object` thru
   * `iteratee`. The iteratee is invoked with three arguments:
   * (value, key, object).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns the new mapped object.
   * @see _.mapKeys
   * @example
   *
   * var users = {
   *   'fred':    { 'user': 'fred',    'age': 40 },
   *   'pebbles': { 'user': 'pebbles', 'age': 1 }
   * };
   *
   * _.mapValues(users, function(o) { return o.age; });
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   *
   * // The `_.property` iteratee shorthand.
   * _.mapValues(users, 'age');
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   */
  function mapValues(object, iteratee) {
    var result = {};
    iteratee = baseIteratee(iteratee, 3);

    baseForOwn(object, function(value, key, object) {
      baseAssignValue(result, key, iteratee(value, key, object));
    });
    return result;
  }

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$5 = 1;

  /**
   * Creates a function that performs a partial deep comparison between a given
   * object and `source`, returning `true` if the given object has equivalent
   * property values, else `false`.
   *
   * **Note:** The created function is equivalent to `_.isMatch` with `source`
   * partially applied.
   *
   * Partial comparisons will match empty array and empty object `source`
   * values against any array or object value, respectively. See `_.isEqual`
   * for a list of supported value comparisons.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Util
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   * @example
   *
   * var objects = [
   *   { 'a': 1, 'b': 2, 'c': 3 },
   *   { 'a': 4, 'b': 5, 'c': 6 }
   * ];
   *
   * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
   * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
   */
  function matches(source) {
    return baseMatches(baseClone(source, CLONE_DEEP_FLAG$5));
  }

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$6 = 1;

  /**
   * Creates a function that performs a partial deep comparison between the
   * value at `path` of a given object to `srcValue`, returning `true` if the
   * object value is equivalent, else `false`.
   *
   * **Note:** Partial comparisons will match empty array and empty object
   * `srcValue` values against any array or object value, respectively. See
   * `_.isEqual` for a list of supported value comparisons.
   *
   * @static
   * @memberOf _
   * @since 3.2.0
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   * @example
   *
   * var objects = [
   *   { 'a': 1, 'b': 2, 'c': 3 },
   *   { 'a': 4, 'b': 5, 'c': 6 }
   * ];
   *
   * _.find(objects, _.matchesProperty('a', 4));
   * // => { 'a': 4, 'b': 5, 'c': 6 }
   */
  function matchesProperty(path, srcValue) {
    return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG$6));
  }

  /**
   * The base implementation of methods like `_.max` and `_.min` which accepts a
   * `comparator` to determine the extremum value.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The iteratee invoked per iteration.
   * @param {Function} comparator The comparator used to compare values.
   * @returns {*} Returns the extremum value.
   */
  function baseExtremum(array, iteratee, comparator) {
    var index = -1,
        length = array.length;

    while (++index < length) {
      var value = array[index],
          current = iteratee(value);

      if (current != null && (computed === undefined
            ? (current === current && !isSymbol(current))
            : comparator(current, computed)
          )) {
        var computed = current,
            result = value;
      }
    }
    return result;
  }

  /**
   * Computes the maximum value of `array`. If `array` is empty or falsey,
   * `undefined` is returned.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the maximum value.
   * @example
   *
   * _.max([4, 2, 8, 6]);
   * // => 8
   *
   * _.max([]);
   * // => undefined
   */
  function max(array) {
    return (array && array.length)
      ? baseExtremum(array, identity, baseGt)
      : undefined;
  }

  /**
   * This method is like `_.max` except that it accepts `iteratee` which is
   * invoked for each element in `array` to generate the criterion by which
   * the value is ranked. The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Math
   * @param {Array} array The array to iterate over.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {*} Returns the maximum value.
   * @example
   *
   * var objects = [{ 'n': 1 }, { 'n': 2 }];
   *
   * _.maxBy(objects, function(o) { return o.n; });
   * // => { 'n': 2 }
   *
   * // The `_.property` iteratee shorthand.
   * _.maxBy(objects, 'n');
   * // => { 'n': 2 }
   */
  function maxBy(array, iteratee) {
    return (array && array.length)
      ? baseExtremum(array, baseIteratee(iteratee, 2), baseGt)
      : undefined;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /** Used as references for various `Number` constants. */
  var NAN$2 = 0 / 0;

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN$2;
  }

  /**
   * Computes the mean of the values in `array`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {number} Returns the mean.
   * @example
   *
   * _.mean([4, 2, 8, 6]);
   * // => 5
   */
  function mean(array) {
    return baseMean(array, identity);
  }

  /**
   * This method is like `_.mean` except that it accepts `iteratee` which is
   * invoked for each element in `array` to generate the value to be averaged.
   * The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.7.0
   * @category Math
   * @param {Array} array The array to iterate over.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {number} Returns the mean.
   * @example
   *
   * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
   *
   * _.meanBy(objects, function(o) { return o.n; });
   * // => 5
   *
   * // The `_.property` iteratee shorthand.
   * _.meanBy(objects, 'n');
   * // => 5
   */
  function meanBy(array, iteratee) {
    return baseMean(array, baseIteratee(iteratee, 2));
  }

  /**
   * This method is like `_.assign` except that it recursively merges own and
   * inherited enumerable string keyed properties of source objects into the
   * destination object. Source properties that resolve to `undefined` are
   * skipped if a destination value exists. Array and plain object properties
   * are merged recursively. Other objects and value types are overridden by
   * assignment. Source objects are applied from left to right. Subsequent
   * sources overwrite property assignments of previous sources.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 0.5.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var object = {
   *   'a': [{ 'b': 2 }, { 'd': 4 }]
   * };
   *
   * var other = {
   *   'a': [{ 'c': 3 }, { 'e': 5 }]
   * };
   *
   * _.merge(object, other);
   * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
   */
  var merge = createAssigner(function(object, source, srcIndex) {
    baseMerge(object, source, srcIndex);
  });

  /**
   * Creates a function that invokes the method at `path` of a given object.
   * Any additional arguments are provided to the invoked method.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Util
   * @param {Array|string} path The path of the method to invoke.
   * @param {...*} [args] The arguments to invoke the method with.
   * @returns {Function} Returns the new invoker function.
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': _.constant(2) } },
   *   { 'a': { 'b': _.constant(1) } }
   * ];
   *
   * _.map(objects, _.method('a.b'));
   * // => [2, 1]
   *
   * _.map(objects, _.method(['a', 'b']));
   * // => [2, 1]
   */
  var method = baseRest(function(path, args) {
    return function(object) {
      return baseInvoke(object, path, args);
    };
  });

  /**
   * The opposite of `_.method`; this method creates a function that invokes
   * the method at a given path of `object`. Any additional arguments are
   * provided to the invoked method.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Util
   * @param {Object} object The object to query.
   * @param {...*} [args] The arguments to invoke the method with.
   * @returns {Function} Returns the new invoker function.
   * @example
   *
   * var array = _.times(3, _.constant),
   *     object = { 'a': array, 'b': array, 'c': array };
   *
   * _.map(['a[2]', 'c[0]'], _.methodOf(object));
   * // => [2, 0]
   *
   * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
   * // => [2, 0]
   */
  var methodOf = baseRest(function(object, args) {
    return function(path) {
      return baseInvoke(object, path, args);
    };
  });

  /**
   * Computes the minimum value of `array`. If `array` is empty or falsey,
   * `undefined` is returned.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the minimum value.
   * @example
   *
   * _.min([4, 2, 8, 6]);
   * // => 2
   *
   * _.min([]);
   * // => undefined
   */
  function min(array) {
    return (array && array.length)
      ? baseExtremum(array, identity, baseLt)
      : undefined;
  }

  /**
   * This method is like `_.min` except that it accepts `iteratee` which is
   * invoked for each element in `array` to generate the criterion by which
   * the value is ranked. The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Math
   * @param {Array} array The array to iterate over.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {*} Returns the minimum value.
   * @example
   *
   * var objects = [{ 'n': 1 }, { 'n': 2 }];
   *
   * _.minBy(objects, function(o) { return o.n; });
   * // => { 'n': 1 }
   *
   * // The `_.property` iteratee shorthand.
   * _.minBy(objects, 'n');
   * // => { 'n': 1 }
   */
  function minBy(array, iteratee) {
    return (array && array.length)
      ? baseExtremum(array, baseIteratee(iteratee, 2), baseLt)
      : undefined;
  }

  /**
   * Adds all own enumerable string keyed function properties of a source
   * object to the destination object. If `object` is a function, then methods
   * are added to its prototype as well.
   *
   * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
   * avoid conflicts caused by modifying the original.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {Function|Object} [object=lodash] The destination object.
   * @param {Object} source The object of functions to add.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
   * @returns {Function|Object} Returns `object`.
   * @example
   *
   * function vowels(string) {
   *   return _.filter(string, function(v) {
   *     return /[aeiou]/i.test(v);
   *   });
   * }
   *
   * _.mixin({ 'vowels': vowels });
   * _.vowels('fred');
   * // => ['e']
   *
   * _('fred').vowels().value();
   * // => ['e']
   *
   * _.mixin({ 'vowels': vowels }, { 'chain': false });
   * _('fred').vowels();
   * // => ['e']
   */
  function mixin(object, source, options) {
    var props = keys(source),
        methodNames = baseFunctions(source, props);

    var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
        isFunc = isFunction(object);

    arrayEach(methodNames, function(methodName) {
      var func = source[methodName];
      object[methodName] = func;
      if (isFunc) {
        object.prototype[methodName] = function() {
          var chainAll = this.__chain__;
          if (chain || chainAll) {
            var result = object(this.__wrapped__),
                actions = result.__actions__ = copyArray(this.__actions__);

            actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
            result.__chain__ = chainAll;
            return result;
          }
          return func.apply(object, arrayPush([this.value()], arguments));
        };
      }
    });

    return object;
  }

  /**
   * Multiply two numbers.
   *
   * @static
   * @memberOf _
   * @since 4.7.0
   * @category Math
   * @param {number} multiplier The first number in a multiplication.
   * @param {number} multiplicand The second number in a multiplication.
   * @returns {number} Returns the product.
   * @example
   *
   * _.multiply(6, 4);
   * // => 24
   */
  var multiply = createMathOperation(function(multiplier, multiplicand) {
    return multiplier * multiplicand;
  }, 1);

  /** Error message constants. */
  var FUNC_ERROR_TEXT$8 = 'Expected a function';

  /**
   * Creates a function that negates the result of the predicate `func`. The
   * `func` predicate is invoked with the `this` binding and arguments of the
   * created function.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Function
   * @param {Function} predicate The predicate to negate.
   * @returns {Function} Returns the new negated function.
   * @example
   *
   * function isEven(n) {
   *   return n % 2 == 0;
   * }
   *
   * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
   * // => [1, 3, 5]
   */
  function negate(predicate) {
    if (typeof predicate != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$8);
    }
    return function() {
      var args = arguments;
      switch (args.length) {
        case 0: return !predicate.call(this);
        case 1: return !predicate.call(this, args[0]);
        case 2: return !predicate.call(this, args[0], args[1]);
        case 3: return !predicate.call(this, args[0], args[1], args[2]);
      }
      return !predicate.apply(this, args);
    };
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /** `Object#toString` result references. */
  var mapTag$8 = '[object Map]',
      setTag$8 = '[object Set]';

  /** Built-in value references. */
  var symIterator = Symbol$1 ? Symbol$1.iterator : undefined;

  /**
   * Converts `value` to an array.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Array} Returns the converted array.
   * @example
   *
   * _.toArray({ 'a': 1, 'b': 2 });
   * // => [1, 2]
   *
   * _.toArray('abc');
   * // => ['a', 'b', 'c']
   *
   * _.toArray(1);
   * // => []
   *
   * _.toArray(null);
   * // => []
   */
  function toArray(value) {
    if (!value) {
      return [];
    }
    if (isArrayLike(value)) {
      return isString(value) ? stringToArray(value) : copyArray(value);
    }
    if (symIterator && value[symIterator]) {
      return iteratorToArray(value[symIterator]());
    }
    var tag = getTag$1(value),
        func = tag == mapTag$8 ? mapToArray : (tag == setTag$8 ? setToArray : values);

    return func(value);
  }

  /**
   * Gets the next value on a wrapped object following the
   * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
   *
   * @name next
   * @memberOf _
   * @since 4.0.0
   * @category Seq
   * @returns {Object} Returns the next iterator value.
   * @example
   *
   * var wrapped = _([1, 2]);
   *
   * wrapped.next();
   * // => { 'done': false, 'value': 1 }
   *
   * wrapped.next();
   * // => { 'done': false, 'value': 2 }
   *
   * wrapped.next();
   * // => { 'done': true, 'value': undefined }
   */
  function wrapperNext() {
    if (this.__values__ === undefined) {
      this.__values__ = toArray(this.value());
    }
    var done = this.__index__ >= this.__values__.length,
        value = done ? undefined : this.__values__[this.__index__++];

    return { 'done': done, 'value': value };
  }

  /**
   * The base implementation of `_.nth` which doesn't coerce arguments.
   *
   * @private
   * @param {Array} array The array to query.
   * @param {number} n The index of the element to return.
   * @returns {*} Returns the nth element of `array`.
   */
  function baseNth(array, n) {
    var length = array.length;
    if (!length) {
      return;
    }
    n += n < 0 ? length : 0;
    return isIndex(n, length) ? array[n] : undefined;
  }

  /**
   * Gets the element at index `n` of `array`. If `n` is negative, the nth
   * element from the end is returned.
   *
   * @static
   * @memberOf _
   * @since 4.11.0
   * @category Array
   * @param {Array} array The array to query.
   * @param {number} [n=0] The index of the element to return.
   * @returns {*} Returns the nth element of `array`.
   * @example
   *
   * var array = ['a', 'b', 'c', 'd'];
   *
   * _.nth(array, 1);
   * // => 'b'
   *
   * _.nth(array, -2);
   * // => 'c';
   */
  function nth(array, n) {
    return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
  }

  /**
   * Creates a function that gets the argument at index `n`. If `n` is negative,
   * the nth argument from the end is returned.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {number} [n=0] The index of the argument to return.
   * @returns {Function} Returns the new pass-thru function.
   * @example
   *
   * var func = _.nthArg(1);
   * func('a', 'b', 'c', 'd');
   * // => 'b'
   *
   * var func = _.nthArg(-2);
   * func('a', 'b', 'c', 'd');
   * // => 'c'
   */
  function nthArg(n) {
    n = toInteger(n);
    return baseRest(function(args) {
      return baseNth(args, n);
    });
  }

  /**
   * The base implementation of `_.unset`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The property path to unset.
   * @returns {boolean} Returns `true` if the property is deleted, else `false`.
   */
  function baseUnset(object, path) {
    path = castPath(path, object);
    object = parent(object, path);
    return object == null || delete object[toKey(last(path))];
  }

  /**
   * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
   * objects.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {string} key The key of the property to inspect.
   * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
   */
  function customOmitClone(value) {
    return isPlainObject$2(value) ? undefined : value;
  }

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$7 = 1,
      CLONE_FLAT_FLAG$1 = 2,
      CLONE_SYMBOLS_FLAG$5 = 4;

  /**
   * The opposite of `_.pick`; this method creates an object composed of the
   * own and inherited enumerable property paths of `object` that are not omitted.
   *
   * **Note:** This method is considerably slower than `_.pick`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [paths] The property paths to omit.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.omit(object, ['a', 'c']);
   * // => { 'b': '2' }
   */
  var omit = flatRest(function(object, paths) {
    var result = {};
    if (object == null) {
      return result;
    }
    var isDeep = false;
    paths = arrayMap(paths, function(path) {
      path = castPath(path, object);
      isDeep || (isDeep = path.length > 1);
      return path;
    });
    copyObject(object, getAllKeysIn(object), result);
    if (isDeep) {
      result = baseClone(result, CLONE_DEEP_FLAG$7 | CLONE_FLAT_FLAG$1 | CLONE_SYMBOLS_FLAG$5, customOmitClone);
    }
    var length = paths.length;
    while (length--) {
      baseUnset(result, paths[length]);
    }
    return result;
  });

  /**
   * The base implementation of `_.set`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to set.
   * @param {*} value The value to set.
   * @param {Function} [customizer] The function to customize path creation.
   * @returns {Object} Returns `object`.
   */
  function baseSet(object, path, value, customizer) {
    if (!isObject(object)) {
      return object;
    }
    path = castPath(path, object);

    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        nested = object;

    while (nested != null && ++index < length) {
      var key = toKey(path[index]),
          newValue = value;

      if (index != lastIndex) {
        var objValue = nested[key];
        newValue = customizer ? customizer(objValue, key, nested) : undefined;
        if (newValue === undefined) {
          newValue = isObject(objValue)
            ? objValue
            : (isIndex(path[index + 1]) ? [] : {});
        }
      }
      assignValue(nested, key, newValue);
      nested = nested[key];
    }
    return object;
  }

  /**
   * The base implementation of  `_.pickBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} paths The property paths to pick.
   * @param {Function} predicate The function invoked per property.
   * @returns {Object} Returns the new object.
   */
  function basePickBy(object, paths, predicate) {
    var index = -1,
        length = paths.length,
        result = {};

    while (++index < length) {
      var path = paths[index],
          value = baseGet(object, path);

      if (predicate(value, path)) {
        baseSet(result, castPath(path, object), value);
      }
    }
    return result;
  }

  /**
   * Creates an object composed of the `object` properties `predicate` returns
   * truthy for. The predicate is invoked with two arguments: (value, key).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The source object.
   * @param {Function} [predicate=_.identity] The function invoked per property.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.pickBy(object, _.isNumber);
   * // => { 'a': 1, 'c': 3 }
   */
  function pickBy(object, predicate) {
    if (object == null) {
      return {};
    }
    var props = arrayMap(getAllKeysIn(object), function(prop) {
      return [prop];
    });
    predicate = baseIteratee(predicate);
    return basePickBy(object, props, function(value, path) {
      return predicate(value, path[0]);
    });
  }

  /**
   * The opposite of `_.pickBy`; this method creates an object composed of
   * the own and inherited enumerable string keyed properties of `object` that
   * `predicate` doesn't return truthy for. The predicate is invoked with two
   * arguments: (value, key).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The source object.
   * @param {Function} [predicate=_.identity] The function invoked per property.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.omitBy(object, _.isNumber);
   * // => { 'b': '2' }
   */
  function omitBy(object, predicate) {
    return pickBy(object, negate(baseIteratee(predicate)));
  }

  /**
   * Creates a function that is restricted to invoking `func` once. Repeat calls
   * to the function return the value of the first invocation. The `func` is
   * invoked with the `this` binding and arguments of the created function.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new restricted function.
   * @example
   *
   * var initialize = _.once(createApplication);
   * initialize();
   * initialize();
   * // => `createApplication` is invoked once
   */
  function once(func) {
    return before(2, func);
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * Compares values to sort them in ascending order.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {number} Returns the sort order indicator for `value`.
   */
  function compareAscending(value, other) {
    if (value !== other) {
      var valIsDefined = value !== undefined,
          valIsNull = value === null,
          valIsReflexive = value === value,
          valIsSymbol = isSymbol(value);

      var othIsDefined = other !== undefined,
          othIsNull = other === null,
          othIsReflexive = other === other,
          othIsSymbol = isSymbol(other);

      if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
          (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
          (valIsNull && othIsDefined && othIsReflexive) ||
          (!valIsDefined && othIsReflexive) ||
          !valIsReflexive) {
        return 1;
      }
      if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
          (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
          (othIsNull && valIsDefined && valIsReflexive) ||
          (!othIsDefined && valIsReflexive) ||
          !othIsReflexive) {
        return -1;
      }
    }
    return 0;
  }

  /**
   * Used by `_.orderBy` to compare multiple properties of a value to another
   * and stable sort them.
   *
   * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
   * specify an order of "desc" for descending or "asc" for ascending sort order
   * of corresponding values.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {boolean[]|string[]} orders The order to sort by for each property.
   * @returns {number} Returns the sort order indicator for `object`.
   */
  function compareMultiple(object, other, orders) {
    var index = -1,
        objCriteria = object.criteria,
        othCriteria = other.criteria,
        length = objCriteria.length,
        ordersLength = orders.length;

    while (++index < length) {
      var result = compareAscending(objCriteria[index], othCriteria[index]);
      if (result) {
        if (index >= ordersLength) {
          return result;
        }
        var order = orders[index];
        return result * (order == 'desc' ? -1 : 1);
      }
    }
    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
    // that causes it, under certain circumstances, to provide the same value for
    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
    // for more details.
    //
    // This also ensures a stable sort in V8 and other engines.
    // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
    return object.index - other.index;
  }

  /**
   * The base implementation of `_.orderBy` without param guards.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
   * @param {string[]} orders The sort orders of `iteratees`.
   * @returns {Array} Returns the new sorted array.
   */
  function baseOrderBy(collection, iteratees, orders) {
    var index = -1;
    iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

    var result = baseMap(collection, function(value, key, collection) {
      var criteria = arrayMap(iteratees, function(iteratee) {
        return iteratee(value);
      });
      return { 'criteria': criteria, 'index': ++index, 'value': value };
    });

    return baseSortBy(result, function(object, other) {
      return compareMultiple(object, other, orders);
    });
  }

  /**
   * This method is like `_.sortBy` except that it allows specifying the sort
   * orders of the iteratees to sort by. If `orders` is unspecified, all values
   * are sorted in ascending order. Otherwise, specify an order of "desc" for
   * descending or "asc" for ascending sort order of corresponding values.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
   *  The iteratees to sort by.
   * @param {string[]} [orders] The sort orders of `iteratees`.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
   * @returns {Array} Returns the new sorted array.
   * @example
   *
   * var users = [
   *   { 'user': 'fred',   'age': 48 },
   *   { 'user': 'barney', 'age': 34 },
   *   { 'user': 'fred',   'age': 40 },
   *   { 'user': 'barney', 'age': 36 }
   * ];
   *
   * // Sort by `user` in ascending order and by `age` in descending order.
   * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
   * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
   */
  function orderBy(collection, iteratees, orders, guard) {
    if (collection == null) {
      return [];
    }
    if (!isArray(iteratees)) {
      iteratees = iteratees == null ? [] : [iteratees];
    }
    orders = guard ? undefined : orders;
    if (!isArray(orders)) {
      orders = orders == null ? [] : [orders];
    }
    return baseOrderBy(collection, iteratees, orders);
  }

  /**
   * Creates a function like `_.over`.
   *
   * @private
   * @param {Function} arrayFunc The function to iterate over iteratees.
   * @returns {Function} Returns the new over function.
   */
  function createOver(arrayFunc) {
    return flatRest(function(iteratees) {
      iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
      return baseRest(function(args) {
        var thisArg = this;
        return arrayFunc(iteratees, function(iteratee) {
          return apply(iteratee, thisArg, args);
        });
      });
    });
  }

  /**
   * Creates a function that invokes `iteratees` with the arguments it receives
   * and returns their results.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {...(Function|Function[])} [iteratees=[_.identity]]
   *  The iteratees to invoke.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var func = _.over([Math.max, Math.min]);
   *
   * func(1, 2, 3, 4);
   * // => [4, 1]
   */
  var over = createOver(arrayMap);

  /**
   * A `baseRest` alias which can be replaced with `identity` by module
   * replacement plugins.
   *
   * @private
   * @type {Function}
   * @param {Function} func The function to apply a rest parameter to.
   * @returns {Function} Returns the new function.
   */
  var castRest = baseRest;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMin$8 = Math.min;

  /**
   * Creates a function that invokes `func` with its arguments transformed.
   *
   * @static
   * @since 4.0.0
   * @memberOf _
   * @category Function
   * @param {Function} func The function to wrap.
   * @param {...(Function|Function[])} [transforms=[_.identity]]
   *  The argument transforms.
   * @returns {Function} Returns the new function.
   * @example
   *
   * function doubled(n) {
   *   return n * 2;
   * }
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * var func = _.overArgs(function(x, y) {
   *   return [x, y];
   * }, [square, doubled]);
   *
   * func(9, 3);
   * // => [81, 6]
   *
   * func(10, 5);
   * // => [100, 10]
   */
  var overArgs = castRest(function(func, transforms) {
    transforms = (transforms.length == 1 && isArray(transforms[0]))
      ? arrayMap(transforms[0], baseUnary(baseIteratee))
      : arrayMap(baseFlatten(transforms, 1), baseUnary(baseIteratee));

    var funcsLength = transforms.length;
    return baseRest(function(args) {
      var index = -1,
          length = nativeMin$8(args.length, funcsLength);

      while (++index < length) {
        args[index] = transforms[index].call(this, args[index]);
      }
      return apply(func, this, args);
    });
  });

  /**
   * Creates a function that checks if **all** of the `predicates` return
   * truthy when invoked with the arguments it receives.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {...(Function|Function[])} [predicates=[_.identity]]
   *  The predicates to check.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var func = _.overEvery([Boolean, isFinite]);
   *
   * func('1');
   * // => true
   *
   * func(null);
   * // => false
   *
   * func(NaN);
   * // => false
   */
  var overEvery = createOver(arrayEvery);

  /**
   * Creates a function that checks if **any** of the `predicates` return
   * truthy when invoked with the arguments it receives.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {...(Function|Function[])} [predicates=[_.identity]]
   *  The predicates to check.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var func = _.overSome([Boolean, isFinite]);
   *
   * func('1');
   * // => true
   *
   * func(null);
   * // => true
   *
   * func(NaN);
   * // => false
   */
  var overSome = createOver(arraySome);

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$3 = 9007199254740991;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeFloor = Math.floor;

  /**
   * The base implementation of `_.repeat` which doesn't coerce arguments.
   *
   * @private
   * @param {string} string The string to repeat.
   * @param {number} n The number of times to repeat the string.
   * @returns {string} Returns the repeated string.
   */
  function baseRepeat(string, n) {
    var result = '';
    if (!string || n < 1 || n > MAX_SAFE_INTEGER$3) {
      return result;
    }
    // Leverage the exponentiation by squaring algorithm for a faster repeat.
    // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
    do {
      if (n % 2) {
        result += string;
      }
      n = nativeFloor(n / 2);
      if (n) {
        string += string;
      }
    } while (n);

    return result;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /** Used to compose unicode character classes. */
  var rsAstralRange$3 = '\\ud800-\\udfff',
      rsComboMarksRange$4 = '\\u0300-\\u036f',
      reComboHalfMarksRange$4 = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange$4 = '\\u20d0-\\u20ff',
      rsComboRange$4 = rsComboMarksRange$4 + reComboHalfMarksRange$4 + rsComboSymbolsRange$4,
      rsVarRange$3 = '\\ufe0e\\ufe0f';

  /** Used to compose unicode capture groups. */
  var rsAstral$1 = '[' + rsAstralRange$3 + ']',
      rsCombo$3 = '[' + rsComboRange$4 + ']',
      rsFitz$2 = '\\ud83c[\\udffb-\\udfff]',
      rsModifier$2 = '(?:' + rsCombo$3 + '|' + rsFitz$2 + ')',
      rsNonAstral$2 = '[^' + rsAstralRange$3 + ']',
      rsRegional$2 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair$2 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsZWJ$3 = '\\u200d';

  /** Used to compose unicode regexes. */
  var reOptMod$2 = rsModifier$2 + '?',
      rsOptVar$2 = '[' + rsVarRange$3 + ']?',
      rsOptJoin$2 = '(?:' + rsZWJ$3 + '(?:' + [rsNonAstral$2, rsRegional$2, rsSurrPair$2].join('|') + ')' + rsOptVar$2 + reOptMod$2 + ')*',
      rsSeq$2 = rsOptVar$2 + reOptMod$2 + rsOptJoin$2,
      rsSymbol$1 = '(?:' + [rsNonAstral$2 + rsCombo$3 + '?', rsCombo$3, rsRegional$2, rsSurrPair$2, rsAstral$1].join('|') + ')';

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode$1 = RegExp(rsFitz$2 + '(?=' + rsFitz$2 + ')|' + rsSymbol$1 + rsSeq$2, 'g');

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode$1.lastIndex = 0;
    while (reUnicode$1.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeCeil$1 = Math.ceil;

  /**
   * Creates the padding for `string` based on `length`. The `chars` string
   * is truncated if the number of characters exceeds `length`.
   *
   * @private
   * @param {number} length The padding length.
   * @param {string} [chars=' '] The string used as padding.
   * @returns {string} Returns the padding for `string`.
   */
  function createPadding(length, chars) {
    chars = chars === undefined ? ' ' : baseToString(chars);

    var charsLength = chars.length;
    if (charsLength < 2) {
      return charsLength ? baseRepeat(chars, length) : chars;
    }
    var result = baseRepeat(chars, nativeCeil$1(length / stringSize(chars)));
    return hasUnicode(chars)
      ? castSlice(stringToArray(result), 0, length).join('')
      : result.slice(0, length);
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeCeil$2 = Math.ceil,
      nativeFloor$1 = Math.floor;

  /**
   * Pads `string` on the left and right sides if it's shorter than `length`.
   * Padding characters are truncated if they can't be evenly divided by `length`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to pad.
   * @param {number} [length=0] The padding length.
   * @param {string} [chars=' '] The string used as padding.
   * @returns {string} Returns the padded string.
   * @example
   *
   * _.pad('abc', 8);
   * // => '  abc   '
   *
   * _.pad('abc', 8, '_-');
   * // => '_-abc_-_'
   *
   * _.pad('abc', 3);
   * // => 'abc'
   */
  function pad(string, length, chars) {
    string = toString(string);
    length = toInteger(length);

    var strLength = length ? stringSize(string) : 0;
    if (!length || strLength >= length) {
      return string;
    }
    var mid = (length - strLength) / 2;
    return (
      createPadding(nativeFloor$1(mid), chars) +
      string +
      createPadding(nativeCeil$2(mid), chars)
    );
  }

  /**
   * Pads `string` on the right side if it's shorter than `length`. Padding
   * characters are truncated if they exceed `length`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to pad.
   * @param {number} [length=0] The padding length.
   * @param {string} [chars=' '] The string used as padding.
   * @returns {string} Returns the padded string.
   * @example
   *
   * _.padEnd('abc', 6);
   * // => 'abc   '
   *
   * _.padEnd('abc', 6, '_-');
   * // => 'abc_-_'
   *
   * _.padEnd('abc', 3);
   * // => 'abc'
   */
  function padEnd(string, length, chars) {
    string = toString(string);
    length = toInteger(length);

    var strLength = length ? stringSize(string) : 0;
    return (length && strLength < length)
      ? (string + createPadding(length - strLength, chars))
      : string;
  }

  /**
   * Pads `string` on the left side if it's shorter than `length`. Padding
   * characters are truncated if they exceed `length`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to pad.
   * @param {number} [length=0] The padding length.
   * @param {string} [chars=' '] The string used as padding.
   * @returns {string} Returns the padded string.
   * @example
   *
   * _.padStart('abc', 6);
   * // => '   abc'
   *
   * _.padStart('abc', 6, '_-');
   * // => '_-_abc'
   *
   * _.padStart('abc', 3);
   * // => 'abc'
   */
  function padStart(string, length, chars) {
    string = toString(string);
    length = toInteger(length);

    var strLength = length ? stringSize(string) : 0;
    return (length && strLength < length)
      ? (createPadding(length - strLength, chars) + string)
      : string;
  }

  /** Used to match leading and trailing whitespace. */
  var reTrimStart = /^\s+/;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeParseInt = root$1.parseInt;

  /**
   * Converts `string` to an integer of the specified radix. If `radix` is
   * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
   * hexadecimal, in which case a `radix` of `16` is used.
   *
   * **Note:** This method aligns with the
   * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category String
   * @param {string} string The string to convert.
   * @param {number} [radix=10] The radix to interpret `value` by.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.parseInt('08');
   * // => 8
   *
   * _.map(['6', '08', '10'], _.parseInt);
   * // => [6, 8, 10]
   */
  function parseInt$1(string, radix, guard) {
    if (guard || radix == null) {
      radix = 0;
    } else if (radix) {
      radix = +radix;
    }
    return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
  }

  /** Used to compose bitmasks for function metadata. */
  var WRAP_PARTIAL_FLAG$6 = 32;

  /**
   * Creates a function that invokes `func` with `partials` prepended to the
   * arguments it receives. This method is like `_.bind` except it does **not**
   * alter the `this` binding.
   *
   * The `_.partial.placeholder` value, which defaults to `_` in monolithic
   * builds, may be used as a placeholder for partially applied arguments.
   *
   * **Note:** This method doesn't set the "length" property of partially
   * applied functions.
   *
   * @static
   * @memberOf _
   * @since 0.2.0
   * @category Function
   * @param {Function} func The function to partially apply arguments to.
   * @param {...*} [partials] The arguments to be partially applied.
   * @returns {Function} Returns the new partially applied function.
   * @example
   *
   * function greet(greeting, name) {
   *   return greeting + ' ' + name;
   * }
   *
   * var sayHelloTo = _.partial(greet, 'hello');
   * sayHelloTo('fred');
   * // => 'hello fred'
   *
   * // Partially applied with placeholders.
   * var greetFred = _.partial(greet, _, 'fred');
   * greetFred('hi');
   * // => 'hi fred'
   */
  var partial = baseRest(function(func, partials) {
    var holders = replaceHolders(partials, getHolder(partial));
    return createWrap(func, WRAP_PARTIAL_FLAG$6, undefined, partials, holders);
  });

  // Assign default placeholders.
  partial.placeholder = {};

  /** Used to compose bitmasks for function metadata. */
  var WRAP_PARTIAL_RIGHT_FLAG$3 = 64;

  /**
   * This method is like `_.partial` except that partially applied arguments
   * are appended to the arguments it receives.
   *
   * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
   * builds, may be used as a placeholder for partially applied arguments.
   *
   * **Note:** This method doesn't set the "length" property of partially
   * applied functions.
   *
   * @static
   * @memberOf _
   * @since 1.0.0
   * @category Function
   * @param {Function} func The function to partially apply arguments to.
   * @param {...*} [partials] The arguments to be partially applied.
   * @returns {Function} Returns the new partially applied function.
   * @example
   *
   * function greet(greeting, name) {
   *   return greeting + ' ' + name;
   * }
   *
   * var greetFred = _.partialRight(greet, 'fred');
   * greetFred('hi');
   * // => 'hi fred'
   *
   * // Partially applied with placeholders.
   * var sayHelloTo = _.partialRight(greet, 'hello', _);
   * sayHelloTo('fred');
   * // => 'hello fred'
   */
  var partialRight = baseRest(function(func, partials) {
    var holders = replaceHolders(partials, getHolder(partialRight));
    return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG$3, undefined, partials, holders);
  });

  // Assign default placeholders.
  partialRight.placeholder = {};

  /**
   * Creates an array of elements split into two groups, the first of which
   * contains elements `predicate` returns truthy for, the second of which
   * contains elements `predicate` returns falsey for. The predicate is
   * invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the array of grouped elements.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'age': 36, 'active': false },
   *   { 'user': 'fred',    'age': 40, 'active': true },
   *   { 'user': 'pebbles', 'age': 1,  'active': false }
   * ];
   *
   * _.partition(users, function(o) { return o.active; });
   * // => objects for [['fred'], ['barney', 'pebbles']]
   *
   * // The `_.matches` iteratee shorthand.
   * _.partition(users, { 'age': 1, 'active': false });
   * // => objects for [['pebbles'], ['barney', 'fred']]
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.partition(users, ['active', false]);
   * // => objects for [['barney', 'pebbles'], ['fred']]
   *
   * // The `_.property` iteratee shorthand.
   * _.partition(users, 'active');
   * // => objects for [['fred'], ['barney', 'pebbles']]
   */
  var partition = createAggregator(function(result, value, key) {
    result[key ? 0 : 1].push(value);
  }, function() { return [[], []]; });

  /**
   * The base implementation of `_.pick` without support for individual
   * property identifiers.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} paths The property paths to pick.
   * @returns {Object} Returns the new object.
   */
  function basePick(object, paths) {
    return basePickBy(object, paths, function(value, path) {
      return hasIn(object, path);
    });
  }

  /**
   * Creates an object composed of the picked `object` properties.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [paths] The property paths to pick.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.pick(object, ['a', 'c']);
   * // => { 'a': 1, 'c': 3 }
   */
  var pick = flatRest(function(object, paths) {
    return object == null ? {} : basePick(object, paths);
  });

  /**
   * Creates a clone of the chain sequence planting `value` as the wrapped value.
   *
   * @name plant
   * @memberOf _
   * @since 3.2.0
   * @category Seq
   * @param {*} value The value to plant.
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * var wrapped = _([1, 2]).map(square);
   * var other = wrapped.plant([3, 4]);
   *
   * other.value();
   * // => [9, 16]
   *
   * wrapped.value();
   * // => [1, 4]
   */
  function wrapperPlant(value) {
    var result,
        parent = this;

    while (parent instanceof baseLodash) {
      var clone = wrapperClone(parent);
      clone.__index__ = 0;
      clone.__values__ = undefined;
      if (result) {
        previous.__wrapped__ = clone;
      } else {
        result = clone;
      }
      var previous = clone;
      parent = parent.__wrapped__;
    }
    previous.__wrapped__ = value;
    return result;
  }

  /**
   * The opposite of `_.property`; this method creates a function that returns
   * the value at a given path of `object`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Util
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   * @example
   *
   * var array = [0, 1, 2],
   *     object = { 'a': array, 'b': array, 'c': array };
   *
   * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
   * // => [2, 0]
   *
   * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
   * // => [2, 0]
   */
  function propertyOf(object) {
    return function(path) {
      return object == null ? undefined : baseGet(object, path);
    };
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /** Used for built-in method references. */
  var arrayProto$2 = Array.prototype;

  /** Built-in value references. */
  var splice$1 = arrayProto$2.splice;

  /**
   * The base implementation of `_.pullAllBy` without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to remove.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns `array`.
   */
  function basePullAll(array, values, iteratee, comparator) {
    var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
        index = -1,
        length = values.length,
        seen = array;

    if (array === values) {
      values = copyArray(values);
    }
    if (iteratee) {
      seen = arrayMap(array, baseUnary(iteratee));
    }
    while (++index < length) {
      var fromIndex = 0,
          value = values[index],
          computed = iteratee ? iteratee(value) : value;

      while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
        if (seen !== array) {
          splice$1.call(seen, fromIndex, 1);
        }
        splice$1.call(array, fromIndex, 1);
      }
    }
    return array;
  }

  /**
   * This method is like `_.pull` except that it accepts an array of values to remove.
   *
   * **Note:** Unlike `_.difference`, this method mutates `array`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to modify.
   * @param {Array} values The values to remove.
   * @returns {Array} Returns `array`.
   * @example
   *
   * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
   *
   * _.pullAll(array, ['a', 'c']);
   * console.log(array);
   * // => ['b', 'b']
   */
  function pullAll(array, values) {
    return (array && array.length && values && values.length)
      ? basePullAll(array, values)
      : array;
  }

  /**
   * Removes all given values from `array` using
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
   * to remove elements from an array by predicate.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Array
   * @param {Array} array The array to modify.
   * @param {...*} [values] The values to remove.
   * @returns {Array} Returns `array`.
   * @example
   *
   * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
   *
   * _.pull(array, 'a', 'c');
   * console.log(array);
   * // => ['b', 'b']
   */
  var pull = baseRest(pullAll);

  /**
   * This method is like `_.pullAll` except that it accepts `iteratee` which is
   * invoked for each element of `array` and `values` to generate the criterion
   * by which they're compared. The iteratee is invoked with one argument: (value).
   *
   * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to modify.
   * @param {Array} values The values to remove.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {Array} Returns `array`.
   * @example
   *
   * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
   *
   * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
   * console.log(array);
   * // => [{ 'x': 2 }]
   */
  function pullAllBy(array, values, iteratee) {
    return (array && array.length && values && values.length)
      ? basePullAll(array, values, baseIteratee(iteratee, 2))
      : array;
  }

  /**
   * This method is like `_.pullAll` except that it accepts `comparator` which
   * is invoked to compare elements of `array` to `values`. The comparator is
   * invoked with two arguments: (arrVal, othVal).
   *
   * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
   *
   * @static
   * @memberOf _
   * @since 4.6.0
   * @category Array
   * @param {Array} array The array to modify.
   * @param {Array} values The values to remove.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns `array`.
   * @example
   *
   * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
   *
   * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
   * console.log(array);
   * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
   */
  function pullAllWith(array, values, comparator) {
    return (array && array.length && values && values.length)
      ? basePullAll(array, values, undefined, comparator)
      : array;
  }

  /** Used for built-in method references. */
  var arrayProto$3 = Array.prototype;

  /** Built-in value references. */
  var splice$2 = arrayProto$3.splice;

  /**
   * The base implementation of `_.pullAt` without support for individual
   * indexes or capturing the removed elements.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {number[]} indexes The indexes of elements to remove.
   * @returns {Array} Returns `array`.
   */
  function basePullAt(array, indexes) {
    var length = array ? indexes.length : 0,
        lastIndex = length - 1;

    while (length--) {
      var index = indexes[length];
      if (length == lastIndex || index !== previous) {
        var previous = index;
        if (isIndex(index)) {
          splice$2.call(array, index, 1);
        } else {
          baseUnset(array, index);
        }
      }
    }
    return array;
  }

  /**
   * Removes elements from `array` corresponding to `indexes` and returns an
   * array of removed elements.
   *
   * **Note:** Unlike `_.at`, this method mutates `array`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to modify.
   * @param {...(number|number[])} [indexes] The indexes of elements to remove.
   * @returns {Array} Returns the new array of removed elements.
   * @example
   *
   * var array = ['a', 'b', 'c', 'd'];
   * var pulled = _.pullAt(array, [1, 3]);
   *
   * console.log(array);
   * // => ['a', 'c']
   *
   * console.log(pulled);
   * // => ['b', 'd']
   */
  var pullAt = flatRest(function(array, indexes) {
    var length = array == null ? 0 : array.length,
        result = baseAt(array, indexes);

    basePullAt(array, arrayMap(indexes, function(index) {
      return isIndex(index, length) ? +index : index;
    }).sort(compareAscending));

    return result;
  });

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeFloor$2 = Math.floor,
      nativeRandom = Math.random;

  /**
   * The base implementation of `_.random` without support for returning
   * floating-point numbers.
   *
   * @private
   * @param {number} lower The lower bound.
   * @param {number} upper The upper bound.
   * @returns {number} Returns the random number.
   */
  function baseRandom(lower, upper) {
    return lower + nativeFloor$2(nativeRandom() * (upper - lower + 1));
  }

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMin$9 = Math.min,
      nativeRandom$1 = Math.random;

  /**
   * Produces a random number between the inclusive `lower` and `upper` bounds.
   * If only one argument is provided a number between `0` and the given number
   * is returned. If `floating` is `true`, or either `lower` or `upper` are
   * floats, a floating-point number is returned instead of an integer.
   *
   * **Note:** JavaScript follows the IEEE-754 standard for resolving
   * floating-point values which can produce unexpected results.
   *
   * @static
   * @memberOf _
   * @since 0.7.0
   * @category Number
   * @param {number} [lower=0] The lower bound.
   * @param {number} [upper=1] The upper bound.
   * @param {boolean} [floating] Specify returning a floating-point number.
   * @returns {number} Returns the random number.
   * @example
   *
   * _.random(0, 5);
   * // => an integer between 0 and 5
   *
   * _.random(5);
   * // => also an integer between 0 and 5
   *
   * _.random(5, true);
   * // => a floating-point number between 0 and 5
   *
   * _.random(1.2, 5.2);
   * // => a floating-point number between 1.2 and 5.2
   */
  function random(lower, upper, floating) {
    if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
      upper = floating = undefined;
    }
    if (floating === undefined) {
      if (typeof upper == 'boolean') {
        floating = upper;
        upper = undefined;
      }
      else if (typeof lower == 'boolean') {
        floating = lower;
        lower = undefined;
      }
    }
    if (lower === undefined && upper === undefined) {
      lower = 0;
      upper = 1;
    }
    else {
      lower = toFinite(lower);
      if (upper === undefined) {
        upper = lower;
        lower = 0;
      } else {
        upper = toFinite(upper);
      }
    }
    if (lower > upper) {
      var temp = lower;
      lower = upper;
      upper = temp;
    }
    if (floating || lower % 1 || upper % 1) {
      var rand = nativeRandom$1();
      return nativeMin$9(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
    }
    return baseRandom(lower, upper);
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeCeil$3 = Math.ceil,
      nativeMax$c = Math.max;

  /**
   * The base implementation of `_.range` and `_.rangeRight` which doesn't
   * coerce arguments.
   *
   * @private
   * @param {number} start The start of the range.
   * @param {number} end The end of the range.
   * @param {number} step The value to increment or decrement by.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Array} Returns the range of numbers.
   */
  function baseRange(start, end, step, fromRight) {
    var index = -1,
        length = nativeMax$c(nativeCeil$3((end - start) / (step || 1)), 0),
        result = Array(length);

    while (length--) {
      result[fromRight ? length : ++index] = start;
      start += step;
    }
    return result;
  }

  /**
   * Creates a `_.range` or `_.rangeRight` function.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new range function.
   */
  function createRange(fromRight) {
    return function(start, end, step) {
      if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
        end = step = undefined;
      }
      // Ensure the sign of `-0` is preserved.
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
      return baseRange(start, end, step, fromRight);
    };
  }

  /**
   * Creates an array of numbers (positive and/or negative) progressing from
   * `start` up to, but not including, `end`. A step of `-1` is used if a negative
   * `start` is specified without an `end` or `step`. If `end` is not specified,
   * it's set to `start` with `start` then set to `0`.
   *
   * **Note:** JavaScript follows the IEEE-754 standard for resolving
   * floating-point values which can produce unexpected results.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {number} [start=0] The start of the range.
   * @param {number} end The end of the range.
   * @param {number} [step=1] The value to increment or decrement by.
   * @returns {Array} Returns the range of numbers.
   * @see _.inRange, _.rangeRight
   * @example
   *
   * _.range(4);
   * // => [0, 1, 2, 3]
   *
   * _.range(-4);
   * // => [0, -1, -2, -3]
   *
   * _.range(1, 5);
   * // => [1, 2, 3, 4]
   *
   * _.range(0, 20, 5);
   * // => [0, 5, 10, 15]
   *
   * _.range(0, -4, -1);
   * // => [0, -1, -2, -3]
   *
   * _.range(1, 4, 0);
   * // => [1, 1, 1]
   *
   * _.range(0);
   * // => []
   */
  var range = createRange();

  /**
   * This method is like `_.range` except that it populates values in
   * descending order.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {number} [start=0] The start of the range.
   * @param {number} end The end of the range.
   * @param {number} [step=1] The value to increment or decrement by.
   * @returns {Array} Returns the range of numbers.
   * @see _.inRange, _.range
   * @example
   *
   * _.rangeRight(4);
   * // => [3, 2, 1, 0]
   *
   * _.rangeRight(-4);
   * // => [-3, -2, -1, 0]
   *
   * _.rangeRight(1, 5);
   * // => [4, 3, 2, 1]
   *
   * _.rangeRight(0, 20, 5);
   * // => [15, 10, 5, 0]
   *
   * _.rangeRight(0, -4, -1);
   * // => [-3, -2, -1, 0]
   *
   * _.rangeRight(1, 4, 0);
   * // => [1, 1, 1]
   *
   * _.rangeRight(0);
   * // => []
   */
  var rangeRight = createRange(true);

  /** Used to compose bitmasks for function metadata. */
  var WRAP_REARG_FLAG$3 = 256;

  /**
   * Creates a function that invokes `func` with arguments arranged according
   * to the specified `indexes` where the argument value at the first index is
   * provided as the first argument, the argument value at the second index is
   * provided as the second argument, and so on.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Function
   * @param {Function} func The function to rearrange arguments for.
   * @param {...(number|number[])} indexes The arranged argument indexes.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var rearged = _.rearg(function(a, b, c) {
   *   return [a, b, c];
   * }, [2, 0, 1]);
   *
   * rearged('b', 'c', 'a')
   * // => ['a', 'b', 'c']
   */
  var rearg = flatRest(function(func, indexes) {
    return createWrap(func, WRAP_REARG_FLAG$3, undefined, undefined, undefined, indexes);
  });

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * Reduces `collection` to a value which is the accumulated result of running
   * each element in `collection` thru `iteratee`, where each successive
   * invocation is supplied the return value of the previous. If `accumulator`
   * is not given, the first element of `collection` is used as the initial
   * value. The iteratee is invoked with four arguments:
   * (accumulator, value, index|key, collection).
   *
   * Many lodash methods are guarded to work as iteratees for methods like
   * `_.reduce`, `_.reduceRight`, and `_.transform`.
   *
   * The guarded methods are:
   * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
   * and `sortBy`
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @returns {*} Returns the accumulated value.
   * @see _.reduceRight
   * @example
   *
   * _.reduce([1, 2], function(sum, n) {
   *   return sum + n;
   * }, 0);
   * // => 3
   *
   * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
   *   (result[value] || (result[value] = [])).push(key);
   *   return result;
   * }, {});
   * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
   */
  function reduce(collection, iteratee, accumulator) {
    var func = isArray(collection) ? arrayReduce : baseReduce,
        initAccum = arguments.length < 3;

    return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * This method is like `_.reduce` except that it iterates over elements of
   * `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @returns {*} Returns the accumulated value.
   * @see _.reduce
   * @example
   *
   * var array = [[0, 1], [2, 3], [4, 5]];
   *
   * _.reduceRight(array, function(flattened, other) {
   *   return flattened.concat(other);
   * }, []);
   * // => [4, 5, 2, 3, 0, 1]
   */
  function reduceRight(collection, iteratee, accumulator) {
    var func = isArray(collection) ? arrayReduceRight : baseReduce,
        initAccum = arguments.length < 3;

    return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
  }

  /**
   * The opposite of `_.filter`; this method returns the elements of `collection`
   * that `predicate` does **not** return truthy for.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   * @see _.filter
   * @example
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36, 'active': false },
   *   { 'user': 'fred',   'age': 40, 'active': true }
   * ];
   *
   * _.reject(users, function(o) { return !o.active; });
   * // => objects for ['fred']
   *
   * // The `_.matches` iteratee shorthand.
   * _.reject(users, { 'age': 40, 'active': true });
   * // => objects for ['barney']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.reject(users, ['active', false]);
   * // => objects for ['fred']
   *
   * // The `_.property` iteratee shorthand.
   * _.reject(users, 'active');
   * // => objects for ['barney']
   */
  function reject(collection, predicate) {
    var func = isArray(collection) ? arrayFilter : baseFilter;
    return func(collection, negate(baseIteratee(predicate, 3)));
  }

  /**
   * Removes all elements from `array` that `predicate` returns truthy for
   * and returns an array of the removed elements. The predicate is invoked
   * with three arguments: (value, index, array).
   *
   * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
   * to pull elements from an array by value.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Array
   * @param {Array} array The array to modify.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new array of removed elements.
   * @example
   *
   * var array = [1, 2, 3, 4];
   * var evens = _.remove(array, function(n) {
   *   return n % 2 == 0;
   * });
   *
   * console.log(array);
   * // => [1, 3]
   *
   * console.log(evens);
   * // => [2, 4]
   */
  function remove(array, predicate) {
    var result = [];
    if (!(array && array.length)) {
      return result;
    }
    var index = -1,
        indexes = [],
        length = array.length;

    predicate = baseIteratee(predicate, 3);
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result.push(value);
        indexes.push(index);
      }
    }
    basePullAt(array, indexes);
    return result;
  }

  /**
   * Repeats the given string `n` times.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to repeat.
   * @param {number} [n=1] The number of times to repeat the string.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the repeated string.
   * @example
   *
   * _.repeat('*', 3);
   * // => '***'
   *
   * _.repeat('abc', 2);
   * // => 'abcabc'
   *
   * _.repeat('abc', 0);
   * // => ''
   */
  function repeat(string, n, guard) {
    if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
      n = 1;
    } else {
      n = toInteger(n);
    }
    return baseRepeat(toString(string), n);
  }

  /**
   * Replaces matches for `pattern` in `string` with `replacement`.
   *
   * **Note:** This method is based on
   * [`String#replace`](https://mdn.io/String/replace).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to modify.
   * @param {RegExp|string} pattern The pattern to replace.
   * @param {Function|string} replacement The match replacement.
   * @returns {string} Returns the modified string.
   * @example
   *
   * _.replace('Hi Fred', 'Fred', 'Barney');
   * // => 'Hi Barney'
   */
  function replace() {
    var args = arguments,
        string = toString(args[0]);

    return args.length < 3 ? string : string.replace(args[1], args[2]);
  }

  /** Error message constants. */
  var FUNC_ERROR_TEXT$9 = 'Expected a function';

  /**
   * Creates a function that invokes `func` with the `this` binding of the
   * created function and arguments from `start` and beyond provided as
   * an array.
   *
   * **Note:** This method is based on the
   * [rest parameter](https://mdn.io/rest_parameters).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Function
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var say = _.rest(function(what, names) {
   *   return what + ' ' + _.initial(names).join(', ') +
   *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
   * });
   *
   * say('hello', 'fred', 'barney', 'pebbles');
   * // => 'hello fred, barney, & pebbles'
   */
  function rest(func, start) {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$9);
    }
    start = start === undefined ? start : toInteger(start);
    return baseRest(func, start);
  }

  /**
   * This method is like `_.get` except that if the resolved value is a
   * function it's invoked with the `this` binding of its parent object and
   * its result is returned.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to resolve.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
   *
   * _.result(object, 'a[0].b.c1');
   * // => 3
   *
   * _.result(object, 'a[0].b.c2');
   * // => 4
   *
   * _.result(object, 'a[0].b.c3', 'default');
   * // => 'default'
   *
   * _.result(object, 'a[0].b.c3', _.constant('default'));
   * // => 'default'
   */
  function result$1(object, path, defaultValue) {
    path = castPath(path, object);

    var index = -1,
        length = path.length;

    // Ensure the loop is entered when path is empty.
    if (!length) {
      length = 1;
      object = undefined;
    }
    while (++index < length) {
      var value = object == null ? undefined : object[toKey(path[index])];
      if (value === undefined) {
        index = length;
        value = defaultValue;
      }
      object = isFunction(value) ? value.call(object) : value;
    }
    return object;
  }

  /** Used for built-in method references. */
  var arrayProto$4 = Array.prototype;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeReverse = arrayProto$4.reverse;

  /**
   * Reverses `array` so that the first element becomes the last, the second
   * element becomes the second to last, and so on.
   *
   * **Note:** This method mutates `array` and is based on
   * [`Array#reverse`](https://mdn.io/Array/reverse).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to modify.
   * @returns {Array} Returns `array`.
   * @example
   *
   * var array = [1, 2, 3];
   *
   * _.reverse(array);
   * // => [3, 2, 1]
   *
   * console.log(array);
   * // => [3, 2, 1]
   */
  function reverse(array) {
    return array == null ? array : nativeReverse.call(array);
  }

  /**
   * Computes `number` rounded to `precision`.
   *
   * @static
   * @memberOf _
   * @since 3.10.0
   * @category Math
   * @param {number} number The number to round.
   * @param {number} [precision=0] The precision to round to.
   * @returns {number} Returns the rounded number.
   * @example
   *
   * _.round(4.006);
   * // => 4
   *
   * _.round(4.006, 2);
   * // => 4.01
   *
   * _.round(4060, -2);
   * // => 4100
   */
  var round = createRound('round');

  /**
   * A specialized version of `_.sample` for arrays.
   *
   * @private
   * @param {Array} array The array to sample.
   * @returns {*} Returns the random element.
   */
  function arraySample(array) {
    var length = array.length;
    return length ? array[baseRandom(0, length - 1)] : undefined;
  }

  /**
   * The base implementation of `_.sample`.
   *
   * @private
   * @param {Array|Object} collection The collection to sample.
   * @returns {*} Returns the random element.
   */
  function baseSample(collection) {
    return arraySample(values(collection));
  }

  /**
   * Gets a random element from `collection`.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to sample.
   * @returns {*} Returns the random element.
   * @example
   *
   * _.sample([1, 2, 3, 4]);
   * // => 2
   */
  function sample(collection) {
    var func = isArray(collection) ? arraySample : baseSample;
    return func(collection);
  }

  /**
   * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
   *
   * @private
   * @param {Array} array The array to shuffle.
   * @param {number} [size=array.length] The size of `array`.
   * @returns {Array} Returns `array`.
   */
  function shuffleSelf(array, size) {
    var index = -1,
        length = array.length,
        lastIndex = length - 1;

    size = size === undefined ? length : size;
    while (++index < size) {
      var rand = baseRandom(index, lastIndex),
          value = array[rand];

      array[rand] = array[index];
      array[index] = value;
    }
    array.length = size;
    return array;
  }

  /**
   * A specialized version of `_.sampleSize` for arrays.
   *
   * @private
   * @param {Array} array The array to sample.
   * @param {number} n The number of elements to sample.
   * @returns {Array} Returns the random elements.
   */
  function arraySampleSize(array, n) {
    return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
  }

  /**
   * The base implementation of `_.sampleSize` without param guards.
   *
   * @private
   * @param {Array|Object} collection The collection to sample.
   * @param {number} n The number of elements to sample.
   * @returns {Array} Returns the random elements.
   */
  function baseSampleSize(collection, n) {
    var array = values(collection);
    return shuffleSelf(array, baseClamp(n, 0, array.length));
  }

  /**
   * Gets `n` random elements at unique keys from `collection` up to the
   * size of `collection`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to sample.
   * @param {number} [n=1] The number of elements to sample.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the random elements.
   * @example
   *
   * _.sampleSize([1, 2, 3], 2);
   * // => [3, 1]
   *
   * _.sampleSize([1, 2, 3], 4);
   * // => [2, 3, 1]
   */
  function sampleSize(collection, n, guard) {
    if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
      n = 1;
    } else {
      n = toInteger(n);
    }
    var func = isArray(collection) ? arraySampleSize : baseSampleSize;
    return func(collection, n);
  }

  /**
   * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
   * it's created. Arrays are created for missing index properties while objects
   * are created for all other missing properties. Use `_.setWith` to customize
   * `path` creation.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.set(object, 'a[0].b.c', 4);
   * console.log(object.a[0].b.c);
   * // => 4
   *
   * _.set(object, ['x', '0', 'y', 'z'], 5);
   * console.log(object.x[0].y.z);
   * // => 5
   */
  function set$1(object, path, value) {
    return object == null ? object : baseSet(object, path, value);
  }

  /**
   * This method is like `_.set` except that it accepts `customizer` which is
   * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
   * path creation is handled by the method instead. The `customizer` is invoked
   * with three arguments: (nsValue, key, nsObject).
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to set.
   * @param {*} value The value to set.
   * @param {Function} [customizer] The function to customize assigned values.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var object = {};
   *
   * _.setWith(object, '[0][1]', 'a', Object);
   * // => { '0': { '1': 'a' } }
   */
  function setWith(object, path, value, customizer) {
    customizer = typeof customizer == 'function' ? customizer : undefined;
    return object == null ? object : baseSet(object, path, value, customizer);
  }

  /**
   * A specialized version of `_.shuffle` for arrays.
   *
   * @private
   * @param {Array} array The array to shuffle.
   * @returns {Array} Returns the new shuffled array.
   */
  function arrayShuffle(array) {
    return shuffleSelf(copyArray(array));
  }

  /**
   * The base implementation of `_.shuffle`.
   *
   * @private
   * @param {Array|Object} collection The collection to shuffle.
   * @returns {Array} Returns the new shuffled array.
   */
  function baseShuffle(collection) {
    return shuffleSelf(values(collection));
  }

  /**
   * Creates an array of shuffled values, using a version of the
   * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to shuffle.
   * @returns {Array} Returns the new shuffled array.
   * @example
   *
   * _.shuffle([1, 2, 3, 4]);
   * // => [4, 1, 3, 2]
   */
  function shuffle(collection) {
    var func = isArray(collection) ? arrayShuffle : baseShuffle;
    return func(collection);
  }

  /** `Object#toString` result references. */
  var mapTag$9 = '[object Map]',
      setTag$9 = '[object Set]';

  /**
   * Gets the size of `collection` by returning its length for array-like
   * values or the number of own enumerable string keyed properties for objects.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object|string} collection The collection to inspect.
   * @returns {number} Returns the collection size.
   * @example
   *
   * _.size([1, 2, 3]);
   * // => 3
   *
   * _.size({ 'a': 1, 'b': 2 });
   * // => 2
   *
   * _.size('pebbles');
   * // => 7
   */
  function size(collection) {
    if (collection == null) {
      return 0;
    }
    if (isArrayLike(collection)) {
      return isString(collection) ? stringSize(collection) : collection.length;
    }
    var tag = getTag$1(collection);
    if (tag == mapTag$9 || tag == setTag$9) {
      return collection.size;
    }
    return baseKeys(collection).length;
  }

  /**
   * Creates a slice of `array` from `start` up to, but not including, `end`.
   *
   * **Note:** This method is used instead of
   * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
   * returned.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */
  function slice(array, start, end) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return [];
    }
    if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
      start = 0;
      end = length;
    }
    else {
      start = start == null ? 0 : toInteger(start);
      end = end === undefined ? length : toInteger(end);
    }
    return baseSlice(array, start, end);
  }

  /**
   * Converts `string` to
   * [snake case](https://en.wikipedia.org/wiki/Snake_case).
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the snake cased string.
   * @example
   *
   * _.snakeCase('Foo Bar');
   * // => 'foo_bar'
   *
   * _.snakeCase('fooBar');
   * // => 'foo_bar'
   *
   * _.snakeCase('--FOO-BAR--');
   * // => 'foo_bar'
   */
  var snakeCase = createCompounder(function(result, word, index) {
    return result + (index ? '_' : '') + word.toLowerCase();
  });

  /**
   * The base implementation of `_.some` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function baseSome(collection, predicate) {
    var result;

    baseEach(collection, function(value, index, collection) {
      result = predicate(value, index, collection);
      return !result;
    });
    return !!result;
  }

  /**
   * Checks if `predicate` returns truthy for **any** element of `collection`.
   * Iteration is stopped once `predicate` returns truthy. The predicate is
   * invoked with three arguments: (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   * @example
   *
   * _.some([null, 0, 'yes', false], Boolean);
   * // => true
   *
   * var users = [
   *   { 'user': 'barney', 'active': true },
   *   { 'user': 'fred',   'active': false }
   * ];
   *
   * // The `_.matches` iteratee shorthand.
   * _.some(users, { 'user': 'barney', 'active': false });
   * // => false
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.some(users, ['active', false]);
   * // => true
   *
   * // The `_.property` iteratee shorthand.
   * _.some(users, 'active');
   * // => true
   */
  function some(collection, predicate, guard) {
    var func = isArray(collection) ? arraySome : baseSome;
    if (guard && isIterateeCall(collection, predicate, guard)) {
      predicate = undefined;
    }
    return func(collection, baseIteratee(predicate, 3));
  }

  /**
   * Creates an array of elements, sorted in ascending order by the results of
   * running each element in a collection thru each iteratee. This method
   * performs a stable sort, that is, it preserves the original sort order of
   * equal elements. The iteratees are invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {...(Function|Function[])} [iteratees=[_.identity]]
   *  The iteratees to sort by.
   * @returns {Array} Returns the new sorted array.
   * @example
   *
   * var users = [
   *   { 'user': 'fred',   'age': 48 },
   *   { 'user': 'barney', 'age': 36 },
   *   { 'user': 'fred',   'age': 40 },
   *   { 'user': 'barney', 'age': 34 }
   * ];
   *
   * _.sortBy(users, [function(o) { return o.user; }]);
   * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
   *
   * _.sortBy(users, ['user', 'age']);
   * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
   */
  var sortBy = baseRest(function(collection, iteratees) {
    if (collection == null) {
      return [];
    }
    var length = iteratees.length;
    if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
      iteratees = [];
    } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
      iteratees = [iteratees[0]];
    }
    return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
  });

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH$2 = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH$2 - 1;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeFloor$3 = Math.floor,
      nativeMin$a = Math.min;

  /**
   * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
   * which invokes `iteratee` for `value` and each element of `array` to compute
   * their sort ranking. The iteratee is invoked with one argument; (value).
   *
   * @private
   * @param {Array} array The sorted array to inspect.
   * @param {*} value The value to evaluate.
   * @param {Function} iteratee The iteratee invoked per element.
   * @param {boolean} [retHighest] Specify returning the highest qualified index.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   */
  function baseSortedIndexBy(array, value, iteratee, retHighest) {
    value = iteratee(value);

    var low = 0,
        high = array == null ? 0 : array.length,
        valIsNaN = value !== value,
        valIsNull = value === null,
        valIsSymbol = isSymbol(value),
        valIsUndefined = value === undefined;

    while (low < high) {
      var mid = nativeFloor$3((low + high) / 2),
          computed = iteratee(array[mid]),
          othIsDefined = computed !== undefined,
          othIsNull = computed === null,
          othIsReflexive = computed === computed,
          othIsSymbol = isSymbol(computed);

      if (valIsNaN) {
        var setLow = retHighest || othIsReflexive;
      } else if (valIsUndefined) {
        setLow = othIsReflexive && (retHighest || othIsDefined);
      } else if (valIsNull) {
        setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
      } else if (valIsSymbol) {
        setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
      } else if (othIsNull || othIsSymbol) {
        setLow = false;
      } else {
        setLow = retHighest ? (computed <= value) : (computed < value);
      }
      if (setLow) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return nativeMin$a(high, MAX_ARRAY_INDEX);
  }

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH$3 = 4294967295,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH$3 >>> 1;

  /**
   * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
   * performs a binary search of `array` to determine the index at which `value`
   * should be inserted into `array` in order to maintain its sort order.
   *
   * @private
   * @param {Array} array The sorted array to inspect.
   * @param {*} value The value to evaluate.
   * @param {boolean} [retHighest] Specify returning the highest qualified index.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   */
  function baseSortedIndex(array, value, retHighest) {
    var low = 0,
        high = array == null ? low : array.length;

    if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
      while (low < high) {
        var mid = (low + high) >>> 1,
            computed = array[mid];

        if (computed !== null && !isSymbol(computed) &&
            (retHighest ? (computed <= value) : (computed < value))) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return high;
    }
    return baseSortedIndexBy(array, value, identity, retHighest);
  }

  /**
   * Uses a binary search to determine the lowest index at which `value`
   * should be inserted into `array` in order to maintain its sort order.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The sorted array to inspect.
   * @param {*} value The value to evaluate.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   * @example
   *
   * _.sortedIndex([30, 50], 40);
   * // => 1
   */
  function sortedIndex(array, value) {
    return baseSortedIndex(array, value);
  }

  /**
   * This method is like `_.sortedIndex` except that it accepts `iteratee`
   * which is invoked for `value` and each element of `array` to compute their
   * sort ranking. The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The sorted array to inspect.
   * @param {*} value The value to evaluate.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   * @example
   *
   * var objects = [{ 'x': 4 }, { 'x': 5 }];
   *
   * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
   * // => 0
   *
   * // The `_.property` iteratee shorthand.
   * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
   * // => 0
   */
  function sortedIndexBy(array, value, iteratee) {
    return baseSortedIndexBy(array, value, baseIteratee(iteratee, 2));
  }

  /**
   * This method is like `_.indexOf` except that it performs a binary
   * search on a sorted `array`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   * @example
   *
   * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
   * // => 1
   */
  function sortedIndexOf(array, value) {
    var length = array == null ? 0 : array.length;
    if (length) {
      var index = baseSortedIndex(array, value);
      if (index < length && eq(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * This method is like `_.sortedIndex` except that it returns the highest
   * index at which `value` should be inserted into `array` in order to
   * maintain its sort order.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The sorted array to inspect.
   * @param {*} value The value to evaluate.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   * @example
   *
   * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
   * // => 4
   */
  function sortedLastIndex(array, value) {
    return baseSortedIndex(array, value, true);
  }

  /**
   * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
   * which is invoked for `value` and each element of `array` to compute their
   * sort ranking. The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The sorted array to inspect.
   * @param {*} value The value to evaluate.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   * @example
   *
   * var objects = [{ 'x': 4 }, { 'x': 5 }];
   *
   * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
   * // => 1
   *
   * // The `_.property` iteratee shorthand.
   * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
   * // => 1
   */
  function sortedLastIndexBy(array, value, iteratee) {
    return baseSortedIndexBy(array, value, baseIteratee(iteratee, 2), true);
  }

  /**
   * This method is like `_.lastIndexOf` except that it performs a binary
   * search on a sorted `array`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   * @example
   *
   * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
   * // => 3
   */
  function sortedLastIndexOf(array, value) {
    var length = array == null ? 0 : array.length;
    if (length) {
      var index = baseSortedIndex(array, value, true) - 1;
      if (eq(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @returns {Array} Returns the new duplicate free array.
   */
  function baseSortedUniq(array, iteratee) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value) : value;

      if (!index || !eq(computed, seen)) {
        var seen = computed;
        result[resIndex++] = value === 0 ? 0 : value;
      }
    }
    return result;
  }

  /**
   * This method is like `_.uniq` except that it's designed and optimized
   * for sorted arrays.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @returns {Array} Returns the new duplicate free array.
   * @example
   *
   * _.sortedUniq([1, 1, 2]);
   * // => [1, 2]
   */
  function sortedUniq(array) {
    return (array && array.length)
      ? baseSortedUniq(array)
      : [];
  }

  /**
   * This method is like `_.uniqBy` except that it's designed and optimized
   * for sorted arrays.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @returns {Array} Returns the new duplicate free array.
   * @example
   *
   * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
   * // => [1.1, 2.3]
   */
  function sortedUniqBy(array, iteratee) {
    return (array && array.length)
      ? baseSortedUniq(array, baseIteratee(iteratee, 2))
      : [];
  }

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH$4 = 4294967295;

  /**
   * Splits `string` by `separator`.
   *
   * **Note:** This method is based on
   * [`String#split`](https://mdn.io/String/split).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to split.
   * @param {RegExp|string} separator The separator pattern to split by.
   * @param {number} [limit] The length to truncate results to.
   * @returns {Array} Returns the string segments.
   * @example
   *
   * _.split('a-b-c', '-', 2);
   * // => ['a', 'b']
   */
  function split(string, separator, limit) {
    if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
      separator = limit = undefined;
    }
    limit = limit === undefined ? MAX_ARRAY_LENGTH$4 : limit >>> 0;
    if (!limit) {
      return [];
    }
    string = toString(string);
    if (string && (
          typeof separator == 'string' ||
          (separator != null && !isRegExp(separator))
        )) {
      separator = baseToString(separator);
      if (!separator && hasUnicode(string)) {
        return castSlice(stringToArray(string), 0, limit);
      }
    }
    return string.split(separator, limit);
  }

  /** Error message constants. */
  var FUNC_ERROR_TEXT$a = 'Expected a function';

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$d = Math.max;

  /**
   * Creates a function that invokes `func` with the `this` binding of the
   * create function and an array of arguments much like
   * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
   *
   * **Note:** This method is based on the
   * [spread operator](https://mdn.io/spread_operator).
   *
   * @static
   * @memberOf _
   * @since 3.2.0
   * @category Function
   * @param {Function} func The function to spread arguments over.
   * @param {number} [start=0] The start position of the spread.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var say = _.spread(function(who, what) {
   *   return who + ' says ' + what;
   * });
   *
   * say(['fred', 'hello']);
   * // => 'fred says hello'
   *
   * var numbers = Promise.all([
   *   Promise.resolve(40),
   *   Promise.resolve(36)
   * ]);
   *
   * numbers.then(_.spread(function(x, y) {
   *   return x + y;
   * }));
   * // => a Promise of 76
   */
  function spread(func, start) {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$a);
    }
    start = start == null ? 0 : nativeMax$d(toInteger(start), 0);
    return baseRest(function(args) {
      var array = args[start],
          otherArgs = castSlice(args, 0, start);

      if (array) {
        arrayPush(otherArgs, array);
      }
      return apply(func, this, otherArgs);
    });
  }

  /**
   * Converts `string` to
   * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
   *
   * @static
   * @memberOf _
   * @since 3.1.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the start cased string.
   * @example
   *
   * _.startCase('--foo-bar--');
   * // => 'Foo Bar'
   *
   * _.startCase('fooBar');
   * // => 'Foo Bar'
   *
   * _.startCase('__FOO_BAR__');
   * // => 'FOO BAR'
   */
  var startCase = createCompounder(function(result, word, index) {
    return result + (index ? ' ' : '') + upperFirst(word);
  });

  /**
   * Checks if `string` starts with the given target string.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to inspect.
   * @param {string} [target] The string to search for.
   * @param {number} [position=0] The position to search from.
   * @returns {boolean} Returns `true` if `string` starts with `target`,
   *  else `false`.
   * @example
   *
   * _.startsWith('abc', 'a');
   * // => true
   *
   * _.startsWith('abc', 'b');
   * // => false
   *
   * _.startsWith('abc', 'b', 1);
   * // => true
   */
  function startsWith(string, target, position) {
    string = toString(string);
    position = position == null
      ? 0
      : baseClamp(toInteger(position), 0, string.length);

    target = baseToString(target);
    return string.slice(position, position + target.length) == target;
  }

  /**
   * This method returns a new empty object.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Object} Returns the new empty object.
   * @example
   *
   * var objects = _.times(2, _.stubObject);
   *
   * console.log(objects);
   * // => [{}, {}]
   *
   * console.log(objects[0] === objects[1]);
   * // => false
   */
  function stubObject() {
    return {};
  }

  /**
   * This method returns an empty string.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {string} Returns the empty string.
   * @example
   *
   * _.times(2, _.stubString);
   * // => ['', '']
   */
  function stubString() {
    return '';
  }

  /**
   * This method returns `true`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `true`.
   * @example
   *
   * _.times(2, _.stubTrue);
   * // => [true, true]
   */
  function stubTrue() {
    return true;
  }

  /**
   * Subtract two numbers.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Math
   * @param {number} minuend The first number in a subtraction.
   * @param {number} subtrahend The second number in a subtraction.
   * @returns {number} Returns the difference.
   * @example
   *
   * _.subtract(6, 4);
   * // => 2
   */
  var subtract = createMathOperation(function(minuend, subtrahend) {
    return minuend - subtrahend;
  }, 0);

  /**
   * Computes the sum of the values in `array`.
   *
   * @static
   * @memberOf _
   * @since 3.4.0
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {number} Returns the sum.
   * @example
   *
   * _.sum([4, 2, 8, 6]);
   * // => 20
   */
  function sum(array) {
    return (array && array.length)
      ? baseSum(array, identity)
      : 0;
  }

  /**
   * This method is like `_.sum` except that it accepts `iteratee` which is
   * invoked for each element in `array` to generate the value to be summed.
   * The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Math
   * @param {Array} array The array to iterate over.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {number} Returns the sum.
   * @example
   *
   * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
   *
   * _.sumBy(objects, function(o) { return o.n; });
   * // => 20
   *
   * // The `_.property` iteratee shorthand.
   * _.sumBy(objects, 'n');
   * // => 20
   */
  function sumBy(array, iteratee) {
    return (array && array.length)
      ? baseSum(array, baseIteratee(iteratee, 2))
      : 0;
  }

  /**
   * Gets all but the first element of `array`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to query.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.tail([1, 2, 3]);
   * // => [2, 3]
   */
  function tail(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseSlice(array, 1, length) : [];
  }

  /**
   * Creates a slice of `array` with `n` elements taken from the beginning.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to query.
   * @param {number} [n=1] The number of elements to take.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.take([1, 2, 3]);
   * // => [1]
   *
   * _.take([1, 2, 3], 2);
   * // => [1, 2]
   *
   * _.take([1, 2, 3], 5);
   * // => [1, 2, 3]
   *
   * _.take([1, 2, 3], 0);
   * // => []
   */
  function take(array, n, guard) {
    if (!(array && array.length)) {
      return [];
    }
    n = (guard || n === undefined) ? 1 : toInteger(n);
    return baseSlice(array, 0, n < 0 ? 0 : n);
  }

  /**
   * Creates a slice of `array` with `n` elements taken from the end.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to query.
   * @param {number} [n=1] The number of elements to take.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.takeRight([1, 2, 3]);
   * // => [3]
   *
   * _.takeRight([1, 2, 3], 2);
   * // => [2, 3]
   *
   * _.takeRight([1, 2, 3], 5);
   * // => [1, 2, 3]
   *
   * _.takeRight([1, 2, 3], 0);
   * // => []
   */
  function takeRight(array, n, guard) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return [];
    }
    n = (guard || n === undefined) ? 1 : toInteger(n);
    n = length - n;
    return baseSlice(array, n < 0 ? 0 : n, length);
  }

  /**
   * Creates a slice of `array` with elements taken from the end. Elements are
   * taken until `predicate` returns falsey. The predicate is invoked with
   * three arguments: (value, index, array).
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to query.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': true },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': false }
   * ];
   *
   * _.takeRightWhile(users, function(o) { return !o.active; });
   * // => objects for ['fred', 'pebbles']
   *
   * // The `_.matches` iteratee shorthand.
   * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
   * // => objects for ['pebbles']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.takeRightWhile(users, ['active', false]);
   * // => objects for ['fred', 'pebbles']
   *
   * // The `_.property` iteratee shorthand.
   * _.takeRightWhile(users, 'active');
   * // => []
   */
  function takeRightWhile(array, predicate) {
    return (array && array.length)
      ? baseWhile(array, baseIteratee(predicate, 3), false, true)
      : [];
  }

  /**
   * Creates a slice of `array` with elements taken from the beginning. Elements
   * are taken until `predicate` returns falsey. The predicate is invoked with
   * three arguments: (value, index, array).
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to query.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': false },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': true }
   * ];
   *
   * _.takeWhile(users, function(o) { return !o.active; });
   * // => objects for ['barney', 'fred']
   *
   * // The `_.matches` iteratee shorthand.
   * _.takeWhile(users, { 'user': 'barney', 'active': false });
   * // => objects for ['barney']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.takeWhile(users, ['active', false]);
   * // => objects for ['barney', 'fred']
   *
   * // The `_.property` iteratee shorthand.
   * _.takeWhile(users, 'active');
   * // => []
   */
  function takeWhile(array, predicate) {
    return (array && array.length)
      ? baseWhile(array, baseIteratee(predicate, 3))
      : [];
  }

  /**
   * This method invokes `interceptor` and returns `value`. The interceptor
   * is invoked with one argument; (value). The purpose of this method is to
   * "tap into" a method chain sequence in order to modify intermediate results.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Seq
   * @param {*} value The value to provide to `interceptor`.
   * @param {Function} interceptor The function to invoke.
   * @returns {*} Returns `value`.
   * @example
   *
   * _([1, 2, 3])
   *  .tap(function(array) {
   *    // Mutate input array.
   *    array.pop();
   *  })
   *  .reverse()
   *  .value();
   * // => [2, 1]
   */
  function tap(value, interceptor) {
    interceptor(value);
    return value;
  }

  /** Used for built-in method references. */
  var objectProto$q = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$m = objectProto$q.hasOwnProperty;

  /**
   * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
   * of source objects to the destination object for all destination properties
   * that resolve to `undefined`.
   *
   * @private
   * @param {*} objValue The destination value.
   * @param {*} srcValue The source value.
   * @param {string} key The key of the property to assign.
   * @param {Object} object The parent object of `objValue`.
   * @returns {*} Returns the value to assign.
   */
  function customDefaultsAssignIn(objValue, srcValue, key, object) {
    if (objValue === undefined ||
        (eq(objValue, objectProto$q[key]) && !hasOwnProperty$m.call(object, key))) {
      return srcValue;
    }
    return objValue;
  }

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /** Used to match template delimiters. */
  var reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g;

  /** Used to match template delimiters. */
  var reEvaluate = /<%([\s\S]+?)%>/g;

  /**
   * By default, the template delimiters used by lodash are like those in
   * embedded Ruby (ERB) as well as ES2015 template strings. Change the
   * following template settings to use alternative delimiters.
   *
   * @static
   * @memberOf _
   * @type {Object}
   */
  var templateSettings = {

    /**
     * Used to detect `data` property values to be HTML-escaped.
     *
     * @memberOf _.templateSettings
     * @type {RegExp}
     */
    'escape': reEscape,

    /**
     * Used to detect code to be evaluated.
     *
     * @memberOf _.templateSettings
     * @type {RegExp}
     */
    'evaluate': reEvaluate,

    /**
     * Used to detect `data` property values to inject.
     *
     * @memberOf _.templateSettings
     * @type {RegExp}
     */
    'interpolate': reInterpolate,

    /**
     * Used to reference the data object in the template text.
     *
     * @memberOf _.templateSettings
     * @type {string}
     */
    'variable': '',

    /**
     * Used to import variables into the compiled template.
     *
     * @memberOf _.templateSettings
     * @type {Object}
     */
    'imports': {

      /**
       * A reference to the `lodash` function.
       *
       * @memberOf _.templateSettings.imports
       * @type {Function}
       */
      '_': { 'escape': escape }
    }
  };

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used for built-in method references. */
  var objectProto$r = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$n = objectProto$r.hasOwnProperty;

  /**
   * Creates a compiled template function that can interpolate data properties
   * in "interpolate" delimiters, HTML-escape interpolated data properties in
   * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
   * properties may be accessed as free variables in the template. If a setting
   * object is given, it takes precedence over `_.templateSettings` values.
   *
   * **Note:** In the development build `_.template` utilizes
   * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
   * for easier debugging.
   *
   * For more information on precompiling templates see
   * [lodash's custom builds documentation](https://lodash.com/custom-builds).
   *
   * For more information on Chrome extension sandboxes see
   * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category String
   * @param {string} [string=''] The template string.
   * @param {Object} [options={}] The options object.
   * @param {RegExp} [options.escape=_.templateSettings.escape]
   *  The HTML "escape" delimiter.
   * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
   *  The "evaluate" delimiter.
   * @param {Object} [options.imports=_.templateSettings.imports]
   *  An object to import into the template as free variables.
   * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
   *  The "interpolate" delimiter.
   * @param {string} [options.sourceURL='templateSources[n]']
   *  The sourceURL of the compiled template.
   * @param {string} [options.variable='obj']
   *  The data object variable name.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Function} Returns the compiled template function.
   * @example
   *
   * // Use the "interpolate" delimiter to create a compiled template.
   * var compiled = _.template('hello <%= user %>!');
   * compiled({ 'user': 'fred' });
   * // => 'hello fred!'
   *
   * // Use the HTML "escape" delimiter to escape data property values.
   * var compiled = _.template('<b><%- value %></b>');
   * compiled({ 'value': '<script>' });
   * // => '<b>&lt;script&gt;</b>'
   *
   * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
   * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
   * compiled({ 'users': ['fred', 'barney'] });
   * // => '<li>fred</li><li>barney</li>'
   *
   * // Use the internal `print` function in "evaluate" delimiters.
   * var compiled = _.template('<% print("hello " + user); %>!');
   * compiled({ 'user': 'barney' });
   * // => 'hello barney!'
   *
   * // Use the ES template literal delimiter as an "interpolate" delimiter.
   * // Disable support by replacing the "interpolate" delimiter.
   * var compiled = _.template('hello ${ user }!');
   * compiled({ 'user': 'pebbles' });
   * // => 'hello pebbles!'
   *
   * // Use backslashes to treat delimiters as plain text.
   * var compiled = _.template('<%= "\\<%- value %\\>" %>');
   * compiled({ 'value': 'ignored' });
   * // => '<%- value %>'
   *
   * // Use the `imports` option to import `jQuery` as `jq`.
   * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
   * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
   * compiled({ 'users': ['fred', 'barney'] });
   * // => '<li>fred</li><li>barney</li>'
   *
   * // Use the `sourceURL` option to specify a custom sourceURL for the template.
   * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
   * compiled(data);
   * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
   *
   * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
   * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
   * compiled.source;
   * // => function(data) {
   * //   var __t, __p = '';
   * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
   * //   return __p;
   * // }
   *
   * // Use custom template delimiters.
   * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
   * var compiled = _.template('hello {{ user }}!');
   * compiled({ 'user': 'mustache' });
   * // => 'hello mustache!'
   *
   * // Use the `source` property to inline compiled templates for meaningful
   * // line numbers in error messages and stack traces.
   * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
   *   var JST = {\
   *     "main": ' + _.template(mainText).source + '\
   *   };\
   * ');
   */
  function template(string, options, guard) {
    // Based on John Resig's `tmpl` implementation
    // (http://ejohn.org/blog/javascript-micro-templating/)
    // and Laura Doktorova's doT.js (https://github.com/olado/doT).
    var settings = templateSettings.imports._.templateSettings || templateSettings;

    if (guard && isIterateeCall(string, options, guard)) {
      options = undefined;
    }
    string = toString(string);
    options = assignInWith({}, options, settings, customDefaultsAssignIn);

    var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
        importsKeys = keys(imports),
        importsValues = baseValues(imports, importsKeys);

    var isEscaping,
        isEvaluating,
        index = 0,
        interpolate = options.interpolate || reNoMatch,
        source = "__p += '";

    // Compile the regexp to match each delimiter.
    var reDelimiters = RegExp(
      (options.escape || reNoMatch).source + '|' +
      interpolate.source + '|' +
      (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
      (options.evaluate || reNoMatch).source + '|$'
    , 'g');

    // Use a sourceURL for easier debugging.
    // The sourceURL gets injected into the source that's eval-ed, so be careful
    // with lookup (in case of e.g. prototype pollution), and strip newlines if any.
    // A newline wouldn't be a valid sourceURL anyway, and it'd enable code injection.
    var sourceURL = hasOwnProperty$n.call(options, 'sourceURL')
      ? ('//# sourceURL=' +
         (options.sourceURL + '').replace(/[\r\n]/g, ' ') +
         '\n')
      : '';

    string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
      interpolateValue || (interpolateValue = esTemplateValue);

      // Escape characters that can't be included in string literals.
      source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

      // Replace delimiters with snippets.
      if (escapeValue) {
        isEscaping = true;
        source += "' +\n__e(" + escapeValue + ") +\n'";
      }
      if (evaluateValue) {
        isEvaluating = true;
        source += "';\n" + evaluateValue + ";\n__p += '";
      }
      if (interpolateValue) {
        source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
      }
      index = offset + match.length;

      // The JS engine embedded in Adobe products needs `match` returned in
      // order to produce the correct `offset` value.
      return match;
    });

    source += "';\n";

    // If `variable` is not specified wrap a with-statement around the generated
    // code to add the data object to the top of the scope chain.
    // Like with sourceURL, we take care to not check the option's prototype,
    // as this configuration is a code injection vector.
    var variable = hasOwnProperty$n.call(options, 'variable') && options.variable;
    if (!variable) {
      source = 'with (obj) {\n' + source + '\n}\n';
    }
    // Cleanup code by stripping empty strings.
    source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
      .replace(reEmptyStringMiddle, '$1')
      .replace(reEmptyStringTrailing, '$1;');

    // Frame code as the function body.
    source = 'function(' + (variable || 'obj') + ') {\n' +
      (variable
        ? ''
        : 'obj || (obj = {});\n'
      ) +
      "var __t, __p = ''" +
      (isEscaping
         ? ', __e = _.escape'
         : ''
      ) +
      (isEvaluating
        ? ', __j = Array.prototype.join;\n' +
          "function print() { __p += __j.call(arguments, '') }\n"
        : ';\n'
      ) +
      source +
      'return __p\n}';

    var result = attempt(function() {
      return Function(importsKeys, sourceURL + 'return ' + source)
        .apply(undefined, importsValues);
    });

    // Provide the compiled function's source by its `toString` method or
    // the `source` property as a convenience for inlining compiled templates.
    result.source = source;
    if (isError(result)) {
      throw result;
    }
    return result;
  }

  /** Error message constants. */
  var FUNC_ERROR_TEXT$b = 'Expected a function';

  /**
   * Creates a throttled function that only invokes `func` at most once per
   * every `wait` milliseconds. The throttled function comes with a `cancel`
   * method to cancel delayed `func` invocations and a `flush` method to
   * immediately invoke them. Provide `options` to indicate whether `func`
   * should be invoked on the leading and/or trailing edge of the `wait`
   * timeout. The `func` is invoked with the last arguments provided to the
   * throttled function. Subsequent calls to the throttled function return the
   * result of the last `func` invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the throttled function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.throttle` and `_.debounce`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to throttle.
   * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=true]
   *  Specify invoking on the leading edge of the timeout.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new throttled function.
   * @example
   *
   * // Avoid excessively updating the position while scrolling.
   * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
   *
   * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
   * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
   * jQuery(element).on('click', throttled);
   *
   * // Cancel the trailing throttled invocation.
   * jQuery(window).on('popstate', throttled.cancel);
   */
  function throttle(func, wait, options) {
    var leading = true,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$b);
    }
    if (isObject(options)) {
      leading = 'leading' in options ? !!options.leading : leading;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
      'leading': leading,
      'maxWait': wait,
      'trailing': trailing
    });
  }

  /**
   * This method is like `_.tap` except that it returns the result of `interceptor`.
   * The purpose of this method is to "pass thru" values replacing intermediate
   * results in a method chain sequence.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Seq
   * @param {*} value The value to provide to `interceptor`.
   * @param {Function} interceptor The function to invoke.
   * @returns {*} Returns the result of `interceptor`.
   * @example
   *
   * _('  abc  ')
   *  .chain()
   *  .trim()
   *  .thru(function(value) {
   *    return [value];
   *  })
   *  .value();
   * // => ['abc']
   */
  function thru(value, interceptor) {
    return interceptor(value);
  }

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$4 = 9007199254740991;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH$5 = 4294967295;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMin$b = Math.min;

  /**
   * Invokes the iteratee `n` times, returning an array of the results of
   * each invocation. The iteratee is invoked with one argument; (index).
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   * @example
   *
   * _.times(3, String);
   * // => ['0', '1', '2']
   *
   *  _.times(4, _.constant(0));
   * // => [0, 0, 0, 0]
   */
  function times(n, iteratee) {
    n = toInteger(n);
    if (n < 1 || n > MAX_SAFE_INTEGER$4) {
      return [];
    }
    var index = MAX_ARRAY_LENGTH$5,
        length = nativeMin$b(n, MAX_ARRAY_LENGTH$5);

    iteratee = castFunction(iteratee);
    n -= MAX_ARRAY_LENGTH$5;

    var result = baseTimes(length, iteratee);
    while (++index < n) {
      iteratee(index);
    }
    return result;
  }

  /**
   * Enables the wrapper to be iterable.
   *
   * @name Symbol.iterator
   * @memberOf _
   * @since 4.0.0
   * @category Seq
   * @returns {Object} Returns the wrapper object.
   * @example
   *
   * var wrapped = _([1, 2]);
   *
   * wrapped[Symbol.iterator]() === wrapped;
   * // => true
   *
   * Array.from(wrapped);
   * // => [1, 2]
   */
  function wrapperToIterator() {
    return this;
  }

  /**
   * The base implementation of `wrapperValue` which returns the result of
   * performing a sequence of actions on the unwrapped `value`, where each
   * successive action is supplied the return value of the previous.
   *
   * @private
   * @param {*} value The unwrapped value.
   * @param {Array} actions Actions to perform to resolve the unwrapped value.
   * @returns {*} Returns the resolved value.
   */
  function baseWrapperValue(value, actions) {
    var result = value;
    if (result instanceof LazyWrapper) {
      result = result.value();
    }
    return arrayReduce(actions, function(result, action) {
      return action.func.apply(action.thisArg, arrayPush([result], action.args));
    }, result);
  }

  /**
   * Executes the chain sequence to resolve the unwrapped value.
   *
   * @name value
   * @memberOf _
   * @since 0.1.0
   * @alias toJSON, valueOf
   * @category Seq
   * @returns {*} Returns the resolved unwrapped value.
   * @example
   *
   * _([1, 2, 3]).value();
   * // => [1, 2, 3]
   */
  function wrapperValue() {
    return baseWrapperValue(this.__wrapped__, this.__actions__);
  }

  /**
   * Converts `string`, as a whole, to lower case just like
   * [String#toLowerCase](https://mdn.io/toLowerCase).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the lower cased string.
   * @example
   *
   * _.toLower('--Foo-Bar--');
   * // => '--foo-bar--'
   *
   * _.toLower('fooBar');
   * // => 'foobar'
   *
   * _.toLower('__FOO_BAR__');
   * // => '__foo_bar__'
   */
  function toLower(value) {
    return toString(value).toLowerCase();
  }

  /**
   * Converts `value` to a property path array.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {*} value The value to convert.
   * @returns {Array} Returns the new property path array.
   * @example
   *
   * _.toPath('a.b.c');
   * // => ['a', 'b', 'c']
   *
   * _.toPath('a[0].b.c');
   * // => ['a', '0', 'b', 'c']
   */
  function toPath(value) {
    if (isArray(value)) {
      return arrayMap(value, toKey);
    }
    return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
  }

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$5 = 9007199254740991;

  /**
   * Converts `value` to a safe integer. A safe integer can be compared and
   * represented correctly.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toSafeInteger(3.2);
   * // => 3
   *
   * _.toSafeInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toSafeInteger(Infinity);
   * // => 9007199254740991
   *
   * _.toSafeInteger('3.2');
   * // => 3
   */
  function toSafeInteger(value) {
    return value
      ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER$5, MAX_SAFE_INTEGER$5)
      : (value === 0 ? value : 0);
  }

  /**
   * Converts `string`, as a whole, to upper case just like
   * [String#toUpperCase](https://mdn.io/toUpperCase).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the upper cased string.
   * @example
   *
   * _.toUpper('--foo-bar--');
   * // => '--FOO-BAR--'
   *
   * _.toUpper('fooBar');
   * // => 'FOOBAR'
   *
   * _.toUpper('__foo_bar__');
   * // => '__FOO_BAR__'
   */
  function toUpper(value) {
    return toString(value).toUpperCase();
  }

  /**
   * An alternative to `_.reduce`; this method transforms `object` to a new
   * `accumulator` object which is the result of running each of its own
   * enumerable string keyed properties thru `iteratee`, with each invocation
   * potentially mutating the `accumulator` object. If `accumulator` is not
   * provided, a new object with the same `[[Prototype]]` will be used. The
   * iteratee is invoked with four arguments: (accumulator, value, key, object).
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @since 1.3.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [accumulator] The custom accumulator value.
   * @returns {*} Returns the accumulated value.
   * @example
   *
   * _.transform([2, 3, 4], function(result, n) {
   *   result.push(n *= n);
   *   return n % 2 == 0;
   * }, []);
   * // => [4, 9]
   *
   * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
   *   (result[value] || (result[value] = [])).push(key);
   * }, {});
   * // => { '1': ['a', 'c'], '2': ['b'] }
   */
  function transform(object, iteratee, accumulator) {
    var isArr = isArray(object),
        isArrLike = isArr || isBuffer(object) || isTypedArray(object);

    iteratee = baseIteratee(iteratee, 4);
    if (accumulator == null) {
      var Ctor = object && object.constructor;
      if (isArrLike) {
        accumulator = isArr ? new Ctor : [];
      }
      else if (isObject(object)) {
        accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
      }
      else {
        accumulator = {};
      }
    }
    (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
      return iteratee(accumulator, value, index, object);
    });
    return accumulator;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /** Used to match leading and trailing whitespace. */
  var reTrim$1 = /^\s+|\s+$/g;

  /**
   * Removes leading and trailing whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trim('  abc  ');
   * // => 'abc'
   *
   * _.trim('-_-abc-_-', '_-');
   * // => 'abc'
   *
   * _.map(['  foo  ', '  bar  '], _.trim);
   * // => ['foo', 'bar']
   */
  function trim(string, chars, guard) {
    string = toString(string);
    if (string && (guard || chars === undefined)) {
      return string.replace(reTrim$1, '');
    }
    if (!string || !(chars = baseToString(chars))) {
      return string;
    }
    var strSymbols = stringToArray(string),
        chrSymbols = stringToArray(chars),
        start = charsStartIndex(strSymbols, chrSymbols),
        end = charsEndIndex(strSymbols, chrSymbols) + 1;

    return castSlice(strSymbols, start, end).join('');
  }

  /** Used to match leading and trailing whitespace. */
  var reTrimEnd = /\s+$/;

  /**
   * Removes trailing whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trimEnd('  abc  ');
   * // => '  abc'
   *
   * _.trimEnd('-_-abc-_-', '_-');
   * // => '-_-abc'
   */
  function trimEnd(string, chars, guard) {
    string = toString(string);
    if (string && (guard || chars === undefined)) {
      return string.replace(reTrimEnd, '');
    }
    if (!string || !(chars = baseToString(chars))) {
      return string;
    }
    var strSymbols = stringToArray(string),
        end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

    return castSlice(strSymbols, 0, end).join('');
  }

  /** Used to match leading and trailing whitespace. */
  var reTrimStart$1 = /^\s+/;

  /**
   * Removes leading whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trimStart('  abc  ');
   * // => 'abc  '
   *
   * _.trimStart('-_-abc-_-', '_-');
   * // => 'abc-_-'
   */
  function trimStart(string, chars, guard) {
    string = toString(string);
    if (string && (guard || chars === undefined)) {
      return string.replace(reTrimStart$1, '');
    }
    if (!string || !(chars = baseToString(chars))) {
      return string;
    }
    var strSymbols = stringToArray(string),
        start = charsStartIndex(strSymbols, stringToArray(chars));

    return castSlice(strSymbols, start).join('');
  }

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags$1 = /\w*$/;

  /**
   * Truncates `string` if it's longer than the given maximum string length.
   * The last characters of the truncated string are replaced with the omission
   * string which defaults to "...".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to truncate.
   * @param {Object} [options={}] The options object.
   * @param {number} [options.length=30] The maximum string length.
   * @param {string} [options.omission='...'] The string to indicate text is omitted.
   * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
   * @returns {string} Returns the truncated string.
   * @example
   *
   * _.truncate('hi-diddly-ho there, neighborino');
   * // => 'hi-diddly-ho there, neighbo...'
   *
   * _.truncate('hi-diddly-ho there, neighborino', {
   *   'length': 24,
   *   'separator': ' '
   * });
   * // => 'hi-diddly-ho there,...'
   *
   * _.truncate('hi-diddly-ho there, neighborino', {
   *   'length': 24,
   *   'separator': /,? +/
   * });
   * // => 'hi-diddly-ho there...'
   *
   * _.truncate('hi-diddly-ho there, neighborino', {
   *   'omission': ' [...]'
   * });
   * // => 'hi-diddly-ho there, neig [...]'
   */
  function truncate(string, options) {
    var length = DEFAULT_TRUNC_LENGTH,
        omission = DEFAULT_TRUNC_OMISSION;

    if (isObject(options)) {
      var separator = 'separator' in options ? options.separator : separator;
      length = 'length' in options ? toInteger(options.length) : length;
      omission = 'omission' in options ? baseToString(options.omission) : omission;
    }
    string = toString(string);

    var strLength = string.length;
    if (hasUnicode(string)) {
      var strSymbols = stringToArray(string);
      strLength = strSymbols.length;
    }
    if (length >= strLength) {
      return string;
    }
    var end = length - stringSize(omission);
    if (end < 1) {
      return omission;
    }
    var result = strSymbols
      ? castSlice(strSymbols, 0, end).join('')
      : string.slice(0, end);

    if (separator === undefined) {
      return result + omission;
    }
    if (strSymbols) {
      end += (result.length - end);
    }
    if (isRegExp(separator)) {
      if (string.slice(end).search(separator)) {
        var match,
            substring = result;

        if (!separator.global) {
          separator = RegExp(separator.source, toString(reFlags$1.exec(separator)) + 'g');
        }
        separator.lastIndex = 0;
        while ((match = separator.exec(substring))) {
          var newEnd = match.index;
        }
        result = result.slice(0, newEnd === undefined ? end : newEnd);
      }
    } else if (string.indexOf(baseToString(separator), end) != end) {
      var index = result.lastIndexOf(separator);
      if (index > -1) {
        result = result.slice(0, index);
      }
    }
    return result + omission;
  }

  /**
   * Creates a function that accepts up to one argument, ignoring any
   * additional arguments.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Function
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   * @example
   *
   * _.map(['6', '8', '10'], _.unary(parseInt));
   * // => [6, 8, 10]
   */
  function unary(func) {
    return ary(func, 1);
  }

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source);

  /**
   * The inverse of `_.escape`; this method converts the HTML entities
   * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
   * their corresponding characters.
   *
   * **Note:** No other HTML entities are unescaped. To unescape additional
   * HTML entities use a third-party library like [_he_](https://mths.be/he).
   *
   * @static
   * @memberOf _
   * @since 0.6.0
   * @category String
   * @param {string} [string=''] The string to unescape.
   * @returns {string} Returns the unescaped string.
   * @example
   *
   * _.unescape('fred, barney, &amp; pebbles');
   * // => 'fred, barney, & pebbles'
   */
  function unescape(string) {
    string = toString(string);
    return (string && reHasEscapedHtml.test(string))
      ? string.replace(reEscapedHtml, unescapeHtmlChar)
      : string;
  }

  /** Used as references for various `Number` constants. */
  var INFINITY$5 = 1 / 0;

  /**
   * Creates a set object of `values`.
   *
   * @private
   * @param {Array} values The values to add to the set.
   * @returns {Object} Returns the new set.
   */
  var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY$5) ? noop$1 : function(values) {
    return new Set(values);
  };

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE$2 = 200;

  /**
   * The base implementation of `_.uniqBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new duplicate free array.
   */
  function baseUniq(array, iteratee, comparator) {
    var index = -1,
        includes = arrayIncludes,
        length = array.length,
        isCommon = true,
        result = [],
        seen = result;

    if (comparator) {
      isCommon = false;
      includes = arrayIncludesWith;
    }
    else if (length >= LARGE_ARRAY_SIZE$2) {
      var set = iteratee ? null : createSet(array);
      if (set) {
        return setToArray(set);
      }
      isCommon = false;
      includes = cacheHas;
      seen = new SetCache;
    }
    else {
      seen = iteratee ? [] : result;
    }
    outer:
    while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value) : value;

      value = (comparator || value !== 0) ? value : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      }
      else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Creates an array of unique values, in order, from all given arrays using
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @returns {Array} Returns the new array of combined values.
   * @example
   *
   * _.union([2], [1, 2]);
   * // => [2, 1]
   */
  var union = baseRest(function(arrays) {
    return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
  });

  /**
   * This method is like `_.union` except that it accepts `iteratee` which is
   * invoked for each element of each `arrays` to generate the criterion by
   * which uniqueness is computed. Result values are chosen from the first
   * array in which the value occurs. The iteratee is invoked with one argument:
   * (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {Array} Returns the new array of combined values.
   * @example
   *
   * _.unionBy([2.1], [1.2, 2.3], Math.floor);
   * // => [2.1, 1.2]
   *
   * // The `_.property` iteratee shorthand.
   * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
   * // => [{ 'x': 1 }, { 'x': 2 }]
   */
  var unionBy = baseRest(function(arrays) {
    var iteratee = last(arrays);
    if (isArrayLikeObject(iteratee)) {
      iteratee = undefined;
    }
    return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), baseIteratee(iteratee, 2));
  });

  /**
   * This method is like `_.union` except that it accepts `comparator` which
   * is invoked to compare elements of `arrays`. Result values are chosen from
   * the first array in which the value occurs. The comparator is invoked
   * with two arguments: (arrVal, othVal).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of combined values.
   * @example
   *
   * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
   * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
   *
   * _.unionWith(objects, others, _.isEqual);
   * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
   */
  var unionWith = baseRest(function(arrays) {
    var comparator = last(arrays);
    comparator = typeof comparator == 'function' ? comparator : undefined;
    return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
  });

  /**
   * Creates a duplicate-free version of an array, using
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons, in which only the first occurrence of each element
   * is kept. The order of result values is determined by the order they occur
   * in the array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @returns {Array} Returns the new duplicate free array.
   * @example
   *
   * _.uniq([2, 1, 2]);
   * // => [2, 1]
   */
  function uniq(array) {
    return (array && array.length) ? baseUniq(array) : [];
  }

  /**
   * This method is like `_.uniq` except that it accepts `iteratee` which is
   * invoked for each element in `array` to generate the criterion by which
   * uniqueness is computed. The order of result values is determined by the
   * order they occur in the array. The iteratee is invoked with one argument:
   * (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {Array} Returns the new duplicate free array.
   * @example
   *
   * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
   * // => [2.1, 1.2]
   *
   * // The `_.property` iteratee shorthand.
   * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
   * // => [{ 'x': 1 }, { 'x': 2 }]
   */
  function uniqBy(array, iteratee) {
    return (array && array.length) ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
  }

  /**
   * This method is like `_.uniq` except that it accepts `comparator` which
   * is invoked to compare elements of `array`. The order of result values is
   * determined by the order they occur in the array.The comparator is invoked
   * with two arguments: (arrVal, othVal).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new duplicate free array.
   * @example
   *
   * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
   *
   * _.uniqWith(objects, _.isEqual);
   * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
   */
  function uniqWith(array, comparator) {
    comparator = typeof comparator == 'function' ? comparator : undefined;
    return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
  }

  /** Used to generate unique IDs. */
  var idCounter = 0;

  /**
   * Generates a unique ID. If `prefix` is given, the ID is appended to it.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {string} [prefix=''] The value to prefix the ID with.
   * @returns {string} Returns the unique ID.
   * @example
   *
   * _.uniqueId('contact_');
   * // => 'contact_104'
   *
   * _.uniqueId();
   * // => '105'
   */
  function uniqueId(prefix) {
    var id = ++idCounter;
    return toString(prefix) + id;
  }

  /**
   * Removes the property at `path` of `object`.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to unset.
   * @returns {boolean} Returns `true` if the property is deleted, else `false`.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 7 } }] };
   * _.unset(object, 'a[0].b.c');
   * // => true
   *
   * console.log(object);
   * // => { 'a': [{ 'b': {} }] };
   *
   * _.unset(object, ['a', '0', 'b', 'c']);
   * // => true
   *
   * console.log(object);
   * // => { 'a': [{ 'b': {} }] };
   */
  function unset(object, path) {
    return object == null ? true : baseUnset(object, path);
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$e = Math.max;

  /**
   * This method is like `_.zip` except that it accepts an array of grouped
   * elements and creates an array regrouping the elements to their pre-zip
   * configuration.
   *
   * @static
   * @memberOf _
   * @since 1.2.0
   * @category Array
   * @param {Array} array The array of grouped elements to process.
   * @returns {Array} Returns the new array of regrouped elements.
   * @example
   *
   * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
   * // => [['a', 1, true], ['b', 2, false]]
   *
   * _.unzip(zipped);
   * // => [['a', 'b'], [1, 2], [true, false]]
   */
  function unzip(array) {
    if (!(array && array.length)) {
      return [];
    }
    var length = 0;
    array = arrayFilter(array, function(group) {
      if (isArrayLikeObject(group)) {
        length = nativeMax$e(group.length, length);
        return true;
      }
    });
    return baseTimes(length, function(index) {
      return arrayMap(array, baseProperty(index));
    });
  }

  /**
   * This method is like `_.unzip` except that it accepts `iteratee` to specify
   * how regrouped values should be combined. The iteratee is invoked with the
   * elements of each group: (...group).
   *
   * @static
   * @memberOf _
   * @since 3.8.0
   * @category Array
   * @param {Array} array The array of grouped elements to process.
   * @param {Function} [iteratee=_.identity] The function to combine
   *  regrouped values.
   * @returns {Array} Returns the new array of regrouped elements.
   * @example
   *
   * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
   * // => [[1, 10, 100], [2, 20, 200]]
   *
   * _.unzipWith(zipped, _.add);
   * // => [3, 30, 300]
   */
  function unzipWith(array, iteratee) {
    if (!(array && array.length)) {
      return [];
    }
    var result = unzip(array);
    if (iteratee == null) {
      return result;
    }
    return arrayMap(result, function(group) {
      return apply(iteratee, undefined, group);
    });
  }

  /**
   * The base implementation of `_.update`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to update.
   * @param {Function} updater The function to produce the updated value.
   * @param {Function} [customizer] The function to customize path creation.
   * @returns {Object} Returns `object`.
   */
  function baseUpdate(object, path, updater, customizer) {
    return baseSet(object, path, updater(baseGet(object, path)), customizer);
  }

  /**
   * This method is like `_.set` except that accepts `updater` to produce the
   * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
   * is invoked with one argument: (value).
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 4.6.0
   * @category Object
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to set.
   * @param {Function} updater The function to produce the updated value.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.update(object, 'a[0].b.c', function(n) { return n * n; });
   * console.log(object.a[0].b.c);
   * // => 9
   *
   * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
   * console.log(object.x[0].y.z);
   * // => 0
   */
  function update(object, path, updater) {
    return object == null ? object : baseUpdate(object, path, castFunction(updater));
  }

  /**
   * This method is like `_.update` except that it accepts `customizer` which is
   * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
   * path creation is handled by the method instead. The `customizer` is invoked
   * with three arguments: (nsValue, key, nsObject).
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 4.6.0
   * @category Object
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to set.
   * @param {Function} updater The function to produce the updated value.
   * @param {Function} [customizer] The function to customize assigned values.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var object = {};
   *
   * _.updateWith(object, '[0][1]', _.constant('a'), Object);
   * // => { '0': { '1': 'a' } }
   */
  function updateWith(object, path, updater, customizer) {
    customizer = typeof customizer == 'function' ? customizer : undefined;
    return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
  }

  /**
   * Converts `string`, as space separated words, to upper case.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the upper cased string.
   * @example
   *
   * _.upperCase('--foo-bar');
   * // => 'FOO BAR'
   *
   * _.upperCase('fooBar');
   * // => 'FOO BAR'
   *
   * _.upperCase('__foo_bar__');
   * // => 'FOO BAR'
   */
  var upperCase = createCompounder(function(result, word, index) {
    return result + (index ? ' ' : '') + word.toUpperCase();
  });

  /**
   * Creates an array of the own and inherited enumerable string keyed property
   * values of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property values.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.valuesIn(new Foo);
   * // => [1, 2, 3] (iteration order is not guaranteed)
   */
  function valuesIn(object) {
    return object == null ? [] : baseValues(object, keysIn$1(object));
  }

  /**
   * Creates an array excluding all given values using
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * **Note:** Unlike `_.pull`, this method returns a new array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {...*} [values] The values to exclude.
   * @returns {Array} Returns the new array of filtered values.
   * @see _.difference, _.xor
   * @example
   *
   * _.without([2, 1, 2, 3], 1, 2);
   * // => [3]
   */
  var without = baseRest(function(array, values) {
    return isArrayLikeObject(array)
      ? baseDifference(array, values)
      : [];
  });

  /**
   * Creates a function that provides `value` to `wrapper` as its first
   * argument. Any additional arguments provided to the function are appended
   * to those provided to the `wrapper`. The wrapper is invoked with the `this`
   * binding of the created function.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {*} value The value to wrap.
   * @param {Function} [wrapper=identity] The wrapper function.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var p = _.wrap(_.escape, function(func, text) {
   *   return '<p>' + func(text) + '</p>';
   * });
   *
   * p('fred, barney, & pebbles');
   * // => '<p>fred, barney, &amp; pebbles</p>'
   */
  function wrap(value, wrapper) {
    return partial(castFunction(wrapper), value);
  }

  /**
   * This method is the wrapper version of `_.at`.
   *
   * @name at
   * @memberOf _
   * @since 1.0.0
   * @category Seq
   * @param {...(string|string[])} [paths] The property paths to pick.
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
   *
   * _(object).at(['a[0].b.c', 'a[1]']).value();
   * // => [3, 4]
   */
  var wrapperAt = flatRest(function(paths) {
    var length = paths.length,
        start = length ? paths[0] : 0,
        value = this.__wrapped__,
        interceptor = function(object) { return baseAt(object, paths); };

    if (length > 1 || this.__actions__.length ||
        !(value instanceof LazyWrapper) || !isIndex(start)) {
      return this.thru(interceptor);
    }
    value = value.slice(start, +start + (length ? 1 : 0));
    value.__actions__.push({
      'func': thru,
      'args': [interceptor],
      'thisArg': undefined
    });
    return new LodashWrapper(value, this.__chain__).thru(function(array) {
      if (length && !array.length) {
        array.push(undefined);
      }
      return array;
    });
  });

  /**
   * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
   *
   * @name chain
   * @memberOf _
   * @since 0.1.0
   * @category Seq
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36 },
   *   { 'user': 'fred',   'age': 40 }
   * ];
   *
   * // A sequence without explicit chaining.
   * _(users).head();
   * // => { 'user': 'barney', 'age': 36 }
   *
   * // A sequence with explicit chaining.
   * _(users)
   *   .chain()
   *   .head()
   *   .pick('user')
   *   .value();
   * // => { 'user': 'barney' }
   */
  function wrapperChain() {
    return chain(this);
  }

  /**
   * This method is the wrapper version of `_.reverse`.
   *
   * **Note:** This method mutates the wrapped array.
   *
   * @name reverse
   * @memberOf _
   * @since 0.1.0
   * @category Seq
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * var array = [1, 2, 3];
   *
   * _(array).reverse().value()
   * // => [3, 2, 1]
   *
   * console.log(array);
   * // => [3, 2, 1]
   */
  function wrapperReverse() {
    var value = this.__wrapped__;
    if (value instanceof LazyWrapper) {
      var wrapped = value;
      if (this.__actions__.length) {
        wrapped = new LazyWrapper(this);
      }
      wrapped = wrapped.reverse();
      wrapped.__actions__.push({
        'func': thru,
        'args': [reverse],
        'thisArg': undefined
      });
      return new LodashWrapper(wrapped, this.__chain__);
    }
    return this.thru(reverse);
  }

  /**
   * The base implementation of methods like `_.xor`, without support for
   * iteratee shorthands, that accepts an array of arrays to inspect.
   *
   * @private
   * @param {Array} arrays The arrays to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of values.
   */
  function baseXor(arrays, iteratee, comparator) {
    var length = arrays.length;
    if (length < 2) {
      return length ? baseUniq(arrays[0]) : [];
    }
    var index = -1,
        result = Array(length);

    while (++index < length) {
      var array = arrays[index],
          othIndex = -1;

      while (++othIndex < length) {
        if (othIndex != index) {
          result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
        }
      }
    }
    return baseUniq(baseFlatten(result, 1), iteratee, comparator);
  }

  /**
   * Creates an array of unique values that is the
   * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
   * of the given arrays. The order of result values is determined by the order
   * they occur in the arrays.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @returns {Array} Returns the new array of filtered values.
   * @see _.difference, _.without
   * @example
   *
   * _.xor([2, 1], [2, 3]);
   * // => [1, 3]
   */
  var xor = baseRest(function(arrays) {
    return baseXor(arrayFilter(arrays, isArrayLikeObject));
  });

  /**
   * This method is like `_.xor` except that it accepts `iteratee` which is
   * invoked for each element of each `arrays` to generate the criterion by
   * which by which they're compared. The order of result values is determined
   * by the order they occur in the arrays. The iteratee is invoked with one
   * argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
   * // => [1.2, 3.4]
   *
   * // The `_.property` iteratee shorthand.
   * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
   * // => [{ 'x': 2 }]
   */
  var xorBy = baseRest(function(arrays) {
    var iteratee = last(arrays);
    if (isArrayLikeObject(iteratee)) {
      iteratee = undefined;
    }
    return baseXor(arrayFilter(arrays, isArrayLikeObject), baseIteratee(iteratee, 2));
  });

  /**
   * This method is like `_.xor` except that it accepts `comparator` which is
   * invoked to compare elements of `arrays`. The order of result values is
   * determined by the order they occur in the arrays. The comparator is invoked
   * with two arguments: (arrVal, othVal).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
   * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
   *
   * _.xorWith(objects, others, _.isEqual);
   * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
   */
  var xorWith = baseRest(function(arrays) {
    var comparator = last(arrays);
    comparator = typeof comparator == 'function' ? comparator : undefined;
    return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
  });

  /**
   * Creates an array of grouped elements, the first of which contains the
   * first elements of the given arrays, the second of which contains the
   * second elements of the given arrays, and so on.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {...Array} [arrays] The arrays to process.
   * @returns {Array} Returns the new array of grouped elements.
   * @example
   *
   * _.zip(['a', 'b'], [1, 2], [true, false]);
   * // => [['a', 1, true], ['b', 2, false]]
   */
  var zip = baseRest(unzip);

  /**
   * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
   *
   * @private
   * @param {Array} props The property identifiers.
   * @param {Array} values The property values.
   * @param {Function} assignFunc The function to assign values.
   * @returns {Object} Returns the new object.
   */
  function baseZipObject(props, values, assignFunc) {
    var index = -1,
        length = props.length,
        valsLength = values.length,
        result = {};

    while (++index < length) {
      var value = index < valsLength ? values[index] : undefined;
      assignFunc(result, props[index], value);
    }
    return result;
  }

  /**
   * This method is like `_.fromPairs` except that it accepts two arrays,
   * one of property identifiers and one of corresponding values.
   *
   * @static
   * @memberOf _
   * @since 0.4.0
   * @category Array
   * @param {Array} [props=[]] The property identifiers.
   * @param {Array} [values=[]] The property values.
   * @returns {Object} Returns the new object.
   * @example
   *
   * _.zipObject(['a', 'b'], [1, 2]);
   * // => { 'a': 1, 'b': 2 }
   */
  function zipObject(props, values) {
    return baseZipObject(props || [], values || [], assignValue);
  }

  /**
   * This method is like `_.zipObject` except that it supports property paths.
   *
   * @static
   * @memberOf _
   * @since 4.1.0
   * @category Array
   * @param {Array} [props=[]] The property identifiers.
   * @param {Array} [values=[]] The property values.
   * @returns {Object} Returns the new object.
   * @example
   *
   * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
   * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
   */
  function zipObjectDeep(props, values) {
    return baseZipObject(props || [], values || [], baseSet);
  }

  /**
   * This method is like `_.zip` except that it accepts `iteratee` to specify
   * how grouped values should be combined. The iteratee is invoked with the
   * elements of each group: (...group).
   *
   * @static
   * @memberOf _
   * @since 3.8.0
   * @category Array
   * @param {...Array} [arrays] The arrays to process.
   * @param {Function} [iteratee=_.identity] The function to combine
   *  grouped values.
   * @returns {Array} Returns the new array of grouped elements.
   * @example
   *
   * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
   *   return a + b + c;
   * });
   * // => [111, 222]
   */
  var zipWith = baseRest(function(arrays) {
    var length = arrays.length,
        iteratee = length > 1 ? arrays[length - 1] : undefined;

    iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
    return unzipWith(arrays, iteratee);
  });

  var array = {
    chunk, compact, concat, difference, differenceBy,
    differenceWith, drop, dropRight, dropRightWhile, dropWhile,
    fill, findIndex, findLastIndex, first: head, flatten,
    flattenDeep, flattenDepth, fromPairs, head, indexOf,
    initial, intersection, intersectionBy, intersectionWith, join,
    last, lastIndexOf, nth, pull, pullAll,
    pullAllBy, pullAllWith, pullAt, remove, reverse,
    slice, sortedIndex, sortedIndexBy, sortedIndexOf, sortedLastIndex,
    sortedLastIndexBy, sortedLastIndexOf, sortedUniq, sortedUniqBy, tail,
    take, takeRight, takeRightWhile, takeWhile, union,
    unionBy, unionWith, uniq, uniqBy, uniqWith,
    unzip, unzipWith, without, xor, xorBy,
    xorWith, zip, zipObject, zipObjectDeep, zipWith
  };

  var collection = {
    countBy, each: forEach, eachRight: forEachRight, every, filter,
    find, findLast, flatMap, flatMapDeep, flatMapDepth,
    forEach, forEachRight, groupBy, includes, invokeMap,
    keyBy, map, orderBy, partition, reduce,
    reduceRight, reject, sample, sampleSize, shuffle,
    size, some, sortBy
  };

  var date = {
    now
  };

  var func = {
    after, ary, before, bind, bindKey,
    curry, curryRight, debounce, defer, delay,
    flip, memoize, negate, once, overArgs,
    partial, partialRight, rearg, rest, spread,
    throttle, unary, wrap
  };

  var lang = {
    castArray, clone, cloneDeep, cloneDeepWith, cloneWith,
    conformsTo, eq, gt, gte, isArguments,
    isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean,
    isBuffer, isDate, isElement: isElement$1, isEmpty, isEqual,
    isEqualWith, isError, isFinite, isFunction, isInteger,
    isLength, isMap, isMatch, isMatchWith, isNaN: isNaN$1,
    isNative, isNil, isNull, isNumber, isObject,
    isObjectLike, isPlainObject: isPlainObject$2, isRegExp, isSafeInteger, isSet,
    isString, isSymbol, isTypedArray, isUndefined, isWeakMap,
    isWeakSet, lt, lte, toArray, toFinite,
    toInteger, toLength, toNumber, toPlainObject, toSafeInteger,
    toString
  };

  var math = {
    add, ceil, divide, floor, max,
    maxBy, mean, meanBy, min, minBy,
    multiply, round, subtract, sum, sumBy
  };

  var number = {
    clamp, inRange, random
  };

  var object = {
    assign, assignIn, assignInWith, assignWith, at,
    create, defaults, defaultsDeep, entries: toPairs, entriesIn: toPairsIn,
    extend: assignIn, extendWith: assignInWith, findKey, findLastKey, forIn,
    forInRight, forOwn, forOwnRight, functions, functionsIn,
    get, has, hasIn, invert, invertBy,
    invoke, keys, keysIn: keysIn$1, mapKeys, mapValues,
    merge, mergeWith, omit, omitBy, pick,
    pickBy, result: result$1, set: set$1, setWith, toPairs,
    toPairsIn, transform, unset, update, updateWith,
    values, valuesIn
  };

  var seq = {
    at: wrapperAt, chain, commit: wrapperCommit, lodash, next: wrapperNext,
    plant: wrapperPlant, reverse: wrapperReverse, tap, thru, toIterator: wrapperToIterator,
    toJSON: wrapperValue, value: wrapperValue, valueOf: wrapperValue, wrapperChain
  };

  var string = {
    camelCase, capitalize, deburr, endsWith, escape,
    escapeRegExp, kebabCase, lowerCase, lowerFirst, pad,
    padEnd, padStart, parseInt: parseInt$1, repeat, replace,
    snakeCase, split, startCase, startsWith, template,
    templateSettings, toLower, toUpper, trim, trimEnd,
    trimStart, truncate, unescape, upperCase, upperFirst,
    words
  };

  var util = {
    attempt, bindAll, cond, conforms, constant,
    defaultTo, flow, flowRight, identity, iteratee,
    matches, matchesProperty, method, methodOf, mixin,
    noop: noop$1, nthArg, over, overEvery, overSome,
    property, propertyOf, range, rangeRight, stubArray,
    stubFalse, stubObject, stubString, stubTrue, times,
    toPath, uniqueId
  };

  /**
   * Creates a clone of the lazy wrapper object.
   *
   * @private
   * @name clone
   * @memberOf LazyWrapper
   * @returns {Object} Returns the cloned `LazyWrapper` object.
   */
  function lazyClone() {
    var result = new LazyWrapper(this.__wrapped__);
    result.__actions__ = copyArray(this.__actions__);
    result.__dir__ = this.__dir__;
    result.__filtered__ = this.__filtered__;
    result.__iteratees__ = copyArray(this.__iteratees__);
    result.__takeCount__ = this.__takeCount__;
    result.__views__ = copyArray(this.__views__);
    return result;
  }

  /**
   * Reverses the direction of lazy iteration.
   *
   * @private
   * @name reverse
   * @memberOf LazyWrapper
   * @returns {Object} Returns the new reversed `LazyWrapper` object.
   */
  function lazyReverse() {
    if (this.__filtered__) {
      var result = new LazyWrapper(this);
      result.__dir__ = -1;
      result.__filtered__ = true;
    } else {
      result = this.clone();
      result.__dir__ *= -1;
    }
    return result;
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$f = Math.max,
      nativeMin$c = Math.min;

  /**
   * Gets the view, applying any `transforms` to the `start` and `end` positions.
   *
   * @private
   * @param {number} start The start of the view.
   * @param {number} end The end of the view.
   * @param {Array} transforms The transformations to apply to the view.
   * @returns {Object} Returns an object containing the `start` and `end`
   *  positions of the view.
   */
  function getView(start, end, transforms) {
    var index = -1,
        length = transforms.length;

    while (++index < length) {
      var data = transforms[index],
          size = data.size;

      switch (data.type) {
        case 'drop':      start += size; break;
        case 'dropRight': end -= size; break;
        case 'take':      end = nativeMin$c(end, start + size); break;
        case 'takeRight': start = nativeMax$f(start, end - size); break;
      }
    }
    return { 'start': start, 'end': end };
  }

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMin$d = Math.min;

  /**
   * Extracts the unwrapped value from its lazy wrapper.
   *
   * @private
   * @name value
   * @memberOf LazyWrapper
   * @returns {*} Returns the unwrapped value.
   */
  function lazyValue() {
    var array = this.__wrapped__.value(),
        dir = this.__dir__,
        isArr = isArray(array),
        isRight = dir < 0,
        arrLength = isArr ? array.length : 0,
        view = getView(0, arrLength, this.__views__),
        start = view.start,
        end = view.end,
        length = end - start,
        index = isRight ? end : (start - 1),
        iteratees = this.__iteratees__,
        iterLength = iteratees.length,
        resIndex = 0,
        takeCount = nativeMin$d(length, this.__takeCount__);

    if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
      return baseWrapperValue(array, this.__actions__);
    }
    var result = [];

    outer:
    while (length-- && resIndex < takeCount) {
      index += dir;

      var iterIndex = -1,
          value = array[index];

      while (++iterIndex < iterLength) {
        var data = iteratees[iterIndex],
            iteratee = data.iteratee,
            type = data.type,
            computed = iteratee(value);

        if (type == LAZY_MAP_FLAG) {
          value = computed;
        } else if (!computed) {
          if (type == LAZY_FILTER_FLAG) {
            continue outer;
          } else {
            break outer;
          }
        }
      }
      result[resIndex++] = value;
    }
    return result;
  }

  /**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the semantic version number. */
  var VERSION = '4.17.15';

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_KEY_FLAG$6 = 2;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG$1 = 1,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH$6 = 4294967295;

  /** Used for built-in method references. */
  var arrayProto$5 = Array.prototype,
      objectProto$s = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$o = objectProto$s.hasOwnProperty;

  /** Built-in value references. */
  var symIterator$1 = Symbol$1 ? Symbol$1.iterator : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$g = Math.max,
      nativeMin$e = Math.min;

  // wrap `_.mixin` so it works when provided only one argument
  var mixin$1 = (function(func$$1) {
    return function(object$$1, source, options) {
      if (options == null) {
        var isObj = isObject(source),
            props = isObj && keys(source),
            methodNames = props && props.length && baseFunctions(source, props);

        if (!(methodNames ? methodNames.length : isObj)) {
          options = source;
          source = object$$1;
          object$$1 = this;
        }
      }
      return func$$1(object$$1, source, options);
    };
  }(mixin));

  // Add methods that return wrapped values in chain sequences.
  lodash.after = func.after;
  lodash.ary = func.ary;
  lodash.assign = object.assign;
  lodash.assignIn = object.assignIn;
  lodash.assignInWith = object.assignInWith;
  lodash.assignWith = object.assignWith;
  lodash.at = object.at;
  lodash.before = func.before;
  lodash.bind = func.bind;
  lodash.bindAll = util.bindAll;
  lodash.bindKey = func.bindKey;
  lodash.castArray = lang.castArray;
  lodash.chain = seq.chain;
  lodash.chunk = array.chunk;
  lodash.compact = array.compact;
  lodash.concat = array.concat;
  lodash.cond = util.cond;
  lodash.conforms = util.conforms;
  lodash.constant = util.constant;
  lodash.countBy = collection.countBy;
  lodash.create = object.create;
  lodash.curry = func.curry;
  lodash.curryRight = func.curryRight;
  lodash.debounce = func.debounce;
  lodash.defaults = object.defaults;
  lodash.defaultsDeep = object.defaultsDeep;
  lodash.defer = func.defer;
  lodash.delay = func.delay;
  lodash.difference = array.difference;
  lodash.differenceBy = array.differenceBy;
  lodash.differenceWith = array.differenceWith;
  lodash.drop = array.drop;
  lodash.dropRight = array.dropRight;
  lodash.dropRightWhile = array.dropRightWhile;
  lodash.dropWhile = array.dropWhile;
  lodash.fill = array.fill;
  lodash.filter = collection.filter;
  lodash.flatMap = collection.flatMap;
  lodash.flatMapDeep = collection.flatMapDeep;
  lodash.flatMapDepth = collection.flatMapDepth;
  lodash.flatten = array.flatten;
  lodash.flattenDeep = array.flattenDeep;
  lodash.flattenDepth = array.flattenDepth;
  lodash.flip = func.flip;
  lodash.flow = util.flow;
  lodash.flowRight = util.flowRight;
  lodash.fromPairs = array.fromPairs;
  lodash.functions = object.functions;
  lodash.functionsIn = object.functionsIn;
  lodash.groupBy = collection.groupBy;
  lodash.initial = array.initial;
  lodash.intersection = array.intersection;
  lodash.intersectionBy = array.intersectionBy;
  lodash.intersectionWith = array.intersectionWith;
  lodash.invert = object.invert;
  lodash.invertBy = object.invertBy;
  lodash.invokeMap = collection.invokeMap;
  lodash.iteratee = util.iteratee;
  lodash.keyBy = collection.keyBy;
  lodash.keys = keys;
  lodash.keysIn = object.keysIn;
  lodash.map = collection.map;
  lodash.mapKeys = object.mapKeys;
  lodash.mapValues = object.mapValues;
  lodash.matches = util.matches;
  lodash.matchesProperty = util.matchesProperty;
  lodash.memoize = func.memoize;
  lodash.merge = object.merge;
  lodash.mergeWith = object.mergeWith;
  lodash.method = util.method;
  lodash.methodOf = util.methodOf;
  lodash.mixin = mixin$1;
  lodash.negate = negate;
  lodash.nthArg = util.nthArg;
  lodash.omit = object.omit;
  lodash.omitBy = object.omitBy;
  lodash.once = func.once;
  lodash.orderBy = collection.orderBy;
  lodash.over = util.over;
  lodash.overArgs = func.overArgs;
  lodash.overEvery = util.overEvery;
  lodash.overSome = util.overSome;
  lodash.partial = func.partial;
  lodash.partialRight = func.partialRight;
  lodash.partition = collection.partition;
  lodash.pick = object.pick;
  lodash.pickBy = object.pickBy;
  lodash.property = util.property;
  lodash.propertyOf = util.propertyOf;
  lodash.pull = array.pull;
  lodash.pullAll = array.pullAll;
  lodash.pullAllBy = array.pullAllBy;
  lodash.pullAllWith = array.pullAllWith;
  lodash.pullAt = array.pullAt;
  lodash.range = util.range;
  lodash.rangeRight = util.rangeRight;
  lodash.rearg = func.rearg;
  lodash.reject = collection.reject;
  lodash.remove = array.remove;
  lodash.rest = func.rest;
  lodash.reverse = array.reverse;
  lodash.sampleSize = collection.sampleSize;
  lodash.set = object.set;
  lodash.setWith = object.setWith;
  lodash.shuffle = collection.shuffle;
  lodash.slice = array.slice;
  lodash.sortBy = collection.sortBy;
  lodash.sortedUniq = array.sortedUniq;
  lodash.sortedUniqBy = array.sortedUniqBy;
  lodash.split = string.split;
  lodash.spread = func.spread;
  lodash.tail = array.tail;
  lodash.take = array.take;
  lodash.takeRight = array.takeRight;
  lodash.takeRightWhile = array.takeRightWhile;
  lodash.takeWhile = array.takeWhile;
  lodash.tap = seq.tap;
  lodash.throttle = func.throttle;
  lodash.thru = thru;
  lodash.toArray = lang.toArray;
  lodash.toPairs = object.toPairs;
  lodash.toPairsIn = object.toPairsIn;
  lodash.toPath = util.toPath;
  lodash.toPlainObject = lang.toPlainObject;
  lodash.transform = object.transform;
  lodash.unary = func.unary;
  lodash.union = array.union;
  lodash.unionBy = array.unionBy;
  lodash.unionWith = array.unionWith;
  lodash.uniq = array.uniq;
  lodash.uniqBy = array.uniqBy;
  lodash.uniqWith = array.uniqWith;
  lodash.unset = object.unset;
  lodash.unzip = array.unzip;
  lodash.unzipWith = array.unzipWith;
  lodash.update = object.update;
  lodash.updateWith = object.updateWith;
  lodash.values = object.values;
  lodash.valuesIn = object.valuesIn;
  lodash.without = array.without;
  lodash.words = string.words;
  lodash.wrap = func.wrap;
  lodash.xor = array.xor;
  lodash.xorBy = array.xorBy;
  lodash.xorWith = array.xorWith;
  lodash.zip = array.zip;
  lodash.zipObject = array.zipObject;
  lodash.zipObjectDeep = array.zipObjectDeep;
  lodash.zipWith = array.zipWith;

  // Add aliases.
  lodash.entries = object.toPairs;
  lodash.entriesIn = object.toPairsIn;
  lodash.extend = object.assignIn;
  lodash.extendWith = object.assignInWith;

  // Add methods to `lodash.prototype`.
  mixin$1(lodash, lodash);

  // Add methods that return unwrapped values in chain sequences.
  lodash.add = math.add;
  lodash.attempt = util.attempt;
  lodash.camelCase = string.camelCase;
  lodash.capitalize = string.capitalize;
  lodash.ceil = math.ceil;
  lodash.clamp = number.clamp;
  lodash.clone = lang.clone;
  lodash.cloneDeep = lang.cloneDeep;
  lodash.cloneDeepWith = lang.cloneDeepWith;
  lodash.cloneWith = lang.cloneWith;
  lodash.conformsTo = lang.conformsTo;
  lodash.deburr = string.deburr;
  lodash.defaultTo = util.defaultTo;
  lodash.divide = math.divide;
  lodash.endsWith = string.endsWith;
  lodash.eq = lang.eq;
  lodash.escape = string.escape;
  lodash.escapeRegExp = string.escapeRegExp;
  lodash.every = collection.every;
  lodash.find = collection.find;
  lodash.findIndex = array.findIndex;
  lodash.findKey = object.findKey;
  lodash.findLast = collection.findLast;
  lodash.findLastIndex = array.findLastIndex;
  lodash.findLastKey = object.findLastKey;
  lodash.floor = math.floor;
  lodash.forEach = collection.forEach;
  lodash.forEachRight = collection.forEachRight;
  lodash.forIn = object.forIn;
  lodash.forInRight = object.forInRight;
  lodash.forOwn = object.forOwn;
  lodash.forOwnRight = object.forOwnRight;
  lodash.get = object.get;
  lodash.gt = lang.gt;
  lodash.gte = lang.gte;
  lodash.has = object.has;
  lodash.hasIn = object.hasIn;
  lodash.head = array.head;
  lodash.identity = identity;
  lodash.includes = collection.includes;
  lodash.indexOf = array.indexOf;
  lodash.inRange = number.inRange;
  lodash.invoke = object.invoke;
  lodash.isArguments = lang.isArguments;
  lodash.isArray = isArray;
  lodash.isArrayBuffer = lang.isArrayBuffer;
  lodash.isArrayLike = lang.isArrayLike;
  lodash.isArrayLikeObject = lang.isArrayLikeObject;
  lodash.isBoolean = lang.isBoolean;
  lodash.isBuffer = lang.isBuffer;
  lodash.isDate = lang.isDate;
  lodash.isElement = lang.isElement;
  lodash.isEmpty = lang.isEmpty;
  lodash.isEqual = lang.isEqual;
  lodash.isEqualWith = lang.isEqualWith;
  lodash.isError = lang.isError;
  lodash.isFinite = lang.isFinite;
  lodash.isFunction = lang.isFunction;
  lodash.isInteger = lang.isInteger;
  lodash.isLength = lang.isLength;
  lodash.isMap = lang.isMap;
  lodash.isMatch = lang.isMatch;
  lodash.isMatchWith = lang.isMatchWith;
  lodash.isNaN = lang.isNaN;
  lodash.isNative = lang.isNative;
  lodash.isNil = lang.isNil;
  lodash.isNull = lang.isNull;
  lodash.isNumber = lang.isNumber;
  lodash.isObject = isObject;
  lodash.isObjectLike = lang.isObjectLike;
  lodash.isPlainObject = lang.isPlainObject;
  lodash.isRegExp = lang.isRegExp;
  lodash.isSafeInteger = lang.isSafeInteger;
  lodash.isSet = lang.isSet;
  lodash.isString = lang.isString;
  lodash.isSymbol = lang.isSymbol;
  lodash.isTypedArray = lang.isTypedArray;
  lodash.isUndefined = lang.isUndefined;
  lodash.isWeakMap = lang.isWeakMap;
  lodash.isWeakSet = lang.isWeakSet;
  lodash.join = array.join;
  lodash.kebabCase = string.kebabCase;
  lodash.last = last;
  lodash.lastIndexOf = array.lastIndexOf;
  lodash.lowerCase = string.lowerCase;
  lodash.lowerFirst = string.lowerFirst;
  lodash.lt = lang.lt;
  lodash.lte = lang.lte;
  lodash.max = math.max;
  lodash.maxBy = math.maxBy;
  lodash.mean = math.mean;
  lodash.meanBy = math.meanBy;
  lodash.min = math.min;
  lodash.minBy = math.minBy;
  lodash.stubArray = util.stubArray;
  lodash.stubFalse = util.stubFalse;
  lodash.stubObject = util.stubObject;
  lodash.stubString = util.stubString;
  lodash.stubTrue = util.stubTrue;
  lodash.multiply = math.multiply;
  lodash.nth = array.nth;
  lodash.noop = util.noop;
  lodash.now = date.now;
  lodash.pad = string.pad;
  lodash.padEnd = string.padEnd;
  lodash.padStart = string.padStart;
  lodash.parseInt = string.parseInt;
  lodash.random = number.random;
  lodash.reduce = collection.reduce;
  lodash.reduceRight = collection.reduceRight;
  lodash.repeat = string.repeat;
  lodash.replace = string.replace;
  lodash.result = object.result;
  lodash.round = math.round;
  lodash.sample = collection.sample;
  lodash.size = collection.size;
  lodash.snakeCase = string.snakeCase;
  lodash.some = collection.some;
  lodash.sortedIndex = array.sortedIndex;
  lodash.sortedIndexBy = array.sortedIndexBy;
  lodash.sortedIndexOf = array.sortedIndexOf;
  lodash.sortedLastIndex = array.sortedLastIndex;
  lodash.sortedLastIndexBy = array.sortedLastIndexBy;
  lodash.sortedLastIndexOf = array.sortedLastIndexOf;
  lodash.startCase = string.startCase;
  lodash.startsWith = string.startsWith;
  lodash.subtract = math.subtract;
  lodash.sum = math.sum;
  lodash.sumBy = math.sumBy;
  lodash.template = string.template;
  lodash.times = util.times;
  lodash.toFinite = lang.toFinite;
  lodash.toInteger = toInteger;
  lodash.toLength = lang.toLength;
  lodash.toLower = string.toLower;
  lodash.toNumber = lang.toNumber;
  lodash.toSafeInteger = lang.toSafeInteger;
  lodash.toString = lang.toString;
  lodash.toUpper = string.toUpper;
  lodash.trim = string.trim;
  lodash.trimEnd = string.trimEnd;
  lodash.trimStart = string.trimStart;
  lodash.truncate = string.truncate;
  lodash.unescape = string.unescape;
  lodash.uniqueId = util.uniqueId;
  lodash.upperCase = string.upperCase;
  lodash.upperFirst = string.upperFirst;

  // Add aliases.
  lodash.each = collection.forEach;
  lodash.eachRight = collection.forEachRight;
  lodash.first = array.head;

  mixin$1(lodash, (function() {
    var source = {};
    baseForOwn(lodash, function(func$$1, methodName) {
      if (!hasOwnProperty$o.call(lodash.prototype, methodName)) {
        source[methodName] = func$$1;
      }
    });
    return source;
  }()), { 'chain': false });

  /**
   * The semantic version number.
   *
   * @static
   * @memberOf _
   * @type {string}
   */
  lodash.VERSION = VERSION;
  (lodash.templateSettings = string.templateSettings).imports._ = lodash;

  // Assign default placeholders.
  arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
    lodash[methodName].placeholder = lodash;
  });

  // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
  arrayEach(['drop', 'take'], function(methodName, index) {
    LazyWrapper.prototype[methodName] = function(n) {
      n = n === undefined ? 1 : nativeMax$g(toInteger(n), 0);

      var result = (this.__filtered__ && !index)
        ? new LazyWrapper(this)
        : this.clone();

      if (result.__filtered__) {
        result.__takeCount__ = nativeMin$e(n, result.__takeCount__);
      } else {
        result.__views__.push({
          'size': nativeMin$e(n, MAX_ARRAY_LENGTH$6),
          'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
        });
      }
      return result;
    };

    LazyWrapper.prototype[methodName + 'Right'] = function(n) {
      return this.reverse()[methodName](n).reverse();
    };
  });

  // Add `LazyWrapper` methods that accept an `iteratee` value.
  arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
    var type = index + 1,
        isFilter = type == LAZY_FILTER_FLAG$1 || type == LAZY_WHILE_FLAG;

    LazyWrapper.prototype[methodName] = function(iteratee$$1) {
      var result = this.clone();
      result.__iteratees__.push({
        'iteratee': baseIteratee(iteratee$$1, 3),
        'type': type
      });
      result.__filtered__ = result.__filtered__ || isFilter;
      return result;
    };
  });

  // Add `LazyWrapper` methods for `_.head` and `_.last`.
  arrayEach(['head', 'last'], function(methodName, index) {
    var takeName = 'take' + (index ? 'Right' : '');

    LazyWrapper.prototype[methodName] = function() {
      return this[takeName](1).value()[0];
    };
  });

  // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
  arrayEach(['initial', 'tail'], function(methodName, index) {
    var dropName = 'drop' + (index ? '' : 'Right');

    LazyWrapper.prototype[methodName] = function() {
      return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
    };
  });

  LazyWrapper.prototype.compact = function() {
    return this.filter(identity);
  };

  LazyWrapper.prototype.find = function(predicate) {
    return this.filter(predicate).head();
  };

  LazyWrapper.prototype.findLast = function(predicate) {
    return this.reverse().find(predicate);
  };

  LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
    if (typeof path == 'function') {
      return new LazyWrapper(this);
    }
    return this.map(function(value) {
      return baseInvoke(value, path, args);
    });
  });

  LazyWrapper.prototype.reject = function(predicate) {
    return this.filter(negate(baseIteratee(predicate)));
  };

  LazyWrapper.prototype.slice = function(start, end) {
    start = toInteger(start);

    var result = this;
    if (result.__filtered__ && (start > 0 || end < 0)) {
      return new LazyWrapper(result);
    }
    if (start < 0) {
      result = result.takeRight(-start);
    } else if (start) {
      result = result.drop(start);
    }
    if (end !== undefined) {
      end = toInteger(end);
      result = end < 0 ? result.dropRight(-end) : result.take(end - start);
    }
    return result;
  };

  LazyWrapper.prototype.takeRightWhile = function(predicate) {
    return this.reverse().takeWhile(predicate).reverse();
  };

  LazyWrapper.prototype.toArray = function() {
    return this.take(MAX_ARRAY_LENGTH$6);
  };

  // Add `LazyWrapper` methods to `lodash.prototype`.
  baseForOwn(LazyWrapper.prototype, function(func$$1, methodName) {
    var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
        isTaker = /^(?:head|last)$/.test(methodName),
        lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
        retUnwrapped = isTaker || /^find/.test(methodName);

    if (!lodashFunc) {
      return;
    }
    lodash.prototype[methodName] = function() {
      var value = this.__wrapped__,
          args = isTaker ? [1] : arguments,
          isLazy = value instanceof LazyWrapper,
          iteratee$$1 = args[0],
          useLazy = isLazy || isArray(value);

      var interceptor = function(value) {
        var result = lodashFunc.apply(lodash, arrayPush([value], args));
        return (isTaker && chainAll) ? result[0] : result;
      };

      if (useLazy && checkIteratee && typeof iteratee$$1 == 'function' && iteratee$$1.length != 1) {
        // Avoid lazy use if the iteratee has a "length" value other than `1`.
        isLazy = useLazy = false;
      }
      var chainAll = this.__chain__,
          isHybrid = !!this.__actions__.length,
          isUnwrapped = retUnwrapped && !chainAll,
          onlyLazy = isLazy && !isHybrid;

      if (!retUnwrapped && useLazy) {
        value = onlyLazy ? value : new LazyWrapper(this);
        var result = func$$1.apply(value, args);
        result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
        return new LodashWrapper(result, chainAll);
      }
      if (isUnwrapped && onlyLazy) {
        return func$$1.apply(this, args);
      }
      result = this.thru(interceptor);
      return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
    };
  });

  // Add `Array` methods to `lodash.prototype`.
  arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
    var func$$1 = arrayProto$5[methodName],
        chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
        retUnwrapped = /^(?:pop|shift)$/.test(methodName);

    lodash.prototype[methodName] = function() {
      var args = arguments;
      if (retUnwrapped && !this.__chain__) {
        var value = this.value();
        return func$$1.apply(isArray(value) ? value : [], args);
      }
      return this[chainName](function(value) {
        return func$$1.apply(isArray(value) ? value : [], args);
      });
    };
  });

  // Map minified method names to their real names.
  baseForOwn(LazyWrapper.prototype, function(func$$1, methodName) {
    var lodashFunc = lodash[methodName];
    if (lodashFunc) {
      var key = lodashFunc.name + '';
      if (!hasOwnProperty$o.call(realNames, key)) {
        realNames[key] = [];
      }
      realNames[key].push({ 'name': methodName, 'func': lodashFunc });
    }
  });

  realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG$6).name] = [{
    'name': 'wrapper',
    'func': undefined
  }];

  // Add methods to `LazyWrapper`.
  LazyWrapper.prototype.clone = lazyClone;
  LazyWrapper.prototype.reverse = lazyReverse;
  LazyWrapper.prototype.value = lazyValue;

  // Add chain sequence methods to the `lodash` wrapper.
  lodash.prototype.at = seq.at;
  lodash.prototype.chain = seq.wrapperChain;
  lodash.prototype.commit = seq.commit;
  lodash.prototype.next = seq.next;
  lodash.prototype.plant = seq.plant;
  lodash.prototype.reverse = seq.reverse;
  lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = seq.value;

  // Add lazy aliases.
  lodash.prototype.first = lodash.prototype.head;

  if (symIterator$1) {
    lodash.prototype[symIterator$1] = seq.toIterator;
  }

  /**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  var StaticSchemeClass = function StaticSchemeClass(map) {
    this.defaultColor = "#ffffff";
    this.type = "static";
    this.map = map;

    this.getColor = function (letter) {
      if (this.map[letter] !== undefined) {
        return this.map[letter];
      } else {
        return this.defaultColor;
      }
    };
  };
  var DynSchemeClass = function DynSchemeClass(fun, opt) {
    this.type = "dyn";
    this.opt = opt; // init

    if (fun.init !== undefined) {
      fun.init.call(this);
      this.getColor = fun.run;
      this.reset = fun.init;
    } else {
      this.getColor = fun;
    }
  };

  var Buried = {
    A: "#00a35c",
    R: "#00fc03",
    N: "#00eb14",
    D: "#00eb14",
    C: "#0000ff",
    Q: "#00f10e",
    E: "#00f10e",
    G: "#009d62",
    H: "#00d52a",
    I: "#0054ab",
    L: "#007b84",
    K: "#00ff00",
    M: "#009768",
    F: "#008778",
    P: "#00e01f",
    S: "#00d52a",
    T: "#00db24",
    W: "#00a857",
    Y: "#00e619",
    V: "#005fa0",
    B: "#00eb14",
    X: "#00b649",
    Z: "#00f10e"
  };

  var Cinema = {
    A: "#BBBBBB",
    B: "grey",
    C: "yellow",
    D: "red",
    E: "red",
    F: "magenta",
    G: "brown",
    H: "#00FFFF",
    I: "#BBBBBB",
    J: "#fff",
    K: "#00FFFF",
    L: "#BBBBBB",
    M: "#BBBBBB",
    N: "green",
    O: "#fff",
    P: "brown",
    Q: "green",
    R: "#00FFFF",
    S: "green",
    T: "green",
    U: "#fff",
    V: "#BBBBBB",
    W: "magenta",
    X: "grey",
    Y: "magenta",
    Z: "grey",
    Gap: "grey"
  };

  var Clustal = {
    A: "orange",
    B: "#fff",
    C: "green",
    D: "red",
    E: "red",
    F: "blue",
    G: "orange",
    H: "red",
    I: "green",
    J: "#fff",
    K: "red",
    L: "green",
    M: "green",
    N: "#fff",
    O: "#fff",
    P: "orange",
    Q: "#fff",
    R: "red",
    S: "orange",
    T: "orange",
    U: "#fff",
    V: "green",
    W: "blue",
    X: "#fff",
    Y: "blue",
    Z: "#fff",
    Gap: "#fff"
  };

  var Clustal2 = {
    A: "#80a0f0",
    R: "#f01505",
    N: "#00ff00",
    D: "#c048c0",
    C: "#f08080",
    Q: "#00ff00",
    E: "#c048c0",
    G: "#f09048",
    H: "#15a4a4",
    I: "#80a0f0",
    L: "#80a0f0",
    K: "#f01505",
    M: "#80a0f0",
    F: "#80a0f0",
    P: "#ffff00",
    S: "#00ff00",
    T: "#00ff00",
    W: "#80a0f0",
    Y: "#15a4a4",
    V: "#80a0f0",
    B: "#fff",
    X: "#fff",
    Z: "#fff"
  };

  var Helix = {
    A: "#e718e7",
    R: "#6f906f",
    N: "#1be41b",
    D: "#778877",
    C: "#23dc23",
    Q: "#926d92",
    E: "#ff00ff",
    G: "#00ff00",
    H: "#758a75",
    I: "#8a758a",
    L: "#ae51ae",
    K: "#a05fa0",
    M: "#ef10ef",
    F: "#986798",
    P: "#00ff00",
    S: "#36c936",
    T: "#47b847",
    W: "#8a758a",
    Y: "#21de21",
    V: "#857a85",
    B: "#49b649",
    X: "#758a75",
    Z: "#c936c9"
  };

  var Hydro = {
    A: "#ad0052",
    B: "#0c00f3",
    C: "#c2003d",
    D: "#0c00f3",
    E: "#0c00f3",
    F: "#cb0034",
    G: "#6a0095",
    H: "#1500ea",
    I: "#ff0000",
    J: "#fff",
    K: "#0000ff",
    L: "#ea0015",
    M: "#b0004f",
    N: "#0c00f3",
    O: "#fff",
    P: "#4600b9",
    Q: "#0c00f3",
    R: "#0000ff",
    S: "#5e00a1",
    T: "#61009e",
    U: "#fff",
    V: "#f60009",
    W: "#5b00a4",
    X: "#680097",
    Y: "#4f00b0",
    Z: "#0c00f3"
  };

  var Lesk = {
    A: " orange",
    B: " #fff",
    C: " green",
    D: " red",
    E: " red",
    F: " green",
    G: " orange",
    H: " magenta",
    I: " green",
    J: " #fff",
    K: " red",
    L: " green",
    M: " green",
    N: " magenta",
    O: " #fff",
    P: " green",
    Q: " magenta",
    R: " red",
    S: " orange",
    T: " orange",
    U: " #fff",
    V: " green",
    W: " green",
    X: " #fff",
    Y: " green",
    Z: " #fff",
    Gap: " #fff"
  };

  var Mae = {
    A: " #77dd88",
    B: " #fff",
    C: " #99ee66",
    D: " #55bb33",
    E: " #55bb33",
    F: " #9999ff",
    G: " #77dd88",
    H: " #5555ff",
    I: " #66bbff",
    J: " #fff",
    K: " #ffcc77",
    L: " #66bbff",
    M: " #66bbff",
    N: " #55bb33",
    O: " #fff",
    P: " #eeaaaa",
    Q: " #55bb33",
    R: " #ffcc77",
    S: " #ff4455",
    T: " #ff4455",
    U: " #fff",
    V: " #66bbff",
    W: " #9999ff",
    X: " #fff",
    Y: " #9999ff",
    Z: " #fff",
    Gap: " #fff"
  };

  var Nucleotide = {
    A: " #64F73F",
    C: " #FFB340",
    G: " #EB413C",
    T: " #3C88EE",
    U: " #3C88EE"
  };

  var Purine = {
    A: " #FF83FA",
    C: " #40E0D0",
    G: " #FF83FA",
    R: " #FF83FA",
    T: " #40E0D0",
    U: " #40E0D0",
    Y: " #40E0D0"
  };

  var Strand = {
    A: "#5858a7",
    R: "#6b6b94",
    N: "#64649b",
    D: "#2121de",
    C: "#9d9d62",
    Q: "#8c8c73",
    E: "#0000ff",
    G: "#4949b6",
    H: "#60609f",
    I: "#ecec13",
    L: "#b2b24d",
    K: "#4747b8",
    M: "#82827d",
    F: "#c2c23d",
    P: "#2323dc",
    S: "#4949b6",
    T: "#9d9d62",
    W: "#c0c03f",
    Y: "#d3d32c",
    V: "#ffff00",
    B: "#4343bc",
    X: "#797986",
    Z: "#4747b8"
  };

  var Taylor = {
    A: "#ccff00",
    R: "#0000ff",
    N: "#cc00ff",
    D: "#ff0000",
    C: "#ffff00",
    Q: "#ff00cc",
    E: "#ff0066",
    G: "#ff9900",
    H: "#0066ff",
    I: "#66ff00",
    L: "#33ff00",
    K: "#6600ff",
    M: "#00ff00",
    F: "#00ff66",
    P: "#ffcc00",
    S: "#ff3300",
    T: "#ff6600",
    W: "#00ccff",
    Y: "#00ffcc",
    V: "#99ff00",
    B: "#fff",
    X: "#fff",
    Z: "#fff"
  };

  var Turn = {
    A: "#2cd3d3",
    R: "#708f8f",
    N: "#ff0000",
    D: "#e81717",
    C: "#a85757",
    Q: "#3fc0c0",
    E: "#778888",
    G: "#ff0000",
    H: "#708f8f",
    I: "#00ffff",
    L: "#1ce3e3",
    K: "#7e8181",
    M: "#1ee1e1",
    F: "#1ee1e1",
    P: "#f60909",
    S: "#e11e1e",
    T: "#738c8c",
    W: "#738c8c",
    Y: "#9d6262",
    V: "#07f8f8",
    B: "#f30c0c",
    X: "#7c8383",
    Z: "#5ba4a4"
  };

  var Zappo = {
    A: "#ffafaf",
    R: "#6464ff",
    N: "#00ff00",
    D: "#ff0000",
    C: "#ffff00",
    Q: "#00ff00",
    E: "#ff0000",
    G: "#ff00ff",
    H: "#6464ff",
    I: "#ffafaf",
    L: "#ffafaf",
    K: "#6464ff",
    M: "#ffafaf",
    F: "#ffc800",
    P: "#ff00ff",
    S: "#00ff00",
    T: "#00ff00",
    W: "#ffc800",
    Y: "#ffc800",
    V: "#ffafaf",
    B: "#fff",
    X: "#fff",
    Z: "#fff"
  };

  var pid = {}; // calculating the conservation is expensive 
  // we only want to do it once

  pid.init = function () {
    this.cons = this.opt.conservation();
  };

  pid.run = function (letter, opts) {
    var cons = this.cons[opts.pos];

    if (cons > 0.8) {
      return "#6464ff";
    } else if (cons > 0.6) {
      return "#9da5ff";
    } else if (cons > 0.4) {
      return "#cccccc";
    } else {
      return "#ffffff";
    }
  };

  var staticSchemes = {
    buried: Buried,
    buried_index: Buried,
    cinema: Cinema,
    clustal2: Clustal2,
    clustal: Clustal,
    helix: Helix,
    helix_propensity: Helix,
    hydro: Hydro,
    lesk: Lesk,
    mae: Mae,
    nucleotide: Nucleotide,
    purine: Purine,
    purine_pyrimidine: Purine,
    strand: Strand,
    strand_propensity: Strand,
    taylor: Taylor,
    turn: Turn,
    turn_propensity: Turn,
    zappo: Zappo
  };
  var dynSchemes = {
    pid: pid
  };

  var Colors = function Colors(opt) {
    this.maps = clone$1(staticSchemes);
    this.dyn = clone$1(dynSchemes);
    this.opt = opt;
  };

  Colors.getScheme = function (scheme) {
    return staticSchemes[scheme];
  };

  Colors.prototype.getScheme = function (scheme) {
    var color = this.maps[scheme];

    if (color === undefined) {
      color = {};

      if (this.dyn[scheme] !== undefined) {
        return new DynSchemeClass(this.dyn[scheme], this.opt);
      }
    }

    return new StaticSchemeClass(color);
  };

  Colors.prototype.addStaticScheme = function (name, scheme) {
    this.maps[name] = scheme;
  };

  Colors.prototype.addDynScheme = function (name, scheme) {
    this.dyn[name] = scheme;
  }; // small helper to clone an object


  function clone$1(obj) {
    if (null == obj || "object" !== typeof obj) return obj;
    var copy = obj.constructor();

    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }

    return copy;
  }

  var schemesMgr = new Colors();
  /**
   * Simple color scheme abstraction over msa-colorschemes. To be extended.
   */

  var ColorScheme = /*#__PURE__*/function () {
    function ColorScheme(colorScheme) {
      _classCallCheck(this, ColorScheme);

      this.scheme = schemesMgr.getScheme(colorScheme);
    }

    _createClass(ColorScheme, [{
      key: "getColor",
      value: function getColor(element) {
        return this.scheme.getColor(element);
      }
    }]);

    return ColorScheme;
  }();
  /**
   * Checks whether the `obj` is a color scheme.
   * Everything that looks like a color scheme is very likely one.
   */

  function isColorScheme(obj) {
    return obj && typeof obj.getColor === "function";
  }

  /**
  * Copyright 2018, Plotly, Inc.
  * All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
  /**
   * Definition of a single sequence object.
   *   name: label or id of the sequence (doesn't need to be unique)
   *   sequence: raw sequence data (e.g. AGAAAA)
   */

  var SequencePropType = PropTypes.shape({
    name: PropTypes.string,
    sequence: PropTypes.string
  });
  var AllowedColorschemes = ["buried_index", "clustal", "clustal2", "cinema", "helix_propensity", "hydro", "lesk", "mae", "nucleotide", "purine_pyrimidine", "strand_propensity", "taylor", "turn_propensity", "zappo"];
  var ColorSchemePropType = PropTypes.oneOfType([PropTypes.oneOf(AllowedColorschemes), PropTypes.instanceOf(ColorScheme), function isColorSchemeObject(props, propName, componentName) {
    if (isColorScheme(props[propName])) ; else {
      return new Error('Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed.');
    }
  }]);
  var PositionPropType = PropTypes.shape({
    xPos: PropTypes.number,
    yPos: PropTypes.number
  });
  var MSAPropTypes = {
    /**
     * Sequence data.
     * `sequences` expects an array of individual sequences.
     *
     * `sequence`: Raw sequence, e.g. `MEEPQSDPSIEP` (required)
     * `name`: name of the sequence, e.g. `Sequence X`
     *
     * Example:
     *
     * ```js
     * const sequences = [
     *   {
     *     name: "seq.1",
     *     sequence: "MEEPQSDPSIEP-PLSQETFSDLWKLLPENNVLSPLPS-QA-VDDLMLSPDDLAQWLTED",
     *   },
     *   {
     *     name: "seq.2",
     *     sequence: "MEEPQSDLSIEL-PLSQETFSDLWKLLPPNNVLSTLPS-SDSIEE-LFLSENVAGWLEDP",
     *   },
     * ];
     * ```
     */
    sequences: PropTypes.arrayOf(SequencePropType).isRequired,

    /**
     * Width of the sequence viewer (in pixels), e.g. `500`.
     */
    width: PropTypes.number,

    /**
     * Height of the sequence viewer (in pixels), e.g. `500`.
     */
    height: PropTypes.number,

    /**
     * Width of the main tiles (in pixels), e.g. `20`
     */
    tileWidth: PropTypes.number,

    /**
     * Height of the main tiles (in pixels), e.g. `20`
     */
    tileHeight: PropTypes.number,

    /**
     * Font of the individual residue tiles, e.g. `"20px Arial"`.
     */
    textFont: PropTypes.string,

    /**
     * Current x and y position of the viewpoint
     * in the main sequence viewer (in pixels).
     * This specifies the position of the top-left corner
     * of the viewpoint within the entire alignment,
     * e.g. `{xPos: 20, yPos: 5}`.
     */
    position: PositionPropType,

    /**
     * Colorscheme to use. Currently the follow colorschemes are supported:
     * `buried_index`, `clustal`, `clustal2`, `cinema`, `helix_propensity`, `hydro`,
     *`lesk`, `mae`, `nucleotide`, `purine_pyrimidine`, `strand_propensity`, `taylor`,
     * `turn_propensity`, and `zappo`.
     *
    * See [msa-colorschemes](https://github.com/wilzbach/msa-colorschemes) for details.
    */
    colorScheme: ColorSchemePropType,

    /**
     * Background color to use, e.g. `red`
     */
    backgroundColor: PropTypes.string,

    /**
     * Rendering engine: `canvas` or `webgl` (experimental).
     */
    engine: PropTypes.oneOf(['canvas', 'webl']),
    // experimental

    /**
     * Callback fired when the mouse pointer is entering a residue.
     */
    onResidueMouseEnter: PropTypes.func,

    /**
     * Callback fired when the mouse pointer is leaving a residue.
     */
    onResidueMouseLeave: PropTypes.func,

    /**
     * Callback fired when the mouse pointer clicked a residue.
     */
    onResidueClick: PropTypes.func,

    /**
     * Callback fired when the mouse pointer clicked a residue.
     */
    onResidueDoubleClick: PropTypes.func,
    //Highlights
    highlight: PropTypes.oneOfType([Object, Array]) //??????

  }; // TODO: separate individual properties into their components

  var msaDefaultProps = {
    width: 500,
    height: 100,
    tileWidth: 20,
    tileHeight: 20,
    colorScheme: "clustal",
    backgroundColor: "red",
    engine: "canvas" // experimental

  };

  /**
  * Copyright 2018, Plotly, Inc.
  * All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */

  /**
   * Creates a redux action of the following payload:
   * {
   *  type,
   *  payload: ...forwardedArgNames,
   * }
   * i.e. its payload is the given `type` and the forwarded argument names from the actions payload.
   * If no arguments are provided, the payload is forwarded as `payload` in accordance to FSA (Flux Standard Action).
   *
   * Similar to createAction from redux-actions
   */
  function createAction(type) {
    for (var _len = arguments.length, argNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      argNames[_key - 1] = arguments[_key];
    }

    var actionCreator = function actionCreator() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var payload;

      if (argNames.length === 0) {
        payload = args[0];
      } else {
        payload = {};
        argNames.forEach(function (arg, index) {
          payload[argNames[index]] = args[index];
        });
      }

      return {
        type,
        payload
      };
    };

    actionCreator.toString = function () {
      return type.toString();
    };

    actionCreator.key = actionCreator.toString();
    return actionCreator;
  } // TODO: maybe use createActions from redux-actions here

  var updateProps = createAction('PROPS_UPDATE');
  var updateProp = createAction('PROP_UPDATE', 'key', 'value');
  var updateSequences = createAction('SEQUENCES_UPDATE');
  var actions = {
    updateProp,
    updateProps,
    updateSequences
  };

  /**
  * Copyright 2018, Plotly, Inc.
  * All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */

  /**
   * Creates a reducer based on a handler object.
   * Example:
   * ```
   *  const sequences = handleActions({
   *    [types.SEQUENCES_UPDATE]: calculateSequencesState,
   *  }, []);
   * ```
   *
   * Similar to handleActions from redux-actions or createReduce from redux-act
   */
  function handleActions(handlers, initialState) {
    return function reducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

      var _ref = arguments.length > 1 ? arguments[1] : undefined,
          type = _ref.type,
          payload = _ref.payload;

      if (handlers.hasOwnProperty(type)) {
        return handlers[type](state, payload);
      } else {
        return state;
      }
    };
  }

  /**
  * Copyright 2018, Plotly, Inc.
  * All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */

  /**
   * Own implementation of combineReducers which allows manipulating the state
   * afterwards
   * See:
   *  - https://github.com/reduxjs/redux/blob/master/docs/recipes/reducers/UsingCombineReducers.md
   *  - https://github.com/reduxjs/redux/blob/master/src/combineReducers.js
   *
   * Turns an object whose values are different reducer functions, into a single
   * reducer function. It will call every child reducer, and gather their results
   * into a single state object, whose keys correspond to the keys of the passed
   * reducer functions.
   *
   * @param {Object} reducers An object whose values correspond to different
   * reducer functions that need to be combined into one. One handy way to obtain
   * it is to use ES6 `import * as reducers` syntax. The reducers may never return
   * undefined for any action. Instead, they should return their initial state
   * if the state passed to them was undefined, and the current state for any
   * unrecognized action.
   *
   * @returns {Function} A reducer function that invokes every reducer inside the
   * passed object, and builds a state object with the same shape.
   */
  function combineReducers$1(reducers) {
    var keys = Object.keys(reducers);
    return function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 ? arguments[1] : undefined;
      var nextState = {};
      var hasChanged = false;

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var nextStateForKey = reducers[key](state[key], action);

        if (typeof nextStateForKey === 'undefined') {
          throw new Error("A reducer can't return 'undefined'");
        }

        nextState[key] = nextStateForKey;
        hasChanged = hasChanged || nextStateForKey !== state[key];
      }

      return hasChanged ? nextState : state;
    };
  }

  /**
  * Copyright 2018, Plotly, Inc.
  * All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */

  var calculateSequencesState = function calculateSequencesState(prevState, sequences) {
    var state = {
      raw: sequences,
      length: sequences.length
    };
    state.maxLength = reduce(sequences, function (m, e) {
      return Math.max(m, e.sequence.length);
    }, 0);
    return state;
  };

  function checkColorScheme(state) {
    if (isColorScheme(state.colorScheme)) ; else {
      state.colorScheme = new ColorScheme(state.colorScheme);
    }
  }
  /**
   * Makes sure that a colorScheme is only recreated if it changed.
   */


  var props = function props() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref = arguments.length > 1 ? arguments[1] : undefined,
        type = _ref.type,
        payload = _ref.payload;

    switch (type) {
      case actions.updateProps.key:
        state = _objectSpread2(_objectSpread2({}, state), payload); // has the colorScheme been updated?

        if ("colorScheme" in payload) {
          checkColorScheme(state);
        }

        return state;

      case actions.updateProp.key:
        var key = payload.key,
            value = payload.value;
        state = _objectSpread2(_objectSpread2({}, state), {}, {
          [key]: value
        }); // has the colorScheme been updated?

        if (key === "colorScheme") {
          checkColorScheme(state);
        }

        return state;

      default:
        if (state.colorScheme !== undefined) {
          checkColorScheme(state);
        }

        return state;
    }
  };

  var sequences = handleActions({
    [actions.updateSequences]: calculateSequencesState
  }, []);
  /**
   * Aggregates the state with stats if the state changed.
   */
  // TODO: maybe use reselect for this?

  var sequenceStats = function sequenceStats() {
    var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      currentViewSequence: 0,
      currentViewSequencePosition: 0
    };
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var state = arguments.length > 2 ? arguments[2] : undefined;

    switch (action.type) {
      case actions.updateProp.key:
      case actions.updateProps.key:
      case actions.updateSequences.key:
        if (state.props && state.props.tileHeight && state.props.tileWidth && state.sequences) {
          var stats = {};
          stats.nrXTiles = Math.ceil(state.props.width / state.props.tileWidth) + 1;
          stats.nrYTiles = Math.ceil(state.props.height / state.props.tileHeight) + 1;
          stats.fullWidth = state.props.tileWidth * state.sequences.maxLength;
          stats.fullHeight = state.props.tileHeight * state.sequences.length;
          return stats;
        }

        break;

      default:
    }

    return prevState;
  };
  /**
   * Takes an reducer and an object of `statReducers`.
   * The `statReducers` have the following differences to normal reducers:
   *  - they are only called when the state has changed
   *  - they receive the full state as third parameter
   *
   *  These stat reducers are meant to efficiently compute derived statistics.
   */


  var statCombineReduce = function statCombineReduce(reducer, statReducers) {
    var keys = Object.keys(statReducers);
    return function () {
      var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 ? arguments[1] : undefined;
      var state = reducer(prevState, action);

      if (prevState !== state) {
        // state object already changed, no need to copy it again
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var nextStateForKey = statReducers[key](state[key], action, state);

          if (typeof nextStateForKey === 'undefined') {
            throw new Error("A reducer can't return 'undefined'");
          }

          state[key] = nextStateForKey;
        }
      }

      return state;
    };
  };

  var positionReducers = statCombineReduce(combineReducers$1({
    props,
    sequences
  }), {
    sequenceStats
  });

  var env = "production" === 'development';

  /**
  Initializes a new MSAViewer store-like structure.
  For performance reasons, the frequently changing position information
  has its own redux store.
  The default properties from MSAViewer.defaultProps are used.
  */

  var createMSAStore = function createMSAStore(props) {
    PropTypes.checkPropTypes(MSAPropTypes, props, 'prop', 'MSAViewer');
    var propsWithDefaultValues = merge({}, msaDefaultProps, props);

    var sequences = propsWithDefaultValues.sequences,
        position = propsWithDefaultValues.position,
        otherProps = _objectWithoutProperties(propsWithDefaultValues, ["sequences", "position"]);

    var store = createStore(positionReducers, // https://github.com/zalmoxisus/redux-devtools-extension
    env && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    store.dispatch(updateProps(otherProps));
    store.dispatch(updateSequences(sequences));
    return store;
  };

  /**
  * Copyright 2018, Plotly, Inc.
  * All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
  var MSAProvider = createProvider(storeKey);

  var RefForwarder = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _react2 = _interopRequireDefault(React__default);



  var _createRef2 = _interopRequireDefault(createRef);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ForwardRefPolyfill = function (_React$Component) {
    _inherits(ForwardRefPolyfill, _React$Component);

    function ForwardRefPolyfill(props) {
      _classCallCheck(this, ForwardRefPolyfill);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      _this.__forwardedRef = (0, _createRef2.default)();
      return _this;
    }

    ForwardRefPolyfill.prototype.__render = function __render() {
      return null;
    };

    ForwardRefPolyfill.prototype.getRef = function getRef() {
      // Check for `.current` first before `.value` since it's the
      // newest property name in React.
      return this.__forwardedRef.current || this.__forwardedRef.value;
    };

    ForwardRefPolyfill.prototype.render = function render() {
      return this.__render(this.props, this.__forwardedRef);
    };

    return ForwardRefPolyfill;
  }(_react2.default.Component);

  ForwardRefPolyfill.displayName = 'ForwardRefPolyfill';
  exports.default = ForwardRefPolyfill;
  module.exports = exports['default'];
  });

  unwrapExports(RefForwarder);

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

  function makeEmptyFunction(arg) {
    return function () {
      return arg;
    };
  }

  /**
   * This function accepts and discards inputs; it has no side effects. This is
   * primarily useful idiomatically for overridable function endpoints which
   * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
   */
  var emptyFunction = function emptyFunction() {};

  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function () {
    return this;
  };
  emptyFunction.thatReturnsArgument = function (arg) {
    return arg;
  };

  var emptyFunction_1 = emptyFunction;

  /**
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */

  var warning$2 = emptyFunction_1;

  var warning_1 = warning$2;

  var forwardRef = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _react2 = _interopRequireDefault(React__default);



  var _createRef2 = _interopRequireDefault(createRef);



  var _RefForwarder3 = _interopRequireDefault(RefForwarder);



  var _warning2 = _interopRequireDefault(warning_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  exports.default = _react2.default.forwardRef || function forwardRef(render) {
    return function (_RefForwarder) {
      _inherits(_class2, _RefForwarder);

      function _class2() {
        var _temp, _this, _ret;

        _classCallCheck(this, _class2);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _RefForwarder.call.apply(_RefForwarder, [this].concat(args))), _this), _this.__render = render, _temp), _possibleConstructorReturn(_this, _ret);
      }

      return _class2;
    }(_RefForwarder3.default);
  };

  module.exports = exports['default'];
  });

  unwrapExports(forwardRef);

  var getRef_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = getRef;





  var _RefForwarder2 = _interopRequireDefault(RefForwarder);



  var _warning2 = _interopRequireDefault(warning_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function getRef(refObject) {
    if (!refObject) {
      return null;
    }

    var ref = refObject;

    if (typeof ref === 'function' && "production" !== 'production') {
      (0, _warning2.default)(ref.hasOwnProperty('current'), 'getRef: It looks like you may have passed `getRef` the ref callback as ' + 'an argument. `getRef` should be used with a ref object created by ' + '`createRef` or inside a ref callback.');
    }

    if (Object.keys(ref).length === 1) {
      if (ref.hasOwnProperty('current')) {
        ref = ref.current;
        // We probably don't have to support this route since it was only
        // in one version of React and it was an alpha release (16.3.0-alpha.1).
      } else if (ref.hasOwnProperty('value')) {
        ref = ref.value;
      }
    }

    // Get polyfilled forwardedRef, if it exists
    if (ref instanceof _RefForwarder2.default) {
      ref = ref.getRef();
    }

    return ref;
  }
  module.exports = exports['default'];
  });

  unwrapExports(getRef_1);

  var createRef = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _react2 = _interopRequireDefault(React__default);



  var _getRef2 = _interopRequireDefault(getRef_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _react2.default.createRef || function createRef() {
    function ref(instanceOrNode) {
      ref.current = (0, _getRef2.default)(instanceOrNode) || null;
    }

    ref.current = null;

    return ref;
  };

  module.exports = exports['default'];
  });

  var createRef$1 = unwrapExports(createRef);

  /**
   * Injects the position store functionality in the requiring components.
   * This won't trigger state updates to prevent React Tree calculcuation at the utmost cost.
   *
   * @param {Object} Component - class to inject the position store into
   * @param {Object} Configuration - which parts of the position store to check for smart rerendering
   *
   * Select from:
   * - `withY` (`yPosOffset`, `currentViewSequence`)
   * - `withX` (`xPosOffset`, `currentViewSequencePosition`)
   *
   * Multiple selections are allowed.
   *
   * It will pass the following functionality properties:
   *
   * (a) `position` (current state of the position store)
   * WARNING: this gets updated in-place to avoid react rerenders
   *
   * (b) `positionDispatch` (dispatch method for the position store)
   *
   * Furthermore,
   *
   * (1) ff a component implements `updateScrollPosition`, it will be called after
   * every store update. Otherwise a default implementation will be used.
   *
   * (2) If a component implements `shouldRerender(newPosition)`, it will be called after
   * every store update. Otherwise a default implementation will be used.
   */

  function withPositionConsumer(Component) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$withX = _ref.withX,
        withX = _ref$withX === void 0 ? false : _ref$withX,
        _ref$withY = _ref.withY,
        withY = _ref$withY === void 0 ? false : _ref$withY;

    var MSAPositionConsumer = /*#__PURE__*/function (_PureComponent) {
      _inherits(MSAPositionConsumer, _PureComponent);

      var _super = _createSuper(MSAPositionConsumer);

      function MSAPositionConsumer(props) {
        var _this;

        _classCallCheck(this, MSAPositionConsumer);

        _this = _super.call(this, props);

        _defineProperty(_assertThisInitialized(_this), "updateFromPositionStore", function () {

          var state = _this.context.positionMSAStore.getState();

          _this.position = _this.position || {}; // create new position object to compare it with the previous

          var newPosition = pick(state, ["currentViewSequence", "currentViewSequencePosition", "xPosOffset", "yPosOffset"]);

          if (state.position) {
            newPosition.xPos = state.position.xPos;
            newPosition.yPos = state.position.yPos;
          } // not called on the first render


          if (_this.el.current && _this.shouldRerender(newPosition)) {
            // this will always force a rerender as position is a new object
            _this.position = newPosition; // it doesn't matter what state we set here, this is just to force
            // React to rerender

            _this.setState({
              position: _this.position
            });
          } else {
            // copy over new position
            forOwn(newPosition, function (v, k) {
              _this.position[k] = v;
            });

            if (_this.el.current) {
              _this.updateScrollPosition();
            }
          }
        });

        _defineProperty(_assertThisInitialized(_this), "shouldRerender", function (newPosition) {
          var it = _this.el.current;

          if (it.shouldRerender !== undefined) {
            return it.shouldRerender(newPosition);
          }

          var cacheElements = it.props.cacheElements;

          if (withY) {
            if (Math.abs(newPosition.currentViewSequence - _this.position.lastCurrentViewSequence) >= cacheElements) {
              return true;
            }
          }

          if (withX) {
            if (Math.abs(newPosition.currentViewSequencePosition - _this.position.lastCurrentViewSequencePosition) >= cacheElements) {
              return true;
            }
          }

          return false;
        });

        _defineProperty(_assertThisInitialized(_this), "updateScrollPosition", function () {
          var it = _this.el.current; // be careful - might be a shallow render

          if (it && it.updateScrollPosition !== undefined) {
            it.updateScrollPosition();
            return;
          }

          if (it && it.el && it.el.current) {
            if (withX) {
              var tileWidth = it.props.tileWidth;
              var offsetX = -_this.position.xPosOffset;
              offsetX += (_this.position.lastCurrentViewSequencePosition - _this.position.lastStartXTile) * tileWidth;

              if (_this.position.currentViewSequencePosition !== _this.position.lastCurrentViewSequencePosition) {
                offsetX += (_this.position.currentViewSequencePosition - _this.position.lastCurrentViewSequencePosition) * tileWidth;
              }

              it.el.current.scrollLeft = offsetX;
            }

            if (withY) {
              var tileHeight = it.props.tileHeight;
              var offsetY = -_this.position.yPosOffset;
              offsetY += (_this.position.lastCurrentViewSequence - _this.position.lastStartYTile) * tileHeight;

              if (_this.position.currentViewSequence !== _this.position.lastCurrentViewSequence) {
                offsetY += (_this.position.currentViewSequence - _this.position.lastCurrentViewSequence) * tileHeight;
              }

              it.el.current.scrollTop = offsetY;
            }
          }
        });

        _defineProperty(_assertThisInitialized(_this), "dispatch", function (payload) {
          _this.context.positionMSAStore.dispatch(payload);
        });

        _this.el = createRef$1();
        _this.state = {
          highlight: null,
          hasBeenInitialized: false
        };
        return _this;
      }

      _createClass(MSAPositionConsumer, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          // update to all updates from the position store
          this.unsubscribe = this.context.positionMSAStore.subscribe(this.updateFromPositionStore);
          this.updateScrollPosition(true);
          this.updateFromPositionStore();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          this.updateScrollPosition();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.unsubscribe();
        }
        /**
         * a method which updates this.position from the PositionStore
         * when `shouldRerender` returns true, calls `setState({position: positionState})` is called
         * always calls `updateScrollPosition`
         */

      }, {
        key: "render",
        value: function render() {
          if (!this.hasBeenInitialized) {
            this.updateFromPositionStore();
            this.hasBeenInitialized = true;
          }

          return /*#__PURE__*/React__default.createElement(Component, _objectSpread2({
            ref: this.el,
            position: this.position,
            positionDispatch: this.dispatch,
            highlight: this.state.highlight
          }, this.props));
        }
      }]);

      return MSAPositionConsumer;
    }(React.PureComponent);

    MSAPositionConsumer.displayName = "withPosition(".concat(Component.displayName || Component.name, ")");
    MSAPositionConsumer.contextTypes = {
      positionMSAStore: PropTypes.object
    };
    return MSAPositionConsumer;
  }

  function defaultEqualityCheck(a, b) {
    return a === b;
  }

  function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    }

    // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
    var length = prev.length;
    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }

    return true;
  }

  function defaultMemoize(func) {
    var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

    var lastArgs = null;
    var lastResult = null;
    // we reference arguments instead of spreading them for performance reasons
    return function () {
      if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
        // apply arguments instead of spreading for performance.
        lastResult = func.apply(null, arguments);
      }

      lastArgs = arguments;
      return lastResult;
    };
  }

  function getDependencies(funcs) {
    var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

    if (!dependencies.every(function (dep) {
      return typeof dep === 'function';
    })) {
      var dependencyTypes = dependencies.map(function (dep) {
        return typeof dep;
      }).join(', ');
      throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
    }

    return dependencies;
  }

  function createSelectorCreator(memoize) {
    for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      memoizeOptions[_key - 1] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        funcs[_key2] = arguments[_key2];
      }

      var recomputations = 0;
      var resultFunc = funcs.pop();
      var dependencies = getDependencies(funcs);

      var memoizedResultFunc = memoize.apply(undefined, [function () {
        recomputations++;
        // apply arguments instead of spreading for performance.
        return resultFunc.apply(null, arguments);
      }].concat(memoizeOptions));

      // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
      var selector = memoize(function () {
        var params = [];
        var length = dependencies.length;

        for (var i = 0; i < length; i++) {
          // apply arguments instead of spreading and mutate a local list of params for performance.
          params.push(dependencies[i].apply(null, arguments));
        }

        // apply arguments instead of spreading for performance.
        return memoizedResultFunc.apply(null, params);
      });

      selector.resultFunc = resultFunc;
      selector.dependencies = dependencies;
      selector.recomputations = function () {
        return recomputations;
      };
      selector.resetRecomputations = function () {
        return recomputations = 0;
      };
      return selector;
    };
  }

  var createSelector = createSelectorCreator(defaultMemoize);

  // Unmodified from: https://github.com/dashed/shallowequal
  // (required as shallowEqual isn't exported as an ES6 module and rollup requires this)
  function shallowEqual$1(objA, objB, compare, compareContext) {
    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if (ret !== void 0) {
      return !!ret;
    }

    if (objA === objB) {
      return true;
    }

    if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
      return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB); // Test for A's keys different from B.

    for (var idx = 0; idx < keysA.length; idx++) {
      var key = keysA[idx];

      if (!bHasOwnProperty(key)) {
        return false;
      }

      var valueA = objA[key];
      var valueB = objB[key];
      ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

      if (ret === false || ret === void 0 && valueA !== valueB) {
        return false;
      }
    }

    return true;
  }

  /**
  * Copyright 2018, Plotly, Inc.
  * All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
  /**
   * A reselect selector with shallow identity comparison.
   * @param {function} input selectors
   * @param {function} result function
   * See also: https://github.com/reduxjs/reselect#createselectorinputselectors--inputselectors-resultfunc
   */

  var shallowSelect = createSelectorCreator(defaultMemoize, shallowEqual$1);

  /**
  * Copyright 2018, Plotly, Inc.
  * All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
  /**
   * Automatically bind all given methods to the class instance.
   *
   * @param {object} object - instance to bind the method to
   * @param {string} arguments - methods of the instance to bind
   *
   * Note that class properties with arrows aren't a good solution
   * to the binding problem.
   * See e.g. https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1
   */

  function autoBind(instance) {

    for (var i = 1; i < arguments.length; i++) {
      var k = arguments[i];
      instance[k] = instance[k].bind(instance);
    }
  }

  /**
   * Renders a list of tiles, but caches already seen components.
   */

  var ListComponent = /*#__PURE__*/function (_PureComponent) {
    _inherits(ListComponent, _PureComponent);

    var _super = _createSuper(ListComponent);

    function ListComponent() {
      _classCallCheck(this, ListComponent);

      return _super.apply(this, arguments);
    }

    _createClass(ListComponent, [{
      key: "renderTile",
      value: function renderTile(i) {
        var TileComponent = this.props.tileComponent;

        if (i in this.props.componentCache) {
          return this.props.componentCache[i];
        } else {
          var el = /*#__PURE__*/React__default.createElement(TileComponent, {
            key: i,
            index: i
          });
          this.props.componentCache[i] = el;
          return el;
        }
      }
    }, {
      key: "render",
      value: function render() {
        var elements = [];

        for (var i = this.props.startTile; i < this.props.endTile; i++) {
          elements.push(this.renderTile(i));
        }

        if (elements.length === 0) {
          console.warn("The TileComponent rendered returned 0 elements from ".concat(this.props.startTile, " to ").concat(this.props.endTile));
        } // React 15 doesn't allow to return arrays directly. Only React 16 does.


        return /*#__PURE__*/React__default.createElement("div", null, elements);
      }
    }]);

    return ListComponent;
  }(React.PureComponent);

  ListComponent.propTypes = {
    startTile: PropTypes.number.isRequired,
    endTile: PropTypes.number.isRequired,
    componentCache: PropTypes.func.isRequired
  };

  /**
  * Displays the sequence names with an arbitrary Marker component
  */

  var YBarComponent = /*#__PURE__*/function (_PureComponent) {
    _inherits(YBarComponent, _PureComponent);

    var _super = _createSuper(YBarComponent);

    function YBarComponent(props) {
      var _this;

      _classCallCheck(this, YBarComponent);

      _this = _super.call(this, props);
      _this.el = createRef$1();
      return _this;
    }

    _createClass(YBarComponent, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            yPosOffset = _this$props.yPosOffset,
            tileHeight = _this$props.tileHeight,
            currentViewSequence = _this$props.currentViewSequence,
            sequences = _this$props.sequences,
            height = _this$props.height,
            cacheElements = _this$props.cacheElements,
            tileComponent = _this$props.tileComponent,
            nrYTiles = _this$props.nrYTiles,
            position = _this$props.position,
            positionDispatch = _this$props.positionDispatch,
            componentCache = _this$props.componentCache,
            otherProps = _objectWithoutProperties(_this$props, ["yPosOffset", "tileHeight", "currentViewSequence", "sequences", "height", "cacheElements", "tileComponent", "nrYTiles", "position", "positionDispatch", "componentCache"]);

        var style = {
          height,
          overflow: "hidden",
          position: "relative",
          whiteSpace: "nowrap"
        };
        var startTile = Math.max(0, this.props.position.currentViewSequence - this.props.cacheElements);
        var endTile = Math.min(this.props.sequences.length, startTile + Math.ceil(height / this.props.tileHeight) + this.props.cacheElements * 2);
        this.props.position.lastCurrentViewSequence = this.props.position.currentViewSequence;
        this.props.position.lastStartYTile = startTile;
        return /*#__PURE__*/React__default.createElement("div", otherProps, /*#__PURE__*/React__default.createElement("div", {
          style: style,
          ref: this.el
        }, /*#__PURE__*/React__default.createElement(ListComponent, {
          componentCache: this.props.componentCache,
          startTile: startTile,
          endTile: endTile,
          tileComponent: this.props.tileComponent
        })));
      }
    }]);

    return YBarComponent;
  }(React.PureComponent);

  YBarComponent.propTypes = {
    /**
     * Tile to render.
     */
    tileComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
    cacheElements: PropTypes.number.isRequired,
    tileHeight: PropTypes.number.isRequired,
    nrYTiles: PropTypes.number.isRequired,
    componentCache: PropTypes.func.isRequired
  };
  var YBar = withPositionConsumer(YBarComponent, {
    withY: true
  });

  function _createLabel(_ref) {
    var sequences = _ref.sequences,
        tileHeight = _ref.tileHeight,
        labelComponent = _ref.labelComponent,
        labelStyle = _ref.labelStyle,
        labelAttributes = _ref.labelAttributes;

    /**
     * Displays an individual sequence name.
     */
    var Label = /*#__PURE__*/function (_PureComponent) {
      _inherits(Label, _PureComponent);

      var _super = _createSuper(Label);

      function Label() {
        _classCallCheck(this, Label);

        return _super.apply(this, arguments);
      }

      _createClass(Label, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              index = _this$props.index,
              otherProps = _objectWithoutProperties(_this$props, ["index"]);

          if (labelComponent) {
            var LabelComponent = labelComponent;
            return /*#__PURE__*/React__default.createElement(LabelComponent, {
              sequence: sequences[index],
              index: index
            });
          } else {
            otherProps.style = _objectSpread2(_objectSpread2({}, this.props.style), {}, {
              height: tileHeight
            }, labelStyle);

            var attributes = _objectSpread2(_objectSpread2({}, otherProps), labelAttributes);

            return /*#__PURE__*/React__default.createElement("div", attributes, sequences[index].name);
          }
        }
      }]);

      return Label;
    }(React.PureComponent);

    return Label;
  }
  /**
   * Displays the sequence names.
   */


  var HTMLLabelsComponent = /*#__PURE__*/function (_PureComponent2) {
    _inherits(HTMLLabelsComponent, _PureComponent2);

    var _super2 = _createSuper(HTMLLabelsComponent);

    function HTMLLabelsComponent(props) {
      var _this;

      _classCallCheck(this, HTMLLabelsComponent);

      _this = _super2.call(this, props);
      autoBind(_assertThisInitialized(_this), 'createLabel');
      _this.label = shallowSelect(partialRight(pick, _this.constructor.labelProps), _this.createLabel);
      return _this;
    }

    _createClass(HTMLLabelsComponent, [{
      key: "createLabel",
      value: function createLabel(props) {
        this.cache = function () {};

        return _createLabel(props);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            cacheElements = _this$props2.cacheElements,
            dispatch = _this$props2.dispatch,
            labelComponent = _this$props2.labelComponent,
            labelStyle = _this$props2.labelStyle,
            labelAttributes = _this$props2.labelAttributes,
            otherProps = _objectWithoutProperties(_this$props2, ["cacheElements", "dispatch", "labelComponent", "labelStyle", "labelAttributes"]);

        return /*#__PURE__*/React__default.createElement(YBar, _extends({
          tileComponent: this.label(this.props),
          cacheElements: cacheElements,
          componentCache: this.cache
        }, otherProps));
      }
    }]);

    return HTMLLabelsComponent;
  }(React.PureComponent);

  _defineProperty(HTMLLabelsComponent, "labelProps", ["sequences", "tileHeight", "labelComponent", "labelStyle", "labelAttributes"]);

  HTMLLabelsComponent.defaultProps = {
    cacheElements: 10,
    labelStyle: {}
  };
  HTMLLabelsComponent.propTypes = {
    /**
     * Font of the sequence labels, e.g. `20px Arial`
     */
    font: PropTypes.string,

    /**
     * Component to create labels from.
     */
    labelComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

    /**
     * Inline styles to apply to the Label component
     */
    style: PropTypes.object,

    /**
     * Inline styles to apply to each label.
     */
    labelStyle: PropTypes.object,

    /**
     * Attributes to apply to each label.
     */
    labelAttributes: PropTypes.object
  };

  var mapStateToProps = function mapStateToProps(state) {
    return {
      height: state.props.height,
      tileHeight: state.props.tileHeight,
      sequences: state.sequences.raw,
      nrYTiles: state.sequenceStats.nrYTiles
    };
  };

  var Labels = msaConnect(mapStateToProps)(HTMLLabelsComponent); // for testing

  /**
  * Displays the sequence names with an arbitrary Marker component
  */

  var XBarComponent = /*#__PURE__*/function (_PureComponent) {
    _inherits(XBarComponent, _PureComponent);

    var _super = _createSuper(XBarComponent);

    function XBarComponent(props) {
      var _this;

      _classCallCheck(this, XBarComponent);

      _this = _super.call(this, props);
      _this.el = createRef$1();
      return _this;
    }

    _createClass(XBarComponent, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            tileWidth = _this$props.tileWidth,
            sequences = _this$props.sequences,
            width = _this$props.width,
            cacheElements = _this$props.cacheElements,
            tileComponent = _this$props.tileComponent,
            nrXTiles = _this$props.nrXTiles,
            maxLength = _this$props.maxLength,
            position = _this$props.position,
            positionDispatch = _this$props.positionDispatch,
            componentCache = _this$props.componentCache,
            otherProps = _objectWithoutProperties(_this$props, ["tileWidth", "sequences", "width", "cacheElements", "tileComponent", "nrXTiles", "maxLength", "position", "positionDispatch", "componentCache"]);

        var style = {
          width,
          overflow: "hidden",
          position: "relative",
          whiteSpace: "nowrap"
        };

        var containerStyle = _objectSpread2(_objectSpread2({}, this.props.style), {}, {
          height: this.props.height
        });

        var forwardedProps = {
          tileWidth,
          sequences,
          tileComponent
        };
        var startTile = Math.max(0, this.props.position.currentViewSequencePosition - this.props.cacheElements);
        var endTile = Math.min(this.props.maxLength, startTile + this.props.nrXTiles + this.props.cacheElements * 2);
        var maxWidth = this.props.width + this.props.cacheElements * 2 * this.props.tileWidth;
        this.props.position.lastStartXTile = startTile;
        this.props.position.lastCurrentViewSequencePosition = this.props.position.currentViewSequencePosition;
        return /*#__PURE__*/React__default.createElement("div", _extends({
          style: containerStyle
        }, otherProps), /*#__PURE__*/React__default.createElement("div", {
          style: style,
          ref: this.el
        }, /*#__PURE__*/React__default.createElement(ListComponent, _extends({}, forwardedProps, {
          componentCache: this.props.componentCache,
          startTile: startTile,
          endTile: endTile,
          maxWidth: maxWidth
        }))));
      }
    }]);

    return XBarComponent;
  }(React.PureComponent);

  XBarComponent.propTypes = {
    /**
     * Tile to render.
     */
    tileComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
    cacheElements: PropTypes.number.isRequired,
    tileWidth: PropTypes.number.isRequired,
    nrXTiles: PropTypes.number.isRequired,
    maxLength: PropTypes.number.isRequired,
    componentCache: PropTypes.func.isRequired
  };
  var XBar = withPositionConsumer(XBarComponent, {
    withX: true
  });

  function _createMarker(_ref) {
    var markerSteps = _ref.markerSteps,
        startIndex = _ref.startIndex,
        tileWidth = _ref.tileWidth,
        font = _ref.font,
        markerComponent = _ref.markerComponent,
        markerStyle = _ref.markerStyle,
        markerAttributes = _ref.markerAttributes;

    /**
     * Displays an individual sequence name.
     */
    var Marker = /*#__PURE__*/function (_PureComponent) {
      _inherits(Marker, _PureComponent);

      var _super = _createSuper(Marker);

      function Marker() {
        _classCallCheck(this, Marker);

        return _super.apply(this, arguments);
      }

      _createClass(Marker, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              index = _this$props.index,
              otherProps = _objectWithoutProperties(_this$props, ["index"]);

          if (markerComponent) {
            var MarkerComponent = markerComponent;
            return /*#__PURE__*/React__default.createElement(MarkerComponent, {
              index: index
            });
          } else {
            otherProps.style = _objectSpread2({
              width: tileWidth,
              display: "inline-block",
              textAlign: "center"
            }, markerStyle);
            var name;

            if (index % markerSteps === 0) {
              name = index + 0 + startIndex;
            } else {
              name = '.';
            }

            var attributes = _objectSpread2(_objectSpread2({}, otherProps), markerAttributes);

            return /*#__PURE__*/React__default.createElement("div", attributes, name);
          }
        }
      }]);

      return Marker;
    }(React.PureComponent);

    return Marker;
  }
  /**
  * Displays the sequence names with an arbitrary Marker component
  */


  var HTMLPositionBarComponent = /*#__PURE__*/function (_PureComponent2) {
    _inherits(HTMLPositionBarComponent, _PureComponent2);

    var _super2 = _createSuper(HTMLPositionBarComponent);

    function HTMLPositionBarComponent(props) {
      var _this;

      _classCallCheck(this, HTMLPositionBarComponent);

      _this = _super2.call(this, props);

      _this.cache = function () {};

      autoBind(_assertThisInitialized(_this), 'createMarker');
      _this.marker = shallowSelect(partialRight(pick, _this.constructor.markerAttributes), _this.createMarker);
      return _this;
    }

    _createClass(HTMLPositionBarComponent, [{
      key: "createMarker",
      value: function createMarker(props) {
        this.cache = function () {};

        return _createMarker(props);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            cacheElements = _this$props2.cacheElements,
            markerSteps = _this$props2.markerSteps,
            startIndex = _this$props2.startIndex,
            dispatch = _this$props2.dispatch,
            markerComponent = _this$props2.markerComponent,
            markerStyle = _this$props2.markerStyle,
            otherProps = _objectWithoutProperties(_this$props2, ["cacheElements", "markerSteps", "startIndex", "dispatch", "markerComponent", "markerStyle"]);

        return /*#__PURE__*/React__default.createElement(XBar, _extends({
          tileComponent: this.marker(this.props),
          cacheElements: cacheElements,
          componentCache: this.cache
        }, otherProps));
      }
    }]);

    return HTMLPositionBarComponent;
  }(React.PureComponent);

  _defineProperty(HTMLPositionBarComponent, "markerAttributes", ["markerSteps", "startIndex", "tileWidth", "markerComponent", "markerStyle", "markerAttributes"]);

  HTMLPositionBarComponent.defaultProps = {
    style: {
      font: "12px Arial"
    },
    height: 15,
    markerSteps: 2,
    startIndex: 1,
    cacheElements: 10,
    markerStyle: {}
  };
  HTMLPositionBarComponent.propTypes = {
    /**
     * Font of the sequence labels, e.g. `20px Arial`
     */
    font: PropTypes.string,

    /**
     * Height of the PositionBar (in pixels), e.g. `100`
     */
    height: PropTypes.number,

    /**
     * At which steps the position labels should appear, e.g. `2` for (1, 3, 5)
     */
    markerSteps: PropTypes.number,

    /**
     * At which number the PositionBar marker should start counting.
     * Typical values are: `1` (1-based indexing) and `0` (0-based indexing).
     */
    startIndex: PropTypes.number,

    /**
     * Component to create markers from.
     */
    markerComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

    /**
     * Inline styles to apply to the PositionBar component
     */
    style: PropTypes.object,

    /**
     * Inline styles to apply to each marker.
     */
    markerStyle: PropTypes.object,

    /**
     * Attributes to apply to each marker.
     */
    markerAttributes: PropTypes.object
  };

  var mapStateToProps$1 = function mapStateToProps(state) {
    return {
      sequences: state.sequences.raw,
      maxLength: state.sequences.maxLength,
      width: state.props.width,
      tileWidth: state.props.tileWidth,
      nrXTiles: state.sequenceStats.nrXTiles
    };
  };

  var PositionBar = msaConnect(mapStateToProps$1)(HTMLPositionBarComponent);

  var stat = function stat(seqs, opts) {
    // if someone forgets new
    if (!this || this.constructor !== stat) {
      return new stat(seqs);
    }

    if (seqs === undefined || typeof seqs === "string") {
      throw new TypeError("you need to give the seq stat an array");
    } //if(seqs.length == 0){
    //throw new TypeError("you need to give the seq stat a real array");
    //}


    this.resetSeqs(seqs);
    this.alphabetSize = 4;
    this._useBackground = false;
    this.useGaps = false;
    this.ignoredChars = ["-", "*"];
    assignIn(this, opts);
  };

  stat.prototype.addSeq = function addSeq(seq) {
    this.seqs.push(seq);

    this._reset();
  };

  stat.prototype.removeSeq = function addSeq(seq) {
    // check for int or string
    if (typeof seq === 'number') {
      this.seqs.splice(seq, 1);
    } else {
      // identify matches (we could have multiple)
      forEach(this.seqs, function (s, i) {
        if (seq === s) {
          this.seqs.splice(i, 1);
        }
      }.bind(this));
    }

    this._reset();
  };

  stat.prototype.addSeqs = function addSeqs(seqs) {
    seqs.forEach(function (seq) {
      this.addSeq(seq);
    }.bind(this));
  };

  stat.prototype.resetSeqs = function reset(seqs) {
    this.seqs = []; // support sequence models

    if (!seqs instanceof Array || "at" in seqs) {
      this.mseqs = seqs;

      var mSeqsPluck = function mSeqsPluck() {
        var seqArr = this.mseqs.pluck("seq");
        this.resetSeqs(seqArr);
      };

      seqs.on("add change reset ", mSeqsPluck, this);
      mSeqsPluck.call(this);
    } else {
      this.addSeqs(seqs);

      this._reset();
    }
  };

  var calcValues = ["consensus", "frequency", "maxLength", "ic", "gaps"];

  stat.prototype._reset = function _reset() {
    for (var i = 0; i < calcValues.length; i++) {
      this["_" + calcValues[i]] = undefined;
    }

    this._identity = undefined;
    this._background = undefined;
  }; // -----------------------------------------------------------------------------
  // BEGIN: setter/getter
  // -----------------------------------------------------------------------------


  stat.prototype.setBackground = function setBackground(b) {
    this._useBackground = b;

    this._reset();
  };

  stat.prototype.useBackground = function useBackground() {
    this.setBackground(true);
  };

  stat.prototype.setDNA = function setNucleotide() {
    this.alphabetSize = 4;
  };

  stat.prototype.setProtein = function setDNA() {
    this.alphabetSize = 20;
  }; // -----------------------------------------------------------------------------
  // BEGIN: auto wrappers
  // -----------------------------------------------------------------------------
  // neat auto-wrappers


  calcValues.forEach(function (key) {
    stat.prototype[key] = function () {
      if (this["_" + key] === undefined) {
        this["_" + key] = this[key + "Calc"]();
      }

      return this["_" + key];
    };
  });

  stat.prototype.identity = function identitiy(seq) {
    // do not cache if its called with a special compare seq
    var ident;

    if (this._identity === undefined || seq) {
      ident = this.identityCalc(seq);
      this._identity = undefined;
    }

    return this._identity || ident;
  }; // set your own background with obj.bg


  stat.prototype.background = function background() {
    if (this.bg !== undefined) {
      return this.bg;
    }

    if (this._background === undefined) {
      this.backgroundCalc();
    }

    return this._background;
  }; // -----------------------------------------------------------------------------
  // BEGIN: calc tools
  // -----------------------------------------------------------------------------
  // calculates the relative frequency of a base at a given position
  // this is needed e.g. for the entropy calculation
  // seqs: array of sequences (strings)
  // opts:
  //    all: boolean (use to show the frequencies for all letters [including the ignored ones]
  //    (default false)
  // @returns array of all positions with a dictionary of all bases with their relative frequency


  stat.prototype.frequencyCalc = function frequencyCalc(opts) {
    var occs, totalPerPos;
    occs = new Array(this.maxLength());
    totalPerPos = new Array(this.seqs.length);
    var ignoredChars = this.ignoredChars;

    if (opts !== undefined && opts.all) {
      ignoredChars = [];
    } // count the occurrences of the chars at a position


    forEach(this.seqs, function (el) {
      forEach(el, function (c, pos) {
        if (ignoredChars.indexOf(c) >= 0) return;

        if (occs[pos] === undefined) {
          occs[pos] = {};
        }

        if (occs[pos][c] === undefined) {
          occs[pos][c] = 0;
        }

        occs[pos][c]++;

        if (totalPerPos[pos] === undefined) {
          totalPerPos[pos] = 0;
        }

        totalPerPos[pos]++;
      });
    }); // normalize to 1

    forEach(occs, function (el, pos) {
      return forEach(el, function (val, c) {
        return occs[pos][c] = val / totalPerPos[pos];
      });
    });
    this._frequency = occs;
    return occs;
  }; // seqs: array of sequences (strings)


  stat.prototype.backgroundCalc = function backgroundCalc() {
    var occ = {};
    var total = 0; // count the occurences of the chars of a position

    forEach(this.seqs, function (el) {
      forEach(el, function (c) {
        if (occ[c] === undefined) {
          occ[c] = 0;
        }

        occ[c]++;
        return total++;
      });
    }); // normalize to 1

    occ = mapValues(occ, function (val) {
      return val / total;
    });
    this._background = occ;
    return occ;
  }; // information content after Shannon
  // * gaps are excluded


  stat.prototype.icCalc = function icCalc() {
    var f = this.frequency();

    if (this._useBackground) {
      var b = this.background();
    }

    var ignoredChars = this.ignoredChars;
    var useBackground = this._useBackground;
    var ic = map(f, function (el) {
      return reduce(el, function (memo, val, c) {
        if (ignoredChars.indexOf(c) >= 0) return memo;

        if (useBackground) {
          val = val / b[c];
        }

        return memo - val * (Math.log(val) / Math.log(2));
      }, 0);
    });
    this._ic = ic;
    return ic;
  }; // sequence conservation after Schneider and Stephens (1990)
  // @cite Schneider, T.D. and Stephens, R.M. 1990. Sequence logos: A new way to
  // display consensus sequences. Nucleic Acids Res. 18: 6097–6100.


  stat.prototype.conservation = function conservation(alphabetSize) {
    var ic = this.ic();
    var gaps = this.gaps();
    var self = this;
    alphabetSize = alphabetSize || this.alphabetSize;
    var icMax = Math.log(alphabetSize) / Math.log(2);
    var i = 0;
    var conserv = map(ic, function (el) {
      var ret = icMax - el;

      if (self.useGaps) {
        ret = ret * (1 - gaps[i++]);
      }

      return ret;
    });
    return conserv;
  }; // sequence conservation after Schneider and Stephens (1990)
  // conservation for each amino acid
  // * gaps are excluded


  stat.prototype.conservResidue = function conservation(input) {
    var alphabetSize = input ? input.alphabetSize : undefined;
    var ic;
    var ignoredChars = this.ignoredChars;

    if (input !== undefined && input.scaled) {
      ic = this.scale(this.conservation(alphabetSize));
    } else {
      ic = this.conservation(alphabetSize);
    }

    var f = this.frequency();
    var keys$$1;
    var conserv = map(f, function (el, i) {
      keys$$1 = reject(keys$$1(el), function (c) {
        return ignoredChars.indexOf(c) >= 0;
      });
      var obj = {};
      forEach(keys$$1, function (key) {
        obj[key] = el[key] * ic[i];
      });
      return obj;
    });
    return conserv;
  }; // type 2 sequence logo method
  // scales relative to background


  stat.prototype.conservResidue2 = function conservation(alphabetSize) {
    var f = this.frequency();
    var ic = this.conservation(alphabetSize);
    var b = this.background();
    var conserv = map(f, function (el, i) {
      return map(el, function (val) {
        var sum$$1 = reduce(f[i], function (memo, e) {
          return memo + e / b[i];
        }, 0);
        return val / b[i] / sum$$1 * ic[i];
      }, 0);
    });
    return conserv;
  }; // scale information content or conservation to 1


  stat.prototype.scale = function conservation(ic, alphabetSize) {
    alphabetSize = alphabetSize || this.alphabetSize;
    var icMax = Math.log(alphabetSize) / Math.log(2);
    var conserv = map(ic, function (el) {
      return el / icMax;
    });
    return conserv;
  };

  stat.prototype.maxLengthCalc = function () {
    if (this.seqs.length === 0) {
      return 0;
    }

    return max(this.seqs, function (seq) {
      return seq.length;
    }).length;
  }; // seqs: array of sequences (strings)
  // @returns consenus sequence


  stat.prototype.consensusCalc = function consensusCal() {
    var occs = new Array(this.maxLength()); // count the occurrences of the chars of a position

    forEach(this.seqs, function (el) {
      forEach(el, function (c, pos) {
        if (occs[pos] === undefined) {
          occs[pos] = {};
        }

        if (occs[pos][c] === undefined) {
          occs[pos][c] = 0;
        }

        occs[pos][c]++;
      });
    }); // now pick the char with most occurrences

    this._consensus = reduce(occs, function (memo, occ) {
      var keys$$1;
      keys$$1 = Object.keys(occ);
      return memo += max(keys$$1, function (key) {
        return occ[key];
      });
    }, "");
    return this._consensus;
  }; // seqs: array of sequences (strings)
  // consensus: calculated consensus seq
  // calculates for each sequence
  // * matches with the consensus seq
  // * identity = matchedChars / totalChars (excluding gaps)
  // @returns: array of length of the seqs with the identity to the consensus (double)


  stat.prototype.identityCalc = function identitiyCalc(compareSeq) {
    var consensus = compareSeq || this.consensus();
    this._identity = this.seqs.map(function (seq) {
      var matches$$1 = 0;
      var total = 0;

      for (var i = 0; i < seq.length; i++) {
        if (seq[i] !== "-" && consensus[i] !== "-") {
          total++;

          if (seq[i] === consensus[i]) {
            matches$$1++;
          }
        }
      }

      return matches$$1 / total;
    });
    return this._identity;
  }; // percentage of gaps per column


  stat.prototype.gapsCalc = function gapsCount() {
    var mLength = this.maxLength();

    if (mLength <= 1 || typeof mLength === "undefined") {
      return [];
    }

    var occs = new Array(this.maxLength()); // count the occurrences of the chars of a position

    forEach(this.seqs, function (el) {
      forEach(el, function (c, pos) {
        if (occs[pos] === undefined) {
          occs[pos] = {
            g: 0,
            t: 0
          };
        }

        c = c === "-" ? "g" : "t";
        occs[pos][c]++;
      });
    }); // now pick the char with most occurrences

    this._gaps = map(occs, function (el) {
      return el.g / (el.g + el.t);
    });
    return this._gaps;
  };

  function _createBar(_ref) {
    var columnHeights = _ref.columnHeights,
        tileWidth = _ref.tileWidth,
        height = _ref.height,
        fillColor = _ref.fillColor,
        barStyle = _ref.barStyle,
        barAttributes = _ref.barAttributes;

    var Bar = /*#__PURE__*/function (_PureComponent) {
      _inherits(Bar, _PureComponent);

      var _super = _createSuper(Bar);

      function Bar() {
        _classCallCheck(this, Bar);

        return _super.apply(this, arguments);
      }

      _createClass(Bar, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              index = _this$props.index,
              otherProps = _objectWithoutProperties(_this$props, ["index"]);

          otherProps.style = {
            height: Math.round(columnHeights[index] * height),
            width: tileWidth,
            display: "inline-block",
            textAlign: "center",
            backgroundColor: fillColor
          };
          return /*#__PURE__*/React__default.createElement("div", otherProps);
        }
      }]);

      return Bar;
    }(React.PureComponent);

    return Bar;
  }
  /**
   * Creates a small overview box of the sequences for a general overview.
   */


  var HTMLOverviewBarComponent = /*#__PURE__*/function (_PureComponent2) {
    _inherits(HTMLOverviewBarComponent, _PureComponent2);

    var _super2 = _createSuper(HTMLOverviewBarComponent);

    function HTMLOverviewBarComponent(props) {
      var _this;

      _classCallCheck(this, HTMLOverviewBarComponent);

      _this = _super2.call(this, props);

      _this.cache = function () {};

      _this.initializeColumnHeights();

      autoBind(_assertThisInitialized(_this), 'createBar');
      _this.bar = shallowSelect(function (s) {
        return pick(s, _this.constructor.barAttributes);
      }, _this.columnHeights, _this.createBar);
      return _this;
    }

    _createClass(HTMLOverviewBarComponent, [{
      key: "createBar",
      value: function createBar(props, columnHeights) {
        this.cache = function () {};

        return _createBar(_objectSpread2(_objectSpread2({}, props), {}, {
          columnHeights
        }));
      }
      /**
       * Reduces the `props` object to column height by a `props.method`
       */

    }, {
      key: "initializeColumnHeights",
      value: function initializeColumnHeights() {
        this.columnHeights = createSelector(function (p) {
          return p.sequences;
        }, function (p) {
          return p.method;
        }, function (sequences, method$$1) {
          var stats = stat(sequences.map(function (e) {
            return e.sequence;
          }));
          var result;

          switch (method$$1) {
            case "conservation":
              result = stats.scale(stats.conservation());
              break;

            case "information-content":
              result = stats.scale(stats.ic());
              break;

            case "proteovision":
              var tempArr = [];
              var maxEntr = nPropertiesData.get("Shannon entropy")[1];
              var pvEntropy = vm.n_properties.get("Shannon entropy");
              pvEntropy.forEach(function (column) {
                tempArr.append((maxEntr - column.reduce(function (a, b) {
                  return a + b;
                }, 0)) / maxEntr);
              });
              result = tempArr;
              break;

            default:
              console.error(method$$1 + "is an invalid aggregation method for <OverviewBar />");
          }

          return result;
        }).bind(this);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            cacheElements = _this$props2.cacheElements,
            height = _this$props2.height,
            method$$1 = _this$props2.method,
            fillColor = _this$props2.fillColor,
            dispatch = _this$props2.dispatch,
            barStyle = _this$props2.barStyle,
            barAttributes = _this$props2.barAttributes,
            otherProps = _objectWithoutProperties(_this$props2, ["cacheElements", "height", "method", "fillColor", "dispatch", "barStyle", "barAttributes"]);

        return /*#__PURE__*/React__default.createElement(XBar, _extends({
          tileComponent: this.bar(this.props),
          cacheElements: cacheElements,
          componentCache: this.cache
        }, otherProps));
      }
    }]);

    return HTMLOverviewBarComponent;
  }(React.PureComponent);

  _defineProperty(HTMLOverviewBarComponent, "barAttributes", ["tileWidth", "height", "fillColor", "barStyle", "barAttributes"]);

  HTMLOverviewBarComponent.defaultProps = {
    height: 50,
    fillColor: "#999999",
    method: "conservation",
    cacheElements: 10
  };
  HTMLOverviewBarComponent.propTypes = {
    /**
     * Method to use for the OverviewBar:
     *  - `information-content`: Information entropy after Shannon of a column (scaled)
     *  - `conservation`: Conservation of a column (scaled)
     *  - `proteovision`: Conservation based on LDW @ GATECH calculations
     */
    method: PropTypes.oneOf(['information-content', 'conservation', 'proteovision']),

    /**
     * Height of the OverviewBar (in pixels), e.g. `100`
     */
    height: PropTypes.number,

    /**
     * Fill color of the OverviewBar, e.g. `#999999`
     */
    fillColor: PropTypes.string,

    /**
     * Inline styles to apply to the OverviewBar component
     */
    style: PropTypes.object,

    /**
     * Inline styles to apply to each bar.
     */
    barStyle: PropTypes.object,

    /**
     * Attributes to apply to each bar.
     */
    barAttributes: PropTypes.object
  };

  var mapStateToProps$2 = function mapStateToProps(state) {
    return {
      sequences: state.sequences.raw,
      maxLength: state.sequences.maxLength,
      width: state.props.width,
      tileWidth: state.props.tileWidth,
      nrXTiles: state.sequenceStats.nrXTiles
    };
  };

  var OverviewBar = msaConnect(mapStateToProps$2)(HTMLOverviewBarComponent); // for testing

  var Mouse = function Mouse() {
    _classCallCheck(this, Mouse);
  };

  _defineProperty(Mouse, "rel", function (e) {
    if (e.changedTouches !== undefined) //return Mouse.rel(e.changedTouches[e.targetTouches.length - 1]);
      return Mouse.rel(e.changedTouches[0]);
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;

    if (mouseX === undefined) {
      var target = e.target || e.srcElement;
      var rect = target.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      if (mouseX === undefined) {
        mouseX = e.pageX - target.offsetLeft;
        mouseY = e.pageY - target.offsetTop;

        if (mouseX === undefined) {
          return;
        }
      }
    }

    return [mouseX, mouseY];
  });

  _defineProperty(Mouse, "abs", function (e) {
    if (e.changedTouches !== undefined) //return Mouse.abs(e.changedTouches[e.targetTouches.length - 1]);
      return Mouse.abs(e.changedTouches[0]);
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    if (mouseX === undefined) {
      mouseX = e.layerX;
      mouseY = e.layerY;
    }

    if (mouseX === undefined) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    if (mouseX === undefined) {
      mouseX = e.x;
      mouseY = e.y;
    }

    return [mouseX, mouseY];
  });

  _defineProperty(Mouse, "wheelDelta", function (e) {
    var delta = [e.deltaX, e.deltaY];

    if (delta[0] === undefined) {
      // in case there is a more detailed scroll sensor - use it
      if (e.mozMovementX) {
        delta = [0, e.mozMovementX];
      }
    } // safety first


    if (isNaN(delta[0])) {
      delta[0] = 0;
    }

    if (isNaN(delta[1])) {
      delta[1] = 0;
    }

    return delta;
  });

  var IconBase = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
      value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(PropTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var PlotlyIconBase = function PlotlyIconBase(_ref) {
      var children = _ref.children,
          width = _ref.width,
          height = _ref.height,
          _ref$style = _ref.style,
          style = _ref$style === undefined ? {} : _ref$style,
          props = _objectWithoutProperties(_ref, ['children', 'width', 'height', 'style']);

      return _react2.default.createElement('svg', _extends({
          children: children,
          fill: 'currentColor',
          preserveAspectRatio: 'xMidYMid meet',
          height: height,
          width: width,
          style: style
      }, props));
  };

  PlotlyIconBase.propTypes = {
      children: _propTypes2.default.node.isRequired,
      width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
      height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
      style: _propTypes2.default.object
  };

  exports.default = PlotlyIconBase;
  });

  unwrapExports(IconBase);

  var AutoscaleIcon_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
      value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



  var _react2 = _interopRequireDefault(React__default);



  var _IconBase2 = _interopRequireDefault(IconBase);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var AutoscaleIcon = function AutoscaleIcon(props) {
      return _react2.default.createElement(
          _IconBase2.default,
          _extends({ viewBox: '0 0 16 16' }, props),
          _react2.default.createElement('path', { d: 'M4 0H0v4h1V1h3V0zm11 0h-3v1h3v3h1V0h-1zM1 15v-3H0v4h4v-1H1zm14-3v3h-3v1h4v-4h-1zm-2-3l-.008-.003L11.5 10.5 9 8l2.5-2.5L12.971 7H13V3H9v.03l1.5 1.47L8 7 5.5 4.5 7 3.03V3H3v4l1.5-1.5L7 8l-2.5 2.5L3 9v4h4l-1.5-1.5L8 9l2.5 2.5L9 13h4V9z' })
      );
  };

  exports.default = AutoscaleIcon;
  });

  var AutoscaleIcon = unwrapExports(AutoscaleIcon_1);

  var ZoomPlusIcon_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
      value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



  var _react2 = _interopRequireDefault(React__default);



  var _IconBase2 = _interopRequireDefault(IconBase);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var ZoomPlusIcon = function ZoomPlusIcon(props) {
      return _react2.default.createElement(
          _IconBase2.default,
          _extends({ viewBox: '0 0 16 16' }, props),
          _react2.default.createElement('path', { d: 'M.013 1.012V15h13.999V1.012H.013zm10.999 7.995H8.013v2.999h-2V9.007h-3V7.008h3V4.01h2v2.998h2.999v1.999z' })
      );
  };

  exports.default = ZoomPlusIcon;
  });

  var ZoomPlusIcon = unwrapExports(ZoomPlusIcon_1);

  var ZoomMinusIcon_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
      value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



  var _react2 = _interopRequireDefault(React__default);



  var _IconBase2 = _interopRequireDefault(IconBase);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var ZoomMinusIcon = function ZoomMinusIcon(props) {
      return _react2.default.createElement(
          _IconBase2.default,
          _extends({ viewBox: '0 0 16 16' }, props),
          _react2.default.createElement('path', { d: 'M.004 1v14h14V1h-14zM11 9H3V7h8v2z' })
      );
  };

  exports.default = ZoomMinusIcon;
  });

  var ZoomMinusIcon = unwrapExports(ZoomMinusIcon_1);

  function PlotlyIcon() {
    // TODO: Not part of plotly-icons
    return /*#__PURE__*/React__default.createElement("svg", {
      height: "1em",
      width: "1.542em",
      viewBox: "0 0 1542 1000"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "m0-10h182v-140h-182v140z m228 146h183v-286h-183v286z m225 714h182v-1000h-182v1000z m225-285h182v-715h-182v715z m225 142h183v-857h-183v857z m231-428h182v-429h-182v429z m225-291h183v-138h-183v138z",
      transform: "matrix(1 0 0 -1 0 850)",
      fill: "rgb(68, 122, 219)"
    }));
  } // TODO: show as soon as the mouse enters
  // TODO: transition effect
  // TODO: tooltips


  var ModBar = /*#__PURE__*/function (_PureComponent) {
    _inherits(ModBar, _PureComponent);

    var _super = _createSuper(ModBar);

    function ModBar() {
      _classCallCheck(this, ModBar);

      return _super.apply(this, arguments);
    }

    _createClass(ModBar, [{
      key: "render",
      value: function render() {
        var iconWidth = 20;
        var iconHeight = 20;

        var style = _objectSpread2({
          opacity: 0.9,
          backgroundColor: "white"
        }, this.props.style);

        var linkStyle = {
          position: "relative",
          fontSize: "16px",
          padding: "3px 4px",
          cursor: "pointer",
          lineHeight: "normal",
          textDecoration: "none",
          color: "black"
        }; // fill with rgba(0, 31, 95, 0.3);
        //
        //<a href="" style={linkStyle}>
        //<SaveIcon width={iconWidth} height={iconHeight} />
        //</a>

        return /*#__PURE__*/React__default.createElement("div", {
          style: style
        }, /*#__PURE__*/React__default.createElement("div", {
          style: linkStyle
        }, /*#__PURE__*/React__default.createElement(ZoomPlusIcon, {
          width: iconWidth,
          height: iconHeight
        })), /*#__PURE__*/React__default.createElement("div", {
          style: linkStyle
        }, /*#__PURE__*/React__default.createElement(ZoomMinusIcon, {
          width: iconWidth,
          height: iconHeight
        })), /*#__PURE__*/React__default.createElement("div", {
          style: linkStyle
        }, /*#__PURE__*/React__default.createElement(AutoscaleIcon, {
          width: iconWidth,
          height: iconHeight
        })), /*#__PURE__*/React__default.createElement("a", {
          href: "https://plot.ly/",
          target: "_blank",
          rel: "noreferrer noopener",
          "data-title": "Produced with Plotly",
          style: linkStyle
        }, /*#__PURE__*/React__default.createElement(PlotlyIcon, {
          width: iconWidth,
          height: iconHeight
        })));
      }
    }]);

    return ModBar;
  }(React.PureComponent);

  var updateMainStore = createAction("MAINSTORE_UPDATE"); // move the position relatively by {xMovement, yMovement}

  var movePosition = createAction("POSITION_MOVE"); // set an absolute position with {yPos, xPos}

  var updatePosition = createAction("POSITION_UPDATE"); //Handling highlights

  var highlightRegion = createAction("HIGHLIGHT_REGION");
  var removeHighlightRegion = createAction("REMOVE_HIGHLIGHT_REGION");
  var actions$1 = {
    updateMainStore,
    updatePosition,
    movePosition,
    highlightRegion: highlightRegion,
    removeHighlightRegion: removeHighlightRegion
  };
  /**
   * Makes sure that the position isn't set isn't out of its boundaries.
   */

  function commonPositionReducer(prevState, pos) {
    var maximum = prevState.sequences.maxLength;
    var maxWidth = maximum * prevState.props.tileWidth - prevState.props.width;
    pos.xPos = clamp(pos.xPos, 0, maxWidth);
    var maxHeight = prevState.sequences.raw.length * prevState.props.tileHeight - prevState.props.height;
    pos.yPos = clamp(pos.yPos, 0, maxHeight);
    return _objectSpread2(_objectSpread2({}, prevState), {}, {
      position: pos
    });
  }
  /**
   * Reducer for the {move,update}Position events
   */


  var relativePositionReducer = function relativePositionReducer() {
    var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      position: {
        xPos: 0,
        yPos: 0
      }
    };
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var pos = prevState.position;

    switch (action.type) {
      case movePosition.key:

        var movePayload = _objectSpread2({}, pos);

        movePayload.xPos += action.payload.xMovement || 0;
        movePayload.yPos += action.payload.yMovement || 0;
        return commonPositionReducer(prevState, movePayload);

      case updatePosition.key:
        var updatePayload = {
          xPos: action.payload.xPos || pos.xPos,
          yPos: action.payload.yPos || pos.yPos
        };
        return commonPositionReducer(prevState, updatePayload);

      default:
        return prevState;
    }
  };
  /**
   * The main position store reducer which adds "position" to
   * the reduced main store.
   */


  function positionReducer() {
    var oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      position: {
        xPos: 0,
        yPos: 0
      }
    };
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var state = oldState;
    var position = oldState.position;
    var highlight = oldState.highlight;

    switch (action.type) {
      case updateMainStore.key:
        // merge updates of the main store with this store for now
        state = _objectSpread2(_objectSpread2({}, pick(state, ["props", "sequenceStats", "sequences"])), action.payload);
        break;

      case updatePosition.key:
      case movePosition.key:
        position = relativePositionReducer(state, action).position;
        break;

      case highlightRegion.key:
        highlight = action.payload;
        break;

      case removeHighlightRegion.key:
        highlight = null;
        break;

      default:
        return state;
    }

    var addedState = {
      xPosOffset: -(position.xPos % state.props.tileWidth),
      yPosOffset: -(position.yPos % state.props.tileWidth),
      currentViewSequence: clamp(floor(position.yPos / state.props.tileHeight), 0, state.sequences.length - 1),
      currentViewSequencePosition: clamp(floor(position.xPos / state.props.tileWidth), 0, state.sequences.maxLength),
      position
    };
    return _objectSpread2(_objectSpread2(_objectSpread2({}, state), addedState), highlight);
  } // for future flexibility

  /**
  * Copyright 2018, Plotly, Inc.
  * All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */

  /**
   * Perform updates in a browser-requested animation frame.
   * If this is called multiple times before a new animation frame was provided,
   * the subsequent calls will be dropped.
   * Thus, make sure to use the current data in the callback
   * (it might have been updated once the callback fired)
   *
   * @param {Object} Class instance to bind the callback too
   * @param {Function} callback Function to be called in the animation frame
   */
  function requestAnimation(instance, callback) {
    if (instance.nextFrame === undefined) {
      instance.nextFrame = window.requestAnimationFrame(function () {
        callback();
        this.nextFrame = undefined;
      }.bind(instance));
    }
  }

  /**
   * Creates a DOM element with absolute position that can have scrollbars.
   * However, no actual content is displayed by this element.
   */

  var FakeScroll = /*#__PURE__*/function (_PureComponent) {
    _inherits(FakeScroll, _PureComponent);

    var _super = _createSuper(FakeScroll);

    function FakeScroll(props) {
      var _this;

      _classCallCheck(this, FakeScroll);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "onScroll", function (e) {
        requestAnimation(_assertThisInitialized(_this), function () {
          var movement = {
            xMovement: _this.el.current.scrollLeft - _this.props.position.xPos,
            yMovement: _this.el.current.scrollTop - _this.props.position.yPos
          };

          _this.props.positionDispatch(movePosition(movement));
        });
      });

      _defineProperty(_assertThisInitialized(_this), "updateScrollPosition", function () {
        if (!_this.el || !_this.el.current) return;
        _this.el.current.scrollTop = _this.props.position.yPos;
        _this.el.current.scrollLeft = _this.props.position.xPos;
      });

      _this.el = createRef$1();
      return _this;
    }

    _createClass(FakeScroll, [{
      key: "checkOverflow",
      value: function checkOverflow(overflow, _ref) {
        var _ref$withX = _ref.withX,
            withX = _ref$withX === void 0 ? false : _ref$withX,
            _ref$withY = _ref.withY,
            withY = _ref$withY === void 0 ? false : _ref$withY;
        var show = false;

        switch (this.props.overflow) {
          case "auto":
            if (withX) {
              show |= this.props.fullWidth > this.props.width;
            }

            if (withY) {
              show |= this.props.fullHeight > this.props.height;
            }

            break;

          case "hidden":
            show = false;
            break;

          case "scroll":
            show = true;
            break;

          default:
        }

        return show;
      }
    }, {
      key: "shouldShow",
      value: function shouldShow() {
        var withX = {
          withX: true
        };
        var withY = {
          withY: true
        };
        var overflowX = this.props.overflowX === "initial" ? this.props.overflow : this.props.overflowX;
        var overflowY = this.props.overflowY === "initial" ? this.props.overflow : this.props.overflowY;
        var showX = this.checkOverflow(overflowX, withX) && this.checkOverflow(this.props.overflow, withX);
        var showY = this.checkOverflow(overflowY, withY) && this.checkOverflow(this.props.overflow, withY);
        return {
          showX,
          showY
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            width = _this$props.width,
            height = _this$props.height,
            fullWidth = _this$props.fullWidth,
            fullHeight = _this$props.fullHeight;
        var style = {
          position: "absolute",
          overflowX: "auto",
          overflowY: "auto",
          width,
          height,
          transform: ""
        };

        var _this$shouldShow = this.shouldShow(),
            showX = _this$shouldShow.showX,
            showY = _this$shouldShow.showY;

        var childStyle = {
          height: 1,
          width: 1
        };

        if (!showY && !showX) {
          return /*#__PURE__*/React__default.createElement("div", null);
        }

        if (showX) {
          childStyle.width = fullWidth;
          style.overflowX = "scroll";

          if (this.props.positionX === "top") {
            style.transform += "rotateX(180deg)";
          }
        }

        if (showY) {
          childStyle.height = fullHeight;
          style.overflowY = "scroll";

          if (this.props.positionY === "left") {
            style.transform += "rotateY(180deg)";
          }
        }

        return /*#__PURE__*/React__default.createElement("div", {
          style: style,
          onScroll: this.onScroll,
          ref: this.el
        }, /*#__PURE__*/React__default.createElement("div", {
          style: childStyle
        }));
      }
    }]);

    return FakeScroll;
  }(React.PureComponent);

  FakeScroll.defaultProps = {
    overflow: "auto",
    overflowX: "initial",
    overflowY: "initial",
    positionX: "bottom",
    positionY: "right",
    scrollBarWidth: 5
  };
  FakeScroll.propTypes = {
    overflow: PropTypes.oneOf(["hidden", "auto", "scroll"]),
    overflowX: PropTypes.oneOf(["hidden", "auto", "scroll", "initial"]),
    overflowY: PropTypes.oneOf(["hidden", "auto", "scroll", "initial"]),
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    fullHeight: PropTypes.number.isRequired,
    fullWidth: PropTypes.number.isRequired,
    positionX: PropTypes.oneOf(["top", "bottom"]),
    positionY: PropTypes.oneOf(["left", "right"])
  };
  var FakeScroll$1 = withPositionConsumer(FakeScroll, {
    withX: true,
    withY: true
  });

  /**
  Provides dragging support in a canvas for sub-classes.
  Sub-classes are expected to implement:
  - drawScene
  - onPositionUpdate(oldPos, newPos)

  Moreover, a component's viewpoint needs to be passed in via its properties:

    <MyDraggingComponent width="200" height="300" />
  */
  // TODO: handle wheel events

  var DraggingComponent = /*#__PURE__*/function (_PureComponent) {
    _inherits(DraggingComponent, _PureComponent);

    var _super = _createSuper(DraggingComponent);

    /**
     * The internal state is kept in:
     *
     * this.mouseMovePosition = [x, y]; // relative to the canvas
     * this.touchMovePosition = [x, y]; // relative to the canvas
     *
     * If no movement is happening, inInDragPhase is undefined
     */
    function DraggingComponent(props) {
      var _this;

      _classCallCheck(this, DraggingComponent);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "state", {
        mouse: {
          isMouseWithin: false,
          cursorState: "grab"
        }
      });

      _defineProperty(_assertThisInitialized(_this), "currentContext", 1);

      _this.canvasBuffers = [createRef$1(), createRef$1()];
      _this.container = createRef$1(); // bind events (can't use static properties due to inheritance)

      autoBind(_assertThisInitialized(_this), "onMouseEnter", "onMouseLeave", "onMouseDown", "onMouseUp", "onMouseMove", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel", "onClick", "onDoubleClick", "draw");

      _this.onViewpointChange(); // Define internal variables for explicitness


      _this.mouseMovePosition = undefined;
      _this.touchMovePosition = undefined;
      _this.isInDragPhase = undefined;
      /**
       * Set by mouseMouse, reset after the drag phase
       * Used to check whether an `onClick` event comes from a drag phase.
       */

      _this.mouseHasMoved = undefined;
      return _this;
    }
    /**
     * Called on every movement to rerender the canvas.
     */


    _createClass(DraggingComponent, [{
      key: "drawScene",
      value: function drawScene() {
        console.warn("drawScene is unimplemented.");
      }
      /**
       * Called on every position update.
       */

    }, {
      key: "onPositionUpdate",
      value: function onPositionUpdate() {
        console.warn("onPositionUpdate is unimplemented.");
      }
      /**
        * Called every time when the component's dimensions change.
        */

    }, {
      key: "onViewpointChange",
      value: function onViewpointChange() {// no work is necessary anymore
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        // choose the best engine
        this.ctxBuffers = [this.canvasBuffers[0].current.getContext('2d', {
          alpha: 'false'
        }), this.canvasBuffers[1].current.getContext('2d', {
          alpha: 'false'
        })]; // init

        this.swapContexts();
        this.container.current.addEventListener('mouseenter', this.onMouseEnter);
        this.container.current.addEventListener('mouseleave', this.onMouseLeave);
        this.container.current.addEventListener('mousedown', this.onMouseDown);
        this.container.current.addEventListener('mouseup', this.onMouseUp);
        this.container.current.addEventListener('mousemove', this.onMouseMove);
        this.container.current.addEventListener('touchstart', this.onTouchStart);
        this.container.current.addEventListener('touchmove', this.onTouchMove);
        this.container.current.addEventListener('touchend', this.onTouchEnd);
        this.container.current.addEventListener('touchcancel', this.onTouchCancel);
        this.container.current.addEventListener('click', this.onClick);
        this.container.current.addEventListener('dblclick', this.onDoubleClick); // TODO: should we react do window resizes dynamically?
        //window.addEventListener('resize', this.onResize)
      }
      /**
       * We buffer the canvas to display and allow to be redrawn while not being visible.
       * Only after it has been drawn, the canvas element will be flipped to a visible state.
       * In other words, we have two canvas elements (1 visible, 1 hidden) and
       * a new `draw` happens on the hidden one. After a `draw` operation these canvas
       * elements are "swapped" by this method.
       *
       * This method swaps the visibility of the DOM nodes and sets `this.ctx`
       * to the hidden canvas.
       */

    }, {
      key: "swapContexts",
      value: function swapContexts() {
        var current = this.currentContext; // show the pre-rendered buffer

        this.canvasBuffers[current].current.style.visibility = "visible"; // and prepare the next one

        var next = (this.currentContext + 1) % 2;
        this.canvasBuffers[next].current.style.visibility = "hidden";
        this.currentContext = next;
        this.ctx = this.ctxBuffers[next];
      }
      /**
       * Starts a draw operation by essentially:
       * - clearing the current context (the hidden canvas)
       * - calling `drawScene` to render the current canvas
       * - swapping canvas contexts with `swapContexts`
       */

    }, {
      key: "draw",
      value: function draw() {
        if (!this.ctx) return;
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.onViewpointChange();
        this.drawScene();
        this.swapContexts();
      }
      /**
      // TODO: should we react do window resizes dynamically?
      onResize = (e) => {
      }
      */

      /**
       * To be implemented by its childs.
       */

    }, {
      key: "onClick",
      value: function onClick(e) {}
      /**
       * To be implemented by its childs.
       */

    }, {
      key: "onDoubleClick",
      value: function onDoubleClick(e) {}
    }, {
      key: "onMouseDown",
      value: function onMouseDown(e) {
        //console.log("mousedown", e);
        this.startDragPhase(e);
      }
    }, {
      key: "onMouseMove",
      value: function onMouseMove(e) {
        var _this2 = this;

        if (this.isInDragPhase === undefined) {
          return;
        }

        this.mouseHasMoved = true;
        var pos = Mouse.abs(e); // TODO: use global window out and not this container's out for better dragging
        //if (!this.isEventWithinComponent(e)) {
        //this.stopDragPhase();
        //return;
        //}

        var oldPos = this.mouseMovePosition;
        requestAnimation(this, function () {
          // already use the potentially updated mouse move position here
          _this2.mouseMovePosition = pos;

          _this2.onPositionUpdate(oldPos, _this2.mouseMovePosition);
        });
      }
    }, {
      key: "onMouseUp",
      value: function onMouseUp() {
        this.stopDragPhase();
      }
    }, {
      key: "onMouseEnter",
      value: function onMouseEnter() {
        this.setState(function (prevState) {
          return {
            mouse: _objectSpread2(_objectSpread2({}, prevState.mouse), {}, {
              isMouseWithin: true
            })
          };
        });
      }
    }, {
      key: "onMouseLeave",
      value: function onMouseLeave() {
        // TODO: use global window out and not this container's out for better dragging
        this.stopHoverPhase();
        this.stopDragPhase();
      }
    }, {
      key: "onTouchStart",
      value: function onTouchStart(e) {
        this.startDragPhase(e);
      }
    }, {
      key: "onTouchMove",
      value: function onTouchMove(e) {
        if (this.isInDragPhase === undefined) {
          return;
        } // TODO: can call mouse move with changedTouches[$-1], but it's reversed moving

        this.onMouseMove(e);
      }
    }, {
      key: "onTouchEnd",
      value: function onTouchEnd() {
        this.stopDragPhase();
      }
    }, {
      key: "onTouchCancel",
      value: function onTouchCancel() {
        this.stopDragPhase();
      }
      /**
       * Called at the start of a drag action.
       */

    }, {
      key: "startDragPhase",
      value: function startDragPhase(e) {
        this.mouseMovePosition = Mouse.abs(e);
        this.mouseHasMoved = undefined;
        this.isInDragPhase = true;
        this.setState(function (prevState) {
          return {
            mouse: _objectSpread2(_objectSpread2({}, prevState.mouse), {}, {
              cursorState: "grabbing"
            })
          };
        });
      }
      /**
       * Called whenever the mouse leaves the canvas area.
       */

    }, {
      key: "stopHoverPhase",
      value: function stopHoverPhase() {
        this.setState(function (prevState) {
          return {
            mouse: _objectSpread2(_objectSpread2({}, prevState.mouse), {}, {
              isMouseWithin: false
            })
          };
        });
      }
      /**
       * Called at the end of a drag action.
       */

    }, {
      key: "stopDragPhase",
      value: function stopDragPhase() {
        this.isInDragPhase = undefined;
        this.setState(function (prevState) {
          return {
            mouse: _objectSpread2(_objectSpread2({}, prevState.mouse), {}, {
              cursorState: "grab"
            })
          };
        });
      }
    }, {
      key: "isEventWithinComponent",
      value: function isEventWithinComponent(e) {
        // TODO: cache width + height for the rel call
        var relPos = Mouse.rel(e);
        return 0 <= relPos[0] && relPos[0] <= this.props.width && 0 <= relPos[1] && relPos[1] <= this.props.height;
      }
      /**
       * Unregisters all event listeners and stops the animations.
       */

    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        // TODO: should we react to resize events dynamically?
        //window.removeEventListener('resize', this.onResize);
        this.container.current.removeEventListener('mouseenter', this.onMouseEnter);
        this.container.current.removeEventListener('mouseleave', this.onMouseLeave);
        this.container.current.removeEventListener('mouseup', this.onMouseUp);
        this.container.current.removeEventListener('mousedown', this.onMouseDown);
        this.container.current.removeEventListener('mousemove', this.onMouseMove);
        this.container.current.removeEventListener('click', this.onClick);
        this.container.current.removeEventListener('dblclick', this.onDoubleClick);
        this.container.current.removeEventListener('touchstart', this.onTouchStart);
        this.container.current.removeEventListener('touchend', this.onTouchEnd);
        this.container.current.removeEventListener('touchcancel', this.onTouchCancel);
        this.container.current.removeEventListener('touchmove', this.onTouchMove);
        this.stopDragPhase();
      }
    }, {
      key: "render",
      value: function render() {
        // TODO: adapt to parent height/width
        var style = _objectSpread2(_objectSpread2({
          width: this.props.width,
          height: this.props.height
        }, this.props.style), {}, {
          cursor: this.state.mouse.cursorState,
          position: "relative"
        });

        var modBar = {
          position: "absolute",
          right: 0,
          opacity: 0.8
        };
        var showModBar = this.props.showModBar && this.state.mouse.isMouseWithin;
        var canvasStyle = {
          position: "absolute",
          left: 0,
          top: 0
        };
        var otherProps = omit(this.props, [].concat(_toConsumableArray(this.constructor.propKeys), ["tileWidth", "tileHeight", "colorScheme", "nrXTiles", "nrYTiles", "dispatch", "sequences", "fullWidth", "fullHeight", "position", "positionDispatch"]));
        return /*#__PURE__*/React__default.createElement("div", _extends({
          style: style,
          ref: this.container
        }, otherProps), showModBar && /*#__PURE__*/React__default.createElement(ModBar, {
          style: modBar
        }, " Plotly Modbar"), /*#__PURE__*/React__default.createElement("canvas", {
          style: canvasStyle,
          ref: this.canvasBuffers[0],
          width: this.props.width,
          height: this.props.height
        }, "Your browser does not seem to support HTML5 canvas."), /*#__PURE__*/React__default.createElement("canvas", {
          style: canvasStyle,
          ref: this.canvasBuffers[1],
          width: this.props.width,
          height: this.props.height
        }, "Your browser does not seem to support HTML5 canvas."), /*#__PURE__*/React__default.createElement(FakeScroll$1, {
          overflow: this.props.overflow,
          overflowX: this.props.overflowX,
          overflowY: this.props.overflowY,
          positionX: this.props.scrollBarPositionX,
          positionY: this.props.scrollBarPositionY,
          width: this.props.width,
          height: this.props.height,
          fullWidth: this.props.fullWidth,
          fullHeight: this.props.fullHeight
        }));
      }
    }]);

    return DraggingComponent;
  }(React.PureComponent);

  _defineProperty(DraggingComponent, "defaultProps", {
    engine: "canvas",
    showModBar: true
  });

  /**
  * Copyright 2018, Plotly, Inc.
  * All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
  // TODO: use more abstract, non-canvas-like API
  var DrawingBase = /*#__PURE__*/function () {
    function DrawingBase(el) {
      _classCallCheck(this, DrawingBase);

      this.el = el;
      this.state = {};
    }

    _createClass(DrawingBase, [{
      key: "updateEl",
      value: function updateEl(el) {
        this.el = el;
      } // props

    }, {
      key: "font",
      value: function font(fontName) {
        this.state.font = fontName;
      }
    }, {
      key: "globalAlpha",
      value: function globalAlpha(_globalAlpha) {
        this.state.globalAlpha = _globalAlpha;
      }
    }, {
      key: "startDrawingFrame",
      value: function startDrawingFrame() {
        this.clear();
      }
    }, {
      key: "endDrawingFrame",
      value: function endDrawingFrame() {}
    }, {
      key: "save",
      value: function save() {}
    }, {
      key: "restore",
      value: function restore() {}
    }]);

    return DrawingBase;
  }();

  /**
  * Copyright 2018, Plotly, Inc.
  * All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
  var CanvasCharCache = /*#__PURE__*/function () {
    function CanvasCharCache(g) {
      _classCallCheck(this, CanvasCharCache);

      this.cache = {};
      this.cacheHeight = 0;
      this.cacheWidth = 0;
    } // returns a cached canvas


    _createClass(CanvasCharCache, [{
      key: "getFontTile",
      value: function getFontTile(letter, width, height, font) {
        // validate cache
        if (width !== this.cacheWidth || height !== this.cacheHeight || font !== this.font) {
          this.updateDimensions(width, height);
          this.font = font;
        }

        if (this.cache[letter] === undefined) {
          this.createTile(letter, width, height);
        }

        return this.cache[letter];
      } // creates a canvas with a single letter
      // (for the fast font cache)

    }, {
      key: "createTile",
      value: function createTile(letter, width, height, font) {
        var canvas = this.cache[letter] = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        this.ctx = canvas.getContext('2d');
        this.ctx.font = this.font + "px mono";
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = "center";
        return this.ctx.fillText(letter, width / 2, height / 2, width, font);
      }
    }, {
      key: "updateDimensions",
      value: function updateDimensions(width, height) {
        this.invalidate();
        this.cacheWidth = width;
        this.cacheHeight = height;
      }
    }, {
      key: "invalidate",
      value: function invalidate() {
        // TODO: destroy the old canvas elements
        this.cache = {};
      }
    }]);

    return CanvasCharCache;
  }();

  var Canvas = /*#__PURE__*/function (_DrawingBase) {
    _inherits(Canvas, _DrawingBase);

    var _super = _createSuper(Canvas);

    function Canvas(el) {
      var _this;

      _classCallCheck(this, Canvas);

      _this = _super.call(this, el);
      _this.ctx = el.getContext('2d');
      _this.cache = new CanvasCharCache();
      return _this;
    }

    _createClass(Canvas, [{
      key: "clear",
      value: function clear() {
        // fastest way to clear the canvas
        // http://jsperf.com/canvas-clear-speed
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      }
    }, {
      key: "fillRect",
      value: function fillRect(x, y, width, height) {
        this.ctx.fillRect(x, y, width, height);
      } // TODO: rename as its effectively only one letter

    }, {
      key: "fillText",
      value: function fillText(text, x, y, width, height) {
        //this.ctx.fillText(text, x, y);
        return this.ctx.drawImage(this.cache.getFontTile(text, width, height, this.ctx.font), x, y, width, height);
      } // props

    }, {
      key: "font",
      value: function font(fontName) {
        this.ctx.font = fontName;
      }
    }, {
      key: "fillStyle",
      value: function fillStyle(_fillStyle) {
        this.ctx.fillStyle = _fillStyle;
      }
    }, {
      key: "globalAlpha",
      value: function globalAlpha(_globalAlpha) {
        this.ctx.globalAlpha = _globalAlpha;
      }
    }, {
      key: "save",
      value: function save() {
        this.ctx.save();
      }
    }, {
      key: "restore",
      value: function restore() {
        this.ctx.restore();
      }
    }]);

    return Canvas;
  }(DrawingBase);

  /**
   * Constructs a drawable canvas (e.g. HTML Canvas or WebGL) and provides it as
   * a reference.
   *
   * On every redraw, this.draw() gets called.
   */

  var CanvasComponent = /*#__PURE__*/function (_PureComponent) {
    _inherits(CanvasComponent, _PureComponent);

    var _super = _createSuper(CanvasComponent);

    function CanvasComponent(props) {
      var _this;

      _classCallCheck(this, CanvasComponent);

      _this = _super.call(this, props);
      _this.canvas = createRef$1();
      return _this;
    }

    _createClass(CanvasComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.ctx = new Canvas(this.canvas.current);
        this.draw();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this._draw();
      }
    }, {
      key: "_draw",
      value: function _draw() {
        if (!this.ctx) return;
        this.ctx.startDrawingFrame();
        this.ctx.save();
        this.draw();
        this.ctx.restore();
        this.ctx.endDrawingFrame();
      }
    }, {
      key: "draw",
      value: function draw() {
        console.error("Implement me.");
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React__default.createElement("div", {
          style: this.props.style
        }, /*#__PURE__*/React__default.createElement("canvas", {
          ref: this.canvas,
          width: this.props.width,
          height: this.props.height
        }));
      }
    }]);

    return CanvasComponent;
  }(React.PureComponent);

  _defineProperty(CanvasComponent, "defaultProps", {
    engine: "canvas"
  });

  CanvasComponent.propTypes = {
    /**
     * Width of the component (in pixels), e.g. `100`
     */
    width: PropTypes.number.isRequired,

    /**
     * Width of the component (in pixels), e.g. `100`
     */
    height: PropTypes.number.isRequired,

    /**
     * Custom style configuration.
     */
    style: PropTypes.object,

    /**
     * Rendering engine: `canvas` or `webgl` (experimental).
     */
    engine: PropTypes.oneOf(['canvas', 'webgl'])
  };

  /**
   * Allows rendering in tiles of grids.
   *
   * |---|---|---|
   * |-1-|-2-|-3-|
   * |---|---|---|
   * ―――――――――――――
   * |---|---|---|
   * |-4-|-5-|-6-|
   * |---|---|---|
   *
   * where 1..6 are TilingGrid component of xGridSize and yGridSize of 3.
   *
   * This split-up is required to avoid frequent repaints and keeps the React
   * Tree calculations slim.
   */

  var CanvasTilingGridComponent = /*#__PURE__*/function (_CanvasComponent) {
    _inherits(CanvasTilingGridComponent, _CanvasComponent);

    var _super = _createSuper(CanvasTilingGridComponent);

    function CanvasTilingGridComponent() {
      _classCallCheck(this, CanvasTilingGridComponent);

      return _super.apply(this, arguments);
    }

    _createClass(CanvasTilingGridComponent, [{
      key: "drawTile",
      value: function drawTile(_ref) {
        var _this = this;

        var row = _ref.row,
            column = _ref.column;
        var tileWidth = this.props.tileWidth;
        var tileHeight = this.props.tileHeight;
        var yPos = tileHeight * (row - this.props.startYTile);
        var xPos = tileWidth * (column - this.props.startXTile);
        if (row >= this.props.sequences.raw.length) return undefined;
        var sequence = this.props.sequences.raw[row].sequence;
        if (column >= sequence.length) return undefined;
        var text = sequence[column];

        if (text !== undefined) {
          var colorScheme = this.props.colorScheme.getColor(text);
          var key = "".concat(text, "-").concat(colorScheme);
          var canvasTile = this.props.residueTileCache.createTile({
            key,
            tileWidth,
            tileHeight,
            create: function create(_ref2) {
              var canvas = _ref2.canvas;
              return _this.drawResidue({
                text,
                canvas,
                row,
                column,
                colorScheme
              });
            }
          });
          this.props.ctx.drawImage(canvasTile, 0, 0, tileWidth, tileHeight, xPos, yPos, tileWidth, tileHeight);
        }
      }
    }, {
      key: "drawResidue",
      value: function drawResidue(_ref3) {
        var row = _ref3.row,
            column = _ref3.column,
            canvas = _ref3.canvas,
            colorScheme = _ref3.colorScheme,
            text = _ref3.text;
        canvas.globalAlpha = 0.7;
        canvas.fillStyle = colorScheme;
        canvas.fillRect(0, 0, this.props.tileWidth, this.props.tileHeight);

        if (this.props.border) {
          canvas.globalAlpha = 1;
          canvas.lineWidth = this.props.borderWidth;
          canvas.strokeStyle = this.props.borderStyle;
          canvas.strokeRect(0, 0, this.props.tileWidth, this.props.tileHeight);
        }

        canvas.globalAlpha = 1.0;
        canvas.fillStyle = this.props.textColor;
        canvas.font = this.props.textFont + "px mono";
        canvas.textBaseline = 'middle';
        canvas.textAlign = 'center';
        canvas.fillText(text, this.props.tileWidth / 2, this.props.tileHeight / 2 + 1, this.props.tileWidth);
      }
    }, {
      key: "draw",
      value: function draw(props) {
        this.props = props;

        for (var i = this.props.startYTile; i < this.props.endYTile; i++) {
          for (var j = this.props.startXTile; j < this.props.endXTile; j++) {
            this.drawTile({
              row: i,
              column: j
            });
          }
        }
      }
    }]);

    return CanvasTilingGridComponent;
  }(CanvasComponent);

  /**
   * A simple, in-memory cache for Canvas tiles outside of the DOM.
   * Gets automatically invalidated when called with different widths.
   * If `maxElements` are exceed, the oldest element (by insertion time) will be
   * removed from the cache.
   *
   * @param {Number} maxElements Maximal elements to keep in the cache (default: 200)
   */

  var CanvasCache = /*#__PURE__*/function () {
    function CanvasCache() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          maxElements = _ref.maxElements;

      _classCallCheck(this, CanvasCache);

      this.maxElements = maxElements || 200;
      this.invalidate();
    }
    /**
     * Creates a canvas element outside of the DOM that can be used for caching.
     * @param {string} key Unique cache key of the element
     * @param {Number} tileWidth Width of the to be created canvas
     * @param {Number} tileWidth Width of the to be created canvas
     * @param {function} create Callback to be called if for the given `key` to canvas exists in the cache
     */


    _createClass(CanvasCache, [{
      key: "createTile",
      value: function createTile(_ref2) {
        var _this = this;

        var key = _ref2.key,
            tileWidth = _ref2.tileWidth,
            tileHeight = _ref2.tileHeight,
            create$$1 = _ref2.create;

        // check if cache needs to be regenerated
        if (key in this.cache) {
          return this.cache[key].value;
        }

        if (this.cachedElements >= this.maxElements) {
          // purge oldest key from cache if maxSize is reached
          var oldestKey = minBy(Object.keys(this.cache), function (k) {
            return _this.cache[k].insertionTime;
          });
          delete this.cache[oldestKey];
        }

        var canvas = document.createElement("canvas");
        this.cache[key] = {
          value: canvas,
          insertionTime: Date.now()
        };
        canvas.width = tileWidth;
        canvas.height = tileHeight;
        var ctx = canvas.getContext('2d');
        this.cachedElements++;
        create$$1({
          canvas: ctx
        });
        return canvas;
      }
      /**
       * Checks whether the tile specification has changed and the cache needs
       * to be refreshed.
       * Pass in an object of all the properties that would result in the cache to be refreshed
       * Like React.PureComponents the passed-in properties are compared by their
       * shallow equality.
       *
       * @param {object} spec Object of all parameters that depend on this cache
       * Returns: `true` when the cache has been invalidated
       */

    }, {
      key: "updateTileSpecs",
      value: function updateTileSpecs(spec) {
        if (!shallowEqual$1(spec, this.spec)) {
          this.invalidate();
          this.spec = spec;
          return true;
        }

        return false;
      }
      /**
       * Invalidates the entire cache and removed all elements.
       */

    }, {
      key: "invalidate",
      value: function invalidate() {
        this.cache = {};
        this.spec = {};
        this.cachedElements = 0;
      }
    }]);

    return CanvasCache;
  }();

  /**
  * Copyright 2018, Plotly, Inc.
  * All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */

  /**
   * @param {Number} number
   * @param {Number} mod
   * @returns {Number} number - number % mod (the number rounded by its modulo
   *
   * Example:
   *
   * 25 % 5 = 25
   * 26 % 5 = 25
   * 31 % 5 = 30
   */
  function roundMod(number, mod) {
    return number - number % mod;
  }

  /**
   * Component to draw the main sequence alignment.
   */

  var SequenceViewerComponent = /*#__PURE__*/function (_DraggingComponent) {
    _inherits(SequenceViewerComponent, _DraggingComponent);

    var _super = _createSuper(SequenceViewerComponent);

    function SequenceViewerComponent(props) {
      var _thisSuper, _thisSuper2, _thisSuper3, _thisSuper4, _this;

      _classCallCheck(this, SequenceViewerComponent);

      _this = _super.call(this, props); // cache fully drawn tiles

      _defineProperty(_assertThisInitialized(_this), "renderTile", function (_ref) {
        var row = _ref.row,
            column = _ref.column;
        var key = row + "-" + column;
        return _this.tileCache.createTile({
          key: key,
          tileWidth: _this.props.tileWidth * _this.props.xGridSize,
          tileHeight: _this.props.tileHeight * _this.props.yGridSize,
          create: function create$$1(_ref2) {
            var canvas = _ref2.canvas;

            _this.tilingGridManager.draw(_objectSpread2({
              ctx: canvas,
              startYTile: row,
              startXTile: column,
              residueTileCache: _this.residueTileCache,
              endYTile: row + _this.props.yGridSize,
              endXTile: column + _this.props.xGridSize
            }, pick(_this.props, ["sequences", "colorScheme", "textFont", "textColor", "tileHeight", "tileWidth", "border", "borderWidth", "borderColor"])));
          }
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onPositionUpdate", function (oldPos, newPos) {
        var relativeMovement = {
          xMovement: oldPos[0] - newPos[0],
          yMovement: oldPos[1] - newPos[1]
        };

        _this.props.positionDispatch(movePosition(relativeMovement));
      });

      _defineProperty(_assertThisInitialized(_this), "updateScrollPosition", function () {
        _this.draw();
      });

      _defineProperty(_assertThisInitialized(_this), "onMouseMove", function (e) {
        if (typeof _this.isInDragPhase === "undefined") {
          if (_this.props.onResidueMouseEnter !== undefined || _this.props.onResidueMouseLeave !== undefined) {
            var eventData = _this.currentPointerPosition(e);

            var lastValue = _this.currentMouseSequencePosition;

            if (!isEqual(lastValue, eventData)) {
              if (lastValue !== undefined) {
                _this.sendEvent('onResidueMouseLeave', lastValue);
              }

              _this.currentMouseSequencePosition = eventData;

              _this.sendEvent('onResidueMouseEnter', eventData);
            }
          }
        }

        _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(SequenceViewerComponent.prototype)), "onMouseMove", _thisSuper).call(_thisSuper, e);
      });

      _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function (e) {
        _this.sendEvent('onResidueMouseLeave', _this.currentMouseSequencePosition);

        _this.currentMouseSequencePosition = undefined;

        _get((_thisSuper2 = _assertThisInitialized(_this), _getPrototypeOf(SequenceViewerComponent.prototype)), "onMouseLeave", _thisSuper2).call(_thisSuper2, e);
      });

      _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
        if (!_this.mouseHasMoved) {
          var eventData = _this.currentPointerPosition(e);

          _this.sendEvent('onResidueClick', eventData);
        }

        _get((_thisSuper3 = _assertThisInitialized(_this), _getPrototypeOf(SequenceViewerComponent.prototype)), "onClick", _thisSuper3).call(_thisSuper3, e);
      });

      _defineProperty(_assertThisInitialized(_this), "onDoubleClick", function (e) {
        var eventData = _this.currentPointerPosition(e);

        _this.sendEvent('onResidueDoubleClick', eventData);

        _get((_thisSuper4 = _assertThisInitialized(_this), _getPrototypeOf(SequenceViewerComponent.prototype)), "onDoubleClick", _thisSuper4).call(_thisSuper4, e);
      });

      _this.tileCache = new CanvasCache(); // cache individual residue cells

      _this.residueTileCache = new CanvasCache(); // the manager which is in charge of drawing residues

      _this.tilingGridManager = new CanvasTilingGridComponent();
      return _this;
    } // starts the drawing process


    _createClass(SequenceViewerComponent, [{
      key: "drawScene",
      value: function drawScene() {
        var positions = this.getTilePositions();
        this.updateTileSpecs();

        this.drawTiles(positions);
        this.drawHighlightedRegions();
      } // figures out from where to start drawing

    }, {
      key: "getTilePositions",
      value: function getTilePositions() {
        var startXTile = Math.max(0, this.props.position.currentViewSequencePosition - this.props.cacheElements);
        var startYTile = Math.max(0, this.props.position.currentViewSequence - this.props.cacheElements);
        var endYTile = Math.min(this.props.sequences.length, startYTile + this.props.nrYTiles + 2 * this.props.cacheElements);
        var endXTile = Math.min(this.props.sequences.maxLength, startXTile + this.props.nrXTiles + 2 * this.props.cacheElements);
        return {
          startXTile,
          startYTile,
          endXTile,
          endYTile
        };
      }
    }, {
      key: "drawTiles",
      value: function drawTiles(_ref3) {
        var startXTile = _ref3.startXTile,
            startYTile = _ref3.startYTile,
            endXTile = _ref3.endXTile,
            endYTile = _ref3.endYTile;
        var xGridSize = this.props.xGridSize;
        var yGridSize = this.props.yGridSize;
        var startY = roundMod(startYTile, yGridSize);
        var startX = roundMod(startXTile, xGridSize);

        for (var i = startY; i < endYTile; i = i + yGridSize) {
          for (var j = startX; j < endXTile; j = j + xGridSize) {
            var canvas = this.renderTile({
              row: i,
              column: j,
              canvas: this.ctx
            });
            var width = xGridSize * this.props.tileWidth;
            var height = yGridSize * this.props.tileHeight;
            var yPos = (i - this.props.position.currentViewSequence) * this.props.tileHeight + this.props.position.yPosOffset;
            var xPos = (j - this.props.position.currentViewSequencePosition) * this.props.tileWidth + this.props.position.xPosOffset;
            this.ctx.drawImage(canvas, 0, 0, width, height, xPos, yPos, width, height);
          }
        }
      }
    }, {
      key: "positionToSequence",
      value: function positionToSequence(pos) {
        var sequences = this.props.sequences.raw;
        var seqNr = clamp(floor((this.props.position.yPos + pos.yPos) / this.props.tileHeight), 0, sequences.length - 1);
        var sequence = sequences[seqNr];
        var position = clamp(floor((this.props.position.xPos + pos.xPos) / this.props.tileWidth), 0, sequence.sequence.length - 1);
        return {
          i: seqNr,
          sequence,
          position,
          residue: sequence.sequence[position]
        };
      }
    }, {
      key: "currentPointerPosition",

      /**
       * Returns the position of the mouse position relative to the sequences
       */
      value: function currentPointerPosition(e) {
        var _Mouse$rel = Mouse.rel(e),
            _Mouse$rel2 = _slicedToArray(_Mouse$rel, 2),
            x = _Mouse$rel2[0],
            y = _Mouse$rel2[1];

        return this.positionToSequence({
          xPos: x,
          yPos: y
        });
      }
      /**
       * Only sends an event if the actual function is set.
       */

    }, {
      key: "sendEvent",
      value: function sendEvent(name, data) {
        if (this.props[name] !== undefined) {
          this.props[name](data);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.tileCache.invalidate();
        this.residueTileCache.invalidate();
      }
    }, {
      key: "updateTileSpecs",
      value: function updateTileSpecs() {
        var tileAttributes = ['tileWidth', 'tileHeight', 'colorScheme', 'textFont', 'borderColor'];
        this.tileCache.updateTileSpecs(pick(this.props, [].concat(tileAttributes, ['xGridSize', 'yGridSize', 'sequences'])));
        this.residueTileCache.updateTileSpecs(pick(this.props, tileAttributes));
      }
    }, {
      key: "drawHighlightedRegions",
      value: function drawHighlightedRegions() {
        var _this2 = this;

        if (this.props.highlight) if (Array.isArray(this.props.highlight)) {
          var _step,
              _iterator = function _createForOfIteratorHelper$$1(o) {
            if ("undefined" == typeof Symbol || null == o[Symbol.iterator]) {
              if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
                var i = 0,
                    F = function F() {};

                return {
                  s: F,
                  n: function n() {
                    return i >= o.length ? {
                      done: !0
                    } : {
                      done: !1,
                      value: o[i++]
                    };
                  },
                  e: function e(_e2) {
                    throw _e2;
                  },
                  f: F
                };
              }

              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }

            var it,
                err,
                normalCompletion = !0,
                didErr = !1;
            return {
              s: function s() {
                it = o[Symbol.iterator]();
              },
              n: function n() {
                var step = it.next();
                return normalCompletion = step.done, step;
              },
              e: function e(_e3) {
                didErr = !0, err = _e3;
              },
              f: function f() {
                try {
                  normalCompletion || null == it.return || it.return();
                } finally {
                  if (didErr) throw err;
                }
              }
            };
          }(this.props.highlight);

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var h = _step.value;
              this.drawHighligtedRegion(h);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else this.drawHighligtedRegion(this.props.highlight);
        this.props.features && this.props.features.forEach(function (feature) {
          _this2.drawHighligtedRegion(feature);
        });
      }
    }, {
      key: "drawHighligtedRegion",
      value: function drawHighligtedRegion(region) {
        var _this$mouseOverFeatur;

        if (!this.ctx || !region) return;
        var regionWidth = this.props.tileWidth * (1 + region.residues.to - region.residues.from),
            regionHeight = this.props.tileHeight * (1 + region.sequences.to - region.sequences.from),
            yPosFrom = (region.sequences.from - this.props.position.currentViewSequence) * this.props.tileHeight + this.props.position.yPosOffset,
            xPosFrom = (region.residues.from - 1 - this.props.position.currentViewSequencePosition) * this.props.tileWidth + this.props.position.xPosOffset,
            canvas = document.createElement("canvas");
        canvas.width = regionWidth, canvas.height = regionHeight;
        var ctx = canvas.getContext("2d"),
            mouseOver = null === (_this$mouseOverFeatur = this.mouseOverFeatureIds) || void 0 === _this$mouseOverFeatur ? void 0 : _this$mouseOverFeatur.some(function (id) {
          return id === region.id;
        });
        ctx.globalAlpha = .3, ctx.fillStyle = mouseOver ? region.mouseOverFillColor || "green" : region.fillColor || "#9999FF", ctx.fillRect(0, 0, regionWidth, regionHeight), ctx.globalAlpha = 1, ctx.strokeStyle = mouseOver ? region.mouseOverBorderColor || "black " : region.borderColor || "777700", ctx.lineWidth = "4", ctx.rect(0, 0, regionWidth, regionHeight), ctx.stroke(), this.ctx.drawImage(canvas, 0, 0, regionWidth, regionHeight, xPosFrom, yPosFrom, regionWidth, regionHeight);
      }
    }, {
      key: "render",
      value: function render() {
        return _get(_getPrototypeOf(SequenceViewerComponent.prototype), "render", this).call(this);
      }
    }]);

    return SequenceViewerComponent;
  }(DraggingComponent);

  SequenceViewerComponent.defaultProps = {
    showModBar: false,
    xGridSize: 10,
    yGridSize: 10,
    border: false,
    borderColor: "black",
    borderWidth: 1,
    cacheElements: 20,
    textColor: "black",
    textFont: "18px Arial",
    overflow: "hidden",
    overflowX: "auto",
    overflowY: "auto",
    scrollBarPositionX: "bottom",
    scrollBarPositionY: "right"
  };
  SequenceViewerComponent.propTypes = {
    /**
     * Show the custom ModBar
     */
    showModBar: PropTypes.bool,

    /**
     * Callback fired when the mouse pointer is entering a residue.
     */
    onResidueMouseEnter: PropTypes.func,

    /**
     * Callback fired when the mouse pointer is leaving a residue.
     */
    onResidueMouseLeave: PropTypes.func,

    /**
     * Callback fired when the mouse pointer clicked a residue.
     */
    onResidueClick: PropTypes.func,

    /**
     * Callback fired when the mouse pointer clicked a residue.
     */
    onResidueDoubleClick: PropTypes.func,

    /**
     * Number of residues to cluster in one tile (x-axis) (default: 10)
     */
    xGridSize: PropTypes.number.isRequired,

    /**
     * Number of residues to cluster in one tile (y-axis) (default: 10)
     */
    yGridSize: PropTypes.number.isRequired,

    /**
     * Number of residues to prerender outside of the visible viewbox.
     */
    cacheElements: PropTypes.number.isRequired,

    /**
     * Whether to draw a border.
     */
    border: PropTypes.bool,

    /**
     * Color of the border. Name, hex or RGB value.
     */
    borderColor: PropTypes.string,

    /**
     * Width of the border.
     */
    borderWidth: PropTypes.number,

    /**
     * Color of the text residue letters (name, hex or RGB value)
     */
    textColor: PropTypes.string,

    /**
     * Font to use when drawing the individual residues.
     */
    textFont: PropTypes.string,

    /**
     * What should happen if content overflows.
     */
    overflow: PropTypes.oneOf(["hidden", "auto", "scroll"]),

    /**
     * What should happen if x-axis content overflows (overwrites "overflow")
     */
    overflowX: PropTypes.oneOf(["hidden", "auto", "scroll", "initial"]),

    /**
     * What should happen if y-axis content overflows (overwrites "overflow")
     */
    overflowY: PropTypes.oneOf(["hidden", "auto", "scroll", "initial"]),

    /**
     * X Position of the scroll bar ("top or "bottom")
     */
    scrollBarPositionX: PropTypes.oneOf(["top", "bottom"]),

    /**
     * Y Position of the scroll bar ("left" or "right")
     */
    scrollBarPositionY: PropTypes.oneOf(["left", "right"]),
    //Highlight
    highlight: PropTypes.oneOfType([Object, Array]) //??????

  }; // hoist the list of accepted properties to the parent
  // eslint-disable-next-line react/forbid-foreign-prop-types

  SequenceViewerComponent.propKeys = Object.keys(SequenceViewerComponent.propTypes);

  var mapStateToProps$3 = function mapStateToProps(state) {
    // Fallback to a smaller size if the given area is too large
    var width = Math.min(state.props.width, state.sequences.maxLength * state.props.tileWidth);
    var height = Math.min(state.props.height, state.sequences.length * state.props.tileHeight);
    return {
      sequences: state.sequences,
      width,
      height,
      highlight: state.props.highlight,
      tileWidth: state.props.tileWidth,
      tileHeight: state.props.tileHeight,
      colorScheme: state.props.colorScheme,
      nrXTiles: state.sequenceStats.nrXTiles,
      nrYTiles: state.sequenceStats.nrYTiles,
      fullWidth: state.sequenceStats.fullWidth,
      fullHeight: state.sequenceStats.fullHeight
    };
  };

  var SV = withPositionConsumer(SequenceViewerComponent, {
    withX: true,
    withY: true
  });
  var SequenceViewer = msaConnect(mapStateToProps$3)(SV);

  var SequenceOverviewComponent = /*#__PURE__*/function (_CanvasComponent) {
    _inherits(SequenceOverviewComponent, _CanvasComponent);

    var _super = _createSuper(SequenceOverviewComponent);

    function SequenceOverviewComponent() {
      var _this;

      _classCallCheck(this, SequenceOverviewComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "draw", function () {
        // TODO: only update this if required
        _this.drawScene();
      });

      return _this;
    }

    _createClass(SequenceOverviewComponent, [{
      key: "updateScrollPosition",
      value: function updateScrollPosition() {
        this._draw();
      }
    }, {
      key: "drawScene",
      value: function drawScene() {
        this.scene = {};
        var _this$position = this.position;
        this.scene.xViewPos = _this$position.xPos;
        this.scene.yViewPos = _this$position.yPos;
        this.scene.xScalingFactor = 1 / this.props.globalTileWidth * this.props.tileWidth;
        this.scene.yScalingFactor = 1 / this.props.globalTileHeight * this.props.tileHeight;
        this.drawCurrentViewpoint();
        this.drawSequences();
      }
    }, {
      key: "drawSequences",
      value: function drawSequences() {
        var _this$scene = this.scene,
            xViewPos = _this$scene.xViewPos,
            xScalingFactor = _this$scene.xScalingFactor;
        var sequences = this.props.sequences.raw;
        var xInitPos = 0; //let yPos = -(yViewPos % tileHeight);
        // TODO: move into the reducer
        //let i = clamp(floor(yViewPos / tileHeight), 0, sequences.length - 1);

        var yPos = 0;
        var i = 0; // sequences themselves

        for (; i < sequences.length; i++) {
          var sequence = sequences[i].sequence;
          var xPos = xInitPos;
          var j = clamp(floor(xViewPos * xScalingFactor), 0, sequence.length - 1);
          j = 0;

          for (; j < sequence.length; j++) {
            var el = sequence[j];
            this.ctx.fillStyle(this.props.colorScheme.getColor(el));
            this.ctx.globalAlpha(0.5);
            this.ctx.fillRect(xPos, yPos, this.props.tileWidth, this.props.tileHeight);
            xPos += this.props.tileWidth;
            if (xPos > this.props.globalWidth) break;
          }

          yPos += this.props.tileHeight;
          if (yPos > this.props.height) break;
        }
      }
    }, {
      key: "drawCurrentViewpoint",
      value: function drawCurrentViewpoint() {
        // currently selected area
        var _this$scene2 = this.scene,
            xViewPos = _this$scene2.xViewPos,
            xScalingFactor = _this$scene2.xScalingFactor,
            yViewPos = _this$scene2.yViewPos,
            yScalingFactor = _this$scene2.yScalingFactor;
        this.ctx.globalAlpha(0.8);
        this.ctx.fillRect(xViewPos * xScalingFactor, yViewPos * yScalingFactor, this.props.globalWidth * xScalingFactor, this.props.globalHeight * yScalingFactor);
      } // to make react-docgen happy

    }, {
      key: "render",
      value: function render() {
        return _get(_getPrototypeOf(SequenceOverviewComponent.prototype), "render", this).call(this);
      }
    }]);

    return SequenceOverviewComponent;
  }(CanvasComponent);

  SequenceOverviewComponent.defaultProps = _objectSpread2(_objectSpread2({}, CanvasComponent.defaultProps), {}, {
    height: 50,
    tileWidth: 5,
    tileHeight: 5
  });
  SequenceOverviewComponent.propTypes = _objectSpread2(_objectSpread2({}, CanvasComponent.propTypes), {}, {
    /**
     * Height of the SequenceOverview (in pixels), e.g. `50`
     */
    height: PropTypes.number,

    /**
     * Width of a tile in the OverviewBar, e.g. `5`
     */
    tileWidth: PropTypes.number,

    /**
     * Height of a tile in the OverviewBar, e.g. `5`
     */
    tileHeight: PropTypes.number
  });
  var SOC = withPositionConsumer(SequenceOverviewComponent);

  var mapStateToProps$4 = function mapStateToProps(state) {
    return {
      sequences: state.sequences,
      width: state.props.width,
      globalWidth: state.props.width,
      globalHeight: state.props.height,
      globalTileWidth: state.props.tileWidth,
      globalTileHeight: state.props.tileHeight,
      colorScheme: state.props.colorScheme
    };
  };

  var SequenceOverview = msaConnect(mapStateToProps$4)(SOC);

  /**
  * Copyright 2018, Plotly, Inc.
  * All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */

  var reduxActions = {
    "sequences": "updateSequences"
  };
  Object.keys(MSAPropTypes).forEach(function (key) {
    if (!(key in reduxActions) && MSAPropTypes[key] !== PropTypes.func) {
      reduxActions[key] = 'updateProp';
    }
  });
  var attributesToStore = Object.keys(reduxActions); // precompute [action.key]: action for performance

  var mapToActionKeys = function mapToActionKeys(obj) {
    return reduce(obj, function (acc, v, k) {
      acc[v.key] = v;
      return acc;
    }, {});
  };

  var mainStoreActionKeys = mapToActionKeys(actions);
  var positionStoreActionKeys = mapToActionKeys(actions$1);
  var PropsToRedux = function PropsToRedux(WrappedComponent) {
    var PropsToReduxComponent = /*#__PURE__*/function (_Component) {
      _inherits(PropsToReduxComponent, _Component);

      var _super = _createSuper(PropsToReduxComponent);

      function PropsToReduxComponent(props) {
        var _this;

        _classCallCheck(this, PropsToReduxComponent);

        _this = _super.call(this, props);
        var storeProps = pick(props, attributesToStore) || {};
        _this.el = createRef$1();
        _this.msaStore = props.msaStore;

        if (storeProps.sequences !== undefined) {
          _this.msaStore = createMSAStore(storeProps);
        } else {
          console.warn("Check your MSA properties", storeProps);
        }

        return _this;
      }

      _createClass(PropsToReduxComponent, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (this.props.position !== undefined) {
            this.updatePosition(this.props.position);
          }
        } // Notify the internal Redux store about property updates

      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(oldProps) {
          var newProps = this.props; // TODO: support batch updates

          for (var prop in pick(newProps, attributesToStore)) {
            if (!isEqual(oldProps[prop], newProps[prop])) {
              if (prop === "position") {
                this.updatePosition(newProps[prop]);
              } else if (prop in reduxActions) {
                var action = void 0;

                switch (reduxActions[prop]) {
                  case 'updateProp':
                    action = actions[reduxActions[prop]](prop, newProps[prop]);
                    break;

                  default:
                    action = actions[reduxActions[prop]](newProps[prop]);
                } //console.log("Prop -> Redux: ", action, newProps[prop]);


                this.msaStore.dispatch(action);
              } else {
                console.error(prop, " is unknown.");
              }
            }
          }
        }
        /**
         * Dispatch actions into the MSAViewer component.
         *
         * @param {Object} Action to be be dispatched. Must contain "type" and "payload"
         */

      }, {
        key: "dispatch",
        value: function dispatch(action) {
          if (action.type in mainStoreActionKeys) {
            this.msaStore.dispatch(action);
          } else if (action.type in positionStoreActionKeys) {
            this.el.current.positionStore.dispatch(action);
          } else {
            throw new Error("Invalid action", action);
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _omit = omit(this.props, attributesToStore),
              msaStore = _omit.msaStore,
              props = _objectWithoutProperties(_omit, ["msaStore"]);

          if (this.msaStore === undefined) {
            return /*#__PURE__*/React__default.createElement("div", null, " Error initializing the MSAViewer. ");
          } else {
            return /*#__PURE__*/React__default.createElement(WrappedComponent, _extends({
              ref: this.el,
              msaStore: msaStore || this.msaStore
            }, props));
          }
        }
      }]);

      return PropsToReduxComponent;
    }(React.Component); // add action from the main store directly to the main MSA instance


    forOwn(actions, function (v, k) {
      PropsToReduxComponent.prototype[k] = function (payload) {
        this.msaStore.dispatch(v(payload));
      };
    }); // add action from the position store directly to the main MSA instance

    forOwn(actions$1, function (v, k) {
      PropsToReduxComponent.prototype[k] = function (payload) {
        var _this2 = this;

        requestAnimation(this, function () {
          _this2.el.current.positionStore.dispatch(v(payload));
        });
      };
    });
    return PropsToReduxComponent;
  };

  var same = "FORWARD_SAME_PROP_NAME"; // list of events with a default implementation
  // mapping: eventName -> DOM event name

  var defaultEvents = {
    "onResidueClick": "residueClick"
  };
  /**
   * A general-purpose layout for the MSA components
   *
   * When children are passed it acts as a Context Provider for the msaStore,
   * otherwise it provides a default layout and forwards it props the respective
   * components.
   */

  var MSAViewerComponent = /*#__PURE__*/function (_Component) {
    _inherits(MSAViewerComponent, _Component);

    var _super = _createSuper(MSAViewerComponent);

    function MSAViewerComponent(props) {
      var _this;

      _classCallCheck(this, MSAViewerComponent);

      _this = _super.call(this, props);
      _this.el = createRef$1(); // add default event callback

      forOwn(defaultEvents, function (domEventName, eventName) {
        _this["_" + eventName] = function (e) {
          var event = new CustomEvent(domEventName, {
            detail: e,
            bubbles: true
          });

          _this.el.current.dispatchEvent(event);
        };
      });

      _this._setupStores();

      return _this;
    } // List of props forwarded to the SequenceViewer component


    _createClass(MSAViewerComponent, [{
      key: "forwardProps",
      value: function forwardProps(propsToBeForwarded) {
        var _this2 = this;

        var options = {};
        forOwn(propsToBeForwarded, function (forwardedName, currentName) {
          if (_this2.props[currentName] !== undefined) {
            var name = forwardedName === same ? currentName : forwardedName;
            options[name] = _this2.props[currentName];
          } else if (currentName in defaultEvents) {
            // inject default event handler
            options[currentName] = _this2["_" + currentName];
          }
        });
        return options;
      }
    }, {
      key: "_setupStores",
      value: function _setupStores() {
        var _this3 = this;

        this.positionStore = createStore(positionReducer);
        this.positionStore.dispatch(actions$1.updateMainStore(this.props.msaStore.getState()));
        this.msaStoreUnsubscribe = this.props.msaStore.subscribe(function () {
          // forward the msaStore to the positionStore for convenience
          _this3.positionStore.dispatch(actions$1.updateMainStore(_this3.props.msaStore.getState()));
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.msaStoreUnsubscribe();
      } // TODO: we could inject this in the main redux store for better compatibility

    }, {
      key: "getChildContext",
      value: function getChildContext() {
        return {
          positionMSAStore: this.positionStore
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            msaStore = _this$props.msaStore,
            otherProps = _objectWithoutProperties(_this$props, ["children", "msaStore"]);

        if (children) {
          return /*#__PURE__*/React__default.createElement(MSAProvider, {
            store: msaStore
          }, /*#__PURE__*/React__default.createElement("div", _extends({}, otherProps, {
            ref: this.el
          }), children));
        } else {
          // TODO: add more advanced layouts
          var currentState = msaStore.getState();
          var labelsPadding = currentState.props.tileHeight;
          var overviewBarHeight = 50;
          var labelsAndSequenceDiv = {
            display: "flex"
          };
          var labelsStyle = {
            paddingTop: labelsPadding + overviewBarHeight
          };
          var separatorPadding = {
            height: 10
          };
          return /*#__PURE__*/React__default.createElement(MSAProvider, {
            store: msaStore
          }, /*#__PURE__*/React__default.createElement("div", {
            style: labelsAndSequenceDiv,
            ref: this.el
          }, /*#__PURE__*/React__default.createElement(Labels, _extends({
            style: labelsStyle
          }, this.forwardProps(MSAViewerComponent.labelsProps))), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(OverviewBar, _extends({
            height: overviewBarHeight
          }, this.forwardProps(MSAViewerComponent.overviewBarProps))), /*#__PURE__*/React__default.createElement(PositionBar, this.forwardProps(MSAViewerComponent.positionBarProps)), /*#__PURE__*/React__default.createElement(SequenceViewer, this.forwardProps(MSAViewerComponent.sequenceViewerProps)), /*#__PURE__*/React__default.createElement("div", {
            style: separatorPadding
          })))); //<SequenceOverview />
        }
      }
    }]);

    return MSAViewerComponent;
  }(React.Component);

  _defineProperty(MSAViewerComponent, "sequenceViewerProps", {
    "showModBar": same,
    "onResidueMouseEnter": same,
    "onResidueMouseLeave": same,
    "onResidueClick": same,
    "onResidueDoubleClick": same,
    "highlight": same,
    "onHighlightMouseEnter": same,
    "onHighlightMouseLeave": same,
    "sequenceBorder": "border",
    "sequenceBorderColor": "borderColor",
    "sequenceBorderWidth": "borderWidth",
    "sequenceTextColor": "textColor",
    "sequenceTextFont": "textFont",
    "sequenceOverflow": "overflow",
    "sequenceOverflowX": "overflowX",
    "sequenceOverflowy": "overflowY",
    "sequenceScrollBarPositionX": "scrollBarPositionX",
    "sequenceScrollBarPositionY": "scrollBarPositionY"
  });

  _defineProperty(MSAViewerComponent, "labelsProps", {
    "labelComponent": same,
    "labelStyle": same,
    "labelAttributes": same
  });

  _defineProperty(MSAViewerComponent, "positionBarProps", {
    "markerComponent": same,
    "markerStyle": same,
    "markerAttributes": same
  });

  _defineProperty(MSAViewerComponent, "overviewBarProps", {
    "barComponent": same,
    "barStyle": same,
    "barAttributes": same
  });

  MSAViewerComponent.childContextTypes = {
    positionMSAStore: PropTypes.object
  };
  var MSAViewer = PropsToRedux(MSAViewerComponent);
  MSAViewer.defaultProps = msaDefaultProps;
  MSAViewer.propTypes = _objectSpread2({
    /**
     * A custom msaStore (created with `createMSAStore`).
     * Useful for custom interaction with other components
     */
    msaStore: PropTypes.object
  }, MSAPropTypes);

  var VERSION$1 = "0.0.12";

  var actions$2 = _objectSpread2(_objectSpread2({}, actions), actions$1);

  exports.actions = actions$2;
  exports.ColorScheme = ColorScheme;
  exports.createMSAStore = createMSAStore;
  exports.msaConnect = msaConnect;
  exports.MSAProvider = MSAProvider;
  exports.MSAViewer = MSAViewer;
  exports.withPositionStore = withPositionConsumer;
  exports.version = VERSION$1;
  exports.default = MSAViewer;
  exports.Labels = Labels;
  exports.OverviewBar = OverviewBar;
  exports.PositionBar = PositionBar;
  exports.SequenceOverview = SequenceOverview;
  exports.SequenceViewer = SequenceViewer;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
