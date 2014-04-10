exports.monad = function(modifier){
	var unit, prototype;

	prototype = { isMonad: true };

	unit = function(value){
		var monad = Object.create(prototype);

		monad.bind = function(fn, args){
			args = Array.prototype.slice.call(args || []);

			return fn.apply(null, [value].concat(args));
		};

		if(typeof modifier === 'function'){
			value = modifier(monad, value);
		}

		return monad;
	};

	unit.lift = function(name, fn){
		prototype[name] = function(){
			var result = this.bind(fn, arguments);

			return result && result.isMonad ? result : unit(result);
		};

		return unit;
	};

	unit.liftValue = function(name, fn){
		prototype[name] = function(){
			return this.bind(fn, arguments);
		};

		return unit;
	};

	return unit;
};