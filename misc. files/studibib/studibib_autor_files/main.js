window.yepnope=function(a,b){function c(){}function d(a){return Object(a)===a}function e(a){return"string"==typeof a}function f(){return"yn_"+q++}function g(){o&&o.parentNode||(o=b.getElementsByTagName("script")[0])}function h(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function i(b,c){c.call(a)}function j(a,j){var k,l,m;e(a)?k=a:d(a)&&(k=a._url||a.src,l=a.attrs,m=a.timeout),j=j||c,l=l||{};var q,r,t=b.createElement("script");m=m||n.errorTimeout,t.src=k,s&&(t.event="onclick",t.id=t.htmlFor=l.id||f());for(r in l)t.setAttribute(r,l[r]);t.onreadystatechange=t.onload=function(){if(!q&&h(t.readyState)){if(q=1,s)try{t.onclick()}catch(a){}i(k,j)}t.onload=t.onreadystatechange=t.onerror=null},t.onerror=function(){q=1,j(new Error("Script Error: "+k))},p(function(){q||(q=1,j(new Error("Timeout: "+k)),t.parentNode.removeChild(t))},m),g(),o.parentNode.insertBefore(t,o)}function k(f,h){var i,j,k={};d(f)?(i=f._url||f.href,k=f.attrs||{}):e(f)&&(i=f);var l=b.createElement("link");h=h||c,l.href=i,l.rel="stylesheet",l.media="only x",l.type="text/css",p(function(){l.media=k.media||"all"});for(j in k)l.setAttribute(j,k[j]);g(),o.parentNode.appendChild(l),p(function(){h.call(a)})}function l(a){var b=a.split("?")[0];return b.substr(b.lastIndexOf(".")+1)}function m(a,b){var c=a,d=[],e=[];for(var f in b)b.hasOwnProperty(f)&&(b[f]?d.push(encodeURIComponent(f)):e.push(encodeURIComponent(f)));return(d.length||e.length)&&(c+="?"),d.length&&(c+="yep="+d.join(",")),e.length&&(c+=(d.length?"&":"")+"nope="+e.join(",")),c}function n(a,b,c){var e;d(a)&&(e=a,a=e.src||e.href),a=n.urlFormatter(a,b),e?e._url=a:e={_url:a};var f=l(a);if("js"===f)j(e,c);else{if("css"!==f)throw new Error("Unable to determine filetype.");k(e,c)}}var o,p=a.setTimeout,q=0,r={}.toString,s=!(!b.attachEvent||a.opera&&"[object Opera]"==r.call(a.opera));return n.errorTimeout=1e4,n.injectJs=j,n.injectCss=k,n.urlFormatter=m,n}(window,document);(function($,sr){var debounce=function(func,threshold,execAsap){var timeout;return function debounced(){var obj=this,args=arguments;function delayed(){if(!execAsap)func.apply(obj,args);timeout=null;}
if(timeout)clearTimeout(timeout);else if(execAsap)func.apply(obj,args);timeout=setTimeout(delayed,threshold||100);};};$.fn[sr]=function(fn){return fn?this.bind('resize',debounce(fn)):this.trigger(sr);};})(jQuery,'smartresize');yepnope.urlFormatter=function(url,tests){var parts=url.split('.'),extension=parts.pop(),filename=parts.join('.'),passes=[],i;for(i=0;tests[i];i++)if(eval('!Modernizr.'+tests[i]))passes.push(tests[i].replace(/^(\w+)\W.*$/,'$1'));if(passes.length)return(filename+'-'+passes.join('-')+'.'+extension);return false;};function isDesktop(){return jQuery('body').width()/16>=49.125;}
function isTablet(){return jQuery('body').width()/16>=37.5;}
function tabsizing($){if(isDesktop()||isTablet())
$('.tabs').each(function(){var $active=$(this).children('.active:first');$active.siblings().removeClass('.active');if($active.length<1)$active=$(this).children('li').first().addClass('active');$(this).height($active.children('.element-content').height()+$active.height());});}
function tabs2Akkordeon($){if(isDesktop()||isTablet()){$('.tabs').each(function(){var boxwidth=parseInt($(this).css('width')),width=0;$(this).children('li').children('h3').each(function(){width+=parseInt($(this).css('width'))+parseInt($(this).parent().css('margin-left'))+parseInt($(this).parent().css('margin-right'));});if(width>=boxwidth)$(this).toggleClass('akkordeon tabs').css('height','');if(width&&!$(this).data('width'))$(this).data('width',width);});$('.akkordeon').each(function(){var boxwidth=parseInt($(this).css('width')),width=$(this).data('width'),$actives=$(this).find('li.active');if(width&&(width<boxwidth)){$(this).toggleClass('akkordeon tabs');if($actives.length>0)$actives.first().sibblings().removeClass('active');else $(this).find('li').first().addClass('active');}
tabsizing($);});$('.tabs').each(function(){var $ul=$(this);if($ul.children('.active').length!==1)$ul.children().removeClass('active').first().addClass('active');});}}
function addOffset($){var $subnav=$('#subnavigation'),$navapps=$('.nav-apps');if($subnav.length&&$navapps.length&&(($subnav.offset().left!=$navapps.offset().left)||($navapps.offset().top-($subnav.offset().top+$subnav.outerHeight(true))>1)))$navapps.closest('.complement').toggleClass('offset-4');}
function tabClicks($li){if($li.parent().hasClass('tabs')&&(isTablet()||isDesktop())){$li.addClass('active').siblings().removeClass('active');$li.parent().css('height',parseInt($li.css('height'))+parseInt($li.children('.element-content').css('height')));}else $li.toggleClass('active');addOffset($);}
function navTabs(){$('.element > li > h3').click(function(){if(!$(this).parents('.element-content').length)tabClicks($(this).parent());});$(".tabs, .akkordeon").children("li").each(function(){var titleElements=['h1','h2','h3','h4','h5','h6'],headerCount=1;if($(this).parent().parents('.element').length)
$(this).css('list-style-type','none').parent().css('padding-left',0).removeClass('element').removeClass('akkordeon').removeClass('tabs').find('.element-content').removeClass('element');else{$(this).each(function(){var container=$(this);if(container.children('h3:first-child').length<1){for(var i=0;i<titleElements.length;i++){var titleElement=container.find(titleElements[i]).first();if(titleElement.length){container.prepend('<h3>'+titleElement.detach().text()+'</h3>');container.children('h3').click(function(){tabClicks($(this).parent());});return;}}
container.prepend('<h3>'+headerCount+'</h3>');container.children('h3').click(function(){tabClicks($(this).parent());});headerCount++;}});}});}
function loadContact($node){if($node.children('.module-content').length<1){var uri=$node.find('a.nav-app-contact').attr('href').replace(/#.*$/,'');$.ajax(uri,{dataType:'text'}).done(function(responseText){$node.append(($(responseText.replace(/<(img|source|link|script)\b[^>]*>([\s]*<\/\1>)?/ig,'')).find('#WWU_Ansprechpartner')));});}}
function loadTermine($parent){if($parent.children('.module-content').length<1){var $node=$parent.children('a'),language=$node.data('language')||'',id=$node.data('id')||'',url='/Rektorat/incl/toptermine',$div=$('<div></div>');if(id||language)url+='-'+id+language;url+='.html';$div.load(url,function(){$parent.append($(this).html());});}}
function moveLangNav(dot){if($(".nav-language-container").next().hasClass("nav-search"))
return;if(dot){if(!$(".nav-language-container").prev().hasClass("nav-audience"))$(".nav-language-container").detach().appendTo('.wrapper-complement-nav');}else{if(!$(".nav-language-container").prev().hasClass("nav-search-mobile"))$(".nav-language-container").detach().appendTo('.nav-mobile-menu');}}
function reorganizeContent(){var article_counter=0;$('#inhalt .module.short + .module.short').each(function(){if(!$(this).prev().prev().hasClass('short'))article_counter=0;article_counter++;if(article_counter>1){$(this).css('clear','left');article_counter=0;}});addOffset($);}
jQuery(function(){var globalConfig={navContainerSecond:'nav-second-rollout',navContainer:'nav-main-rollout',navContainerRef:$('.nav-container'),navMain:'.nav-main',},url=yepnope.urlFormatter('/wwu/js/polyfill.js',['mq("only all")','picture','objectfit']);if(url)yepnope.injectJs(url);if(typeof String.prototype.trim!=='function'){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,'');};}
function logoSizing($){$('#sublogo, #subsublogo').each(function(){var width=$(this).width(),height=$(this).height(),$container=$(this).find('.textmarke');if($container.length>0){$container=$container.first();var fontsize=$container.css('font-size').replace(/\D/g,'');if(($container.height()>height)||($container.width()>width)){for(var i=0;i<100;i++){fontsize*=0.95;$container.css('font-size',fontsize);if(($container.height()<=height)&&($container.find('a').width()<=width))break;}}}
$container.css('visibility','visible');});}
function noowl($){$('.noowl').each(function(){var $caption=$(this).removeClass('owl-outer-caption').find('.owl-caption'),height=$caption.css('height','inherit').outerHeight();if(height>31)$(this).addClass('owl-outer-caption');$caption.removeAttr('style');});}
(function($){function columnCountSupported(){var elemStyle=document.createElement('ch').style,domPrefixes='Webkit Moz O ms Khtml'.split(' '),prop='columnCount',uc_prop=prop.charAt(0).toUpperCase()+prop.substr(1),props=(prop+' '+domPrefixes.join(uc_prop+' ')+uc_prop).split(' ');for(var i in props)if(elemStyle[props[i]]!==undefined)return true;return false;}
$.fn.columnizeList=function(settings){settings=$.extend($.fn.columnizeList.defaults,settings);if(!columnCountSupported()){return this.each(function(){var $list=$(this),$listClone=$list.clone(),$items=$list.children('li'),itemsPerCol=Math.ceil($items.length/settings.columnCount),columnWidth,columnHeight,itemHeight=0,widthCounter=0;$listClone.css({position:'absolute',left:'-4999px'});$('body').append($listClone);heightCounter=itemHeight=$listClone.find('li').first().outerHeight();columnHeight=itemsPerCol*itemHeight;columnWidth=Math.floor(100/settings.columnCount);$items.each(function(i){var $item=$(this);if(i>0&&i%itemsPerCol===0){widthCounter+=columnWidth;$item.css('margin-top',-columnHeight);}
if(widthCounter>0)$item.css('margin-left',widthCounter+'%');});});}};$.fn.columnizeList.defaults={columnCount:2,columnGap:0};})(jQuery);jQuery('.nav-apps').columnizeList();moveLangNav(isDesktop());$(window).smartresize(function(){noowl(jQuery);logoSizing(jQuery);tabs2Akkordeon(jQuery);if(isDesktop()){globalConfig.navContainerRef.css('visibility','visible');moveLangNav(1);}else{$('.tabs').css('height','auto');globalConfig.navContainerRef.css('visibility','hidden');$('.'+globalConfig.navContainer).hide();$('.nav-mobile-toggle, .nav-search-mobile-toggle, .nav-item-main').removeClass('active');moveLangNav(0);}
tabsizing(jQuery);});(function($){$(".nav-app > a").click(function(e){$(this).blur();$(this).focusout();if($(this).attr('href')!=='#')return;e.preventDefault();$(this).parent().toggleClass('active');});}(jQuery));(function($){$('.nav-search-mobile-toggle').click(function(e){if($('.nav-search').css('visibility')==='hidden'){$('.nav-search').css('visibility','visible');$('.nav-container').css('visibility','hidden');$('#query').focus();}else{$('.nav-search').css('visibility','hidden');$('.nav-item-main').removeClass('active');$('#query').blur();}
$('.nav-mobile-toggle').removeClass('active');$('.nav-search-mobile-toggle').toggleClass('active');e.preventDefault();});$('.nav-container').on('touchend',function(){$node=$('.nav-container').find('.active');setTimeout(function(){if($('.nav-container').css('visibility')=='hidden'){$('.nav-container').css('visibility','visible');$node.addClass('active').find('.nav-main-rollout').show();$('.nav-mobile-toggle').addClass('active');}},250);});$('.nav-mobile-toggle').click(function(e){if($('.nav-container').css('visibility')==='hidden'){$('.nav-container').css('visibility','visible');$('.nav-search').css('visibility','hidden');}else $('.nav-container').css('visibility','hidden');$('.nav-search-mobile-toggle').removeClass('active');$('.nav-mobile-toggle').toggleClass('active');e.preventDefault();});function bindClicks(){$('.nav-level-toggle').unbind('click');$('.nav-level-toggle').click(function(e){e.preventDefault();$(this).blur();if($(this).hasClass('minactive')){$(this).removeClass('minactive');if(!isDesktop()){$(this).siblings().show();return;}}
if($(this).hasClass('nav-third')){$('.nav-partial-ie').toggle();$(this).parent().toggleClass('active');$(this).toggleClass('active');return;}
var m=false;var par=$(this).parent();if((par.hasClass('nav-item-main')||par.hasClass('nav-item-audience'))&&!isDesktop()){doMenu($(this).parent(),false);m=true;if(!par.hasClass('active')){$('.nav-container').find('.active').removeClass('active');$(".nav-second-rollout").hide();}}
par.toggleClass('active');par.siblings('.active').find('.'+globalConfig.navContainerSecond).hide();par.siblings('.active').removeClass('active').find('.active').removeClass('active');if($(this).hasClass('active')){$(this).removeClass('active');$(this).siblings('.'+globalConfig.navContainerSecond).hide().find('.nav-2015').removeClass('nav-2015');if(m)
$('.'+globalConfig.navContainer).hide();}else{$(this).addClass('active');$(this).siblings('.nav-second-rollout').show();addOffset($);var _url=$(this).siblings('a').attr('href');var _query_container="div[data-menu='"+_url+"']";if(_url==='#'||_url.length===0||!_url.trim()||_url.match(/\.pdf$/i))return;if(!par.has(".nav-second-rollout").length&&!m){var _query='<div data-menu="'+_url+'" class="nav-second-rollout"></div>';$(this).parent().append('<div class="throbber" style=""></div>').fadeIn();$(this).parent().append(_query);$.ajax(_url,{dataType:'text'}).done(function(responseText){$(_query_container).html(($(responseText.replace(/<(img|source|link|script)\b[^>]*>([\s]*<\/\1>)?/ig,'')).find('.nav-partial')));$('.nav-second-rollout .nav-subhead').remove();$('.nav-second-rollout > nav').removeClass('module nav-level-nplusone');$('.nav-2015, .nav-third-levelplus, .nav-main-rollout').find('.nav-second-rollout > nav > ul').removeClass().removeAttr('id').addClass('nav-third-level').find('li.nav-item').removeClass('nav-item');$('.nav-main-rollout, .nav-third-levelplus, .nav-third-level').find('.nav-third-level').remove('.nav-level-toggle');bindClicks();}).always(function(){$('.throbber').fadeOut(function(){$(this).remove();});});}}
$('.nav-third-level').removeClass('nav-second-level');addOffset($);});}
function doMenu(thx,preload){var _url,th,_query_container,_query,$node;_url=thx.data('href');th=thx;if(!_url){th=thx.children('a').first();_url=th.attr('href');}
if(_url==='#'||_url.length===0||!_url.trim())return;_query_container="div[data-menu='"+_url+"']";$('.'+globalConfig.navContainer).hide();if(!th.parent().has(_query_container).length){_query='<div style="display: none"  data-menu="'+_url+'" class="'+globalConfig.navContainer+'"></div>';$node=th.hasClass('current')?th:th.parent();if(!preload)$node.append('<div class="throbber"></div>');$node.append(_query);$.ajax(_url,{dataType:'text'}).done(function(responseText){$(_query_container).html(($(responseText.replace(/<(img|source|link|script)\b[^>]*>([\s]*<\/\1>)?/ig,'')).find('.nav-partial')));$('.nav-main-rollout .nav-subhead').remove();$('.nav-main-rollout .nav-partial').removeClass("module nav-level-nplusone");$('.nav-main-rollout .nav-partial ul').addClass('nav-second-level');$('.throbber').fadeOut(function(){$(this).remove();});if(!preload)$(_query_container).show();bindClicks();$(_query_container+" .nav-close").click(function(){$(_query_container).fadeOut();$('.nav-container').find('.active').removeClass('active');});$(_query_container+' .nav-second-level').each(function(){if(!$(this).hasClass('nav-column')){var elements=4;for(var i=0;i!=3;++i){$(this).children().slice(0,elements).insertBefore($(this)).wrapAll("<ul class='nav-second-level nav-column'></ul>");}
$(this).detach();}});}).fail(function(){$('.throbber').fadeOut(function(){$(this).remove();});return;});$(_query_container).mouseleave(function(){if(!isDesktop())return;$(this).fadeOut();$('.nav-container').find('.active').removeClass('active');});}else if(!$(_query_container).is(':empty'))$(_query_container).show();}
function hideMenu(){if(!isDesktop())return;$('.'+globalConfig.navContainer+', .'+globalConfig.navContainer+' .'+globalConfig.navContainerSecond).hide().find('.active').removeClass('active');}
$(".nav-main-rollout, #top").mouseleave(function(){hideMenu();});$("#logos").mouseenter(function(){hideMenu();});function menuBinds(nclassname){var timer,th;$(nclassname).on({'mouseover':function(){if(!isDesktop())return;th=$(this);timer=setTimeout(function(){doMenu(th,false);},250);},'mouseout':function(){clearTimeout(timer);}});}
menuBinds('.nav-item-main');menuBinds('.nav-item-audience');bindClicks();if(!window.location.hostname.match(/^imperia/)){$('.no-touchevents .nav-item-main, .no-touchevents .nav-item-audience, .no-touch .nav-item-main, .no-touch .nav-item-audience').each(function(){doMenu($(this),true);});}}(jQuery));(function($){if(!$('.nav-third-levelplus').length&&!$('.complement').length){$(".main").removeClass("four").addClass("six");}}(jQuery));navTabs(jQuery);if(!jQuery('#query').attr('placeholder'))jQuery('#query').attr('placeholder',jQuery('#query').data('empty'));$('table').each(function(){var $table=jQuery(this);if(!$table.parent().hasClass('table-wrapper'))$table.wrap('<div class="table-wrapper"></div>');});jQuery('.nav-search-button').on('click',function(e){if(!jQuery('#query').val()){e.preventDefault();jQuery('#query').focus();}});jQuery('.nav-footer li').each(function(){var width=jQuery(this).css('width');jQuery(this).css({'width':width,'max-width':width,'text-align':'center','padding':0});});jQuery('.nav-footer li:last-child').removeAttr('style');reorganizeContent(jQuery);jQuery('.nav-app.download').each(function(){var $node=jQuery(this);$node.children('a').addClass('toggle');if($node.hasClass('active')){if($node.find('a.nav-app-contact').length)loadContact($node);else if($node.find('a.nav-app-termine').length)loadTermine($node);}
$node.find('a.nav-app-contact').click(function(e){e.preventDefault();$node.toggleClass('active');jQuery(this).blur();loadContact($node);});$node.find('a.nav-app-termine').click(function(e){e.preventDefault();$node.toggleClass('active');jQuery(this).blur();loadTermine($node);});});noowl(jQuery);tabs2Akkordeon(jQuery);tabsizing(jQuery);logoSizing(jQuery);addOffset(jQuery);});