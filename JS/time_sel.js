var shijianxuan = null;
function time_sel_true(y, m, d, h, i) {
	shijianxuan = {
		y: y,
		m: m,
		d: d,
		h: h,
		i: i
	}
};
var sjxz = {
	ssjrq(e, dt) {
		var data = new TIME_SEL_OP("", time_sel_true);

		data.chushihua(e, 1000, 2050);
		data.set_time_sel(dt.y, dt.m, dt.d, dt.h, dt.i)
		data.tanchu();
		return new Promise(function (resolve, reject) {
			var int = setInterval(function () {
				if (shijianxuan != null) {
					clearInterval(int)
					resolve(shijianxuan)
					shijianxuan = null
				}

			}, 100);
		})
	}
};



var mui = (function (document, undefined) {
	var readyRE = /complete|loaded|interactive/;
	var idSelectorRE = /^#([\w-]+)$/;
	var classSelectorRE = /^\.([\w-]+)$/;
	var tagSelectorRE = /^[\w-]+$/;

	var $ = function (selector, context) {
		context = context || document;
		if (!selector)
			return wrap();
		if (typeof selector === 'object')
			if ($.isArrayLike(selector)) {
				return wrap($.slice.call(selector), null);
			} else {
				return wrap([selector], null);
			}
		if (typeof selector === 'function')
			return $.ready(selector);
		if (typeof selector === 'string') {
			try {
				selector = selector.trim();
				if (idSelectorRE.test(selector)) {
					var found = document.getElementById(RegExp.$1);
					return wrap(found ? [found] : []);
				}
				return wrap($.qsa(selector, context), selector);
			} catch (e) { }
		}
		return wrap();
	};
	var wrap = function (dom, selector) {
		dom = dom || [];
		Object.setPrototypeOf(dom, $.fn);
		dom.selector = selector || '';
		return dom;
	};
	$.uuid = 0;
	$.data = {};
	$.slice = [].slice;
	$.type = function (obj) {
		return obj == null ? String(obj) : class2type[{}.toString.call(obj)] || "object";
	};
	$.isArray = Array.isArray ||
		function (object) {
			return object instanceof Array;
		};
	$.isFunction = function (value) {
		return $.type(value) === "function";
	};
	$.qsa = function (selector, context) {
		context = context || document;
		return $.slice.call(classSelectorRE.test(selector) ? context.getElementsByClassName(RegExp.$1) : tagSelectorRE.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector));
	};
	$.ready = function (callback) {
		if (readyRE.test(document.readyState)) {
			callback($);
		} else {
			document.addEventListener('DOMContentLoaded', function () {
				callback($);
			}, false);
		}
		return this;
	};
	$.each = function (elements, callback, hasOwnProperty) {
		if (!elements) {
			return this;
		}
		if (typeof elements.length === 'number') {
			[].every.call(elements, function (el, idx) {
				return callback.call(el, idx, el) !== false;
			});
		} else {
			for (var key in elements) {
				if (hasOwnProperty) {
					if (elements.hasOwnProperty(key)) {
						if (callback.call(elements[key], key, elements[key]) === false) return elements;
					}
				} else {
					if (callback.call(elements[key], key, elements[key]) === false) return elements;
				}
			}
		}
		return this;
	};
	$.trigger = function (element, eventType, eventData) {
		if (element != null && element != undefined) { //蓝鸟修改，增加了对element是否为空的判断，设置下拉框的现行选中项
			element.dispatchEvent(new CustomEvent(eventType, {
				detail: eventData,
				bubbles: true,
				cancelable: true
			}));
		}
		return this;
	};
	$.hooks = {};
	$.addAction = function (type, hook) {
		var hooks = $.hooks[type];
		if (!hooks) {
			hooks = [];
		}
		hook.index = hook.index || 1000;
		hooks.push(hook);
		hooks.sort(function (a, b) {
			return a.index - b.index;
		});
		$.hooks[type] = hooks;
		return $.hooks[type];
	};
	$.doAction = function (type, callback) {
		if ($.isFunction(callback)) { //指定了callback
			$.each($.hooks[type], callback);
		} else { //未指定callback，直接执行
			$.each($.hooks[type], function (index, hook) {
				return !hook.handle();
			});
		}
	};
	$.later = function (fn, when, context, data) {
		when = when || 0;
		var m = fn;
		var d = data;
		var f;
		var r;

		if (typeof fn === 'string') {
			m = context[fn];
		}

		f = function () {
			m.apply(context, $.isArray(d) ? d : [d]);
		};

		r = setTimeout(f, when);

		return {
			id: r,
			cancel: function () {
				clearTimeout(r);
			}
		};
	};
	$.now = Date.now || function () {
		return +new Date();
	};
	var class2type = {};
	$.each(['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error'], function (i, name) {
		class2type["[object " + name + "]"] = name.toLowerCase();
	});
	if (window.JSON) {
		$.parseJSON = JSON.parse;
	}
	/**
	 * $.fn
	 */
	$.fn = {
		each: function (callback) {
			[].every.call(this, function (el, idx) {
				return callback.call(el, idx, el) !== false;
			});
			return this;
		}
	};

	return $;
})(document);
(function ($) {
	if ('ontouchstart' in window) {
		$.isTouchable = true;
		$.EVENT_START = 'touchstart';
		$.EVENT_MOVE = 'touchmove';
		$.EVENT_END = 'touchend';
	} else {
		$.isTouchable = false;
		$.EVENT_START = 'mousedown';
		$.EVENT_MOVE = 'mousemove';
		$.EVENT_END = 'mouseup';
	}
	$.EVENT_CANCEL = 'touchcancel';
	$.EVENT_CLICK = 'click';
})(mui);
(function ($) {
	$.namespace = 'mui';
	$.classNamePrefix = $.namespace + '-';
	$.classSelectorPrefix = '.' + $.classNamePrefix;
	/**
	 * 返回正确的className
	 * @param {type} className
	 * @returns {String}
	 */
	$.className = function (className) {
		return $.classNamePrefix + className;
	};
})(mui);

/**
 * mui gestures
 * @param {type} $
 * @param {type} window
 * @returns {undefined}
 */
(function ($, window) {
	$.gestures = {
		session: {}
	};
	$.addGesture = function (gesture) {
		return $.addAction('gestures', gesture);

	};
	var round = Math.round;
	var abs = Math.abs;
	var sqrt = Math.sqrt;
	var atan2 = Math.atan2;
	/**
	 * distance
	 * @param {type} p1
	 * @param {type} p2
	 * @returns {Number}
	 */
	var getDistance = function (p1, p2, props) {
		if (!props) {
			props = ['x', 'y'];
		}
		var x = p2[props[0]] - p1[props[0]];
		var y = p2[props[1]] - p1[props[1]];
		return sqrt((x * x) + (y * y));
	};
	/**
	 * scale
	 * @param {Object} starts
	 * @param {Object} moves
	 */
	var getScale = function (starts, moves) {
		if (starts.length >= 2 && moves.length >= 2) {
			var props = ['pageX', 'pageY'];
			return getDistance(moves[1], moves[0], props) / getDistance(starts[1], starts[0], props);
		}
		return 1;
	};
	/**
	 * angle
	 * @param {type} p1
	 * @param {type} p2
	 * @returns {Number}
	 */
	var getAngle = function (p1, p2, props) {
		if (!props) {
			props = ['x', 'y'];
		}
		var x = p2[props[0]] - p1[props[0]];
		var y = p2[props[1]] - p1[props[1]];
		return atan2(y, x) * 180 / Math.PI;
	};
	var getDirection = function (x, y) {
		if (x === y) {
			return '';
		}
		if (abs(x) >= abs(y)) {
			return x > 0 ? 'left' : 'right';
		}
		return y > 0 ? 'up' : 'down';
	};
	var getVelocity = function (deltaTime, x, y) {
		return {
			x: x / deltaTime || 0,
			y: y / deltaTime || 0
		};
	};
	var detect = function (event, touch) {
		if ($.gestures.stoped) {
			return;
		}
		$.doAction('gestures', function (index, gesture) {
			if (!$.gestures.stoped) {
				if ($.options.gestureConfig[gesture.name] !== false) {
					gesture.handle(event, touch);
				}
			}
		});
	};

	var hasParent = function (node, parent) {
		while (node) {
			if (node == parent) {
				return true;
			}
			node = node.parentNode;
		}
		return false;
	};
	var uniqueArray = function (src, key, sort) {
		var results = [];
		var values = [];
		var i = 0;

		while (i < src.length) {
			var val = key ? src[i][key] : src[i];
			if (values.indexOf(val) < 0) {
				results.push(src[i]);
			}
			values[i] = val;
			i++;
		}

		if (sort) {
			if (!key) {
				results = results.sort();
			} else {
				results = results.sort(function sortUniqueArray(a, b) {
					return a[key] > b[key];
				});
			}
		}

		return results;
	};
	var getMultiCenter = function (touches) {
		var touchesLength = touches.length;
		if (touchesLength === 1) {
			return {
				x: round(touches[0].pageX),
				y: round(touches[0].pageY)
			};
		}

		var x = 0;
		var y = 0;
		var i = 0;
		while (i < touchesLength) {
			x += touches[i].pageX;
			y += touches[i].pageY;
			i++;
		}

		return {
			x: round(x / touchesLength),
			y: round(y / touchesLength)
		};
	};
	var multiTouch = function () {
		return $.options.gestureConfig.pinch;
	};
	var copySimpleTouchData = function (touch) {
		var touches = [];
		var i = 0;
		while (i < touch.touches.length) {
			touches[i] = {
				pageX: round(touch.touches[i].pageX),
				pageY: round(touch.touches[i].pageY)
			};
			i++;
		}
		return {
			timestamp: $.now(),
			gesture: touch.gesture,
			touches: touches,
			center: getMultiCenter(touch.touches),
			deltaX: touch.deltaX,
			deltaY: touch.deltaY
		};
	};

	var calDelta = function (touch) {
		var session = $.gestures.session;
		var center = touch.center;
		var offset = session.offsetDelta || {};
		var prevDelta = session.prevDelta || {};
		var prevTouch = session.prevTouch || {};

		if (touch.gesture.type === $.EVENT_START || touch.gesture.type === $.EVENT_END) {
			prevDelta = session.prevDelta = {
				x: prevTouch.deltaX || 0,
				y: prevTouch.deltaY || 0
			};

			offset = session.offsetDelta = {
				x: center.x,
				y: center.y
			};
		}
		touch.deltaX = prevDelta.x + (center.x - offset.x);
		touch.deltaY = prevDelta.y + (center.y - offset.y);
	};
	var calTouchData = function (touch) {
		var session = $.gestures.session;
		var touches = touch.touches;
		var touchesLength = touches.length;

		if (!session.firstTouch) {
			session.firstTouch = copySimpleTouchData(touch);
		}

		if (multiTouch() && touchesLength > 1 && !session.firstMultiTouch) {
			session.firstMultiTouch = copySimpleTouchData(touch);
		} else if (touchesLength === 1) {
			session.firstMultiTouch = false;
		}

		var firstTouch = session.firstTouch;
		var firstMultiTouch = session.firstMultiTouch;
		var offsetCenter = firstMultiTouch ? firstMultiTouch.center : firstTouch.center;

		var center = touch.center = getMultiCenter(touches);
		touch.timestamp = $.now();
		touch.deltaTime = touch.timestamp - firstTouch.timestamp;

		touch.angle = getAngle(offsetCenter, center);
		touch.distance = getDistance(offsetCenter, center);

		calDelta(touch);

		touch.offsetDirection = getDirection(touch.deltaX, touch.deltaY);

		touch.scale = firstMultiTouch ? getScale(firstMultiTouch.touches, touches) : 1;
		touch.rotation = firstMultiTouch ? getRotation(firstMultiTouch.touches, touches) : 0;

		calIntervalTouchData(touch);

	};
	var CAL_INTERVAL = 25;
	var calIntervalTouchData = function (touch) {
		var session = $.gestures.session;
		var last = session.lastInterval || touch;
		var deltaTime = touch.timestamp - last.timestamp;
		var velocity;
		var velocityX;
		var velocityY;
		var direction;

		if (touch.gesture.type != $.EVENT_CANCEL && (deltaTime > CAL_INTERVAL || last.velocity === undefined)) {
			var deltaX = last.deltaX - touch.deltaX;
			var deltaY = last.deltaY - touch.deltaY;

			var v = getVelocity(deltaTime, deltaX, deltaY);
			velocityX = v.x;
			velocityY = v.y;
			velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
			direction = getDirection(deltaX, deltaY) || last.direction;

			session.lastInterval = touch;
		} else {
			velocity = last.velocity;
			velocityX = last.velocityX;
			velocityY = last.velocityY;
			direction = last.direction;
		}

		touch.velocity = velocity;
		touch.velocityX = velocityX;
		touch.velocityY = velocityY;
		touch.direction = direction;
	};
	var targetIds = {};
	var convertTouches = function (touches) {
		for (var i = 0; i < touches.length; i++) {
			!touches['identifier'] && (touches['identifier'] = 0);
		}
		return touches;
	};
	var getTouches = function (event, touch) {
		var allTouches = convertTouches($.slice.call(event.touches || [event]));

		var type = event.type;

		var targetTouches = [];
		var changedTargetTouches = [];

		//当touchstart或touchmove且touches长度为1，直接获得all和changed
		if ((type === $.EVENT_START || type === $.EVENT_MOVE) && allTouches.length === 1) {
			targetIds[allTouches[0].identifier] = true;
			targetTouches = allTouches;
			changedTargetTouches = allTouches;
			touch.target = event.target;
		} else {
			var i = 0;
			var targetTouches = [];
			var changedTargetTouches = [];
			var changedTouches = convertTouches($.slice.call(event.changedTouches || [event]));

			touch.target = event.target;
			var sessionTarget = $.gestures.session.target || event.target;
			targetTouches = allTouches.filter(function (touch) {
				return hasParent(touch.target, sessionTarget);
			});

			if (type === $.EVENT_START) {
				i = 0;
				while (i < targetTouches.length) {
					targetIds[targetTouches[i].identifier] = true;
					i++;
				}
			}

			i = 0;
			while (i < changedTouches.length) {
				if (targetIds[changedTouches[i].identifier]) {
					changedTargetTouches.push(changedTouches[i]);
				}
				if (type === $.EVENT_END || type === $.EVENT_CANCEL) {
					delete targetIds[changedTouches[i].identifier];
				}
				i++;
			}

			if (!changedTargetTouches.length) {
				return false;
			}
		}
		targetTouches = uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true);
		var touchesLength = targetTouches.length;
		var changedTouchesLength = changedTargetTouches.length;
		if (type === $.EVENT_START && touchesLength - changedTouchesLength === 0) { //first
			touch.isFirst = true;
			$.gestures.touch = $.gestures.session = {
				target: event.target
			};
		}
		touch.isFinal = ((type === $.EVENT_END || type === $.EVENT_CANCEL) && (touchesLength - changedTouchesLength === 0));

		touch.touches = targetTouches;
		touch.changedTouches = changedTargetTouches;
		return true;

	};
	var handleTouchEvent = function (event) {
		var touch = {
			gesture: event
		};
		var touches = getTouches(event, touch);
		if (!touches) {
			return;
		}
		calTouchData(touch);
		detect(event, touch);
		$.gestures.session.prevTouch = touch;
		if (event.type === $.EVENT_END && !$.isTouchable) {
			$.gestures.touch = $.gestures.session = {};
		}
	};
	window.addEventListener($.EVENT_START, handleTouchEvent);
	window.addEventListener($.EVENT_MOVE, handleTouchEvent);
	window.addEventListener($.EVENT_END, handleTouchEvent);
	window.addEventListener($.EVENT_CANCEL, handleTouchEvent);
	//fixed hashchange(android)



	//增加原生滚动识别
	$.isScrolling = false;
	var scrollingTimeout = null;
	window.addEventListener('scroll', function () {
		$.isScrolling = true;
		scrollingTimeout && clearTimeout(scrollingTimeout);
		scrollingTimeout = setTimeout(function () {
			$.isScrolling = false;
		}, 250);
	});
})(mui, window);
/**
 * mui gesture flick[left|right|up|down]
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */

/**
 * mui gesture swipe[left|right|up|down]
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
	var handle = function (event, touch) {
		var session = $.gestures.session;
		if (event.type === $.EVENT_END || event.type === $.EVENT_CANCEL) {
			var options = this.options;
			touch.swipe = false;
			//TODO 后续根据velocity计算
			if (touch.direction && options.swipeMaxTime > touch.deltaTime && touch.distance > options.swipeMinDistince) {
				touch.swipe = true;
				$.trigger(session.target, name, touch);
				$.trigger(session.target, name + touch.direction, touch);
			}
		}
	};
	/**
	 * mui gesture swipe
	 */
	$.addGesture({
		name: name,
		index: 10,
		handle: handle,
		options: {
			swipeMaxTime: 300,
			swipeMinDistince: 18
		}
	});
})(mui, 'swipe');
/**
 * mui gesture drag[start|left|right|up|down|end]
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
	var handle = function (event, touch) {
		var session = $.gestures.session;
		switch (event.type) {
			case $.EVENT_START:
				break;
			case $.EVENT_MOVE:
				if (!touch.direction || !session.target) {
					return;
				}
				//修正direction,可在session期间自行锁定拖拽方向，方便开发scroll类不同方向拖拽插件嵌套
				if (session.lockDirection && session.startDirection) {
					if (session.startDirection && session.startDirection !== touch.direction) {
						if (session.startDirection === 'up' || session.startDirection === 'down') {
							touch.direction = touch.deltaY < 0 ? 'up' : 'down';
						} else {
							touch.direction = touch.deltaX < 0 ? 'left' : 'right';
						}
					}
				}

				if (!session.drag) {
					session.drag = true;
					$.trigger(session.target, name + 'start', touch);
				}
				$.trigger(session.target, name, touch);
				$.trigger(session.target, name + touch.direction, touch);
				break;
			case $.EVENT_END:
			case $.EVENT_CANCEL:
				if (session.drag && touch.isFinal) {
					$.trigger(session.target, name + 'end', touch);
				}
				break;
		}
	};
	/**
	 * mui gesture drag
	 */
	$.addGesture({
		name: name,
		index: 20,
		handle: handle,
		options: {
			fingers: 1
		}
	});
})(mui, 'drag');
/**
 * mui gesture tap and doubleTap
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
	var lastTarget;
	var lastTapTime;
	var handle = function (event, touch) {
		var session = $.gestures.session;
		var options = this.options;
		switch (event.type) {
			case $.EVENT_END:
				if (!touch.isFinal) {
					return;
				}
				var target = session.target;
				if (!target || (target.disabled || (target.classList && target.classList.contains('mui-disabled')))) {
					return;
				}
				if (touch.distance < options.tapMaxDistance && touch.deltaTime < options.tapMaxTime) {
					if ($.options.gestureConfig.doubletap && lastTarget && (lastTarget === target)) { //same target
						if (lastTapTime && (touch.timestamp - lastTapTime) < options.tapMaxInterval) {
							$.trigger(target, 'doubletap', touch);
							lastTapTime = $.now();
							lastTarget = target;
							return;
						}
					}
					$.trigger(target, name, touch);
					lastTapTime = $.now();
					lastTarget = target;
				}
				break;
		}
	};
	/**
	 * mui gesture tap
	 */
	$.addGesture({
		name: name,
		index: 30,
		handle: handle,
		options: {
			fingers: 1,
			tapMaxInterval: 300,
			tapMaxDistance: 5,
			tapMaxTime: 250
		}
	});
})(mui, 'tap');
/**
 * mui gesture longtap
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */

/**
 * mui gesture hold
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
	var timer;
	var handle = function (event, touch) {
		var session = $.gestures.session;
		var options = this.options;
		switch (event.type) {
			case $.EVENT_START:
				if ($.options.gestureConfig.hold) {
					timer && clearTimeout(timer);
					timer = setTimeout(function () {
						touch.hold = true;
						$.trigger(session.target, name, touch);
					}, options.holdTimeout);
				}
				break;
			case $.EVENT_MOVE:
				break;
			case $.EVENT_END:
			case $.EVENT_CANCEL:
				if (timer) {
					clearTimeout(timer) && (timer = null);
					$.trigger(session.target, 'release', touch);
				}
				break;
		}
	};
	/**
	 * mui gesture hold
	 */
	$.addGesture({
		name: name,
		index: 10,
		handle: handle,
		options: {
			fingers: 1,
			holdTimeout: 0
		}
	});
})(mui, 'hold');







(function ($) {//okkkkkkkkkkkkkk
	$.global = $.options = {
		gestureConfig: {
			tap: true,
			doubletap: false,
			longtap: false,
			hold: false,
			flick: true,
			swipe: true,
			drag: true,
			pinch: false
		}
	};
})(mui);





/**
 * mui animation
 */
(function ($, window) {
	/**
	 * scrollTo
	 */
	$.scrollTo = function (scrollTop, duration, callback) {
		duration = duration || 1000;
		var scroll = function (duration) {
			if (duration <= 0) {
				window.scrollTo(0, scrollTop);
				callback && callback();
				return;
			}
			var distaince = scrollTop - window.scrollY;
			setTimeout(function () {
				window.scrollTo(0, window.scrollY + distaince / duration * 10);
				scroll(duration - 10);
			}, 16.7);
		};
		scroll(duration);
	};
	$.animationFrame = function (cb) {
		var args, isQueued, context;
		return function () {
			args = arguments;
			context = this;
			if (!isQueued) {
				isQueued = true;
				requestAnimationFrame(function () {
					cb.apply(context, args);
					isQueued = false;
				});
			}
		};
	};

})(mui, window);


(function ($) {
	var initializing = false,
		fnTest = /xyz/.test(function () {
			xyz;
		}) ? /\b_super\b/ : /.*/;

	var Class = function () { };
	Class.extend = function (prop) {
		var _super = this.prototype;
		initializing = true;
		var prototype = new this();
		initializing = false;
		for (var name in prop) {
			prototype[name] = typeof prop[name] == "function" &&
				typeof _super[name] == "function" && fnTest.test(prop[name]) ?
				(function (name, fn) {
					return function () {
						var tmp = this._super;

						this._super = _super[name];

						var ret = fn.apply(this, arguments);
						this._super = tmp;

						return ret;
					};
				})(name, prop[name]) :
				prop[name];
		}
		function Class() {
			if (!initializing && this.init)
				this.init.apply(this, arguments);
		}
		Class.prototype = prototype;
		Class.prototype.constructor = Class;
		Class.extend = arguments.callee;
		return Class;
	};
	$.Class = Class;
})(mui);

(function ($, window, document, undefined) {
	var CLASS_SCROLL = 'mui-scroll';
	var CLASS_SCROLLBAR = 'mui-scrollbar';
	var CLASS_INDICATOR = 'mui-scrollbar-indicator';
	var CLASS_SCROLLBAR_VERTICAL = CLASS_SCROLLBAR + '-vertical';
	var CLASS_SCROLLBAR_HORIZONTAL = CLASS_SCROLLBAR + '-horizontal';

	var CLASS_ACTIVE = 'mui-active';

	var ease = {
		quadratic: {
			style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			fn: function (k) {
				return k * (2 - k);
			}
		},
		circular: {
			style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
			fn: function (k) {
				return Math.sqrt(1 - (--k * k));
			}
		},
		outCirc: {
			style: 'cubic-bezier(0.075, 0.82, 0.165, 1)'
		},
		outCubic: {
			style: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
		}
	}
	var Scroll = $.Class.extend({
		init: function (element, options) {
			this.wrapper = this.element = element;
			this.scroller = this.wrapper.children[0];
			this.scrollerStyle = this.scroller && this.scroller.style;
			this.stopped = false;

			this.options = $.extend(true, {
				scrollY: true, //是否竖向滚动
				scrollX: false, //是否横向滚动
				startX: 0, //初始化时滚动至x
				startY: 0, //初始化时滚动至y

				indicators: true, //是否显示滚动条
				stopPropagation: false,
				hardwareAccelerated: true,
				fixedBadAndorid: false,
				preventDefaultException: {
					tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|VIDEO)$/
				},
				momentum: true,

				snapX: 0.5, //横向切换距离(以当前容器宽度为基准)
				snap: false, //图片轮播，拖拽式选项卡

				bounce: true, //是否启用回弹
				bounceTime: 500, //回弹动画时间
				bounceEasing: ease.outCirc, //回弹动画曲线

				scrollTime: 500,
				scrollEasing: ease.outCubic, //轮播动画曲线

				directionLockThreshold: 5,

				parallaxElement: false, //视差元素
				parallaxRatio: 0.5
			}, options);

			this.x = 0;
			this.y = 0;
			this.translateZ = this.options.hardwareAccelerated ? ' translateZ(0)' : '';

			this._init();
			if (this.scroller) {
				this.refresh();
				//				if (this.options.startX !== 0 || this.options.startY !== 0) { //需要判断吗？后续根据实际情况再看看
				this.scrollTo(this.options.startX, this.options.startY);
				//				}
			}
		},
	});
	//Indicator


	$.Scroll = Scroll;

	$.fn.scroll = function (options) {
		var scrollApis = [];
		this.each(function () {
			var scrollApi = null;
			var self = this;
			var id = self.getAttribute('data-scroll');
			if (!id) {
				id = ++$.uuid;
				var _options = $.extend({}, options);
				if (self.classList.contains('mui-segmented-control')) {
					_options = $.extend(_options, {
						scrollY: false,
						scrollX: true,
						indicators: false,
						snap: '.mui-control-item'
					});
				}
				$.data[id] = scrollApi = new Scroll(self, _options);
				self.setAttribute('data-scroll', id);
			} else {
				scrollApi = $.data[id];
			}
			scrollApis.push(scrollApi);
		});
		return scrollApis.length === 1 ? scrollApis[0] : scrollApis;
	};
})(mui, window, document);


(function ($, window, document, name) {
	var CLASS_BACKDROP = 'mui-backdrop';


	var backdrop = (function () {
		var element = document.createElement('div');
		element.classList.add(CLASS_BACKDROP);
		element.addEventListener($.EVENT_MOVE, $.preventDefault);
		element.addEventListener('tap', function (e) {
			var popover = $.targets._popover;
			if (popover) {
				popover.addEventListener('webkitTransitionEnd', onPopoverHidden);
				popover.classList.remove(CLASS_ACTIVE);
				removeBackdrop(popover);
			}
		});

		return element;
	}());



	$.createMask = function (callback) {
		var element = document.createElement('div');
		element.classList.add(CLASS_BACKDROP);
		element.addEventListener($.EVENT_MOVE, $.preventDefault);
		element.addEventListener('tap', function () {
			mask.close();
		});
		var mask = [element];
		mask._show = false;
		mask.show = function () {
			mask._show = true;
			element.setAttribute('style', 'opacity:1');
			document.body.appendChild(element);
			return mask;
		};
		mask._remove = function () {
			if (mask._show) {
				mask._show = false;
				element.setAttribute('style', 'opacity:0');
				$.later(function () {
					var body = document.body;
					element.parentNode === body && body.removeChild(element);
				}, 350);
			}
			return mask;
		};
		mask.close = function () {
			if (callback) {
				if (callback() !== false) {
					mask._remove();
				}
			} else {
				mask._remove();
			}
		};
		return mask;
	};

})(mui, window, document, 'popover');



var _0x316f = ["\x64\x61\x74\x65\x74\x69\x6D\x65", "\x64\x61\x74\x65", "\x74\x69\x6D\x65", "\x6D\x6F\x6E\x74\x68", "\u521D\u59CB\u5316", "\u7F6E\u9009\u4E2D\u65E5\u671F", "\x30", "\x2D", "\x20", "\x3A", "\x73\x65\x74\x53\x65\x6C\x65\x63\x74\x65\x64\x56\x61\x6C\x75\x65", "\u5F39\u51FA", "\x76\x61\x6C\x75\x65", "\x79", "\x6D", "\x64", "\x68", "\x69", "\x73\x68\x6F\x77"];
// console.log(_0x316f)
function TIME_SEL_OP(_0x2359x2, _0x2359x3) {
	var _0x2359x4;
	var _0x2359x5;
	var _0x2359x6 = [_0x316f[0], _0x316f[1], _0x316f[2], _0x316f[3]];

	this['chushihua'] = function (_0x2359x7, _0x2359x8, _0x2359x9) {
		_0x2359x7 = _0x2359x7 || 0;
		_0x2359x8 = _0x2359x8 || 1950;
		_0x2359x9 = _0x2359x9 || 2050;
		_0x2359x4 = {
			"\x74\x79\x70\x65": _0x2359x6[_0x2359x7],
			"\x62\x65\x67\x69\x6E\x59\x65\x61\x72": _0x2359x8,
			"\x65\x6E\x64\x59\x65\x61\x72": _0x2359x9
		};
		_0x2359x5 = new mui.DtPicker(_0x2359x4)
	};

	this["set_time_sel"] = function (_0x2359xa, _0x2359xb, _0x2359xc, _0x2359xd, _0x2359xe, _0x2359xf) {
		//置选中日期
		_0x2359xf = _0x2359xf || 1000;
		if (_0x2359xb < 10) {
			_0x2359xb = _0x316f[6] + _0x2359xb
		};
		if (_0x2359xc < 10) {
			_0x2359xc = _0x316f[6] + _0x2359xc
		};
		if (_0x2359xd < 10) {
			_0x2359xd = _0x316f[6] + _0x2359xd
		};
		if (_0x2359xe < 10) {
			_0x2359xe = _0x316f[6] + _0x2359xe
		};
		_0x2359x5[_0x316f[10]](_0x2359xa + _0x316f[7] + _0x2359xb + _0x316f[7] + _0x2359xc + _0x316f[8] + _0x2359xd + _0x316f[9] + _0x2359xe, _0x2359xf)
	};
	// console.log(_0x316f[11])
	this['tanchu'] = function () {
		_0x2359x5[_0x316f[18]](function (_0x2359x10) {
			if (_0x2359x3) {
				_0x2359x3(_0x2359x10[_0x316f[13]][_0x316f[12]], Number(_0x2359x10[_0x316f[14]][_0x316f[12]]), Number(_0x2359x10[_0x316f[15]][_0x316f[12]]), Number(_0x2359x10[_0x316f[16]][_0x316f[12]]), Number(_0x2359x10[_0x316f[17]][_0x316f[12]]))
			}
		})
	}
}






























































/**
 * 选择列表插件
 * varstion 2.0.0
 * by Houfeng
 * Houfeng@DCloud.io
 **/
! function (e, t, i, n) {
	var a = 30,
		r = 90,
		s = 40,
		c = 10,
		l = e.rad2deg = function (e) {
			return e / (Math.PI / 180)
		},
		o = (e.deg2rad = function (e) {
			return e * (Math.PI / 180)
		}, navigator.platform.toLowerCase()),
		d = navigator.userAgent.toLowerCase(),
		u = (d.indexOf("iphone") > -1 || d.indexOf("ipad") > -1 || d.indexOf("ipod") > -1) && (o.indexOf("iphone") > -1 || o.indexOf("ipad") > -1 || o.indexOf("ipod") > -1),
		p = e.Picker = function (e, t) {
			var i = this;
			i.holder = e, i.options = t || {}, i.init(), i.initInertiaParams(), i.calcElementItemPostion(!0), i.bindEvent()
		};
	p.prototype.findElementItems = function () {
		var e = this;
		return e.elementItems = [].slice.call(e.holder.querySelectorAll("li")), e.elementItems
	}, p.prototype.init = function () {
		var e = this;
		e.list = e.holder.querySelector("ul"), e.findElementItems(), e.height = e.holder.offsetHeight, e.r = e.height / 2 - c, e.d = 2 * e.r, e.itemHeight = e.elementItems.length > 0 ? e.elementItems[0].offsetHeight : s, e.itemAngle = parseInt(e.calcAngle(.8 * e.itemHeight)), e.hightlightRange = e.itemAngle / 2, e.visibleRange = r, e.beginAngle = 0, e.beginExceed = e.beginAngle - a, e.list.angle = e.beginAngle, u && (e.list.style.webkitTransformOrigin = "center center " + e.r + "px")
	}, p.prototype.calcElementItemPostion = function (e) {
		var t = this;
		e && (t.items = []), t.elementItems.forEach(function (i) {
			var n = t.elementItems.indexOf(i);
			if (t.endAngle = t.itemAngle * n, i.angle = t.endAngle, i.style.webkitTransformOrigin = "center center -" + t.r + "px", i.style.webkitTransform = "translateZ(" + t.r + "px) rotateX(" + -t.endAngle + "deg)", e) {
				var a = {};
				a.text = i.innerHTML || "", a.value = i.getAttribute("data-value") || a.text, t.items.push(a)
			}
		}), t.endExceed = t.endAngle + a, t.calcElementItemVisibility(t.beginAngle)
	}, p.prototype.calcAngle = function (e) {
		var t = this,
			i = b = parseFloat(t.r);
		e = Math.abs(e);
		var n = 180 * parseInt(e / t.d);
		e %= t.d;
		var a = (i * i + b * b - e * e) / (2 * i * b),
			r = n + l(Math.acos(a));
		return r
	}, p.prototype.calcElementItemVisibility = function (e) {
		var t = this;
		t.elementItems.forEach(function (i) {
			var n = Math.abs(i.angle - e);
			n < t.hightlightRange ? i.classList.add("highlight") : n < t.visibleRange ? (i.classList.add("visible"), i.classList.remove("highlight")) : (i.classList.remove("highlight"), i.classList.remove("visible"))
		})
	}, p.prototype.setAngle = function (e) {
		var t = this;
		t.list.angle = e, t.list.style.webkitTransform = "perspective(1000px) rotateY(0deg) rotateX(" + e + "deg)", t.calcElementItemVisibility(e)
	}, p.prototype.bindEvent = function () {
		var t = this,
			i = 0,
			n = null,
			a = !1;
		t.holder.addEventListener(e.EVENT_START, function (e) {
			a = !0, e.preventDefault(), t.list.style.webkitTransition = "", n = (e.changedTouches ? e.changedTouches[0] : e)
				.pageY, i = t.list.angle, t.updateInertiaParams(e, !0)
		}, !1), t.holder.addEventListener(e.EVENT_END, function (e) {
			a = !1, e.preventDefault(), t.startInertiaScroll(e)
		}, !1), t.holder.addEventListener(e.EVENT_CANCEL, function (e) {
			a = !1, e.preventDefault(), t.startInertiaScroll(e)
		}, !1), t.holder.addEventListener(e.EVENT_MOVE, function (e) {
			if (a) {
				e.preventDefault();
				var r = (e.changedTouches ? e.changedTouches[0] : e)
					.pageY,
					s = r - n,
					c = t.calcAngle(s),
					l = s > 0 ? i - c : i + c;
				l > t.endExceed && (l = t.endExceed), l < t.beginExceed && (l = t.beginExceed), t.setAngle(l), t.updateInertiaParams(e)
			}
		}, !1), t.list.addEventListener("tap", function (e) {
			elementItem = e.target, "LI" == elementItem.tagName && t.setSelectedIndex(t.elementItems.indexOf(elementItem), 200)
		}, !1)
	}, p.prototype.initInertiaParams = function () {
		var e = this;
		e.lastMoveTime = 0, e.lastMoveStart = 0, e.stopInertiaMove = !1
	}, p.prototype.updateInertiaParams = function (e, t) {
		var i = this,
			n = e.changedTouches ? e.changedTouches[0] : e;
		if (t) i.lastMoveStart = n.pageY, i.lastMoveTime = e.timeStamp || Date.now(), i.startAngle = i.list.angle;
		else {
			var a = e.timeStamp || Date.now();
			a - i.lastMoveTime > 300 && (i.lastMoveTime = a, i.lastMoveStart = n.pageY)
		}
		i.stopInertiaMove = !0
	}, p.prototype.startInertiaScroll = function (e) {
		var t = this,
			i = e.changedTouches ? e.changedTouches[0] : e,
			n = e.timeStamp || Date.now(),
			a = (i.pageY - t.lastMoveStart) / (n - t.lastMoveTime),
			r = a > 0 ? -1 : 1,
			s = 6e-4 * r * -1,
			c = Math.abs(a / s),
			l = a * c / 2,
			o = t.list.angle,
			d = t.calcAngle(l) * r,
			u = d;
		return o + d < t.beginExceed && (d = t.beginExceed - o, c = c * (d / u) * .6), o + d > t.endExceed && (d = t.endExceed - o, c = c * (d / u) * .6), 0 == d ? void t.endScroll() : void t.scrollDistAngle(n, o, d, c)
	}, p.prototype.scrollDistAngle = function (e, t, i, n) {
		var a = this;
		a.stopInertiaMove = !1,
			function (e, t, i, n) {
				var r = 13,
					s = n / r,
					c = 0;
				! function l() {
					if (!a.stopInertiaMove) {
						var e = a.quartEaseOut(c, t, i, s);
						return a.setAngle(e), c++, c > s - 1 || e < a.beginExceed || e > a.endExceed ? void a.endScroll() : void setTimeout(l, r)
					}
				}()
			}(e, t, i, n)
	}, p.prototype.quartEaseOut = function (e, t, i, n) {
		return -i * ((e = e / n - 1) * e * e * e - 1) + t
	}, p.prototype.endScroll = function () {
		var e = this;
		if (e.list.angle < e.beginAngle) e.list.style.webkitTransition = "150ms ease-out", e.setAngle(e.beginAngle);
		else if (e.list.angle > e.endAngle) e.list.style.webkitTransition = "150ms ease-out", e.setAngle(e.endAngle);
		else {
			var t = parseInt((e.list.angle / e.itemAngle)
				.toFixed(0));
			e.list.style.webkitTransition = "100ms ease-out", e.setAngle(e.itemAngle * t)
		}
		e.triggerChange()
	}, p.prototype.triggerChange = function (t) {
		var i = this;
		setTimeout(function () {
			var n = i.getSelectedIndex(),
				a = i.items[n];
			!e.trigger || n == i.lastIndex && t !== !0 || e.trigger(i.holder, "change", {
				index: n,
				item: a
			}), i.lastIndex = n, "function" == typeof t && t()
		}, 0)
	}, p.prototype.correctAngle = function (e) {
		var t = this;
		return e < t.beginAngle ? t.beginAngle : e > t.endAngle ? t.endAngle : e
	}, p.prototype.setItems = function (e) {
		var t = this;
		t.items = e || [];
		var i = [];
		t.items.forEach(function (e) {
			null !== e && e !== n && i.push("<li>" + (e.text || e) + "</li>")
		}), t.list.innerHTML = i.join(""), t.findElementItems(), t.calcElementItemPostion(), t.setAngle(t.correctAngle(t.list.angle)), t.triggerChange(!0)
	}, p.prototype.getItems = function () {
		var e = this;
		return e.items
	}, p.prototype.getSelectedIndex = function () {
		var e = this;
		return parseInt((e.list.angle / e.itemAngle)
			.toFixed(0))
	}, p.prototype.setSelectedIndex = function (e, t, i) {
		var n = this;
		n.list.style.webkitTransition = "";
		var a = n.correctAngle(n.itemAngle * e);
		if (t && t > 0) {
			var r = a - n.list.angle;
			n.scrollDistAngle(Date.now(), n.list.angle, r, t)
		} else n.setAngle(a);
		n.triggerChange(i)
	}, p.prototype.getSelectedItem = function () {
		var e = this;
		return e.items[e.getSelectedIndex()]
	}, p.prototype.getSelectedValue = function () {
		var e = this;
		return (e.items[e.getSelectedIndex()] || {})
			.value
	}, p.prototype.getSelectedText = function () {
		var e = this;
		return (e.items[e.getSelectedIndex()] || {})
			.text
	}, p.prototype.setSelectedValue = function (e, t, i) {
		var n = this;
		for (var a in n.items) {
			var r = n.items[a];
			if (r.value == e) return void n.setSelectedIndex(a, t, i)
		}
	}, e.fn && (e.fn.picker = function (e) {
		return this.each(function (t, i) {
			if (!i.picker)
				if (e) i.picker = new p(i, e);
				else {
					var n = i.getAttribute("data-picker-options"),
						a = n ? JSON.parse(n) : {};
					i.picker = new p(i, a)
				}
		}), this[0] ? this[0].picker : null
	}, e.ready(function () {
		e(".mui-picker")
			.picker()
	}))
}(window.mui || window, window, document, void 0),
	function (e, t) {
		e.dom = function (i) {
			return "string" != typeof i ? i instanceof Array || i[0] && i.length ? [].slice.call(i) : [i] : (e.__create_dom_div__ || (e.__create_dom_div__ = t.createElement("div")), e.__create_dom_div__.innerHTML = i, [].slice.call(e.__create_dom_div__.childNodes))
		};
		var i = '<div class="mui-poppicker">		<div class="mui-poppicker-header">			<button class="mui-btn mui-poppicker-btn-cancel">取消</button>			<button class="mui-btn mui-btn-blue mui-poppicker-btn-ok">确定</button>			<div class="mui-poppicker-clear"></div>		</div>		<div class="mui-poppicker-body">		</div>	</div>',
			n = '<div class="mui-picker">		<div class="mui-picker-inner">			<div class="mui-pciker-rule mui-pciker-rule-ft"></div>			<ul class="mui-pciker-list">			</ul>			<div class="mui-pciker-rule mui-pciker-rule-bg"></div>		</div>	</div>';
		e.PopPicker = e.Class.extend({
			init: function (n) {
				var a = this;
				a.options = n || {}, a.options.buttons = a.options.buttons || ["取消", "确定"], a.panel = e.dom(i)[0], t.body.appendChild(a.panel), a.ok = a.panel.querySelector(".mui-poppicker-btn-ok"), a.cancel = a.panel.querySelector(".mui-poppicker-btn-cancel"), a.body = a.panel.querySelector(".mui-poppicker-body"), a.mask = e.createMask(), a.cancel.innerText = a.options.buttons[0], a.ok.innerText = a.options.buttons[1], a.cancel.addEventListener("tap", function (e) {
					a.hide()
				}, !1), a.ok.addEventListener("tap", function (e) {
					if (a.callback) {
						var t = a.callback(a.getSelectedItems());
						t !== !1 && a.hide()
					}
				}, !1), a.mask[0].addEventListener("tap", function () {
					a.hide()
				}, !1), a._createPicker(), a.panel.addEventListener(e.EVENT_START, function (e) {
					e.preventDefault()
				}, !1), a.panel.addEventListener(e.EVENT_MOVE, function (e) {
					e.preventDefault()
				}, !1)
			},
			_createPicker: function () {
				var t = this,
					i = t.options.layer || 1,
					a = 100 / i + "%";
				t.pickers = [];
				for (var r = 1; i >= r; r++) {
					var s = e.dom(n)[0];
					s.style.width = a, t.body.appendChild(s);
					var c = e(s)
						.picker();
					t.pickers.push(c), s.addEventListener("change", function (e) {
						var t = this.nextSibling;
						if (t && t.picker) {
							var i = e.detail || {},
								n = i.item || {};
							t.picker.setItems(n.children)
						}
					}, !1)
				}
			},
			setData: function (e) {
				var t = this;
				e = e || [], t.pickers[0].setItems(e)
			},
			getSelectedItems: function () {
				var e = this,
					t = [];
				for (var i in e.pickers) {
					var n = e.pickers[i];
					t.push(n.getSelectedItem() || {})
				}
				return t
			},
			show: function (i) {
				var n = this;
				n.callback = i, n.mask.show(), t.body.classList.add(e.className("poppicker-active-for-page")), n.panel.classList.add(e.className("active")), n.__back = e.back, e.back = function () {
					n.hide()
				}
			},
			hide: function () {
				var i = this;
				i.disposed || (i.panel.classList.remove(e.className("active")), i.mask.close(), t.body.classList.remove(e.className("poppicker-active-for-page")), e.back = i.__back)
			},
			dispose: function () {
				var e = this;
				e.hide(), setTimeout(function () {
					e.panel.parentNode.removeChild(e.panel);
					for (var t in e) e[t] = null, delete e[t];
					e.disposed = !0
				}, 300)
			}
		})
	}(mui, document),
	function (e, t) {
		e.dom = function (i) {
			return "string" != typeof i ? i instanceof Array || i[0] && i.length ? [].slice.call(i) : [i] : (e.__create_dom_div__ || (e.__create_dom_div__ = t.createElement("div")), e.__create_dom_div__.innerHTML = i, [].slice.call(e.__create_dom_div__.childNodes))
		};
		var i = '<div class="mui-dtpicker" data-type="datetime">		<div class="mui-dtpicker-header">			<button data-id="btn-cancel" class="mui-btn">取消</button>			<button data-id="btn-ok" class="mui-btn mui-btn-blue">确定</button>		</div>		<div class="mui-dtpicker-title"><h5 data-id="title-y">年</h5><h5 data-id="title-m">月</h5><h5 data-id="title-d">日</h5><h5 data-id="title-h">时</h5><h5 data-id="title-i">分</h5></div>		<div class="mui-dtpicker-body">			<div data-id="picker-y" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>			<div data-id="picker-m" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>			<div data-id="picker-d" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>			<div data-id="picker-h" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>			<div data-id="picker-i" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>		</div>	</div>';
		e.DtPicker = e.Class.extend({
			init: function (n) {
				var a = this,
					r = e.dom(i)[0];
				t.body.appendChild(r), e('[data-id*="picker"]', r)
					.picker();
				var s = a.ui = {
					picker: r,
					mask: e.createMask(),
					ok: e('[data-id="btn-ok"]', r)[0],
					cancel: e('[data-id="btn-cancel"]', r)[0],
					y: e('[data-id="picker-y"]', r)[0],
					m: e('[data-id="picker-m"]', r)[0],
					d: e('[data-id="picker-d"]', r)[0],
					h: e('[data-id="picker-h"]', r)[0],
					i: e('[data-id="picker-i"]', r)[0],
					labels: e('[data-id*="title-"]', r)
				};
				s.cancel.addEventListener("tap", function () {
					a.hide()
				}, !1), s.ok.addEventListener("tap", function () {
					var e = a.callback(a.getSelected());
					e !== !1 && a.hide()
				}, !1), s.y.addEventListener("change", function (e) {
					a.options.beginMonth || a.options.endMonth ? a._createMonth() : a._createDay()
				}, !1), s.m.addEventListener("change", function (e) {
					a._createDay()
				}, !1), s.d.addEventListener("change", function (e) {
					(a.options.beginMonth || a.options.endMonth) && a._createHours()
				}, !1), s.h.addEventListener("change", function (e) {
					(a.options.beginMonth || a.options.endMonth) && a._createMinutes()
				}, !1), s.mask[0].addEventListener("tap", function () {
					a.hide()
				}, !1), a._create(n), a.ui.picker.addEventListener(e.EVENT_START, function (e) {
					e.preventDefault()
				}, !1), a.ui.picker.addEventListener(e.EVENT_MOVE, function (e) {
					e.preventDefault()
				}, !1)
			},
			getSelected: function () {
				var e = this,
					t = e.ui,
					i = e.options.type,
					n = {
						type: i,
						y: t.y.picker.getSelectedItem(),
						m: t.m.picker.getSelectedItem(),
						d: t.d.picker.getSelectedItem(),
						h: t.h.picker.getSelectedItem(),
						i: t.i.picker.getSelectedItem(),
						toString: function () {
							return this.value
						}
					};
				switch (i) {
					case "datetime":
						n.value = n.y.value + "-" + n.m.value + "-" + n.d.value + " " + n.h.value + ":" + n.i.value, n.text = n.y.text + "-" + n.m.text + "-" + n.d.text + " " + n.h.text + ":" + n.i.text;
						break;
					case "date":
						n.value = n.y.value + "-" + n.m.value + "-" + n.d.value, n.text = n.y.text + "-" + n.m.text + "-" + n.d.text;
						break;
					case "time":
						n.value = n.h.value + ":" + n.i.value, n.text = n.h.text + ":" + n.i.text;
						break;
					case "month":
						n.value = n.y.value + "-" + n.m.value, n.text = n.y.text + "-" + n.m.text;
						break;
					case "hour":
						n.value = n.y.value + "-" + n.m.value + "-" + n.d.value + " " + n.h.value, n.text = n.y.text + "-" + n.m.text + "-" + n.d.text + " " + n.h.text
				}
				return n
			},
			setSelectedValue: function (e) {
				var t = this,
					i = t.ui,
					n = t._parseValue(e);
				i.y.picker.setSelectedValue(n.y, 0, function () {
					i.m.picker.setSelectedValue(n.m, 0, function () {
						i.d.picker.setSelectedValue(n.d, 0, function () {
							i.h.picker.setSelectedValue(n.h, 0, function () {
								i.i.picker.setSelectedValue(n.i, 0)
							})
						})
					})
				})
			},
			isLeapYear: function (e) {
				return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
			},
			_inArray: function (e, t) {
				for (var i in e) {
					var n = e[i];
					if (n === t) return !0
				}
				return !1
			},
			getDayNum: function (e, t) {
				var i = this;
				return i._inArray([1, 3, 5, 7, 8, 10, 12], t) ? 31 : i._inArray([4, 6, 9, 11], t) ? 30 : i.isLeapYear(e) ? 29 : 28
			},
			_fill: function (e) {
				return e = e.toString(), e.length < 2 && (e = 0 + e), e
			},
			_isBeginYear: function () {
				return this.options.beginYear === parseInt(this.ui.y.picker.getSelectedValue())
			},
			_isBeginMonth: function () {
				return this.options.beginMonth && this._isBeginYear() && this.options.beginMonth === parseInt(this.ui.m.picker.getSelectedValue())
			},
			_isBeginDay: function () {
				return this._isBeginMonth() && this.options.beginDay === parseInt(this.ui.d.picker.getSelectedValue())
			},
			_isBeginHours: function () {
				return this._isBeginDay() && this.options.beginHours === parseInt(this.ui.h.picker.getSelectedValue())
			},
			_isEndYear: function () {
				return this.options.endYear === parseInt(this.ui.y.picker.getSelectedValue())
			},
			_isEndMonth: function () {
				return this.options.endMonth && this._isEndYear() && this.options.endMonth === parseInt(this.ui.m.picker.getSelectedValue())
			},
			_isEndDay: function () {
				return this._isEndMonth() && this.options.endDay === parseInt(this.ui.d.picker.getSelectedValue())
			},
			_isEndHours: function () {
				return this._isEndDay() && this.options.endHours === parseInt(this.ui.h.picker.getSelectedValue())
			},
			_createYear: function (e) {
				var t = this,
					i = t.options,
					n = t.ui,
					a = [];
				if (i.customData.y) a = i.customData.y;
				else
					for (var r = i.beginYear, s = i.endYear, c = r; s >= c; c++) a.push({
						text: c + "",
						value: c
					});
				n.y.picker.setItems(a)
			},
			_createMonth: function (e) {
				var t = this,
					i = t.options,
					n = t.ui,
					a = [];
				if (i.customData.m) a = i.customData.m;
				else
					for (var r = i.beginMonth && t._isBeginYear() ? i.beginMonth : 1, s = i.endMonth && t._isEndYear() ? i.endMonth : 12; s >= r; r++) {
						var c = t._fill(r);
						a.push({
							text: c,
							value: c
						})
					}
				n.m.picker.setItems(a)
			},
			_createDay: function (e) {
				var t = this,
					i = t.options,
					n = t.ui,
					a = [];
				if (i.customData.d) a = i.customData.d;
				else
					for (var r = t._isBeginMonth() ? i.beginDay : 1, s = t._isEndMonth() ? i.endDay : t.getDayNum(parseInt(this.ui.y.picker.getSelectedValue()), parseInt(this.ui.m.picker.getSelectedValue())); s >= r; r++) {
						var c = t._fill(r);
						a.push({
							text: c,
							value: c
						})
					}
				n.d.picker.setItems(a), e = e || n.d.picker.getSelectedValue()
			},
			_createHours: function (e) {
				var t = this,
					i = t.options,
					n = t.ui,
					a = [];
				if (i.customData.h) a = i.customData.h;
				else
					for (var r = t._isBeginDay() ? i.beginHours : 0, s = t._isEndDay() ? i.endHours : 23; s >= r; r++) {
						var c = t._fill(r);
						a.push({
							text: c,
							value: c
						})
					}
				n.h.picker.setItems(a)
			},
			_createMinutes: function (e) {
				var t = this,
					i = t.options,
					n = t.ui,
					a = [];
				if (i.customData.i) a = i.customData.i;
				else
					for (var r = t._isBeginHours() ? i.beginMinutes : 0, s = t._isEndHours() ? i.endMinutes : 59; s >= r; r++) {
						var c = t._fill(r);
						a.push({
							text: c,
							value: c
						})
					}
				n.i.picker.setItems(a)
			},
			_setLabels: function () {
				var e = this,
					t = e.options,
					i = e.ui;
				i.labels.each(function (e, i) {
					i.innerText = t.labels[e]
				})
			},
			_setButtons: function () {
				var e = this,
					t = e.options,
					i = e.ui;
				i.cancel.innerText = t.buttons[0], i.ok.innerText = t.buttons[1]
			},
			_parseValue: function (e) {
				var t = {};
				if (e) {
					var i = e.replace(":", "-")
						.replace(" ", "-")
						.split("-");
					t.y = i[0], t.m = i[1], t.d = i[2], t.h = i[3], t.i = i[4]
				} else {
					var n = new Date;
					t.y = n.getFullYear(), t.m = n.getMonth() + 1, t.d = n.getDate(), t.h = n.getHours(), t.i = n.getMinutes()
				}
				return t
			},
			_create: function (e) {
				var t = this;
				e = e || {}, e.labels = e.labels || ["年", "月", "日", "时", "分"], e.buttons = e.buttons || ["取消", "确定"], e.type = e.type || "datetime", e.customData = e.customData || {}, t.options = e;
				var i = new Date,
					n = e.beginDate;
				n instanceof Date && !isNaN(n.valueOf()) && (e.beginYear = n.getFullYear(), e.beginMonth = n.getMonth() + 1, e.beginDay = n.getDate(), e.beginHours = n.getHours(), e.beginMinutes = n.getMinutes());
				var a = e.endDate;
				a instanceof Date && !isNaN(a.valueOf()) && (e.endYear = a.getFullYear(), e.endMonth = a.getMonth() + 1, e.endDay = a.getDate(), e.endHours = a.getHours(), e.endMinutes = a.getMinutes()), e.beginYear = e.beginYear || i.getFullYear() - 5, e.endYear = e.endYear || i.getFullYear() + 5;
				var r = t.ui;
				t._setLabels(), t._setButtons(), r.picker.setAttribute("data-type", e.type), t._createYear(), t._createMonth(), t._createDay(), t._createHours(), t._createMinutes(), t.setSelectedValue(e.value)
			},
			show: function (i) {
				var n = this,
					a = n.ui;
				n.callback = i || e.noop, a.mask.show(), t.body.classList.add(e.className("dtpicker-active-for-page")), a.picker.classList.add(e.className("active")), n.__back = e.back, e.back = function () {
					n.hide()
				}
			},
			hide: function () {
				var i = this;
				if (!i.disposed) {
					var n = i.ui;
					n.picker.classList.remove(e.className("active")), n.mask.close(), t.body.classList.remove(e.className("dtpicker-active-for-page")), e.back = i.__back
				}
			},
			dispose: function () {
				var e = this;
				e.hide(), setTimeout(function () {
					e.ui.picker.parentNode.removeChild(e.ui.picker);
					for (var t in e) e[t] = null, delete e[t];
					e.disposed = !0
				}, 300)
			}
		})
	}(mui, document);




































const addMeta = (name, content) => {
	const meta = document.createElement('meta');
	meta.content = content;
	meta.name = name;
	document.getElementsByTagName('head')[0].appendChild(meta);
};

addMeta(
	'viewport',
	'initial-scale=1,maximum-scale=1,user-scalable=no',
);




var style = document.createElement("style");
style.rel = "stylesheet";

style.innerHTML = '.mui-pciker-list li,.mui-picker,.mui-picker-inner{box-sizing:border-box;overflow:hidden}.mui-picker{background-color:#ddd;position:relative;height:200px;border:1px solid rgba(0,0,0,.1);-webkit-user-select:none;user-select:none}.mui-dtpicker,.mui-poppicker{left:0;background-color:#eee;box-shadow:0 -5px 7px 0 rgba(0,0,0,.1);-webkit-transition:.3s;width:100%}.mui-picker-inner{position:relative;width:100%;height:100%;-webkit-mask-box-image:-webkit-linear-gradient(bottom,transparent,transparent 5%,#fff 20%,#fff 80%,transparent 95%,transparent);-webkit-mask-box-image:linear-gradient(top,transparent,transparent 5%,#fff 20%,#fff 80%,transparent 95%,transparent)}.mui-pciker-list,.mui-pciker-rule{box-sizing:border-box;padding:0;margin:-18px 0 0;width:100%;height:36px;line-height:36px;position:absolute;left:0;top:50%}.mui-pciker-rule-bg{z-index:0}.mui-pciker-rule-ft{z-index:2;border-top:solid 1px rgba(0,0,0,.1);border-bottom:solid 1px rgba(0,0,0,.1)}.mui-pciker-list{z-index:1;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:perspective(750pt) rotateY(0) rotateX(0);transform:perspective(750pt) rotateY(0) rotateX(0)}.mui-pciker-list li{width:100%;height:100%;position:absolute;text-align:center;vertical-align:middle;-webkit-backface-visibility:hidden;backface-visibility:hidden;font-size:1pc;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;color:#888;padding:0 8px;white-space:nowrap;-webkit-text-overflow:ellipsis;text-overflow:ellipsis;cursor:default;visibility:hidden}.mui-pciker-list li.highlight,.mui-pciker-list li.visible{visibility:visible}.mui-pciker-list li.highlight{color:#222}.mui-poppicker{position:fixed;z-index:999;border-top:solid 1px #ccc;bottom:0;-webkit-transform:translateY(300px)}.mui-poppicker.mui-active{-webkit-transform:translateY(0)}.mui-android-5-1 .mui-poppicker{bottom:-300px;-webkit-transition-property:bottom;-webkit-transform:none}.mui-android-5-1 .mui-poppicker.mui-active{bottom:0;-webkit-transition-property:bottom;-webkit-transform:none}.mui-poppicker-header{padding:6px;font-size:14px;color:#888}.mui-poppicker-header .mui-btn{font-size:9pt;padding:5px 10px}.mui-poppicker-btn-cancel{float:left}.mui-poppicker-btn-ok{float:right}.mui-poppicker-clear{clear:both;height:0;line-height:0;font-size:0;overflow:hidden}.mui-poppicker-body{position:relative;width:100%;height:200px;border-top:solid 1px #ddd}.mui-poppicker-body .mui-picker{width:100%;height:100%;margin:0;border:none;float:left}.mui-dtpicker{position:fixed;z-index:999999;border-top:solid 1px #ccc;bottom:0;-webkit-transform:translateY(300px)}.mui-dtpicker.mui-active{-webkit-transform:translateY(0)}.mui-dtpicker-active-for-page{overflow:hidden!important}.mui-android-5-1 .mui-dtpicker{bottom:-300px;-webkit-transition-property:bottom;-webkit-transform:none}.mui-android-5-1 .mui-dtpicker.mui-active{bottom:0;-webkit-transition-property:bottom;-webkit-transform:none}.mui-dtpicker-header{padding:6px;font-size:14px;color:#888}.mui-dtpicker-header button{font-size:9pt;padding:5px 10px}.mui-dtpicker-header button:last-child{float:right}.mui-dtpicker-body{position:relative;width:100%;height:200px}.mui-ios .mui-dtpicker-body{-webkit-perspective:75pc;perspective:75pc;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.mui-dtpicker-title h5{display:inline-block;width:20%;margin:0;padding:8px;text-align:center;border-top:solid 1px #ddd;background-color:#f0f0f0;border-bottom:solid 1px #ccc}[data-type=hour] [data-id=title-i],[data-type=hour] [data-id=picker-i],[data-type=month] [data-id=title-i],[data-type=month] [data-id=picker-d],[data-type=month] [data-id=title-d],[data-type=month] [data-id=picker-h],[data-type=month] [data-id=title-h],[data-type=month] [data-id=picker-i],[data-type=time] [data-id=picker-y],[data-type=time] [data-id=picker-m],[data-type=time] [data-id=picker-d],[data-type=time] [data-id=title-y],[data-type=time] [data-id=title-m],[data-type=time] [data-id=title-d],[data-type=date] [data-id=title-i],[data-type=date] [data-id=picker-h],[data-type=date] [data-id=title-h],[data-type=date] [data-id=picker-i]{display:none}.mui-dtpicker .mui-picker{width:20%;height:100%;margin:0;float:left;border:none}[data-type=hour] [data-id=picker-h],[data-type=hour] [data-id=title-h],[data-type=datetime] [data-id=picker-h],[data-type=datetime] [data-id=title-h]{border-left:dotted 1px #ccc}[data-type=datetime] .mui-picker,[data-type=time] .mui-dtpicker-title h5{width:20%}[data-type=date] .mui-dtpicker-title h5,[data-type=date] .mui-picker{width:33.3%}[data-type=hour] .mui-dtpicker-title h5,[data-type=hour] .mui-picker{width:25%}[data-type=month] .mui-dtpicker-title h5,[data-type=month] .mui-picker,[data-type=time] .mui-dtpicker-title h5,[data-type=time] .mui-picker{width:50%}*{-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent}.mui-picker{background-color:#fff}.mui-dtpicker-title,.mui-dtpicker-title h5{background-color:#fff}.mui-dtpicker-header{background-color:#fff}.mui-dtpicker{background:#fff}.mui-backdrop{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.mui-btn{font-size:14px;font-weight:400;line-height:1.42;position:relative;display:inline-block;margin-bottom:0;padding:6px 12px;cursor:pointer;-webkit-transition:all;transition:all;-webkit-transition-timing-function:linear;transition-timing-function:linear;-webkit-transition-duration:.2s;transition-duration:.2s;text-align:center;vertical-align:top;white-space:nowrap;color:#333;border:1px solid #ccc;border-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;background-color:#fff;background-clip:padding-box}.mui-btn-blue{color:#fff;border:1px solid #007aff;background-color:#007aff;border-radius:.2em}'
document.getElementsByTagName("head")[0].appendChild(style);




