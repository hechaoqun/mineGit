/**
 * 设置Cookie
 * @param {String} name [要设置的Cookie名称]
 * @param {Object} value [设置Cookie的值]
 * @param {TimeString} sec [设置Cookie有效时间]
 * @return {Type}
 */
function setCookie(name,value,sec){
	if(arguments.length>2){
		var expireDate=new Date(new Date().getTime()+sec*1000);
		document.cookie = name + "=" + escape(value) + "; path=/; domain=.walatao.com; expires=" + expireDate.toGMTString();
	}else
	document.cookie = name + "=" + escape(value) + "; path=/; domain=.walatao.com";
}

/**
 * 获取Cookie
 * @param {String} name [获取Cookie的名称]
 * @return {String} [Cookie值]
 */
function getCookie(name){
	return (document.cookie.match(new RegExp("(^"+name+"| "+name+")=([^;]*)"))==null)?"":RegExp.$2;
}

/**
 * 设置Cookie(可设置访问域名)
 * @param {String} name [要设置的Cookie名称]
 * @param {Object} value [设置Cookie的值]
 * @param {TimeString} sec [设置Cookie有效时间]
 * @param {TimeString} domain [设置Cookie访问域名]
 * @return {Type}
 */
function setCookieMain(name,value,sec,domain){
	if(arguments.length>2){
		var expireDate=new Date(new Date().getTime()+sec*1000);
		document.cookie = name + "=" + escape(value) + "; path=/; domain="+ domain +"; expires=" + expireDate.toGMTString();
	}else
	document.cookie = name + "=" + escape(value) + "; path=/; domain="+domain;
}

/**
 * 获取地址栏参数值
 * @param {String} name [参数名]
 * @return {String} [参数值]
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return '';
}

/**
 * 时间戳
 * @param {Number} longTime [时间戳对象]
 * @return {type}
 */
function formatTime(longTime) {
	//根据时间戳生成的时间对象
	var d = new Date(longTime * 1000),
	// 年
	y = d.getFullYear(),
	// 月
	m = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1),
	// 日
	e = d.getDate() < 10 ? '0' + d.getDate() : d.getDate(),
	// 时
	h = d.getHours() < 10 ? '0' + d.getHours() : d.getHours(),
	// 分
	f = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes(),
	// 秒
	g = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds(),
	date = y + '-' + m + '-' + e + ' ' + h + ':' + f + ':' + g;
	return date;
}

/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
var hexcase = 0;
function hex_md5(a) {
	return rstr2hex(rstr_md5(str2rstr_utf8(a)))
}
function hex_hmac_md5(a, b) {
	return rstr2hex(rstr_hmac_md5(str2rstr_utf8(a), str2rstr_utf8(b)))
}
function md5_vm_test() {
	return hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72"
}
function rstr_md5(a) {
	return binl2rstr(binl_md5(rstr2binl(a), a.length * 8))
}
function rstr_hmac_md5(c, f) {
	var e = rstr2binl(c);
	if (e.length > 16) {
		e = binl_md5(e, c.length * 8)
	}
	var a = Array(16),
	d = Array(16);
	for (var b = 0; b < 16; b++) {
		a[b] = e[b]^909522486;
		d[b] = e[b]^1549556828
	}
	var g = binl_md5(a.concat(rstr2binl(f)), 512 + f.length * 8);
	return binl2rstr(binl_md5(d.concat(g), 512 + 128))
}
function rstr2hex(c) {
	try {
		hexcase
	} catch (g) {
		hexcase = 0
	}
	var f = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
	var b = "";
	var a;
	for (var d = 0; d < c.length; d++) {
		a = c.charCodeAt(d);
		b += f.charAt((a >>> 4) & 15) + f.charAt(a & 15)
	}
	return b
}
function str2rstr_utf8(c) {
	var b = "";
	var d = -1;
	var a,
	e;
	while (++d < c.length) {
		a = c.charCodeAt(d);
		e = d + 1 < c.length ? c.charCodeAt(d + 1) : 0;
		if (55296 <= a && a <= 56319 && 56320 <= e && e <= 57343) {
			a = 65536 + ((a & 1023) << 10) + (e & 1023);
			d++
		}
		if (a <= 127) {
			b += String.fromCharCode(a)
		} else {
			if (a <= 2047) {
				b += String.fromCharCode(192 | ((a >>> 6) & 31), 128 | (a & 63))
			} else {
				if (a <= 65535) {
					b += String.fromCharCode(224 | ((a >>> 12) & 15), 128 | ((a >>> 6) & 63), 128 | (a & 63))
				} else {
					if (a <= 2097151) {
						b += String.fromCharCode(240 | ((a >>> 18) & 7), 128 | ((a >>> 12) & 63), 128 | ((a >>> 6) & 63), 128 | (a & 63))
					}
				}
			}
		}
	}
	return b
}
function rstr2binl(b) {
	var a = Array(b.length >> 2);
	for (var c = 0; c < a.length; c++) {
		a[c] = 0
	}
	for (var c = 0; c < b.length * 8; c += 8) {
		a[c >> 5] |= (b.charCodeAt(c / 8) & 255) << (c % 32)
	}
	return a
}
function binl2rstr(b) {
	var a = "";
	for (var c = 0; c < b.length * 32; c += 8) {
		a += String.fromCharCode((b[c >> 5] >>> (c % 32)) & 255)
	}
	return a
}
function binl_md5(p, k) {
	p[k >> 5] |= 128 << ((k) % 32);
	p[(((k + 64) >>> 9) << 4) + 14] = k;
	var o = 1732584193;
	var n = -271733879;
	var m = -1732584194;
	var l = 271733878;
	for (var g = 0; g < p.length; g += 16) {
		var j = o;
		var h = n;
		var f = m;
		var e = l;
		o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
		l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
		m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
		n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
		o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
		l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
		m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
		n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
		o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
		l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
		m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
		n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
		o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
		l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
		m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
		n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
		o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
		l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
		m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
		n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
		o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
		l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
		m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
		n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
		o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
		l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
		m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
		n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
		o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
		l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
		m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
		n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
		o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
		l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
		m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
		n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
		o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
		l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
		m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
		n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
		o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
		l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
		m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
		n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
		o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
		l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
		m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
		n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
		o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
		l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
		m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
		n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
		o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
		l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
		m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
		n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
		o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
		l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
		m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
		n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
		o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
		l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
		m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
		n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
		o = safe_add(o, j);
		n = safe_add(n, h);
		m = safe_add(m, f);
		l = safe_add(l, e)
	}
	return Array(o, n, m, l)
}
function md5_cmn(h, e, d, c, g, f) {
	return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
}
function md5_ff(g, f, k, j, e, i, h) {
	return md5_cmn((f & k) | ((~f) & j), g, f, e, i, h)
}
function md5_gg(g, f, k, j, e, i, h) {
	return md5_cmn((f & j) | (k & (~j)), g, f, e, i, h)
}
function md5_hh(g, f, k, j, e, i, h) {
	return md5_cmn(f^k^j, g, f, e, i, h)
}
function md5_ii(g, f, k, j, e, i, h) {
	return md5_cmn(k^(f | (~j)), g, f, e, i, h)
}
function safe_add(a, d) {
	var c = (a & 65535) + (d & 65535);
	var b = (a >> 16) + (d >> 16) + (c >> 16);
	return (b << 16) | (c & 65535)
}
function bit_rol(a, b) {
	return (a << b) | (a >>> (32 - b))
};

/**
 *BASE64 Encode and Decode By UTF-8 unicode
 *可以和javascript的BASE64编码和解码互相转化
 */
var Base64 = {
	// 转码表
	table : [
			'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
			'I', 'J', 'K', 'L', 'M', 'N', 'O' ,'P',
			'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
			'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
			'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
			'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
			'w', 'x', 'y', 'z', '0', '1', '2', '3',
			'4', '5', '6', '7', '8', '9', '+', '/'
	],
	UTF16ToUTF8 : function(str) {
		var res = [], len = str.length;
		for (var i = 0; i < len; i++) {
			var code = str.charCodeAt(i);
			if (code > 0x0000 && code <= 0x007F) {
				// 单字节，这里并不考虑0x0000，因为它是空字节
				// U+00000000 – U+0000007F 	0xxxxxxx
				res.push(str.charAt(i));
			} else if (code >= 0x0080 && code <= 0x07FF) {
				// 双字节
				// U+00000080 – U+000007FF 	110xxxxx 10xxxxxx
				// 110xxxxx
				var byte1 = 0xC0 | ((code >> 6) & 0x1F);
				// 10xxxxxx
				var byte2 = 0x80 | (code & 0x3F);
				res.push(
					window.String.fromCharCode(byte1),
					window.String.fromCharCode(byte2)
				);
			} else if (code >= 0x0800 && code <= 0xFFFF) {
				// 三字节
				// U+00000800 – U+0000FFFF 	1110xxxx 10xxxxxx 10xxxxxx
				// 1110xxxx
				var byte1 = 0xE0 | ((code >> 12) & 0x0F);
				// 10xxxxxx
				var byte2 = 0x80 | ((code >> 6) & 0x3F);
				// 10xxxxxx
				var byte3 = 0x80 | (code & 0x3F);
				res.push(
					window.String.fromCharCode(byte1),
					window.String.fromCharCode(byte2),
					window.String.fromCharCode(byte3)
				);
			} else if (code >= 0x00010000 && code <= 0x001FFFFF) {
				// 四字节
				// U+00010000 – U+001FFFFF 	11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
			} else if (code >= 0x00200000 && code <= 0x03FFFFFF) {
				// 五字节
				// U+00200000 – U+03FFFFFF 	111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
			} else /** if (code >= 0x04000000 && code <= 0x7FFFFFFF)*/ {
				// 六字节
				// U+04000000 – U+7FFFFFFF 	1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
			}
		}

		return res.join('');
	},
	UTF8ToUTF16 : function(str) {
		var res = [], len = str.length;
		var i = 0;
		for (var i = 0; i < len; i++) {
			var code = str.charCodeAt(i);
			// 对第一个字节进行判断
			if (((code >> 7) & 0xFF) == 0x0) {
				// 单字节
				// 0xxxxxxx
				res.push(str.charAt(i));
			} else if (((code >> 5) & 0xFF) == 0x6) {
				// 双字节
				// 110xxxxx 10xxxxxx
				var code2 = str.charCodeAt(++i);
				var byte1 = (code & 0x1F) << 6;
				var byte2 = code2 & 0x3F;
				var utf16 = byte1 | byte2;
				res.push(window.String.fromCharCode(utf16));
			} else if (((code >> 4) & 0xFF) == 0xE) {
				// 三字节
				// 1110xxxx 10xxxxxx 10xxxxxx
				var code2 = str.charCodeAt(++i);
				var code3 = str.charCodeAt(++i);
				var byte1 = (code << 4) | ((code2 >> 2) & 0x0F);
				var byte2 = ((code2 & 0x03) << 6) | (code3 & 0x3F);
				var utf16 = ((byte1 & 0x00FF) << 8) | byte2
				res.push(window.String.fromCharCode(utf16));
			} else if (((code >> 3) & 0xFF) == 0x1E) {
				// 四字节
				// 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
			} else if (((code >> 2) & 0xFF) == 0x3E) {
				// 五字节
				// 111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
			} else /** if (((code >> 1) & 0xFF) == 0x7E)*/ {
				// 六字节
				// 1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
			}
		}

		return res.join('');
	},
	encode : function(str) {
		if (!str) {
			return '';
		}
		var utf8    = this.UTF16ToUTF8(str); // 转成UTF8
		var i = 0; // 遍历索引
		var len = utf8.length;
		var res = [];
		while (i < len) {
			var c1 = utf8.charCodeAt(i++) & 0xFF;
			res.push(this.table[c1 >> 2]);
			// 需要补2个=
			if (i == len) {
				res.push(this.table[(c1 & 0x3) << 4]);
				res.push('==');
				break;
			}
			var c2 = utf8.charCodeAt(i++);
			// 需要补1个=
			if (i == len) {
				res.push(this.table[((c1 & 0x3) << 4) | ((c2 >> 4) & 0x0F)]);
				res.push(this.table[(c2 & 0x0F) << 2]);
				res.push('=');
				break;
			}
			var c3 = utf8.charCodeAt(i++);
			res.push(this.table[((c1 & 0x3) << 4) | ((c2 >> 4) & 0x0F)]);
			res.push(this.table[((c2 & 0x0F) << 2) | ((c3 & 0xC0) >> 6)]);
			res.push(this.table[c3 & 0x3F]);
		}

		return res.join('');
	},
	decode : function(str) {
		if (!str) {
			return '';
		}

		var len = str.length;
		var i   = 0;
		var res = [];

		while (i < len) {
			code1 = this.table.indexOf(str.charAt(i++));
			code2 = this.table.indexOf(str.charAt(i++));
			code3 = this.table.indexOf(str.charAt(i++));
			code4 = this.table.indexOf(str.charAt(i++));

			c1 = (code1 << 2) | (code2 >> 4);
			c2 = ((code2 & 0xF) << 4) | (code3 >> 2);
			c3 = ((code3 & 0x3) << 6) | code4;

			res.push(window.String.fromCharCode(c1));

			if (code3 != 64) {
				res.push(window.String.fromCharCode(c2));
			}
			if (code4 != 64) {
				res.push(window.String.fromCharCode(c3));
			}

		}

		return this.UTF8ToUTF16(res.join(''));
	}
};

/*算法加密*/
function base64_encode(str){var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var out,i,len;var c1,c2,c3;len=str.length;i=0;out="";while(i<len){c1=str.charCodeAt(i++)&0xff;if(i==len)
{out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt((c1&0x3)<<4);out+="==";break;}
c2=str.charCodeAt(i++);if(i==len)
{out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt((c2&0xF)<<2);out+="=";break;}
c3=str.charCodeAt(i++);out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt(((c2&0xF)<<2)|((c3&0xC0)>>6));out+=base64EncodeChars.charAt(c3&0x3F);}
return out;}
function base64_decode(str){var base64DecodeChars=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);var c1,c2,c3,c4;var i,len,out;len=str.length;i=0;out="";while(i<len){do{c1=base64DecodeChars[str.charCodeAt(i++)&0xff];}while(i<len&&c1==-1);if(c1==-1)
break;do{c2=base64DecodeChars[str.charCodeAt(i++)&0xff];}while(i<len&&c2==-1);if(c2==-1)
break;out+=String.fromCharCode((c1<<2)|((c2&0x30)>>4));do{c3=str.charCodeAt(i++)&0xff;if(c3==61)
return out;c3=base64DecodeChars[c3];}while(i<len&&c3==-1);if(c3==-1)
break;out+=String.fromCharCode(((c2&0XF)<<4)|((c3&0x3C)>>2));do{c4=str.charCodeAt(i++)&0xff;if(c4==61)
return out;c4=base64DecodeChars[c4];}while(i<len&&c4==-1);if(c4==-1)
break;out+=String.fromCharCode(((c3&0x03)<<6)|c4);}
return out;}
function utf16to8(str){var out,i,len,c;out="";len=str.length;for(i=0;i<len;i++){c=str.charCodeAt(i);if((c>=0x0001)&&(c<=0x007F)){out+=str.charAt(i);}else if(c>0x07FF){out+=String.fromCharCode(0xE0|((c>>12)&0x0F));out+=String.fromCharCode(0x80|((c>>6)&0x3F));out+=String.fromCharCode(0x80|((c>>0)&0x3F));}else{out+=String.fromCharCode(0xC0|((c>>6)&0x1F));out+=String.fromCharCode(0x80|((c>>0)&0x3F));}}
return out;}
function utf8to16(str){var out,i,len,c;var char2,char3;out="";len=str.length;i=0;while(i<len){c=str.charCodeAt(i++);switch(c>>4)
{case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:out+=str.charAt(i-1);break;case 12:case 13:char2=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x1F)<<6)|(char2&0x3F));break;case 14:char2=str.charCodeAt(i++);char3=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x0F)<<12)|((char2&0x3F)<<6)|((char3&0x3F)<<0));break;}}
return out;}

var hexcase=0;function hex_md5(a){return rstr2hex(rstr_md5(str2rstr_utf8(a)))}function hex_hmac_md5(a,b){return rstr2hex(rstr_hmac_md5(str2rstr_utf8(a),str2rstr_utf8(b)))}function md5_vm_test(){return hex_md5("abc").toLowerCase()=="900150983cd24fb0d6963f7d28e17f72"}function rstr_md5(a){return binl2rstr(binl_md5(rstr2binl(a),a.length*8))}function rstr_hmac_md5(c,f){var e=rstr2binl(c);if(e.length>16){e=binl_md5(e,c.length*8)}var a=Array(16),d=Array(16);for(var b=0;b<16;b++){a[b]=e[b]^909522486;d[b]=e[b]^1549556828}var g=binl_md5(a.concat(rstr2binl(f)),512+f.length*8);return binl2rstr(binl_md5(d.concat(g),512+128))}function rstr2hex(c){try{hexcase}catch(g){hexcase=0}var f=hexcase?"0123456789ABCDEF":"0123456789abcdef";var b="";var a;for(var d=0;d<c.length;d++){a=c.charCodeAt(d);b+=f.charAt((a>>>4)&15)+f.charAt(a&15)}return b}function str2rstr_utf8(c){var b="";var d=-1;var a,e;while(++d<c.length){a=c.charCodeAt(d);e=d+1<c.length?c.charCodeAt(d+1):0;if(55296<=a&&a<=56319&&56320<=e&&e<=57343){a=65536+((a&1023)<<10)+(e&1023);d++}if(a<=127){b+=String.fromCharCode(a)}else{if(a<=2047){b+=String.fromCharCode(192|((a>>>6)&31),128|(a&63))}else{if(a<=65535){b+=String.fromCharCode(224|((a>>>12)&15),128|((a>>>6)&63),128|(a&63))}else{if(a<=2097151){b+=String.fromCharCode(240|((a>>>18)&7),128|((a>>>12)&63),128|((a>>>6)&63),128|(a&63))}}}}}return b}function rstr2binl(b){var a=Array(b.length>>2);for(var c=0;c<a.length;c++){a[c]=0}for(var c=0;c<b.length*8;c+=8){a[c>>5]|=(b.charCodeAt(c/8)&255)<<(c%32)}return a}function binl2rstr(b){var a="";for(var c=0;c<b.length*32;c+=8){a+=String.fromCharCode((b[c>>5]>>>(c%32))&255)}return a}function binl_md5(p,k){p[k>>5]|=128<<((k)%32);p[(((k+64)>>>9)<<4)+14]=k;var o=1732584193;var n=-271733879;var m=-1732584194;var l=271733878;for(var g=0;g<p.length;g+=16){var j=o;var h=n;var f=m;var e=l;o=md5_ff(o,n,m,l,p[g+0],7,-680876936);l=md5_ff(l,o,n,m,p[g+1],12,-389564586);m=md5_ff(m,l,o,n,p[g+2],17,606105819);n=md5_ff(n,m,l,o,p[g+3],22,-1044525330);o=md5_ff(o,n,m,l,p[g+4],7,-176418897);l=md5_ff(l,o,n,m,p[g+5],12,1200080426);m=md5_ff(m,l,o,n,p[g+6],17,-1473231341);n=md5_ff(n,m,l,o,p[g+7],22,-45705983);o=md5_ff(o,n,m,l,p[g+8],7,1770035416);l=md5_ff(l,o,n,m,p[g+9],12,-1958414417);m=md5_ff(m,l,o,n,p[g+10],17,-42063);n=md5_ff(n,m,l,o,p[g+11],22,-1990404162);o=md5_ff(o,n,m,l,p[g+12],7,1804603682);l=md5_ff(l,o,n,m,p[g+13],12,-40341101);m=md5_ff(m,l,o,n,p[g+14],17,-1502002290);n=md5_ff(n,m,l,o,p[g+15],22,1236535329);o=md5_gg(o,n,m,l,p[g+1],5,-165796510);l=md5_gg(l,o,n,m,p[g+6],9,-1069501632);m=md5_gg(m,l,o,n,p[g+11],14,643717713);n=md5_gg(n,m,l,o,p[g+0],20,-373897302);o=md5_gg(o,n,m,l,p[g+5],5,-701558691);l=md5_gg(l,o,n,m,p[g+10],9,38016083);m=md5_gg(m,l,o,n,p[g+15],14,-660478335);n=md5_gg(n,m,l,o,p[g+4],20,-405537848);o=md5_gg(o,n,m,l,p[g+9],5,568446438);l=md5_gg(l,o,n,m,p[g+14],9,-1019803690);m=md5_gg(m,l,o,n,p[g+3],14,-187363961);n=md5_gg(n,m,l,o,p[g+8],20,1163531501);o=md5_gg(o,n,m,l,p[g+13],5,-1444681467);l=md5_gg(l,o,n,m,p[g+2],9,-51403784);m=md5_gg(m,l,o,n,p[g+7],14,1735328473);n=md5_gg(n,m,l,o,p[g+12],20,-1926607734);o=md5_hh(o,n,m,l,p[g+5],4,-378558);l=md5_hh(l,o,n,m,p[g+8],11,-2022574463);m=md5_hh(m,l,o,n,p[g+11],16,1839030562);n=md5_hh(n,m,l,o,p[g+14],23,-35309556);o=md5_hh(o,n,m,l,p[g+1],4,-1530992060);l=md5_hh(l,o,n,m,p[g+4],11,1272893353);m=md5_hh(m,l,o,n,p[g+7],16,-155497632);n=md5_hh(n,m,l,o,p[g+10],23,-1094730640);o=md5_hh(o,n,m,l,p[g+13],4,681279174);l=md5_hh(l,o,n,m,p[g+0],11,-358537222);m=md5_hh(m,l,o,n,p[g+3],16,-722521979);n=md5_hh(n,m,l,o,p[g+6],23,76029189);o=md5_hh(o,n,m,l,p[g+9],4,-640364487);l=md5_hh(l,o,n,m,p[g+12],11,-421815835);m=md5_hh(m,l,o,n,p[g+15],16,530742520);n=md5_hh(n,m,l,o,p[g+2],23,-995338651);o=md5_ii(o,n,m,l,p[g+0],6,-198630844);l=md5_ii(l,o,n,m,p[g+7],10,1126891415);m=md5_ii(m,l,o,n,p[g+14],15,-1416354905);n=md5_ii(n,m,l,o,p[g+5],21,-57434055);o=md5_ii(o,n,m,l,p[g+12],6,1700485571);l=md5_ii(l,o,n,m,p[g+3],10,-1894986606);m=md5_ii(m,l,o,n,p[g+10],15,-1051523);n=md5_ii(n,m,l,o,p[g+1],21,-2054922799);o=md5_ii(o,n,m,l,p[g+8],6,1873313359);l=md5_ii(l,o,n,m,p[g+15],10,-30611744);m=md5_ii(m,l,o,n,p[g+6],15,-1560198380);n=md5_ii(n,m,l,o,p[g+13],21,1309151649);o=md5_ii(o,n,m,l,p[g+4],6,-145523070);l=md5_ii(l,o,n,m,p[g+11],10,-1120210379);m=md5_ii(m,l,o,n,p[g+2],15,718787259);n=md5_ii(n,m,l,o,p[g+9],21,-343485551);o=safe_add(o,j);n=safe_add(n,h);m=safe_add(m,f);l=safe_add(l,e)}return Array(o,n,m,l)}function md5_cmn(h,e,d,c,g,f){return safe_add(bit_rol(safe_add(safe_add(e,h),safe_add(c,f)),g),d)}function md5_ff(g,f,k,j,e,i,h){return md5_cmn((f&k)|((~f)&j),g,f,e,i,h)}function md5_gg(g,f,k,j,e,i,h){return md5_cmn((f&j)|(k&(~j)),g,f,e,i,h)}function md5_hh(g,f,k,j,e,i,h){return md5_cmn(f^k^j,g,f,e,i,h)}function md5_ii(g,f,k,j,e,i,h){return md5_cmn(k^(f|(~j)),g,f,e,i,h)}function safe_add(a,d){var c=(a&65535)+(d&65535);var b=(a>>16)+(d>>16)+(c>>16);return(b<<16)|(c&65535)}function bit_rol(a,b){return(a<<b)|(a>>>(32-b))};

function authcode(str, operation, key, expiry) {
	var operation = operation ? operation : 'DECODE';
	var key = key ? key : 'szbrmb';
	var expiry = expiry ? expiry : 0;
	var ckey_length = 4;
	key = md5(key);
	if(operation == 'DECODE'){
		str=str.replace(/\[a\]/g,'+');
		str=str.replace(/\[b\]/g,'&');
		str=str.replace(/\[c\]/g,'/');
	}
	// 密匙a会参与加解密
	var keya = md5(key.substr(0, 16));
	// 密匙b会用来做数据完整性验证
	var keyb = md5(key.substr(16, 16));
	// 密匙c用于变化生成的密文
	// IE下不支持substr第一个参数为负数的情况
	if(ckey_length){
		if(operation == 'DECODE'){
			var keyc = str.substr(0, ckey_length);
		}else{
			var md5_time = md5(microtime());
			var start = md5_time.length - ckey_length;
			var keyc = md5_time.substr(start, ckey_length)
		}
	}else{
		var keyc = '';
	}
	// 参与运算的密匙
	var cryptkey = keya + md5(keya + keyc);

	var strbuf;

	if (operation == 'DECODE') {
		str = str.substr(ckey_length);
		strbuf = base64_decode(str);
		//string = b.toString();
	} else {
		expiry = expiry ? expiry + time() : 0;
		tmpstr = expiry.toString();
		if (tmpstr.length >= 10)
			str = tmpstr.substr(0, 10) + md5(str + keyb).substr(0, 16) + str;
		else {
			var count = 10 - tmpstr.length;
			for (var i = 0; i < count; i++) {
				tmpstr = '0' + tmpstr;
			}
			str = tmpstr + md5(str + keyb).substr(0, 16) + str;
		}
		strbuf = str;
	}	

	var box = new Array(256);
	for (var i = 0; i < 256; i++) {
		box[i] = i;
	}
	var rndkey = new Array();
	// 产生密匙簿
	for (var i = 0; i < 256; i++) {
		rndkey[i] = cryptkey.charCodeAt(i % cryptkey.length);
	}
	// 用固定的算法，打乱密匙簿，增加随机性，好像很复杂，实际上对并不会增加密文的强度
	for (var j = i = 0; i < 256; i++) {
		j = (j + box[i] + rndkey[i]) % 256;
		tmp = box[i];
		box[i] = box[j];
		box[j] = tmp;
	}

	// 核心加解密部分
	var s = '';
	//IE下不支持直接通过下标访问字符串的字符，需要先转换为数组
	strbuf = strbuf.split('');
	for (var a = j = i = 0; i < strbuf.length; i++) {
		a = (a + 1) % 256;
		j = (j + box[a]) % 256;
		tmp = box[a];
		box[a] = box[j];
		box[j] = tmp;
		// 从密匙簿得出密匙进行异或，再转成字符
		s += chr(ord(strbuf[i])^(box[(box[a] + box[j]) % 256]));
	}
	
	if (operation == 'DECODE') {
		if ((s.substr(0, 10) == 0 || s.substr(0, 10) - time() > 0) && s.substr(10, 16) == md5(s.substr(26) + keyb).substr(0, 16)) {
			s = s.substr(26);
		} else {
			s = '';
		}
	} else {
		s = base64_encode(s);
		var regex = new RegExp('=', "g");
		s = s.replace(regex, '');
		s = keyc + s;		
		s=s.replace(/\+/g, '[a]');
		s=s.replace(/&/g, '[b]');
		s=s.replace(/\//g, '[c]');
	}
	
	return s;
}

function time() {
	var unixtime_ms = new Date().getTime();
	return parseInt(unixtime_ms / 1000);
}

function microtime(get_as_float) {
	var unixtime_ms = new Date().getTime();
	var sec = parseInt(unixtime_ms / 1000);
	return get_as_float ? (unixtime_ms / 1000) : (unixtime_ms - (sec * 1000)) / 1000 + ' ' + sec;
}
function chr(s) {
	return String.fromCharCode(s);
}
function ord(s) {
	return s.charCodeAt();
}

function md5(str) {
	return hex_md5(str);
}  

/*当前时间戳*/
function ts() {  
	var unixtime_ms = new Date().getTime();  
	return parseInt(unixtime_ms / 1000);  
}  
/*签名
对对象进行排序拼接
sign 为排序对象  key 为加密暗号
 */
function obejSort_s(sign,key){
	var NewSign='';
	var sdic=Object.keys(sign).sort();
	for(ki in sdic){  
	  NewSign+= sdic[ki]+"="+sign[sdic[ki]]+"&"                
	}
	return hex_md5(NewSign+key);
}
/*
对数据进行加密
data 为要加密的数据
 */
function dataKey(data){
	// var ts=Math.round(new Date().getTime()/1000);
	// var str=Base64.encode(JSON.stringify(data));
	// var NewData=str.substring(5,10)+str.substring(10,15)+str.substring(0,5)+str.substring(15);
	return authcode(encodeURI(JSON.stringify(data)),'ENCODE');
}
/*首页行情数据
	currency_mark  币简称
	currency 币id
	time 请求的时间数据
	（
		kline_1m : 1分钟
		kline_5m ：5分钟
		kline_15m：15分钟
		kline_30m：30分钟
		kline_1h : 1小时
		kline_1d : 1天
		kline_1w : 1周
	）
*/
function getKline(currency_mark,currency,basemark,time,callback){
	var dataArr={'currency_mark':currency_mark,'currency':currency,'basemark':basemark,'time':time,'ts':ts()};
	var signArr={'currency_mark':currency_mark,'currency':currency,'basemark':basemark,'time':time};
	$.ajax({
        type:"GET",
        url: GV.SZB_SITE+"/orders/getOrdersKline",
        data:{'currency_mark':currency_mark,'currency':currency,'basemark':basemark,'time':time,'ts':ts(),'data':dataKey(dataArr),'sign':obejSort_s(signArr,'@#shuzibi#@')},
        dataType: 'json',
        success: function(result) {
            callback(result);
        }
    });
}

/*24小时走势图请求数据
	dataArr: 传过来的数组
	eg:[['currency_id'=>30,'currency_mark'=>'btc'],['currency_id'=>29,'currency_mark'=>'cpc']]
*/
var currency_id_list=[];//币种信息数组
var trends_BTC ;//记录24小时走势数据
var trends_ETH ;//记录24小时走势数据
var trends_SZB ;//记录24小时走势数据
function trend(basemark,callback){
	$.ajax({
        type:"GET",
        url: GV.SZB_SITE+"/Orders/currency_list_24h_kline",
        data:{'basemark':basemark},
        dataType: 'json',
        success: function(result) {
            callback(result);
        }
    });
}

/*获取币种id 及name数据*/
function getCurrencyIdList(basemark){
	currency_id_list=[];
	$.each($('#coin_'+ basemark +'').find('.coin_num'), function(index, el) {
        currency_id_list.push({'currency_id':$(el).attr('currency_id'),'currency_mark':$(el).attr('currency_mark')})
    });
    currency_id_list.push({'currency_mark':basemark.toLowerCase()});
    currency_id_list.push({'currency_mark':'eth'});
    trend(basemark,function(dataList){
    	switch (basemark){
    		case 'BTC': trends_BTC =dataList;
    			break;
			case 'ETH': trends_ETH =dataList;
    			break;
    		case 'SZB': trends_SZB =dataList;
    			break;
    	}
    	getOrder_24hKline(dataList,basemark);
    })
}
/*24小时走势图canvas 画图
dataList 走势数据数组
*/
function getOrder_24hKline(dataList,basemark){
    for(var i in currency_id_list){
    var c=currency_id_list[i].currency_mark;
        if(typeof(dataList[c])!='undefined' && typeof(dataList[c]['data'])!='undefined' && dataList[c]['data'].length>0 ){
            $.plot($("#"+c+"_plot_"+basemark), [{shadowSize:0, data:dataList[c]['data']}],{ grid: { borderWidth: 0}, xaxis: { mode: "time", ticks: false}, yaxis : {tickDecimals: 0, ticks: false},colors:['#FFB033']});
        }
    }
}

/*币种列表实时数据请求*/
function currency_list(data,callback){
	$.ajax({
        type:"GET",
        url: GV.SZB_SITE+"/cron/currency_list_handle",
        data:data,
        dataType: 'json',
        success: function(result) {
            callback(result);
        }
    });
}
/*币种列表html*/
function backDOM(list,basemark) {
	var temp = ''
	list.forEach(function(key, i) {
		temp += '<tr class="coin_num" currency_mark="'+ key.currency_mark.toLowerCase() +'"  currency_id="'+ key.currency_id +'">';
        temp += '   <td class="coinName">';
        temp += '      <a href="/trade/'+ basemark +'/'+key.currency_mark+'">';
        temp += '        <img src="'+ key.currency_logo +'" style="width:20px; height:20px;"/>';
        if(key.currency_name != null){
        	temp += key.currency_name;
        }else{
        	temp += '数字币';
        }
        if(key.currency_mark != null){
        	temp += key.currency_mark;
        }else{
        	temp+='';
        }
        temp += '      </a>';
        temp += '   </td>';
        temp += '   <td>';
        if(key.new_price_status == 0){
        	temp += '<a href="/trade/'+ basemark +'/'+key.currency_mark+'" class="sell">';
        }else{
        	temp += '<a href="/trade/'+ basemark +'/'+key.currency_mark+'" class="buy">';
        }
        if(key.new_price != null){
        	temp += key.new_price;
        }else{
        	temp += '--';
        }
        if(key.shift2rmb != null){
        	temp += '&nbsp;(约 ￥'+key.shift2rmb+')';
        }else{
        	temp += '&nbsp;(约 --)';
        }
        if(key.new_price_status == 0){
        	temp += '&nbsp;↓';
        }else{
        	temp += '&nbsp;↑';
        }
        temp += '     </a>'
        temp += '   </td>';
        temp += '   <td>';
        temp += '      <a href="/trade/'+ basemark +'/'+key.currency_mark+'">';
        if(key['24H_done_num'] != null){
        	temp += key['24H_done_num'];
        }else{
        	temp += '0';
        }
        temp += '       </a>';
        temp += '   </td>';
        temp += '   <td>';
        if(key['24H_change'] > 0){
        	temp += '<a href="/trade/'+ basemark +'/'+key.currency_mark+'" class="buy">';
        }else{
        	temp += '<a href="/trade/'+ basemark +'/'+key.currency_mark+'" class="sell">';
        }
        if(key['24H_change'] != ''){
        	temp += key['24H_change']+'%';
        }else{
        	temp += '0%';
        }
        temp += '</td>';
        temp += '<td>';
        temp += '    <div id="'+ key.currency_mark.toLowerCase() +'_plot_'+ basemark +'"  style="width:148px;height:35px;margin: 0 auto;"></div>';
        temp += '</td>';
        temp += '<td>';
        temp += '    <a class="btn market-trading" href="/trade/'+ basemark +'/'+key.currency_mark+'">去交易</a>';
        temp += '</td>';
        temp += '</tr>';
	})
	return temp;
}
/*实时请求渲染币种列表*/
function get_currency_list(dataJson,basemark){
	currency_list(dataJson,function(data){
		if(dataJson == ''){
			/*首页各交易区币种更新数据*/
			var temp_BTC =backDOM(data.currency_list.BTC,'BTC');
			var temp_ETH =backDOM(data.currency_list.ETH,'ETH');
			var temp_SZB =backDOM(data.currency_list.SZB,'SZB');

			$('#coin_BTC').html(temp_BTC);
			getOrder_24hKline(trends_BTC,'BTC');
			$('#coin_ETH').html(temp_ETH);
			getOrder_24hKline(trends_ETH,'ETH');
			$('#coin_SZB').html(temp_SZB);
	        getOrder_24hKline(trends_SZB,'SZB');
		}else{
			/*各交易区币种更新数据*/
			var temp =backDOM(data.currency_list[basemark],basemark);
			$('#coin_'+basemark).html(temp);
		   
		    switch (basemark){
	    		case 'BTC': getOrder_24hKline(trends_BTC,basemark);
	    			break;
				case 'ETH': getOrder_24hKline(trends_ETH,basemark);
	    			break;
	    		case 'SZB': getOrder_24hKline(trends_SZB,basemark);
	    			break;
	    	}
		}
	})
}

/*悬停用户信息*/
function get_pop_info(callback){
	$.ajax({
        type:"GET",
        url: GV.SZB_SITE+"/User/get_pop_info",
        dataType: 'json',
        success: function(result) {
            callback(result);
        }
    });
}
/*悬停html*/
function popHtml(list){
	var temp='';
	list.forEach(function(key, i) {
		if(key.currency_mark == 'RMB' || key.currency_name=='人民币'){

		}else{
			temp += '<tr class="detailList">';
			temp += '   <td currency_mark="'+ key.currency_mark +'">'+ key.currency_name +'</td>';
			if(key.num == null){
				temp += '   <td class="pic">0.0000</td>';
			}else{
				temp += '   <td class="pic">'+ key.num +'</td>';
			}
			if(key.forzen_num == null){
				temp += '   <td>0.0000</td>';	
			}else{
				temp += '   <td>'+ key.forzen_num +'</td>';
			}												
			temp += '</tr>';
		}											        	
	})
	return temp;
}

/*交易详情左边货币信息更新*/
function tradeOrder(data){
	$.ajax({
        type:"GET",
        url: GV.SZB_SITE+"/cron/currency_list_handle",
        dataType: 'json',
        data:data,
        success: function(result) {
        	tradeHtml(result.currency_list);
        }
    });
}

function tradeHtml(list){
	for(var k in list){
		$.each($('.currency_list').find('#transact_'+k).find('li'), function(index, el) {
		var self = $(this);
			list[k].forEach(function(key, i) {
				if(key.currency_id == self.attr('currency_id')){
					if(key.new_price==null){
					self.find('.money').text('0.000000');
					}else if(key.new_price_status == 1){
						self.find('.money').removeClass('sell').addClass('buy');
						self.find('.money').text(key.new_price);
						self.find('.rmbPrice').html('/￥'+Number(key['shift2rmb']).toFixed(2));
						self.find('.status').removeClass('sell').addClass('buy');
					}else{
						self.find('.money').removeClass('buy').addClass('sell');
						self.find('.money').text(key.new_price);
						self.find('.rmbPrice').html('/￥'+Number(key['shift2rmb']).toFixed(2));
						self.find('.status').removeClass('buy').addClass('sell');
					}	
				}
			})
		})
	}	
}

/*交易详情头部货币信息更新*/
function tradeOrderHeader(basemark,trademark){
	$.ajax({
        type:"GET",
        url: GV.SZB_SITE+"/cron/currency_list_handle",
        dataType: 'json',
        data:{'basemark':basemark,'trademark':trademark},
        success: function(result) {
        	OrderHeaderHtml(result.currency_list);
        }
    });
}
function OrderHeaderHtml(key){
	if(key.currency_id==$('#main').attr('currency_id')){
		/*当前汇率人民币*/
		$('#main').attr('basermb',key.basermb);

		if(key.new_price_status == 1){
			$('.now_price').find('#new_price').text(key.new_price);
			$('.now_price').find('#new_price').removeClass('sell').addClass('buy');
			$('.now_price').find('li').eq(0).find('.status').removeClass('sell').addClass('buy');
		}else{
			$('.now_price').find('#new_price').text(key.new_price);
			$('.now_price').find('#new_price').removeClass('buy').addClass('sell');
			$('.now_price').find('li').eq(0).find('.status').removeClass('buy').addClass('sell');
		}
		$('.now_price').find('li').eq(0).find('.rmbPrice').text('￥'+numberSize(key.new_price*key.basermb,2));

		$('.now_price').find('#24h_max').text(key.max_price);
		$('.now_price').find('li').eq(2).find('.rmbPrice').text('￥'+numberSize(key.max_price*key.basermb,2));

		$('.now_price').find('#24h_min').text(key.min_price);
		$('.now_price').find('li').eq(1).find('.rmbPrice').text('￥'+numberSize(key.min_price*key.basermb,2));

		if(key['24H_done_num']!=null){
			$('.now_price').find('#24h_count').text(Number(key['24H_done_num']).toFixed(6));
		}else{
			$('.now_price').find('#24h_count').text('0.000000');
		}

		if(key['24H_change_status'] == 1){
			$('.now_price').find('#24h_rise').text(key['24H_change']);
			$('.now_price').find('#24h_rise').removeClass('sell').addClass('buy');
			$('.now_price').find('li').eq(4).find('.status').removeClass('sell').addClass('buy');
			$('.now_price').find('li').eq(4).find('.rmbPrice').text('+'+key['24H_change_rate']+'%');
			$('.now_price').find('li').eq(4).find('.rmbPrice').removeClass('sell').addClass('buy');
		}else{
			$('.now_price').find('#24h_rise').text(key['24H_change']);
			$('.now_price').find('#24h_rise').removeClass('buy').addClass('sell');
			$('.now_price').find('li').eq(4).find('.status').removeClass('buy').addClass('sell');
			$('.now_price').find('li').eq(4).find('.rmbPrice').text(key['24H_change_rate']+'%');
			$('.now_price').find('li').eq(4).find('.rmbPrice').removeClass('buy').addClass('sell');
		}

	}
}
/*交易买 卖*/
//小数点去除
function badFloat(num, size){
    if(isNaN(num)) return true;
    num += '';
    if(-1 == num.indexOf('.')) return false;
    var f_arr = num.split('.');
    if(f_arr[1].length > size){
        return true;
    }
    return false;
}
//格式化小数
//@f float 传入小数: 123; 1.1234; 1.000001;
//@size int 保留位数
//@add bool 进位: 0舍 1进
function formatfloat(f, size, add){
    f = parseFloat(f);
    if(size == 2) conf = [100,0.01];
    if(size == 3) conf = [1000,0.001];
    if(size == 4) conf = [10000,0.0001];
    if(size == 5) conf = [100000,0.00001];
    if(size == 6) conf = [1000000,0.000001];
    if(size == 7) conf = [10000000,0.0000001];
	if(size == 8) conf = [100000000,0.00000001];
    var ff = Math.floor(f * conf[0]) / conf[0];
    if(add && f > ff) ff += conf[1];
    return isNaN(ff)? 0: ff.toFixed(size);
}

/*千分位分隔符函数
	num:需要分隔的数
*/
function thousandBitSeparator(num) {
  return num && (num
    .toString().indexOf('.') != -1 ? num.toString().replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
      return $1 + ",";
    }) : num.toString().replace(/(\d)(?=(\d{3}))/g, function($0, $1) {
      return $1 + ",";
    }));
}

/*位数抹去 小数后几位
	size :位数
	num : 数
*/
function numberSize(num,size){
	var len = size+1;
	var newNum=num.toFixed(len);
	
	return newNum.substring(0,newNum.lastIndexOf('.')+len);
}


/*买入价 与 数量*/
function vNum(o, len,buy_fee){
	if($("#coinpricein").val()!="" || $("#coinpricein").val()!="此出价为1个币的价格" && $("#numberin").val()!=""){
		if(o.name != 'buyprice'){
			if(badFloat(o.value, 6))
			o.value=formatfloat(o.value, 6, 0);
		}else{
			if(badFloat(o.value, len))
			o.value=formatfloat(o.value,len,0);
		}
		
		var fee2 = buy_fee /100;
		var ci = $("#coinpricein").val()*$("#numberin").val();
		var ct2 = ci ;//+ ci * fee2;
		var accountNum=o.value - o.value*fee2;
		if(o.name=='buynum'){
			$("#feebuy").text(thousandBitSeparator(numberSize(o.value*fee2,6)));
			$("#coinin_sumprice").text(thousandBitSeparator(numberSize(ct2,Number(len))));
	    	$("#coinin_account").text(thousandBitSeparator(numberSize(accountNum,6)));
		}else{
			var accountNum=$('#numberin').val()-$('#numberin').val()*fee2;
			$("#coinin_sumprice").text(thousandBitSeparator(numberSize(ct2,Number(len))));
			$("#coinin_account").text(thousandBitSeparator(numberSize(accountNum,6)));
			$("#feebuy").text(thousandBitSeparator(numberSize($('#numberin').val()*fee2,6)));
		}
		
	}
}
/*卖出价 与 数量*/
function vNum2(o, len,sell_fee){
	if($("#coinpriceout").val()!="" || $("#coinpriceout").val()!="此出价为1个币的价格" && $("#numberout").val()!=""){
	
		if(o.className!='buyinput'){
			if(badFloat(o.value, 6))
			o.value=formatfloat(o.value, 6, 0);
		}else{
			if(badFloat(o.value, len))
			o.value=formatfloat(o.value, len, 0);
		}
		var nt = $("#coinpriceout").val()*$("#numberout").val();
		var fee = sell_fee /100;
		var ct = nt;// - nt * fee;
		var accountNumSell=ct - nt*fee;

		$("#fee").text(thousandBitSeparator(numberSize(nt*fee,Number(len))));
		$("#coinout_sumprice").text(thousandBitSeparator(numberSize(ct,Number(len))));
	  	$("#coinout_account").text(thousandBitSeparator(numberSize(accountNumSell,Number(len))));
	}
	
}
/*选择挂单点击操作*/
function getsell(_this){
	$("#coinpricein").val($(_this).text());
	$('#coinpricein').keyup();
	zuidakemai();	
}
function sellnum(_this){
	$("#numberin").val($(_this).text());
	$('#numberin').keyup();
}
function getbuy(_this){
	$("#numberout").val($(_this).text());
	$("#numberout").keyup();
}
function buynum(_this){
	$("#coinpriceout").val($(_this).text());
	$("#coinpriceout").keyup();
}

/*买/卖 数量价格输入操作*/
$('#coinpricein').on('keyup',function(){
	vNum(this,$(this).attr('currency_digit_num'),$(this).attr('currency_buy_fee'));
	 $('.sell_num').find('.mainUnit').find('i').text(numberSize((Number($('.buyformarea').find('.buy').find('.balance').html().split('&nbsp;')[0].replace(/,/g,''))/Number($(this).val())),6));
	zuidakemai();
})
$('#coinpricein').on('click',function(){
	// vNum(this,$(this).attr('currency_digit_num'),$(this).attr('currency_buy_fee'));
	if($(this).val()==0.00){
		$(this).val('');
	}
	zuidakemai();
})

$('#numberin').on('keyup',function(){
	vNum(this,$(this).attr('currency_digit_num'),$(this).attr('currency_buy_fee'));
})
$('#numberin').on('click',function(){
	// vNum(this,$(this).attr('currency_digit_num'),$(this).attr('currency_buy_fee'));
	if($(this).val()==0.0000){
		$(this).val('');
	}
	if(Number($('.buyformarea').find('.buy').find('.balance').html().split('&nbsp;')[0].replace(/,/g,''))==0.000000 || Number($('#coinpricein').val()) == 0.00){
		$('.sell_num').find('.mainUnit').find('i').text(numberSize(0,6));
	}else{
		$('.sell_num').find('.mainUnit').find('i').text(numberSize((Number($('.buyformarea').find('.buy').find('.balance').html().split('&nbsp;')[0].replace(/,/g,''))/Number($('#coinpricein').val())),6));
	}
	
	$(this).parent().find('.mainUnit').css('display','inline-block');
})
$('#numberin').on('blur',function(){
	if($(this).val()==''){
		$(this).val('0.000000');
	}
	setTimeout(function(){
		$('.sell_num').find('.mainUnit').css('display','none');
	},500)
})
$('.sell_num').on('click','.mainUnit',function(){
	$('#numberin').val($(this).find('i').text());
	setTimeout(function(){
		$('.sell_num').find('.mainUnit').css('display','none');
	},500)
	$('#numberin').keyup();
})

$('#coinpriceout').on('keyup',function(){
	vNum2(this,$(this).attr('currency_digit_num'),$(this).attr('currency_sell_fee'));
})
$('#coinpriceout').on('click',function(){
	// vNum2(this,$(this).attr('currency_digit_num'),$(this).attr('currency_sell_fee'));
	if($(this).val()==0.0000){
		$(this).val('');
	}
})

$('#numberout').on('keyup',function(){
	vNum2(this,$(this).attr('currency_digit_num'),$(this).attr('currency_sell_fee'));
})
$('#numberout').on('click',function(){
	// vNum2(this,$(this).attr('currency_digit_num'),$(this).attr('currency_sell_fee'));
	if($(this).val()==0.00){
		$(this).val('');
	}
	$('.buy_num').find('.mainUnit').find('i').text($('.buyformarea').find('.sell').find('.balance').html().split('&nbsp;')[0].replace(/,/g,''));
	$(this).parent().find('.mainUnit').css('display','inline-block');
})
$('#numberout').on('blur',function(){
	if($(this).val()==''){
		$(this).val('0.000000');
	}
	setTimeout(function(){
		$('.buy_num').find('.mainUnit').css('display','none');
	},500)
})
$('.buy_num').on('click','.mainUnit',function(){
	$('#numberout').val($(this).find('i').text());
	setTimeout(function(){
		$('.numberout').find('.mainUnit').css('display','none');
	},500)
	$('#numberout').keyup();
})

/*卖出交易*/
function sell(){
	var cname=$("#cname").val();
	if($("#coinpriceout").val()==""){
		$("#trustmsgout").text("卖出价格不能为空").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
		return false;
	}
	if($("#numberout").val()==""){
		$("#trustmsgout").text("卖出数量不能为空").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
		return false;
	}
	if($("#pwdtradeout").val()==""){
		$("#trustmsgout").text("交易密码不能为空").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
		return false;
	}
	if(($("#coinpriceout").val())*($("#numberout").val())*($('#main').attr('basermb'))<10){
		$("#trustmsgout").text("交易额不能低于10元,当前约(￥"+ numberSize(($("#coinpriceout").val())*($("#numberout").val())*($('#main').attr('basermb')),2) +"元)").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
		return false;
	}
	layer.confirm('确定卖出?', {
		  btn: ['确定','取消'] //按钮
			}, function(index){
				layer.close(index);
				
				/*卖出确认操作*/
				if($('#main').attr('gasetting')!=1){
					$("body").append("<div id='loading' style='z-index:998; background-color:#000; opacity:0.3; filter:alpha(opacity=30);top: 0;left: 0;width: 100%;height: 100%;position: fixed;_position: absolute;text-align:center;'><img src='//static.shuzibi.com/Home/images/loading.gif' style='margin-top:25%;' /></div>");
					sell_operation('');
				}else{
					new buySell_certification($('body'),function(vcode){
						sell_operation(vcode);
					});
				}
				
	}, function(){
	  layer.msg('已取消');
	});
}


/*买入交易*/
function buy(){
	if($("#coinpricein").val()==""){
		$("#trustmsgin").text("买入价格不能为空").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
		return false;
	}
	if($("#numberin").val()==""){
		$("#trustmsgin").text("买入数量不能为空").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
		return false;
	}
	if($("#pwdtradein").val()==""){
		$("#trustmsgin").text("交易密码不能为空").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
		return false;
	}
	if(($("#coinpricein").val())*($("#numberin").val())*($('#main').attr('basermb'))<10){
		$("#trustmsgin").text("交易额不能低于10元,当前约(￥"+numberSize(($("#coinpricein").val())*($("#numberin").val())*($('#main').attr('basermb')),2) +"元)").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
		return false;
	}
	layer.confirm('确定买入?', {
	  btn: ['确定','取消'] //按钮
	}, function(index){
		layer.close(index);

		/*买入确认操作*/
		
		if($('#main').attr('gasetting')!=1){
			$("body").append("<div id='loading' style='z-index:998; background-color:#000; opacity:0.3; filter:alpha(opacity=30);top: 0;left: 0;width: 100%;height: 100%;position: fixed;_position: absolute;text-align:center;'><img src='//static.shuzibi.com/Home/images/loading.gif' style='margin-top:25%;' /></div>");
			buy_operation('');
		}else{
			new buySell_certification($('body'),function(vcode){
				buy_operation(vcode);
			});
		}

	}, function(){
	  layer.msg('已取消');
	});
}
/*买入操作接口
	buyprice:买入价格
	buynum：买入数量
	buypwd：买入密码
	currency_id：买入交易币id
	base_id:买入基础币的id
	vcode:双重认证验证码
*/
function goBuy(buyprice,buynum,buypwd,currency_id,base_id,vcode,callback){
	$.ajax({
        type:"post",
        url: GV.SZB_SITE+'/Trade/buy',
        data:{'buyprice':buyprice,'buynum':buynum,'buypwd':buypwd,'currency_id':currency_id,'base_id':base_id,'vcode':vcode},
        async:true,
        dataType: 'json',
        success: function(result) {
            callback(result);
        }
    });
}
/*卖入操作接口
sellprice :卖入价格
sellnum：卖入数量
sellpwd：卖入密码
currency_id：卖入交易币id
base_id:卖入基础币id
vcode:双重认证验证码
*/
function goSell(sellprice,sellnum,sellpwd,currency_id,base_id,vcode,callback){
	$.ajax({
        type:"post",
        url: GV.SZB_SITE+'/Trade/sell',
        data:{'sellprice':sellprice,'sellnum':sellnum,'sellpwd':sellpwd,'currency_id':currency_id,'base_id':base_id,'vcode':vcode},
        async:true,
        dataType: 'json',
        success: function(result) {
            callback(result);
        }
    });
}

/*买入确认操作(扣款挂单 撮合操作)*/
function buy_operation(vcode){
	goBuy($("#coinpricein").val(),$("#numberin").val(),$("#pwdtradein").val(),$("#currency_id").val(),$('#main').attr('base_id'),vcode,function(d){
		$("#loading").remove();
		if(d.status!=1){
			$("#trustmsgin").text(d.info).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);	
			//加一个提示
			layer.msg(d.info);
		}else{
			layer.msg(d.info,{time:1500},function(){
				// window.location.reload();
				getUserOrder();
				get_user_valid($('#main').attr('currency_id'),JSON.parse(sessionStorage.getItem("username"))['member_id'],$('#main').attr('currency_trade'),$('#main').attr('base_id'),$('#main').attr('currency_trade'),$('#main').attr('currency_mark'));
				orderType_buy = true;
				$('#numberin').val('0.000000');
				$('#numberin').keyup();
				if($('.buyformarea').find('li').hasClass('buyPwd')){
					$('.sellPwd').remove();
					$('.buyPwd').remove()
					$('.buyformarea').find('.sellform').css('margin','38px 0');
				}
				$("#trustmsgin").text('提示：区块链资产有风险，购买需谨慎');
			});
			//刷新页面
			// setTimeout(window.location.reload(),3000);
			
		}	
	})
}

/*卖出确认操作 （扣款卖单 撮合成交）*/
function sell_operation(vcode){
	goSell($("#coinpriceout").val(),$("#numberout").val(),$("#pwdtradeout").val(),$("#currency_id").val(),$('#main').attr('base_id'),vcode,function(d){
		$("#loading").remove();
		if(d.status!=1){
		$("#trustmsgout").text(d.info).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);	
		//加一个提示
		layer.msg(d.info);
		}else{
		layer.msg(d.info,{time:1500},function(){
			// window.location.reload();
			getUserOrder();
			get_user_valid($('#main').attr('currency_id'),JSON.parse(sessionStorage.getItem("username"))['member_id'],$('#main').attr('currency_trade'),$('#main').attr('base_id'),$('#main').attr('currency_trade'),$('#main').attr('currency_mark'));
			orderType_sell = true;
			$('#numberout').val('0.000000');
			$('#numberout').keyup();
			if($('.buyformarea').find('li').hasClass('sellPwd')){
				$('.sellPwd').remove();
				$('.buyPwd').remove()
				$('.buyformarea').find('.sellform').css('margin','38px 0');
			}
			$("#trustmsgout").text('提示：区块链资产有风险，购买需谨慎');
		});
		//刷新页面
		// setTimeout(window.location.reload(),3000);
		
		}
	})
}

/*挂单 买卖 双重认证*/
function buySell_certification(obj,callback){
	this.obj = obj;
	this.callback = callback;
	this.createElement();
}
buySell_certification.prototype.createElement = function() {
	var temp = '';
	temp += '<div class="bg_double" id="doubles">';
	temp +='     <div class="doublebox">';
	temp +='     	<h5>输入双重验证密码</h5>';	
	temp +='     	<ul class="doubleList">';		
	temp +='         	<li>';		
	temp +='             	<input type="text" name="" id="doublecode" value="" placeholder="请输入双重验证密码" class="styleinpt" style="margin: 0 0 10px 0;" maxlength="6"/><br/>';			
	temp +='             	<i class="tishi" id="doubleMsg" style="padding-top: 10px;"></i>';				
	temp +='         	</li>';				
	temp +='         	<li>';			
	temp +='             	<input type="button" value="确定" class="verifition" style="margin: 40px 0;"/>';			
	temp +='         	</li>';				
	temp +='         	<li>';
	temp +='             	<a href="" class="loseup">双重验证密码丢失</a>';
	temp +='         	</li>';				
	temp +='     	</ul>';			
	temp +='     	<i class="close"></i>';		
	temp +='     </div>';		
	temp +='</div>';
	$(this.obj).append(temp);
	$('.bg_double').fadeIn('slow');
	this.cancelDouble();
	this.goOut();
	this.codeInput();
}
buySell_certification.prototype.cancelDouble = function(){
	var self= this;
	$('.bg_double').on('click','.verifition',function(){
		var vcode=$("#doublecode").val();
		if(vcode){
			self.callback(vcode);
			$('.bg_double').remove();			 			
	 		$("body").append("<div id='loading' style='z-index:998; background-color:#000; opacity:0.3; filter:alpha(opacity=30);top: 0;left: 0;width: 100%;height: 100%;position: fixed;_position: absolute;text-align:center;'><img src='//static.shuzibi.com/Home/images/loading.gif' style='margin-top:25%;' /></div>");

		}else{
			$("#doubleMsg").html("双重验证密码不能为空");
			setTimeout(function(){
				$("#doubleMsg").html("");
			},1000)
			
		}
	})
}
buySell_certification.prototype.goOut = function(){
	$('.bg_double').on('click','.close',function(){
		$("#doubles").hide();
		$('.bg_double').remove();
		$("#loading").remove();
	})
}
buySell_certification.prototype.codeInput = function(){
	$('.bg_double').on('keyup','#doublecode',function(){
		$(this).val($(this).val().replace(/[^\d]/g,""));
	})
}
/*当前买入/卖出
	type : 状态 buy/sell
	currency:交易币种
	base_id:基础币 id
*/
function get_order(type,currency,base_id,callback){
	$.ajax({
		type:"GET",
		url:GV.SZB_SITE+'/Orders/get_order',
		data:{'type':type,'currency':currency,'base_id':base_id},
		dataType:'json',
		success:function(result){
			callback(result);
		}
	})
}
/*刷新买卖数据*/
var orderType_sell = true;
var orderType_buy = true;
function buy_sell_order(){
	get_order('sell',$('#main').attr('currency_mark'),$('#main').attr('base_id'),function(result){
      var data = result.datalist;
      $("#coinsalelist").empty();
      var length=parseInt(data.length);
      for(var i=1;i<=data.length;i++){
          $("#coinsalelist").append(
              "<tr class='list_con2'><td class='sell left_sell' style='width:96px;'>卖("+(i)+")</td><td style='width:78px;' onclick='getsell(this)'>"+data[length-i]['price']+"</td><td onclick='sellnum(this)' class='sell'>"+parseFloat(data[length-i]['num']-data[length-i]['trade_num']).toFixed(6)+"</td></tr>"                      
          );
          if(i == 1 && orderType_sell){
          	 $('#coinpricein').val(data[length-i]['price']);
          	 $('.sell_num').find('.mainUnit').find('i').text((Number($('.buyformarea').find('.buy').find('.balance').html().split('&nbsp;')[0].replace(/,/g,''))/Number(data[length-i]['price'])).toFixed(6));
          	 orderType_sell = false;
          }
      };
      $('.transact').find('.transact_header').find('a').eq(2).text('卖单('+length+')');
      $(".coinsalelist").empty();
      if(length>5){
      	var len = length-5;
      }else{
      	var len =0;
      }
      if(data!=''){
  		  for(var i=len,v=1;i<data.length;i++,v++){
	          $('.coinsalelist').append(
	              "<tr class='list_con2'><td class='sell left_sell' style='width:96px;'>卖("+(length-i)+")</td><td style='width:78px;' onclick='getsell(this)'>"+data[i]['price']+"</td><td class='sell' onclick='sellnum(this)'>"+parseFloat(data[i]['num']-data[i]['trade_num']).toFixed(6)+"</td></tr>"                          
	          )
	      }
      }
      
    });

	get_order('buy',$('#main').attr('currency_mark'),$('#main').attr('base_id'),function(result){
      var data = result.datalist;
      $("#coinbuylist").empty();
      var length=parseInt(data.length);
      for(var i=0;i<data.length;i++){
          $("#coinbuylist").append(
              "<tr class='list_con2'><td class='buy left_sell' style='width:96px;'>买("+(parseInt(i)+1)+")</td><td style='width:78px;' onclick='buynum(this);'>"+data[i]['price']+"</td><td class='buy' onclick='getbuy(this);'>"+parseFloat(data[i]['num']-data[i]['trade_num']).toFixed(6)+"</td></tr>"                        
          );
          if(i == 0 && orderType_buy){
          	$('#coinpriceout').val(data[i]['price']);
          	orderType_buy = false;
          }
      }
      $('.transact').find('.transact_header').find('a').eq(1).text('买单('+length+')');
      $('.coinbuylist').empty();
      if(length>5){
      	var len = 5;
      }else{
      	var len =length;
      }
      if(data!=''){
      	 for(var i=0;i<len;i++){
	          $('.coinbuylist').append(
	              "<tr class='list_con2'><td class='buy left_sell' style='width:96px;'>买("+(parseInt(i)+1)+")</td><td style='width:78px;' onclick='buynum(this);'>"+data[i]['price']+"</td><td class='buy' onclick='getbuy(this);'>"+parseFloat(data[i]['num']-data[i]['trade_num']).toFixed(6)+"</td></tr>"
	          )
	      }
      }
    });
}
/*我的委托*/
function get_user_order(type,currency,base_id,callback){
	$.ajax({
		type:"GET",
		url:GV.SZB_SITE+'/Orders/get_user_order',
		data:{'type':type,'currency':currency,'base_id':base_id},
		dataType:'json',
		success:function(result){
			callback(result);
		}
	})
}

function getUserOrder(){
	get_user_order('0',$('#main').attr('currency_mark'),$('#main').attr('base_id'),function(list){
		var temp = ''
		list.datalist.forEach(function(key, i) {
			temp += '<tr class="list_con2">';
            temp += '  <td>'+ formatTime(key.add_time) +'</td>';
            temp += '  <td class="'+ key.type +' left_sell" style="width:55px;">';
            if(key.type == 'buy'){
            	temp += '买';
            }else{
            	temp += '卖';
            }
            temp += '</td>';
            temp += '  <td style="width:50px;" class="'+ key.type +'">'+ key.price +'</td>';
            temp += '  <td>'+ (key.num) +'</td>';
            temp += '  <td>'+ key.trade_num +'</td>';
            temp += '  <td>'+ key.surplus+'</td>';
            temp += '  <td class="'+ key.type +'">'+ key.amount +'</td>';
            temp += '  <td style="width:40px;"><a href="javascript:void(0)"  onclick="cexiao('+ key.orders_id +')">撤销</a></td>';
            temp += '</tr>';
		})
		$('#mycointrustlist').empty();
		$('#mycointrustlist').append(temp);
	})
}

/*最新成交*/
function get_trade(type,currency,base_id,callback){
	$.ajax({
		type:"GET",
		url:GV.SZB_SITE+'/Orders/get_trade',
		data:{'type':type,'currency':currency,'base_id':base_id},
		dataType:'json',
		success:function(result){
			callback(result);
		}
	})
}

function getTrade(type,obj){
	get_trade(type,$('#main').attr('currency_mark'),$('#main').attr('base_id'),function(list){
		var temp = '';
		list.datalist.forEach(function(key, i) {
			temp += '<tr>';
            temp += '   <td class="list_con1">'+ formatTime(key.trade_time) +'</td>';
            temp += '   <td class="list_con1 '+ key.type +'">';
            if(key.type == 'sell'){
            	temp += '卖出';
            }else{
            	temp += '买入';
            }
            temp += '   </td>';
            temp += '   <td class="list_con1 '+ key.type +'">'+ key.price +'</td>';
            temp += '   <td class="list_con1">'+ key.num +'</td>';
            temp += '   <td class="list_con1">'+ key.amount +'</td>';
            temp += '</tr>';
		})
		obj.empty();
		obj.append(temp);
	})
}

/*我的成交*/
function get_user_trade(currency,base_id,callback){
	$.ajax({
		type:"GET",
		url:GV.SZB_SITE+'/Orders/get_user_trade',
		data:{'currency':currency,'base_id':base_id},
		dataType:'json',
		success:function(result){
			callback(result);
		}
	})
}

function getUserTrade(obj){
	get_user_trade($('#main').attr('currency_mark'),$('#main').attr('base_id'),function(list){
		var temp = '';
		list.datalist.forEach(function(key, i) {
			temp += '<tr>';
            temp += '   <td class="list_con1">'+ formatTime(key.add_time) +'</td>';
            temp += '   <td class="list_con1 '+ key.type +'">';
            if(key.type == 'sell'){
            	temp += '卖出';
            }else{
            	temp += '买入';
            }
            temp += '   </td>';
            temp += '   <td class="list_con1 '+ key.type +'">'+ key.price +'</td>';
            temp += '   <td class="list_con1">'+ key.num +'</td>';
            temp += '   <td class="list_con1">'+ key.money +'</td>';
            temp += '</tr>';
		})
		obj.empty();
		obj.append(temp);
	})
}

/*撤销委托单*/
function cancel(status,order_id,callback){
	$.ajax({
		type:"post",
		url:GV.SZB_SITE+'/Entrust/cancel',
		data:{'status':status,'order_id':order_id},
		dataType:'json',
		success:function(result){
			callback(result);
		}
	})
}

function cexiao(_this){
	layer.confirm('确定撤销委托？', {
	  btn: ['确定','取消'], //按钮
	  title: '撤销委托'
	}, function(){
	  cancel('-1',_this,function(data){
	  		if(data['status'] == 1){
			   layer.msg(data['info']);
			   // setTimeout(window.location.reload(),1000);
			   getUserOrder();
			   get_user_valid($('#main').attr('currency_id'),JSON.parse(sessionStorage.getItem("username"))['member_id'],$('#main').attr('currency_trade'),$('#main').attr('base_id'),$('#main').attr('currency_trade'),$('#main').attr('currency_mark'));
		   }else{
			   layer.msg(data['info']);
		   }
	  })
	}, function(){
	  layer.msg('已取消');
	});
}

/*限制只输入数字*/
function XNumbers(obj){
	obj.val(obj.val().replace(/[\W]/ig,""));
}

/*
复制文本函数
obj : 点击对象 text : 复制的文本
 */
function clipText(obj){
	var clipboard = new Clipboard(obj, {
		text: function(e) {
			return e.innerText;
		}
	});

	clipboard.on('success', function(e) {
		e.clearSelection();
	});
	$(obj).on('click',function(){
		layer.tips('复制地址成功', '.outwallet',{tips: [2, '#78BA32']});
	})
}

/*充币获取充币地址*/
function get_czurl(currency,vcode,callback){
	$.ajax({
		type:"GET",
		url:GV.SZB_SITE+'/Pay/get_czurl',
		data:{'currency':currency,'vcode':vcode},
		dataType:'json',
		success:function(result){
			callback(result);
		}
	})
}

/*充币提交*/
function dpcoin_add(amount,currency_id,txno,callback){
	$.ajax({
		type:"GET",
		url:GV.SZB_SITE+'/Pay/dpcoin_add',
		data:{'amount':amount,'currency_id':currency_id,'txno':txno},
		dataType:'json',
		success:function(result){
			callback(result);
		}
	})
}

/*充币分页*/
function get_czlist(currency,obj){
	var self = obj;
	var page= self.attr('page');
	$.ajax({
		type:"GET",
		url:GV.SZB_SITE+'/Pay/get_czlist',
		data:{'currency':currency,'page':page,'count':20},
		dataType:'json',
		success:function(result){
			// callback(result);
			getCzlistHtml(result);
			pagecnt(page);
		}
	})
}

function getCzlistHtml(list){
	var temp = '';
	list.datalist.forEach(function(key, i) {
		temp += '<tr id="btcin_box_'+ key.id +'" class="btcin_new">';
		temp += '   <td class="btcin_id">'+ key.id +'</td>';
		temp += '   <td class="btcin_wallet">'+ key.url +'</td>';		                
		temp += '   <td class="btcin_number">'+ key.num +'</td>';		                
		temp += '   <td class="btcin_created">'+ key.actual +'</td>';		                
		temp += '   <td class="btcin_created">'+ formatTime(key.add_time) +'</td>';		                
		if(key.status=='充币中'){
			temp += '<td class="tableEnd btcin_status btcin_auditing">等待审核</td>';
		}else{
			temp += '<td class="tableEnd btcin_status">充值成功</td>';
		}						
		temp += '</tr>';								            
	})
	$('.ybc_make').find('.raise_list').find('tbody').html(temp);
}

/*页码改变*/
function pagecnt(page){
	var curpage= $('.bAllpage').find('.pagecnt').find('#allPage').text();
	$('.bAllpage').find('.pagecnt').find('#pages').text(page);
	if(page=='2'){
		$('.bAllpage').find('.jumpbtn').find('button').eq(1).show();
		$('.bAllpage').find('.jumpbtn').find('button').eq(1).attr('page',Number(page)-1);
		$('.bAllpage').find('.jumpbtn').find('button').eq(2).attr('page',Number(page)+1);
	}else if(page=='1'){
		$('.bAllpage').find('.jumpbtn').find('button').eq(1).hide();
		$('.bAllpage').find('.jumpbtn').find('button').eq(2).attr('page',Number(page)+1);
	}else if(page == curpage){
		$('.bAllpage').find('.jumpbtn').find('button').eq(2).hide();
		$('.bAllpage').find('.jumpbtn').find('button').eq(1).attr('page',Number(page)-1);
	}else{
		$('.bAllpage').find('.jumpbtn').find('button').eq(2).show();
		$('.bAllpage').find('.jumpbtn').find('button').eq(1).attr('page',Number(page)-1);
		$('.bAllpage').find('.jumpbtn').find('button').eq(2).attr('page',Number(page)+1);
	}

}

/*提交绑定提币地址*/
function add_qianbao_address(name,address,address2,currency_id,callback){
	$.ajax({
		type:"post",
		url:GV.SZB_SITE+'/Pay/add_qb_addr',
		data:{'name':name,'address':address,'address2':address2,'currency_id':currency_id},
		dataType:'json',
		success:function(result){
			callback(result);
		}
	})
}
/*提币删除地址*/
function del_addr(id,currency_id,callback){
	$.ajax({
		type:"post",
		url:GV.SZB_SITE+'/Pay/del_addr',
		data:{'id':id,'currency_id':currency_id},
		dataType:'json',
		success:function(result){
			callback(result);
		}
	})
}
/*提币手机验证码*/
function wdcoin_sms(phone,callback){
	$.ajax({
		type:"post",
		url:GV.SZB_SITE+'/Pay/wdcoin_sms',
		data:{'phone':phone},
		dataType:'json',
		success:function(result){
			callback(result);
		}
	})
}

/*提币分页*/
function get_tblist(currency,obj){
	var self = obj;
	var page= self.attr('page');
	$.ajax({
		type:"GET",
		url:GV.SZB_SITE+'/Pay/get_tblist',
		data:{'currency':currency,'page':page,'count':20},
		dataType:'json',
		success:function(result){
			// callback(result);
			getTblistHtml(result);
			pagecnt(page);
		}
	})
}

function getTblistHtml(list){
	var temp = '';
	list.datalist.forEach(function(key, i) {
		temp += '<tr id="btc_box_'+ key.id +'" class="btc_new">';
		temp += '   <td class="btc_id">'+ key.id +'</td>';
		temp += '   <td class="btc_wallet">'+ key.url +'</td>';		                
		temp += '   <td class="btc_number">'+ key.num +'</td>';		                
		temp += '   <td class="btc_fee">'+ key.actual +'</td>';		                
		temp += '   <td class="btc_created">'+ formatTime(key.add_time) +'</td>';		                
		if(key.status=='提币中'){
			temp += '<td class="tableEnd btc_status btc_auditing">等待审核处理</td>';
		}else{
			temp += '<td class="tableEnd btc_status">充值成功</td>';
		}						
		temp += '</tr>';							            
	})
	$('.ybc_withdrawal').find('.raise_list').find('tbody').html(temp);
}

/*提币*/
function goTiBi(num,currency_id,phone,vcode,paypwd,addr_id,gcode,callback){
	$.ajax({
		type:"post",
		url:GV.SZB_SITE+'/Pay/wdcoin_add',
		data:{'num':num,'currency_id':currency_id,'phone':phone,'vcode':vcode,'paypwd':paypwd,'addr_id':addr_id,'gcode':gcode},
		dataType:'json',
		success:function(result){
			callback(result);
		}
	})
}

/*用户昵称获取*/
function get_user_shortinfo(callback){
	$.ajax({
		type:"post",
		url:GV.SZB_SITE+'/user/get_user_shortinfo',
		dataType:'json',
		success:function(result){
			callback(result);
		}
	})
}

/*交易中心刷余额*/
function get_user_valid(currency_id,member_id,currency_nub,base_id,basemark,currency_mark){
	$.ajax({
		type:"post",
		url:GV.SZB_SITE+'/orders/get_user_valid',
		data:{'currency_id':currency_id,'member_id':member_id,'baseid':base_id,'basemark':basemark},
		dataType:'json',
		success:function(data){
			if(data.base_num !=''||data.base_num != null){
				$('.buyformarea').find('.buy').find('.balance').html(thousandBitSeparator(data.base_num)+'&nbsp;'+currency_nub);
			}else{
				$('.buyformarea').find('.buy').find('.balance').html('0.00&nbsp;'+currency_nub);
			}
			if(data.currency_num !='' || data.currency_num != null){
				$('.buyformarea').find('.sell').find('.balance').html(thousandBitSeparator(Number(data.currency_num).toFixed(6))+'&nbsp;'+currency_mark);
			}else{
				$('.buyformarea').find('.sell').find('.balance').html('0.000000&nbsp;'+currency_mark);
			}

		}
	})
}