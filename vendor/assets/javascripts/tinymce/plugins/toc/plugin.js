/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.2.1 (2020-03-25)
 */
!function(){"use strict";function e(n){return function(t){function e(){return t.setDisabled(n.mode.isReadOnly()||!v.hasHeaders(n))}return e(),n.on("LoadContent SetContent change",e),function(){return n.on("LoadContent SetContent change",e)}}}var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),l=tinymce.util.Tools.resolve("tinymce.util.I18n"),i=tinymce.util.Tools.resolve("tinymce.util.Tools"),c=function(t){return t.getParam("toc_class","mce-toc")},d=function(t){var e=t.getParam("toc_header","h2");return/^h[1-6]$/.test(e)?e:"h2"},a=function(t){var e=parseInt(t.getParam("toc_depth","3"),10);return 1<=e&&e<=9?e:3},s=function(e){var n=0;return function(){var t=(new Date).getTime().toString(32);return e+t+(n++).toString(32)}}("mcetoc_"),f=function f(t){var e,n=[];for(e=1;e<=t;e++)n.push("h"+e);return n.join(",")},m=function(n){var o=c(n),t=d(n),e=f(a(n)),r=n.$(e);return r.length&&/^h[1-9]$/i.test(t)&&(r=r.filter(function(t,e){return!n.dom.hasClass(e.parentNode,o)})),i.map(r,function(t){return{id:t.id?t.id:s(),level:parseInt(t.nodeName.replace(/^H/i,""),10),title:n.$.text(t),element:t}})},o=function(t){var e,n,o,r,i="",c=m(t),a=function(t){var e,n=9;for(e=0;e<t.length;e++)if(t[e].level<n&&(n=t[e].level),1===n)return n;return n}(c)-1;if(!c.length)return"";for(i+=function(t,e){var n="</"+t+">";return"<"+t+' contenteditable="true">'+u.DOM.encode(e)+n}(d(t),l.translate("Table of Contents")),e=0;e<c.length;e++){if((o=c[e]).element.id=o.id,r=c[e+1]&&c[e+1].level,a===o.level)i+="<li>";else for(n=a;n<o.level;n++)i+="<ul><li>";if(i+='<a href="#'+o.id+'">'+o.title+"</a>",r!==o.level&&r)for(n=o.level;r<n;n--)i+="</li></ul><li>";else i+="</li>",r||(i+="</ul>");a=o.level}return i},r=function(t){var e=c(t),n=t.$("."+e);n.length&&t.undoManager.transact(function(){n.html(o(t))})},v={hasHeaders:function(t){return 0<m(t).length},insertToc:function(t){var e=c(t),n=t.$("."+e);!function(t,e){return!e.length||0<t.dom.getParents(e[0],".mce-offscreen-selection").length}(t,n)?r(t):t.insertContent(function(t){var e=o(t);return'<div class="'+t.dom.encode(c(t))+'" contenteditable="false">'+e+"</div>"}(t))},updateToc:r},n=function(t){t.addCommand("mceInsertToc",function(){v.insertToc(t)}),t.addCommand("mceUpdateToc",function(){v.updateToc(t)})},g=function(t){var n=t.$,o=c(t);t.on("PreProcess",function(t){var e=n("."+o,t.node);e.length&&(e.removeAttr("contentEditable"),e.find("[contenteditable]").removeAttr("contentEditable"))}),t.on("SetContent",function(){var t=n("."+o);t.length&&(t.attr("contentEditable",!1),t.children(":first-child").attr("contentEditable",!0))})},h=function(t){t.ui.registry.addButton("toc",{icon:"toc",tooltip:"Table of contents",onAction:function(){return t.execCommand("mceInsertToc")},onSetup:e(t)}),t.ui.registry.addButton("tocupdate",{icon:"reload",tooltip:"Update",onAction:function(){return t.execCommand("mceUpdateToc")}}),t.ui.registry.addMenuItem("toc",{icon:"toc",text:"Table of contents",onAction:function(){return t.execCommand("mceInsertToc")},onSetup:e(t)}),t.ui.registry.addContextToolbar("toc",{items:"tocupdate",predicate:function(e){return function(t){return t&&e.dom.is(t,"."+c(e))&&e.getBody().contains(t)}}(t),scope:"node",position:"node"})};!function p(){t.add("toc",function(t){n(t),h(t),g(t)})}()}();