function getQueryString(a) {
	var b = window.location.search.substr(1);
	return b ? queryStringToArray(b)[a] : null
}
function queryStringToArray(a) {
	if (!a) return "";
	a = a.split("&");
	for (var b, c = [], d = 0; d < a.length; d++) b = a[d].split("="), c.length += 1, c[b[0]] = decodeURI(b[1]);
	return c
}

function getPreHtml(a) {
	var b = "<ol class='jk-code'>";
	a = (a || "").replace(/(<)/g, "&lt;").replace(/(>)/g, "&gt;").replace(/ /g, "&nbsp;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
	a = a.split(/\s+/g);
	for (var c = 0; c < a.length; c++)"" != strTrim(a[c].replace(/(&nbsp;)*/g, "")) && (b += "<li>" + a[c] + "</li>");
	return b + "</ol>" || ""
}

function getScrollWidth() {
	var a = document.createElement("DIV");
	a.style.cssText = "position:absolute;top:-1000px;width:100px;height:100px; overflow:hidden;";
	var b = document.body.appendChild(a).clientWidth;
	a.style.overflowY = "scroll";
	var c = a.clientWidth;
	document.body.removeChild(a);
	return b - c
}
function SetSelfWidthByParent(a) {
	a.hide();
	var b = a.parent().width();
	a.css({
		width: b
	});
	a.show()
}
function getCountDays(a) {
	a = new Date(a);
	var b = a.getMonth();
	a.setMonth(b + 1);
	a.setDate(0);
	return a.getDate()
}

function addZero(a) {
	a = getNumber(a);
	return 9 < a ? a : "0" + a
}
function JKError(a) {
	$("body").JKAlert({
		content: a,
		type: "error"
	})
}
function getRand(a, b) {
	a = Math.random() * (b - a) + a;
	return a = Math.floor(a)
}
function getNumber(a, b) {
	b = b || !1;
	return "string" === typeof a ? (/(\+|\-)?\d+(\.\d+)?/.test(a) || (a = "0"), b ? parseFloat(a) : parseInt(a)) : "number" === typeof a ? a : 0
}
function getArrMinKey(a) {
	for (var b = a[0], c = 0, d = 0; d < a.length; d++) b > a[d] && (b = a[d], c = d);
	return c
}

function getArrMaxKey(a) {
	for (var b = a[0], c = 0, d = 0; d < a.length; d++) b < a[d] && (b = a[d], c = d);
	return c
}
function repeatStr(a, b) {
	var c = "";
	b = Math.round(b);
	for (var d = 0; d < b; d++) c += a;
	return c
}
function strRemove(a, b) {
	if (!a || "" == a) return "";
	b || (b = "");
	return a.replace(new RegExp("\\" + ("" == b ? "s" : b), "g"), "")
}

function strTrim(a, b) {
	if (!a || "" == a) return "";
	b || (b = "");
	b = "" == b ? "s" : b;
	symollen = b.length;
	for (var c = 0; c < symollen; c++) {
		var d = new RegExp("^\\" + b[c] + "*");
		a = a.replace(d, "")
	}
	for (c = symollen - 1; 0 <= c; c--) d = new RegExp("\\" + b[c] + "*$"), a = a.replace(d, "");
	return a
}
function doExtend(a, b, c, d) {
	loadJs(b);
	a.each(function() {
		eval("new " + b + "($(this),c,d)")
	});
	return a
}

function addNum(a, b) {
	try {
		var c = a.toString().split(".")[1].length
	} catch (e) {
		c = 0
	}
	try {
		var d = b.toString().split(".")[1].length
	} catch (e) {
		d = 0
	}
	c = Math.pow(10, Math.max(c, d));
	return (a * c + b * c) / c
}

function JKAjax(a, b, c) {
	$("body").JKAlert({
		content: "\u8bf7\u6c42\u5904\u7406\u4e2d",
		height: "35",
		type: "load",
		titleshow: !1,
		shadow: 0
	});
	$.ajax({
		url: a || "",
		type: "POST",
		dataType: "json",
		data: b || ""
	}).done(function(a) {
		$("body").JKAlert({
			close: !0
		});
		c ? c(a) : ""
	}).fail(function(a, b, f) {
		$("body").JKAlert({
			close: !0
		});
		c ? c(["\u8bf7\u6c42\u9519\u8bef\uff1a" + f]) : ""
	})
}

function arrayUnique(a, b) {
	var c = [],
		d = a.length;
	if (0 < d) for (var e = 0; e < d; e++) b && (isNaN(parseFloat(a[e])) || (a[e] = parseFloat(a[e]))), -1 == c.indexOf(a[e]) && c.push(a[e]);
	return c
}

function checkValue(a, b, c) {
	a = strTrim(a || "required");
	b = strTrim(b || "");
	var d = "\u9a8c\u8bc1\u9519\u8bef!";
	c = strTrim(c || "");
	typearr = a.split("#");
	a = typearr[0];
	tlength = typearr[1] || 0;
	switch (a) {
	case "required":
		a = /.+/g.test(b);
		d = "\u5fc5\u586b\u9879\u4e0d\u80fd\u4e3a\u7a7a!";
		break;
	case "number":
		a = /^-?\d+(\.\d+)?$/g.test(b);
		d = "\u4e0d\u662f\u5408\u6cd5\u7684\u6570\u5b57!";
		break;
	case "tel11":
		a = /^1\d{10}$/g.test(b);
		d = "\u624b\u673a\u53f7\u7801\u9519\u8bef!";
		break;
	case "tel":
		a = /^(\d+-){0,2}\d{4,}$/g.test(b);
		d = "\u7535\u8bdd\u53f7\u7801\u9519\u8bef!";
		break;
	case "len":
		a = (new RegExp(".{" + tlength + ",}")).test(b);
		d = "\u957f\u5ea6\u4e0d\u80fd\u4f4e\u4e8e" + tlength + "\u4f4d";
		break;
	case "date":
		a = /^\d{2,4}(-|\/|\u5e74)?\d{1,2}(-|\/|\u6708)?\d{1,2}(\u65e5)?$/g.test(b);
		d = "\u65e5\u671f\u9519\u8bef!";
		break;
	case "datetime":
		a = /^\d{2,4}(-|\/|\u5e74)?\d{1,2}(-|\/|\u6708)?\d{1,2}(\u65e5)?\s+(\d{1,2}:){2}\d{1,2}$/g.test(b);
		d = "\u65e5\u671f\u65f6\u95f4\u9519\u8bef!";
		break;
	default:
		a = 3
	}
	return [a, "" == c ? d : c]
}

function setCookie(a, b, c) {
	if (c && "" != c) {
		var d = new Date;
		d.setDate(d.getDate() + c);
		document.cookie = a + "=" + b + ";expires=" + d
	} else document.cookie = a + "=" + b
}
function getCookie(a) {
	for (var b = document.cookie.split("; "), c = b.length, d = 0; d < c; d++) {
		var e = b[d].split("=");
		if (e[0] == a) return e[1]
	}
	return ""
}
function deleteCookie(a) {
	setCookie(a, 1, -1)
}
function JKCache(a, b, c) {
	if (1 == arguments.length) return getCookie(a); - 1 == getNumber(arguments[1]) ? deleteCookie(a, 1, -1) : arguments[2] ? setCookie(a, b, c) : setCookie(a, b)
}

function getSplitValue(a, b, c) {
	return a.split(b)[c] || ""
}

function JKAdminToUrl(a, b, c) {
	if (c) return $("body").append('<a style="display:none" target=' + c + ' href="' + a + '">' + b + "</a>"), $("body>a:last").get(0).click(), $("body>a:last").remove(), !1;
	var d = !1;
	$(".jk-frame-left a[href!='javascript:;']").each(function(b, c) {
		if ($(this).attr("href") == a) return d = !0, $(this).get(0).click(), !1
	});
	if (d) return !1;
	$(".jk-frame-left").append('<a style="display:none" href="' + a + '">' + b + "</a>");
	$(".jk-frame-left>a:last").get(0).click();
	return !1
}

function JKDate(a, b, c) {
	"" == b && (b = "date");
	a = (a || "").replace(/(\u5e74|\u6708|\u65e5|\-)/g, "/");
	a = a.replace(/(\u65f6|\u5206|\u79d2)/g, ":");
	a = strTrim(a, "/");
	a = strTrim(a, ":");
	a = "" == a ? new Date : new Date(a);
	c = a.getDate() + (c || 0);
	a.setDate(c);
	c = a.getFullYear() + "-" + addZero(a.getMonth() + 1) + "-" + addZero(a.getDate());
	a = addZero(a.getHours()) + ":" + addZero(a.getMinutes()) + ":" + addZero(a.getSeconds());
	return "date" == b ? c : c + " " + a
};