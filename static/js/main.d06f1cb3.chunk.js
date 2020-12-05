(this.webpackJsonpshowdb=this.webpackJsonpshowdb||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(28),i=n.n(o),c=(n(80),n(20)),l=n(21),m=n(24),s=n(23),u=n(30),d=n(136),p=n(140),v=n(145),E=n(58),h=n.n(E),g=n(138),f=n(139),b=n(134),O=n(16),T=n(31),_=n(8),y=Object(b.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(u.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(u.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(O.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(O.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(u.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(u.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(u.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),R=Object(_.f)((function(e){var t=e.history,n=y(),a=function(e){e.preventDefault(),t.push("/movies/".concat(e.target.value))};return r.a.createElement("div",{id:"main-app-bar",className:n.grow},r.a.createElement(d.a,{position:"static"},r.a.createElement(g.a,null,r.a.createElement(f.a,{className:n.title,variant:"h6",noWrap:!0},r.a.createElement(T.b,{to:"/"},r.a.createElement(p.a,{variant:"contained",color:"primary"},"Movie-DB"))),r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(h.a,null)),r.a.createElement(v.a,{placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"},onKeyPress:function(e){13===(e.keyCode||e.which)&&a(e)}})),r.a.createElement("div",{className:n.grow}))))})),I=n(59),S=function(){return r.a.createElement("div",{className:"background-container"},r.a.createElement(I.a,null,r.a.createElement("style",null,"body { background-color: #353b48; }")))},j=n(22),M=(n(88),n(89),n(6)),N=n(142),L=n(141),D=n(143),A=n(32),C=n.n(A),V=Object(b.a)({root:{maxWidth:160,marginLeft:"10px",marginRight:"10px",marginTop:"5px",marginBottom:"5px"},card:{minHeight:380,backgroundColor:"#fff"},media:{width:160,height:220}}),U=Object(_.f)((function(e){var t=V(),n=e.movie,a=e.media,o=n.poster_path?"".concat(M.imageURL,"w154").concat(n.poster_path):C.a;return r.a.createElement("div",{className:"side-scroll-card-container"},r.a.createElement(L.a,{className:t.root,onClick:function(t){t.preventDefault(),"movie"===n.media_type?e.history.push("/movie/".concat(n.id)):"tv"===n.media_type?e.history.push("/tv/".concat(n.id)):e.history.push("/".concat(a,"/").concat(n.id))}},r.a.createElement(N.a,{className:t.card},r.a.createElement("img",{className:t.media,src:o,alt:""}),r.a.createElement(D.a,null,r.a.createElement(f.a,{component:"h6"},n.title," ",n.name),r.a.createElement(f.a,{variant:"subtitle1",color:"textSecondary"},n.release_date," ",n.first_air_date)))))})),k=function(e){var t=e.movies,n=e.media,a=t.total_results>1?t.results.map((function(e){return r.a.createElement(U,{key:e.id,movie:e,media:n})})):null;return r.a.createElement("div",{className:"side-scroll-view-container"},r.a.createElement("div",{className:"side-scroll-view-cards"},a))},w=(n(90),function(){return r.a.createElement("div",{className:"Loader"},"Loading...")}),F=n(13),x=n.n(F),Q=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchLatestMovie(),this.props.onFetchLatestTv(),this.props.onFetchTrending()}},{key:"render",value:function(){var e=this.props,t=e.latestMovie,n=e.latestTv,a=e.loadingLatestMovie,o=e.loadingLatestTv,i=e.loadingTrending,c=e.trending;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home-display-container"},r.a.createElement("div",{className:"home-display-trending"},r.a.createElement("h2",{className:"home-display-trending-header"},"Trending"),i?r.a.createElement(w,null):r.a.createElement(k,{movies:c})),r.a.createElement("div",{className:"home-display-movie"},r.a.createElement("h2",{className:"home-display-movie-header"},"Now Playing (Movies)"),a?r.a.createElement(w,null):r.a.createElement(k,{movies:t,media:"movie"})),r.a.createElement("div",{className:"home-display-TV"},r.a.createElement("h2",{className:"home-display-movie-TV"},"On The Air (TV)"),o?r.a.createElement(w,null):r.a.createElement(k,{movies:n,media:"tv"}))))}}]),n}(a.Component),P=Object(j.b)((function(e){return{latestMovie:e.latestMovie.latestMovie,latestTv:e.latestTv.latestTv,loadingLatestMovie:e.latestMovie.loading,loadingLatestTv:e.latestTv.loading,loadingTrending:e.latestMovie.loading,trending:e.trending.trending}}),(function(e){return{onFetchLatestMovie:function(){return e((function(e){return e({type:"LATEST_MOVIE_REQUEST"}),x.a.get("".concat(M.bodyURL,"movie/now_playing?api_key=").concat(M.APIKey,"&region=GB")).then((function(t){e({type:"LATEST_MOVIE_SUCCESS",latestMovie:t.data})})).catch((function(t){e(function(e){return{type:"LATEST_MOVIE_FAIL",error:e}}(t.message))}))}))},onFetchLatestTv:function(){return e((function(e){return e({type:"LATEST_TV_REQUEST"}),x.a.get("".concat(M.bodyURL,"tv/on_the_air?api_key=").concat(M.APIKey)).then((function(t){e({type:"LATEST_TV_SUCCESS",latestTv:t.data})})).catch((function(t){e(function(e){return{type:"LATEST_TV_FAIL",error:e}}(t.message))}))}))},onFetchTrending:function(){return e((function(e){return e({type:"TRENDING_REQUEST"}),x.a.get("".concat(M.bodyURL,"trending/all/day?api_key=").concat(M.APIKey)).then((function(t){e({type:"TRENDING_SUCCESS",trending:t.data})})).catch((function(t){e(function(e){return{type:"TRENDING_FAIL",error:e}}(t.message))}))}))}}}))(Q),K=n(3),G=function(e){var t=Math.floor(e/60),n=e%60;return"".concat(t,"h ").concat(n,"m")},B=(n(108),function(e){var t=e.movie,n=e.runtime;return r.a.createElement("div",{className:"movie-detail-container",style:{backgroundImage:"url(".concat(t.backdrop_path?"".concat(M.backdropURL).concat(t.backdrop_path):null,")")}},r.a.createElement("div",{className:"hero-container"},r.a.createElement("div",{className:"hero-box-main"},r.a.createElement("div",{className:"hero-poster"},r.a.createElement("img",{className:"movie-poster",src:t.poster_path?"".concat(M.imageURL,"w342").concat(t.poster_path):C.a,alt:""})),r.a.createElement("div",{className:"hero-content"},r.a.createElement("div",{className:"hero-movie-heading"},r.a.createElement("h1",{className:"hero-movie-title"},t.title," ",t.name),r.a.createElement("h3",{className:"hero-movie-tagline"},t.tagline),r.a.createElement("div",{className:"hero-movie-heading-info"},r.a.createElement("h4",{className:"hero-movie-date"},t.release_date," ",t.first_air_date),r.a.createElement("h4",{className:"hero-movie-runtime"},n))),r.a.createElement("div",{className:"hero-movie-description"},r.a.createElement("h2",null,"Overview"),r.a.createElement("p",null,t.overview)),r.a.createElement("div",{className:"hero-movie-information"},r.a.createElement("div",{className:"hero-genres"},r.a.createElement("h2",null,"Genres"),r.a.createElement("ul",null,t.genres&&t.genres.map((function(e,t){return r.a.createElement("li",{key:t},e.name)})))),r.a.createElement("div",{className:"hero-ratings"},r.a.createElement("h2",null,"Ratings"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Rotten Tomatoes")," 85%"," "),r.a.createElement("li",null,r.a.createElement("strong",null,"IMDB")," 85%"," "))))))))}),W=(n(109),function(e){var t=e.recommendation,n=e.media,a=t.total_results?r.a.createElement("div",{className:"movie-recommendation"},r.a.createElement("h2",null,"Recommendation"),r.a.createElement(k,{movies:t,media:n})):null;return r.a.createElement("div",{className:"movie-recommendation-display-container"},a)}),H=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchMovieDetail(this.props.match.params.id),this.props.onFetchMovieRecommendation(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&(this.props.onResetMovieDetail(),this.props.onFetchMovieDetail(this.props.match.params.id),this.props.onFetchMovieRecommendation(this.props.match.params.id))}},{key:"render",value:function(){var e=this.props,t=e.loadingMovie,n=e.loadingRecommednation,a=e.movieRecommendation,o=e.movie;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(w,null):r.a.createElement(B,{movie:o,runtime:G(o.runtime)}),n?r.a.createElement(w,null):r.a.createElement(W,{recommendation:a,media:"movie"}))}}]),n}(a.Component),J=Object(j.b)((function(e){return{loadingMovie:e.movieDetail.loading,movie:e.movieDetail.movie,loadingRecommednation:e.movieRecommendation.loading,movieRecommendation:e.movieRecommendation.movieRecommendation}}),(function(e){return{onFetchMovieDetail:function(t){return e(function(e){return function(t){return t({type:"MOVIE_DETAIL_REQUEST"}),x.a.get("".concat(M.bodyURL,"movie/").concat(e,"?api_key=").concat(M.APIKey)).then((function(e){t({type:"MOVIE_DETAIL_SUCCESS",movie:e.data})})).catch((function(e){t(function(e){return{type:"MOVIE_DETAIL_FAIL",error:e}}(e.message))}))}}(t))},onFetchMovieRecommendation:function(t){return e(function(e){return function(t){return t({type:"MOVIE_RECOMMENDATION_REQUEST"}),x.a.get("".concat(M.bodyURL,"movie/").concat(e,"/recommendations?api_key=").concat(M.APIKey)).then((function(e){t({type:"MOVIE_RECOMMENDATION_SUCCESS",movieRecommendation:e.data})})).catch((function(e){t(function(e){return{type:"MOVIE_RECOMMENDATION_FAIL",error:e}}(e.message))}))}}(t))},onResetMovieDetail:function(){return e({type:"MOVIE_DETAIL_RESET"})}}}))(H),q=(n(110),n(42)),$=n.n(q),z=function(){return r.a.createElement("div",{className:"no-results-container"},r.a.createElement("div",{className:"no-results-box"},r.a.createElement("div",{className:"no-results-image"},r.a.createElement("img",{src:$.a,alt:"No results"})),r.a.createElement("div",{className:"no-results-heading"},r.a.createElement("h1",null,"Sorry couldn't find what you were looking for."))))},X=n(144),Y=n(146),Z=Object(b.a)({card:{display:"flex",minHeight:230},cardDetails:{flex:3},cardMedia:{width:160,flex:1},linkStyle:{textDecoration:"none"}}),ee=Object(_.f)((function(e){var t=Z(),n=e.movie,a=n.poster_path?"".concat(M.imageURL,"w154").concat(n.poster_path):C.a,o=n.title?n.title:n.name;return r.a.createElement(X.a,{item:!0,xs:12,sm:12,md:6,lg:4},r.a.createElement(L.a,{onClick:function(t){t.preventDefault(),"movie"===n.media_type?e.history.push("/movie/".concat(n.id)):e.history.push("/tv/".concat(n.id))}},r.a.createElement(N.a,{className:t.card},r.a.createElement("div",{className:t.cardDetails},r.a.createElement(D.a,null,r.a.createElement(f.a,{component:"h2",variant:"h5"},o),r.a.createElement(f.a,{variant:"subtitle1",color:"textSecondary"},n.release_date),r.a.createElement(f.a,{variant:"subtitle1",paragraph:!0},n.overview?function(e,t){return e.length>29?t.substring(0,130)+"...":t.length>180?t.substring(0,180)+"...":t}(o,n.overview):"No Description :("))),r.a.createElement(Y.a,{xsDown:!0},r.a.createElement("img",{className:t.cardMedia,src:a,alt:""})))))})),te=Object(b.a)((function(){return{movieContainer:{padding:"15px"}}})),ne=function(e){var t=te(),n=e.movies,a=n.total_results>1?n.results.map((function(e){return r.a.createElement(ee,{key:e.id,movie:e})})):null,o=null!==a?r.a.createElement(X.a,{container:!0,spacing:2},a):r.a.createElement(z,null);return r.a.createElement("div",{className:t.movieContainer},o)},ae=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchMovies(this.props.match.params.name)}},{key:"componentDidUpdate",value:function(e){this.props.match.params.name!==e.match.params.name&&this.props.onFetchMovies(this.props.match.params.name)}},{key:"render",value:function(){var e=this.props,t=e.loading,n=e.movies;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(w,null):r.a.createElement(ne,{movies:n}," "))}}]),n}(a.Component),re=Object(j.b)((function(e){return{loading:e.moviesList.loading,movies:e.moviesList.movies}}),(function(e){return{onFetchMovies:function(t){return e(function(e){return function(t){return t({type:"MOVIES_LIST_REQUEST"}),x.a.get("".concat(M.bodyURL,"search/multi?api_key=").concat(M.APIKey,"&query=").concat(e)).then((function(e){t({type:"MOVIES_LIST_SUCCESS",movies:e.data})})).catch((function(e){t(function(e){return{type:"MOVIES_LIST_FAIL",error:e}}(e.message))}))}}(t))}}}))(ae),oe=(n(111),function(){return r.a.createElement("div",{className:"page-not-found-container"},r.a.createElement("div",{className:"page-not-found-box"},r.a.createElement("div",{className:"page-not-found-image"},r.a.createElement("img",{src:$.a,alt:"No results"})),r.a.createElement("div",{className:"page-not-found-heading"},r.a.createElement("h1",null,"Page Not Found"))))}),ie=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchTvDetail(this.props.match.params.id),this.props.onFetchTvRecommendation(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&(this.props.onResetTvDetail(),this.props.onFetchTvDetail(this.props.match.params.id),this.props.onFetchTvRecommendation(this.props.match.params.id))}},{key:"render",value:function(){var e=this.props,t=e.loadingTv,n=e.loadingRecommednation,a=e.tvRecommendation,o=e.tv;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(w,null):r.a.createElement(B,{movie:o}),n?r.a.createElement(w,null):r.a.createElement(W,{recommendation:a,media:"tv"}))}}]),n}(a.Component),ce=Object(j.b)((function(e){return{tv:e.tvDetail.tv,loadingTv:e.tvDetail.loading,tvRecommendation:e.tvRecommendation.tvRecommendation,loadingRecommednation:e.tvRecommendation.loading}}),(function(e){return{onFetchTvDetail:function(t){return e(function(e){return function(t){return t({type:"TV_DETAIL_REQUEST"}),x.a.get("".concat(M.bodyURL,"tv/").concat(e,"?api_key=").concat(M.APIKey)).then((function(e){t({type:"TV_DETAIL_SUCCESS",tv:e.data})})).catch((function(e){t(function(e){return{type:"TV_DETAIL_FAIL",error:e}}(e.message))}))}}(t))},onFetchTvRecommendation:function(t){return e(function(e){return function(t){return t({type:"TV_RECOMMENDATION_REQUEST"}),x.a.get("".concat(M.bodyURL,"tv/").concat(e,"/recommendations?api_key=").concat(M.APIKey)).then((function(e){t({type:"TV_RECOMMENDATION_SUCCESS",tvRecommendation:e.data})})).catch((function(e){t(function(e){return{type:"TV_RECOMMENDATION_FAIL",error:e}}(e.message))}))}}(t))},onResetTvDetail:function(){return e({type:"TV_DETAIL_RESET"})}}}))(ie),le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.c,null,r.a.createElement(_.a,{exact:!0,path:"/",component:P}),r.a.createElement(_.a,{exact:!0,path:"/movie/:id",component:J}),r.a.createElement(_.a,{exact:!0,path:"/tv/:id",component:ce}),r.a.createElement(_.a,{exact:!0,path:"/movies/:name",component:re})," "," ",r.a.createElement(_.a,{component:oe})))},me=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null),r.a.createElement(R,null),r.a.createElement(le,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=n(29),ue=n(63),de=n(64),pe={latestMovie:[],loading:!1,error:""},ve=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{loading:!0})},Ee=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{latestMovie:t.latestMovie,loading:!1})},he=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{error:t.error,loading:!1})},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LATEST_MOVIE_REQUEST":return ve(e);case"LATEST_MOVIE_SUCCESS":return Ee(e,t);case"LATEST_MOVIE_FAIL":return he(e,t);default:return e}},fe={latestTv:[],loading:!1,error:""},be=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{loading:!0})},Oe=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{latestTv:t.latestTv,loading:!1})},Te=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{error:t.error,loading:!1})},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LATEST_TV_REQUEST":return be(e);case"LATEST_TV_SUCCESS":return Oe(e,t);case"LATEST_TV_FAIL":return Te(e,t);default:return e}},ye={movie:[],loading:!1,error:""},Re=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{loading:!0})},Ie=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{movie:t.movie,loading:!1})},Se=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{error:t.error,loading:!1})},je=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{movie:[],loading:!1,error:""})},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVIE_DETAIL_REQUEST":return Re(e);case"MOVIE_DETAIL_SUCCESS":return Ie(e,t);case"MOVIE_DETAIL_FAIL":return Se(e,t);case"MOVIE_DETAIL_RESET":return je(e);default:return e}},Ne={movieRecommendation:[],loading:!1,error:""},Le=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{loading:!0})},De=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{movieRecommendation:t.movieRecommendation,loading:!1})},Ae=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{error:t.error,loading:!1})},Ce=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{movieRecommendation:[],loading:!1,error:""})},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVIE_RECOMMENDATION_REQUEST":return Le(e);case"MOVIE_RECOMMENDATION_SUCCESS":return De(e,t);case"MOVIE_RECOMMENDATION_FAIL":return Ae(e,t);case"MOVIE_RECOMMENDATION_RESET":return Ce(e);default:return e}},Ue={movies:[],loading:!1,error:""},ke=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{loading:!0})},we=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{movies:t.movies,loading:!1})},Fe=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{error:t.error,loading:!1})},xe=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{movies:[],loading:!1,error:""})},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVIES_LIST_REQUEST":return ke(e);case"MOVIES_LIST_SUCCESS":return we(e,t);case"MOVIES_LIST_FAIL":return Fe(e,t);case"MOVIES_LIST_RESET":return xe(e);default:return e}},Pe={trending:[],loading:!1,error:""},Ke=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{loading:!0})},Ge=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{trending:t.trending,loading:!1})},Be=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{error:t.error,loading:!1})},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TRENDING_REQUEST":return Ke(e);case"TRENDING_SUCCESS":return Ge(e,t);case"TRENDING_FAIL":return Be(e,t);default:return e}},He={tv:[],loading:!1,error:""},Je=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{loading:!0})},qe=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{tv:t.tv,loading:!1})},$e=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{error:t.error,loading:!1})},ze=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{tv:[],loading:!1,error:""})},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TV_DETAIL_REQUEST":return Je(e);case"TV_DETAIL_SUCCESS":return qe(e,t);case"TV_DETAIL_FAIL":return $e(e,t);case"TV_DETAIL_RESET":return ze(e);default:return e}},Ye={tvRecommendation:[],loading:!1,error:""},Ze=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{loading:!0})},et=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{tvRecommendation:t.tvRecommendation,loading:!1})},tt=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{error:t.error,loading:!1})},nt=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{tvRecommendation:[],loading:!1,error:""})},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TV_RECOMMENDATION_REQUEST":return Ze(e);case"TV_RECOMMENDATION_SUCCESS":return et(e,t);case"TV_RECOMMENDATION_FAIL":return tt(e,t);case"TV_RECOMMENDATION_RESET":return nt(e);default:return e}},rt=Object(se.combineReducers)({latestMovie:ge,latestTv:_e,movieDetail:Me,movieRecommendation:Ve,moviesList:Qe,trending:We,tvDetail:Xe,tvRecommendation:at}),ot=[ue.a],it=Object(se.createStore)(rt,{},Object(de.composeWithDevTools)(se.applyMiddleware.apply(void 0,ot)));i.a.render(r.a.createElement(j.a,{store:it},r.a.createElement(T.a,null,r.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,n){e.exports=n.p+"static/media/noImage.6525eb42.jpg"},42:function(e,t,n){e.exports=n.p+"static/media/noResults.469cf09c.png"},6:function(e,t){e.exports={APIKey:"a5f10b7ffa7a2c925cf6dd9bdac3c9d0",bodyURL:"https://api.themoviedb.org/3/",imageURL:"https://image.tmdb.org/t/p/",backdropURL:"https://image.tmdb.org/t/p/original"}},75:function(e,t,n){e.exports=n(112)},80:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){}},[[75,1,2]]]);
//# sourceMappingURL=main.d06f1cb3.chunk.js.map