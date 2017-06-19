var calcultrice ={
	addition:function (a,b){
		return a + b
	
	},
	soustraction:function(a,b){
		return a - b
	
	
	},
	multiplication:function(a,b){
		return a * b
	
	},
	division:function(a,b){
		if(b ===0){
			return 'on ne peut pas diviser par 0'
		}
		return a / b
	}
};


module.exports =calcultrice;