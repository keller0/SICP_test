$(document).ready(function(){
	initBits(0);
	$("#clear").click(function(){clearAll();});
	$("#hex").keyup(function(){changeInput(this,'hex');});
	$("#oct").keyup(function(){changeInput(this,'oct');});
	$("#dec").keyup(function(){changeInput(this,'dec');});
	$(".bin_bits .right").click(function(){clickBits(this);});
});
/**
 * update data when change input fields
 * @param {*} obj 
 * @param {*} Type 
 */
function changeInput(obj,Type) {
	obj = $(obj);
	var nv = obj.val();
	if(nv == '' || nv == 'Na') {
		updateAll(0);
		return;
	}
	switch(Type){
		case 'hex':
			nv = parseInt(nv,16);
			updateAll(nv);
			break;
		case 'oct':
			nv = parseInt(nv,8);
			updateAll(nv);
			break;
		case 'dec':
			nv = parseInt(nv);
			updateAll(nv);
			break;
	}
}
/**
 * update All data
 * @param {*} v 
 */
function updateAll(v) {
	updateInput(v)
	initBits(v);
}
function clearAll() {
	updateInput(0);
	initBits(0);
}
/**
 * use decimal update all input text
 * @param {*} v 
 */
function updateInput(v) {
	$("#hex").val(v.toString(16));
	$("#oct").val(v.toString(8));
	$("#dec").val(v);
}


function initBits(v) {
	if(v == 0) {
		var bits = $(".bin_bits .right");
		bits.text('0');
		bits.removeClass('bit_1');
		return;	
	}else{
		initBits(0);
		for(i = 0; i < 64; i++) {
			var bit = $(".bin_bits .right").eq(63-i);
			if(v%2 == 1) {
				bit.html('1');
				bit.addClass('bit_1');
			}
			v = parseInt(v/2);
			if(v == 0){
				break;
			}
		}
	}
};

function clickBits(obj) {
	$o = $(obj);
	if($o.text() == 0) {
		$o.text(1);
		$o.addClass('bit_1');
	}else if($o.text() == 1) {
		$o.removeClass('bit_1');		
		$o.text(0);
	}
	var bin = '';
	var bits = $(".bin_bits .right");
	bits.each(function(i){
		bin+=($(this).text());
	});
	var de = parseInt(bin, 2);
	updateInput(de);
	
}