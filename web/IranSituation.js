var data = data;
var mdata = mdata;
var slectbox = new Vue({
  el: '#selectState',
  data: {
    selected: 'a',
	isrc : null,
    options: [
		   {ind:'بارندگی 1',c:'rgba(0,102,153',value:0},
           {ind:'بارندگی 2',c:'rgba(0,102,153',value:1} ,
           {ind:'سیل',c:'rgba(0,102,153',value:2},
           {ind:'اربعین 1',c:'rgba(0,153,22',value:3},
           {ind:'اربعین 2',c:'rgba(0,153,22',value:4},
           {ind:'بودجه',c:'rgba(142,0,223',value:5},
           {ind:'کمترین پس انداز',c:'rgba(42,67,47',value:6},
           {ind:'مرگ با تصادف 1',c:'rgba(153,0,0',value:7},
           {ind:'مرگ با تصادف 2',c:'rgba(153,0,0',value:8},
           {ind:'نرخ بیکاری 1',c:'rgba(142,0,223',value:9},
           {ind:'نرخ بیکاری 2',c:'rgba(142,0,223',value:10},
           {ind:'تصادف',c:'rgba(153,0,0',value:11},
           {ind:'بیشترین بودجه',c:'rgba(142,0,223',value:12},
           {ind:'مجموع بارش ',c:'rgba(0,102,153',value:13},
           {ind:'تورم نقطه به نقطه ',c:'rgba(142,0,223',value:14},
           {ind:'سونامی سیل در ایران',c:'rgba(0,102,153',value:15},
           {ind:'شاخص کل قیمت ها',c:'rgba(142,0,223',value:16},
           {ind:'شادکامی',c:'rgba(42,67,47',value:17},
           {ind:'متوسط زمان مکالمه',c:'rgba(42,67,47',value:18},
           {ind:'موج دوم بارندگی ها',c:'rgba(0,102,153',value:19},
           {ind:'نرخ بیکاری 3',c:'rgba(142,0,223',value:20},
           {ind:'هواشناسی سال آبی جاری',c:'rgba(0,102,153',value:21},
           {ind:'سپرده بانکی',c:'rgba(42,67,47',value:22},
           {ind:'مصدومیت ناشی از رانندگی',c:'rgba(42,67,47',value:23},
           {ind:'مرگ ناشی از رانندگی',c:'rgba(153,0,0',value:24},
           {ind:'نسبت طلاق به ازدواج',c:'rgba(42,67,47',value:25},
           {ind:'نرخ تورم',c:'rgba(142,0,223',value:26},
           {ind:'خطر سیل',c:'rgba(0,102,153',value:27},
           {ind:'تعداد شهدا',c:'rgba(0,153,22',value:28},
           {ind:'استان های دچار سیل زدگی',c:'rgba(0,102,153',value:29},
           {ind:'فارغ التحصیلان بیکار',c:'rgba(142,0,223',value:30},
           {ind:'تعداد امامزاده',c:'rgba(0,153,22',value:31},
           {ind:'تورم بهمن 97',c:'rgba(142,0,223',value:32},
           {ind:'نرخ مهاجرت',c:'rgba(142,0,223',value:33},
           {ind:'گرایش سیاسی دولت 12',c:'rgba(142,0,223',value:34},
           {ind:'چک برگشتی',c:'rgba(42,67,47',value:35},
           {ind:'آتش سوزی',c:'rgba(214,60,0',value:36},
           {ind:'کسب و کار',c:'rgba(142,0,223',value:37},
           {ind:'احتمال سیل',c:'rgba(0,102,153',value:38},
           {ind:'محرومیت قضایی',c:'rgba(142,0,223',value:39},
           {ind:'خطر سرمازدگی',c:'rgba(0,102,153',value:40},
           {ind:'امن ترین استان از نظر گسل',c:'rgba(96,0,45',value:41},
           {ind:'مدارک تحصیلی جعلی',c:'rgba(42,67,47',value:42}
           ]
  },
  methods:{
	  onselect:function(){
		  var color = null
		  if(this.selected != 34){
			  for (op of this.options){
				  if (this.selected == op.value){
					  color =  op.c
					  break
					}
				}
				this.changeStyle(this.selected , color)
				img_id = this.selected + 1
				this.isrc = 'images/'+img_id.toString()+'.jpg';
				console.log(this.isrc);
		    }
			else{
				img_id = this.selected + 1
				this.isrc = 'images/'+img_id.toString()+'.jpg';
				d3.selectAll('path').each(function() {
					for (state of mdata){
						  if(d3.select(this).attr('id')==state[1]){
								if (state[37]==0){
									d3.select(this).attr('fill','gray')
								}
								if (state[37]==1){
									d3.select(this).attr('fill','rgb(142,0,223)')
								}
								if (state[37]==2){
									d3.select(this).attr('fill','green')
								}
								if (state[37]==3){
									d3.select(this).attr('fill','yellow')
								}
							} 
					}
				}
			);
			}
		},
	  
	  changeStyle:function(situation , color){
		  d3.selectAll('path').each(function() {
				var f = 0
				var st = 0
				for (state of data){
				  if(d3.select(this).attr('id')==state[1]){
					d3.select(this).attr('fill',color+','+state[situation+3].toString()+')')
					d3.select(this).attr('data-content',mdata[st][situation+3].toString());
					f = 1
				  }
				  st = st + 1;
				}
				if (f==0){
					d3.select(this).attr('fill','white')
					d3.select(this).attr('data-content','0')
				}
			});
	    }
  },  
  }
)


d3.selectAll('path').attr('stroke', 'black').attr('class','ostan')

var svg = d3.select('#chart')
          .append('svg')
          .attr('width', 300)
          .attr('height', 300)
          .append('g')
          .attr('transform', 'translate(' + (300 / 2) + 
            ',' + (300 / 2) + ')');
$('svg .ostan').popover({
   'trigger':'hover'
   ,'container': 'body'
   ,'placement': 'top'
   ,'white-space': 'nowrap'
   ,'html':'true'
});












