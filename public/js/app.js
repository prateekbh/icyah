webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _preact = __webpack_require__(1);

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	__webpack_require__(19);

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

	var _preactRouter = __webpack_require__(3);

	var _preactRouter2 = _interopRequireDefault(_preactRouter);

	var _preact = __webpack_require__(1);

	var _Header = __webpack_require__(4);

	var _Header2 = _interopRequireDefault(_Header);

	var _Home = __webpack_require__(9);

	var _Home2 = _interopRequireDefault(_Home);

	var _Sponsors = __webpack_require__(12);

	var _Sponsors2 = _interopRequireDefault(_Sponsors);

	var _Awards = __webpack_require__(22);

	var _Awards2 = _interopRequireDefault(_Awards);

	var _AboutUs = __webpack_require__(21);

	var _AboutUs2 = _interopRequireDefault(_AboutUs);

	var _Fees = __webpack_require__(23);

	var _Fees2 = _interopRequireDefault(_Fees);

	__webpack_require__(15);

	__webpack_require__(17);

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
	        { id: 'app' },
	        (0, _preact.h)(_Header2.default, null),
	        (0, _preact.h)(
	          'div',
	          { className: 'route' },
	          (0, _preact.h)(
	            _preactRouter2.default,
	            null,
	            (0, _preact.h)(_Home2.default, { path: '/' }),
	            (0, _preact.h)(_Sponsors2.default, { path: '/sponsors' }),
	            (0, _preact.h)(_Awards2.default, { path: '/awards' }),
	            (0, _preact.h)(_AboutUs2.default, { path: '/aboutus' }),
	            (0, _preact.h)(_Fees2.default, { path: '/fees' })
	          )
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
	}(this, function (preact) { 'use strict';

		var babelHelpers = {};

		babelHelpers.classCallCheck = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};

		babelHelpers.extends = Object.assign || function (target) {
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

		babelHelpers.inherits = function (subClass, superClass) {
		  if (typeof superClass !== "function" && superClass !== null) {
		    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		  }

		  subClass.prototype = Object.create(superClass && superClass.prototype, {
		    constructor: {
		      value: subClass,
		      enumerable: false,
		      writable: true,
		      configurable: true
		    }
		  });
		  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		};

		babelHelpers.objectWithoutProperties = function (obj, keys) {
		  var target = {};

		  for (var i in obj) {
		    if (keys.indexOf(i) >= 0) continue;
		    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
		    target[i] = obj[i];
		  }

		  return target;
		};

		babelHelpers.possibleConstructorReturn = function (self, call) {
		  if (!self) {
		    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		  }

		  return call && (typeof call === "object" || typeof call === "function") ? call : self;
		};

		babelHelpers;

		var EMPTY$1 = {};

		function exec(url, route) {
			var opts = arguments.length <= 2 || arguments[2] === undefined ? EMPTY$1 : arguments[2];

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

		var ROUTERS = [];

		var EMPTY = {};

		function route(url) {
			var replace = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

			if (typeof url !== 'string' && url.url) {
				replace = url.replace;
				url = url.url;
			}
			if (typeof history !== 'undefined' && history.pushState) {
				if (replace === true) {
					history.replaceState(null, null, url);
				} else {
					history.pushState(null, null, url);
				}
			}
			return routeTo(url);
		}

		function routeTo(url) {
			var didRoute = false;
			ROUTERS.forEach(function (router) {
				if (router.routeTo(url) === true) {
					didRoute = true;
				}
			});
			return didRoute;
		}

		function getCurrentUrl() {
			var url = typeof location !== 'undefined' ? location : EMPTY;
			return '' + (url.pathname || '') + (url.search || '');
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
				if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
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

		var Link = function (_ref) {
			var children = _ref.children;
			var props = babelHelpers.objectWithoutProperties(_ref, ['children']);
			return preact.h(
				'a',
				babelHelpers.extends({}, props, { onClick: handleLinkClick }),
				children
			);
		};

		var Router = function (_Component) {
			babelHelpers.inherits(Router, _Component);

			function Router() {
				var _temp, _this, _ret;

				babelHelpers.classCallCheck(this, Router);

				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
					url: _this.props.url || getCurrentUrl()
				}, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
			}

			Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
				if (props.static !== true) return true;
				return props.url !== this.props.url || props.onChange !== this.props.onChange;
			};

			Router.prototype.routeTo = function routeTo(url) {
				this._didRoute = false;
				this.setState({ url: url });
				this.forceUpdate();
				return this._didRoute;
			};

			Router.prototype.componentWillMount = function componentWillMount() {
				ROUTERS.push(this);
			};

			Router.prototype.componentWillUnmount = function componentWillUnmount() {
				ROUTERS.splice(ROUTERS.indexOf(this), 1);
			};

			Router.prototype.render = function render(_ref2, _ref3) {
				var children = _ref2.children;
				var onChange = _ref2.onChange;
				var url = _ref3.url;

				var active = children.slice().sort(pathRankSort).filter(function (_ref4) {
					var attributes = _ref4.attributes;

					var path = attributes.path,
					    matches = exec(url, path, attributes);
					if (matches) {
						attributes.url = url;
						attributes.matches = matches;
						// copy matches onto props
						for (var i in matches) {
							if (matches.hasOwnProperty(i)) {
								attributes[i] = matches[i];
							}
						}
						return true;
					}
				});

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

		var Route = function (_ref5) {
			var RoutedComponent = _ref5.component;
			var url = _ref5.url;
			var matches = _ref5.matches;
			return preact.h(RoutedComponent, { url: url, matches: matches });
		};

		Router.route = route;
		Router.Router = Router;
		Router.Route = Route;
		Router.Link = Link;

		return Router;

	}));
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

	var _preactRouter = __webpack_require__(3);

	__webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var links = [{
		link: '',
		text: 'HOME'
	}, {
		link: 'awards',
		text: 'AWARDS'
	}, {
		link: 'fees',
		text: 'FEES'
	}, {
		link: 'aboutus',
		text: 'ABOUT US'
	}];

	var Header = function (_Component) {
		_inherits(Header, _Component);

		function Header() {
			_classCallCheck(this, Header);

			var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

			_this.state = {
				sidebarOpened: false
			};
			return _this;
		}

		_createClass(Header, [{
			key: 'toggleSideBar',
			value: function toggleSideBar() {
				this.setState({
					sidebarOpened: !this.state.sidebarOpened
				});
			}
		}, {
			key: 'closeSideBar',
			value: function closeSideBar() {
				console.log('hi');
				this.setState({
					sidebarOpened: false
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				return (0, _preact.h)(
					'header',
					null,
					(0, _preact.h)(
						'nav',
						{ className: 'sidebar ' + (this.state.sidebarOpened ? 'opened' : '') },
						(0, _preact.h)(
							'div',
							{ className: 'logo link' },
							'LOGO'
						),
						links.map(function (item) {
							return (0, _preact.h)(
								_preactRouter.Link,
								{ href: "/" + item.link, onClick: _this2.closeSideBar.bind(_this2), className: 'link boldFont' },
								item.text
							);
						})
					),
					(0, _preact.h)(
						'i',
						{ className: 'sidebar-switch', onClick: this.toggleSideBar.bind(this) },
						(0, _preact.h)(
							'svg',
							{ fill: '#000000', height: '24', viewBox: '0 0 24 24', width: '24' },
							(0, _preact.h)('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
							(0, _preact.h)('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' })
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
					{ className: 'page page-home' },
					(0, _preact.h)('div', { 'class': 'mobCover' }),
					(0, _preact.h)(
						'div',
						{ className: 'content-home' },
						(0, _preact.h)(
							'h1',
							{ className: 'typl8-gamma' },
							'International Conference on Youth and Adolescent Health 2017'
						),
						(0, _preact.h)(
							'p',
							null,
							(0, _preact.h)(
								'div',
								null,
								(0, _preact.h)(
									'strong',
									null,
									'Theme: '
								),
								' Young Generation: Our Global Edge'
							),
							(0, _preact.h)(
								'div',
								null,
								(0, _preact.h)(
									'strong',
									null,
									'Date: '
								),
								' 9th -11th Mar, 2017'
							),
							(0, _preact.h)(
								'div',
								null,
								(0, _preact.h)(
									'strong',
									null,
									'Venue: '
								),
								' Convention Centre, New Delhi Municipal Council, Parliament Street, New Delhi, India '
							)
						),
						(0, _preact.h)(
							'h2',
							{ className: 'head typl8-delta' },
							'Indian Association for Adolescent Health'
						),
						(0, _preact.h)(
							'p',
							null,
							'in collaboration with New Delhi Municipal Council National University of Educational Planning & Administration, Indian Association of Public Health-Delhi State Branch (IPHA-DSB), Indian Association of Preventive & Social Medicine-Delhi (IAPSM-DSB), National Institute of Health & Family Welfare (NIHFW), Vardhaman Mahavir Medical College (VMMC) & Safdarjung Hospital, Delhi, All India Institute of Medical Sciences (AIIMS), Hamdard Institute of Medical Sciences & Research (HIMSR)'
						)
					)
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

	var Sponsors = function (_Component) {
		_inherits(Sponsors, _Component);

		function Sponsors() {
			_classCallCheck(this, Sponsors);

			return _possibleConstructorReturn(this, (Sponsors.__proto__ || Object.getPrototypeOf(Sponsors)).apply(this, arguments));
		}

		_createClass(Sponsors, [{
			key: 'render',
			value: function render() {
				return (0, _preact.h)(
					'div',
					{ className: 'page page-sponsors' },
					'Sponsors'
				);
			}
		}]);

		return Sponsors;
	}(_preact.Component);

	exports.default = Sponsors;

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

/***/ },
/* 18 */,
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preact = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AboutUs = function (_Component) {
		_inherits(AboutUs, _Component);

		function AboutUs() {
			_classCallCheck(this, AboutUs);

			return _possibleConstructorReturn(this, (AboutUs.__proto__ || Object.getPrototypeOf(AboutUs)).apply(this, arguments));
		}

		_createClass(AboutUs, [{
			key: 'render',
			value: function render() {
				return (0, _preact.h)(
					'div',
					{ className: 'page page-aboutus' },
					(0, _preact.h)(
						'div',
						{ className: 'content-aboutus' },
						(0, _preact.h)(
							'h2',
							{ className: 'typl8-gamma' },
							'Indian Association for Adolescent Health'
						),
						(0, _preact.h)(
							'p',
							null,
							'It is a Non-Governmental National Organization of professionals who share the interest in the programs and activities to meet the health care needs of young people all over the country. The goal of the organization is to foster development of regional and state-level associations for promotion of youth and adolescent health. IAAH ensures meaningful youth participation in all its programs and activities. IAAH realizes its role as enhancer of the health of adolescents and youth through education, research and high quality health care. IAAH maintains a multi-disciplinary composition of its members.'
						),
						(0, _preact.h)(
							'h2',
							{ className: 'head typl8-delta' },
							'International Conference on Youth & Adolescent Health 2017'
						),
						(0, _preact.h)(
							'p',
							null,
							(0, _preact.h)(
								'div',
								null,
								'The conference will be an apt platform for scholars, experts and all stakeholders of youth and adolescent health to discuss their role in achievement of sustainable development goals.'
							),
							(0, _preact.h)(
								'div',
								null,
								'The conference will cover following topics:',
								(0, _preact.h)(
									'ul',
									null,
									(0, _preact.h)(
										'li',
										null,
										'Any professional concerned with Adolescent, Youth and Development.'
									),
									(0, _preact.h)(
										'li',
										null,
										'Members of IAAH-National & State Chapter.'
									),
									(0, _preact.h)(
										'li',
										null,
										'Faculty Members, Scientists and Postgraduate Students from the Medical Colleges.'
									),
									(0, _preact.h)(
										'li',
										null,
										'Faculty Members, Scientists and Postgraduate Students from the School of Social Sciences and Psychology.'
									),
									(0, _preact.h)(
										'li',
										null,
										'Research Scientists from Health and Training Institutions at National or State Levels.'
									),
									(0, _preact.h)(
										'li',
										null,
										'Health Planners, Administrators and Policy Makers.'
									),
									(0, _preact.h)(
										'li',
										null,
										'School Teachers, Principals, Counselors.'
									),
									(0, _preact.h)(
										'li',
										null,
										'Programme Managers of National Health Mission at all levels (particularly those associated with National Adolescent Health Program Rashtriya Kishor Swasthya Karyakram).'
									),
									(0, _preact.h)(
										'li',
										null,
										'Faculty Members from National, State and Regional Level Health & Family Welfare Training Centres.'
									),
									(0, _preact.h)(
										'li',
										null,
										'Programme Managers from Voluntary and Non-governmental Organizations working in the fields of Adolescent Health & Development.'
									),
									(0, _preact.h)(
										'li',
										null,
										'Programme Managers from International Organizations working in the fields of Adolescent Health.'
									),
									(0, _preact.h)(
										'li',
										null,
										'Adolescents.'
									)
								)
							)
						)
					)
				);
			}
		}]);

		return AboutUs;
	}(_preact.Component);

	exports.default = AboutUs;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preact = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Awards = function (_Component) {
		_inherits(Awards, _Component);

		function Awards() {
			_classCallCheck(this, Awards);

			return _possibleConstructorReturn(this, (Awards.__proto__ || Object.getPrototypeOf(Awards)).apply(this, arguments));
		}

		_createClass(Awards, [{
			key: 'render',
			value: function render() {
				return (0, _preact.h)(
					'div',
					{ className: 'page page-aboutus' },
					(0, _preact.h)(
						'div',
						{ className: 'content-aboutus' },
						(0, _preact.h)(
							'h2',
							{ className: 'typl8-gamma' },
							'Awards and Fellowships'
						),
						(0, _preact.h)(
							'p',
							null,
							(0, _preact.h)(
								'ul',
								null,
								(0, _preact.h)(
									'li',
									null,
									'Dr. Prema Bali Oration'
								),
								(0, _preact.h)(
									'li',
									null,
									'Dr. Surrinder  H Singh Oration'
								),
								(0, _preact.h)(
									'li',
									null,
									'Sohan Lal Golyan Gold medal'
								),
								(0, _preact.h)(
									'li',
									null,
									'Best Scientific Paper Presentation Award'
								),
								(0, _preact.h)(
									'li',
									null,
									'Best Essay and Poster Competition to School Students'
								),
								(0, _preact.h)(
									'li',
									null,
									'Fellows of IAAH.'
								)
							)
						),
						(0, _preact.h)(
							'h2',
							{ className: 'head typl8-delta' },
							'Who should participate?'
						),
						(0, _preact.h)(
							'p',
							null,
							(0, _preact.h)(
								'li',
								null,
								'Any professional concerned with Adolescent, Youth and Development.'
							),
							(0, _preact.h)(
								'li',
								null,
								'Members of IAAH-National & State Chapter.'
							),
							(0, _preact.h)(
								'li',
								null,
								'Faculty Members, Scientists and Postgraduate Students from the Medical Colleges.'
							),
							(0, _preact.h)(
								'li',
								null,
								'Faculty Members, Scientists and Postgraduate Students from the School of Social Sciences and Psychology.'
							),
							(0, _preact.h)(
								'li',
								null,
								'Research Scientists from Health and Training Institutions at National or State Levels.'
							),
							(0, _preact.h)(
								'li',
								null,
								'Health Planners, Administrators and Policy Makers.'
							),
							(0, _preact.h)(
								'li',
								null,
								'School Teachers, Principals, Counselors.'
							),
							(0, _preact.h)(
								'li',
								null,
								'Programme Managers of National Health Mission at all levels (particularly those associated with National Adolescent Health Program Rashtriya Kishor Swasthya Karyakram).'
							),
							(0, _preact.h)(
								'li',
								null,
								'Faculty Members from National, State and Regional Level Health & Family Welfare Training Centres.'
							),
							(0, _preact.h)(
								'li',
								null,
								'Programme Managers from Voluntary and Non-governmental Organizations working in the fields of Adolescent Health & Development.'
							),
							(0, _preact.h)(
								'li',
								null,
								'Programme Managers from International Organizations working in the fields of Adolescent Health.'
							),
							(0, _preact.h)(
								'li',
								null,
								'Adolescents.'
							)
						)
					)
				);
			}
		}]);

		return Awards;
	}(_preact.Component);

	exports.default = Awards;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preact = __webpack_require__(1);

	__webpack_require__(24);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Fees = function (_Component) {
		_inherits(Fees, _Component);

		function Fees() {
			_classCallCheck(this, Fees);

			return _possibleConstructorReturn(this, (Fees.__proto__ || Object.getPrototypeOf(Fees)).apply(this, arguments));
		}

		_createClass(Fees, [{
			key: 'render',
			value: function render() {
				return (0, _preact.h)(
					'div',
					{ className: 'page page-fees' },
					(0, _preact.h)(
						'div',
						{ className: 'content-fees' },
						(0, _preact.h)(
							'h2',
							{ className: 'typl8-delta' },
							'Sponsorship for Conference, Sessions and Associated Events'
						),
						(0, _preact.h)(
							'table',
							{ border: '1' },
							(0, _preact.h)(
								'tr',
								null,
								(0, _preact.h)(
									'td',
									null,
									(0, _preact.h)(
										'strong',
										null,
										'Platinum Sponsor'
									)
								),
								(0, _preact.h)(
									'td',
									null,
									'Rs. 5 lakhs'
								)
							),
							(0, _preact.h)(
								'tr',
								null,
								(0, _preact.h)(
									'td',
									null,
									(0, _preact.h)(
										'strong',
										null,
										'Gold Sponsor'
									)
								),
								(0, _preact.h)(
									'td',
									null,
									'Rs. 3 lakhs'
								)
							),
							(0, _preact.h)(
								'tr',
								null,
								(0, _preact.h)(
									'td',
									null,
									(0, _preact.h)(
										'strong',
										null,
										'Silver Sponsors'
									)
								),
								(0, _preact.h)(
									'td',
									null,
									'Rs. 2 lakhs'
								)
							),
							(0, _preact.h)(
								'tr',
								null,
								(0, _preact.h)(
									'td',
									null,
									(0, _preact.h)(
										'strong',
										null,
										'Workshop Sponsorship'
									)
								),
								(0, _preact.h)(
									'td',
									null,
									'Rs. 2 lakhs'
								)
							),
							(0, _preact.h)(
								'tr',
								null,
								(0, _preact.h)(
									'td',
									null,
									(0, _preact.h)(
										'strong',
										null,
										'Scientific Session Sponsorship'
									)
								),
								(0, _preact.h)(
									'td',
									null,
									'Rs. 1 lakhs'
								)
							)
						),
						(0, _preact.h)(
							'h2',
							{ className: 'typl8-delta' },
							'Exhibition Stalls:'
						),
						(0, _preact.h)(
							'table',
							{ border: '1' },
							(0, _preact.h)(
								'tr',
								null,
								(0, _preact.h)(
									'td',
									null,
									(0, _preact.h)(
										'strong',
										null,
										'3 days'
									)
								),
								(0, _preact.h)(
									'td',
									null,
									'Rs. 60,000/-'
								)
							),
							(0, _preact.h)(
								'tr',
								null,
								(0, _preact.h)(
									'td',
									null,
									(0, _preact.h)(
										'strong',
										null,
										'2 days'
									)
								),
								(0, _preact.h)(
									'td',
									null,
									'Rs. 45,000/-'
								)
							),
							(0, _preact.h)(
								'tr',
								null,
								(0, _preact.h)(
									'td',
									null,
									(0, _preact.h)(
										'strong',
										null,
										'1 day'
									)
								),
								(0, _preact.h)(
									'td',
									null,
									'Rs. 25,000/-'
								)
							)
						),
						(0, _preact.h)(
							'h2',
							{ className: 'typl8-delta' },
							'Advertisement in Souvenir:'
						),
						(0, _preact.h)(
							'table',
							{ border: '1' },
							(0, _preact.h)(
								'tr',
								null,
								(0, _preact.h)(
									'td',
									null,
									(0, _preact.h)(
										'strong',
										null,
										'Back cover - Coloured'
									)
								),
								(0, _preact.h)(
									'td',
									null,
									'Rs. 30,000/-'
								),
								(0, _preact.h)(
									'td',
									null,
									(0, _preact.h)(
										'strong',
										null,
										'Front Inner Cover - Coloured'
									)
								),
								(0, _preact.h)(
									'td',
									null,
									'Rs. 25,000/-'
								)
							),
							(0, _preact.h)(
								'tr',
								null,
								(0, _preact.h)(
									'td',
									null,
									(0, _preact.h)(
										'strong',
										null,
										'Back Inner Cover - Coloured'
									)
								),
								(0, _preact.h)(
									'td',
									null,
									'Rs. 25,000/-'
								),
								(0, _preact.h)(
									'td',
									null,
									(0, _preact.h)(
										'strong',
										null,
										'Full Page - Coloured'
									)
								),
								(0, _preact.h)(
									'td',
									null,
									'Rs. 20,000/-'
								)
							),
							(0, _preact.h)(
								'tr',
								null,
								(0, _preact.h)(
									'td',
									null,
									(0, _preact.h)(
										'strong',
										null,
										'Half Page - Coloured'
									)
								),
								(0, _preact.h)(
									'td',
									null,
									'Rs. 15,000/-'
								),
								(0, _preact.h)(
									'td',
									null,
									(0, _preact.h)(
										'strong',
										null,
										'Full Page- B & W'
									)
								),
								(0, _preact.h)(
									'td',
									null,
									'Rs. 15,000/-'
								)
							),
							(0, _preact.h)(
								'tr',
								null,
								(0, _preact.h)(
									'td',
									null,
									(0, _preact.h)(
										'strong',
										null,
										'Half Page- B & W'
									)
								),
								(0, _preact.h)(
									'td',
									null,
									'Rs. 8,000/-'
								),
								(0, _preact.h)(
									'td',
									null,
									(0, _preact.h)(
										'strong',
										null,
										'Bookmark'
									)
								),
								(0, _preact.h)(
									'td',
									null,
									'Rs. 20,000/-'
								)
							),
							(0, _preact.h)(
								'tr',
								null,
								(0, _preact.h)(
									'td',
									null,
									(0, _preact.h)(
										'strong',
										null,
										'Delegate Bags'
									)
								),
								(0, _preact.h)(
									'td',
									null,
									'Rs. 20,000/-'
								),
								(0, _preact.h)(
									'td',
									null,
									(0, _preact.h)('strong', null)
								),
								(0, _preact.h)('td', null)
							)
						)
					)
				);
			}
		}]);

		return Fees;
	}(_preact.Component);

	exports.default = Fees;

/***/ },
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);