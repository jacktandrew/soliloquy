(function(d){function h(a){var b=arguments.length>1?arguments[1]:new Date,c=parseInt((b.getTime()-a)/1E3);c+=b.getTimezoneOffset()*60;b="";return b=c<60?"a minute ago":c<120?"couple of minutes ago":c<2700?parseInt(c/60).toString()+" minutes ago":c<5400?"an hour ago":c<86400?""+parseInt(c/3600).toString()+" hours ago":c<172800?"1 day ago":parseInt(c/86400).toString()+" days ago"}function i(a){console.log(a.i);var b="<div class='twitter_post'>";b+="<span class='screen-name'>"+a.w.screen_name+"</span> ";
b+=d([a.text]).n().o().m()[0];a=a.i.split(" ");time_value=a[1]+" "+a[2]+", "+a[5]+" "+a[3];a=Date.parse(time_value);b+=" <span class='created-at'>"+h(a)+"</span>";b+="</div>";return b}function j(a,b){console.log(a);var c="<div class='lastfm_post'>";if(b)c+="<span class='screen-name'>"+b.g+"</span> ";c+="<span class='lastfm_artist'>"+a.q["#text"]+"</span> &ndash; ";c+="<span class='lastfm_track'>"+a.name+"</span>";b=b.l;if(a.j){parsed_date=new Date(a.j["#text"]);b=h(parsed_date)}c+=" <span class='created-at'>"+
b+"</span>";c+="</div>";return c}jQuery.b.c=function(){d(this);var a=this;return{u:function(b,c){c=jQuery.extend({},jQuery.b.c.d,c);d.e("http://twitter.com/status/user_timeline/"+b+".json?count="+c.f+"&callback=?",function(e){return a.a(function(){d.a(e,function(g,f){d(a).append(i(f))})})})},v:function(b,c,e){e=jQuery.extend({},jQuery.b.c.d,e);d.e("http://api.twitter.com/1/"+b+"/lists/"+c+"/statuses.json?per_page="+e.f+"&callback=?",function(g){return a.a(function(){d.a(g,function(f,k){d(a).append(i(k))})})})},
r:function(b){var c=jQuery.extend({},jQuery.b.c.k,b);d.e("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user="+c.g+"&api_key="+c.h+"&limit="+c.p+"&format=json&callback=?",function(e){return a.a(function(){d.a(e.s.t,function(g,f){d(a).append(j(f,c))})})})}}};d.b.extend({n:function(){var a=[],b=/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;this.a(function(){a.push(this.replace(b,'<a href="$1">$1</a>'))});return d(a)},o:function(){var a=[],b=
/[\@]+([A-Za-z0-9-_]+)/gi;this.a(function(){a.push(this.replace(b,'<a href="http://twitter.com/$1">@$1</a>'))});return d(a)},m:function(){var a=[],b=/ [\#]+([A-Za-z0-9-_]+)/gi;this.a(function(){a.push(this.replace(b,' <a href="http://search.twitter.com/search?q=&tag=$1&lang=all">#$1</a>'))});return d(a)}});jQuery.b.c.d={f:10};jQuery.b.c.k={p:10,g:"trevorhartman",h:"930dbe080df156eb81444b27a63d948b",l:"Listening Now"}})(jQuery);