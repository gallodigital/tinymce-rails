!function(){var e={},t=function(t){for(var n=e[t],i=n.deps,o=n.defn,a=i.length,s=new Array(a),l=0;l<a;++l)s[l]=r(i[l]);var c=o.apply(null,s);if(void 0===c)throw"module ["+t+"] returned undefined";n.instance=c},n=function(t,n,r){if("string"!=typeof t)throw"module id must be a string";if(void 0===n)throw"no dependencies for "+t;if(void 0===r)throw"no definition function for "+t;e[t]={deps:n,defn:r,instance:void 0}},r=function(n){var r=e[n];if(void 0===r)throw"module ["+n+"] was undefined";return void 0===r.instance&&t(n),r.instance},i=function(e,t){for(var n=e.length,i=new Array(n),o=0;o<n;++o)i.push(r(e[o]));t.apply(null,t)},o={};o.bolt={module:{api:{define:n,require:i,demand:r}}};var a=n,s=function(e,t){a(e,[],function(){return t})};s("1",tinymce.ThemeManager),s("2",tinymce.util.Delay),s("c",tinymce.util.Tools),s("d",tinymce.ui.Factory),s("e",tinymce.DOM),a("j",[],function(){var e=function(e){return function(t){return typeof t===e}},t=function(e){return Array.isArray(e)},n=function(e){return null===e},r=function(e){return function(r){return!n(r)&&!t(r)&&e(r)}};return{isString:e("string"),isNumber:e("number"),isBoolean:e("boolean"),isFunction:e("function"),isObject:r(e("object")),isNull:n,isArray:t}}),a("f",["c","d","j"],function(e,t,n){var r=function(e,t){var n=function(e,t){return{selector:e,handler:t}},r=function(e){t.active(e)},i=function(e){t.disabled(e)};return t.settings.stateSelector?n(t.settings.stateSelector,r):t.settings.disabledStateSelector?n(t.settings.disabledStateSelector,i):null},i=function(e,t,n){return function(){var i=r(t,n);null!==i&&e.selection.selectorChanged(i.selector,i.handler)}},o=function(e){return n.isArray(e)?e:n.isString(e)?e.split(/[ ,]/):[]},a=function(n,r,a){var s,l=[];if(a)return e.each(o(a),function(e){var r;"|"==e?s=null:t.has(e)?(e={type:e},l.push(e),s=null):n.buttons[e]&&(s||(s={type:"buttongroup",items:[]},l.push(s)),r=e,e=n.buttons[r],"function"==typeof e&&(e=e()),e.type=e.type||"button",e=t.create(e),e.on("postRender",i(n,r,e)),s.items.push(e))}),t.create({type:"toolbar",layout:"flow",name:r,items:l})};return{create:a}}),s("o",tinymce.util.Promise),a("p",[],function(){var e=0,t=function(){var e=function(){return Math.round(4294967295*Math.random()).toString(36)};return"s"+Date.now().toString(36)+e()+e()+e()},n=function(n){return n+e++ +t()};return{uuid:n}}),a("u",[],function(){var e=function(e,t){function n(n){var i,o,a;o=t[n?"startContainer":"endContainer"],a=t[n?"startOffset":"endOffset"],1==o.nodeType&&(i=e.create("span",{"data-mce-type":"bookmark"}),o.hasChildNodes()?(a=Math.min(a,o.childNodes.length-1),n?o.insertBefore(i,o.childNodes[a]):e.insertAfter(i,o.childNodes[a])):o.appendChild(i),o=i,a=0),r[n?"startContainer":"endContainer"]=o,r[n?"startOffset":"endOffset"]=a}var r={};return n(!0),t.collapsed||n(),r},t=function(e,t){function n(n){function r(e){for(var t=e.parentNode.firstChild,n=0;t;){if(t==e)return n;1==t.nodeType&&"bookmark"==t.getAttribute("data-mce-type")||n++,t=t.nextSibling}return-1}var i,o,a;i=a=t[n?"startContainer":"endContainer"],o=t[n?"startOffset":"endOffset"],i&&(1==i.nodeType&&(o=r(i),i=i.parentNode,e.remove(a)),t[n?"startContainer":"endContainer"]=i,t[n?"startOffset":"endOffset"]=o)}n(!0),n();var r=e.createRng();return r.setStart(t.startContainer,t.startOffset),t.endContainer&&r.setEnd(t.endContainer,t.endOffset),r};return{create:e,resolve:t}}),s("v",tinymce.dom.TreeWalker),s("w",tinymce.dom.RangeUtils),a("q",["u","c","v","w"],function(e,t,n,r){var i=function(e,t,r){var i,o,a=[];for(i=new n(t,e),o=t;o&&(1===o.nodeType&&a.push(o),o!==r);o=i.next());return a},o=function(n,r){var i,o,a;o=n.dom,a=n.selection,i=e.create(o,a.getRng()),t.each(r,function(e){n.dom.remove(e,!0)}),a.setRng(e.resolve(o,i))},a=function(e){return"A"===e.nodeName&&e.hasAttribute("href")},s=function(e,t){var n=e.getParent(t,a);return n?n:t},l=function(e){var n,o,l,c,u,d,f;return u=e.selection,d=e.dom,f=u.getRng(),n=s(d,r.getNode(f.startContainer,f.startOffset)),o=r.getNode(f.endContainer,f.endOffset),l=e.getBody(),c=t.grep(i(l,n,o),a)},c=function(e){o(e,l(e))};return{unlinkSelection:c}}),a("m",["p","q"],function(e,t){var n=function(e,t){var n,r,i;for(i='<table data-mce-id="mce" style="width: 100%">',i+="<tbody>",r=0;r<t;r++){for(i+="<tr>",n=0;n<e;n++)i+="<td><br></td>";i+="</tr>"}return i+="</tbody>",i+="</table>"},r=function(e){var t=e.dom.select("*[data-mce-id]");return t[0]},i=function(e,t,i){e.undoManager.transact(function(){var o,a;e.insertContent(n(t,i)),o=r(e),o.removeAttribute("data-mce-id"),a=e.dom.select("td,th",o),e.selection.setCursorLocation(a[0],0)})},o=function(e,t){e.execCommand("FormatBlock",!1,t)},a=function(t,n,r){var i,o;i=t.editorUpload.blobCache,o=i.create(e.uuid("mceu"),r,n),i.add(o),t.insertContent(t.dom.createHTML("img",{src:o.blobUri()}))},s=function(e){e.selection.collapse(!1)},l=function(e){e.focus(),t.unlinkSelection(e),s(e)},c=function(e,t,n){e.focus(),e.dom.setAttrib(t,"href",n),s(e)},u=function(e,t){e.execCommand("mceInsertLink",!1,{href:t}),s(e)},d=function(e,t){var n=e.dom.getParent(e.selection.getStart(),"a[href]");n?c(e,n,t):u(e,t)},f=function(e,t){0===t.trim().length?l(e):d(e,t)};return{insertTable:i,formatBlock:o,insertBlob:a,createLink:f,unlink:l}}),a("r",[],function(){var e=function(e){return/^www\.|\.(com|org|edu|gov|uk|net|ca|de|jp|fr|au|us|ru|ch|it|nl|se|no|es|mil)$/i.test(e.trim())},t=function(e){return/^https?:\/\//.test(e.trim())};return{isDomainLike:e,isAbsolute:t}}),a("g",["c","d","o","m","r"],function(e,t,n,r,i){var o=function(e){e.find("textbox").eq(0).each(function(e){e.focus()})},a=function(n,r){var i=t.create(e.extend({type:"form",layout:"flex",direction:"row",padding:5,name:n,spacing:3},r));return i.on("show",function(){o(i)}),i},s=function(e,t){return t?e.show():e.hide()},l=function(e,t){return new n(function(n){e.windowManager.confirm("The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(e){var r=e===!0?"http://"+t:t;n(r)})})},c=function(e,t){return!i.isAbsolute(t)&&i.isDomainLike(t)?l(e,t):n.resolve(t)},u=function(e,t){var n={},i=function(){e.focus(),r.unlink(e),t()},o=function(e){var t=e.meta;t&&t.attach&&(n={href:this.value(),attach:t.attach})},l=function(t){if(t.control===this){var n,r="";n=e.dom.getParent(e.selection.getStart(),"a[href]"),n&&(r=e.dom.getAttrib(n,"href")),this.fromJSON({linkurl:r}),s(this.find("#unlink"),n),this.find("#linkurl")[0].focus()}};return a("quicklink",{items:[{type:"button",name:"unlink",icon:"unlink",onclick:i,tooltip:"Remove link"},{type:"filepicker",name:"linkurl",placeholder:"Paste or type a link",filetype:"file",onchange:o},{type:"button",icon:"checkmark",subtype:"primary",tooltip:"Ok",onclick:"submit"}],onshow:l,onsubmit:function(i){c(e,i.data.linkurl).then(function(i){e.undoManager.transact(function(){i===n.href&&(n.attach(),n={}),r.createLink(e,i)}),t()})}})};return{createQuickLinkForm:u}}),s("s",tinymce.geom.Rect),a("t",[],function(){var e=function(e){return{x:e.left,y:e.top,w:e.width,h:e.height}},t=function(e){return{left:e.x,top:e.y,width:e.w,height:e.h,right:e.x+e.w,bottom:e.y+e.h}};return{fromClientRect:e,toClientRect:t}}),a("h",["e","s","t"],function(e,t,n){var r=function(t){var n=e.getViewPort();return{x:t.x+n.x,y:t.y+n.y,w:t.w,h:t.h}},i=function(e){var t=e.getBoundingClientRect();return r({x:t.left,y:t.top,w:Math.max(e.clientWidth,e.offsetWidth),h:Math.max(e.clientHeight,e.offsetHeight)})},o=function(e,t){return i(t)},a=function(e){return i(e.getElement().ownerDocument.body)},s=function(e){return i(e.getContentAreaContainer()||e.getBody())},l=function(e){var t=e.selection.getBoundingClientRect();return t?r(n.fromClientRect(t)):null};return{getElementRect:o,getPageAreaRect:a,getContentAreaRect:s,getSelectionRect:l}}),a("i",["s","t"],function(e,t){var n=function(e,t){return{rect:e,position:t}},r=function(e,t){return{x:t.x,y:t.y,w:e.w,h:e.h}},i=function(t,i,o,a,s){var l,c,u;return l=e.findBestRelativePosition(s,o,a,t),o=e.clamp(o,a),l?(c=e.relativePosition(s,o,l),u=r(s,c),n(u,l)):(o=e.intersect(a,o),o?(l=e.findBestRelativePosition(s,o,a,i))?(c=e.relativePosition(s,o,l),u=r(s,c),n(u,l)):(u=r(s,o),n(u,l)):null)},o=function(e,t,n){return i(["cr-cl","cl-cr"],["bc-tc","bl-tl","br-tr"],e,t,n)},a=function(e,t,n){return i(["tc-bc","bc-tc","tl-bl","bl-tl","tr-br","br-tr"],["bc-tc","bl-tl","br-tr"],e,t,n)},s=function(e,n,r,i){var o;return"function"==typeof e?(o=e({elementRect:t.toClientRect(n),contentAreaRect:t.toClientRect(r),panelRect:t.toClientRect(i)}),t.fromClientRect(o)):i},l=function(e){return e.panelRect};return{calcInsert:o,calc:a,userConstrain:s,defaultHandler:l}}),a("a",["j"],function(e){var t=function(e,t){if(t(e))return!0;throw new Error("Default value doesn't match requested type.")},n=function(e){return function(n,r,i){var o=n.settings;return t(i,e),r in o&&e(o[r])?o[r]:i}},r=function(e,t){return e.split(t).filter(function(e){return e.length>0})},i=function(t,n){var i=function(e){return"string"==typeof e?r(e,/[ ,]/):e},o=function(e,t){return e===!1?[]:t};return e.isArray(t)?t:e.isString(t)?i(t):e.isBoolean(t)?o(t,n):n},o=function(e){return function(n,r,o){var a=r in n.settings?n.settings[r]:o;return t(o,e),i(a,o)}};return{getStringOr:n(e.isString),getBoolOr:n(e.isBoolean),getNumberOr:n(e.isNumber),getHandlerOr:n(e.isFunction),getToolbarItemsOr:o(e.isArray)}}),a("3",["c","d","e","f","g","h","i","a"],function(e,t,n,r,i,o,a,s){return function(){var l,c,u=["bold","italic","|","quicklink","h2","h3","blockquote"],d=["quickimage","quicktable"],f=function(t,n){return e.map(n,function(e){return r.create(t,e.id,e.items)})},p=function(e){return s.getToolbarItemsOr(e,"selection_toolbar",u)},m=function(e){return s.getToolbarItemsOr(e,"insert_toolbar",d)},h=function(e){return e.items().length>0},g=function(n,o){var a=f(n,o).concat([r.create(n,"text",p(n)),r.create(n,"insert",m(n)),i.createQuickLinkForm(n,k)]);return t.create({type:"floatpanel",role:"dialog",classes:"tinymce tinymce-inline arrow",ariaLabel:"Inline toolbar",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!0,border:1,items:e.grep(a,h),oncancel:function(){n.focus()}})},v=function(e){e&&e.show()},b=function(e,t){e.moveTo(t.x,t.y)},y=function(t,n){n=n?n.substr(0,2):"",e.each({t:"down",b:"up",c:"center"},function(e,r){t.classes.toggle("arrow-"+e,r===n.substr(0,1))}),"cr"===n?(t.classes.toggle("arrow-left",!0),t.classes.toggle("arrow-right",!1)):"cl"===n?(t.classes.toggle("arrow-left",!0),t.classes.toggle("arrow-right",!0)):e.each({l:"left",r:"right"},function(e,r){t.classes.toggle("arrow-"+e,r===n.substr(1,1))})},C=function(e,t){var n=e.items().filter("#"+t);return n.length>0&&(n[0].show(),e.reflow(),!0)},x=function(e,t,r,i){var l,u,d,f;return f=s.getHandlerOr(r,"inline_toolbar_position_handler",a.defaultHandler),l=o.getContentAreaRect(r),u=n.getRect(e.getEl()),d="insert"===t?a.calcInsert(i,l,u):a.calc(i,l,u),!!d&&(u=d.rect,c=i,b(e,a.userConstrain(f,i,l,u)),y(e,d.position),!0)},w=function(e,t,n,r){return v(e),e.items().hide(),C(e,t)?void(x(e,t,n,r)===!1&&k(e)):void k(e)},N=function(){return l.items().filter("form:visible").length>0},E=function(e,t){if(l){if(l.items().hide(),!C(l,t))return void k(l);var r,i,u,d;v(l),l.items().hide(),C(l,t),d=s.getHandlerOr(e,"inline_toolbar_position_handler",a.defaultHandler),r=o.getContentAreaRect(e),i=n.getRect(l.getEl()),u=a.calc(c,r,i),u&&(i=u.rect,b(l,a.userConstrain(d,c,r,i)),y(l,u.position))}},S=function(e,t,n,r){l||(l=g(e,r),l.renderTo(document.body).reflow().moveTo(n.x,n.y),e.nodeChanged()),w(l,t,e,n)},_=function(e,t,n){l&&x(l,t,e,n)},k=function(){l&&l.hide()},T=function(){l&&l.find("toolbar:visible").eq(0).each(function(e){e.focus(!0)})},R=function(){l&&(l.remove(),l=null)},A=function(){return l&&l.visible()&&N()};return{show:S,showForm:E,reposition:_,inForm:A,hide:k,focus:T,remove:R}}}),a("k",["o"],function(e){var t=function(t){return new e(function(e){var n=new FileReader;n.onloadend=function(){e(n.result.split(",")[1])},n.readAsDataURL(t)})};return{blobToBase64:t}}),a("l",["o"],function(e){var t=function(){return new e(function(e){var t;t=document.createElement("input"),t.type="file",t.style.position="fixed",t.style.left=0,t.style.top=0,t.style.opacity=.001,document.body.appendChild(t),t.onchange=function(t){e(Array.prototype.slice.call(t.target.files))},t.click(),t.parentNode.removeChild(t)})};return{pickFile:t}}),a("4",["3","k","l","m"],function(e,t,n,r){var i=function(e){for(var t=function(t){return function(){r.formatBlock(e,t)}},n=1;n<6;n++){var i="h"+n;e.addButton(i,{text:i.toUpperCase(),tooltip:"Heading "+n,stateSelector:i,onclick:t(i),onPostRender:function(){var e=this.getEl().firstChild.firstChild;e.style.fontWeight="bold"}})}},o=function(e,o){e.addButton("quicklink",{icon:"link",tooltip:"Insert/Edit link",stateSelector:"a[href]",onclick:function(){o.showForm(e,"quicklink")}}),e.addButton("quickimage",{icon:"image",tooltip:"Insert image",onclick:function(){n.pickFile().then(function(n){var i=n[0];t.blobToBase64(i).then(function(t){r.insertBlob(e,t,i)})})}}),e.addButton("quicktable",{icon:"table",tooltip:"Insert table",onclick:function(){o.hide(),r.insertTable(e,2,2)}}),i(e)};return{addToEditor:o}}),s("n",tinymce.EditorManager),a("5",["n","e"],function(e,t){var n=function(e,t){var n=function(){e._skinLoaded=!0,e.fire("SkinLoaded"),t()};e.initialized?n():e.on("init",n)},r=function(t){var n=e.baseURL+"/skins/";return t?n+t:n+"lightgray"},i=function(e,t){return e.documentBaseURI.toAbsolute(t)},o=function(e,o){var a=e.settings,s=a.skin_url?i(e,a.skin_url):r(a.skin),l=function(){n(e,o)};t.styleSheetLoader.load(s+"/skin.min.css",l),e.contentCSS.push(s+"/content.inline.min.css")};return{load:o}}),a("8",[],function(){var e=function(e,t){return{id:e,rect:t}},t=function(e,t){for(var n=0;n<t.length;n++){var r=t[n],i=r(e);if(i)return i}return null};return{match:t,result:e}}),a("6",["8","h"],function(e,t){var n=function(n){return function(r){return r.selection.isCollapsed()?null:e.result(n,t.getSelectionRect(r))}},r=function(n,r){return function(i){var o,a=i.schema.getTextBlockElements();for(o=0;o<n.length;o++)if("TABLE"===n[o].nodeName)return null;for(o=0;o<n.length;o++)if(n[o].nodeName in a)return i.dom.isEmpty(n[o])?e.result(r,t.getSelectionRect(i)):null;return null}};return{textSelection:n,emptyTextBlock:r}}),a("7",["8","h"],function(e,t){var n=function(n,r){return function(i){for(var o=0;o<r.length;o++)if(r[o].predicate(n))return e.result(r[o].id,t.getElementRect(i,n));return null}},r=function(n,r){return function(i){for(var o=0;o<n.length;o++)for(var a=0;a<r.length;a++)if(r[a].predicate(n[o]))return e.result(r[a].id,t.getElementRect(i,n[o]));return null}};return{element:n,parent:r}}),a("9",[],function(){var e=function(t){return t.reduce(function(t,n){return Array.isArray(n)?t.concat(e(n)):t.concat(n)},[])};return{flatten:e}}),a("b",["c"],function(e){var t=function(e,t){return{id:e,predicate:t}},n=function(n){return e.map(n,function(e){return t(e.id,e.predicate)})};return{create:t,fromContextToolbars:n}}),a("0",["1","2","3","4","5","6","7","8","9","a","b"],function(e,t,n,r,i,o,a,s,l,c,u){var d=function(e){var t=e.selection.getNode(),n=e.dom.getParents(t);return n},f=function(e,t,n,r){var i=function(n){return e.dom.is(n,t)};return{predicate:i,id:n,items:r}},p=function(e){var t=e.contextToolbars;return l.flatten([t?t:[],f(e,"img","image","alignleft aligncenter alignright")])},m=function(e,t){var n,r,i;return r=d(e),i=u.fromContextToolbars(t),n=s.match(e,[a.element(r[0],i),o.textSelection("text"),o.emptyTextBlock(r,"insert"),a.parent(r,i)]),n&&n.rect?n:null},h=function(e,t){var n=function(){var n=p(e),r=m(e,n);r?t.show(e,r.id,r.rect,n):t.hide()};return function(){e.removed||n()}},g=function(e,t){return function(){var n=p(e),r=m(e,n);r&&t.reposition(e,r.id,r.rect)}},v=function(e,t){return function(){e.inForm()||t()}},b=function(e,n){var r=t.throttle(h(e,n),0),i=t.throttle(v(n,h(e,n)),0);e.on("blur hide ObjectResizeStart",n.hide),e.on("click",r),e.on("nodeChange mouseup",i),e.on("ResizeEditor keyup",r),e.on("ResizeWindow",g(e,n)),e.on("remove",n.remove),e.shortcuts.add("Alt+F10","",n.focus)},y=function(e,t){e.shortcuts.remove("meta+k"),e.shortcuts.add("meta+k","",function(){var n=p(e),r=r=s.match(e,[o.textSelection("quicklink")]);r&&t.show(e,r.id,r.rect,n)})},C=function(e,t){return i.load(e,function(){b(e,t),y(e,t)}),{}},x=function(e){throw new Error(e)};return e.add("inlite",function(e){var t=new n;r.addToEditor(e,t);var i=function(){return e.inline?C(e,t):x("inlite theme only supports inline mode.")};return{renderUI:i}}),function(){}}),r("0")()}();