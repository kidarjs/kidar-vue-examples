import{d as e}from"./network.20aa3f79.js";import{P as t}from"./echarts.cd8c9dcc.js";import{c as a}from"./china.588da76f.js";import{SERIES_TYPE as o}from"./constant.9d141aba.js";import{setTitle as r}from"./common.d2e9833c.js";import"./index.c2103e5d.js";var s=JSON.parse('{"上海":[121.487899486,31.24916171],"临沧":[100.092612914,23.8878061038],"丽江":[100.229628399,26.8753510895],"保山":[99.1779956133,25.1204891962],"大理白族自治州":[100.223674789,25.5968996394],"德宏傣族景颇族自治州":[98.5894342874,24.441239663],"怒江傈僳族自治州":[98.8599320425,25.8606769782],"文山壮族苗族自治州":[104.246294318,23.3740868504],"昆明":[102.714601139,25.0491531005],"昭通":[103.725020656,27.3406329636],"普洱":[100.98005773,22.7887777801],"曲靖":[103.782538888,25.5207581429],"楚雄彝族自治州":[101.529382239,25.0663556742],"玉溪":[102.545067892,24.3704471344],"红河哈尼族彝族自治州":[103.384064757,23.3677175165],"西双版纳傣族自治州":[100.803038275,22.0094330022],"迪庆藏族自治州":[99.7136815989,27.8310294612],"乌兰察布":[113.112846391,41.0223629468],"乌海":[106.831999097,39.6831770068],"兴安盟":[122.048166514,46.0837570652],"包头":[109.846238532,40.6471194257],"呼伦贝尔":[119.760821794,49.2016360546],"呼和浩特":[111.66035052,40.8283188731],"巴彦淖尔":[107.42380672,40.7691799024],"赤峰":[118.930761192,42.2971123203],"通辽":[122.260363263,43.633756073],"鄂尔多斯":[109.993706251,39.8164895606],"锡林郭勒盟":[116.027339689,43.9397048423],"阿拉善盟":[105.695682871,38.8430752644],"北京":[116.395645038,39.9299857781],"台中":[119.337634104,26.0911937119],"台北":[114.130474436,22.3748329286],"台南":[121.360525873,38.9658447898],"嘉义":[114.246701335,22.7288657203],"高雄":[111.590952812,21.9464822541],"吉林":[126.564543989,43.8719883344],"四平":[124.391382074,43.1755247011],"延边朝鲜族自治州":[129.485901958,42.8964136037],"松原":[124.832994532,45.1360489701],"白城":[122.840776679,45.6210862752],"白山":[126.435797675,41.945859397],"辽源":[125.133686052,42.9233026191],"通化":[125.942650139,41.7363971299],"长春":[125.313642427,43.8983376071],"乐山":[103.760824239,29.6009576111],"内江":[105.073055992,29.5994615348],"凉山彝族自治州":[102.259590803,27.8923929037],"南充":[106.105553984,30.8009651682],"宜宾":[104.633019062,28.7696747963],"巴中":[106.757915842,31.8691891592],"广元":[105.81968694,32.4410401584],"广安":[106.635720331,30.4639838879],"德阳":[104.402397818,31.1311396527],"成都":[104.067923463,30.6799428454],"攀枝花":[101.722423152,26.5875712571],"泸州":[105.443970289,28.8959298039],"甘孜藏族自治州":[101.969232063,30.0551441144],"眉山":[103.841429563,30.0611150799],"绵阳":[104.705518975,31.5047012581],"自贡":[104.776071339,29.3591568895],"资阳":[104.635930302,30.132191434],"达州":[107.494973447,31.2141988589],"遂宁":[105.564887792,30.5574913504],"阿坝藏族羌族自治州":[102.228564689,31.9057628583],"雅安":[103.009356466,29.9997163371],"天津":[117.210813092,39.1439299033],"中卫":[105.196754199,37.5211241916],"吴忠":[106.208254199,37.9935610029],"固原":[106.285267996,36.0215234807],"石嘴山":[106.379337202,39.0202232836],"银川":[106.206478608,38.5026210119],"亳州":[115.787928245,33.8712105653],"六安":[116.505252683,31.7555583552],"合肥":[117.282699092,31.8669422607],"安庆":[117.058738772,30.5378978174],"宣城":[118.752096311,30.9516423543],"宿州":[116.988692412,33.6367723858],"池州":[117.494476772,30.6600192482],"淮北":[116.791447429,33.9600233054],"淮南":[117.018638863,32.6428118237],"滁州":[118.324570351,32.3173505954],"芜湖":[118.384108423,31.3660197875],"蚌埠":[117.357079866,32.9294989067],"铜陵":[117.819428729,30.9409296947],"阜阳":[115.820932259,32.9012113306],"马鞍山":[118.515881847,31.6885281589],"黄山":[118.293569632,29.7344348562],"东营":[118.583926333,37.4871211553],"临沂":[118.340768237,35.0724090744],"威海":[122.093958366,37.5287870813],"德州":[116.328161364,37.4608259263],"日照":[119.507179943,35.4202251931],"枣庄":[117.279305383,34.8078830784],"泰安":[117.089414917,36.1880777589],"济南":[117.024967066,36.6827847272],"济宁":[116.600797625,35.4021216643],"淄博":[118.059134278,36.8046848542],"滨州":[117.968292415,37.4053139418],"潍坊":[119.142633823,36.7161148731],"烟台":[121.30955503,37.5365615629],"聊城":[115.986869139,36.4558285147],"莱芜":[117.684666912,36.2336541336],"菏泽":[115.463359775,35.2624404961],"青岛":[120.384428184,36.1052149013],"临汾":[111.538787596,36.0997454436],"吕梁":[111.143156602,37.527316097],"大同":[113.290508673,40.1137444997],"太原":[112.550863589,37.890277054],"忻州":[112.727938829,38.461030573],"晋中":[112.7385144,37.6933615268],"晋城":[112.867332758,35.4998344672],"朔州":[112.479927727,39.3376719662],"运城":[111.006853653,35.0388594798],"长治":[113.120292086,36.2016643857],"阳泉":[113.569237602,37.8695294932],"东莞":[113.763433991,23.0430238154],"中山":[113.422060021,22.5451775145],"云浮":[112.050945959,22.9379756855],"佛山":[113.134025635,23.0350948405],"广州":[113.307649675,23.1200491021],"惠州":[114.41065808,23.1135398524],"揭阳":[116.379500855,23.5479994669],"梅州":[116.126403098,24.304570606],"汕头":[116.728650288,23.3839084533],"汕尾":[115.372924289,22.7787305002],"江门":[113.078125341,22.5751167835],"河源":[114.713721476,23.7572508505],"深圳":[114.025973657,22.5460535462],"清远":[113.040773349,23.6984685504],"湛江":[110.365067263,21.2574631038],"潮州":[116.630075991,23.6618116765],"珠海":[113.562447026,22.2569146461],"肇庆":[112.47965337,23.0786632829],"茂名":[110.931245331,21.6682257188],"阳江":[111.977009756,21.8715173045],"韶关":[113.594461107,24.8029603119],"北海":[109.122627919,21.472718235],"南宁":[108.297233556,22.8064929356],"崇左":[107.357322038,22.4154552965],"来宾":[109.231816505,23.7411659265],"柳州":[109.42240181,24.3290533525],"桂林":[110.260920147,25.262901246],"梧州":[111.30547195,23.4853946367],"河池":[108.069947709,24.6995207829],"玉林":[110.151676316,22.6439736084],"百色":[106.631821404,23.9015123679],"贵港":[109.613707557,23.1033731644],"贺州":[111.552594179,24.4110535471],"钦州":[108.638798056,21.9733504653],"防城港":[108.351791153,21.6173984705],"乌鲁木齐":[87.5649877411,43.8403803472],"伊犁哈萨克自治州":[81.2978535304,43.9222480963],"克孜勒苏柯尔克孜自治州":[76.1375644775,39.7503455778],"克拉玛依":[84.8811801861,45.5943310667],"博尔塔拉蒙古自治州":[82.0524362672,44.9136513743],"吐鲁番地区":[89.1815948657,42.9604700169],"和田地区":[79.9302386372,37.1167744927],"哈密地区":[93.5283550928,42.8585963324],"喀什地区":[75.9929732675,39.4706271887],"塔城地区":[82.9748805837,46.7586836297],"昌吉回族自治州":[87.2960381257,44.0070578985],"自治区直辖":[85.6148993383,42.1270009576],"阿克苏地区":[80.2698461793,41.1717309015],"阿勒泰地区":[88.1379154871,47.8397444862],"南京":[118.778074408,32.0572355018],"南通":[120.873800951,32.0146645408],"宿迁":[118.296893379,33.9520497337],"常州":[119.981861013,31.7713967447],"徐州":[117.188106623,34.2715534311],"扬州":[119.427777551,32.4085052546],"无锡":[120.305455901,31.5700374519],"泰州":[119.919606016,32.4760532748],"淮安":[119.030186365,33.6065127393],"盐城":[120.148871818,33.3798618771],"苏州":[120.619907115,31.317987368],"连云港":[119.173872217,34.601548967],"镇江":[119.455835405,32.2044094436],"上饶":[117.955463877,28.4576225539],"九江":[115.999848022,29.7196395261],"南昌":[115.893527546,28.6895780001],"吉安":[114.992038711,27.1138476502],"宜春":[114.400038672,27.8111298958],"抚州":[116.360918867,27.9545451703],"新余":[114.947117417,27.8223215586],"景德镇":[117.186522625,29.3035627684],"萍乡":[113.859917033,27.639544223],"赣州":[114.935909079,25.8452955363],"鹰潭":[117.035450186,28.2413095972],"保定":[115.494810169,38.886564548],"唐山":[118.183450598,39.6505309225],"廊坊":[116.703602223,39.5186106251],"张家口":[114.89378153,40.8111884911],"承德":[117.933822456,40.9925210525],"沧州":[116.863806476,38.2976153503],"石家庄":[114.522081844,38.0489583146],"秦皇岛":[119.604367616,39.9454615659],"衡水":[115.686228653,37.7469290459],"邢台":[114.520486813,37.0695311969],"邯郸":[114.482693932,36.6093079285],"三门峡":[111.181262093,34.7833199411],"信阳":[114.085490993,32.1285823075],"南阳":[112.542841901,33.0114195691],"周口":[114.654101942,33.6237408181],"商丘":[115.641885688,34.4385886402],"安阳":[114.351806508,36.1102667222],"平顶山":[113.300848978,33.7453014565],"开封":[114.351642118,34.8018541758],"新乡":[113.912690161,35.3072575577],"洛阳":[112.447524769,34.6573678177],"漯河":[114.0460614,33.5762786885],"濮阳":[115.026627441,35.7532978882],"焦作":[113.211835885,35.234607555],"省直辖":[112.410562192,31.2093162501],"许昌":[113.83531246,34.0267395887],"郑州":[113.64964385,34.7566100641],"驻马店":[114.049153547,32.9831581541],"鹤壁":[114.297769838,35.7554258742],"丽水":[119.929575843,28.4562995521],"台州":[121.440612936,28.6682832857],"嘉兴":[120.760427699,30.7739922396],"宁波":[121.579005973,29.8852589659],"杭州":[120.219375416,30.2592444615],"温州":[120.690634734,28.002837594],"湖州":[120.137243163,30.8779251557],"绍兴":[120.592467386,30.0023645805],"舟山":[122.169872098,30.0360103026],"衢州":[118.875841652,28.9569104475],"金华":[119.652575704,29.1028991054],"三亚":[109.522771281,18.2577759149],"三沙":[112.350383075,16.840062894],"海口":[110.330801848,20.022071277],"十堰":[110.801228917,32.6369943395],"咸宁":[114.300060592,29.8806567577],"孝感":[113.935734392,30.9279547842],"宜昌":[111.310981092,30.732757818],"恩施土家族苗族自治州":[109.491923304,30.2858883166],"武汉":[114.316200103,30.5810841269],"荆州":[112.241865807,30.332590523],"荆门":[112.217330299,31.0426112029],"襄阳":[112.250092848,32.2291685915],"鄂州":[114.895594041,30.3844393228],"随州":[113.379358364,31.7178576082],"黄冈":[114.906618047,30.4461089379],"黄石":[115.050683164,30.2161271277],"娄底":[111.996396357,27.7410733023],"岳阳":[113.146195519,29.3780070755],"常德":[111.653718137,29.0121488552],"张家界":[110.481620157,29.1248893532],"怀化":[109.986958796,27.5574829012],"株洲":[113.131695341,27.8274329277],"永州":[111.614647686,26.4359716468],"湘潭":[112.935555633,27.835095053],"湘西土家族苗族自治州":[109.7457458,28.3179507937],"益阳":[112.366546645,28.5880877799],"衡阳":[112.583818811,26.8981644154],"邵阳":[111.461525404,27.2368112449],"郴州":[113.037704468,25.7822639757],"长沙":[112.979352788,28.2134782309],"无堂区划分区域":[113.557519102,22.2041179884],"澳门半岛":[113.566432335,22.1950041592],"澳门离岛":[113.557519102,22.2041179884],"临夏回族自治州":[103.215249178,35.5985143488],"兰州":[103.823305441,36.064225525],"嘉峪关":[98.2816345853,39.8023973267],"天水":[105.736931623,34.5843194189],"定西":[104.626637601,35.5860562418],"平凉":[106.688911157,35.55011019],"庆阳":[107.644227087,35.7268007545],"张掖":[100.459891869,38.939320297],"武威":[102.640147343,37.9331721429],"甘南藏族自治州":[102.917442486,34.9922111784],"白银":[104.171240904,36.5466817062],"酒泉":[98.5084145062,39.7414737682],"金昌":[102.208126263,38.5160717995],"陇南":[104.934573406,33.3944799729],"三明":[117.642193934,26.2708352794],"南平":[118.181882949,26.6436264742],"厦门":[118.103886046,24.4892306125],"宁德":[119.54208215,26.6565274192],"泉州":[118.600362343,24.901652384],"漳州":[117.676204679,24.5170647798],"福州":[119.330221107,26.0471254966],"莆田":[119.077730964,25.4484501367],"龙岩":[117.017996739,25.0786854335],"山南地区":[91.7506438744,29.2290269317],"拉萨":[91.111890896,29.6625570621],"日喀则地区":[88.8914855677,29.2690232039],"昌都地区":[97.18558158,31.1405756319],"林芝地区":[94.3499854582,29.6669406258],"那曲地区":[92.0670183689,31.4806798301],"阿里地区":[81.1076686895,30.4045565883],"六盘水":[104.85208676,26.5918660603],"安顺":[105.928269966,26.2285945777],"毕节":[105.333323371,27.4085621313],"贵阳":[106.709177096,26.6299067414],"遵义":[106.931260316,27.6999613771],"铜仁":[109.168558028,27.6749026906],"黔东南苗族侗族自治州":[107.985352573,26.5839917665],"黔南布依族苗族自治州":[107.52320511,26.2645359974],"黔西南布依族苗族自治州":[104.900557798,25.0951480559],"丹东":[124.338543115,40.1290228266],"大连":[121.593477781,38.9487099383],"抚顺":[123.929819767,41.8773038296],"朝阳":[120.446162703,41.5718276679],"本溪":[123.77806237,41.3258376266],"沈阳":[123.432790922,41.8086447835],"盘锦":[122.07322781,41.141248023],"营口":[122.233391371,40.6686510665],"葫芦岛":[120.860757645,40.7430298813],"辽阳":[123.172451205,41.2733392656],"铁岭":[123.854849615,42.2997570121],"锦州":[121.147748738,41.1308788759],"阜新":[121.660822129,42.0192501071],"鞍山":[123.007763329,41.1187436822],"重庆":[106.530635013,29.5446061089],"咸阳":[108.707509278,34.345372996],"商洛":[109.934208154,33.8739073951],"安康":[109.038044563,32.70437045],"宝鸡":[107.170645452,34.3640808097],"延安":[109.500509757,36.6033203523],"榆林":[109.745925744,38.2794392401],"汉中":[107.045477629,33.0815689782],"渭南":[109.483932697,34.5023579758],"西安":[108.953098279,34.2777998978],"铜川":[108.968067013,34.9083676964],"果洛藏族自治州":[100.223722769,34.4804845846],"海东地区":[102.085206987,36.5176101677],"海北藏族自治州":[100.879802174,36.9606541011],"海南藏族自治州":[100.624066094,36.2843638038],"海西蒙古族藏族自治州":[97.3426254153,37.3737990706],"玉树藏族自治州":[97.0133161374,33.0062399097],"西宁":[101.76792099,36.640738612],"黄南藏族自治州":[102.007600308,35.5228515517],"九龙":[114.173291988,22.3072458588],"新界":[114.146701965,22.4274312754],"香港岛":[114.183870524,22.2721034276],"七台河":[131.019048047,45.7750053686],"伊春":[128.910765978,47.7346850751],"佳木斯":[130.284734586,46.8137796047],"双鸭山":[131.17140174,46.6551020625],"哈尔滨":[126.657716855,45.7732246332],"大兴安岭地区":[124.19610419,51.991788968],"大庆":[125.02183973,46.59670902],"牡丹江":[129.608035396,44.5885211528],"绥化":[126.989094572,46.646063927],"鸡西":[130.941767273,45.3215398866],"鹤岗":[130.292472051,47.3386659037],"黑河":[127.500830295,50.2506900907],"齐齐哈尔":[123.987288942,47.3476998134]}');t("china",{geoJSON:a,specialAreas:{china:{left:0,top:0}}});var c=e({name:"map",resetOption(e,t,a){const c=r(a);let i=a.chart.getOption().color;const l=Array.isArray(i)?i:[i],n=Math.min(a.chart.getHeight(),a.chart.getWidth())/15,m=[],d=[],p=s;let h=0,f=0,y=0;return t.forEach((e=>{let{name:t,value:a,lng:o,lat:r,tos:s}=e;h=Math.max(h,a),f=Math.min(f,a),(isNaN(o)||isNaN(r))&&([o,r]=p[t.replace(/(市|县|地区)/g,"")]||[]);let c=[o,r,a,t,e];m.push({value:c,itemStyle:{color:l[y]}}),Array.isArray(s)&&s.length>0&&s.forEach((e=>{let[t,a]=p[e.name.replace(/(市|县|地区)/g,"")]||[],o=[t,a,e.value,e.name,e];d.push({coords:[c,o],lineStyle:{color:l[y]}})})),y++})),{title:c,legend:{show:!1},colorBy:"data",tooltip:{show:!0,formatter:e=>{switch(e.componentSubType){case"lines":let[t,a]=e.data.coords||[];return`${t[3]}(${t[2]}) --\x3e ${a[3]}(${a[2]}) <br>${t[2]-a[2]}`;case"effectScatter":const[o,r,s,c]=e.value;return`${c}: ${s}`}}},dataZoom:[{type:"inside"}],geo:{roam:!0,zoom:1.1,aspectScale:.75,layoutSize:"100%",selectedMode:!1,map:"china",coordinateSystem:"geo"},series:[{id:a.chartId,universalTransition:!0,type:o.effectScatter,coordinateSystem:"geo",geoIndex:0,symbolSize:e=>e[2]/(2*h-f)*n,data:m},{type:"lines",zlevel:2,effect:{show:!0,period:4,trailLength:.4,symbol:"arrow",symbolSize:7},data:d}]}}});export{c as default};
