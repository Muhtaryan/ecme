(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{4398:function(i,e,o){"use strict";var a,r,n,t,s,b,w=o(2265);w&&"object"==typeof w&&"default"in w&&w.default;var d=o(7914),l=new d,u=l.getBrowser(),c=l.getCPU(),m=l.getDevice(),p=l.getEngine(),f=l.getOS(),h=l.getUA(),v={Mobile:"mobile",Tablet:"tablet",SmartTv:"smarttv",Console:"console",Wearable:"wearable",Embedded:"embedded",Browser:void 0},g={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},x=function(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return i||e},k=function(){return!!("undefined"!=typeof window&&(window.navigator||navigator))&&(window.navigator||navigator)},y=function(i){var e=k();return e&&e.platform&&(-1!==e.platform.indexOf(i)||"MacIntel"===e.platform&&e.maxTouchPoints>1&&!window.MSStream)},S=function(i){return i.type===v.Browser},_=function(i){return i.name===g.Edge},T=function(i){return"string"==typeof i&&-1!==i.indexOf("Edg/")},E=function(){return y("iPad")};m.type,v.SmartTv,m.type,v.Console,m.type,v.Wearable,m.type,v.Embedded,u.name===g.MobileSafari||E(),u.name,g.Chromium,(a=m.type)===v.Mobile||a===v.Tablet||E(),m.type,v.Mobile,m.type===v.Tablet||E(),S(m);var C=S(m);f.name,f.name,"iOS"===f.name||E(),u.name,g.Chrome,u.name,g.Firefox,(r=u.name)===g.Safari||g.MobileSafari,u.name,g.Opera,(n=u.name)===g.InternetExplorer||g.Ie,x(f.version),x(f.name),x(u.version),x(u.major),x(u.name),x(m.vendor),x(m.model),x(p.name),x(p.version),x(h),_(u)||T(h),u.name,g.Yandex,x(m.type,"browser"),(t=k())&&(/iPad|iPhone|iPod/.test(t.platform)||"MacIntel"===t.platform&&t.maxTouchPoints>1)&&window.MSStream,E(),y("iPhone"),y("iPod"),"string"==typeof(b=(s=k())&&s.userAgent&&s.userAgent.toLowerCase())&&/electron/.test(b),T(h),_(u)&&T(h),f.name,f.name,u.name,g.MIUI,u.name,g.SamsungBrowser,e.nI=C},7914:function(i,e,o){var a;!function(r,n){"use strict";var t="function",s="undefined",b="object",w="string",d="major",l="model",u="name",c="type",m="vendor",p="version",f="architecture",h="console",v="mobile",g="tablet",x="smarttv",k="wearable",y="embedded",S="Amazon",_="Apple",T="ASUS",E="BlackBerry",C="Browser",q="Chrome",M="Firefox",O="Google",z="Huawei",N="Microsoft",A="Motorola",P="Opera",I="Samsung",U="Sharp",B="Sony",j="Xiaomi",R="Zebra",D="Facebook",L="Chromium OS",V="Mac OS",G=" Browser",F=function(i,e){var o={};for(var a in i)e[a]&&e[a].length%2==0?o[a]=e[a].concat(i[a]):o[a]=i[a];return o},H=function(i){for(var e={},o=0;o<i.length;o++)e[i[o].toUpperCase()]=i[o];return e},W=function(i,e){return typeof i===w&&-1!==Z(e).indexOf(Z(i))},Z=function(i){return i.toLowerCase()},$=function(i,e){if(typeof i===w)return i=i.replace(/^\s\s*/,""),typeof e===s?i:i.substring(0,500)},X=function(i,e){for(var o,a,r,s,w,d,l=0;l<e.length&&!w;){var u=e[l],c=e[l+1];for(o=a=0;o<u.length&&!w&&u[o];)if(w=u[o++].exec(i))for(r=0;r<c.length;r++)d=w[++a],typeof(s=c[r])===b&&s.length>0?2===s.length?typeof s[1]==t?this[s[0]]=s[1].call(this,d):this[s[0]]=s[1]:3===s.length?typeof s[1]!==t||s[1].exec&&s[1].test?this[s[0]]=d?d.replace(s[1],s[2]):void 0:this[s[0]]=d?s[1].call(this,d,s[2]):void 0:4===s.length&&(this[s[0]]=d?s[3].call(this,d.replace(s[1],s[2])):void 0):this[s]=d||n;l+=2}},Y=function(i,e){for(var o in e)if(typeof e[o]===b&&e[o].length>0){for(var a=0;a<e[o].length;a++)if(W(e[o][a],i))return"?"===o?n:o}else if(W(e[o],i))return"?"===o?n:o;return e.hasOwnProperty("*")?e["*"]:i},K={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Q={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[p,[u,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[p,[u,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[u,p],[/opios[\/ ]+([\w\.]+)/i],[p,[u,P+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[p,[u,P+" GX"]],[/\bopr\/([\w\.]+)/i],[p,[u,P]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[p,[u,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[p,[u,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,/(heytap|ovi|115)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[u,p],[/quark(?:pc)?\/([-\w\.]+)/i],[p,[u,"Quark"]],[/\bddg\/([\w\.]+)/i],[p,[u,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[p,[u,"UC"+C]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[p,[u,"WeChat"]],[/konqueror\/([\w\.]+)/i],[p,[u,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[p,[u,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[p,[u,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[p,[u,"Smart Lenovo "+C]],[/(avast|avg)\/([\w\.]+)/i],[[u,/(.+)/,"$1 Secure "+C],p],[/\bfocus\/([\w\.]+)/i],[p,[u,M+" Focus"]],[/\bopt\/([\w\.]+)/i],[p,[u,P+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[p,[u,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[p,[u,"Dolphin"]],[/coast\/([\w\.]+)/i],[p,[u,P+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[p,[u,"MIUI"+G]],[/fxios\/([\w\.-]+)/i],[p,[u,M]],[/\bqihoobrowser\/?([\w\.]*)/i],[p,[u,"360"]],[/\b(qq)\/([\w\.]+)/i],[[u,/(.+)/,"$1Browser"],p],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[u,/(.+)/,"$1"+G],p],[/samsungbrowser\/([\w\.]+)/i],[p,[u,I+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[p,[u,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[u,"Sogou Mobile"],p],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[u,p],[/(lbbrowser|rekonq)/i,/\[(linkedin)app\]/i],[u],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[p,u],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[u,D],p],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[u,p],[/\bgsa\/([\w\.]+) .*safari\//i],[p,[u,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[p,[u,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[p,[u,q+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[u,q+" WebView"],p],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[p,[u,"Android "+C]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[u,p],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[p,[u,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[p,u],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[u,[p,Y,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[u,p],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[u,"Netscape"],p],[/(wolvic|librewolf)\/([\w\.]+)/i],[u,p],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[p,[u,M+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[u,[p,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[u,[p,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,Z]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[f,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/windows (ce|mobile); ppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[f,/ower/,"",Z]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[f,Z]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[l,[m,I],[c,g]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[l,[m,I],[c,v]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[l,[m,_],[c,v]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[l,[m,_],[c,g]],[/(macintosh);/i],[l,[m,_]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[l,[m,U],[c,v]],[/(?:honor)([-\w ]+)[;\)]/i],[l,[m,"Honor"],[c,v]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[l,[m,z],[c,g]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[l,[m,z],[c,v]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],[[l,/_/g," "],[m,j],[c,v]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[l,/_/g," "],[m,j],[c,g]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[l,[m,"OPPO"],[c,v]],[/\b(opd2\d{3}a?) bui/i],[l,[m,"OPPO"],[c,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[l,[m,"Vivo"],[c,v]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[l,[m,"Realme"],[c,v]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[l,[m,A],[c,v]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[l,[m,A],[c,g]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[l,[m,"LG"],[c,g]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[l,[m,"LG"],[c,v]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[l,[m,"Lenovo"],[c,g]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[l,/_/g," "],[m,"Nokia"],[c,v]],[/(pixel c)\b/i],[l,[m,O],[c,g]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[l,[m,O],[c,v]],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[l,[m,B],[c,v]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[l,"Xperia Tablet"],[m,B],[c,g]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[l,[m,"OnePlus"],[c,v]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[l,[m,S],[c,g]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[l,/(.+)/g,"Fire Phone $1"],[m,S],[c,v]],[/(playbook);[-\w\),; ]+(rim)/i],[l,m,[c,g]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[l,[m,E],[c,v]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[l,[m,T],[c,g]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[l,[m,T],[c,v]],[/(nexus 9)/i],[l,[m,"HTC"],[c,g]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[m,[l,/_/g," "],[c,v]],[/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],[l,[m,"TCL"],[c,g]],[/(itel) ((\w+))/i],[[m,Z],l,[c,Y,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[l,[m,"Acer"],[c,g]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[l,[m,"Meizu"],[c,v]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[l,[m,"Ulefone"],[c,v]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[l,[m,"Energizer"],[c,v]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[l,[m,"Cat"],[c,v]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[l,[m,"Smartfren"],[c,v]],[/droid.+; (a(?:015|06[35]|142p?))/i],[l,[m,"Nothing"],[c,v]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[m,l,[c,v]],[/(imo) (tab \w+)/i,/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[m,l,[c,g]],[/(surface duo)/i],[l,[m,N],[c,g]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[l,[m,"Fairphone"],[c,v]],[/(u304aa)/i],[l,[m,"AT&T"],[c,v]],[/\bsie-(\w*)/i],[l,[m,"Siemens"],[c,v]],[/\b(rct\w+) b/i],[l,[m,"RCA"],[c,g]],[/\b(venue[\d ]{2,7}) b/i],[l,[m,"Dell"],[c,g]],[/\b(q(?:mv|ta)\w+) b/i],[l,[m,"Verizon"],[c,g]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[l,[m,"Barnes & Noble"],[c,g]],[/\b(tm\d{3}\w+) b/i],[l,[m,"NuVision"],[c,g]],[/\b(k88) b/i],[l,[m,"ZTE"],[c,g]],[/\b(nx\d{3}j) b/i],[l,[m,"ZTE"],[c,v]],[/\b(gen\d{3}) b.+49h/i],[l,[m,"Swiss"],[c,v]],[/\b(zur\d{3}) b/i],[l,[m,"Swiss"],[c,g]],[/\b((zeki)?tb.*\b) b/i],[l,[m,"Zeki"],[c,g]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[m,"Dragon Touch"],l,[c,g]],[/\b(ns-?\w{0,9}) b/i],[l,[m,"Insignia"],[c,g]],[/\b((nxa|next)-?\w{0,9}) b/i],[l,[m,"NextBook"],[c,g]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[m,"Voice"],l,[c,v]],[/\b(lvtel\-)?(v1[12]) b/i],[[m,"LvTel"],l,[c,v]],[/\b(ph-1) /i],[l,[m,"Essential"],[c,v]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[l,[m,"Envizen"],[c,g]],[/\b(trio[-\w\. ]+) b/i],[l,[m,"MachSpeed"],[c,g]],[/\btu_(1491) b/i],[l,[m,"Rotor"],[c,g]],[/(shield[\w ]+) b/i],[l,[m,"Nvidia"],[c,g]],[/(sprint) (\w+)/i],[m,l,[c,v]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[m,N],[c,v]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[l,[m,R],[c,g]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[l,[m,R],[c,v]],[/smart-tv.+(samsung)/i],[m,[c,x]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[m,I],[c,x]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[m,"LG"],[c,x]],[/(apple) ?tv/i],[m,[l,_+" TV"],[c,x]],[/crkey/i],[[l,q+"cast"],[m,O],[c,x]],[/droid.+aft(\w+)( bui|\))/i],[l,[m,S],[c,x]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[l,[m,U],[c,x]],[/(bravia[\w ]+)( bui|\))/i],[l,[m,B],[c,x]],[/(mitv-\w{5}) bui/i],[l,[m,j],[c,x]],[/Hbbtv.*(technisat) (.*);/i],[m,l,[c,x]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[m,$],[l,$],[c,x]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[c,x]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[m,l,[c,h]],[/droid.+; (shield) bui/i],[l,[m,"Nvidia"],[c,h]],[/(playstation [345portablevi]+)/i],[l,[m,B],[c,h]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[l,[m,N],[c,h]],[/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],[l,[m,I],[c,k]],[/((pebble))app/i],[m,l,[c,k]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[l,[m,_],[c,k]],[/droid.+; (glass) \d/i],[l,[m,O],[c,k]],[/droid.+; (wt63?0{2,3})\)/i],[l,[m,R],[c,k]],[/droid.+; (glass) \d/i],[l,[m,O],[c,k]],[/(pico) (4|neo3(?: link|pro)?)/i],[m,l,[c,k]],[/; (quest( \d| pro)?)/i],[l,[m,D],[c,k]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[m,[c,y]],[/(aeobc)\b/i],[l,[m,S],[c,y]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[l,[c,v]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[l,[c,g]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[c,g]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[c,v]],[/(android[-\w\. ]{0,9});.+buil/i],[l,[m,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[p,[u,"EdgeHTML"]],[/(arkweb)\/([\w\.]+)/i],[u,p],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[p,[u,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[u,p],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[p,u]],os:[[/microsoft (windows) (vista|xp)/i],[u,p],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[u,[p,Y,K]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[p,Y,K],[u,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[u,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[u,V],[p,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[p,u],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[u,p],[/\(bb(10);/i],[p,[u,E]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[p,[u,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[p,[u,M+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[p,[u,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[p,[u,"watchOS"]],[/crkey\/([\d\.]+)/i],[p,[u,q+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[u,L],p],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[u,p],[/(sunos) ?([\w\.\d]*)/i],[[u,"Solaris"],p],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[u,p]]},J=function(i,e){if(typeof i===b&&(e=i,i=n),!(this instanceof J))return new J(i,e).getResult();var o=typeof r!==s&&r.navigator?r.navigator:n,a=i||(o&&o.userAgent?o.userAgent:""),h=o&&o.userAgentData?o.userAgentData:n,x=e?F(Q,e):Q,k=o&&o.userAgent==a;return this.getBrowser=function(){var i,e={};return e[u]=n,e[p]=n,X.call(e,a,x.browser),e[d]=typeof(i=e[p])===w?i.replace(/[^\d\.]/g,"").split(".")[0]:n,k&&o&&o.brave&&typeof o.brave.isBrave==t&&(e[u]="Brave"),e},this.getCPU=function(){var i={};return i[f]=n,X.call(i,a,x.cpu),i},this.getDevice=function(){var i={};return i[m]=n,i[l]=n,i[c]=n,X.call(i,a,x.device),k&&!i[c]&&h&&h.mobile&&(i[c]=v),k&&"Macintosh"==i[l]&&o&&typeof o.standalone!==s&&o.maxTouchPoints&&o.maxTouchPoints>2&&(i[l]="iPad",i[c]=g),i},this.getEngine=function(){var i={};return i[u]=n,i[p]=n,X.call(i,a,x.engine),i},this.getOS=function(){var i={};return i[u]=n,i[p]=n,X.call(i,a,x.os),k&&!i[u]&&h&&h.platform&&"Unknown"!=h.platform&&(i[u]=h.platform.replace(/chrome os/i,L).replace(/macos/i,V)),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return a},this.setUA=function(i){return a=typeof i===w&&i.length>500?$(i,500):i,this},this.setUA(a),this};J.VERSION="1.0.40",J.BROWSER=H([u,p,d]),J.CPU=H([f]),J.DEVICE=H([l,m,c,h,v,x,g,k,y]),J.ENGINE=J.OS=H([u,p]),typeof e!==s?(i.exports&&(e=i.exports=J),e.UAParser=J):o.amdO?n!==(a=(function(){return J}).call(e,o,e,i))&&(i.exports=a):typeof r!==s&&(r.UAParser=J);var ii=typeof r!==s&&(r.jQuery||r.Zepto);if(ii&&!ii.ua){var ie=new J;ii.ua=ie.getResult(),ii.ua.get=function(){return ie.getUA()},ii.ua.set=function(i){ie.setUA(i);var e=ie.getResult();for(var o in e)ii.ua[o]=e[o]}}}("object"==typeof window?window:this)}}]);