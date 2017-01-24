webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _preact = __webpack_require__(1);

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	__webpack_require__(39);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _preact.render)((0, _preact.h)(_App2.default, { user: Object.assign({}, window.user) }), document.getElementById('root'));

	delete window.user;

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

	var _Awards = __webpack_require__(15);

	var _Awards2 = _interopRequireDefault(_Awards);

	var _AboutUs = __webpack_require__(16);

	var _AboutUs2 = _interopRequireDefault(_AboutUs);

	var _AboutIaah = __webpack_require__(17);

	var _AboutIaah2 = _interopRequireDefault(_AboutIaah);

	var _Fees = __webpack_require__(18);

	var _Fees2 = _interopRequireDefault(_Fees);

	var _Abstract = __webpack_require__(21);

	var _Abstract2 = _interopRequireDefault(_Abstract);

	var _Cancellation = __webpack_require__(27);

	var _Cancellation2 = _interopRequireDefault(_Cancellation);

	var _RegistrationFees = __webpack_require__(28);

	var _RegistrationFees2 = _interopRequireDefault(_RegistrationFees);

	var _Register = __webpack_require__(32);

	var _Register2 = _interopRequireDefault(_Register);

	var _ContactUs = __webpack_require__(41);

	var _ContactUs2 = _interopRequireDefault(_ContactUs);

	__webpack_require__(35);

	__webpack_require__(37);

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
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({
	        user: this.props.user
	      });
	    }
	  }, {
	    key: 'doneLogin',
	    value: function doneLogin(data) {
	      this.setState({
	        user: data
	      });
	    }
	  }, {
	    key: 'doneRegistration',
	    value: function doneRegistration(data) {
	      this.setState({
	        user: data
	      });
	    }
	  }, {
	    key: 'paymentDone',
	    value: function paymentDone(data) {
	      this.setState({
	        user: data
	      });
	    }
	  }, {
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
	            (0, _preact.h)(_AboutIaah2.default, { path: '/about/iaah' }),
	            (0, _preact.h)(_AboutUs2.default, { path: '/aboutus' }),
	            (0, _preact.h)(_Fees2.default, { path: '/fees' }),
	            (0, _preact.h)(_Abstract2.default, { user: this.state.user,
	              doneLogin: this.doneLogin.bind(this),
	              path: '/abstract' }),
	            (0, _preact.h)(_Cancellation2.default, { path: '/registration/cancellation' }),
	            (0, _preact.h)(_RegistrationFees2.default, { path: '/registration/fees' }),
	            (0, _preact.h)(_Register2.default, {
	              user: this.state.user,
	              doneLogin: this.doneLogin.bind(this),
	              doneRegistration: this.doneRegistration.bind(this),
	              paymentDone: this.paymentDone.bind(this),
	              path: '/registration/register' }),
	            (0, _preact.h)(_ContactUs2.default, { path: '/contactus' })
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

	var _preactRouter = __webpack_require__(3);

	__webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var links = [{
		link: '',
		text: 'HOME'
	}, {
		link: [{
			link: '/about/iaah',
			text: 'IAAH'
		}, {
			link: '/aboutus',
			text: 'ICYAH'
		}],
		text: 'ABOUT'
	}, {
		link: [{
			link: '/registration/cancellation',
			text: 'Cancellation'
		}, {
			link: '/registration/fees',
			text: 'Fees'
		}],
		text: 'Registration'
	}, {
		link: 'awards',
		text: 'AWARDS'
	}, {
		link: 'fees',
		text: 'FEES'
	}, {
		link: 'abstract',
		text: 'Abstract'
	}, {
		link: 'contactus',
		text: 'Contact Us'
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
						'div',
						{ className: 'logos' },
						(0, _preact.h)(
							'div',
							{ className: 'logo-icyah box' },
							(0, _preact.h)('img', { className: 'logo', src: '/images/logo.png' })
						),
						(0, _preact.h)(
							'div',
							{ className: 'desc-icyah box' },
							(0, _preact.h)(
								'div',
								{ className: 'title' },
								'ICYAH 2017'
							),
							(0, _preact.h)(
								'div',
								{ className: 'desc' },
								'International conference on Youth and Adolescent Health'
							),
							(0, _preact.h)(
								'div',
								{ className: 'subtitle' },
								'Young Generation: Our Global Edge'
							),
							(0, _preact.h)(
								'div',
								{ className: 'details' },
								'14th - 16th April | Convention Center, NDMC, New Delhi'
							)
						),
						(0, _preact.h)(
							'div',
							{ className: 'logo-iaah box' },
							(0, _preact.h)('img', { className: 'logo-iaah', src: '/images/iaahlogo.png', width: '162' })
						)
					),
					(0, _preact.h)(
						'div',
						{ className: 'nav-container' },
						(0, _preact.h)(
							'nav',
							{ className: 'sidebar ' + (this.state.sidebarOpened ? 'opened' : '') },
							links.map(function (item) {
								if (typeof item.link === 'string') {
									return (0, _preact.h)(
										_preactRouter.Link,
										{ href: "/" + item.link, onClick: _this2.closeSideBar.bind(_this2), className: 'link' },
										item.text
									);
								} else if (item.link instanceof Array) {
									return (0, _preact.h)(
										'div',
										{ className: 'link' },
										item.text,
										(0, _preact.h)(
											'div',
											{ className: 'sublinks' },
											item.link.map(function (subitem) {
												return (0, _preact.h)(
													'div',
													{ className: 'subitem' },
													(0, _preact.h)(
														_preactRouter.Link,
														{ className: 'sublink', href: subitem.link },
														subitem.text
													)
												);
											})
										)
									);
								}
							})
						)
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

	var _preactRouter = __webpack_require__(3);

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
					(0, _preact.h)(
						'div',
						{ 'class': 'mobCover' },
						(0, _preact.h)(
							'a',
							{ href: '/public/pdf/brochure.pdf', target: '_blank', className: 'link link-brocure' },
							'Brochure'
						)
					),
					(0, _preact.h)(
						'div',
						{ className: 'content-home' },
						(0, _preact.h)(
							'div',
							{ className: 'sidepanel' },
							(0, _preact.h)(
								'div',
								{ className: 'dates' },
								(0, _preact.h)(
									'div',
									{ className: 'title' },
									' Important Dates '
								),
								(0, _preact.h)(
									'div',
									{ className: 'date' },
									'Registrations open soon.'
								),
								(0, _preact.h)(
									'div',
									{ className: 'date' },
									'Last date for abstract submission: 28th Feb'
								)
							),
							(0, _preact.h)(
								'div',
								{ className: 'venue' },
								(0, _preact.h)(
									'div',
									{ className: 'name' },
									' Venue: ',
									(0, _preact.h)(
										'div',
										null,
										'Convention Hall, NDMC New Delhi'
									)
								),
								(0, _preact.h)(
									'div',
									null,
									(0, _preact.h)('img', { className: 'pic', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOHCSBJjKJbpX_wj2_x4Lerjx_WiOiNvEg5lKILTKVBHTWDNU' })
								)
							)
						),
						(0, _preact.h)(
							'div',
							{ className: 'content' },
							(0, _preact.h)(
								'div',
								{ className: 'typl8-alpha head' },
								'Welcome to ICYAH 2017'
							),
							(0, _preact.h)(
								'div',
								null,
								'Dear Friends and Colleagues,'
							),
							(0, _preact.h)(
								'div',
								null,
								'It gives us immense pleasure to invite you to the International Conference on Youth & Adolescent Health 2017 being organized by Indian Association for Adolescent Health (IAAH), which will be held from 9 th to 11 th March, 2016 at NDMC Convention Centre, New Delhi, India.'
							),
							(0, _preact.h)(
								'div',
								null,
								'The theme of the conference is \u201CYoung Generation: Our Global Edge\u201D. Globally, 1.2 billion adolescents stand at the cross roads of childhood and adulthood. India alone is home to 243 million adolescents. Investing in adolescents today can break entrenched cycles of poverty and inequity (UNICEF, 2011). Thus, it serves an opportunity to transform the society by nurturing them properly and tapping the potential of this generation. It is well known fact that as adolescents flourish so do their communities. Adolescents in India constitute nearly one quarter of the total population of the country thereby making India one of the youngest countries in the world. This provides an opportune platform for India to take advantage and nurture the adolescence for socio-economic growth of the country. The 3 day academic and technical feast will offer ample prospects to discuss important issues, sharing information and exchange ideas in the field of adolescence and youth. Your active participation and contribution in various scientific sessions will make this event a real success.'
							),
							(0, _preact.h)(
								'i',
								null,
								(0, _preact.h)(
									'div',
									{ className: 'from' },
									'Looking forward to welcoming you in Delhi, India.'
								),
								(0, _preact.h)(
									'div',
									null,
									'With warm regards'
								),
								(0, _preact.h)(
									'div',
									null,
									(0, _preact.h)('img', { className: 'pic-president', src: '/images/president.jpg', width: '100' })
								),
								(0, _preact.h)(
									'div',
									null,
									'Dr. Prema Bali,'
								),
								(0, _preact.h)(
									'div',
									null,
									'Founding President, IAAH\u200B'
								)
							)
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
/* 16 */
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
/* 17 */
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
						)
					)
				);
			}
		}]);

		return AboutUs;
	}(_preact.Component);

	exports.default = AboutUs;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preact = __webpack_require__(1);

	__webpack_require__(19);

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

	__webpack_require__(22);

	var _LoginSignup = __webpack_require__(24);

	var _LoginSignup2 = _interopRequireDefault(_LoginSignup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Abstract = function (_Component) {
		_inherits(Abstract, _Component);

		function Abstract() {
			_classCallCheck(this, Abstract);

			var _this = _possibleConstructorReturn(this, (Abstract.__proto__ || Object.getPrototypeOf(Abstract)).call(this));

			_this.state = {
				abstractSubmitted: false,
				isFormSubmitting: false
			};
			return _this;
		}

		_createClass(Abstract, [{
			key: 'submitForm',
			value: function submitForm() {
				var that = this;
				this.setState({
					abstractSubmitted: false,
					isFormSubmitting: true
				});
				var aname = this.frm.name.value;
				var aemail = this.frm.email.value;
				var fr = new FileReader();
				fr.addEventListener('loadend', function (e) {
					var _this2 = this;

					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");
					fetch('/submitabstract', {
						method: 'POST',
						headers: myHeaders,
						body: JSON.stringify({
							name: aname,
							email: aemail,
							file: e.target.result
						}),
						credentials: 'include'
					}).then(function (res) {
						if (!res.ok) {
							throw new Error('not good ajax');
						}
						return res.json();
					}).then(function (data) {
						if (data.done) {
							alert('Your abstract has been submitted');
							window.reload();
							that.setState({
								abstractSubmitted: true,
								isFormSubmitting: false
							});
						} else {
							throw new Error('cannot submit abstract');
						}
					}).catch(function (e) {
						_this2.setState({
							abstractSubmitted: false,
							isFormSubmitting: false
						});
					});
				});
				fr.addEventListener('error', function (e) {
					alert('File could not be read');
				});
				fr.readAsDataURL(this.frm.abstractfile.files[0]);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;

				console.log('user', this.props.user);
				return (0, _preact.h)(
					'div',
					{ className: 'page page-abstract' },
					(0, _preact.h)(
						'div',
						{ className: 'content-abstract' },
						(0, _preact.h)(
							'h2',
							{ className: 'typl8-delta' },
							'Guidelines for Abstract Submission'
						),
						(0, _preact.h)(
							'p',
							null,
							(0, _preact.h)(
								'div',
								null,
								(0, _preact.h)(
									'b',
									null,
									'Authors List:'
								),
								' List the name of authors and address of institutions with e mail-ID. Please underline presenting author\u2019s name.'
							),
							(0, _preact.h)(
								'div',
								null,
								(0, _preact.h)(
									'b',
									null,
									'Abstract Title:'
								),
								' Please type abstract title in UPPERCASE and do not put a full stop (.) after the title.'
							),
							(0, _preact.h)(
								'ol',
								null,
								(0, _preact.h)(
									'li',
									null,
									'Abstracts must be typed and submitted in English in Word Format, font type \u201CTimes New Roman\u201D, font size 12 and should be submitted online only'
								),
								(0, _preact.h)(
									'li',
									null,
									'Abstract should include i) Introduction, ii) Objectives, iii) Materials and Methods, v) Results and vi) Conclusion.'
								),
								(0, _preact.h)(
									'li',
									null,
									'The abstract must not exceed 250 words'
								),
								(0, _preact.h)(
									'li',
									null,
									'The Abstract should be submitted online only'
								),
								(0, _preact.h)(
									'li',
									null,
									'Duration for Oral presentation will be restricted to 10 minutes (8 minutes for presentation and 2 minutes for discussion).'
								)
							)
						),
						this.props.user && this.props.user.email ? this.props.user.abstractSubmitted ? (0, _preact.h)(
							'div',
							null,
							(0, _preact.h)(
								'div',
								{ className: 'success' },
								(0, _preact.h)(
									'svg',
									{ className: 'icon-success', xmlns: 'http://www.w3.org/2000/svg', fill: '#000000', height: '24', viewBox: '0 0 24 24', width: '24' },
									(0, _preact.h)('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
									(0, _preact.h)('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' })
								),
								(0, _preact.h)(
									'div',
									{ className: 'text' },
									'You abstract is under review'
								)
							)
						) : (0, _preact.h)(
							'div',
							null,
							(0, _preact.h)(
								'h2',
								{ className: 'typl8-delta' },
								'Submit Abstract'
							),
							(0, _preact.h)(
								'form',
								{ action: 'javascript:', method: 'POST', ref: function ref(frm) {
										_this3.frm = frm;
									}, onSubmit: this.submitForm.bind(this) },
								(0, _preact.h)(
									'div',
									null,
									(0, _preact.h)(
										'label',
										null,
										'Name of presenter'
									),
									(0, _preact.h)('input', { 'class': 'typl8-zeta', type: 'text', name: 'name', required: true, value: this.props.user.name })
								),
								(0, _preact.h)(
									'div',
									null,
									(0, _preact.h)(
										'label',
										null,
										'EMail Id'
									),
									(0, _preact.h)('input', { 'class': 'typl8-zeta', type: 'email', name: 'email', required: true, value: this.props.user.email })
								),
								(0, _preact.h)(
									'div',
									null,
									(0, _preact.h)('input', { type: 'file', name: 'abstractfile', required: true, accept: '.pdf' })
								),
								(0, _preact.h)(
									'div',
									null,
									(0, _preact.h)('input', { type: 'submit', 'class': 'submit', value: this.state.isFormSubmitting ? 'Sending' : 'Send' })
								)
							)
						) : (0, _preact.h)(_LoginSignup2.default, this.props)
					)
				);
			}
		}]);

		return Abstract;
	}(_preact.Component);

	exports.default = Abstract;

/***/ },
/* 22 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preact = __webpack_require__(1);

	__webpack_require__(25);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginSignup = function (_Component) {
	    _inherits(LoginSignup, _Component);

	    function LoginSignup() {
	        _classCallCheck(this, LoginSignup);

	        var _this = _possibleConstructorReturn(this, (LoginSignup.__proto__ || Object.getPrototypeOf(LoginSignup)).call(this));

	        _this.state = {
	            tab: 'LOGIN'
	        };
	        return _this;
	    }

	    _createClass(LoginSignup, [{
	        key: 'login',
	        value: function login() {
	            var _this2 = this;

	            fetch('/user/login', {
	                method: 'POST',
	                headers: new Headers({
	                    'content-type': 'application/json'
	                }),
	                credentials: 'include',
	                body: JSON.stringify({
	                    username: this.uname.value,
	                    password: this.pwd.value
	                })
	            }).then(function (res) {
	                if (res.ok) {
	                    return res.json();
	                } else {
	                    throw new Error('');
	                }
	            }).then(function (res) {
	                _this2.props.doneLogin && _this2.props.doneLogin(res);
	            }).catch(function (e) {
	                alert('Cannot login');
	            });
	        }
	    }, {
	        key: 'signup',
	        value: function signup() {
	            var _this3 = this;

	            fetch('/user/create', {
	                method: 'POST',
	                headers: new Headers({
	                    'content-type': 'application/json'
	                }),
	                credentials: 'include',
	                body: JSON.stringify({
	                    username: this.regemail.value,
	                    password: this.regpwd.value,
	                    name: this.regname.value,
	                    email: this.regemail.value,
	                    phone: this.regphone.value
	                })
	            }).then(function (res) {
	                if (res.ok) {
	                    return res.json();
	                } else {
	                    throw new Error('');
	                }
	            }).then(function (res) {
	                _this3.props.doneLogin && _this3.props.doneLogin(res);
	            }).catch(function (e) {
	                alert('Cannot login');
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;

	            return (0, _preact.h)(
	                'div',
	                { className: 'credentials' },
	                (0, _preact.h)(
	                    'div',
	                    { className: 'tabs' },
	                    (0, _preact.h)(
	                        'div',
	                        {
	                            className: 'login tab ' + (this.state.tab === 'LOGIN' ? 'active' : ''),
	                            onClick: function onClick() {
	                                _this4.setState({
	                                    tab: 'LOGIN'
	                                });
	                            } },
	                        'Login'
	                    ),
	                    (0, _preact.h)(
	                        'div',
	                        {
	                            className: 'signup tab ' + (this.state.tab === 'SIGNUP' ? 'active' : ''),
	                            onClick: function onClick() {
	                                _this4.setState({
	                                    tab: 'SIGNUP'
	                                });
	                            } },
	                        'Signup'
	                    )
	                ),
	                (0, _preact.h)(
	                    'div',
	                    { className: 'content' },
	                    this.state.tab === 'LOGIN' && (0, _preact.h)(
	                        'div',
	                        { className: 'controls' },
	                        (0, _preact.h)(
	                            'div',
	                            null,
	                            (0, _preact.h)('input', { className: 'typl8-zeta username', ref: function ref(e) {
	                                    return _this4.uname = e;
	                                }, type: 'email', placeholder: 'emailid' })
	                        ),
	                        (0, _preact.h)(
	                            'div',
	                            null,
	                            (0, _preact.h)('input', { className: 'typl8-zeta password', type: 'password', ref: function ref(e) {
	                                    return _this4.pwd = e;
	                                }, placeholder: 'password' })
	                        ),
	                        (0, _preact.h)(
	                            'div',
	                            null,
	                            (0, _preact.h)(
	                                'button',
	                                { onClick: this.login.bind(this) },
	                                'Login'
	                            )
	                        )
	                    ),
	                    this.state.tab === 'SIGNUP' && (0, _preact.h)(
	                        'div',
	                        { className: 'controls' },
	                        (0, _preact.h)(
	                            'div',
	                            null,
	                            (0, _preact.h)('input', { className: 'typl8-zeta ', ref: function ref(e) {
	                                    return _this4.regemail = e;
	                                }, type: 'email', placeholder: 'email id' })
	                        ),
	                        (0, _preact.h)(
	                            'div',
	                            null,
	                            (0, _preact.h)('input', { className: 'typl8-zeta password', type: 'password', ref: function ref(e) {
	                                    return _this4.regpwd = e;
	                                }, placeholder: 'password' })
	                        ),
	                        (0, _preact.h)(
	                            'div',
	                            null,
	                            (0, _preact.h)('input', { className: 'typl8-zeta ', ref: function ref(e) {
	                                    return _this4.regname = e;
	                                }, placeholder: 'full name' })
	                        ),
	                        (0, _preact.h)(
	                            'div',
	                            null,
	                            (0, _preact.h)('input', { className: 'typl8-zeta ', ref: function ref(e) {
	                                    return _this4.regphone = e;
	                                }, maxLength: '10', placeholder: 'phonenumber' })
	                        ),
	                        (0, _preact.h)(
	                            'div',
	                            null,
	                            (0, _preact.h)(
	                                'button',
	                                { onClick: this.signup.bind(this) },
	                                'Register'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return LoginSignup;
	}(_preact.Component);

	exports.default = LoginSignup;

/***/ },
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 26 */,
/* 27 */
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

	var Cancellation = function (_Component) {
		_inherits(Cancellation, _Component);

		function Cancellation() {
			_classCallCheck(this, Cancellation);

			return _possibleConstructorReturn(this, (Cancellation.__proto__ || Object.getPrototypeOf(Cancellation)).apply(this, arguments));
		}

		_createClass(Cancellation, [{
			key: 'render',
			value: function render() {
				return (0, _preact.h)(
					'div',
					{ className: 'page page-cancellation' },
					(0, _preact.h)(
						'div',
						{ className: 'content-cancellations' },
						(0, _preact.h)(
							'h2',
							{ className: 'typl8-delta' },
							'Cancellation Policy'
						),
						(0, _preact.h)(
							'p',
							null,
							(0, _preact.h)(
								'div',
								null,
								'The registered delegate be aware of that all registration and accommodation fees (if applicable) must be paid in full before attending the conference.'
							),
							(0, _preact.h)(
								'div',
								null,
								'Any amendments and/or cancellations must be notified in writing to the Conference Organisers via email  ',
								(0, _preact.h)(
									'a',
									{ href: 'mailto:icyah.foundation@gmail.com' },
									'icyah.foundation@gmail.com'
								)
							),
							(0, _preact.h)(
								'div',
								null,
								'Cancellations received in writing before 30 March, 2017 will be credited back to the registered delegate in full less 33% of the fee paid.'
							),
							(0, _preact.h)(
								'div',
								null,
								'50% of the registration amount will be credited back to the registered delegate on cancellations received in writing between 1st March, 2017 .'
							),
							(0, _preact.h)(
								'div',
								null,
								'No refunds will be provided after this date.'
							),
							(0, _preact.h)(
								'div',
								null,
								'Kindly note that the refund money will be credited back to the payee account after the event is over and latest by May 31, 2017 .'
							),
							(0, _preact.h)(
								'div',
								null,
								'Substitute delegates are welcome without any penalty. Please advise the Conference Organisers by email of any name changes as soon as possible at  ',
								(0, _preact.h)(
									'a',
									{ href: 'mailto:icyah.foundation@gmail.com' },
									'icyah.foundation@gmail.com'
								)
							)
						)
					)
				);
			}
		}]);

		return Cancellation;
	}(_preact.Component);

	exports.default = Cancellation;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preact = __webpack_require__(1);

	var _feesUtils = __webpack_require__(29);

	__webpack_require__(30);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RegistrationFees = function (_Component) {
	    _inherits(RegistrationFees, _Component);

	    function RegistrationFees() {
	        _classCallCheck(this, RegistrationFees);

	        return _possibleConstructorReturn(this, (RegistrationFees.__proto__ || Object.getPrototypeOf(RegistrationFees)).apply(this, arguments));
	    }

	    _createClass(RegistrationFees, [{
	        key: 'render',
	        value: function render() {
	            return (0, _preact.h)(
	                'div',
	                { className: 'page page-regfees' },
	                (0, _preact.h)(
	                    'div',
	                    { className: 'content-regfees' },
	                    (0, _preact.h)(
	                        'h2',
	                        { className: 'typl8-delta' },
	                        'Registration Fees'
	                    ),
	                    (0, _preact.h)(
	                        'table',
	                        { border: '1' },
	                        (0, _preact.h)(
	                            'thead',
	                            null,
	                            (0, _preact.h)(
	                                'td',
	                                null,
	                                'CODE'
	                            ),
	                            (0, _preact.h)(
	                                'td',
	                                null,
	                                'PARTICIPANTS'
	                            ),
	                            (0, _preact.h)(
	                                'td',
	                                null,
	                                'CONFERENCE'
	                            ),
	                            (0, _preact.h)(
	                                'td',
	                                null,
	                                'PRE-CONFERENCE WORKSHOP'
	                            )
	                        ),
	                        (0, _preact.h)(
	                            'tr',
	                            null,
	                            (0, _preact.h)('td', null),
	                            (0, _preact.h)('td', null),
	                            (0, _preact.h)(
	                                'td',
	                                null,
	                                (0, _preact.h)(
	                                    'table',
	                                    { style: 'width:100%' },
	                                    (0, _preact.h)(
	                                        'tr',
	                                        null,
	                                        (0, _preact.h)(
	                                            'td',
	                                            { className: 'cell' },
	                                            'Early bird (till 20-2-2017)'
	                                        ),
	                                        (0, _preact.h)(
	                                            'td',
	                                            { className: 'cell' },
	                                            'Till 20-3-2017'
	                                        ),
	                                        (0, _preact.h)(
	                                            'td',
	                                            { className: 'cell' },
	                                            'On Spot'
	                                        )
	                                    )
	                                )
	                            ),
	                            (0, _preact.h)(
	                                'td',
	                                null,
	                                'Registration open till 10 - 3 - 2017'
	                            )
	                        ),
	                        _feesUtils.RegistrationFeesData.map(function (item) {
	                            return (0, _preact.h)(
	                                'tr',
	                                null,
	                                (0, _preact.h)(
	                                    'td',
	                                    null,
	                                    item.code
	                                ),
	                                (0, _preact.h)(
	                                    'td',
	                                    null,
	                                    item.name
	                                ),
	                                (0, _preact.h)(
	                                    'td',
	                                    null,
	                                    (0, _preact.h)(
	                                        'table',
	                                        { style: 'width:100%' },
	                                        (0, _preact.h)(
	                                            'tr',
	                                            null,
	                                            (0, _preact.h)(
	                                                'td',
	                                                { className: 'cell' },
	                                                item.currency,
	                                                ' ',
	                                                item.fees[0],
	                                                '/-'
	                                            ),
	                                            (0, _preact.h)(
	                                                'td',
	                                                { className: 'cell' },
	                                                item.currency,
	                                                ' ',
	                                                item.fees[1],
	                                                '/-'
	                                            ),
	                                            (0, _preact.h)(
	                                                'td',
	                                                { className: 'cell' },
	                                                item.currency,
	                                                ' ',
	                                                item.fees[2],
	                                                '/-'
	                                            )
	                                        )
	                                    )
	                                ),
	                                (0, _preact.h)(
	                                    'td',
	                                    null,
	                                    item.currency,
	                                    ' ',
	                                    item.preconffees,
	                                    '/-'
	                                )
	                            );
	                        })
	                    )
	                )
	            );
	        }
	    }]);

	    return RegistrationFees;
	}(_preact.Component);

	exports.default = RegistrationFees;

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var RegistrationFeesData = [{
	    code: 'A',
	    currency: 'INR',
	    name: 'PROFESSIONAL',
	    fees: ['4000', '5000', '6000'],
	    preconffees: '3000'
	}, {
	    code: 'B',
	    currency: 'INR',
	    name: 'STUDENTS',
	    fees: ['1500', '2000', '2500'],
	    preconffees: '1000'
	}, {
	    code: 'C',
	    currency: 'USD',
	    name: 'International Professionals',
	    fees: ['500', '600', '700'],
	    preconffees: '200'
	}, {
	    code: 'D',
	    currency: 'USD',
	    name: 'International Students',
	    fees: ['200', '300', '400'],
	    preconffees: '100'
	}, {
	    code: 'E',
	    currency: 'USD',
	    name: 'International Professional (LMIC)',
	    fees: ['300', '400', '500'],
	    preconffees: '100'
	}, {
	    code: 'F',
	    currency: 'USD',
	    name: 'International Students (LMIC)',
	    fees: ['100', '200', '300'],
	    preconffees: '50'
	}];

	function calcFees(occupation, attendingConf, attendingWorkshop) {
	    var fees = 0;
	    RegistrationFeesData.forEach(function (e) {
	        if (e.name === occupation) {
	            attendingConf && e.currency === 'INR' && (fees += e.fees[0]);
	            attendingConf && e.currency === 'USD' && (fees += e.fees[0] * 67);
	            attendingWorkshop && Number.isInteger(e.preconffees) && (fees += e.preconffees);
	        }
	    });
	    return parseInt(fees);
	}

	exports.RegistrationFeesData = RegistrationFeesData;
	exports.calcFees = calcFees;

/***/ },
/* 30 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preact = __webpack_require__(1);

	var _LoginSignup = __webpack_require__(24);

	var _LoginSignup2 = _interopRequireDefault(_LoginSignup);

	var _feesUtils = __webpack_require__(29);

	__webpack_require__(33);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Register = function (_Component) {
	    _inherits(Register, _Component);

	    function Register() {
	        _classCallCheck(this, Register);

	        return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).apply(this, arguments));
	    }

	    _createClass(Register, [{
	        key: 'register',
	        value: function register() {
	            var _this2 = this;

	            fetch('/user/register', {
	                method: 'POST',
	                headers: new Headers({
	                    'content-type': 'application/json'
	                }),
	                credentials: 'include',
	                body: JSON.stringify({
	                    name: this.regname.value,
	                    phone: this.regphone.value,
	                    attendingConf: this.regconf.checked,
	                    attendingWorkshop: this.regworkshop.checked,
	                    occupation: this.regoccupation.value
	                })
	            }).then(function (res) {
	                if (res.ok) {
	                    return res.json();
	                } else {
	                    throw new Error('');
	                }
	            }).then(function (res) {
	                _this2.props.doneRegistration && _this2.props.doneRegistration(res);
	            }).catch(function (e) {
	                alert('Cannot Register, please try again after sometime.');
	            });
	        }
	    }, {
	        key: 'pay',
	        value: function pay() {
	            var _this3 = this;

	            var amount = (0, _feesUtils.calcFees)(this.props.user.occupation, this.props.user.registeredForConf, this.props.user.registeredForWorkshop) * 100;
	            var desc = 'Registration fees for: ';
	            if (this.props.user.attendingConf) {
	                desc += "Attending conference, ";
	            }
	            if (this.props.user.attendingWorkshop) {
	                desc += "Attending workshop, ";
	            }
	            var options = {
	                "key": "rzp_test_TrPU5mYt8jVAkR",
	                amount: amount,
	                "name": "ICYAAH",
	                "description": desc,
	                "image": "/images/logo.png",
	                "handler": function handler(response) {
	                    _this3.sendPayment(response.razorpay_payment_id, amount);
	                },
	                "prefill": {
	                    "name": this.props.user.name,
	                    "email": this.props.user.email,
	                    "phone": this.props.user.phone
	                }
	            };
	            var rzp = new Razorpay(options);
	            rzp.open();
	        }
	    }, {
	        key: 'sendPayment',
	        value: function sendPayment(payment_id, amount) {
	            var _this4 = this;

	            fetch('/user/pay', {
	                method: 'POST',
	                headers: new Headers({
	                    'content-type': 'application/json'
	                }),
	                credentials: 'include',
	                body: JSON.stringify({
	                    payment_id: payment_id,
	                    amount: amount
	                })
	            }).then(function (res) {
	                if (res.ok) {
	                    return res.json();
	                } else {
	                    throw new Error('');
	                }
	            }).then(function (res) {
	                _this4.props.paymentDone && _this4.props.paymentDone(res);
	            }).catch(function (e) {
	                alert('Payment failed.');
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this5 = this;

	            return (0, _preact.h)(
	                'div',
	                { className: 'page page-register' },
	                (0, _preact.h)(
	                    'div',
	                    { className: 'content-register' },
	                    (0, _preact.h)(
	                        'h2',
	                        { className: 'typl8-delta' },
	                        'Start Registering'
	                    ),
	                    (0, _preact.h)(
	                        'p',
	                        null,
	                        this.props.user && this.props.user.email ? (0, _preact.h)(
	                            'div',
	                            { className: 'registration' },
	                            this.props.user.registrationDone ? (0, _preact.h)(
	                                'div',
	                                { className: 'msg' },
	                                this.props.user.paymentDone ? (0, _preact.h)(
	                                    'div',
	                                    { className: 'complete' },
	                                    (0, _preact.h)(
	                                        'div',
	                                        null,
	                                        'Congrats your payment is done with id: ',
	                                        this.props.user.payment_id
	                                    )
	                                ) : (0, _preact.h)(
	                                    'div',
	                                    { className: 'payment-step' },
	                                    (0, _preact.h)(
	                                        'div',
	                                        null,
	                                        (0, _preact.h)(
	                                            'label',
	                                            null,
	                                            (0, _preact.h)('input', { ref: function ref(e) {
	                                                    return _this5.regconf = e;
	                                                }, type: 'checkbox', disabled: true, checked: this.props.user.registeredForConf || true }),
	                                            'Attending Conference'
	                                        )
	                                    ),
	                                    (0, _preact.h)(
	                                        'div',
	                                        null,
	                                        (0, _preact.h)(
	                                            'label',
	                                            null,
	                                            (0, _preact.h)('input', { ref: function ref(e) {
	                                                    return _this5.regworkshop = e;
	                                                }, type: 'checkbox', disabled: true, checked: this.props.user.registeredForWorkshop || false }),
	                                            'Attending Pre-Conference Workshop'
	                                        )
	                                    ),
	                                    (0, _preact.h)(
	                                        'div',
	                                        null,
	                                        (0, _preact.h)(
	                                            'button',
	                                            { onClick: this.pay.bind(this) },
	                                            'PAY ',
	                                            (0, _feesUtils.calcFees)(this.props.user.occupation, this.props.user.registeredForConf, this.props.user.registeredForWorkshop)
	                                        )
	                                    )
	                                )
	                            ) : (0, _preact.h)(
	                                'div',
	                                { className: 'regForm' },
	                                (0, _preact.h)(
	                                    'div',
	                                    null,
	                                    (0, _preact.h)('input', { className: 'typl8-zeta ', ref: function ref(e) {
	                                            return _this5.regname = e;
	                                        }, placeholder: 'full name', value: this.props.user.name })
	                                ),
	                                (0, _preact.h)(
	                                    'div',
	                                    null,
	                                    (0, _preact.h)('input', { className: 'typl8-zeta ', ref: function ref(e) {
	                                            return _this5.regphone = e;
	                                        }, maxLength: '10', placeholder: 'phonenumber', value: this.props.user.phone })
	                                ),
	                                (0, _preact.h)(
	                                    'div',
	                                    null,
	                                    (0, _preact.h)(
	                                        'label',
	                                        null,
	                                        (0, _preact.h)('input', { ref: function ref(e) {
	                                                return _this5.regconf = e;
	                                            }, type: 'checkbox', maxLength: '10', checked: this.props.user.registeredForConf || true }),
	                                        'Attending Conference'
	                                    )
	                                ),
	                                (0, _preact.h)(
	                                    'div',
	                                    null,
	                                    (0, _preact.h)(
	                                        'label',
	                                        null,
	                                        (0, _preact.h)('input', { ref: function ref(e) {
	                                                return _this5.regworkshop = e;
	                                            }, type: 'checkbox', maxLength: '10', checked: this.props.user.registeredForWorkshop || false }),
	                                        'Attending Pre-Conference Workshop'
	                                    )
	                                ),
	                                (0, _preact.h)(
	                                    'div',
	                                    null,
	                                    (0, _preact.h)(
	                                        'label',
	                                        null,
	                                        'Select occupation'
	                                    ),
	                                    (0, _preact.h)(
	                                        'select',
	                                        { ref: function ref(e) {
	                                                return _this5.regoccupation = e;
	                                            } },
	                                        _feesUtils.RegistrationFeesData.map(function (e) {
	                                            return (0, _preact.h)(
	                                                'option',
	                                                null,
	                                                e.name
	                                            );
	                                        })
	                                    )
	                                ),
	                                (0, _preact.h)(
	                                    'div',
	                                    { className: 'note' },
	                                    '*LMIC: Lower middle income coutry'
	                                ),
	                                (0, _preact.h)(
	                                    'div',
	                                    null,
	                                    (0, _preact.h)(
	                                        'button',
	                                        { onClick: this.register.bind(this) },
	                                        'Register'
	                                    )
	                                )
	                            )
	                        ) : (0, _preact.h)(
	                            'div',
	                            { className: 'login' },
	                            (0, _preact.h)(_LoginSignup2.default, this.props)
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Register;
	}(_preact.Component);

	exports.default = Register;

/***/ },
/* 33 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 34 */,
/* 35 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 36 */,
/* 37 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 38 */,
/* 39 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 40 */,
/* 41 */
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

	var ContactUS = function (_Component) {
	    _inherits(ContactUS, _Component);

	    function ContactUS() {
	        _classCallCheck(this, ContactUS);

	        return _possibleConstructorReturn(this, (ContactUS.__proto__ || Object.getPrototypeOf(ContactUS)).apply(this, arguments));
	    }

	    _createClass(ContactUS, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            setTimeout(function () {
	                window.init_map();
	            }, 2000);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return (0, _preact.h)(
	                'div',
	                { className: 'page page-contact us' },
	                (0, _preact.h)(
	                    'div',
	                    { className: 'content-contact us' },
	                    (0, _preact.h)(
	                        'h2',
	                        { className: 'typl8-gamma' },
	                        'Contact Us'
	                    ),
	                    (0, _preact.h)(
	                        'div',
	                        null,
	                        (0, _preact.h)(
	                            'h6',
	                            null,
	                            'For any information / question, kindly contact :'
	                        ),
	                        (0, _preact.h)(
	                            'div',
	                            { style: 'font-size:14px' },
	                            (0, _preact.h)(
	                                'div',
	                                null,
	                                'Dr. Jugal Kishore'
	                            ),
	                            (0, _preact.h)(
	                                'div',
	                                null,
	                                (0, _preact.h)(
	                                    'b',
	                                    null,
	                                    'Mobile:'
	                                ),
	                                ' +91-9582792331'
	                            ),
	                            (0, _preact.h)(
	                                'div',
	                                null,
	                                (0, _preact.h)(
	                                    'b',
	                                    null,
	                                    'EMail:'
	                                ),
	                                ' ',
	                                (0, _preact.h)(
	                                    'a',
	                                    { href: 'mailto:icyah.foundation@gmail.com' },
	                                    'icyah.foundation@gmail.com'
	                                )
	                            ),
	                            (0, _preact.h)(
	                                'div',
	                                null,
	                                (0, _preact.h)(
	                                    'b',
	                                    null,
	                                    'Site:'
	                                ),
	                                ' ',
	                                (0, _preact.h)(
	                                    'a',
	                                    { href: 'http://icyah.org' },
	                                    'icyah.org'
	                                )
	                            )
	                        )
	                    ),
	                    (0, _preact.h)(
	                        'h6',
	                        { style: 'margin:25px 0 8px' },
	                        'Location:'
	                    ),
	                    (0, _preact.h)(
	                        'div',
	                        { style: 'overflow:hidden;height:350px;width:700px;' },
	                        (0, _preact.h)('div', { id: 'gmap_canvas', style: 'height:440px;width:700px;' }),
	                        (0, _preact.h)(
	                            'div',
	                            null,
	                            (0, _preact.h)(
	                                'small',
	                                null,
	                                (0, _preact.h)(
	                                    'a',
	                                    { href: 'http://embedgooglemaps.com' },
	                                    'embed google maps'
	                                )
	                            )
	                        ),
	                        (0, _preact.h)(
	                            'div',
	                            null,
	                            (0, _preact.h)(
	                                'small',
	                                null,
	                                (0, _preact.h)(
	                                    'a',
	                                    { href: 'https://privacypolicygenerator.info' },
	                                    'privacy policy generator'
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return ContactUS;
	}(_preact.Component);

	exports.default = ContactUS;

/***/ }
]);