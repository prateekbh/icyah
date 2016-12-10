webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _preact = __webpack_require__(1);

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	__webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _preact.render)((0, _preact.h)(_App2.default, null), document.getElementById('root'));

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preact = __webpack_require__(1);

	var _preactRouter = __webpack_require__(3);

	var _preactRouter2 = _interopRequireDefault(_preactRouter);

	var _Header = __webpack_require__(4);

	var _Header2 = _interopRequireDefault(_Header);

	var _Home = __webpack_require__(9);

	var _Home2 = _interopRequireDefault(_Home);

	var _Sponsors = __webpack_require__(12);

	var _Sponsors2 = _interopRequireDefault(_Sponsors);

	__webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return (0, _preact.h)(
	        'div',
	        { className: 'App' },
	        (0, _preact.h)(_Header2.default, null),
	        (0, _preact.h)(
	          _preactRouter2.default,
	          null,
	          (0, _preact.h)(_Home2.default, { path: '/' }),
	          (0, _preact.h)(_Sponsors2.default, { path: '/sponsors' })
	        )
	      );
	    }
	  }]);

	  return App;
	}(_preact.Component);

	exports.default = App;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
		 true ? module.exports = factory(__webpack_require__(1)) :
		typeof define === 'function' && define.amd ? define(['preact'], factory) :
		(global.preactRouter = factory(global.preact));
	}(this, (function (preact) { 'use strict';

	var EMPTY$1 = {};

	function exec(url, route) {
		var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY$1;

		var reg = /(?:\?([^#]*))?(#.*)?$/,
		    c = url.match(reg),
		    matches = {},
		    ret = void 0;
		if (c && c[1]) {
			var p = c[1].split('&');
			for (var i = 0; i < p.length; i++) {
				var r = p[i].split('=');
				matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
			}
		}
		url = segmentize(url.replace(reg, ''));
		route = segmentize(route || '');
		var max = Math.max(url.length, route.length);
		for (var _i = 0; _i < max; _i++) {
			if (route[_i] && route[_i].charAt(0) === ':') {
				var param = route[_i].replace(/(^\:|[+*?]+$)/g, ''),
				    flags = (route[_i].match(/[+*?]+$/) || EMPTY$1)[0] || '',
				    plus = ~flags.indexOf('+'),
				    star = ~flags.indexOf('*'),
				    val = url[_i] || '';
				if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
					ret = false;
					break;
				}
				matches[param] = decodeURIComponent(val);
				if (plus || star) {
					matches[param] = url.slice(_i).map(decodeURIComponent).join('/');
					break;
				}
			} else if (route[_i] !== url[_i]) {
				ret = false;
				break;
			}
		}
		if (opts.default !== true && ret === false) return false;
		return matches;
	}

	function pathRankSort(a, b) {
		var aAttr = a.attributes || EMPTY$1,
		    bAttr = b.attributes || EMPTY$1;
		if (aAttr.default) return 1;
		if (bAttr.default) return -1;
		var diff = rank(aAttr.path) - rank(bAttr.path);
		return diff || aAttr.path.length - bAttr.path.length;
	}

	function segmentize(url) {
		return strip(url).split('/');
	}

	function rank(url) {
		return (strip(url).match(/\/+/g) || '').length;
	}

	function strip(url) {
		return url.replace(/(^\/+|\/+$)/g, '');
	}

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var customHistory = null;

	var ROUTERS = [];

	var EMPTY = {};

	// hangs off all elements created by preact
	var ATTR_KEY = typeof Symbol !== 'undefined' ? Symbol.for('preactattr') : '__preactattr_';

	function isPreactElement(node) {
		return ATTR_KEY in node;
	}

	function setUrl(url) {
		var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'push';

		if (customHistory && customHistory[type]) {
			customHistory[type](url);
		} else if (typeof history !== 'undefined' && history[type + 'State']) {
			history[type + 'State'](null, null, url);
		}
	}

	function getCurrentUrl() {
		var url = void 0;
		if (customHistory && customHistory.location) {
			url = customHistory.location;
		} else if (customHistory && customHistory.getCurrentLocation) {
			url = customHistory.getCurrentLocation();
		} else {
			url = typeof location !== 'undefined' ? location : EMPTY;
		}
		return '' + (url.pathname || '') + (url.search || '');
	}

	function route(url) {
		var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		if (typeof url !== 'string' && url.url) {
			replace = url.replace;
			url = url.url;
		}

		// only push URL into history if we can handle it
		if (canRoute(url)) {
			setUrl(url, replace ? 'replace' : 'push');
		}

		return routeTo(url);
	}

	/** Check if the given URL can be handled by any router instances. */
	function canRoute(url) {
		for (var i = ROUTERS.length; i--;) {
			if (ROUTERS[i].canRoute(url)) return true;
		}
		return false;
	}

	/** Tell all router instances to handle the given URL.  */
	function routeTo(url) {
		var didRoute = false;
		for (var i = 0; i < ROUTERS.length; i++) {
			if (ROUTERS[i].routeTo(url) === true) {
				didRoute = true;
			}
		}
		return didRoute;
	}

	function routeFromLink(node) {
		// only valid elements
		if (!node || !node.getAttribute) return;

		var href = node.getAttribute('href'),
		    target = node.getAttribute('target');

		// ignore links with targets and non-path URLs
		if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) return;

		// attempt to route, if no match simply cede control to browser
		return route(href);
	}

	function handleLinkClick(e) {
		if (e.button !== 0) return;
		routeFromLink(e.currentTarget || e.target || this);
		return prevent(e);
	}

	function prevent(e) {
		if (e) {
			if (e.stopImmediatePropagation) e.stopImmediatePropagation();
			if (e.stopPropagation) e.stopPropagation();
			e.preventDefault();
		}
		return false;
	}

	function delegateLinkHandler(e) {
		// ignore events the browser takes care of already:
		if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;

		var t = e.target;
		do {
			if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href') && isPreactElement(t)) {
				if (e.button !== 0) return;
				// if link is handled by the router, prevent browser defaults
				if (routeFromLink(t)) {
					return prevent(e);
				}
			}
		} while (t = t.parentNode);
	}

	if (typeof addEventListener === 'function') {
		addEventListener('popstate', function () {
			return routeTo(getCurrentUrl());
		});
		addEventListener('click', delegateLinkHandler);
	}

	var Link = function Link(props) {
		return preact.h('a', _extends({}, props, { onClick: handleLinkClick }));
	};

	var Router = function (_Component) {
		_inherits(Router, _Component);

		function Router(props) {
			_classCallCheck(this, Router);

			var _this = _possibleConstructorReturn(this, _Component.call(this, props));

			if (props.history) {
				customHistory = props.history;
			}

			_this.state = {
				url: _this.props.url || getCurrentUrl()
			};
			return _this;
		}

		Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
			if (props.static !== true) return true;
			return props.url !== this.props.url || props.onChange !== this.props.onChange;
		};

		/** Check if the given URL can be matched against any children */


		Router.prototype.canRoute = function canRoute(url) {
			return this.getMatchingChildren(this.props.children, url, false).length > 0;
		};

		/** Re-render children with a new URL to match against. */


		Router.prototype.routeTo = function routeTo(url) {
			this._didRoute = false;
			this.setState({ url: url });

			// if we're in the middle of an update, don't synchronously re-route.
			if (this.updating) return this.canRoute(url);

			this.forceUpdate();
			return this._didRoute;
		};

		Router.prototype.componentWillMount = function componentWillMount() {
			ROUTERS.push(this);
			this.updating = true;
		};

		Router.prototype.componentDidMount = function componentDidMount() {
			this.updating = false;
		};

		Router.prototype.componentWillUnmount = function componentWillUnmount() {
			ROUTERS.splice(ROUTERS.indexOf(this), 1);
		};

		Router.prototype.componentWillUpdate = function componentWillUpdate() {
			this.updating = true;
		};

		Router.prototype.componentDidUpdate = function componentDidUpdate() {
			this.updating = false;
		};

		Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
			return children.slice().sort(pathRankSort).filter(function (_ref) {
				var attributes = _ref.attributes;

				var path = attributes.path,
				    matches = exec(url, path, attributes);
				if (matches) {
					if (invoke !== false) {
						attributes.url = url;
						attributes.matches = matches;
						// copy matches onto props
						for (var i in matches) {
							if (matches.hasOwnProperty(i)) {
								attributes[i] = matches[i];
							}
						}
					}
					return true;
				}
			});
		};

		Router.prototype.render = function render(_ref2, _ref3) {
			var children = _ref2.children,
			    onChange = _ref2.onChange;
			var url = _ref3.url;

			var active = this.getMatchingChildren(children, url, true);

			var current = active[0] || null;
			this._didRoute = !!current;

			var previous = this.previousUrl;
			if (url !== previous) {
				this.previousUrl = url;
				if (typeof onChange === 'function') {
					onChange({
						router: this,
						url: url,
						previous: previous,
						active: active,
						current: current
					});
				}
			}

			return current;
		};

		return Router;
	}(preact.Component);

	var Route = function Route(_ref4) {
		var component = _ref4.component,
		    url = _ref4.url,
		    matches = _ref4.matches;

		return preact.h(component, { url: url, matches: matches });
	};

	Router.route = route;
	Router.Router = Router;
	Router.Route = Route;
	Router.Link = Link;

	return Router;

	})));
	//# sourceMappingURL=preact-router.js.map


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preact = __webpack_require__(1);

	__webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_Component) {
		_inherits(Header, _Component);

		function Header() {
			_classCallCheck(this, Header);

			return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
		}

		_createClass(Header, [{
			key: 'render',
			value: function render() {
				return (0, _preact.h)(
					'header',
					null,
					(0, _preact.h)(
						'nav',
						{ className: 'desktop' },
						(0, _preact.h)(
							'div',
							{ className: 'logo link' },
							'LOGO'
						),
						(0, _preact.h)(
							'a',
							{ href: '/', className: 'link boldFont' },
							'HOME'
						),
						(0, _preact.h)(
							'a',
							{ href: '/sponsors', className: 'link boldFont' },
							'SPONSORS'
						),
						(0, _preact.h)(
							'a',
							{ href: '#', className: 'link boldFont' },
							'PARTNERS'
						),
						(0, _preact.h)(
							'a',
							{ href: '#', className: 'link boldFont' },
							'AWARDS'
						),
						(0, _preact.h)(
							'a',
							{ href: '#', className: 'link boldFont' },
							'CONTACT US'
						)
					)
				);
			}
		}]);

		return Header;
	}(_preact.Component);

	exports.default = Header;
	;

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preact = __webpack_require__(1);

	__webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_Component) {
		_inherits(Home, _Component);

		function Home() {
			_classCallCheck(this, Home);

			return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
		}

		_createClass(Home, [{
			key: 'render',
			value: function render() {
				return (0, _preact.h)(
					'div',
					{ className: 'page-home' },
					(0, _preact.h)('img', { 'class': 'cover', src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICYAH&w=1024&h=350' }),
					(0, _preact.h)('div', { className: 'content-home' })
				);
			}
		}]);

		return Home;
	}(_preact.Component);

	exports.default = Home;

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preact = __webpack_require__(1);

	__webpack_require__(13);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_Component) {
		_inherits(Home, _Component);

		function Home() {
			_classCallCheck(this, Home);

			return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
		}

		_createClass(Home, [{
			key: 'render',
			value: function render() {
				return (0, _preact.h)(
					'div',
					{ className: 'page page-sponsors' },
					'Sponsors'
				);
			}
		}]);

		return Home;
	}(_preact.Component);

	exports.default = Home;

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);