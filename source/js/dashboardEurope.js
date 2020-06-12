function searchFunction() {
                
                    
                
                    var input, filter, ul, li, a, i, txtValue, notnull;
                    input = document.getElementById("cc");
                    filter = input.value.toUpperCase();
                    notnull = (filter=="");
                    
                    d3.select("#tips").classed("hidden", notnull);
                
                    ul = document.getElementById("tips");
                    li = ul.getElementsByTagName("li");

                    for(i=0 ; i< li.length; i++){
                        a = li[i].getElementsByTagName("a")[0];
                        txtValue = a.textContent || a.innerText;
                        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
                            
                            li[i].style.display = "";
                        }

                        else{
                            li[i].style.display = "none";
                        }
                    }
} 






function roundTo(value, places){
     var power = Math.pow(10, places);
     return Math.round(value * power) / power;
 }







function CrimeEurope(){
     
    
    d3.select("#tips").selectAll("li").remove();
    d3.select("#list_of_items").classed("hidden", true);

    
     
     
     
//     d3.select("body").selectAll("svg").remove();
     
       
 
         
            var w = 600;
			var h = 350;
			var padding = 20;
         
         
            var CrimeOrSafety = $('input[id="checkCS"]').prop("checked");
                    
          function checkCS(x){
          
              if(x == 0){
                  return x;
              }else{
                  
                  if(CrimeOrSafety){
                      return roundTo(x, 2);
                  }else{
                      return roundTo(parseFloat(100-x), 2);
                  }
                  
              }
              
          }
   
			

			
 
			//Function for converting CSV values from strings to Dates and numbers
			//We assume one column named 'Date' plus several others that will be converted to ints 
               
            function searchSomeCC(){
                
                var input, filter, ul, li, a, i, txtValue, notnull;
                var bool = false;
                    input = document.getElementById("cc");
                    filter = input.value.toUpperCase();
                    notnull = (filter=="");
                    
                    d3.select("#tips").classed("hidden", notnull);
                
                    ul = document.getElementById("tips");
                    li = ul.getElementsByTagName("li");

                    for(i=0 ; i< li.length; i++){
                        a = li[i].getElementsByTagName("a")[0];
                        txtValue = a.textContent || a.innerText;
                        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
                            
                            bool= true;
                        }

                       
                    }
                return bool;
                
            }
        
            
            function conversion(d) {
                  
               
                if(!d.includes(".") && d>100){
                    return d/1000;
                }else{
                    return d;
                }
            }
          
        
			function hiddenElem(bool){
                 d3.select("#stackareaContainer").classed("hidden", bool);
                 d3.select("#info-time").classed("hidden", bool);
                  d3.select("#timeline").classed("hidden", false);
                 d3.select("#containerSmallmultiples").classed("hidden", bool);
            }
            
    
           
            
            var rowConverterCompact = function(d) {
                
             
                
               
                
                return {
				           
				            City: d.City,  
                            country: d.country.trim(),
                      
                            y2012: parseFloat(d.duemila12),
                            y2013 : parseFloat(d.duemila13),
                            y2014 : parseFloat(d.duemila14),
                            y201405 : parseFloat(d.duemila14emezzo),
                            y2015 : parseFloat(d.duemila15),
                            y201505 : parseFloat(d.duemila15emezzo),
                            y2016 : parseFloat(d.duemila16),
                            y201605: parseFloat(d.duemila16emezzo),
                            y2017 : parseFloat(d.duemila17),
                            y201705 : parseFloat(d.duemila17emezzo),
                            y2018 : parseFloat(d.duemila18),
                            y201805 : parseFloat(d.duemila18emezzo),
                            y2019 : parseFloat(d.duemila19),
                            y201905 : parseFloat(d.duemila19emezzo),
                            y2020 : parseFloat(d.duemila20),
                    
                            latitude:parseFloat(conversion(d.latitude)),
                            longitude:parseFloat(conversion(d.longitude))
                           
                            
                }
			}
            
            
            
            var tipM = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d) {
//                console.log(d)
                
              return "<strong>Country: </strong><span class='details'>" + d.properties.name + "<br></span>";
            });
         
         

     
//http://localhost:8000/Documenti/CrimeProject/data/CompactEuro.csv
  d3.csv("https://raw.githubusercontent.com/paolo-peretti/Dashboard-Crime/master/data/CompactEuro.csv", rowConverterCompact, function(datacompact) {  
     
      
     let dataset = datacompact; 
    
    var years = ["2012", "2013", "2014", "201405", "2015", "201505", "2016", "201605", "2017", "201705", "2018", "201805", "2019", "201905", "2020"];
    
   
    var yearsCompact = ["y2012", "y2013", "y2014", "y201405", "y2015", "y201505", "y2016", "y201605", "y2017", "y201705", "y2018", "y201805", "y2019", "y201905", "y2020"];
    
    
  
    function middlePoint(city){
//        console.log(city)
        var sum=0;
        var count=0;

       
            for(var j=0;j<yearsCompact.length;j++){

                        if( city[yearsCompact[j]] != 0 ){

                            sum += city[yearsCompact[j]];
                            count++;
                        }
            }
        
        return (sum/count);
        
    }
    
    
    
   
    
    var EuropeCountry = [];
    if(EuropeCountry != []){
            EuropeCountry.splice(0,EuropeCountry.length);
    }
                        
    for(var z=0;z<dataset.length;z++){
                            
            if( !EuropeCountry.includes(dataset[z]["country"]) ){
                     EuropeCountry.push(dataset[z]["country"]);
            }
                             
    }
      
    

    

 
         
        
         
                let inputGetCCtime = document.querySelector('#cc');
                let btnGetCCtime = document.querySelector('#btn-cc-time');
                let liFaction = document.querySelector('#first_time');
                let liSaction = document.querySelector('#second_time');
                let backToTheCountry = document.querySelector('#back');
                
      
                let CheckTwo=true;
                
                backToTheCountry.addEventListener('click', () => {
                         
                         var val = inputGetCCtime.value;
                         val = val.split(", ");
                         inputGetCCtime.value = val[1];
                         btnGetCCtime.click();
                         
                });
                
          $('input[id="checkCS"]').click(function(){
              
                    CrimeOrSafety = $('input[id="checkCS"]').prop("checked");
             
                    btnGetCCtime.click();
              
          });
                
                   
                    $('input[id="checkTwo"]').click(function(){
                        

                              CheckTwo = $('input[id="checkTwo"]').prop("checked");
                        
                              
                               

                                      d3.select("#errorSelCC").classed("hidden", true);
                        
                                         var ul = document.getElementById("list_of_items_time");
                                         var li = ul.getElementsByTagName("li");
                                        var a1 = li[0].getElementsByTagName("a")[0];

                                        a1.innerHTML="";
                                        var a2 = li[1].getElementsByTagName("a")[0];
                                        a2.innerHTML="";
                                        li[0].style.display = "none";
                                        li[1].style.display = "none";
                                    
                                        
                                        btnGetCCtime.click();
                                   
                                    
                    });
            
     
    
                function addTask(inp, count) {
                    
                         var ultmp = document.getElementById("tmpfs");
                         var litmp = ultmp.getElementsByTagName("li");
                    
                        if(count < 2){
                            
                            var input = inp;
                            
                            var ul = document.getElementById("list_of_items_time");
                                var li = ul.getElementsByTagName("li");
                            
                                
                               
                     
                                var aA = li[0].getElementsByTagName("a")[0];
                                var aB = li[1].getElementsByTagName("a")[0];  
                           
                                if( aA.innerHTML == "" && aB.innerHTML != input ){
                                        aA.innerHTML = input;
                                    
                                        litmp[0].getElementsByTagName("a")[0].innerHTML = input;
                                        li[0].style.display = "";
                                    
                                }
                                else if( aB.innerHTML == "" && aA.innerHTML != input ){
                                        aB.innerHTML = input;
                                    
                                        litmp[1].getElementsByTagName("a")[0].innerHTML = input;
                                        li[1].style.display = "";
                                    
                                }
                            

                                           
                        }else{
                            
                            var input = inp;
//                              console.log(input)  
                            var ul = document.getElementById("list_of_items_time");
                            var li = ul.getElementsByTagName("li");
                            
                            
                                if( input != li[0].getElementsByTagName("a")[0].innerHTML ){
                                    
                                    var aB = li[1].getElementsByTagName("a")[0];        
    //                               console.log(count)
                                    litmp[1].getElementsByTagName("a")[0].innerHTML = input;
                                    aB.innerHTML = input;
                                    li[1].style.display = "";
                                }
                                
                                
                            
                        }
                    
                    
                     d3.select("#list_of_items_time").classed("hidden", false);
              }
    
                
                
                    
                 var count = 0;             
                 var verify = true;
                 var value = "";
                 var arrayFS = [];
                 var first, second;
    
                 btnGetCCtime.addEventListener('click', () => {
                   
//                             console.log(primaryBool)
                            
                            value = inputGetCCtime.value;
                            if(CheckTwo){
                                
                                  d3.select("#list_of_items_time").classed("hidden", true);  
                                if( EuropeCountry.includes(value) && !value.includes(",")){
                                    dataset = CCtime(value);
                                }else if( value.includes(",") ){
                                     dataset = CCtime(value);
                                }
                                
                                
                            }else if(!CheckTwo){
                                
                                first = document.getElementById("list_of_items_time").getElementsByTagName('a')[0].innerHTML; 
                                
                                second = document.getElementById("list_of_items_time").getElementsByTagName("a")[1].innerHTML; 
//                                 console.log(value)

                                
                                if(first==""&&second=="" ){
                             
                                    if( EuropeCountry.includes(value) && !value.includes(",")){
                                        verify = true;
                                    }else if( value.includes(",") ){
                                        verify = true;
                                    }else{
                                        verify = false;
                                    }
                                    count = 0;
                                    
                                }
                                else if ( (first==""&&second!="") || (first!=""&&second=="") ){
                                    
                                    count=1;
                                 
                                    if( EuropeCountry.includes(value) && !value.includes(",")){
                                        
                                            verify = searchSomeCC();
                                        
                                    }else if( value.includes(",") ){
                                        
                                         verify = searchSomeCC();
                                        
                                    }else{
                                        verify = false;
                                    }
                                    
                                    
     
                                    
                                }
                                else if (first!="" && second!="" ){
                                    
                                      if( EuropeCountry.includes(value) && !value.includes(",")){
                                        
                                            verify = searchSomeCC();
                                        
                                    }else if( value.includes(",") ){
                                        
                                         verify = searchSomeCC();
                                        
                                    }else{
                                        verify = false;
                                    }
                                     
                                }
                                
                                
                               
                                
                                if(verify){
                                     
                                    addTask(value, count++);
                                    
                                  
                                    d3.select("#errorSelCC").classed("hidden", true);
                                   
                                }else{
                                     
                                     d3.select("#errorSelCC").classed("hidden", false);
                                    
                                }
                      
                                
                                first = document.getElementById("list_of_items_time").getElementsByTagName('a')[0].innerHTML; 
                                second = document.getElementById("list_of_items_time").getElementsByTagName("a")[1].innerHTML; 
                                
                                

                                     arrayFS[0]=first;
                                   

                                     arrayFS[1]=second;
                                
                                     dataset = CCtime(arrayFS);
                                
                                
                                
                               
                            }
                     
                 });
                   
    
    
    liFaction.addEventListener('click', () => {
        
                     var ul = document.getElementById("list_of_items_time");
                     var li = ul.getElementsByTagName("li");
                     
                      var ultmp = document.getElementById("tmpfs");
                      var litmp = ultmp.getElementsByTagName("li");
        
                        var a = li[0].getElementsByTagName("a")[0];
//                        console.log(a.innerHTML)
        
                        var tmpF = a.innerHTML;
                        litmp[0].getElementsByTagName("a")[0].innerHTML = tmpF;
        
                        a.innerHTML="";
                        
                        li[0].style.display = "none";
        
                
                    first = document.getElementById("list_of_items_time").getElementsByTagName('a')[0].innerHTML; 
                    second = document.getElementById("list_of_items_time").getElementsByTagName("a")[1].innerHTML; 
                     
                         arrayFS[0]=first;
                                   
                    
                         arrayFS[1]=second;
                                
                                    
                      dataset = CCtime(arrayFS);
                                
                               
                });
    
    liSaction.addEventListener('click', () => {
        
                         var ul = document.getElementById("list_of_items_time");
                         var li = ul.getElementsByTagName("li");
        
                         var ultmp = document.getElementById("tmpfs");
                         var litmp = ultmp.getElementsByTagName("li"); 
                        
                         var a = li[1].getElementsByTagName("a")[0]; 
                         var tmpS = a.innerHTML;
                         litmp[1].getElementsByTagName("a")[0].innerHTML = tmpS;
        
        
                        a.innerHTML="";
                        li[1].style.display = "none";
        
                  
                    first = document.getElementById("list_of_items_time").getElementsByTagName('a')[0].innerHTML; 
                    second = document.getElementById("list_of_items_time").getElementsByTagName("a")[1].innerHTML; 
                     
                         arrayFS[0]=first;
                                   
                    
                         arrayFS[1]=second;
                                
                                    
                      dataset = CCtime(arrayFS);
                                
                               
                });
            
    
    
//    var wmap = 1200,
//    hmap = 500;

  
    var wmap = $('#map').width();
      
    document.getElementById("map").style.width = $('#map').outerWidth()+"px";
    document.getElementById("mapLegenda").style.width = $('#map').outerWidth()+"px";
    

    var hmap = wmap * 0.4228;
    
    document.getElementById("mapLegenda").style.height = hmap/5+"px";
    
   
    document.getElementById("swipeup").style.width = hmap/10+"px";
    document.getElementById("swipeup").style.height = hmap/10+"px";
    
    
       var maplegendaheight =hmap/5;
       var swipeupheight =  hmap/10;
      
      var margintop1=$('#mapLegenda').css('margin-top');//equal to swipeup
       margintop1=margintop1.split("px");
    
       var margintop2=$('#swipeup').css('margin-top');//equal to swipeup
       margintop2=margintop2.split("px");
    
     
    
    var infoheight=3*maplegendaheight;
    
//    document.getElementById("info-time").style.height = infoheight+"px";
//    document.getElementById("info1-time").style.height = infoheight+"px";
//    document.getElementById("info2-time").style.height = infoheight+"px";
      
      
      
      
        
//      console.log(hmap+maplegendaheight+infoheight+2*(margintop1[0])+2*(margintop2[0]))
    

    var initX;
    var mouseClicked = false;
    var s = 1;
    var rotated = 90;

    //need to store this because on zoom end, using mousewheel, mouse position is NAN
    var mouse, centered;

    
    
         // var heightBP=widthBP*0.028846154;
            var svgud =  d3.select("body").select("#swipeup")
						.append("svg")
                        .attr("viewBox","0 0 "+hmap/10+" " +hmap/10)
                        .attr("preserveAspectRatio", "none")
    ;
//						.attr("width", 50)
//						.attr("height", 50);


    var swipeup = svgud.append("g")
					.attr("class", "swipeup")	//All share the 'zoom' class
					.attr("id", "up");

      
    var ydist = hmap+maplegendaheight+swipeupheight+infoheight+2*(margintop1[0])+2*(margintop2[0]);
    
	var yPosition2 = 1440+100;
//    var ydist = 880+200+20;
    var yLC = 1200+100;
//    var yCircleCompare = 1840+100;
    var yTL = 2160+50;
      
    var ypieTL = 2480;
      
      
				swipeup.append("text")
					.attr("x", 0.1977579*hmap/10)
					.attr("y", 0.5932737*hmap/10)
					.text("∆");
    
                var checkm = false;
                swipeup.on("click", function(){
               
                    checkm= !checkm;
                    if(checkm){
                        yPosition2 = 940;
//                        ydist = 450+20;
                        yLC = 700;
//                        yCircleCompare = 1340;
                        yTL = 2160-600+50;
                         ypieTL = 2480-600;
//                        to20.transition().duration(1000)
//                        .attr("height", 0);
                        
                        svgmap.transition().duration(2000)
                        .attr("height", 0);
                       
                        swipeup.select("text")
                        .attr("x", 0.1977579*hmap/10)
                        .attr("y", 0.75148002*hmap/10)
                        .text("∇");
                        d3.select("#mapLegenda").classed("hidden", true);
                         
                         document.getElementById("map").style.border = "0px solid black";
                    }else{
                         yLC = 1200+100;
                         yPosition2 = 1440+100;
//                         ydist = 880+200+20;  
//                         yCircleCompare = 1840+100;
                         yTL = 2160+50;
                         ypieTL = 2480;
//                        to20.transition().duration(1000)
//                        .attr("height", 70);
                        
                         svgmap.transition().duration(2000)
                            .attr("height", 500);
                        
                        d3.select("#swipeup").selectAll("text").remove();
                        
                        swipeup.append("text")
					.attr("x", 0.1977579*hmap/10)
					.attr("y", 0.5932737*hmap/10)
					.text("∆");

                        d3.select("#mapLegenda").classed("hidden", false);
                        document.getElementById("map").style.border = "2px solid black";
                        
                        
                    }
                   

                });
    
var projection = d3.geoMercator()
    .scale(153)
    .translate([wmap/2,hmap/2])
//.rotate([rotated,1,0])
; //center on USA h/1.5
  
var path = d3.geoPath().projection(projection).pointRadius(1/5);

      var svgmap = d3.select("body").select("#map")
						.append("svg")
                        .attr("viewBox","0 0 "+wmap+" " +hmap)
//                        .attr("preserveAspectRatio", "none")
                        ;
    
            legendaMap(2.9814207735978413);
      
      
      
        function legendaMap(val){
    
                
                for(var to=1;to<=5;to++){
        
                    var x= to*20;
                    var name= "lmapto"+x;
                    var txt = "To"+x;
                    var select= "#to"+x;
                    var selectLto= "#lto"+x;


                    d3.select(select).select("svg").remove();
                    d3.select("#"+txt).select("svg").remove();

                   
                    var selectwidth = $(select).width();
                    var selectheigth = hmap/5 - 20;
                        //20px of borders
                 
                    
//                  console.log(selectheigth)

            //    document.getElementById("map").style.width = $('#map').outerWidth()+"px";


                       name= d3.select("body").select(select)
                                            .append("svg")
//                                            .attr("width", selectwidth)
//                                            .attr("height", selectheigth)
                                            .attr("viewBox","0 0 "+selectwidth+" " +selectheigth)
//                                            .attr("preserveAspectRatio", "none")
                                            ;
                    
                    document.getElementById("indexTitle"+txt).innerHTML="Crime Index : "  ;
                    document.getElementById("percentages"+txt).innerHTML=+(x-20)+"% to "+x +"%" ;
                    



                                    name
                                    .append("circle")
                                    .attr("cx", function(){
                                            return selectwidth/2;
                                    })
                                    .attr("cy", function(){
                                            return selectheigth/2;
                                    })
                                    .attr("r", function(){

                                            return Math.sqrt((x-10))*(val);
                                    })
                                    .style("fill", "red")
                                    .style("stroke", "gray")
                                    .style("stroke-width", 0.25)
                                    .style("opacity", 0.75)
                                    ;
                                    name.append("title")
                                .text("Change on zoom action");
        
                              
    }
    
}
    
    
			//Define what to do when panning or zooming
			var zooming = function(d) {

				//Log out d3.event.transform, so you can see all the goodies inside
//				console.log(d3.event.transform);

				//New offset array
               

				var offset = [d3.event.transform.x, d3.event.transform.y];
                //Calculate new scale
				var newScale = d3.event.transform.k * 2000;
                
               
//                 
              
                
                var xoffset1=3.4,   //1.8
                    xoffset2=4700,  //4700
                    
                    yoffset1=24,       //14.3089
                    yoffset2=600;      //1200
                
                
               
//                console.log(wmap/2 * (newScale/2000 +xoffset1*(newScale/2000)))
                
                offset[0] = Math.min(
                    wmap/2 * (newScale/2000 +xoffset1*(newScale/2000))  , 
                    Math.max(wmap  * (1 - newScale/2000) - xoffset2 * newScale/2000, 
                             offset[0] ))
                  ;
                    // 14.3089
                  offset[1] = Math.min(
                    hmap/2 * (newScale/2000 + yoffset1*(newScale/2000)), 
                    Math.max(hmap  * (1 - newScale/2000) + yoffset2 * newScale/2000, offset[1])
                  );

				//Update projection with new offset and scale
				projection.translate(offset)
						  .scale(newScale);

				//Update all paths and circle
             
				svgmap.selectAll("path")
					.attr("d", path);

//                console.log(wmap)
                var l=(0.585284281*wmap);
                //700
                legendaMap(newScale/l);
                
                var Selectedc="";
				var CircleMap = svgmap.selectAll("circle")
					.attr("cx", function(d) {
                        
						return projection([d.longitude, d.latitude])[0];
					})
					.attr("cy", function(d) {
                        
						return projection([d.longitude, d.latitude])[1];
					})
                    
                    .attr("r", function(d){
                       //newScale/500
//                              console.log(d)
                                return Math.sqrt(parseInt(middlePoint(d))) * newScale/l;

                    });
                
                    liFaction.addEventListener('click', () => {


                            first = document.getElementById("tmpfs").getElementsByTagName("a")[0].innerHTML; 
                            second = document.getElementById("list_of_items_time").getElementsByTagName("a")[1].innerHTML; 
                       
                          
                                deselectCity(first, second);


                    });
                
                    liSaction.addEventListener('click', () => {


                            first = document.getElementById("list_of_items_time").getElementsByTagName('a')[0].innerHTML; 
                            second = document.getElementById("tmpfs").getElementsByTagName("a")[1].innerHTML;

                                deselectCity(second, first);


                    });
                    
                        
                     btnGetCCtime.addEventListener('click', () => {
                            if(CheckTwo){
                                Selectedc = selectCityOnAction(0);
                            }else{
                                Selectedc = selectCityOnAction(1);
                            }
                           
                    });
                
                
                     CircleMap.on("mouseover",function(d){
                         
                                        d3.select(this)
                                            .style('fill',"#ff00ff")
                                            .attr("r", function(d){
                                            
                                                    return Math.sqrt(parseInt(middlePoint(d))) * newScale/(l/2);

                                        })
                              ;
                         
                         
                         
                         var xPosition = parseFloat(d3.select(this).attr("cx"));
                           
                           var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

                            var yPosition = parseFloat(offset-(maplegendaheight));
//                            var yPosition = parseFloat(offset);
                                
                                //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text(function(){
                                    if(d.City!="")
                                    return d.country+", "+d.City;

                                   
                                })
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);
                         
                         
                         
                         
                         
                                    })
                     .on("mouseout",function(d){
                         
                         
                         d3.select("#tooltip").classed("hidden", true);
//                                         tip.hide(d);
                                         d3.select(this).style('fill',"red")
                                             .attr("r", function(d){
                                               
                                                    return Math.sqrt(parseInt(middlePoint(d))) * newScale/l;

                                        })
                              ;
                            })
                    .on("click", function(d){
                                
                                    inputGetCCtime.value=d.City+", "+d.country;
                                
                                
                                btnGetCCtime.click();

                    });
                
                 function selectCityOnAction(id){
                     
                        var results = [];
                        var bool = false;
                      var first = document.getElementById("list_of_items_time").getElementsByTagName('a')[0].innerHTML; 
                      var second = document.getElementById("list_of_items_time").getElementsByTagName("a")[1].innerHTML;
                        
                        var boolB=false;
                        if(id==0){
                            
                            for(var i=0;i<dataset.length;i++)  {
                                if( dataset[i]["selected"] == 1 ){
                                        
//                                             console.log(dataset[i]["City"]+", "+dataset[i]["country"])
                                            CircleMap.attr("stroke", "gray")
                                                .attr('fill',"red")
                                                .attr("stroke-width", 0.25)
                                                .style('fill', function(d){
                                                if(d.City+", "+d.country == dataset[i]["City"]+", "+dataset[i]["country"]){
                                                 
                                                    return "#00FF00";
                                                }
                                            })
                                            .style("stroke", function(d){
                                                if(d.City+", "+d.country == dataset[i]["City"]+", "+dataset[i]["country"]){
                                                    return "#2D1D3A";
                                                }
                                            })
                                            .style("stroke-width", function(d){
                                                if(d.City+", "+d.country == dataset[i]["City"]+", "+dataset[i]["country"]){
                                                    //19.25
                                                    
                                                    return 0.016095318*wmap;
                                                }
                                            })
                                            ; 
                                            return dataset[i]["City"]+", "+dataset[i]["country"];
                                            
                                        
                                }   
                                
                                else if( dataset[i]["selectedCountry"] == 1 ){
                                           
                                            CircleMap.attr("stroke", "gray")
                                                .attr('fill',"red")
                                                .attr("stroke-width", 0.25)
                                            .style('fill', function(d){
                                                if((Selectedc == dataset[i]["City"]+", "+dataset[i]["country"])||(Selectedc == dataset[i]["country"])){
                                                   
                                                    return "red";
                                                }
                                            })
                                            .style("stroke", function(d){
                                                if((Selectedc == dataset[i]["City"]+", "+dataset[i]["country"])||(Selectedc == dataset[i]["country"])){
                                                    return "gray";
                                                }
                                            })
                                            .style("stroke-width", function(d){
                                                if((Selectedc == dataset[i]["City"]+", "+dataset[i]["country"])||(Selectedc == dataset[i]["country"])){
                                                    return 0.25;
                                                }
                                            })
                                            ; 
                                            return 0;
                                }
                            }
                        } 
                        else {
                           
                            
                             for(var i=0;i<dataset.length && !bool;i++)  {
                                 
                                 
                                

                                    if(dataset[i]["selected"] == 1 ){
                                            if(!boolB){

                                                CircleMap.attr("stroke", "gray")
                                                    .attr('fill',"red")
                                                    .attr("stroke-width", 0.25)
                                                    .style('fill', function(d){
                                                    if(d.City+", "+d.country == dataset[i]["City"]+", "+dataset[i]["country"]){

                                                        return "#00FF00";
                                                    }
                                                })
                                                .style("stroke", function(d){
                                                    if(d.City+", "+d.country == dataset[i]["City"]+", "+dataset[i]["country"]){
                                                        return "#2D1D3A";
                                                    }
                                                })
                                                .style("stroke-width", function(d){
                                                    if(d.City+", "+d.country == dataset[i]["City"]+", "+dataset[i]["country"]){
                                                       //19.25
                                                    
                                                        return 0.016095318*wmap;
                                                    }
                                                })
                                                ; 
                                                boolB = true;
                                                var tmp = dataset[i]["City"]+", "+dataset[i]["country"];

                                            }

                                        else if(dataset[i]["City"]+", "+dataset[i]["country"] != tmp){

                                                    CircleMap.attr("stroke", "gray")
                                                    .attr('fill',"red")
                                                    .attr("stroke-width", 0.25)
                                                    .style('fill', function(d){
                                                    if(d.City+", "+d.country == dataset[i]["City"]+", "+dataset[i]["country"]){

                                                        return "#00FF00";
                                                    }
                                                    if(d.City+", "+d.country == tmp){

                                                        return "#00FF00";
                                                    }
                                                })
                                                .style("stroke", function(d){
                                                    if(d.City+", "+d.country == dataset[i]["City"]+", "+dataset[i]["country"]){
                                                        return "#2D1D3A";
                                                    }
                                                    if(d.City+", "+d.country == tmp){

                                                        return "#2D1D3A";
                                                    }
                                                })
                                                .style("stroke-width", function(d){
                                                    if(d.City+", "+d.country == dataset[i]["City"]+", "+dataset[i]["country"]){
                                                        //19.25
                                                    
                                                        return 0.016095318*wmap;
                                                    }
                                                    if(d.City+", "+d.country == tmp){

                                                        //19.25
                                                    
                                                        return 0.016095318*wmap;
                                                    }
                                                })
                                                ;

                                                     bool=true;


                                                     results[0] = tmp;
                                                     results[1] = dataset[i]["City"]+", "+dataset[i]["country"];
                                            } 


                                    }  

                                else if( !first.includes(", ") && first != "" ){
//                                    console.log("coa")
                                         deselectCity(first, second);
                                   
                                        results[0] = 0;
                                        results[1] = 0;
                                       bool=true;
                                }
                                else if( !second.includes(", ") && second != "" ){
//                                       console.log("coa")
                                    
                                      deselectCity(second, first);
                                        results[0] = 1;
                                        results[1] = 1;
                                    bool=true;
                                }
                                
//                                               

                                       

                                          
                                    
                            }
                            
                             return results;
                        }
                    }	
				  
                  function deselectCity(x, y){
                      var last = false;
                         if(y=="" || x==""){
                             last = true;
                             
                         }
                        
                          
                              CircleMap.attr("stroke", "gray")
                                                .attr('fill',"red")
                                                .attr("stroke-width", 0.25)
                                                .style('fill', function(d){
                                                
                                                if(d.City+", "+d.country == x){
                                                    
                                                    return "red";
                                                }
                                                if(!last){
                                                 
                                                    if(d.City+", "+d.country == y){

                                                        return "#00FF00";
                                                    }
                                                }
                                            })
                                            .style("stroke", function(d){
                                                if(d.City+", "+d.country == x){
                                                    return "gray";
                                                }
                                                if(!last){
                                                    if(d.City+", "+d.country == y){

                                                      return "#2D1D3A";
                                                    }
                                                    
                                                }
                                            })
                                            .style("stroke-width", function(d){
                                                if(d.City+", "+d.country == x){
                                                    return 0.25;
                                                }
                                                if(!last){
                                                    if(d.City+", "+d.country == y){

                                                       //19.25
                                                    
                                                        return 0.016095318*wmap;
                                                    }
                                                }
                                            })
                                            ;
                             
                         
                      
                             
                         }
                  }
                
                
			

          
           
			var zoom = d3.zoom()         
                        .scaleExtent([ 0.1829, 1.0 ])
                        //.translateExtent([[ 975.973, 770,067 ], [ -16.026, -188.932 ]])//limit panning
            
						 .on("zoom", zooming);

    
			//The center of the country, roughly
			var center = [ 500.88558329239254, 2218.2940141542106 ];
//            var center =[405.4279140465948, 318.2496754502784];
			//Create a container in which all zoom-able elements will live
			var map = svgmap.append("g")
						.attr("id", "map")
						.call(zoom)
                        ;  //Bind the zoom behavior
  						map.call(zoom.transform, d3.zoomIdentity  //Then apply the initial transform
							.translate(wmap/2, hmap/2)
							.scale(0.1829)
							.translate(-center[0], +center[1])
                             )
            ;

			//Create a new, invisible background rect to catch zoom events
			map.append("rect")
				.attr("x", 0)
				.attr("y", 0)
				.attr("width", wmap)
				.attr("height", hmap)
				.attr("opacity", 0);
    
            
     var createZoomButtons = function() {

				//Create the clickable groups
//console.log(wmap)
//         console.log(hmap)
				//Zoom in button
				var zoomIn = svgmap.append("g")
					.attr("class", "zoom")	//All share the 'zoom' class
					.attr("id", "in")		//The ID will tell us which direction to head
					.attr("transform", "translate(" + (wmap - (0.091973244*wmap)) + "," + (hmap - (0.13843053*hmap)) + ")");

				zoomIn.append("rect")
					.attr("x", 0)
					.attr("y", 0)
					.attr("width", 0.05932737*hmap)//30
					.attr("height", 0.05932737*hmap);

				zoomIn.append("text")
					.attr("x", 0.5*(0.05932737*hmap) )//15
					.attr("y", 0.666666667*(0.05932737*hmap) )//20
					.text("+");
				
				//Zoom out button
				var zoomOut = svgmap.append("g")
					.attr("class", "zoom")
					.attr("id", "out")
					.attr("transform", "translate(" + (wmap - (0.058528428*wmap) ) + "," + (hmap - (0.13843053*hmap)) + ")");

				zoomOut.append("rect")
					.attr("x", 0)
					.attr("y", 0)
					.attr("width", 0.05932737*hmap)
					.attr("height", 0.05932737*hmap);

				zoomOut.append("text")
					.attr("x", 0.5*(0.05932737*hmap))
					.attr("y", 0.666666667*(0.05932737*hmap) )
					.html("&ndash;");

				//Zooming interaction

				d3.selectAll(".zoom")
					.on("click", function() {

						//Set how much to scale on each click
						var scaleFactor;
						
						//Which way are we headed?
						var direction = d3.select(this).attr("id");

						//Modify the k scale value, depending on the direction
						switch (direction) {
							case "in":
								scaleFactor = 1.5;
								break;
							case "out":
								scaleFactor = 0.75;
								break;
							default:
								break;
						}

						//This triggers a zoom event, scaling by 'scaleFactor'
						map.transition()
							.call(zoom.scaleBy, scaleFactor);

					});
                    d3.select("#reset")
                        .on("click", function() {

                  
  						map.call(zoom.transform, d3.zoomIdentity  //Then apply the initial transform
							.translate(wmap/2, hmap/2)
							.scale(0.1829)
							.translate(-center[0], +center[1])
                             );

                    });

			}


     
     function realYear(year){
         var str;
         if(year.includes("05")){
             
               str = year.split("05");
               str = "middle of "+str[0];
             
         }
         else{
             
             str = year;
   
         }
         
         return str;
         
     }
     
     
     function countryName(namec){
        
                        if(namec=="USA"){
                           namec="United States"; 
                        }else if(namec=="England"){
                            namec="United Kingdom";
                        }else if(namec=="Bosnia and Herzegovina"){
                            namec="Bosnia And Herzegovina";
                        }else if(namec=="Bosnia And Herzegovina"){
                            namec="Bosnia and Herzegovina";
                        }else if(namec=="Kosovo"){
                                 namec="Kosovo (Disputed Territory)";
                        }else if(namec=="Macedonia"){
                                 namec="North Macedonia";
                        }else if(namec=="Guinea Bissau"){
                                 namec="Guinea-Bissau";
                        }else if(namec=="Republic of the Congo"){
                                 namec="Republic Of Congo";
                        
                         }else if(namec=="Democratic Republic of the Congo"){
                                 namec="Congo";
                        }else if(namec=="United Republic of Tanzania"){
                                 namec="Tanzania";
                        }else if(namec=="United Republic of Tanzania"){
                                 namec="Tanzania";
                        }else if(namec=="The Bahamas"){
                            namec="Bahamas";
                        }else if(namec=="East Timor"){
                            namec="Timor-Leste";
                        }else if(namec=="French Southern and Antarctic Lands"){
                            namec="French Southern Territories";
                        }else if(namec=="Northern Cyprus"){
                            namec="Cyprus";
                        }else if(namec=="Republic of Serbia"){
                            namec="Serbia";
                        }
         return namec;
     }

//    http://localhost:8000/Documenti/CrimeProject/data/World_countries.json
    //
d3.json("https://raw.githubusercontent.com/paolo-peretti/Dashboard-Crime/master/data/World_countries.json", function(error, world) {
  if(error) return console.error(error);


        
          map.call(tipM);
       
         
          var Selected="";
          
          var Wmap = map.append("g")
            
            .attr("class", "boundary")
            .selectAll("boundary")
            .data(world.features)
            .enter().append("path")
            .attr("d", path)
            .attr('fill',function(d){
                             return colormap(countryName(d.properties.name));
//                                return "#DEB887";
                           
                         });
        
    
                liFaction.addEventListener('click', () => {
        
                        
                            first = document.getElementById("tmpfs").getElementsByTagName("a")[0].innerHTML;
                            second = document.getElementById("list_of_items_time").getElementsByTagName("a")[1].innerHTML; 

                             
                                dataset = CCtime(arrayFS);
//                                console.log(first +" ...."+ second)
                                deselectCountry(first, second);

                               
                });
                
                liSaction.addEventListener('click', () => {
        
                        
                     
                            first = document.getElementById("list_of_items_time").getElementsByTagName('a')[0].innerHTML; 
                            second = document.getElementById("tmpfs").getElementsByTagName("a")[1].innerHTML;

                              dataset = CCtime(arrayFS);
                    

                                deselectCountry(second, first);

                               
                });

                var oldcountry ;
                 btnGetCCtime.addEventListener('click', () => {
                            
                            if(CheckTwo){
                                 selectCountryOnAction(0);
                            }else{
                                 selectCountryOnAction(1);
                            }
                                
                            
                            
                            
                 });
    
    
              function averageCindex(index){
               
                        var sum=0;
                        var count=0;


                            for(var j=0;j<yearsCompact.length;j++){
                                
                                if(dataset[index][yearsCompact[j]]!=0){
                    
                                    sum += dataset[index][yearsCompact[j]];
                                    count++;
                                }
                                        
                            }

                        return (sum/count);

                   }
            
                  
    
            function colormap(tmpCountry){
               
               
               var check = false;
                var sum=0;
                var count=0;
               
                for(var i=0;i<dataset.length;i++){ 
                    
                        if( dataset[i]["country"] == tmpCountry ){
                            count++;
                            sum += averageCindex(i);

                        }
                }
                
                var cindexTmp = roundTo((sum/count),2);
               
               
               if( cindexTmp <= 20 ){
                   return "#FDEBD0";
               }else if( cindexTmp > 20 && cindexTmp <= 40 ){
                    return "#F8C471";
               }else if( cindexTmp > 40 && cindexTmp <= 60 ){
                    return "#EB984E";
               }else if( cindexTmp > 60 && cindexTmp <= 80 ){
                    return "#E67E22";
               }else if( cindexTmp > 80 && cindexTmp <= 100 ){
                    return "#CA6F1E";
               }
               
//              console.log(cindexTmp) 
               
                
               
               
           }        
    
    
            Wmap.on("mouseover",function(d){
                         tipM.show(d);
                        
                        d3.select(this)
                            .attr('fill','lightgreen')
              ;
                    })
                .on("mouseout",function(d){
                         tipM.hide(d);
                         d3.select(this).attr('fill',function(d){
                               return colormap(countryName(d.properties.name));
//                                return "#DEB887";
                           
                         });
            })
                .on("click", function(d){
                
                        var namec = countryName(d.properties.name);
                        inputGetCCtime.value=namec;
                        btnGetCCtime.click();
//                        dataset = CC(namec);
//                        
//                        selectCountryOnAction();

            })
            ;

    
        function selectCountryOnAction(id){
            
            var first = document.getElementById("list_of_items_time").getElementsByTagName('a')[0].innerHTML; 
            var second = document.getElementById("list_of_items_time").getElementsByTagName('a')[1].innerHTML; 
            
            var bool = false;
            var boolCity = false;
            var boolC=false;
            var boolA=false;
            var boolB = false;
            var tmpc = "";
            
            if(id==0){
                
                   for(var i=0;i<dataset.length && !bool ;i++)  {

                   
                        if(dataset[i]["selectedCountry"] == 1 ){

                                if(!boolB){
                                          Wmap
                                            .attr('fill', function(d){
                                              return colormap(countryName(d.properties.name));
                                            })
                                            .style('fill', function(d){

                                                if(countryName(d.properties.name) == dataset[i]["country"] ){
                                                    return "#00FF00";
                                                }

                                            }).attr("stroke", "gray")
                                            .style("stroke", "gray")
                                            .attr("stroke-width", 1)
                                            .style("stroke-width", function(d){
                                                if(countryName(d.properties.name) == dataset[i]["country"]){
                                                    return 0.004389632*wmap;
                                                    //5.25
                                                }

                                            })
                                            ;  
                                        boolB=true;
                                        var s=dataset[i]["country"];

                                }
                                if(!bool && s!=dataset[i]["country"]){
        //                            console.log(i+" : "+dataset[i]["Country"])

                                            Wmap
                                                 .attr('fill', function(d){
                                              return colormap(countryName(d.properties.name));
                                            })
                                            .style('fill', function(d){

                                                if(countryName(d.properties.name) == dataset[i]["country"] ){
                                                    return "#00FF00";
                                                }
                                                if(countryName(d.properties.name) == s ){
                                                    return "#00FF00";
                                                }
                                            }).attr("stroke", "gray")
                                            .style("stroke", "gray")
                                            .attr("stroke-width", 1)
                                            .style("stroke-width", function(d){
                                                if(countryName(d.properties.name) == dataset[i]["country"]){
                                                     return 0.004389632*wmap;
                                                    //5.25
                                                }
                                                if(countryName(d.properties.name) == s ){
                                                     return 0.004389632*wmap;
                                                    //5.25
                                                }
                                            })
                                            ;            


                                        bool=true;

                                }

                        }

                        else if( dataset[i]["selected"] == 1 && !boolCity){
                                        tmpc = dataset[i]["country"];

                                            Wmap
                                             .attr('fill', function(d){
                                              return colormap(countryName(d.properties.name));
                                            })
                                            .style('fill', function(d){

                                                if(countryName(d.properties.name) == dataset[i]["country"] ){
                                                    return "#00FF00";
                                                }

                                            }).attr("stroke", "gray")
                                            .style("stroke", "gray")
                                            .attr("stroke-width", 1)
                                            .style("stroke-width", function(d){
                                                if(countryName(d.properties.name) == dataset[i]["country"]){
                                                    return 0.004389632*wmap;
                                                    //5.25
                                                }

                                            })
                                            ;  
                                        boolCity = true;

                            }
                        else if(tmpc!="" && dataset[i]["country"]!=tmpc && dataset[i]["selected"] == 1 ){

                                            Wmap
                                             .attr('fill', function(d){
                                              return colormap(countryName(d.properties.name));
                                            })
                                            .style('fill', function(d){

                                                if(countryName(d.properties.name) == dataset[i]["country"] ){
                                                    return "#00FF00";
                                                }
                                                if(countryName(d.properties.name) == tmpc ){
                                                    return "#00FF00";
                                                }

                                            }).attr("stroke", "gray")
                                            .style("stroke", "gray")
                                            .attr("stroke-width", 1)
                                            .style("stroke-width", function(d){

                                                if(countryName(d.properties.name) == dataset[i]["country"]){
                                                    return 0.004389632*wmap;
                                                    //5.25
                                                }
                                                if(countryName(d.properties.name) == tmpc ){
                                                     return 0.004389632*wmap;
                                                    //5.25
                                                }

                                            })
                                            ;  
                                bool=true;

                            }

                    }
                
            }
            else{
                
            
                for(var i=0;i<dataset.length && !bool ;i++)  {

                    if( !first.includes(", ") && !second.includes(", ") ){

                        if(dataset[i]["selectedCountry"] == 1 ){

                                if(!boolB){
                                          Wmap
                                             .attr('fill', function(d){
                                              return colormap(countryName(d.properties.name));
                                            })
                                            .style('fill', function(d){

                                                if(countryName(d.properties.name) == dataset[i]["country"] ){
                                                    return "#00FF00";
                                                }

                                            }).attr("stroke", "gray")
                                            .style("stroke", "gray")
                                            .attr("stroke-width", 1)
                                            .style("stroke-width", function(d){
                                                if(countryName(d.properties.name) == dataset[i]["country"]){
                                                     return 0.004389632*wmap;
                                                    //5.25
                                                }

                                            })
                                            ;  
                                        boolB=true;
                                        var s=dataset[i]["country"];

                                }
                                if(!bool && s!=dataset[i]["country"]){
        //                            console.log(i+" : "+dataset[i]["Country"])

                                            Wmap
                                                 .attr('fill', function(d){
                                              return colormap(countryName(d.properties.name));
                                            })
                                            .style('fill', function(d){

                                                if(countryName(d.properties.name) == dataset[i]["country"] ){
                                                    return "#00FF00";
                                                }
                                                if(countryName(d.properties.name) == s ){
                                                    return "#00FF00";
                                                }
                                            }).attr("stroke", "gray")
                                            .style("stroke", "gray")
                                            .attr("stroke-width", 1)
                                            .style("stroke-width", function(d){
                                                if(countryName(d.properties.name) == dataset[i]["country"]){
                                                     return 0.004389632*wmap;
                                                    //5.25
                                                }
                                                if(countryName(d.properties.name) == s ){
                                                     return 0.004389632*wmap;
                                                    //5.25
                                                }
                                            })
                                            ;            


                                        bool=true;

                                }

                        }
                    }

                    else if( first.includes(", ") && second.includes(", ") || second == "" ){

                            if( dataset[i]["selected"] == 1 && !boolCity){
                                        tmpc = dataset[i]["country"];

                                            Wmap
                                             .attr('fill', function(d){
                                              return colormap(countryName(d.properties.name));
                                            })
                                            .style('fill', function(d){

                                                if(countryName(d.properties.name) == dataset[i]["country"] ){
                                                    return "#00FF00";
                                                }

                                            }).attr("stroke", "gray")
                                            .style("stroke", "gray")
                                            .attr("stroke-width", 1)
                                            .style("stroke-width", function(d){
                                                if(countryName(d.properties.name) == dataset[i]["country"]){
                                                     return 0.004389632*wmap;
                                                    //5.25
                                                }

                                            })
                                            ;  
                                        boolCity = true;

                            }
                            else if(tmpc!="" && dataset[i]["country"]!=tmpc && dataset[i]["selected"] == 1 ){

                                            Wmap
                                             .attr('fill', function(d){
                                              return colormap(countryName(d.properties.name));
                                            })
                                            .style('fill', function(d){

                                                if(countryName(d.properties.name) == dataset[i]["country"] ){
                                                    return "#00FF00";
                                                }
                                                if(countryName(d.properties.name) == tmpc ){
                                                    return "#00FF00";
                                                }

                                            }).attr("stroke", "gray")
                                            .style("stroke", "gray")
                                            .attr("stroke-width", 1)
                                            .style("stroke-width", function(d){

                                                if(countryName(d.properties.name) == dataset[i]["country"]){
                                                     return 0.004389632*wmap;
                                                    //5.25
                                                }
                                                if(countryName(d.properties.name) == tmpc ){
                                                     return 0.004389632*wmap;
                                                    //5.25
                                                }

                                            })
                                            ;  
                                bool=true;

                            }

                    }

                    else {

                             if( dataset[i]["selected"] == 1 && !boolC){
                                     

                                            Wmap
                                             .attr('fill', function(d){
                                              return colormap(countryName(d.properties.name));
                                            })
                                            .style('fill', function(d){

                                                if(countryName(d.properties.name) == dataset[i]["country"] ){
                                                    return "#00FF00";
                                                }

                                            }).attr("stroke", "gray")
                                            .style("stroke", "gray")
                                            .attr("stroke-width", 1)
                                            .style("stroke-width", function(d){
                                                if(countryName(d.properties.name) == dataset[i]["country"]){
                                                     return 0.004389632*wmap;
                                                    //5.25
                                                }

                                            })
                                            ;
                                 
                                          var tmpz = dataset[i]["country"];
                                        boolC = true;
                                            var boolS=false;
                                 
                                    for(var j=0;j<dataset.length && !boolS ;j++){
                                        
                                        if(tmpz!=dataset[j]["country"] && dataset[j]["selectedCountry"] == 1 ){
                                            
                                        boolS=true;
                                            
                                            Wmap
                                                 .attr('fill', function(d){
                                              return colormap(countryName(d.properties.name));
                                            })
                                            .style('fill', function(d){

                                                if(countryName(d.properties.name) == dataset[j]["country"] ){
                                                
                                                    return "#00FF00";
                                                }
                                                if(countryName(d.properties.name) == tmpz ){
                                                    return "#00FF00";
                                                }
                                            }).attr("stroke", "gray")
                                            .style("stroke", "gray")
                                            .attr("stroke-width", 1)
                                            .style("stroke-width", function(d){
                                                if(countryName(d.properties.name) == dataset[j]["country"]){
                                                     return 0.004389632*wmap;
                                                    //5.25
                                                }
                                                if(countryName(d.properties.name) == tmpz ){
                                                     return 0.004389632*wmap;
                                                    //5.25
                                                }
                                            })
                                            ;            


                                        bool=true;

                             }
                                    }

                            }
//                             else if(boolC && tmpz!="" && tmpz!=dataset[i]["country"] && dataset[i]["selectedCountry"] == 1 ){
//                                        
//                                            Wmap
//                                                .attr('fill', "#DEB887")
//                                            .style('fill', function(d){
//
//                                                if(countryName(d.properties.name) == dataset[i]["country"] ){
//                                                
//                                                    return "#00FF00";
//                                                }
//                                                if(countryName(d.properties.name) == tmpz ){
//                                                    return "#00FF00";
//                                                }
//                                            }).attr("stroke", "gray")
//                                            .style("stroke", "gray")
//                                            .attr("stroke-width", 1)
//                                            .style("stroke-width", function(d){
//                                                if(countryName(d.properties.name) == dataset[i]["country"]){
//                                                    return 5.25;
//                                                }
//                                                if(countryName(d.properties.name) == tmpz ){
//                                                    return 5.25;
//                                                }
//                                            })
//                                            ;            
//
//
//                                        bool=true;
//
//                             }
                             
                             else if( !boolA && dataset[i]["selectedCountry"] == 1 ){

                                            Wmap
                                             .attr('fill', function(d){
                                              return colormap(countryName(d.properties.name));
                                            })
                                            .style('fill', function(d){

                                                if(countryName(d.properties.name) == dataset[i]["country"] ){
                                                    return "#00FF00";
                                                }

                                            }).attr("stroke", "gray")
                                            .style("stroke", "gray")
                                            .attr("stroke-width", 1)
                                            .style("stroke-width", function(d){
                                                if(countryName(d.properties.name) == dataset[i]["country"]){
                                                     return 0.004389632*wmap;
                                                    //5.25
                                                }

                                            })
                                            ;  
                                        boolA=true;
                                        var tmps=dataset[i]["country"];
                                 
                                         var boolR=false;
                                 
                                    for(var j=0;j<dataset.length && !boolR ;j++){
                                        
                                        if(tmps!=dataset[j]["country"] && dataset[j]["selectedCountry"] == 1 ){
                                            
                                        boolR=true;
                                            
                                            Wmap
                                                 .attr('fill', function(d){
                                              return colormap(countryName(d.properties.name));
                                            })
                                            .style('fill', function(d){

                                                if(countryName(d.properties.name) == dataset[j]["country"] ){
                                                
                                                    return "#00FF00";
                                                }
                                                if(countryName(d.properties.name) == tmps ){
                                                    return "#00FF00";
                                                }
                                            }).attr("stroke", "gray")
                                            .style("stroke", "gray")
                                            .attr("stroke-width", 1)
                                            .style("stroke-width", function(d){
                                                if(countryName(d.properties.name) == dataset[j]["country"]){
                                                     return 0.004389632*wmap;
                                                    //5.25
                                                }
                                                if(countryName(d.properties.name) == tmps ){
                                                    return 0.004389632*wmap;
                                                    //5.25
                                                }
                                            })
                                            ;            


                                        bool=true;

                             }

                        }
//                             else if(boolA && dataset[i]["selected"] == 1 && tmps!="" && dataset[i]["country"]!=tmps ){
//
//                                            Wmap
//                                            .attr('fill', "#DEB887")
//                                            .style('fill', function(d){
//
//                                                if(countryName(d.properties.name) == dataset[i]["country"] ){
//                                                    return "#00FF00";
//                                                }
//                                                if(countryName(d.properties.name) == tmps ){
//                                                    return "#00FF00";
//                                                }
//
//                                            }).attr("stroke", "gray")
//                                            .style("stroke", "gray")
//                                            .attr("stroke-width", 1)
//                                            .style("stroke-width", function(d){
//
//                                                if(countryName(d.properties.name) == dataset[i]["country"]){
//                                                    return 5.25;
//                                                }
//                                                if(countryName(d.properties.name) == tmps ){
//                                                    return 5.25;
//                                                }
//
//                                            })
//                                            ;  
//                            bool=true;
//
//                        }
                    }

//                    else if( (!first.includes(", ") && second.includes(", ")) || second == "" ){
//                     
//                        else if( !boolA && dataset[i]["selectedCountry"] == 1 ){
//
//                                            Wmap
//                                            .attr('fill', "#DEB887")
//                                            .style('fill', function(d){
//
//                                                if(countryName(d.properties.name) == dataset[i]["country"] ){
//                                                    return "#00FF00";
//                                                }
//
//                                            }).attr("stroke", "gray")
//                                            .style("stroke", "gray")
//                                            .attr("stroke-width", 1)
//                                            .style("stroke-width", function(d){
//                                                if(countryName(d.properties.name) == dataset[i]["country"]){
//                                                    return 5.25;
//                                                }
//
//                                            })
//                                            ;  
//                                        boolA=true;
//                                        var tmps=dataset[i]["country"];
//
//                        }
//                        else if(boolA && dataset[i]["selected"] == 1 && tmps!="" && dataset[i]["country"]!=tmps ){
//
//                                            Wmap
//                                            .attr('fill', "#DEB887")
//                                            .style('fill', function(d){
//
//                                                if(countryName(d.properties.name) == dataset[i]["country"] ){
//                                                    return "#00FF00";
//                                                }
//                                                if(countryName(d.properties.name) == tmps ){
//                                                    return "#00FF00";
//                                                }
//
//                                            }).attr("stroke", "gray")
//                                            .style("stroke", "gray")
//                                            .attr("stroke-width", 1)
//                                            .style("stroke-width", function(d){
//
//                                                if(countryName(d.properties.name) == dataset[i]["country"]){
//                                                    return 5.25;
//                                                }
//                                                if(countryName(d.properties.name) == tmps ){
//                                                    return 5.25;
//                                                }
//
//                                            })
//                                            ;  
//                            bool=true;
//
//                        }
//                    }
                }
                
            }
            
            
        }
            
        }
    
        function deselectCountry(x, y){
            
            var s = x.toString(); 
            var z = y.toString(); 
          
//            console.log(s)
            if( s.includes(",") ){
                
                s = x.split(", ");
                s = s[1];
               
            }
            if( z.includes(",") ){
                 
                z = y.split(", ");
                z = z[1];
                
            }
             Wmap
                  .attr('fill', function(d){
                                              return colormap(countryName(d.properties.name));
                                            })
                 .style('fill', function(d){
                     if(s==z){
                        
                         if(countryName(d.properties.name) == z){
                                return "#00FF00";
                         }

                     }else{
                         if(countryName(d.properties.name) == s){
                                
                                return colormap(countryName(d.properties.name));
                                     
                         }
                         if(countryName(d.properties.name) == z){
                                return "#00FF00";
                         }
                     }
                                       
                 }).attr("stroke", "gray")
                 .style("stroke", "gray")
                 .attr("stroke-width", 1)
                 .style("stroke-width", function(d){
                 
                     if(s==z){
                        
                         if(countryName(d.properties.name) == z){
                                return 5.25;
                         }

                     }else{
                         
                     
                         if(countryName(d.properties.name) == s){
                              return 1;
                         }
                         if(countryName(d.properties.name) == z){
                            return 5.25;
                         }
                         
                     }
                 })
                 ;  
                                
            
        }
        
        map.selectAll("circle")
                            .data(dataset)
                            .enter()
                            .append("circle")
                            .attr("cx", function(d){
                                    return projection([d.longitude, d.latitude])[0];
                            })
                            .attr("cy", function(d){
                                    return projection([d.longitude, d.latitude])[1];
                            })
                            .attr("r", function(d){
                                    
                                    return Math.sqrt(parseInt(middlePoint(d))) * 300/500;
                            })
                            .style("fill", "red")
                            .style("stroke", "gray")
                            .style("stroke-width", 0.25)
                            .style("opacity", 0.75)
//                            .append("title")
//                            .text(function(d){
//                              
//                                return d.country+", "+d.City;
//                                
//                               
//                            })
                            .on("mouseover",function(d){
//                                        console.log(Math.sqrt(parseInt(d.cindex)))
                                        d3.select(this)
                                            .style('fill','#7B68EE')
                              ;
            
            
            
            var xPosition = parseFloat(d3.select(this).attr("cx"));
                           
                           var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

                            var yPosition = parseFloat(offset-(maplegendaheight));
//                            var yPosition = parseFloat(offset);
                                
                                //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text(function(){
                                    if(d.City!="")
                                    return d.country+", "+d.City;

                                })
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);
            
            
            
            
                                    })
                            .on("mouseout",function(d){
            
                            d3.select("#tooltip").classed("hidden", true);
//                                         tip.hide(d);
                                         d3.select(this).style('fill',"red");
                            })
                            ;
                            createZoomButtons();
    
                     
   
            
});
    
    
    var j, i, city, country, tip, citytmp, countrytmp;
                
                var ul = document.getElementById("tips");
                
                
                var countryList = [];
                countryList.splice(0,countryList.length);
                //tips
                for(i=0;i<dataset.length;i++){
                    
                    
                    
                    var li = document.createElement("li");
                        city=dataset[i]["City"];
                        country=dataset[i]["country"];
                    
                    if(!countryList.includes(country)){
                            countryList.push(country);
                            
                            var li2 = document.createElement("li");
                            
                            tip2 = country;
                            
                            var a2 = document.createElement('a');  

                            // Create the text node for anchor element. 
                            var link2 = document.createTextNode(tip2); 

                            a2.onclick = function() {

                                var tmp2 = this.innerText || this.textContent; 

                                inputGetCCtime.value = tmp2;    
                            }
                            // Append the text node to anchor element. 
                            a2.appendChild(link2);  

                            li2.appendChild(a2);
                            ul.appendChild(li2);
                            
                        }
                      
                        tip = city + ", " +country;
                        
                        
                        var a = document.createElement('a');  
                  
                        // Create the text node for anchor element. 
                        var link = document.createTextNode(tip); 
                    
                        a.onclick = function() {
                            
                            var tmp = this.innerText || this.textContent; 
                            
                            inputGetCCtime.value = tmp;    
                        }
                        // Append the text node to anchor element. 
                        a.appendChild(link);  

                        li.appendChild(a);
                        ul.appendChild(li);
                    
                        
                }
                

           
		function CCtime(str){
                    
                  
                   var j, i, city, country, tip, citytmp, countrytmp, cc, ccc, verifyCompare;
                        
                  
                        
                    
            
                 
                    var resultData = [];
                    var tmpcities = [];
                    var typeval = [];
                   
                    
                    if(Array.isArray(str)){
                        
                        cc=str[0];
                        ccc=str[1];
                        verifyCompare=true;
                    }else{
                        cc=str;
                        verifyCompare=false;
                    }
                        
                   
            
                    searchFunction();
                
                   function rangeYears(x){
                        
                        var range = [];
                        var bool = false;
                        for(var j=0;j<x.length && !bool;j++){
                                                            
                                if( x[j]["cindex"] != 0 ){
                                    range[0] = x[j]["year"];
                                    bool=true;
                                }
                            

                        }
                        
                        
                        bool=false;
                        
                        for(var j = x.length-1;j >= 0 && !bool;j--){
                    
                                if( x[j]["cindex"] != 0){
                                    range[1] = x[j]["year"];
                                    bool=true;
                                }
                            

                        }
                        
                        return range;
                    }
                
                   function rangeCYears(x){
                        
                        var range = [];
                        var tmp = 10000;
                        var rangetmp ;
                        for(var j=0;j<x.length;j++){
                            
                            rangetmp = rangeYears(x[j]["years"]);  
                            if(rangetmp[0] < tmp){
                                
                                    tmp = rangetmp[0];
                                    range[0] = rangetmp[0];
                                 
                                }
                            

                        }
                        
                        
                        tmp=0;
                        
                        for(var j = x.length-1;j >= 0;j--){
                    
                                rangetmp = rangeYears(x[j]["years"]);  
                                if(rangetmp[1] > tmp){
                                
                                    tmp = rangetmp[1];
                                    range[1] = rangetmp[1];
                                  
                                }
                            

                        }
                       
                        return range;
                    }
                    
                   function cityWithMoreData(r1, r2, index){
                       
                       var init1=0;
                       var end1=14;
                       var init2=0;
                       var end2=14;
                       var booly = false;
                       var check1 = false;
                       var check2 = false;
                       
               
                       
                       if(cc!=undefined && cc!=""){
                           
                            check1 = true;
                           
                           
                           if(r1 != -1){
                              
                                for(var t=0;t < yearsCompact.length && !booly;t++){

                                    if( dataset[r1][yearsCompact[t]] != 0 ){
                                        init1 = t;
                                        booly = true;
                                    }

                                }
                                booly = false;

                                for(var t = yearsCompact.length -1;t >= 0 && !booly;t--){

                                    if( dataset[r1][yearsCompact[t]] != 0 ){
                                        end1 = t;
                                        booly = true;
                                    }

                                }
                           }
                          
                           
                       }
                       
                       if(ccc!=undefined && ccc!=""){
                          
                             check2 = true;
                             booly = false;
                          
                            if(r2 != -1){
                                for(var s=0;s < yearsCompact.length && !booly;s++){


                                    if( dataset[r2][yearsCompact[s]] != 0 ){

                                        init2 = s;
                                        booly = true;
                                    }

                                }
                                booly = false;

                                for(var s = yearsCompact.length -1;s >= 0 && !booly;s--){

                                    if( dataset[r2][yearsCompact[s]] != 0 ){
                                        end2 = s;
                                        booly = true;
                                    }

                                }
                            
                            }
                          
                        }
                       
//                       console.log(init1 +"&&"+end1)
//                       console.log(init2 +"&&"+end2)
                       
                        if(check1 && check2){
                          
                            if(init1 > init2){
                                var init = init2;
                            }else{
                                var init = init1;
                            }
                            if(end1 > end2){
                                var end = end1;
                            }else{
                                var end = end2;
                            }
                            
                        }
                       else if(check1){
                            var init = init1;
                            var end = end1;
                        }
                       else if(check2){
                            var init = init2;
                            var end = end2;
                        }
                       
                        var typevalz = [];          
                        typevalz.splice(0,typevalz.length);
                       
                     
                        
                       if(check1 && check2){
                          
                           
                               
                            var newYearsC = [];
                            newYearsC.splice(0,newYearsC.length);
                       
                            for(var i=init;i<end+1;i++){
                             
                                newYearsC.push(yearsCompact[i]);
                            }
                       
                       
                           
                      
                            var tmpRealyear;
                            
                            if(( r1 == index && r1 != -1 ) || ( r2 == index && r2 != -1 ) ){
                      
                                   for(var z=0;z<newYearsC.length;z++){

                                               tmpRealyear=newYearsC[z].split("y");
                                               tmpRealyear=tmpRealyear[1];
                                                
                                               
                                               
                                               typevalz.push(
                                               {
                                                            year : tmpRealyear,
                                                            cindex : checkCS(dataset[index][newYearsC[z]])

                                               });

                                  }
                            }
                               
                           
                           return typevalz;
                       }
                        else if(!check1){
                          return AllofCountry(r2, true);
                        }  
                        else if(!check2){
                          return AllofCountry(r1, true);
                        } 
                            
                    
                   }
                    
                   function AllofCountry(index, ok){
                       
                       if(ok){
                           
                           var booly = false;
                           var init=0;
                           var end=15;
                            for(var t=0;t < yearsCompact.length && !booly;t++){
                                  
                                if( dataset[index][yearsCompact[t]] != 0 ){
                                    init = t;
                                    booly = true;
                                }

                            }
                            booly = false;
                       
                            for(var t = yearsCompact.length -1;t >= 0 && !booly;t--){

                                if( dataset[index][yearsCompact[t]] != 0 ){
                                    end = t;
                                    booly = true;
                                }

                            }
                            
                            var newYearsC = [];
                            newYearsC.splice(0,newYearsC.length);
                       
                            for(var i=init;i<end+1;i++){
                                newYearsC.push(yearsCompact[i]);
                            }
                       
//                       console.log(newYearsC)
                       }else{
                          var newYearsC = yearsCompact;
                       }
                       
                       
                           var typevalz = [];          
                           typevalz.splice(0,typevalz.length);
                      
                          var tmpRealyear;
                        
               
                       
                           for(var z=0;z<newYearsC.length;z++){

                                       tmpRealyear=newYearsC[z].split("y");
                                       tmpRealyear=tmpRealyear[1];
                                        
                                      
                                       typevalz.push(
                                       {
                                                    year : tmpRealyear,
                                                    cindex : checkCS(dataset[index][newYearsC[z]])

                                       });

                          }
                          return typevalz;
                   }
            
                   function averageCity(cityyears){
               
                        var sum=0;
                        var count=0;


                            for(var j=0;j<cityyears.length;j++){

                                        if( cityyears[j]["cindex"] != 0 ){
                                                
                                            sum += cityyears[j]["cindex"];
                                            count++;
                                        }
                            }

                        return (sum/count);

                   }
            
                   function averageCountry(country){
        

                             var sum = 0;
                             var counttmp =0;
                           
                       for(var j=0;j<years.length;j++){
                           
                           for(var i=0;i<country.length;i++){
                               
                               if( country[i].years[j].cindex != 0 ){
                                   
                                   sum += country[i].years[j].cindex;
                                   counttmp++;
                                   
                               }
                           }
                           
                       }

                       
                            return sum/counttmp;

                }
            
            
                    d3.select("#stackarea").select("svg").remove();  
                    
                   
                    var widthArea=$("#stackareaContainer").innerWidth();
                
//                    var paddingArea=$("#stackareaContainer").css("padding-left");
//                    paddingArea=paddingArea.split("px");
            
//                    console.log(widthArea)
                    
                    var w = widthArea*0.816326531;
                    var h = (w)/2;
                    
            
                    var padding = 0.02*w;
                    
                    
                    var xScale, yScale, xAxis, yAxis, area;  //Empty, for now
            
                if(!verifyCompare){
                    
                    
                    d3.select("#info1-time").classed("hidden", true);
                    d3.select("#info2-time").classed("hidden", true);
                  

                    
                        
                    
                    
                    if(cc!=""){
                         d3.select("#timeline").classed("hidden", false);
                         hiddenElem(false);     
                        document.getElementById("stackarea").style.width=w+"px";
                    }else{
                        d3.select("#timeline").classed("hidden", true);
                    }

                    var contributors, update;
                    var check =false;

                    var sum = 0;
                    var container = [];
                    var allCitiesOfCountry = [];
                    var str, cindex, sindex, tmpRealyear;
  
                    if(typeval != []){
                        typeval.splice(0,typeval.length);
                    }
                    if(container != []){
                        container.splice(0,container.length);
                    }
                    if(allCitiesOfCountry != []){
                        allCitiesOfCountry.splice(0,allCitiesOfCountry.length);
                    }
            
                    if(tmpcities != []){
                        tmpcities.splice(0,tmpcities.length);
                    }

                    var check = false;
                    
                    for(i=0;i<dataset.length;i++){ 
                        
                        citytmp = dataset[i]["City"];
                        countrytmp = dataset[i]["country"];

                        str = citytmp + ", " +countrytmp;
                        

                        if( str==cc){

                            

                            country=countrytmp;
                            city=citytmp;
                         
                            dataset[i]["selected"]=1;
    
                                
                  
                            var init = 0;
                            var end = 15;
                            var booly = false;


                             container.push({
                                city : city  ,
                                country : country ,
                                years : AllofCountry(i, true)

                            })

                            
                            
                
                         

                           for(var c=0;c<dataset.length;c++){
                                
            
                                    if( dataset[c]["country"] == country && !tmpcities.includes(dataset[c]["City"])){
                                        
                                        
                                        tmpcities.push(dataset[c]["City"]);
                                        
 
                                        
                                         allCitiesOfCountry.push({
                                                        city : dataset[c]["City"] ,
                                                        country : country ,
                                                        years : AllofCountry(c, false)

                                         });
                                            

                                    }
                                   
                                }
                                
                            
                               

                        }
                        
                        else if( countrytmp==cc ){
                            
                          
                            
                            country=countrytmp;
                            
                         
                            dataset[i]["selectedCountry"]=1;

                           for(var c=0;c<dataset.length;c++){
                                
            
                                    if( dataset[c]["country"] == country && !tmpcities.includes(dataset[c]["City"])){
                                        
                                        
                                        tmpcities.push(dataset[c]["City"]);
                                        
 
                                        
                                         container.push({
                                                        city : dataset[c]["City"] ,
                                                        country : country ,
                                                        years : AllofCountry(c, false)

                                         });
                                            

                                    }
                                    dataset[i]["selected"]=0;
                                }
                            
                               
                               
                        
                            
                            
                        }
                        
                        else{
                            if(str!=cc){
                                dataset[i]["selected"]=0;
                                
                            }
                            if(countrytmp!=cc){
                                dataset[i]["selectedCountry"]=0;
                            }
                        }

                    }


                     var resultData=dataset;   
                   
                    
                    if(!cc.includes(", ")){
                        allCitiesOfCountry = container;
                    }

                    document.getElementById("cname-time").innerHTML = cc;
                    
                    if(container.length == 1){
                       
//                        d3.select("#stackareaContainer").classed("hidden", false);
//                        d3.select("#info-time").classed("hidden", false);
                        d3.select("#back").classed("hidden", false);
                        d3.select("#back").classed("btn btn-warning", true);
                        
                        d3.select("#backToCompare").classed("hidden", false);
                        d3.select("#backToCompare").classed("btn btn-warning", true);
                        
                        var cindex = roundTo(averageCity(container[0].years), 2);
                        var sindex = 100 - averageCity(container[0].years);
                        sindex = roundTo(sindex, 2);
                        var range = rangeYears(container[0].years);
                       
                    }
                    else if(container.length != 0){
                        
//                        d3.select("#stackareaContainer").classed("hidden", false);
//                        d3.select("#info-time").classed("hidden", false);
                        d3.select("#back").classed("hidden", true);
                        d3.select("#back").classed("btn btn-warning", false);
                        
                        d3.select("#backToCompare").classed("hidden", false);
                        d3.select("#backToCompare").classed("btn btn-warning", true);
                        var cindex = roundTo(averageCountry(container) , 2);
                        var sindex = 100 - averageCountry(container) ;
                        sindex = roundTo(sindex, 2);
                        var range = rangeCYears(container);
                      
                    }
            
                    var cix=cindex;
                    var six=sindex;
                    
                    
                    if(!CrimeOrSafety){
                        
                        if(cindex!=0){
                            cix = roundTo(parseFloat(100-cindex), 2);
                        }
                        if(sindex!=0){
                            six = roundTo(parseFloat(100-sindex), 2);
                        }
                        
                    }
                    
                 
                    document.getElementById("cindex-time").innerHTML ="Average of crime's indicies  = "+cix+" % ";
                    document.getElementById("sindex-time").innerHTML = "Average of safety's indicies  = "+six+" % ";
                    if(realYear(range[0]) != realYear(range[1])){
                        document.getElementById("range").innerHTML = "Data from "+ realYear(range[0]) +" to "+ realYear(range[1]);
                    }else{
                         document.getElementById("range").innerHTML = "Data of "+ realYear(range[0]) ;
                    }
                    

                   
                    
              

                    //Define key function, to be used when binding data
                    var key = function(d) {
                        return d.key;
                    };

                    //Set up stack methods
                    var cityStack = d3.stack();
                    var countryStack = d3.stack();
                    
                    var cities = [];
                     cities.splice(0,cities.length);
                    
                    for(var s=0;s<container.length;s++){
                        cities.push(container[s].city);
                    }
                    
                    cityStack.keys(cities);
                    
                    
                    var newYears = [];
                    newYears.splice(0,newYears.length);
                    
                    
                    if( container.length != 1){
                        newYears = years;
                    }
                    else {
                        
                        var init = 0;
                        var end = 15;
                        var booly = false;
                        

                        for(var i=0;i < container[0].years.length;i++){
                            newYears.push(container[0].years[i].year);
                        }
                        
                    }   
                    
                
                    
					countryStack.keys(newYears);
                   
                   
                    var CCities = countryStack(container);
					 
                 
                   var sum=0;
//                    console.log(CCities)
                    for(var j=0;j<CCities.length;j++){
//                            sum=0;
                            for(var z=0;z<cities.length;z++){

                                if(z!=0){
//                                    sum += CountryCities[j][z-1][1];
                                    CCities[j][z][0] = CCities[j][z-1][1];
                                }
                                
                                if( CCities[j][z].data.years[j].cindex == 0 && z!=0 )
                                    CCities[j][z][1] = CCities[j][z][0];
                                else if(CCities[j][z] != undefined)
                                    CCities[j][z][1] = CCities[j][z].data.years[j].cindex + CCities[j][z][0];  
                                
                                
                            }
    
                    }
//               console.log(CCities)
                   
                     var CountryCities = cityStack(CCities);
                    
                   
                        for(var j=0;j<CountryCities.length;j++){

                              
                                    for(var z=0;z<newYears.length;z++){


                                                CountryCities[j][z][0] = CountryCities[j][z].data[j][0];
                                                CountryCities[j][z][1] = CountryCities[j][z].data[j][1];


                                    }
                              
                        }
                    
                        
                   
                    
                   
//                    console.log(CountryCities)
                    
                    
                    function maxyear(d){
                        
                        var max = 0;
                        
                        for(var z=0;z<d.length;z++){
                            
                          
                                   max += (d[z][1]-d[z][0]);
                                                    
                        }
                        
                        if(d.length == 1){
                                
                                max = max+ (max/2);
                        }
                            
                        return max;
                        
                    }
                    
                    
              
//                   console.log(CountryCities)
                    
                    
                    	//Create scale functions
//                    console.log(d3.range(years.length))
					xScale = d3.scaleBand()
							   .domain(d3.range(newYears.length))
                               
							   .rangeRound([padding, w - padding * 2]);
				
					yScale = d3.scaleLinear()
								.domain([
									0,
									d3.max(CCities, function(d, i) {
										var max = 0;

										for (var i = 0; i < CCities.length; i++) {
                                         
                                            if(max < maxyear(CCities[i])){
                                                max = maxyear(CCities[i]);
                                            }
                                         
										}
			                            
										return max;

									})
								])
								.range([h - padding, padding / 2])
								.nice();
				
					//Define axes
                    var y;
					xAxis = d3.axisBottom()
							   .scale(xScale)
							   .ticks(15)
//							   .tickFormat(formatTime);
                               .tickFormat(function(d,i){ 
                                    y =newYears[i];
                                    y= y.split("05");
                                    y=y[0];
                       
                                    return y; 
                                })
                    ;
				
					//Define Y axis
					yAxis = d3.axisRight()
							   .scale(yScale)
							   .ticks(5);
                    
                   
//                    Define area generator
					area = d3.area()

								.x(function(d, i) { 
                        
                                    return xScale(i)+(0.032*w);
                                })
								.y0(function(d) { 
                                  
                                return yScale(d[0]); })
                    
								.y1(function(d) {
                             
                                return yScale(d[1]);
                                })
                    ;
                    

                    if(newYears.length == 1){
//                        console.log(w)
                          var xsc = (w-2*padding)/(2*newYears.length)-(0.009*w);
                    }else{
                          var xsc = (w-2*padding)/(2*newYears.length);
                    }
                          //Define line generator
				    var line = d3.line()
						    .defined(function(d, i) { 
//                                console.log(d)
                                
                                return d[1] > 0; 
                                
                                })
							.x(function(d, i) { 
                                
                                return xScale(i)+xsc;
                                
                            })
							.y(function(d) { 
                               
                                return yScale(d[1]); });
                    
                    
                
                    
                    
        
				    var color = d3.scaleOrdinal(d3.schemeCategory20);
					//Create SVG element
					var stackarea = d3.select("#stackarea")
								.append("svg")
                                .attr("viewBox","0 0 "+w+" " +(h+(0.1*h)));
//								.attr("width", w)
//								.attr("height", h+(0.1*h));
                    
                    
                    stackarea.append("g")
						.attr("id", "cities");
                    
                    
                     //true crime - false safety
                    if(CrimeOrSafety){
                        document.getElementById("titlestack").innerHTML="Stack Area Chart about Crime";
                    }else{
                        document.getElementById("titlestack").innerHTML="Stack Area Chart about Safety";
                    }
                    
                    d3.select("#firstCC").classed("hidden", true);
                    d3.select("#secondCC").classed("hidden", true);
                    
                    d3.select("#firstCCTL").classed("hidden", true);
                    d3.select("#secondCCTL").classed("hidden", true);
                    
                    d3.select("#label")
                             .style("font-size", "1.1vw")
                                ;
                    
                    
                    if( CountryCities.length==1 ){
                    
                    
                       
                        if(CrimeOrSafety){   
                            document.getElementById("titlestack").innerHTML="Crime in : "+cc;
                        }else{
                            document.getElementById("titlestack").innerHTML="Safety in : "+cc;
                        }
                        stackarea.append("g")
                              .attr("class", "grid").style("fill", "azure")
                              .call(d3.axisTop().scale(xScale)
                                      .tickSize(-(h-padding))
                                      .tickFormat("")
                              );
                        
                        stackarea.append("g")
                              .attr("class", "grid")
                              .call(d3.axisLeft().scale(yScale)
                                      .tickSize(-(w - padding * 2))
                                      .tickFormat("")
                              );
                    
                        var path = stackarea.append("path")
                            .data(CountryCities)
                            .attr("class", "line")
                            
                            .attr("d", line)
                            .style("stroke", "blue");
                    
                 
                       
                        var totalLength = path.node().getTotalLength();

                        path.attr("stroke-dasharray", totalLength + " " + totalLength)
                          .attr("stroke-dashoffset", totalLength)
                          .transition()
                          .duration(2000)
                          .attr("stroke-dashoffset", 0);
                   
                                  
                        var c = stackarea.selectAll("circle")
                             .data(CountryCities[0])
                             .attr("class", "circle1")
                             .enter()
                             
                             .append("circle")
                                .attr("cx", function(d, i) { 
//                                console.log(xScale(0))
                                    return xScale(i)+xsc; 
                                   
                                })
                                .attr("cy",function(d, i) { 
                                   
                                    return yScale(d[1]);
                                   
                                   });
                        
                    
                        
                            c.transition()
                             .delay(function(d, i){
                                return i*100;
                            }).duration(1000)
                            .on("start", function(){
                                d3.select(this)
    
                                    .attr("r", 0);
                            })
                            .on("end", function(){
                                d3.select(this)
 
                                    .attr("r", function(d){
                                        
                                        if(d[1] > 0){
                                                //10
                                            return (0.02*h);
                                        }else{
                                            return 0;
                                        }
                                    });
                            })
                            
                            ;
                   
                            c.on("mouseover", function(d, i) {
                                var ttype = realYear(newYears[i]);
                                var fval = d[1];
                            //Get this bar's x/y values, then augment for the tooltip
                            d3.select(this)
                                    .attr("fill", "orange")
                                //16
                                    .attr("r", 0.032*h)
                                    .transition("coloron")
                                    .duration(1000)
                                    ;
 
                            var vrz = 130.13;
                                
                            var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

//                            console.log(offset);
                            var yPosition = parseFloat(offset-maplegendaheight);
                                
                            var xPosition = parseFloat(d3.select(this).attr("cx")) + vrz;
                            
//                            var yPosition = parseFloat(d3.select(this).attr("cy")) / 2 +yLC +50;
//                                //17.5
                            path.style("stroke-width", 0.035*h).transition("xw");
//                                
//                            
//                            
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text(ttype +" : "+fval+"%");
                                
                            

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);

                       })
                              .on("mouseout", function() {
                                 d3.select(this)
                                        .attr("fill", "black").attr("r", 0.02*h)//10
                                        .transition("coloroff")
                                        .duration(1000);
                                //Hide the tooltip             7.5
                                    path.style("stroke-width", 0.015*h).transition("xw");
                                d3.select("#tooltip").classed("hidden", true);

                           })
                            ;
                        
                }
                    
                    else if(CountryCities.length != 0){

//                        console.log(CountryCities)
					//Create areas for TYPES
					var starea = stackarea.append("g")
						.attr("id", "types")
						.selectAll("path")
						.data(CountryCities, key)
                       
						.enter()
						.append("path")
						.attr("class", "area");
                        
                        starea.transition()
						.delay(function(d, i){
                            return i*100;
                        })
				        .on("start", function() {

									//Transition axis to new scale concurrently
									stackarea.select("g.axis.y")
										.transition("yi")
										.duration(1000)
										.call(yAxis);
                                
                                    stackarea.select("g.axis.x")
										.transition("xi")
										.duration(1000)
										.call(xAxis);
                        
											
						})
						.duration(1000)
						.attr("opacity", 1)
                        
						.attr("d", area)
                        .attr("fill",function(d, i){
                   
                                return color(i);
                         });
                        
                        starea.on("click", function(d){
                            
                                d3.select("#tooltip").classed("hidden", true);
                            
                                inputGetCCtime.value = d.key+", "+country;
                                btnGetCCtime.click();
                            
                        
                        })
                        .on("mouseover", function(d, i) {
                            starea.attr("opacity", 0.6);
                            
                            d3.select(this)
                                    .attr("fill", '#00fdff')
                                    .style("opacity", 1)
                                    .style("stroke", "black")
                                    
                                    .style("stroke-width", 0.006*h)//3
                                    .transition("coloron")
                                    .duration(1000)
                                    ;   

                            var vrz = 130.13;
                            
                            var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

//                            console.log(offset);
                            var yPosition = parseFloat(offset-maplegendaheight);
                                
                           
//                           console.log(d3.select(this).attr("cx"))
                            var xPosition = xScale.bandwidth() / 2 + vrz ;
//                            var yPosition = h / 4 +yLC -70;
                                
                           
//                                
//                            
//                            
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text("city : "+d.key)
                                .style("font-size", "1.7vw")
                                ;
                                
                            

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);

                       })
                            .on("mouseout", function() {
                            
                                starea.attr("opacity", 1);

                                starea
                                        .attr("fill", function(d, i){return color(i);})
                                        .style("opacity", 1)
                                        .style("stroke", "gray")
                                    
                                        .style("stroke-width", 0)
                                        .transition("coloroff")
                                        .duration(1000)
                                        ;   
                                
                                d3.select("#tooltip").classed("hidden", true);
                            
                               

                           })

						;
                        

                        
                        
                    }
       
                    
                    //Create axes
					stackarea.append("g")
						.attr("class", "axis x")
						.attr("transform", "translate(0," + (h - padding) + ")")
						.call(xAxis);
				
					stackarea.append("g")
						.attr("class", "axis y")
						.attr("transform", "translate(" + (w - padding * 2) + ",0)")
						.call(yAxis);

                    
                    
                    
                    
                  
                    
                    
                    hTL=(0.2*h);
                    
                  var xScaleTL = d3.scaleBand()
							   .domain(d3.range(years.length))
                               
							   .rangeRound([padding, w - padding * 2]);
				
				  var yScaleTL = d3.scaleLinear()
								.domain([
									0,
									100
								])
								.range([hTL - padding, padding / 2])
								.nice();    
                        
                        
                        
                    var lineTL = d3.line()
						   
							.x(function(d, i) { 
                               //32
                                return xScaleTL(i)+(0.032*w);
                                
                            })
							.y(function(d) { 
                               
                                return yScaleTL(0); });
                        
                        
                    d3.select("#timeline").selectAll("svg").remove();
                    
                    
                    
                    
                     var newYearsCompared=[];//what is really "comparable"
                    newYearsCompared.splice(0,newYearsCompared.length);
                    var countVal=0;
                    
                    for(var s=0;s<years.length;s++){
                         countVal=0;
                      for(i=0;i<allCitiesOfCountry.length;i++){
                        
                        for(var j=0;j<years.length;j++){

                            if( allCitiesOfCountry[i].years[j].year == years[s] ){


                                if(allCitiesOfCountry[i].years[j].cindex != 0){
                                    countVal++;
                                }

                            }
                        }
                        
                    
                      }
                        
                      if(countVal >= 3){
                           newYearsCompared.push(years[s]);
                      }
                        
                    }
                    
//                    console.log(newYearsCompared)
                    
                    
                    
        
                    
                     var tline = d3.select("#tline")
								.append("svg")
                                .attr("viewBox","0 0 "+w+" " +(hTL+(0.3*(hTL))) );
//								.attr("width", w)
//								.attr("height", hTL+(0.3*(hTL)));
                    
                     var pathTL = tline.append("path")
                                    .datum(years)
                                    .attr("class", "line")

                                    .attr("d", lineTL)
                                    .style("stroke", "black");
    
                        
                     var tmpselected=0;
                     var tmpselectedyear = newYearsCompared[0];    
                        
                        
                    var cTL = tline.selectAll("circleTL")
                                     .data(years)
                                     .attr("class", "circleTL")
                                     .enter()

                                    .append("circle")
                                        .attr("cx", function(d, i) { 

                                            return xScaleTL(i)+(0.032*w); 

                                        })
                                    .attr("cy",function(d, i) { 

                                            return yScaleTL(0);

                                           })
                                    .attr("r", function(d, i){
                                        //14
                                            return hTL*0.14;
                                        
                                    })
                    
                                     .attr("fill", function(d, i){
                                        
                                         
                                            return "white";
                                             
                                        
                                    })
                                    .attr("stroke", function(d, i){
                                         if(!newYearsCompared.includes(d)){
                                            return "gray";
                                         }else{
                                             return "green";
                                         }
                                        
                                    })
                                    .attr("stroke-opacity", function(d, i){
                                        if(!newYearsCompared.includes(d)){
                                            return 0.6;
                                        }else
                                            return 1;
                                    })
                                    .style("fill", function(d, i){
                                        if(d==newYearsCompared[0]){
                                            return "orange";
                                        }
                                    })
                                    .style("stroke", function(d, i){
                                        if(d==newYearsCompared[0]){
                                            return "green";
                                        }
                                    })
                                    .style("r", function(d, i){
                                        
                                        if(d==newYearsCompared[0]){
                                            //22
                                            return 0.22*hTL;
                                        }
                                        
                                    })
                    
                                       
                                    .attr("stroke-width", function(d, i){
                                     
                                            return 0.1*hTL;
                                        
                                    })
                                    ;
                        
                       
                        
                        
                         var yearsTL = tline.selectAll("text")
                                     .data(years)
                                    
                                     .enter()
                                     .append("text")
                                     .text(function(d, i){
                                         if(years[i].includes("05")){
                                             var xtmp = years[i].split("05");
//                                             console.log("middle \n of \n"+ xtmp[0] )
                                             return xtmp[0] ;
                                         }else
                                         return years[i];
                                     })
                                 
                                    .attr("x", function(d, i)
                                          //(32-12)
                                          {return xScaleTL(i)+( (0.032*w)-(0.012*w) );}
                                         )
//                         console.log(yScaleTL(0.4*hTL))
                                    .attr("y",  yScaleTL(0.7*hTL))
                                    .attr("font-family", "sans-serif")
                                    .attr("font-size", "0.8vw");
                        
                        
//                          console.log(0.5*hTL)
                        
                        
                 
                        
                    
                     podio(tmpselectedyear, CrimeOrSafety);
                    
                function podio(tmpselectedyear, cindex){ 
                    
                    
                        d3.select("#bars").classed("hidden", true);
                        d3.select("#pieTL").classed("hidden", true);
                    

                            var relatedCities = [];
                            var countVal=0;
                    
                    
                            if(relatedCities != []){
                                relatedCities.splice(0,relatedCities.length);
                            }
                             d3.select("#podium").selectAll("svg").remove(); 

                           if(!cindex){
                               
                            var ttypetmp="sindex";
                            var ttvaltmp=0;
                           }else{

                                var ttypetmp="cindex";
                                var ttvaltmp=0;
                           }
                    for(i=0;i<allCitiesOfCountry.length;i++){
                        
                        for(var j=0;j<years.length;j++){

                            if( allCitiesOfCountry[i].years[j].year == tmpselectedyear ){

                                  relatedCities.push(
                                                        {
                                                        country:allCitiesOfCountry[i].country,
                                                        city: allCitiesOfCountry[i].city,
                                                        val: allCitiesOfCountry[i].years[j].cindex,
                                                        type : ttypetmp
                                                        }
                                                );
                                
                                if(allCitiesOfCountry[i].years[j].cindex != 0){
                                    countVal++;
                                }

                            }
                        }
                    }    
//                             console.log(relatedCities) 
                        if(countVal >= 3){ 
                            
                               

                            d3.select("#podium").classed("hidden", false);   
                     }else{
                         
                         if(allCitiesOfCountry.length < 3){
                             
                              d3.select("#timeline").classed("hidden", true);   
                         }
                         
                         document.getElementById("titleyear").innerHTML="About this year are given less than 3 datas";
                     }
                            var podium = new Array();  
                                    if(countVal >= 3){
                                        var first=0;
                                        var second=0;
                                        var third=0;


                                        var city1, city2, city3, j;
                                        for(j=0;j<relatedCities.length;j++){

                                             if(first <= relatedCities[j]["val"]){
                                                first = relatedCities[j]["val"];
                                                city1 = relatedCities[j]["city"];
                                            }
                                        }
                                        for(j=0;j<relatedCities.length;j++){

                                             if(second <= relatedCities[j]["val"] && relatedCities[j]["val"] < first){
                                                second = relatedCities[j]["val"];
                                                 city2 = relatedCities[j]["city"];
                                            }
                                        }

                                        podium.push(
                                                          {
                                                             city: city2,
                                                             val: second
                                        });
                                        podium.push(
                                                          {
                                                             city: city1,
                                                             val: first
                                        });
                                        for(j=0;j<relatedCities.length;j++){

                                             if(third <= relatedCities[j]["val"] && relatedCities[j]["val"] < second ){
                                                third = relatedCities[j]["val"];
                                                 city3 = relatedCities[j]["city"];
                                            }
                                        }

                                        podium.push(
                                                          {
                                                             city: city3,
                                                             val: third
                                                          });
                                    };
//                                    console.log(podium)
                    
                                       var hm=h; 
                                       var wm=0.9*w;
                                       var paddingp=0.1*w;
                                     if(podium.length!=0){

                                    var xScaleC = d3.scaleBand()
                                                    .domain(d3.range(podium.length))//range generate array of sequential numbers
                                                    .rangeRound([0, wm])
                                                    .paddingInner(0.05)
                                    ;

                                    var yScaleC = d3.scaleLinear()
                                                    .domain([0, d3.max(podium, function(d){

                                                        return d.val;
                                                    })])
                                                    .range([0+paddingp, hm-paddingp]);



                                                    //Create SVG element
                                    var pod = d3.select("body")
                                                            .select("#podium")
                                                            .append("svg")
//                                                            .attr("viewBox","0 0 "+wm+" " +hm );
                                                            .attr("width", wm)
                                                            .attr("height", hm);

                                         
                                    if(CrimeOrSafety){
                                        document.getElementById("titleyear").innerHTML="Most criminal cities in : "+ realYear(tmpselectedyear);
                                    }else{
                                        document.getElementById("titleyear").innerHTML="Safest cities in : "+ realYear(tmpselectedyear);
                                    }
                                    pod.selectAll("rect")
                                       .data(podium)
                                       .enter()
                                       .append("rect")
                                       .attr("x", function(d, i) {

                                            return xScaleC(i);
                                       })
                                        .transition("moverect")

                                        .delay(function(d, i){
                                            return i*120;
                                        })
                                        .ease(d3.easeBounce)
                                        .duration(1000)
                                         
                                         .on("start", function(d, i) {
                                             d3.select("#tline").classed("unclickable", true);
                                             
                                            
                                            })
                                         .on("end", function(d, i) {
                                        
                                                 d3.select("#tline").classed("unclickable", false);

                                         })	
                                       .attr("y", function(d) {
    //                                    console.log(yScale(d.val))
                                            return hm - yScaleC(d.val);
                                       })
                                         //230
                                       .attr("width", 0.255555556*wm)
                                       .attr("height", function(d) {
                                            return yScaleC(d.val);
                                       })
                                       .attr("fill", function(d){
                                        if(ttypetmp=="cindex"){
                                            return "#DA0101";
                                        }else{
                                        return "green";}
                                    })
                                         ;

                                    var pod = pod.selectAll("text")
                                               .data(podium)
                                               .enter()
                                               ;

                                    pod.append("text").text(function(d, i) {
                                                if(i==0){
                                                    return 2;
                                                }else if(i==1){
                                                    return 1;
                                                }else if(i==2){
                                                    return 3;
                                                }

                                           })
                                           .attr("text-anchor", "middle")
                                           .attr("x", function(d, i) {
                                                                 //115
                                                return xScaleC(i) + 0.127777778*wm;
                                           })
                                            .attr("y", function(d) {
                                            var perc = yScaleC(d.val)/5;//80
                                            return hm - (yScaleC(d.val)-perc) ;
                                            })
                                           .attr("font-family", "sans-serif")
                                           .attr("font-size", "3vw")
                                           .attr("fill", "white");


                                     pod.append("text").text(function(d, i) {
                                               return d.city;

                                           })
                                           .attr("text-anchor", "middle")
                                           .attr("x", function(d, i) {
                                                    //115
                                                return xScaleC(i) + (0.127777778*wm);
                                           })
                                            .attr("y", function(d) {

                                            return hm - (yScaleC(d.val))-(0.02*hm) ;
                                            })
                                           .attr("font-family", "sans-serif")
                                           .attr("font-size", "1.4vw")
                                           .attr("fill", "black");

                                     pod.append("text").text(function(d, i) {

                                               return d.val+"%";

                                           })
                                           .attr("text-anchor", "middle")
                                           .attr("x", function(d, i) {
                                               //115
                                                return xScaleC(i) + (0.127777778*wm);
                                           })
                                            .attr("y", function(d) {
                                                 var perc = yScaleC(d.val)/2;
                                                return hm - (yScaleC(d.val)-perc);
                                            })
                                           .attr("font-family", "sans-serif")
                                           .attr("font-size", "1.7vw")
                                           .attr("fill", "white");

                                }

                };   
                    
                    
                    
                    
                         cTL.on("mouseover", function(d, i) {
                                        
                                        var ttype = realYear(years[i]);

                                        if( d3.select(this) != tmpselected ){
                                        
                                        
                                        d3.select(this)
                                                .attr("fill", function(d, i){
                                                 if(!newYearsCompared.includes(d)){
                                                        return "#EE5E4F";
                                                     }else{
                                                         return "lightgreen";
                                                     }
                                                })
                                                .attr("r", 0.22*hTL)
                                                .transition("coloron")
                                                .duration(1000)
                                                ;

                                    var vrz = 130.13;
                                        
                                    var xPosition = parseFloat(d3.select(this).attr("cx")) + vrz;
                                   
//                                    if(cc.includes(", ")){
//                                         var yPosition = yTL-100;
//                                    }else{
//                                        var yPosition = yTL-150;
//                                    }
                                    var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

//                            console.log(offset);
                            var yPosition = parseFloat(offset-maplegendaheight);
                                
                                    
                                        
                                   
    
                                        
                                    d3.select("#tooltip")
                                        .style("left", xPosition + "px")
                                        .style("top", yPosition + "px")	
                                        .select("#label").style("font-size", "1.1vw")
//                                        .text("click to view the podium in : " +ttype);
                                        .text(function(){
//                                        console.log(d)
                                              if(!newYearsCompared.includes(d)){
                                                        return "there is not enough data in " +ttype;
                                              }else{
                                                         return "click to view the podium in : " +ttype
                                               }
                                    });



                                    //Show the tooltip
                                    d3.select("#tooltip").classed("hidden", false);
                                    }

                                        })
                                       .on("mouseout", function(d, i) {
                                        
                                        
                                         if( d3.select(this) != tmpselected ){
                                             
                                             
                                             d3.select(this)
                                                    .attr("fill", "white").attr("r", 0.14*hTL)
                                                        .attr("stroke", function(d, i){
                                                 if(!newYearsCompared.includes(d)){
                                                        return "gray";
                                                     }else{
                                                         return "green";
                                                     }
                                                })
                                                    .transition("coloroff")
                                                    .duration(1000);
                                            //Hide the tooltip
                                         }
                                        d3.select("#tooltip").classed("hidden", true);
                                             
                                         

                                   })
                                       .on("click", function(d, i){
                                        
                                                                                
                                    if(newYearsCompared.includes(d)){
                                            
                                        
                                         cTL.style("fill", function(d, i){
                                             if( years[i] == tmpselectedyear){
                                                return "white";
                                             }
                                         })
                                                .style("r", function(d, i){
                                             if( years[i] == tmpselectedyear){
                                                return  0.14*hTL;
                                             }
                                         })
                                                .style("stroke", function(d, i){
                                             if( years[i] == tmpselectedyear){
                                                 
                                                if(!newYearsCompared.includes(d)){
                                                    return "gray";
                                                 }else{
                                                     return "green";
                                                 }
                                             }
                                         })
                                                .transition("coloroff")
                                                .duration(1000);
                                        
                                        tmpselectedyear = years[i];
                                        tmpselected = d3.select(this);
                                        
                                         d3.select(this)
                                            .style("fill", "orange")
                                            .style("stroke", "green")
                                            .style("r", 0.22*hTL)
                                            .transition("coloron")
                                            .duration(1000)
                                            ;
                                        
                                        
                                        
                                         cTL.style("fill", function(d, i){
                                             if( years[i] == tmpselectedyear){
                                                return "white";
                                             }
                                         })
                                                .style("r", function(d, i){
                                             if( years[i] == tmpselectedyear){
                                                return  0.14*hTL;
                                             }
                                         })
                                                .style("stroke", function(d, i){
                                             if( years[i] == tmpselectedyear){
                                                 
                                                if(!newYearsCompared.includes(d)){
                                                    return "gray";
                                                 }else{
                                                     return "green";
                                                 }
                                             }
                                         })
                                                .transition("coloroff")
                                                .duration(1000);
                                        
                                        tmpselectedyear = years[i];
                                        tmpselected = d3.select(this);
                                        
                                         d3.select(this)
                                            .style("fill", "orange")
                                            .style("stroke", "green")
                                            .style("r", 0.22*hTL)
                                            .transition("coloron")
                                            .duration(1000)
                                            ;
                                        
                                        
                                         podio(tmpselectedyear, CrimeOrSafety);
                                    }
                                        }) 
                                    ;
                    
                    
             
                   
                     //line media
                    d3.select("#containerSmallmultiples").selectAll("svg").remove();
                    d3.select("#smallmultiples").selectAll("div").remove();
//                    d3.select("#legendaSmalls").selectAll("svg").remove();
                    
                if( allCitiesOfCountry.length!=1 ){
                    
                    
                           
                    var averageLine= [];
                    averageLine.splice(0,averageLine.length);
                    
                    var sum = 0;
                    var counttmp =0;
                    
                    averageLine.city="average";
                    averageLine.country="average";
                    averageLine.years = [];
                    
                    for(var j=0;j<years.length;j++){
                           
                           for(var i=0;i<allCitiesOfCountry.length;i++){
                               
                               if( allCitiesOfCountry[i].years[j].cindex != 0 ){
                                   
                                   sum += allCitiesOfCountry[i].years[j].cindex;
                                   counttmp++;
                                   
                               }
                               
                           }
                        
                        averageLine.years.push({
                            year : years[j],
                            cindex : roundTo(parseFloat(sum/counttmp), 2)
                        });
                    
                        
                           
                    }
//                    console.log(averageLine)
                    
                    
                     //smallmultiples
                    
                   var wcontainer=$("#containerSmallmultiples").width();
//                    console.log(wcontainer)
                    
                     //465
                   var wsmall = 0.415178571*wcontainer;
                    //310
                   var hsmall = 0.666666667*wsmall;
                   
                  
              
                   var xScaleMultiple = d3.scaleBand()
							   .domain(d3.range(years.length))
                               
							   .rangeRound([padding, wsmall - padding * 2]);
				
                    
				   var yScaleMultiple = d3.scaleLinear()
								.domain([
									0,
									100
								])
								.range([hsmall - padding, padding / 2])
								.nice();
				
					//Define axes
                    var y;
					var xAxisMultiple = d3.axisBottom()
							   .scale(xScaleMultiple)
							   .ticks(15)
//							   .tickFormat(formatTime);
                               .tickFormat(function(d,i){ 
                                    y =years[i];
                                    y= y.split("05");
                                    y=y[0];
                       
                                    return y; 
                                })
                    ;
                    
                    
				
					//Define Y axis
					var yAxisMultiple = d3.axisRight()
							   .scale(yScaleMultiple)
							   .ticks(5);
                    


                    
                          //Define line generator
				    var linesmall = d3.line()
						    .defined(function(d, i) { 
//                                console.log(d)
                                
                                return d.cindex > 0; 
                                
                                })
							.x(function(d, i) { 
                                //14
                                return xScaleMultiple(i)+(0.030107527*wsmall);
                                
                            })
							.y(function(d) { 
                               
                                return yScaleMultiple(d.cindex); });
                    
                    
//                    console.log(w)
                     var legendaSmalls = d3.select("body")
                                        .select("#legendaSmalls")
                                        .append("svg")
                                        .attr("viewBox","0 0 "+w+" " +(0.045*w) );
//                                        .attr("width", w)
//                                        .attr("height", 45);

                    
                      //true crime - false safety
                    if(CrimeOrSafety){
                        
                        document.getElementById("titlesmallm").innerHTML="Small Multiples Chart about Crime";
                        
                         var legendasmall = legendaSmalls.append("g")
                                            .attr("transform", function(d, i){
                                                return "translate("+( i)*(0.023*w)+ ", "+( i)*(0.023*w)+")";
                                            });//23

                        legendasmall.append("rect").attr("x", 0).attr("y", 0)
                                             .attr("width", 0.03*w)
                                             .attr("height", 0.03*w)
                                             .attr("fill", "red");
                        
                         legendasmall.append("text").text(" Average of crime indicies in "+allCitiesOfCountry[0].country)
                                    .attr("x", 0.06*w).attr("y", 0.02*w)
                                    .attr("font-family", "sans-serif")
                                    .attr("font-size", "1.4vw");
                    
                    }else{
                        document.getElementById("titlesmallm").innerHTML="Small Multiples Chart about Safety";
                        
                        var legendasmall = legendaSmalls.append("g")
                                            .attr("transform", function(d, i){
                                                return "translate("+( i)*(0.023*w)+ ", "+( i)*(0.023*w)+")";
                                            });

                        legendasmall.append("rect").attr("x", 0).attr("y", 0)
                                             .attr("width", 0.03*w)
                                             .attr("height", 0.03*w)
                                             .attr("fill", "green");
                        
                         legendasmall.append("text").text(" Average of safety indicies in "+allCitiesOfCountry[0].country)
                                    .attr("x",  0.06*w).attr("y", 0.02*w)
                                    .attr("font-family", "sans-serif")
                                    .attr("font-size", "1.2vw");
                        
                    }
                    
                    d3.select("#firstCC").classed("hidden", true);
                    d3.select("#secondCC").classed("hidden", true);
                    
                    d3.select("#firstCCTL").classed("hidden", true);
                    d3.select("#secondCCTL").classed("hidden", true);
                    
                    
                    
                    
                    
                    var div, namecity;
                    for(var j=0;j<allCitiesOfCountry.length;j++){
                        
                        namecity = document.createElement("div");  
                        namecity.innerHTML = allCitiesOfCountry[j].city;
                        namecity.style.fontSize = "1.1vw";
                        
                        div = document.createElement("div");   // Create a <button> element
                        div.setAttribute("id", "small"+j);
                        div.setAttribute("class", "small");
                        div.appendChild(namecity);
                        
                        document.getElementById("smallmultiples").appendChild(div);    
                        
                        
                        
                        //create j linechart using middle as point
                        
                        //Create SVG element
//                        console.log(hsmall)
					var smallMultiple = d3.select("#smallmultiples").select("#small"+j)
								.append("svg")
                                .attr("viewBox","0 0 "+wsmall+" " +( hsmall+(hsmall*0.09911943)) );
//								.attr("width", wsmall)
//								.attr("height", hsmall+25);
                        
                        
              
                    
                        smallMultiple.append("g")
                              .attr("class", "grid").style("fill", "azure")
                              .call(d3.axisTop().scale(xScaleMultiple)
                                      .tickSize(-(hsmall-padding))
                                      .tickFormat("")
                              );
                        
                        smallMultiple.append("g")
                              .attr("class", "grid")
                              .call(d3.axisLeft().scale(yScaleMultiple)
                                      .tickSize(-(wsmall - padding * 2))
                                      .tickFormat("")
                              );
                    
                        
                        var pathSmall = smallMultiple.append("path")
                            .datum(allCitiesOfCountry[j].years)
                            .attr("class", "line")
                            
                            .attr("d", linesmall)
                             .style("stroke", "blue");
                    
                 
                       
                        var totalLength = pathSmall.node().getTotalLength();

                        pathSmall.attr("stroke-dasharray", totalLength + " " + totalLength)
                          .attr("stroke-dashoffset", totalLength)
                          .transition()
                          .duration(2000)
                          .attr("stroke-dashoffset", 0);
                   
                                  
                        var c = smallMultiple.selectAll("circle")
                             .data(allCitiesOfCountry[j].years)
                             .attr("class", "circlesmalls")
                             .enter()
                             
                             .append("circle")
                                .attr("cx", function(d, i) { 
//                                console.log(xScale(0))    14
                                    return xScaleMultiple(i)+(0.030107527*wsmall); 
                                   
                                })
                                .attr("cy",function(d, i) { 
                                   
                                    return yScaleMultiple(d.cindex);
                                   
                                   })
                                .attr("fill", "blue");
                        
                    
                        
                            c.transition()
                             .delay(function(d, i){
                                return i*100;
                            }).duration(1000)
                            .on("start", function(){
                                d3.select(this)
    
                                    .attr("r", 0);
                            })
                            .on("end", function(){
                                d3.select(this)
 
                                    .attr("r", function(d){
                                        
                                        if(d.cindex > 0){
                                            //14
                                            return 0.022580645*hsmall;
                                        }else{
                                            return 0;
                                        }
                                    });
                            })
                            
                            ;
                
                        
                    
                        
                    var averagepath = smallMultiple.append("path")
                            .datum(averageLine.years)
                            .attr("class", "line")
                            
                            .attr("d", linesmall)
                            .style("stroke", function(){
                                if(CrimeOrSafety)
                                    return "red";
                                else
                                    return "green";
                            })
                            .style("stroke-width", 0.009677419*hsmall);//3
                    
                 
                       
                 
                        
                        
                        
                        
       
                     smallMultiple.append("g")
                        .attr("class", "xaxis")
                        .attr("transform", "translate(0," + (hsmall - padding) + ")")
                      .call(xAxisMultiple)
                      .selectAll("text")
                        .style("font-size", "0.8vw")
                        .style("text-anchor", "end")
                        .attr("dx", "-.8em")
                        .attr("dy", ".15em")
                        .attr("transform", "rotate(-80)");
                    //Create axes
//					
				
					smallMultiple.append("g")
						.attr("class", "axis y")
						.attr("transform", "translate(" + (wsmall - padding * 2) + ",0)")
						.call(yAxisMultiple);
                        
                        

                    }
                    
                    
                
                }
                else{
                    d3.select("#containerSmallmultiples").classed("hidden", true);
                    d3.select("#back").classed("btn btn-warning", false);
                    d3.select("#back").classed("hidden", true);
                }
                    
                   
                   
                    
                  
   
                    
                    
                }
            
                else{
                
                    
                    
                    
                d3.select("#bars").classed("hidden", false);
                d3.select("#pieTL").classed("hidden", false);
                    
                 d3.select("#backToCompare").classed("btn btn-warning", false);
                 d3.select("#back").classed("btn btn-warning", false);
                    
                 d3.select("#backToCompare").classed("hidden", true);
                 d3.select("#back").classed("hidden", true);
                  
                 hiddenElem(true);
                    
                    if((cc==undefined || cc=="")&&(ccc==undefined || ccc=="")){
                        d3.select("#timeline").classed("hidden", true);
                        
                        d3.select("#timeline").selectAll("svg").remove();
//                        d3.select("#linechart").classed("hidden", true);
//                        d3.select("#containerPie").classed("hidden", true);
//                        document.getElementById("legenda").style.border = "0px solid #4CAF50";
//                         d3.select("#legenda").classed("hidden", true);
                    }else{
//                      d3.select("#legenda").classed("hidden", false);    
//                     d3.select("#containerPie").classed("hidden", false);
//                     document.getElementById("legenda").style.border = "10px solid #4CAF50"; 
//                 
//                        d3.select("#linechart").classed("hidden", false);
                    }
                    
                    if(ccc!=undefined && ccc!=""){
                         d3.select("#info2-time").classed("hidden", false);
                    }else{
                          d3.select("#info2-time").classed("hidden", true);
                    }
//                        hiddenElemCompare2(false);
                    if(cc==undefined || cc==""){
                          d3.select("#info1-time").classed("hidden", true);
                         document.getElementById("info2-time").style.marginLeft = "9%";
                         document.getElementById("info2-time").style.marginRight = "50%";
                   
                        
                    }else{
//                        hiddenElemCompare1(false);
                           d3.select("#info1-time").classed("hidden", false);
                          document.getElementById("info2-time").style.marginLeft = "1%";
                         document.getElementById("info2-time").style.marginRight = "9%";
                    }
                    var contributors1, update1, contributors2, update2;
                    var check =false;
                    
                   
                    var typeval2 = [];
                    var container1 = [];
                    var container2 = [];
                    var tmpcities = [];
                    var tmpcities2 = [];
                    var cindex1, sindex1, str, cindex2, sindex2, country1, city1, country2, city2, selectedCC, selectedCCcountry;
                   var checkselect = 1;
                   var checkselectcountry = 1;
    //               console.log(typeval)
                    if(typeval != []){
                        typeval.splice(0,typeval.length);
                    }
                    if(typeval2 != []){
                        typeval2.splice(0,typeval2.length);
                    }
                    if(container1 != []){
                        container1.splice(0,container1.length);
                    }
                   
                    if(container2 != []){
                        container2.splice(0,container2.length);
                    }
                    
                    
                    if(tmpcities != []){
                        tmpcities.splice(0,tmpcities.length);
                    }
                      
                    if(tmpcities2 != []){
                        tmpcities2.splice(0,tmpcities2.length);
                    }

                
                    
                    var check = false;
                    var checkIfCountry1 = false;
                    var checkIfCountry2 = false;
                   
                    
                    if(cc!=undefined && cc!=""){
                        
                        for(var r1=0;r1<dataset.length && !check;r1++){ 
                           
                            citytmp = dataset[r1]["City"];
                            countrytmp = dataset[r1]["country"];

                            str = citytmp + ", " +countrytmp;

                            if( str==cc ){
                                  
                                  check = true;  

                            }
                        
                        } 
                         citytmp = dataset[r1-1]["City"];
                         countrytmp = dataset[r1-1]["country"];

                         str = citytmp + ", " +countrytmp;

                            if( str==cc ){
                                r1 = r1-1;
                            }else{
                                r1 = -1;
                            }
                    
                       
                    
                        
                    }
                    check = false;
                   
                    
                    if(ccc!=undefined && ccc!=""){
                        
                        for(var r2=0;r2<dataset.length && !check;r2++){ 
                           
                            citytmp= dataset[r2]["City"];
                            countrytmp= dataset[r2]["country"];

                            str = citytmp + ", " +countrytmp;

                            if( str==ccc ){
                                  check = true;  
                                 

                            }

                        }
                     
                          citytmp = dataset[r2-1]["City"];
                         countrytmp = dataset[r2-1]["country"];

                         str = citytmp + ", " +countrytmp;

                            if( str==ccc ){
                                r2 = r2-1;
                            }else{
                                r2 = -1;
                            }
                      
                        
                    }
                    
                    
                    
                    
//                     console.log(dataset)
                    for(i=0;i<dataset.length ;i++){ 
                        
                        citytmp= dataset[i]["City"];
                        countrytmp= dataset[i]["country"];

                        str = citytmp + ", " +countrytmp;
                       

                        if( str == cc ){

                            
                        

                            country1=countrytmp;
                            city1=citytmp;
                            
                            
                            dataset[i]["selected"]=1;

                                  container1.push({
                                        city : city1  ,
                                        country : country1 ,
                                        years : cityWithMoreData(r1, r2, i)

                                    })
                                  
                            
                              

                        }
            
                        
                        else if( str == ccc ){

                            country2=countrytmp;
                            city2=citytmp;
                            
                          
                            dataset[i]["selected"]=1;

                                    container2.push({
                                        city : city2  ,
                                        country : country2 ,
                                        years : cityWithMoreData(r1, r2, i)

                                    })

                            
                         


                        }
                        
                        
                        else if( countrytmp==cc ){
                            
                            
                          
                            
                            country1=countrytmp;
                            
                         
                            dataset[i]["selectedCountry"]=1;

                           
                               
                                for(var c=0;c<dataset.length;c++){
                                
            
                                    if( dataset[c]["country"] == country1 && !tmpcities.includes(dataset[c]["City"])){
                                        
                                        
                                        tmpcities.push(dataset[c]["City"]);
                                        
 
                                        
                                         container1.push({
                                                        city : dataset[c]["City"] ,
                                                        country : country1 ,
                                                        years : AllofCountry(c, false)

                                         });
                                            

                                    }
                                    
                                    
                                }
                        
                            
                        }
                        
                        
                        else if( countrytmp==ccc ){

                           
                            country2=countrytmp;
                            city2=citytmp;
                            
                            dataset[i]["selectedCountry"]=1;

                            
                                for(var c=0;c<dataset.length;c++){
                                
            
                                    if( dataset[c]["country"] == country2 && !tmpcities2.includes(dataset[c]["City"])){
                                        
                                        
                                        tmpcities2.push(dataset[c]["City"]);
                                        
 
                                        
                                         container2.push({
                                                        city : dataset[c]["City"] ,
                                                        country : country2 ,
                                                        years : AllofCountry(c, false)

                                         });
                                            

                                    }
                                    
                                }


                        }
                        
                         else{
                             
                            if(str!=cc && str!=ccc){
                                dataset[i]["selected"]=0;
                            }
                            if(countrytmp!=cc && countrytmp!=ccc){
                                dataset[i]["selectedCountry"]=0;
                            }
                        }
                       
                    }

//                    console.log(container1)
//                    console.log(container2)
                     var resultData=dataset;  
                
                  var checkorder = true;
                    


                    
            
                
                    

                    if(cc!=undefined && cc!=""){
                        
                        
                         d3.select("#firstCC").classed("hidden", false);
                         document.getElementById("firstCC").innerHTML=cc;
                         
                         d3.select("#firstCCTL").classed("hidden", false);
                         document.getElementById("firstCCTL").innerHTML=cc;
                        
                        
                        if(cc.includes("Kingdom")){
                            document.getElementById("firstCCTL").style.fontSize="1.5vw";
                        }else{
                            document.getElementById("firstCCTL").style.fontSize="1.9vw";
                        }
                        
                        if(cc.includes(", ")){
                       
                            d3.select("#stackareaContainer").classed("hidden", false);
                           
                            var cindex1 = roundTo(averageCity(container1[0].years), 2);
                            var sindex1 = 100 - averageCity(container1[0].years);
                            sindex1 = roundTo(sindex1, 2);
                            var range1 = rangeYears(container1[0].years);
                       
                        }
                        else{

                            d3.select("#stackareaContainer").classed("hidden", false);
                           
                            var cindex1 = roundTo(averageCountry(container1) , 2);
                            var sindex1 = 100 - averageCountry(container1) ;
                            sindex1 = roundTo(sindex1, 2);
                            var range1 = rangeCYears(container1);

                        }
                        
                        
                        var cix1=cindex1;
                        var six1=sindex1;


                        if(!CrimeOrSafety){
                            if(cindex1!=0){
                                cix1 = roundTo(parseFloat(100-cindex1), 2)
                            }
                            if(sindex1!=0){
                                six1 = roundTo(parseFloat(100-sindex1), 2)
                            }
                        }
                        
                       
                        document.getElementById("cname1-time").innerHTML = cc;
                 
                        document.getElementById("averagecrime1").innerHTML = " Average of : ";
                        document.getElementById("cindex1-time").innerHTML ="crime's indicies  = "+cix1+" % ";
                        document.getElementById("sindex1-time").innerHTML = "safety's indicies  = "+six1+" % ";
                        
                        if(realYear(range1[0]) != realYear(range1[1])){
                            document.getElementById("range1").innerHTML = "Data from "+ realYear(range1[0]) +" to "+ realYear(range1[1]);
                        }else{
                             document.getElementById("range1").innerHTML = "Data of "+ realYear(range1[0]) ;
                        }
                        
                    }
                    else{
                        d3.select("#firstCC").classed("hidden", true);
                        d3.select("#firstCCTL").classed("hidden", true);
                        }
                    
                    if(ccc!=undefined && ccc!=""){
//                        console.log(container2)
                        d3.select("#secondCC").classed("hidden", false);
                        document.getElementById("secondCC").innerHTML=ccc;
                        d3.select("#secondCCTL").classed("hidden", false);
                        document.getElementById("secondCCTL").innerHTML=ccc;
                        
                        if(ccc.includes(", United Kingdom")){
                            document.getElementById("secondCCTL").style.fontSize="1.5vw";
                        
                        }else{
                            document.getElementById("secondCCTL").style.fontSize="1.9vw";
                        }
                         if(ccc.includes(", ")){
                          
                            d3.select("#stackareaContainer").classed("hidden", false);
//                          console.log(container2)
                            var cindex2 = roundTo(averageCity(container2[0].years), 2);
                            var sindex2 = 100 - averageCity(container2[0].years);
                            sindex2 = roundTo(sindex2, 2);
//                           console.log(container2)
                            var range2 = rangeYears(container2[0].years);
                       
                        }
                        else{

                            d3.select("#stackareaContainer").classed("hidden", false);
                           
                            var cindex2 = roundTo(averageCountry(container2) , 2);
                            var sindex2 = 100 - averageCountry(container2) ;
                            sindex2 = roundTo(sindex2, 2);
                            var range2 = rangeCYears(container2);

                        }
                        
                        
                        
                        var cix2=cindex2;
                        var six2=sindex2;


                        if(!CrimeOrSafety){
                            if(cindex2!=0){
                                cix2 = roundTo(parseFloat(100-cindex2), 2)
                            }
                            if(sindex1!=0){
                                six2 = roundTo(parseFloat(100-sindex2), 2)
                            }
                        }
                        
                        
                        
                        document.getElementById("cname2-time").innerHTML = ccc;
                         document.getElementById("averagecrime2").innerHTML = " Average of : ";
                        document.getElementById("cindex2-time").innerHTML ="crime's indicies  = "+cix2+" % ";
                        document.getElementById("sindex2-time").innerHTML = "safety's indicies  = "+six2+" % ";
                        
//                        console.log(range2)
                        if(realYear(range2[0]) != realYear(range2[1])){
                            document.getElementById("range2").innerHTML = "Data from "+ realYear(range2[0]) +" to "+ realYear(range2[1]);
                        }else{
                             document.getElementById("range2").innerHTML = "Data of "+ realYear(range2[0]) ;
                        }
                        
                        
                    }
                    else{
                        d3.select("#secondCC").classed("hidden", true);
                        d3.select("#secondCCTL").classed("hidden", true);
                    }
                   
                  
                    
                    
                    var newYears = [];
                    newYears.splice(0,newYears.length);
                    
                    
                    function maxyear(d){
                        
                        var max = 0;
                        
                        for(var z=0;z<d.length;z++){
                            
                          
                                   max += (d[z][1]-d[z][0]);
                                                    
                        }
                        
                        if(d.length == 1){
                                
                                max = max+ (max/2);
                        }
                            
                        return max;
                        
                    }
                    
                   
                    
                    
                    if(   (cc!=undefined || ccc!=undefined) ){
                       
                        
                        
                        
                        var init = 0;
                        var end = 15;
                        var booly = false;
                        var x1=0;
                        var x2=0;
                       
                       if(cc.includes(", ") || ccc.includes(", ")) {
                           

                           if( cc.includes(", ") ){
                              
                               newYears.splice(0,newYears.length);
                               
                               for(var i=0;i < container1[0].years.length;i++){
                                    newYears.push(container1[0].years[i].year);

                                    if(x1 < container1[0].years[i].cindex){
                                        x1 = container1[0].years[i].cindex;
                                    }
                                }
                               
                               container1 = container1[0].years;


                           }
                           else if(cc != "" && cc != undefined){
                               
                               newYears = years;
                               
                                var count = 0;
                                var sum = 0;
                                var country1stack = [];
                                country1stack.splice(0,country1stack.length);

                                for(var i=0;i<newYears.length;i++){

                                    sum=0;
                                    count=0;

                                    for(var y=0;y<container1.length;y++){

                                         if( container1[y].years[i].cindex > 0 )
                                             count++;

                                         sum += container1[y].years[i].cindex;

                                    }

                                    if(sum!=0){
                                        var only1 =  roundTo(sum/count, 2);
                                    }else{
                                        var only1= 0;
                                    }

                                    country1stack.push({
                                        year : newYears[i],
                                        cindex : only1
                                    });


                                }

                                container1 = country1stack;
                                var x1=0;
                               
                                  for(var i=0;i < container1.length;i++){
                               
                                        if(x1 < container1[i].cindex){
                                            x1 = container1[i].cindex;
                                        }

                                  }
                               
                           }
                           
                           if( ccc.includes(", ") ){
                            
                               newYears.splice(0,newYears.length);

                               for(var i=0;i < container2[0].years.length;i++){
                                    newYears.push(container2[0].years[i].year);

                                    if(x2 < container2[0].years[i].cindex){
                                        x2 = container2[0].years[i].cindex;
                                    }
                                }
                               container2 = container2[0].years;

                           }
                           else if(ccc != "" && ccc != undefined){
                               
                                newYears = years;
                               
                               var count = 0;
                                var sum = 0;
                                var country2stack = [];
                                country2stack.splice(0,country2stack.length);

                                for(var i=0;i<newYears.length;i++){

                                    sum=0;
                                    count=0;

                                    for(var y=0;y<container2.length;y++){

                                         if( container2[y].years[i].cindex > 0 )
                                             count++;

                                         sum += container2[y].years[i].cindex;

                                    }

                                    if(sum!=0){
                                        var only1 =  roundTo(sum/count, 2);
                                    }else{
                                        var only1= 0;
                                    }

                                    country2stack.push({
                                        year : newYears[i],
                                        cindex : only1
                                    });


                                }

                                container2 = country2stack;
                                var x2=0;
                               
                                  for(var i=0;i < container2.length;i++){
                               
                                        if(x2 < container2[i].cindex){
                                            x2 = container2[i].cindex;
                                        }

                                }
                           }
                           
                       }
                        else{
                           
                           
                            newYears = years; 
                           
                    if( container1 != undefined ){
                        
                            
                            var count = 0;
                            var sum = 0;
                            var country1stack = [];
                            country1stack.splice(0,country1stack.length);

                            for(var i=0;i<newYears.length;i++){

                                sum=0;
                                count=0;

                                for(var y=0;y<container1.length;y++){

                                     if( container1[y].years[i].cindex > 0 )
                                         count++;

                                     sum += container1[y].years[i].cindex;

                                }

                                if(sum!=0){
                                    var only1 =  roundTo(sum/count, 2);
                                }else{
                                    var only1= 0;
                                }

                                country1stack.push({
                                    year : newYears[i],
                                    cindex : only1
                                });
                                

                            }
                            
                            container1 = country1stack;

                    }
                        
                    if( container2 != undefined ){
                        
                       
                        var sum = 0;
                        var country2stack = [];
                        country2stack.splice(0,country2stack.length);
                       
                        for(var i=0;i<newYears.length;i++){
                            
                            sum=0;
                            count=0;
                            
                            for(var y=0;y<container2.length;y++){
                                    
                                if( container2[y].years[i].cindex > 0 )
                                     count++;
                                
                                 sum += container2[y].years[i].cindex;

                            }
                            
                            if(sum!=0){
                                var only1 =  roundTo(sum/count, 2);
                            }else{
                                var only1= 0;
                            }
                            
                            country2stack.push({
                                year : newYears[i],
                                cindex : only1
                            });
                            
                            
                            
                        }
                        
                        container2 = country2stack;
                        
                     
                    }
                        
//                        console.log(country1stack)
//                        console.log(country2stack)
                  var x1=0;
                  var x2=0;
                         
                    if( container1 != undefined ){
                           
                           for(var i=0;i < container1.length;i++){
                               
                                if(x1 < container1[i].cindex){
                                    x1 = container1[i].cindex;
                                }
                               
                            }
                           	 
                           
                           
                       }
                    if( container2 != undefined ){
                           
                           for(var i=0;i < container2.length;i++){
                               
                                if(x2 < (container2[i].cindex )){
                                    x2 = (container2[i].cindex ) ;
                                }
                            }
                           
                       }
                    
                           
                           
                       }
                        

                        
                    if(x1>x2){
                        var maxy = x1 + (x1/2);
                    }else{
                        var maxy = x2 + (x2/2);
                    }
                   
                    
                    xScale = d3.scaleBand()
							   .domain(d3.range(newYears.length))
                               
							   .rangeRound([padding, w - padding * 2]);
				
					yScale = d3.scaleLinear()
								.domain([
									0,
									maxy
								])
								.range([h - padding, padding / 2])
								.nice();
				
					//Define axes
                    var y;
					xAxis = d3.axisBottom()
							   .scale(xScale)
							   .ticks(15)
//							   .tickFormat(formatTime);
                               .tickFormat(function(d,i){ 
                                    y =newYears[i];
                                    y= y.split("05");
                                    y=y[0];
                       
                                    return y; 
                                })
                    ;
				
					//Define Y axis
					yAxis = d3.axisRight()
							   .scale(yScale)
							   .ticks(5);
                        
                        
//                    console.log(w)
                    if(newYears.length == 1){
                          var xsc = (w-2*padding)/(2*newYears.length)-(0.009398977*w);
                    }else{
                          var xsc = (w-2*padding)/(2*newYears.length);
                    }
                        
                          //Define line generator
				    var line = d3.line()
						    .defined(function(d, i) { 
                               
                                 
                                return d.cindex > 0; 
                                
                                })
							.x(function(d, i) { 
                               
                                return xScale(i)+xsc;
                                
                            })
							.y(function(d) { 
                               
                                return yScale(d.cindex); });
                    
                    
//           console.log(h)
                        
					var stackarea = d3.select("#stackarea")
								.append("svg")
                                .attr("viewBox","0 0 "+w+" " +(h+(h*0.104433078)));

                        
                    stackarea.append("g")
						.attr("id", "cities");
                    
                    
                     d3.select("#label")
                             .style("font-size", "1.1vw")
                                ;

                    document.getElementById("titlestack").innerHTML="";
                    
                        
                        
                   stackarea.append("g")
                              .attr("class", "grid").style("fill", "azure")
                              .call(d3.axisTop().scale(xScale)
                                      .tickSize(-(h-padding))
                                      .tickFormat("")
                              );
                        
                   stackarea.append("g")
                              .attr("class", "grid")
                              .call(d3.axisLeft().scale(yScale)
                                      .tickSize(-(w - padding * 2))
                                      .tickFormat("")
                              );
                        
//                       if(cc.includes(", ") || ccc.includes(", ")) {
//                           
//                            if( container1.length == 1 ){
//
//
//
//                         
//
//                                var path1 = stackarea.append("path")
//                                    .datum(container1[0].years)
//                                    .attr("class", "line")
//
//                                    .attr("d", line)
//                                    .style("stroke", "blue");
//
//
//
//                                var totalLength = path1.node().getTotalLength();
//
//                                path1.attr("stroke-dasharray", totalLength + " " + totalLength)
//                                  .attr("stroke-dashoffset", totalLength)
//                                  .transition()
//                                  .duration(2000)
//                                  .attr("stroke-dashoffset", 0);
//
//
//                                var c1 = stackarea.selectAll("circle1")
//                                     .data(container1[0].years)
//                                     .attr("class", "circle1")
//                                     .enter()
//
//                                     .append("circle")
//                                        .attr("cx", function(d, i) { 
//
//                                            return xScale(i)+xsc; 
//
//                                        })
//                                        .attr("cy",function(d, i) { 
//
//                                            return yScale(d.cindex);
//
//                                           })
//                                        .attr("fill", "blue");
//
//
//
//                                    c1.transition()
//                                     .delay(function(d, i){
//                                        return i*100;
//                                    }).duration(1000)
//                                    .on("start", function(){
//                                        d3.select(this)
//
//                                            .attr("r", 0);
//                                    })
//                                    .on("end", function(){
//                                        d3.select(this)
//
//                                            .attr("r", function(d, i){
//
//                                                if(d.cindex > 0){
//                                                    return 10;
//                                                }else{
//                                                    return 0;
//                                                }
//                                            });
//                                    })
//
//                                    ;
//
//                                    c1.on("mouseover", function(d, i) {
//                                        
//                                        var ttype = realYear(newYears[i]);
//                                        var fval = d.cindex;
//                                    //Get this bar's x/y values, then augment for the tooltip
//                                    d3.select(this)
//                                            .attr("fill", "orange")
//                                            .attr("r", 16)
//                                            .transition("coloron")
//                                            .duration(1000)
//                                            ;
//
//                                    var vrz = 130.13;
//
//                                    var xPosition = parseFloat(d3.select(this).attr("cx")) + vrz;
//                                    var yPosition = parseFloat(d3.select(this).attr("cy")) / 2 +yLC +50;
//                                        
//                                    path1.style("stroke-width", 17.5).transition("xw");
//    
//                                        
//                                    d3.select("#tooltip")
//                                        .style("left", xPosition + "px")
//                                        .style("top", yPosition + "px")	
//                                        .select("#label")
//                                        .text(ttype +" : "+fval+"%");
//
//
//
//                                    //Show the tooltip
//                                    d3.select("#tooltip").classed("hidden", false);
//
//                               })
//                                      .on("mouseout", function() {
//                                         d3.select(this)
//                                                .attr("fill", "blue").attr("r", 10)
//                                                .transition("coloroff")
//                                                .duration(1000);
//                                        //Hide the tooltip
//                                            path1.style("stroke-width", 7.5).transition("xw");
//                                        d3.select("#tooltip").classed("hidden", true);
//
//                                   })
//                                    ;
//
//                        }
//
//                            if( container2.length == 1 ){
//
//
//
//
//                                var path2 = stackarea.append("path")
//                                    .datum(container2[0].years)
//                                    .attr("class", "line")
//
//                                    .attr("d", line)
//                                    .style("stroke", "red");
//
//
//
//                                var totalLength2 = path2.node().getTotalLength();
//
//                                path2.attr("stroke-dasharray", totalLength2 + " " + totalLength2)
//                                  .attr("stroke-dashoffset", totalLength2)
//                                  .transition()
//                                  .duration(2000)
//                                  .attr("stroke-dashoffset", 0);
//
//
//                                var c2 = stackarea.selectAll("circle2")
//                                     .data(container2[0].years)
//                                     .attr("class", "circle2")
//                                     .enter()
//
//                                     .append("circle")
//                                        .attr("cx", function(d, i) { 
//
//                                            return xScale(i)+xsc; 
//
//                                        })
//                                        .attr("cy",function(d, i) { 
//
//                                            return yScale(d.cindex);
//
//                                           })
//                                        .attr("fill", "red");
//
//
//
//                                    c2.transition()
//                                     .delay(function(d, i){
//                                        return i*100;
//                                    }).duration(1000)
//                                    .on("start", function(){
//                                        d3.select(this)
//
//                                            .attr("r", 0);
//                                    })
//                                    .on("end", function(){
//                                        d3.select(this)
//
//                                            .attr("r", function(d, i){
//
//                                                if(d.cindex > 0){
//                                                    return 10;
//                                                }else{
//                                                    return 0;
//                                                }
//                                            });
//                                    })
//
//                                    ;
//
//                                    c2.on("mouseover", function(d, i) {
//                                        var ttype = realYear(newYears[i]);
//                                        var fval = d.cindex;
//                                    //Get this bar's x/y values, then augment for the tooltip
//                                    d3.select(this)
//                                            .attr("fill", "orange")
//                                            .attr("r", 16)
//                                            .transition("coloron")
//                                            .duration(1000)
//                                            ;
//
//                                    var vrz = 130.13;
//
//                                    var xPosition = parseFloat(d3.select(this).attr("cx")) + vrz;
//                                    var yPosition = parseFloat(d3.select(this).attr("cy")) / 2 +yLC +50;
//        //                                
//                                    path2.style("stroke-width", 17.5).transition("xw");
//        //                                
//        //                            
//        //                            
//                                    d3.select("#tooltip")
//                                        .style("left", xPosition + "px")
//                                        .style("top", yPosition + "px")	
//                                        .select("#label")
//                                        .text(ttype +" : "+fval+"%");
//
//
//
//                                    //Show the tooltip
//                                    d3.select("#tooltip").classed("hidden", false);
//
//                               })
//                                      .on("mouseout", function() {
//                                         d3.select(this)
//                                                .attr("fill", "red").attr("r", 10)
//                                                .transition("coloroff")
//                                                .duration(1000);
//                                        //Hide the tooltip
//                                            path2.style("stroke-width", 7.5).transition("xw");
//                                        d3.select("#tooltip").classed("hidden", true);
//
//                                   })
//                                    ;
//
//                        }
//                           
//                       }
//                        else{
                           
                            if( container1.length >= 1 ){



                         

                                var path1 = stackarea.append("path")
                                    .datum(container1)
                                    .attr("class", "line")

                                    .attr("d", line)
                                    .style("stroke", "blue");



                                var totalLength = path1.node().getTotalLength();

                                path1.attr("stroke-dasharray", totalLength + " " + totalLength)
                                  .attr("stroke-dashoffset", totalLength)
                                  .transition()
                                  .duration(2000)
                                  .attr("stroke-dashoffset", 0);


                                var c1 = stackarea.selectAll("circle1")
                                     .data(container1)
                                     .attr("class", "circle1")
                                     .enter()

                                     .append("circle")
                                        .attr("cx", function(d, i) { 

                                            return xScale(i)+xsc; 

                                        })
                                        .attr("cy",function(d, i) { 

                                            return yScale(d.cindex);

                                           })
                                        .attr("fill", "blue");



                                    c1.transition()
                                     .delay(function(d, i){
                                        return i*100;
                                    }).duration(1000)
                                    .on("start", function(){
                                        d3.select(this)

                                            .attr("r", 0);
                                    })
                                    .on("end", function(){
                                        d3.select(this)

                                            .attr("r", function(d, i){

                                                if(d.cindex > 0){
                                                    //10
                                                    return (0.020886616*h);
                                                }else{
                                                    return 0;
                                                }
                                            });
                                    })

                                    ;

                                    c1.on("mouseover", function(d, i) {
                                        var ttype = realYear(newYears[i]);
                                        var fval = d.cindex;
                                    //Get this bar's x/y values, then augment for the tooltip
                                    d3.select(this)
                                            .attr("fill", "orange")
                                            .attr("r", 0.033418585*h)//16
                                            .transition("coloron")
                                            .duration(1000)
                                            ;

                                    var vrz = 130.13;
                                        
                                    
                                    var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

//                            console.log(offset);
                            var yPosition = parseFloat(offset-maplegendaheight);
                                

                                    var xPosition = parseFloat(d3.select(this).attr("cx")) + vrz;
//                                    var yPosition = parseFloat(d3.select(this).attr("cy")) / 2 +yLC +50;
                                      
                                        
                                        //17.5
                                    path1.style("stroke-width", 0.036551577*h).transition("xw");
                                 
                                    d3.select("#tooltip")
                                        .style("left", xPosition + "px")
                                        .style("top", yPosition + "px")	
                                        .select("#label")
                                        .text(ttype +" : "+fval+"%");



                                    //Show the tooltip
                                    d3.select("#tooltip").classed("hidden", false);

                               })
                                      .on("mouseout", function() {
                                         d3.select(this)
                                                .attr("fill", "blue").attr("r", (0.020886616*h))
                                                .transition("coloroff")
                                                .duration(1000);
                                        //Hide the tooltip                  7.5
                                            path1.style("stroke-width", 0.015664962*h).transition("xw");
                                        d3.select("#tooltip").classed("hidden", true);

                                   })
                                    ;

                        }

                            if( container2.length >= 1 ){




                                var path2 = stackarea.append("path")
                                    .datum(container2)
                                    .attr("class", "line")

                                    .attr("d", line)
                                    .style("stroke", "red");



                                var totalLength2 = path2.node().getTotalLength();

                                path2.attr("stroke-dasharray", totalLength2 + " " + totalLength2)
                                  .attr("stroke-dashoffset", totalLength2)
                                  .transition()
                                  .duration(2000)
                                  .attr("stroke-dashoffset", 0);


                                var c2 = stackarea.selectAll("circle2")
                                     .data(container2)
                                     .attr("class", "circle2")
                                     .enter()

                                     .append("circle")
                                        .attr("cx", function(d, i) { 

                                            return xScale(i)+xsc; 

                                        })
                                        .attr("cy",function(d, i) { 

                                            return yScale(d.cindex);

                                           })
                                        .attr("fill", "red");



                                    c2.transition()
                                     .delay(function(d, i){
                                        return i*100;
                                    }).duration(1000)
                                    .on("start", function(){
                                        d3.select(this)

                                            .attr("r", 0);
                                    })
                                    .on("end", function(){
                                        d3.select(this)

                                            .attr("r", function(d, i){

                                                if(d.cindex > 0){
                                                   //10
                                                    return (0.020886616*h);
                                                }else{
                                                    return 0;
                                                }
                                            });
                                    })

                                    ;

                                    c2.on("mouseover", function(d, i) {
                                        var ttype = realYear(newYears[i]);
                                        var fval = d.cindex;
                                    //Get this bar's x/y values, then augment for the tooltip
                                    d3.select(this)
                                            .attr("fill", "orange")
                                            .attr("r", 0.033418585*h)//16
                                            .transition("coloron")
                                            .duration(1000)
                                            ;

                                    var vrz = 130.13;

                                        
                                    var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

//                            console.log(offset);
                            var yPosition = parseFloat(offset-maplegendaheight);
                                        
                                        
                                
                                    var xPosition = parseFloat(d3.select(this).attr("cx")) + vrz;
//                                    var yPosition = parseFloat(d3.select(this).attr("cy")) / 2 +yLC +100;
        //                                17.5
                                        
                                        
                                    path2.style("stroke-width", 0.036551577*h).transition("xw");
        //                                
        //                            
        //                            
                                    d3.select("#tooltip")
                                        .style("left", xPosition + "px")
                                        .style("top", yPosition + "px")	
                                        .select("#label")
                                        .text(ttype +" : "+fval+"%");



                                    //Show the tooltip
                                    d3.select("#tooltip").classed("hidden", false);

                               })
                                      .on("mouseout", function() {
                                         d3.select(this)
                                                .attr("fill", "red").attr("r", (0.020886616*h))
                                                .transition("coloroff")
                                                .duration(1000);
                                        //Hide the tooltip                  7.5
                                            path2.style("stroke-width", 0.015664962*h).transition("xw");
                                        d3.select("#tooltip").classed("hidden", true);

                                   })
                                    ;

                        }
                           
                           
//                       }
       
                        
                    
                    //Create axes
					stackarea.append("g")
						.attr("class", "axis x")
						.attr("transform", "translate(0," + (h - padding) + ")")
						.call(xAxis);
				
					stackarea.append("g")
						.attr("class", "axis y")
						.attr("transform", "translate(" + (w - padding * 2) + ",0)")
						.call(yAxis);

                
                        
                        
                        
                d3.select("#timeline").selectAll("svg").remove();
                        
                        
            if( (cc!=undefined&&cc!="") && (ccc!=undefined&&ccc!="") ){
                
                
                
                
                
                
                d3.select("#timeline").classed("hidden", false);
                     
                
                var hTL=(0.208866155*h);
//                console.log(hTL)
                  var xScaleTL = d3.scaleBand()
							   .domain(d3.range(years.length))
                               
							   .rangeRound([padding, w - padding * 2]);
				
				  var yScaleTL = d3.scaleLinear()
								.domain([
									0,
									100
								])
								.range([hTL - padding, padding / 2])
								.nice();    
                        
                
                
                
                
                        
                    var lineTL = d3.line()
						   
							.x(function(d, i) { 
                               
                                return xScaleTL(i)+xsc;
                                
                            })
							.y(function(d) { 
                               
                                return yScaleTL(0); });
                        
                        

                var newYearsCompared=[];//what is really "comparable"
                 newYearsCompared.splice(0,newYearsCompared.length);
                
                for(var s=0;s<years.length;s++){
                    
                    if( container1[s].cindex!=0 && container2[s].cindex!=0 ){
                        newYearsCompared.push(container1[s].year);
                    }
                    
                }
//                console.log(newYearsCompared)
                    
                      
//                console.log(w)
//                console.log(w)
                     var tline = d3.select("#tline")
								.append("svg")
                                .attr("viewBox","0 0 "+w+" " +(hTL+(0.3*(hTL))) );
//								.attr("width", w)
//								.attr("height", 100+30);
                    
                     var pathTL = tline.append("path")
                                    .datum(years)
                                    .attr("class", "line")

                                    .attr("d", lineTL)
                                    .style("stroke", "black");
    
                        
                     var tmpselected=0;
                     var tmpselectedyear = newYearsCompared[0];    
                        
                        
                    var cTL = tline.selectAll("circleTL")
                                     .data(years)
                                     .attr("class", "circleTL")
                                     .enter()

                                    .append("circle")
                                        .attr("cx", function(d, i) { 

                                            return xScaleTL(i)+xsc; 

                                        })
                                    .attr("cy",function(d, i) { 

                                            return yScaleTL(0);

                                           })
                                    .attr("r", function(d, i){
                                        
                                            return 0.14*hTL;
                                        
                                    })
                    
                                     .attr("fill", function(d, i){
                                        
                                         
                                            return "white";
                                             
                                        
                                    })
                                    .attr("stroke", function(d, i){
                                         if(!newYearsCompared.includes(d)){
                                            return "gray";
                                         }else{
                                             return "green";
                                         }
                                        
                                    })
                                    .attr("stroke-opacity", function(d, i){
                                        if(!newYearsCompared.includes(d)){
                                            return 0.6;
                                        }else
                                            return 1;
                                    })
                                    .style("fill", function(d, i){
                                        if(d==newYearsCompared[0]){
                                            return "orange";
                                        }
                                    })
                                    .style("stroke", function(d, i){
                                        if(d==newYearsCompared[0]){
                                            return "green";
                                        }
                                    })
                                    .style("r", function(d, i){
                                        
                                        if(d==newYearsCompared[0]){
                                            return 0.22*hTL;
                                        }
                                        
                                    })
                    
                                       
                                    .attr("stroke-width", function(d, i){
                                     
                                            return 0.1*hTL;
                                        
                                    })
                                    ;
                        
                       
                        
                        
                         var yearsTL = tline.selectAll("text")
                                     .data(years)
                                    
                                     .enter()
                                     .append("text")
                                     .text(function(d, i){
                                         if(years[i].includes("05")){
                                             var xtmp = years[i].split("05");
//                                             console.log("middle \n of \n"+ xtmp[0] )
                                             return xtmp[0] ;
                                         }else
                                         return years[i];
                                     })
                                 
                                    .attr("x", function(d, i)
                                          //12
                                          {return xScaleTL(i)+(xsc-(0.012531969*w) );}
                                         )
                                     .attr("y",  yScaleTL(0.7*hTL))
                                    .attr("font-family", "sans-serif")
                                    .attr("font-size", "0.8vw");
                        
                        
                        
                        
                        
                 
                        
                
                    piebarCompare(tmpselectedyear);
                
                        
                function piebarCompare(tmpselectedyear){ 
                         
                        if(CrimeOrSafety){
                            document.getElementById("titleyear").innerHTML = "Crime in : "+realYear(tmpselectedyear);
                        }else{
                             document.getElementById("titleyear").innerHTML = "Safety in : "+realYear(tmpselectedyear);
                        }
                        d3.select("#bars").selectAll("svg").remove();
                        
                    
                    
                        // set the dimensions and margins of the graph
//                    console.log(h)
                    var widthBP=$("#timeline").width();
                    var heightBP=widthBP*0.28846154;
//                    console.log(0.085714286*350)
                    
                var margin = {top: 0.066666667*heightBP, right: 0.019230769*widthBP, bottom: 0.1*heightBP, left: 0.038461538*widthBP},
                    widthBar = 960 - margin.left - margin.right,
                    heightBar = 500 - margin.top - margin.bottom;
                            // set the ranges
                    
                    
                    
                            var ybar = d3.scaleBand()
                                      .range([heightBP, 0])
                                      .padding(0.3);

                          
                    
                            var xbar = d3.scaleLinear()
                                      .range([0, widthBP/2]);

                            // append the svg object to the body of the page
                            // append a 'group' element to 'svg'
                            // moves the 'group' element to the top left margin
                    
                    
//                    console.log(heightBP)
                            var barsvg = d3.select("#bars").append("svg")
                                .attr("viewBox","0 0 "+(widthBP/2 + margin.left + margin.right)+" " +(heightBP + margin.top + margin.bottom) )
//                                .attr("width", function(){
//                                    
//                                  return widthBP/2 + margin.left + margin.right;
////                                       return widthBP/2 + margin.left + margin.right +60+80;
//                                 
//                                })
//                                .attr("height", heightBP + margin.top + margin.bottom)
                              .append("g")
                                .attr("transform", 
                                      "translate(" + margin.left + "," + margin.top + ")");

                                
                              
                              var valuesContainer = [];
                              valuesContainer.splice(0,valuesContainer.length);
                        var checkend=false;
                     
                        if(container1.length!=0){
                            
                            
//                           console.log(container1)
//                            console.log(newYears)
                              for(var i=0;i<newYears.length && !checkend;i++){
                                  
                                  if( tmpselectedyear == container1[i].year ){
                                      
                                      checkend=true;
                                      
                                      valuesContainer.push({
                                          location : cc,
                                          val : container1[i].cindex
                                      });
                                      
                                  }
                                  
                              }
                              checkend=false;
                        }
                        
                        if(container2.length!=0){
                            
                           
                          
                                
                              for(var i=0;i<newYears.length && !checkend;i++){
                                  
                                  if( tmpselectedyear == container2[i].year ){
                                      
                                      checkend=true;
                                      
                                      valuesContainer.push({
                                          location : ccc,
                                          val : container2[i].cindex
                                      });
                                      
                                  }
                                  
                              }
                            
                              checkend=false;
                        }
                        
//                        console.log(valuesContainer)
                              // Scale the range of the data in the domains
                              xbar.domain([0, d3.max(valuesContainer, function(d){ return d.val; })])
                              ybar.domain(d3.range(valuesContainer.length));
                            
                                
                            
                                // append the rectangles for the bar chart
                        
                
                        
                        
                            
                    
                      barsvg.selectAll("rect")
                          .data(valuesContainer)
                        .enter().append("rect") .transition("moverect")
//                           .on("start", function() {
//                                             d3.select("#tline").classed("unclickable", true);
//                                       
//
//
//                            })
//                            .on("end", function() {
//                                        d3.select("#tline").classed("unclickable", false);
//                                        
//                        
//
//                            })	
                          .delay(function(d, i){
                                   return i*250;
                         })
                          .ease(d3.easeCircle)
                          .duration(500)

                         
                          .attr("class", "bar")
                         

                          //.attr("x", function(d) { return x(d.sales); })
                          .attr("width", function(d) {return xbar(d.val); } )
                          .attr("y", function(d, i) { return ybar(i); })
                          .attr("height", ybar.bandwidth())
                          
                            .attr("fill", function(d, i){
                                if(i==0) {
                                    return "blue";
                                }else{
                                    return "red";
                                }
                                
                            })
                            ;
                        
                        
                              var txt = barsvg.selectAll("text")
                                
                                .data(valuesContainer).enter()
                                .append("text");
                        
                                txt.transition("moverect")

                                  .delay(function(d, i){
                                           return 250;
                                 })
                                  .ease(d3.easeCircle)
                                  .duration(500)
                                 .on("start", function(d ,i){
                                    txt.attr("font-size", "0px")
                                    ;
//                                    d3.select("#tline").classed("unclickable", true);
                                })
    
                                 .on("end", function(d ,i){
//                                    d3.select("#tline").classed("unclickable", false);
                                    txt.text(function(d, i){
                                        
                                        if(d.val!=0)
                                        return d.val+" %";
                                    }
                                    
                                    ).attr("font-size", "1.5vw")
                                .attr("font-weight", "bold");
                                })
                               
                                .attr("x",function(d, i) { 
                                        //8
                                    return xbar(d.val)/2-xbar(d.val)/(0.015384615*(widthBP/2));
                                })
                                .attr("y",function(d, i) { 
                                                    //55
                                    return ybar(i)+(0.183333333*heightBP); 
                                })
                                .attr("fill", "white")
                                ;
        
                        
                        
                            var pie = d3.pie()
                                    .value(function(d) {

                                        return d.val; });
                        
                    
                                //240
//                    console.log(heightBP)
                        var r =0.766666667*heightBP;
                      


                        var outerRadius = r / 2;

                        var innerRadius = r/3.2;//change to make a doughnut

                        var arc = d3.arc()
                                    .innerRadius(innerRadius )
                                    .outerRadius(outerRadius );

                        var pie = d3.pie()
                                    .value(function(d) {

                                        return d.val; });
                        
                        
                        
                            d3.select("#pieTL").selectAll("svg").remove();
                    
                    if( (cc!=undefined && cc!="") && (ccc!=undefined && ccc!="") ){
                       
                        var arcs =   d3.select("#pieTL")
                                  .append("svg")
//                                   .attr("viewBox","0 0 "+r+" " +r )
                                  .attr("width", r)
                                  .attr("height", r)
                                  .selectAll("g.arc")
                                  .data(pie(valuesContainer))
                                  .enter()
                                  .append("g")
                                  .attr("class", "arc") 
                                  .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");
                
                
                         var firsttxt, secondtxt, txt1, txt2;
                         
                
                         if(cc!=undefined && cc!=""){
                             if(cc.includes(",")){
                                 txt1 =  cc.split(",");
                                 firsttxt = txt1[0];
                             }else{
                                 firsttxt = cc;
                             }
                         }
                         if(ccc!=undefined && ccc!=""){
                              if(ccc.includes(",")){
                                 txt2 =  ccc.split(",");
                                 secondtxt = txt2[0];
                             }else{
                                secondtxt = ccc;
                             }
                         }
                                
                
                
                
                
                       arcs.append("path")
                             .attr("fill", function(d, i) {

                                    if(i==0){
                                        return "blue";
                                    }else{
                                        return "red";
                                    }
                            })
                            .transition().delay(function(d,i) {
                            return i * 700; }).duration(500)
                            .attrTween('d', function(d) {
                                var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
                                return function(t) {
                                    d.endAngle = i(t); 
                                    return arc(d);
                                    }
                            })
                            .on("start", function() {
                                             d3.select("#tline").classed("unclickable", true);
                                       


                            })
                            .on("end", function() {
                                        d3.select("#tline").classed("unclickable", false);
                                        
                        

                            })	
                            ; 



                
                            arcs.on("mouseover", function(d) {
                                
                               var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

//                            console.log(offset);
                            var yPosition = parseFloat(offset);
                                

                                        //Get this bar's x/y values, then augment for the tooltip
                                    d3.select(this)
                                        
            //                           .attr("fill", "white")
                                       .attr("opacity", 0.5)
                                       .attr("stroke","black")
                                       .transition()
                                       .duration(1000)
                                                                //5
                                       .attr("stroke-width",(0.016666667*heightBP));

                                var marginlTL = $("#timeline").css("margin-left");
                                    marginlTL = marginlTL.split("px");
                                var marginlPie = $("#pieTL").css("margin-left");
                                    marginlPie = marginlPie.split("px");
                                
                                
                                var leftLength = 1*(marginlTL[0])+1*(marginlPie[0])+(widthBP/2)+(r/2);
                               
                                
                                d3.select("#tooltip").select("#value").remove();

                                    d3.select("#tooltip")
                                        .style("left", leftLength + "px")
                                        .style("top", yPosition + "px")	
                                        .select("#label")
                                        .text(d.data.location +" : "+d.data.val+"%");



                                    //Show the tooltip
                                    d3.select("#tooltip").classed("hidden", false);


                                   })
                                .on("mouseout", function() {
                                
                                    
                                
                                            d3.select(this).transition()    
      
                                            .attr("opacity", 1)
                                            .attr("d", function(d, i){
                                                   return arc(d, i);
                                            })
                                            .attr("stroke","none");

//                                        Hide the tooltip
                                        d3.select("#tooltip").classed("hidden", true);

                                   }) 
                                
                                ;
                    }
                        
                    }
                        
                       

                                    cTL.on("mouseover", function(d, i) {
                                        
                                        var ttype = realYear(newYears[i]);

                                        if( d3.select(this) != tmpselected ){
                                        
                                        
                                        d3.select(this)
                                                .attr("fill", function(d, i){
                                                 if(!newYearsCompared.includes(d)){
                                                        return "#EE5E4F";
                                                     }else{
                                                         return "lightgreen";
                                                     }
                                                })
                                                .attr("r", 0.22*hTL)
                                                .transition("coloron")
                                                .duration(1000)
                                                ;

                                    var vrz = 130.13;
                                        
                                     
                                    var xPosition = parseFloat(d3.select(this).attr("cx")) + vrz;
//                                    var yPosition = yTL-50;
                                       var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

//                            console.log(offset);
                            var yPosition = parseFloat(offset-maplegendaheight);
                                  
                                   
    
                                        
                                    d3.select("#tooltip")
                                        .style("left", xPosition + "px")
                                        .style("top", yPosition + "px")	
                                        .select("#label")
                                        .text(function(){
//                                        console.log(d)
                                              if(!newYearsCompared.includes(d)){
                                                        return "there is not enough data in " +ttype;
                                              }else{
                                                         return "click to analize data of : " +ttype;
                                               }
                                    });



                                    //Show the tooltip
                                    d3.select("#tooltip").classed("hidden", false);
                                    }

                                        })
                                       .on("mouseout", function(d, i) {
                                        
                                        
                                         if( d3.select(this) != tmpselected ){
                                             
                                             
                                             d3.select(this)
                                                    .attr("fill", "white").attr("r", 0.14*hTL)
                                                        .attr("stroke", function(d, i){
                                                 if(!newYearsCompared.includes(d)){
                                                        return "gray";
                                                     }else{
                                                         return "green";
                                                     }
                                                })
                                                    .transition("coloroff")
                                                    .duration(1000);
                                            //Hide the tooltip
                                         }
                                        d3.select("#tooltip").classed("hidden", true);
                                             
                                         

                                   })
                                       .on("click", function(d, i){
                                        
                                                                                
                                    if(newYearsCompared.includes(d)){
                                            
                                        
                                         cTL.style("fill", function(d, i){
                                             if( newYears[i] == tmpselectedyear){
                                                return "white";
                                             }
                                         })
                                                .style("r", function(d, i){
                                             if( newYears[i] == tmpselectedyear){
                                                return 0.14*hTL;
                                             }
                                         })
                                                .style("stroke", function(d, i){
                                             if( newYears[i] == tmpselectedyear){
                                                 
                                                if(!newYearsCompared.includes(d)){
                                                    return "gray";
                                                 }else{
                                                     return "green";
                                                 }
                                             }
                                         })
                                                .transition("coloroff")
                                                .duration(1000);
                                        
                                        tmpselectedyear = newYears[i];
                                        tmpselected = d3.select(this);
                                        
                                         d3.select(this)
                                            .style("fill", "orange")
                                            .style("stroke", "green")
                                            .style("r", 0.22*hTL)
                                            .transition("coloron")
                                            .duration(1000)
                                            ;
                                        
                                        
                                        
                                         cTL.style("fill", function(d, i){
                                             if( newYears[i] == tmpselectedyear){
                                                return "white";
                                             }
                                         })
                                                .style("r", function(d, i){
                                             if( newYears[i] == tmpselectedyear){
                                                return 0.14*hTL;
                                             }
                                         })
                                                .style("stroke", function(d, i){
                                             if( newYears[i] == tmpselectedyear){
                                                 
                                                if(!newYearsCompared.includes(d)){
                                                    return "gray";
                                                 }else{
                                                     return "green";
                                                 }
                                             }
                                         })
                                                .transition("coloroff")
                                                .duration(1000);
                                        
                                        tmpselectedyear = newYears[i];
                                        tmpselected = d3.select(this);
                                        
                                         d3.select(this)
                                            .style("fill", "orange")
                                            .style("stroke", "green")
                                            .style("r", 0.22*hTL)
                                            .transition("coloron")
                                            .duration(1000)
                                            ;
                                        
                                        
                                        piebarCompare(tmpselectedyear);
                                    }
                                        }) 
                                    ;
                }
             else{
                d3.select("#timeline").classed("hidden", true);

             }       
                        
                                    
                        
                    }
                    
                   
                }
            
            return resultData;
        }
			
    
 
});
     
 }
