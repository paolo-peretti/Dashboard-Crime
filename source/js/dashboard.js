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


function CrimeWorldCC(){
      

//     if(primaryBool){
////          d3.select("#errorSelCC").classed("hidden", true);
//         document.getElementById("checkbox").checked = false;
//         $('input[type="checkbox"]').click();
//         
//         
//          document.getElementById("cc").value = "";
//          document.querySelector('#btn-cc').click();
//         
//     }
       
    

     
     

      d3.select("#tips").selectAll("li").remove();
      d3.select("#map").selectAll("svg").remove();
      d3.select("#swipeup").selectAll("svg").remove();
     
     
     
     
       d3.select("#map").classed("hidden", false);
       d3.select("#mapLegenda").classed("hidden", false);
       d3.select("#swipeup").classed("hidden", false);
       d3.select("#dbpn").classed("hidden", false);
       d3.select("#legenda").classed("hidden", false);
       d3.select("#legendabar").classed("hidden", false);
       
     
        
            // Your beautiful D3 code will go here

         
         
            var w = 600;
			var h = 350;
			var padding = 20;
         
            
            
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
        
            function hiddenElem(bool){
                
                 d3.select("#info").classed("hidden", bool);
                  d3.select("#doublebar").classed("hidden", bool);
                  d3.select("#posneg").classed("hidden", bool);
                 d3.select("#barchart").classed("hidden", bool);
                 d3.select("#containerPie").classed("hidden", true);
                 d3.select("#titlepodium").classed("hidden", bool);
                d3.select("#changeorder").classed("hidden", bool);
                d3.select("#resetbars").classed("hidden", bool);
                document.getElementById("legenda").style.border = "0px solid #4CAF50";
                d3.select("#legenda").style("margin-top", "0px");
                d3.select("#legendabar").classed("hidden", bool);
                 d3.select("#legendabar").style("float", "left");
                 d3.select("#dbpn").classed("hidden", bool);
                d3.select("#iperformance").classed("hidden", bool);
                
                 if(bool == false){
                     
                     d3.select("#info").style("display", "flow-root");
//                     document.getElementById("titledb").innerHTML="Positive Negative Barchart"; 
                      d3.select("#resetbars").classed("btn btn-warning", true);
                     d3.select("#changeorder").classed("btn btn-warning", true);
                     document.getElementById("dbpn").style.border = "10px solid #898989";
//                     document.getElementById("legenda").style.border = "10px solid #4CAF50";
                     document.getElementById("legendabar").style.border = "10px solid #4CAF50";
                 }else{
                     d3.select("#info").style("display", "none");
//                     document.getElementById("titledb").innerHTML="";
                      d3.select("#resetbars").classed("btn btn-warning", false);
                      d3.select("#changeorder").classed("btn btn-warning", false);
                     document.getElementById("dbpn").style.border = "0px solid #898989";
//                     document.getElementById("legenda").style.border = "0px solid #4CAF50";
                     document.getElementById("legendabar").style.border = "0px solid #4CAF50";
                 }
            }
         
            function hiddenElemCompare1(bool){
              
                d3.select("#legendabar").style("float", "none");
                 d3.select("#legenda").style("margin-top", "3%");
//                d3.select("#legenda").classed("hidden", false);
                 d3.select("#info1").classed("hidden", bool);
                 d3.select("#podiumContainer").classed("hidden", true);
                d3.select("#titlepodium").classed("hidden", true);
   
            }
            function hiddenElemCompare2(bool){
                
                 d3.select("#legendabar").style("float", "none");
              d3.select("#legenda").style("margin-top", "3%");
//                d3.select("#legenda").classed("hidden", false);
                 d3.select("#info2").classed("hidden", bool);
                 d3.select("#podiumContainer").classed("hidden", true);
                d3.select("#titlepodium").classed("hidden", true);
                  
            }
            
			var xScale, yScale, xAxis, yAxis;  //Empty, for now

			
            function correct(type){
                if(type=="cindex"){
                    return "Crime Index";
                }else
                if(type=="LevelOfCrime"){
                    return "Level of Crime";
                }else if(type=="CrimeIncrIn3years"){
                    return "Crime increasing in the past 3 years";
                }else if(type=="HomeBroken"){
                    return "Worries home broken and things stolen";
                }else if(type=="MuggedOrRobbed"){
                    return "Worries being mugged or robbed";
                }else if(type=="CarStolen"){
                    return "Worries car stolen";
                    
                }else if(type=="ThingsFromCarStolen"){
                    return "Worries things from car stolen";
                }else if(type=="Attacked"){
                    return "Worries attacked";
                }else if(type=="Insulted"){
                    return "Worries being insulted";
                }else if(type=="AttackCauseEGR"){
                    return "Worries attacked cause of your skin color, ethnic origin, gender or religion";
                }else if(type=="Drugs"){
                    return "Problem people using or dealing drugs";
                }else if(type=="VandalismAndTheft"){
                    return "Problem property crimes such as vandalism and theft";
                }else if(type=="ViolentCrimes"){
                    return "Problem violent crimes such as assault and armed robbery";
                }else if(type=="CorruptionAndBribery"){
                    
                    return "Problem corruption and bribery";
                }else if(type=="SafetyDaylight"){
                    return "Safety walking alone during daylight";
                }else if(type=="SafetyNight"){
                    return "Safety walking alone during night";
                }
            }
			//Function for converting CSV values from strings to Dates and numbers
			//We assume one column named 'Date' plus several others that will be converted to ints 
            function conversion(d) {
                  
               
                if(!d.includes(".") && d>100){
                    return d/1000;
                }else{
                    return d;
                }
            }
            
        
			var rowConverter = function(d) {
               
                return {
				            Country:d.Country,
				            City: d.City,  
                    
                            LevelOfCrime: parseFloat(d.LevelOfCrime),
                            CrimeIncrIn3years: parseFloat(d.CrimeIncrIn3years),
                            HomeBroken: parseFloat(d.HomeBroken),
                            MuggedOrRobbed: parseFloat(d.MuggedOrRobbed),
                            CarStolen: parseFloat(d.CarStolen),
                            ThingsFromCarStolen: parseFloat(d.ThingsFromCarStolen),
                            Attacked: parseFloat(d.Attacked),
                            Insulted: parseFloat(d.Insulted),
                            AttackCauseEGR: parseFloat(d.AttackCauseEGR),
                            Drugs: parseFloat(d.Drugs),
                            VandalismAndTheft: parseFloat(d.VandalismAndTheft),
                            ViolentCrimes: parseFloat(d.ViolentCrimes),
                            CorruptionAndBribery: parseFloat(d.CorruptionAndBribery),
                    
                            SafetyDaylight: parseFloat(d.SafetyDaylight),
                            SafetyNight: parseFloat(d.SafetyNight),
                    
                            Contributors: parseInt(d.Contributors),
                            Update: d.Update,
                            cindex:parseFloat(conversion(d.cindex)),
                            sindex:parseFloat(conversion(d.sindex)),
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
         
         
          var CountriesSmall=["San Marino", "Aland Islands", "Saint Lucia", "Saint Helena", "Dominica", "Martinique", "Guadeloupe", "Saint Vincent And The Grenadines", "Marshall Islands", "Guam", "Jersey","Macao", "Hong Kong", "Malta", "Maldives", "Mayotte", "Mauritius", "Montserrat", "US Virgin Islands", "Bahrain", "Curacao", "Aruba", "Bermuda", "Vatican City", "Gibraltar", "Northem Mariana Islands", "Sao Tome And Principe", "Bonaire", "British Virgin Islands", "Sint Maarten", "Antigua And Barbuda", "Saint Kitts And Nevis", "Tonga", "Monaco", "Seychelles", "Cape Verde", "Faroe Islands", "Cayman Islands", "Samoa", "Isle Of Man", "Liechtenstein", "Guernsey", "Barbados", "Palestine", "Grenada", "Andorra", "Turks And Caicos Islands", "Reunion", "Singapore"];
         // https://crossorigin.me/file:///home/padrone/Documenti/d3-book-master/project/CCrime.csv
       //  https://raw.githubusercontent.com/paolo-git/progetw/master/CCrime.csv
     
     //http://localhost:8000/Documenti/CrimeProject/data/CCcrime.csv
d3.csv("https://raw.githubusercontent.com/paolo-git/progetw/master/CCcrime.csv", rowConverter, function(data) {
                
    
    
                let dataset = data;     
                
                
                let inputGetCC = document.querySelector('#cc');
                let btnGetCC = document.querySelector('#btn-cc');
                let liFaction = document.querySelector('#first');
                let liSaction = document.querySelector('#second');
                let changeorder = document.querySelector('#changeorder');  
                let resetbars = document.querySelector('#resetbars');  
               
                let CheckTwo=true;
                
                
                   
                    $('input[type="checkbox"]').click(function(){
                        

                              CheckTwo = $('input[type="checkbox"]').prop("checked");


                                      d3.select("#errorSelCC").classed("hidden", true);
                                     var ul = document.getElementById("list_of_items");
                                     var li = ul.getElementsByTagName("li");
                                        var a1 = li[0].getElementsByTagName("a")[0];

                                        a1.innerHTML="";
                                        var a2 = li[1].getElementsByTagName("a")[0];
                                        a2.innerHTML="";
                                        li[0].style.display = "none";
                                        li[1].style.display = "none";
                                    
                                    
                                        if(inputGetCC.value!="")
                                            btnGetCC.click();
                                   
                                    
                    });
            
     
    
                function addTask(inp, count) {
                    
                         var ultmp = document.getElementById("tmpfs");
                         var litmp = ultmp.getElementsByTagName("li");
                    
                        if(count < 2){
                            
                            var input = inp;
                            
                            var ul = document.getElementById("list_of_items");
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
                            var ul = document.getElementById("list_of_items");
                            var li = ul.getElementsByTagName("li");
                            
                            
                                if( input != li[0].getElementsByTagName("a")[0].innerHTML ){
                                    
                                    var aB = li[1].getElementsByTagName("a")[0];        
    //                               console.log(count)
                                    litmp[1].getElementsByTagName("a")[0].innerHTML = input;
                                    aB.innerHTML = input;
                                    li[1].style.display = "";
                                }
                                
                                
                            
                        }
                    
                    
                     d3.select("#list_of_items").classed("hidden", false);
              }
    
                
                
                    
                 var count = 0;             
                 var verify = true;
                 var value = "";
                 var arrayFS = [];
                 var first, second;
    
                 btnGetCC.addEventListener('click', () => {
                     
//                             console.log(primaryBool)
                            value = inputGetCC.value;
                            if(CheckTwo){
                                  d3.select("#list_of_items").classed("hidden", true);  
                                
                                dataset = CC(value);
                            }else if(!CheckTwo){
                                
                                first = document.getElementById("list_of_items").getElementsByTagName('a')[0].innerHTML; 
                                second = document.getElementById("list_of_items").getElementsByTagName("a")[1].innerHTML; 
//                                 console.log(value)

                                
                                if(first==""&&second=="" ){
                             
                                    verify = true;
                                    count = 0;
                                    
                                }
                                else if (first==""&&second!="" ){
                                    
                                    count=1;
                                 
                                    verify = searchSomeCC();
                                   
                                }else if (first!="" && second=="" ){
                                    
                                    count=1;
                                    verify = searchSomeCC();
                                    
                                    
                                }else if (first!="" && second!="" ){
                                    
                                    verify = searchSomeCC();
                                     
                                }
                                
                                
                               
                                
                                if(verify){
                                     
                                    addTask(value, count++);
                                    
                                  
                                    d3.select("#errorSelCC").classed("hidden", true);
                                   
                                }else{
                                     
                                     d3.select("#errorSelCC").classed("hidden", false);
                                    
                                }
//                                console.log(count)
                                
                                first = document.getElementById("list_of_items").getElementsByTagName('a')[0].innerHTML; 
                                second = document.getElementById("list_of_items").getElementsByTagName("a")[1].innerHTML; 
                                
                                

                                     arrayFS[0]=first;
                                   

                                     arrayFS[1]=second;
                                
                                     dataset = CC(arrayFS);
                                
                               
                            }
                     
                 });
                   
    
    
    liFaction.addEventListener('click', () => {
        
                     var ul = document.getElementById("list_of_items");
                     var li = ul.getElementsByTagName("li");
                     
                      var ultmp = document.getElementById("tmpfs");
                      var litmp = ultmp.getElementsByTagName("li");
        
                        var a = li[0].getElementsByTagName("a")[0];
        
                        var tmpF = a.innerHTML;
                        litmp[0].getElementsByTagName("a")[0].innerHTML = tmpF;
        
                        a.innerHTML="";
                        
                        li[0].style.display = "none";
        
                  
                    first = document.getElementById("list_of_items").getElementsByTagName('a')[0].innerHTML; 
                    second = document.getElementById("list_of_items").getElementsByTagName("a")[1].innerHTML; 
                     
                         arrayFS[0]=first;
                                   
                    
                         arrayFS[1]=second;
                                
                                    
                      dataset = CC(arrayFS);
                                
                               
                });
    
    liSaction.addEventListener('click', () => {
        
                         var ul = document.getElementById("list_of_items");
                         var li = ul.getElementsByTagName("li");
        
                         var ultmp = document.getElementById("tmpfs");
                         var litmp = ultmp.getElementsByTagName("li"); 
                        
                         var a = li[1].getElementsByTagName("a")[0]; 
                         var tmpS = a.innerHTML;
                         litmp[1].getElementsByTagName("a")[0].innerHTML = tmpS;
        
        
                        a.innerHTML="";
                        li[1].style.display = "none";
        
                  
                    first = document.getElementById("list_of_items").getElementsByTagName('a')[0].innerHTML; 
                    second = document.getElementById("list_of_items").getElementsByTagName("a")[1].innerHTML; 
                     
                         arrayFS[0]=first;
                                   
                    
                         arrayFS[1]=second;
                                
                                    
                      dataset = CC(arrayFS);
                                
                               
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
    
       var doublebarwidth = $('#doublebar').width();
   
       var doublebarheight = doublebarwidth * 0.6009 + (3*maplegendaheight);
        
    
    d3.select("#linechart").classed("hidden", false);
    
       var wlinec = $("#linechart").innerWidth();
                    var paddingline = $('#linechart').css('padding-left');
                    paddingline = paddingline.split("px");
                    
                   
                    wlinec = wlinec-2*(paddingline[0]);
                   
       var hlinec = wlinec * 0.660640028 ;
       hlinec+=0.103326259*hlinec;
    
    d3.select("#linechart").classed("hidden", true);
    
    d3.select("#containerPie").classed("hidden", false);
    
       var wPie=$("#containerPie").innerWidth();
                    
                       var piepaddingl=$("#containerPie").css("padding-left");
                       piepaddingl=piepaddingl.split("px");
                    

                    
       var r =wPie-2*(piepaddingl[0]);
    
    d3.select("#containerPie").classed("hidden", true);
    
    
    
       var widthBar = $('#barchart').width();
       var heightBar = widthBar/2;
    
       var margintop1=$('#mapLegenda').css('margin-top');//equal to swipeup
       margintop1=margintop1.split("px");
    
       var margintop2=$('#dbpn').css('margin-top');//equal to swipeup
       margintop2=margintop2.split("px");
    
     
    
    var infoheight=3*maplegendaheight;
    
//    document.getElementById("info").style.height = infoheight+"px";
//    document.getElementById("info1").style.height = infoheight+"px";
//    document.getElementById("info2").style.height = infoheight+"px";
 
//    console.log(hmap+maplegendaheight+swipeupheight+infoheight+2*(margintop1[0])+3*(margintop2[0])+doublebarheight);

    var initX;
    var mouseClicked = false;
    var s = 1;
    var rotated = 90;

    //need to store this because on zoom end, using mousewheel, mouse position is NAN
    var mouse, centered;

    
    
         
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

	var yPosition2 = 1440+100;
    
    var ydist = hmap+maplegendaheight+swipeupheight+infoheight+2*(margintop1[0])+2*(margintop2[0]);

    var ydistBars = hmap+maplegendaheight+swipeupheight+infoheight+2*(margintop1[0])+3*(margintop2[0])+doublebarheight;
   
        
    var yLC = hmap+maplegendaheight+swipeupheight+infoheight+2*(margintop1[0])+2*(margintop2[0])+hlinec/3;
   
    var yCircleCompare = hmap+maplegendaheight+swipeupheight+infoheight+2*(margintop1[0])+3*(margintop2[0])+hlinec+r;
//    console.log(hlinec)
    
				swipeup.append("text")
					.attr("x", 0.1977579*hmap/10)
					.attr("y", 0.5932737*hmap/10)
					.text("∆");
    
                var checkm = false;
                swipeup.on("click", function(){
               
                    checkm= !checkm;
                    if(checkm){
                        yPosition2 = 940;
                        ydist = swipeupheight+infoheight+1*(margintop1[0])+2*(margintop2[0]);
                        
                        ydistBars = swipeupheight+infoheight+1*(margintop1[0])+3*(margintop2[0])+doublebarheight;
                        
                        yLC = swipeupheight+infoheight+1*(margintop1[0])+2*(margintop2[0])+hlinec/3;
                        
                        yCircleCompare = swipeupheight+infoheight+1*(margintop1[0])+3*(margintop2[0])+hlinec+r;
                        
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
                         yLC = hmap+maplegendaheight+swipeupheight+infoheight+2*(margintop1[0])+2*(margintop2[0])+hlinec/3;
                        
                         yPosition2 = 1440+100;
                        
                         ydist = hmap+maplegendaheight+swipeupheight+infoheight+2*(margintop1[0])+2*(margintop2[0]);
                        
                         ydistBars = hmap+maplegendaheight+swipeupheight+infoheight+2*(margintop1[0])+3*(margintop2[0])+doublebarheight;
                        
                         yCircleCompare = hmap+maplegendaheight+swipeupheight+infoheight+2*(margintop1[0])+3*(margintop2[0])+hlinec+r;
                        
//                        to20.transition().duration(1000)
//                        .attr("height", 70);
                        
                         svgmap.transition().duration(2000)
                            .attr("height", hmap);

                        swipeup.select("text")
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
; 
  
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
                
               
//				console.log( hmap * (newScale/2000 - 3.7624*(newScale/2000) )  )

                var xoffset1=8, //5
                    xoffset2=9000,  //7000
                    
                    yoffset1=16,      //12.26
                    yoffset2=6000;      //4700
                
                
                
//                console.log(hmap)
                offset[0] = Math.min(
                    wmap * (newScale/2000 + xoffset1*(newScale/2000))  , 
                    Math.max(wmap  * (1 - newScale/2000) - xoffset2 * newScale/2000, 
                             offset[0] ))
                  ;

                  offset[1] = Math.min(
                    hmap * (newScale/2000 + yoffset1*(newScale/2000)), 
                    Math.max(hmap  * (1 - newScale/2000) - yoffset2 * newScale/2000, offset[1])
                  );

				//Update projection with new offset and scale
				projection.translate(offset)
						  .scale(newScale);

				//Update all paths and circle
             
				svgmap.selectAll("path")
					.attr("d", path);

                var l=(0.418060201*wmap);
                
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
                       
                                if(d.City!="" || CountriesSmall.includes(d.Country))
                                return Math.sqrt(parseInt(d.cindex)) * newScale/l;

                    });
                
                    liFaction.addEventListener('click', () => {


                            first = document.getElementById("tmpfs").getElementsByTagName("a")[0].innerHTML; 
                            second = document.getElementById("list_of_items").getElementsByTagName("a")[1].innerHTML; 
                       
                          
                                deselectCity(first, second);


                    });
                
                    liSaction.addEventListener('click', () => {


                            first = document.getElementById("list_of_items").getElementsByTagName('a')[0].innerHTML; 
                            second = document.getElementById("tmpfs").getElementsByTagName("a")[1].innerHTML;

                                deselectCity(second, first);


                    });
                    
                        
                     btnGetCC.addEventListener('click', () => {
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
                                            
                                               if(d.City!="" || CountriesSmall.includes(d.Country))
//                                                   console.log("radius = "+Math.sqrt(parseInt(d.cindex) ) * newScale/250+" scale: "+newScale)
                                                    return Math.sqrt(parseInt(d.cindex)) * newScale/(l/2);

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
                                    return d.Country+", "+d.City;

                                    if(CountriesSmall.includes(d.Country)){
                                        return d.Country;
                                    }
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
                                               if(d.City!="" || CountriesSmall.includes(d.Country))
                                                    return Math.sqrt(parseInt(d.cindex)) * newScale/l;

                                        })
                              ;
                            })
                    .on("click", function(d){
                                if(d.City!=""){
                                    inputGetCC.value=d.City+", "+d.Country;
                                }else if(CountriesSmall.includes(d.Country)){
                                    inputGetCC.value=d.Country;
                                }
                                
                                btnGetCC.click();

                    });
                
                function selectCityOnAction(id){
                        var results = [];
                        var bool = false;
                      var first = document.getElementById("list_of_items").getElementsByTagName('a')[0].innerHTML; 
                      var second = document.getElementById("list_of_items").getElementsByTagName("a")[1].innerHTML;
                       var oldSecond = document.getElementById("tmpfs").getElementsByTagName("a")[1].innerHTML;  
                       
                    
                        if(id==0){
                            for(var i=0;i<dataset.length;i++)  {
                                if(dataset[i]["selected"] == 1 ){
                                        if(dataset[i]["City"] != ""){
                                             
                                            CircleMap.attr("stroke", "gray")
                                                .attr('fill',"red")
                                                .attr("stroke-width", 0.25)
                                                .style('fill', function(d){
                                                if(d.City+", "+d.Country == dataset[i]["City"]+", "+dataset[i]["Country"]){
                                                 
                                                    return "#00FF00";
                                                }
                                            })
                                            .style("stroke", function(d){
                                                if(d.City+", "+d.Country == dataset[i]["City"]+", "+dataset[i]["Country"]){
                                                    return "#2D1D3A";
                                                }
                                            })
                                            .style("stroke-width", function(d){
                                                if(d.City+", "+d.Country == dataset[i]["City"]+", "+dataset[i]["Country"]){
                                                   //19.25
                                                    
                                                    return 0.016095318*wmap;
                                                }
                                            })
                                            ; 
                                            return dataset[i]["City"]+", "+dataset[i]["Country"];
                                            
                                        }
                                    else if(CountriesSmall.includes(dataset[i]["Country"])){
                                            
                                             CircleMap.attr("stroke", "gray")
                                                .attr('fill',"red")
                                                .attr("stroke-width", 0.25)
                                                .style('fill', function(d){
                                                if(d.Country == dataset[i]["Country"]){
                                                 
                                                    return "#00FF00";
                                                }
                                            })
                                            .style("stroke", function(d){
                                                if(d.Country == dataset[i]["Country"]){
                                                    return "#2D1D3A";
                                                }
                                            })
                                            .style("stroke-width", function(d){
                                                if(d.Country == dataset[i]["Country"]){
                                                    //19.25
                                                    
                                                    return 0.016095318*wmap;
                                                }
                                            })
                                            ; 
                                            return dataset[i]["Country"];
                                            
                                        }
                                    else{
                                            
                                            CircleMap.attr("stroke", "gray")
                                                .attr('fill',"red")
                                                .attr("stroke-width", 0.25)
                                            .style('fill', function(d){
                                                if((Selectedc == dataset[i]["City"]+", "+dataset[i]["Country"])||(Selectedc == dataset[i]["Country"])){
                                                   
                                                    return "red";
                                                }
                                            })
                                            .style("stroke", function(d){
                                                if((Selectedc == dataset[i]["City"]+", "+dataset[i]["Country"])||(Selectedc == dataset[i]["Country"])){
                                                    return "gray";
                                                }
                                            })
                                            .style("stroke-width", function(d){
                                                if((Selectedc == dataset[i]["City"]+", "+dataset[i]["Country"])||(Selectedc == dataset[i]["Country"])){
                                                    return 0.25;
                                                }
                                            })
                                            ; 
                                            return 0;
                                        }
                                    
                                    
                                    
                                
                                    

                                }                 
                            }
                        }
                        else{
                           
                            
                             for(var i=0;i<dataset.length && !bool;i++)  {
                                 
                                if(dataset[i]["selected"] == 1 ){
                                 
                                    if( CountriesSmall.includes(dataset[i]["Country"]) ){

                                        
                                        
                                        CircleMap.attr("stroke", "gray")
                                                    .attr('fill',"red")
                                                    .attr("stroke-width", 0.25)
                                                    .style('fill', function(d){
                                                    if(d.Country == dataset[i]["Country"]){

                                                        return "#00FF00";
                                                    }
                                                })
                                                .style("stroke", function(d){
                                                    if(d.Country == dataset[i]["Country"]){
                                                        return "#2D1D3A";
                                                    }
                                                })
                                                .style("stroke-width", function(d){
                                                    if(d.Country == dataset[i]["Country"]){
                                                        //19.25
                                                    
                                                    return 0.016095318*wmap;
                                                    }
                                                })
                                                ; 
                                              
                                                var tmpc = dataset[i]["Country"];
                                        
                                                
                                                    results[0] = tmpc ;
                                                
                                     
                                        
                                                if( CountriesSmall.includes(second) && CountriesSmall.includes(first) && ( first != "" && second != "" && first!=undefined && second!=undefined ) ){
                                                    
                                                 
                                                    
                                        for(var s=0;s<dataset.length && !bool;s++){
                                                        
                                            if(CountriesSmall.includes(dataset[s]["Country"]) && dataset[s]["Country"] != tmpc && dataset[s]["selected"] == 1 ){
                                            
                                                CircleMap.attr("stroke", "gray")
                                                .attr('fill',"red")
                                                .attr("stroke-width", 0.25)
                                                .style('fill', function(d){
                                                    if(d.Country == dataset[s]["Country"]){

                                                        return "#00FF00";
                                                    }
                                                    if(d.Country == tmpc){

                                                        return "#00FF00";
                                                    }
                                                })
                                                .style("stroke", function(d){
                                                    if(d.Country == dataset[s]["Country"]){
                                                        return "#2D1D3A";
                                                    }
                                                    if(d.Country == tmpc){

                                                        return "#2D1D3A";
                                                    }
                                                })
                                                .style("stroke-width", function(d){
                                                    if(d.Country == dataset[s]["Country"]){
                                                        //19.25
                                                    
                                                        return 0.016095318*wmap;
                                                    }
                                                    if(d.Country == tmpc){

                                                        //19.25
                                                    
                                                        return 0.016095318*wmap;
                                                    }
                                                })
                                                ;
                                                results[1] = dataset[s]["Country"];
                                                bool=true;
                                        }
                                                        
                                                        
                                    }
                                                    
                                                    
                                                }
                                                
                                        
                                                else if(second.includes(", ") || first.includes(", ") && ( first != "" && second != "" && first!=undefined && second!=undefined ) ){
                                                    
                                                    
                                        for(var s=0;s<dataset.length && !bool;s++){
                                                        
                                                if( dataset[s]["City"] != "" && dataset[s]["selected"] == 1  ){
                                            
                                                            
                                               CircleMap.attr("stroke", "gray")
                                                .attr('fill',"red")
                                                .attr("stroke-width", 0.25)
                                                .style('fill', function(d){
                                                if(d.City+", "+d.Country == dataset[s]["City"]+", "+dataset[s]["Country"]){
                                                 
                                                    return "#00FF00";
                                                }
                                                if(d.Country == tmpc){

                                                        return "#00FF00";
                                                    }
                                            })
                                            .style("stroke", function(d){
                                                if(d.City+", "+d.Country == dataset[s]["City"]+", "+dataset[s]["Country"]){
                                                    return "#2D1D3A";
                                                }
                                                if( d.Country == tmpc ){
                                                 
                                                    return "#2D1D3A";
                                                }
                                            })
                                            .style("stroke-width", function(d){
                                                if(d.City+", "+d.Country == dataset[s]["City"]+", "+dataset[s]["Country"]){
                                                    //19.25
                                                    
                                                    return 0.016095318*wmap;
                                                }
                                                if(d.Country == tmpc){
                                                 
                                                    //19.25
                                                    
                                                    return 0.016095318*wmap;
                                                }
                                            })
                                            ;
                                            
                                                 bool=true;
                                            
                                                 
                                                
                                                 results[1] = dataset[s]["City"]+", "+dataset[s]["Country"];
                                            
                                        }
                                                        
                                                      
                                                    }
                                                    
                                                }
                                        
                                                
                                              
                                        }

 
                                    else if( dataset[i]["City"] != "" ){

                                            CircleMap.attr("stroke", "gray")
                                                .attr('fill',"red")
                                                .attr("stroke-width", 0.25)
                                                .style('fill', function(d){
                                                if(d.City+", "+d.Country == dataset[i]["City"]+", "+dataset[i]["Country"]){
                                                 
                                                    return "#00FF00";
                                                }
                                            })
                                            .style("stroke", function(d){
                                                if(d.City+", "+d.Country == dataset[i]["City"]+", "+dataset[i]["Country"]){
                                                    return "#2D1D3A";
                                                }
                                            })
                                            .style("stroke-width", function(d){
                                                if(d.City+", "+d.Country == dataset[i]["City"]+", "+dataset[i]["Country"]){
                                                    //19.25
                                                    
                                                    return 0.016095318*wmap;
                                                }
                                            })
                                            ; 
                                           
                                            var tmp = dataset[i]["City"]+", "+dataset[i]["Country"];
                                           
                                                results[0] = tmp;
                                            
                                            
                                            if( CountriesSmall.includes(second) || CountriesSmall.includes(first) && ( first != "" && second != "" && first!=undefined && second!=undefined ) ){
                                                    
                                                  
                                                    
                                        for(var s=0;s<dataset.length && !bool;s++){
                                                        
                                            if(CountriesSmall.includes(dataset[s]["Country"]) && dataset[s]["selected"] == 1 ){
                                            
                                                CircleMap.attr("stroke", "gray")
                                                .attr('fill',"red")
                                                .attr("stroke-width", 0.25)
                                                .style('fill', function(d){
                                                    if(d.Country== dataset[s]["Country"]){

                                                        return "#00FF00";
                                                    }
                                                    if(d.City+", "+d.Country == tmp){

                                                        return "#00FF00";
                                                    }
                                                })
                                                .style("stroke", function(d){
                                                    if(d.Country == dataset[s]["Country"]){
                                                        return "#2D1D3A";
                                                    }
                                                    if(d.City+", "+d.Country == tmp){

                                                        return "#2D1D3A";
                                                    }
                                                })
                                                .style("stroke-width", function(d){
                                                    if(d.Country == dataset[s]["Country"]){
                                                        //19.25
                                                    
                                                        return 0.016095318*wmap;
                                                    }
                                                    if(d.City+", "+d.Country == tmp){

                                                        //19.25
                                                    
                                                        return 0.016095318*wmap;
                                                    }
                                                })
                                                ;
                                                results[1] = dataset[s]["Country"];
                                                bool=true;
                                        }
                                                        
                                                        
                                    }
                                                    
                                                    
                                                }
                                                
                                        
                                            else if(second.includes(", ") && first.includes(", ") && ( first != "" && second != "" && first!=undefined && second!=undefined ) ){
                                                    
                                                    
                                        for(var s=0;s<dataset.length && !bool;s++){
                                                        
                                                if( dataset[s]["City"] != "" && dataset[s]["selected"] == 1 && dataset[s]["City"]+", "+dataset[s]["Country"] != tmp){
                                            
                                                            
                                               CircleMap.attr("stroke", "gray")
                                                .attr('fill',"red")
                                                .attr("stroke-width", 0.25)
                                                .style('fill', function(d){
                                                if(d.City+", "+d.Country == dataset[s]["City"]+", "+dataset[s]["Country"]){
                                                 
                                                    return "#00FF00";
                                                }
                                                if(d.City+", "+d.Country == tmp){

                                                        return "#00FF00";
                                                }
                                            })
                                            .style("stroke", function(d){
                                                if(d.City+", "+d.Country == dataset[s]["City"]+", "+dataset[s]["Country"]){
                                                    return "#2D1D3A";
                                                }
                                                if( d.City+", "+d.Country == tmp ){
                                                 
                                                    return "#2D1D3A";
                                                }
                                            })
                                            .style("stroke-width", function(d){
                                                if(d.City+", "+d.Country == dataset[s]["City"]+", "+dataset[s]["Country"]){
                                                    //19.25
                                                    
                                                    return 0.016095318*wmap;
                                                }
                                                if( d.City+", "+d.Country == tmp ){
                                                 
                                                    //19.25
                                                    
                                                    return 0.016095318*wmap;
                                                }
                                            })
                                            ;
                                            
                                                 bool=true;
                                            
                                                 
                                                
                                                 results[1] = dataset[s]["City"]+", "+dataset[s]["Country"];
                                            
                                        }
                                                        
                                                      
                                                    }
                                                    
                                                }
                                            
                                            
                                            
                                    }
                                      
                                    
                                    else if( dataset[i]["City"]=="" &&   !CountriesSmall.includes(dataset[i]["Country"]) &&  !first.includes(", ") && !CountriesSmall.includes(first) && !second.includes(", ") && !CountriesSmall.includes(second) && ((Selectedc[0] != 0 && Selectedc[0] != undefined && second != Selectedc[0]) ) ){
                                               
//                                            console.log( Selectedc[0] )
                                             CircleMap.attr("stroke", "gray")
                                                .attr('fill',"red")
                                                .attr("stroke-width", 0.25)
                                                .style('fill', function(d){

                                                     if( d.City+", "+d.Country == Selectedc[0] ){

                                                        return "red";
                                                    }
                                                    
                                                   
                                                })
                                                .style("stroke", function(d){
                                                   
                                                       if(d.City+", "+d.Country == Selectedc[0]){
                                                        return "gray";
                                                    }
                                                   
                                                })
                                                .style("stroke-width", function(d){

                                                        if(d.City+", "+d.Country == Selectedc[0]){
                                                                return 0.25;
                                                    }
                                                   
                                                })
                                                ;
                                            
                                                results[0] = 0;
                                                results[1] = 0;
                                            bool=true;
                                        }
                                               
          
          
                                    
                                }                 
                            }
                            
                             return results;
                        }
                    }	
				
                  function deselectCity(x, y){
                      var last = false;
                         if(y=="" || x==""){
                             last = true;
                             
                         }
                         if( x.includes(", ") && y.includes(", ") ){
                             
                              CircleMap.attr("stroke", "gray")
                                                .attr('fill',"red")
                                                .attr("stroke-width", 0.25)
                                                .style('fill', function(d){
                                                if(d.City+", "+d.Country == x){
                                                 
                                                    return "red";
                                                }
                                                if(!last){
                                                 
                                                    if(d.City+", "+d.Country == y){

                                                        return "#00FF00";
                                                    }
                                                }
                                            })
                                            .style("stroke", function(d){
                                                if(d.City+", "+d.Country == x){
                                                    return "gray";
                                                }
                                                if(!last){
                                                    if(d.City+", "+d.Country == y){

                                                      return "#2D1D3A";
                                                    }
                                                    
                                                }
                                            })
                                            .style("stroke-width", function(d){
                                                if(d.City+", "+d.Country == x){
                                                    return 0.25;
                                                }
                                                if(!last){
                                                    if(d.City+", "+d.Country == y){

                                                        //19.25
                                                    
                                                        return 0.016095318*wmap;
                                                    }
                                                }
                                            })
                                            ;
                             
                         }
                            else if( x.includes(", ") && !y.includes(", ") ){
                             
                              CircleMap.attr("stroke", "gray")
                                                .attr('fill',"red")
                                                .attr("stroke-width", 0.25)
                                                .style('fill', function(d){
                                                if(d.City+", "+d.Country == x){
                                                 
                                                    return "red";
                                                }
                                                if(!last){
                                                 
                                                    if(d.Country == y && CountriesSmall.includes(y)){

                                                        return "#00FF00";
                                                    }
                                                }
                                            })
                                            .style("stroke", function(d){
                                                if(d.City+", "+d.Country == x){
                                                    return "gray";
                                                }
                                                if(!last){
                                                    if(d.Country == y  && CountriesSmall.includes(y) ){

                                                      return "#2D1D3A";
                                                    }
                                                    
                                                }
                                            })
                                            .style("stroke-width", function(d){
                                                if(d.City+", "+d.Country == x){
                                                    return 0.25;
                                                }
                                                if(!last){
                                                    if(d.Country == y  && CountriesSmall.includes(y) ){

                                                        //19.25
                                                    
                                                        return 0.016095318*wmap;
                                                    }
                                                }
                                            })
                                            ;
                             
                         }
                         
                            else if(  !x.includes(", ") && y.includes(", ")  ){
                             
                              CircleMap.attr("stroke", "gray")
                                                .attr('fill',"red")
                                                .attr("stroke-width", 0.25)
                                                .style('fill', function(d){
                                                if(d.Country == x){
                                                 
                                                    return "red";
                                                }
                                                if(!last){
                                                 
                                                    if(d.City+", "+d.Country == y){

                                                        return "#00FF00";
                                                    }
                                                }
                                            })
                                            .style("stroke", function(d){
                                                if(d.Country == x){
                                                    return "gray";
                                                }
                                                if(!last){
                                                    if(d.City+", "+d.Country == y){

                                                      return "#2D1D3A";
                                                    }
                                                    
                                                }
                                            })
                                            .style("stroke-width", function(d){
                                                if(d.Country == x){
                                                    return 0.25;
                                                }
                                                if(!last){
                                                    if(d.City+", "+d.Country == y){

                                                        //19.25
                                                    
                                                        return 0.016095318*wmap;
                                                    }
                                                }
                                            })
                                            ;
                             
                         }
                      
                            else if( CountriesSmall.includes(x) && !y.includes(", ") ){
                             
                             CircleMap.attr("stroke", "gray")
                                                .attr('fill',"red")
                                                .attr("stroke-width", 0.25)
                                                .style('fill', function(d){
                                                    if(d.Country == x ){

                                                        return "red";
                                                    }
                                                    
                                                    if(d.Country == y && CountriesSmall.includes(y)){

                                                        return "#00FF00";
                                                    }else if(d.City+", "+d.Country == y){
                                                        return "#00FF00";
                                                    }
                                                })
                                                .style("stroke", function(d){
                                                    if(d.Country == x ){
                                                        return "gray";
                                                    }
                                                    if(d.Country == y && CountriesSmall.includes(y)){

                                                        return "#2D1D3A";
                                                    }else if(d.City+", "+d.Country == y){
                                                        return "#2D1D3A";
                                                    }
                                                })
                                                .style("stroke-width", function(d){
                                                    if(d.Country == x ){
                                                        return 0.25;
                                                    }
                                                    if(d.Country == y && CountriesSmall.includes(y)){

                                                        //19.25
                                                    
                                                        return 0.016095318*wmap;
                                                    }else if(d.City+", "+d.Country == y){
                                                        //19.25
                                                    
                                                        return 0.016095318*wmap;
                                                    }
                                                })
                                                ;
                             
                         }
                  }
                
                
			}

          
           
			var zoom = d3.zoom()         
                        .scaleExtent([ 0.1, 1.0 ])
                        //.translateExtent([[ 975.973, 770,067 ], [ -16.026, -188.932 ]])//limit panning
            
						 .on("zoom", zooming);

    
			//The center of the country, roughly
			var center = [ 500.88558329239254, 818.2940141542106 ];
//            var center =[905.4279140465948, 18.2496754502784];
			//Create a container in which all zoom-able elements will live
			var map = svgmap.append("g")
						.attr("id", "map")
						.call(zoom)
                        ;  //Bind the zoom behavior
  						map.call(zoom.transform, d3.zoomIdentity  //Then apply the initial transform
							.translate(wmap/2, hmap/2)
							.scale(0.1267)
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

                            map.transition()
                                .call(zoom.transform, d3.zoomIdentity  //Same as the initial transform
                                    .translate(wmap/2, hmap/2)
                                    .scale(0.1267)
                                    .translate(-center[0], +center[1])
                             )

                    });

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
  
    //http://localhost:8000/Documenti/CrimeProject/data/World_countries.json
d3.json("https://raw.githubusercontent.com/paolo-git/progetw/master/World_countries.json", function(error, world) {
  if(error) return console.error(error);


         d3.select("#mapLegenda").classed("hidden", false);
    
    
          map.call(tipM);
       
         
          var Selected="";
          
          var Wmap = map.append("g")
            
            .attr("class", "boundary")
            .selectAll("boundary")
            .data(world.features)
            .enter().append("path")
            .attr("d", path);
        
    
                liFaction.addEventListener('click', () => {
        
                        
                            first = document.getElementById("tmpfs").getElementsByTagName("a")[0].innerHTML;
                            second = document.getElementById("list_of_items").getElementsByTagName("a")[1].innerHTML; 

                             
                                dataset = CC(arrayFS);
//                                console.log(first +" ...."+ second)
                                deselectCountry(first, second);

                               
                });
                
                liSaction.addEventListener('click', () => {
        
                        
                     
                            first = document.getElementById("list_of_items").getElementsByTagName('a')[0].innerHTML; 
                            second = document.getElementById("tmpfs").getElementsByTagName("a")[1].innerHTML;

                              dataset = CC(arrayFS);
                    

                                deselectCountry(second, first);

                               
                });

                 btnGetCC.addEventListener('click', () => {
                            
                                selectCountryOnAction();
                            
                            
                            
                 });
    
    
    
            Wmap.on("mouseover",function(d){
                         tipM.show(d);
                        
                        d3.select(this)
                            .attr('fill','lightgreen')
              ;
                    })
                .on("mouseout",function(d){
                         tipM.hide(d);
                         d3.select(this).attr('fill',function(d){
                                return "#DEB887";
                           
                         });
            })
                .on("click", function(d){
                
                        var namec = countryName(d.properties.name);
                        inputGetCC.value=namec;
                        btnGetCC.click();
//                        dataset = CC(namec);
//                        
//                        selectCountryOnAction();

            })
            ;

    
        function selectCountryOnAction(){
            var bool = false;
           
            var boolB = false;
          
                for(var i=0;i<dataset.length && !bool ;i++)  {
                        if(dataset[i]["selected"] == 1 && !boolB && !CountriesSmall.includes(dataset[i]["selected"])){
                                  Wmap
                                    .attr('fill', "#DEB887")
                                    .style('fill', function(d){
                               
                                        if(countryName(d.properties.name) == dataset[i]["Country"] ){
                                            return "#00FF00";
                                        }
                                       
                                    }).attr("stroke", "gray")
                                    .style("stroke", "gray")
                                    .attr("stroke-width", 1)
                                    .style("stroke-width", function(d){
                                        if(countryName(d.properties.name) == dataset[i]["Country"]){
                                            return 0.004389632*wmap;
                                                    //5.25
                                        }
                                        
                                    })
                                    ;  
                                boolB=true;
                                var s=dataset[i]["Country"];
                        }
                        if(dataset[i]["selected"] == 1 && !bool && s!=dataset[i]["Country"]  && !CountriesSmall.includes(dataset[i]["selected"])){
//                            console.log(i+" : "+dataset[i]["Country"])
                            
                                    Wmap
                                        .attr('fill', "#DEB887")
                                    .style('fill', function(d){
                               
                                        if(countryName(d.properties.name) == dataset[i]["Country"] ){
                                            return "#00FF00";
                                        }
                                        if(countryName(d.properties.name) == s ){
                                            return "#00FF00";
                                        }
                                    }).attr("stroke", "gray")
                                    .style("stroke", "gray")
                                    .attr("stroke-width", 1)
                                    .style("stroke-width", function(d){
                                        if(countryName(d.properties.name) == dataset[i]["Country"]){
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
    
        function deselectCountry(x, y){
            
            var s = x.toString(); 
            var z = y.toString(); 
            var city = false;
//            console.log(s)
            if(s.includes(", ")){
                
                s = x.split(", ");
                s = s[1];
            }
            if(z.includes(", ")){
                z = y.split(", ");
                z = z[1];
                city = true;
            }
             Wmap
                 .attr('fill', "#DEB887")
                 .style('fill', function(d){
                     if(city && s==z){
                        
                         if(countryName(d.properties.name) == z){
                                return "#00FF00";
                         }

                     }else{
                         if(countryName(d.properties.name) == s){
                                return "#DEB887";
                         }
                         if(countryName(d.properties.name) == z){
                                return "#00FF00";
                         }
                     }
                                       
                 }).attr("stroke", "gray")
                 .style("stroke", "gray")
                 .attr("stroke-width", 1)
                 .style("stroke-width", function(d){
                 
                     if(city && s==z){
                        
                         if(countryName(d.properties.name) == z){
                                return 0.004389632*wmap;
                                                    //5.25
                         }

                     }else{
                         
                     
                         if(countryName(d.properties.name) == s){
                              return 1;
                         }
                         if(countryName(d.properties.name) == z){
                            return 0.004389632*wmap;
                                                    //5.25
                         }
                         
                     }
                 })
                 ;  
                                
            
        }
        
        map.selectAll("circle")
                            .data(data)
                            .enter()
                            .append("circle")
                            .attr("cx", function(d){
                                    return projection([d.longitude, d.latitude])[0];
                            })
                            .attr("cy", function(d){
                                    return projection([d.longitude, d.latitude])[1];
                            })
                            .attr("r", function(d){
                                    if(d.City!="" || CountriesSmall.includes(d.Country))
                                    return Math.sqrt(parseInt(d.cindex)) * 300/500;
                            })
                            .style("fill", "red")
                            .style("stroke", "gray")
                            .style("stroke-width", 0.25)
                            .style("opacity", 0.75)
//                            .append("title")
//                            .text(function(d){
//                                if(d.City!="")
//                                return d.Country+", "+d.City;
//                                
//                                if(CountriesSmall.includes(d.Country)){
//                                    return d.Country;
//                                }
//                            })
                            .on("mouseover",function(d){
                                        
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
                                    return d.Country+", "+d.City;

                                    if(CountriesSmall.includes(d.Country)){
                                        return d.Country;
                                    }
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
                
                //tips
                for(i=0;i<dataset.length;i++){
                    
                    var li = document.createElement("li");
                        city=dataset[i]["City"];
                        country=dataset[i]["Country"];
                        if(city == ""){
                            tip = country;
                        }else{
                            tip = city + ", " +country;
                        }
                        
                        var a = document.createElement('a');  
                  
                        // Create the text node for anchor element. 
                        var link = document.createTextNode(tip); 
                       
                        a.onclick = function() {
                            
                            var tmp = this.innerText || this.textContent; 
                            
                            inputGetCC.value = tmp;    
                        }
                        // Append the text node to anchor element. 
                        a.appendChild(link);  

                        li.appendChild(a);
                        ul.appendChild(li);
                }
                

         
        function CC(str){
                    
                  
                   var j, i, city, country, tip, citytmp, countrytmp, cc, ccc, verifyCompare;
                        
                     var types = ["LevelOfCrime", "CrimeIncrIn3years", "HomeBroken", "MuggedOrRobbed", "CarStolen", "ThingsFromCarStolen", "Attacked", "Insulted", "AttackCauseEGR", "Drugs", "VandalismAndTheft", "ViolentCrimes", "CorruptionAndBribery", "SafetyDaylight", "SafetyNight"];
                    
                     
                    function colortype(type){
                            if(type == types[0]){
                                return "#7DD5FC";
                            }else if(type == types[1]){
                                return "#0F85B8";
                            }else if(type == types[2]){
                                return "#0FFF00";
                            }else if(type == types[3]){
                                return "#97C137";
                            }else if(type == types[4]){
                                return "#D3C712";
                            }else if(type == types[5]){
                                return "#FFBB32";
                                   
                            }
                            else if(type == types[6]){
                                 return "#FCD65E";
                                
                            }
                            else if(type == types[7]){
                               
                                return "#FFF000";
                            }
                            else if(type == types[8]){
                                return "#FFEB86";
                                
                            }
                            else if(type == types[9]){
                                return "#C43737";
                            }
                            else if(type == types[10]){
                                return "#FF0000";
                            }
                            else if(type == types[11]){
                                return "#FE15D0";
                            }
                            else if(type == types[12]){
                                return "#FE9F9F";
                            }
                            else if(type == types[13]){
                                return "#566573";
                            }
                            else if(type == types[14]){
                                return "#17202A";
                            }
                        }
            
            
            
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
                if(!verifyCompare){
                    
                    
                    d3.select("#linechart").classed("hidden", true);
                     hiddenElemCompare1(true);
                     hiddenElemCompare2(true);
                    
                    if(cc!=""){
                         hiddenElem(false);                    
                    }

                    var contributors, update;
                    var check =false;

                    var sum = 0;


                    var str, cindex, sindex;
    //               console.log(typeval)
                    if(typeval != []){
                        typeval.splice(0,typeval.length);
                    }


                    for(i=0;i<dataset.length ;i++){ 
                        citytmp=dataset[i]["City"];
                        countrytmp=dataset[i]["Country"];

                        str = citytmp + ", " +countrytmp;


                        if(((countrytmp==cc && citytmp=="") || str==cc)){



                            country=countrytmp;
                            city=citytmp;
                            contributors=dataset[i]["Contributors"];
                            update=dataset[i]["Update"];
                            dataset[i]["selected"]=1;

                            for(j=0;j<types.length;j++){
                                var cindex = dataset[i]["cindex"];
                                var sindex = dataset[i]["sindex"];
                                typeval.push(
                                    {
                                    type:types[j],
                                    val: dataset[i][types[j]]     
                                    }
                                );

                            }

                        }else{
                            dataset[i]["selected"]=0;

                        }

                    }

                     var resultData=dataset;   

                     if(typeval.length == 0){
                        hiddenElem(true);
                     }   
                    if(contributors <= 33){
                        document.getElementById("contributors").style.color = "red";
                        document.getElementById("contributors").style.fontSize = "1.22vw";
                        document.getElementById("contributors").style.fontWeight = "bold";
                    }else{
                        document.getElementById("contributors").style.color = "black";
                        document.getElementById("contributors").style.fontSize = "1.102vw";
                        document.getElementById("contributors").style.fontWeight = "normal";
                    }

                    document.getElementById("cname").innerHTML = cc;
                    document.getElementById("contributors").innerHTML = "Contributors = "+contributors;
                    document.getElementById("update").innerHTML = "Last update = "+update; 

    //                cindex = sum/15;
    //                cindex = Math.round(cindex * Math.pow(10,3))/Math.pow(10,3); 

    //                sindex = 100-(cindex);   
    //                sindex = Math.round(sindex * Math.pow(10,3))/Math.pow(10,3); 
    //                
                    document.getElementById("cindex").innerHTML ="Crime Index = "+cindex+" % ";
                    document.getElementById("sindex").innerHTML = "Safety Index = "+sindex+" % ";
                
                    
                   if(contributors==0){
                        hiddenElem(true);
                        typeval.splice(0,typeval.length);
                        d3.select("#info").classed("hidden", false);
                   }


                    var split, usstate;    

                    var relatedCities = [];




                        
                    d3.select("#doublebar").select("svg").remove();
                    d3.select("#posneg").select("svg").remove();
                    
                    d3.select("#barchart").select("svg").remove();
                    d3.select("#containerPie").selectAll("svg").remove();
                    d3.select("#legenda").select("svg").remove();
                    d3.select("#legendabar").select("svg").remove();
                    d3.select("#podium").select("svg").remove();    
                    d3.select("#linechart").select("svg").remove();

                    if(typeval.length!=0){
                    
                    var width = $('#doublebar').width();
                    document.getElementById("doublebar").style.width = width+"px";
                        
                    var axisWidth = width * 0.060096154;
//                    var width = 800;

			        var height = width * 0.600961538;
                    
                        
                    var padding = 0.06*height;
                       
//                    var margin = {top: 30, right: 20, bottom: 70, left: 50};
                    
                    var xScale = d3.scaleBand()
                                    .domain(d3.range(typeval.length))//range generate array of sequential numbers
                                    .rangeRound([0, width])
                                    .paddingInner(0.3)
                    ;

    
    
                    
                    var yScale = d3.scaleLinear()
                                    .domain([0, d3.max(typeval, function(d){

                                        return d.val;
                                    })])
                                    .range([0, height]);
                    
    
    
                   var xScaleD = d3.scaleBand()
                                    .domain(d3.range(typeval.length))//range generate array of sequential numbers
                                    .rangeRound([0, width])
                                    .paddingInner(0.3);
    

                   var yScaleD = d3.scaleLinear()
                                        .domain([
                                            d3.min(typeval, function(d){

                                            return d.val;
                                        }), d3.max(typeval, function(d){

                                            return d.val;
                                        })

                                                ])
                                        .range([height-padding, padding]);
                     
    
                    

                    
                    var xAxis = d3.axisBottom()
                               .scale(xScaleD)
                               .ticks(15)
                               
                               .tickFormat(function(d,i){ return types[i] })
                                ;
                    
                 
                    //Define Y axisleft
                    var yAxis = d3.axisRight()
                               
                                .scale(yScaleD) .ticks(10)

                               ;

                    var typevalTmp = typeval;
                    
                    
                   
    
                
                    var doublebar = d3.select("body")
                                .select("#doublebar")
                                .append("svg")
                                .attr("viewBox","0 0 "+(width+axisWidth)+" " +(height+0.4*height));
//                                .attr("width", width+axisWidth)
//                                .attr("height", height+0.4326*height);//for xaxis
    
                    doublebar.append("g")
                      .attr("class", "grid")
                      .call(d3.axisLeft().scale(yScaleD)
                              .tickSize(-width-axisWidth)
                              .tickFormat("")
                      );

                    //real middle 46.970920165888984 <= 47 
                    var middleVal = 47;
                        
                      doublebar.append("g").attr("id", "middle")
                           .attr("transform", "translate(0, "+yScaleD(middleVal)+")")
                           .append("line")
                           .attr("x2", width+axisWidth)
                           .style("stroke", "black")
                           .style("stroke-width", "5px");
                    
       
                   
                    
                    doublebar.append("g")
                        .attr("class", "xaxis")
                        .attr("transform", function(d){
//45
                            return "translate("+axisWidth+", "+ height + ")";
                        })
                      .call(xAxis)
                      .selectAll("text")
                        .style("font-size", "0.9vw")
                        .style("text-anchor", "end")
                        .attr("dx", "-.8em")
                        .attr("dy", ".15em")
                        .attr("transform", "rotate(-65)");
    
                      
                    //Create SVG element
                   

    
    
                    doublebar.append("g")
					.attr("class", "yaxis")
//					.attr("transform", "translate(" + 0 + ",0)")
                    .transition()
				    .duration(1000)
					.call(yAxis);
                    
                    
                    var sortOrder = false; 
                    //Create bars

                    doublebar.selectAll("rect")
                       .data(typeval)
                       .enter()
                       .append("rect")
                       .attr("x", function(d, i) {
                            return xScale(i)+axisWidth;
                       })
                        .transition("moverect")

                        .delay(function(d, i){
                            return i*120;
                        })
                        .ease(d3.easeCircle)
                        .duration(500)
                       .attr("y", function(d) {
                            if(d.val >= middleVal){
                             
                              return height-(height-yScaleD(middleVal))-(yScaleD(middleVal)-yScaleD(d.val));
                                
                            }else{
                                 return height-(height-yScaleD(middleVal));

                            }

                       })
                       .attr("width", xScale.bandwidth())
                       .attr("height", function(d) {
                            
                            if(d.val >= middleVal){
                                   
                                       return yScaleD(middleVal)-yScaleD(d.val);
                                   
                                    
                            }else{
                                    return yScaleD(d.val)-yScaleD(middleVal);

                            }

                       })
                       .attr("fill", function(d) {

                            if((d.val > middleVal && !d.type.includes("Safety")) || (d.val < middleVal && d.type.includes("Safety"))){
                                return "red";
                            }else if((d.val < middleVal && !d.type.includes("Safety")) || (d.val > middleVal && d.type.includes("Safety"))){
                                return "green";
                            }
                           
                       });

                      
            
//
                       doublebar.selectAll("rect")
                           .data(typeval)
                       .on("mouseover", function(d) {

                            //Get this bar's x/y values, then augment for the tooltip
                            d3.select(this)
                                    .attr("fill", "orange")
                                    .transition("coloron")
                                    .duration(1000)
                                    ;

                            var vrz = 130.13;

                            var xPosition = parseFloat(d3.select(this).attr("x")) + (xScaleD.bandwidth() / 2)+ vrz;
                           
                           var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

                            var yPosition = parseFloat(offset-maplegendaheight);
//                            var yPosition = parseFloat(d3.select(this).attr("y")) + height / 2 + ydist;

                            //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text(correct(d.type) +" : "+d.val+"%")
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);

                       })
                       .on("mouseout", function() {
                             d3.select(this)
                                    .attr("fill", function(d) {

                                         if((d.val > middleVal && !d.type.includes("Safety")) || (d.val < middleVal && d.type.includes("Safety"))){
                                            return "red";
                                        }else if((d.val < middleVal && !d.type.includes("Safety")) || (d.val > middleVal && d.type.includes("Safety"))){
                                            return "green";
                                        }
                                    })
                                    .transition("coloroff")
                                    .duration(1000);
                            //Hide the tooltip
                            d3.select("#tooltip").classed("hidden", true);

                       })

                       .on("click", function() {

                            sortOrder = !sortOrder;
                          
                            function compareValues(key, order = 'asc') {
                              return function innerSort(a, b) {
                                if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                                  // property doesn't exist on either object
                                  return 0;
                                }

                                const varA = (typeof a[key] === 'string')
                                  ? a[key].toUpperCase() : a[key];
                                const varB = (typeof b[key] === 'string')
                                  ? b[key].toUpperCase() : b[key];

                                let comparison = 0;
                                if (varA > varB) {
                                  comparison = 1;
                                } else if (varA < varB) {
                                  comparison = -1;
                                }
                                return (
                                  (order === 'desc') ? (comparison * -1) : comparison
                                );
                              };
                            }
                           var typevalx;
                            if(sortOrder){
                                typevalx = typeval.sort(compareValues('val'));
                            }else{
                                typevalx = typeval.sort(compareValues('val', 'desc'));
                            }
                           
                            var newTypes = [];
                            if(newTypes != []){
                                newTypes.splice(0,newTypes.length);
                            }
                            for(i=0;i<types.length;i++){
                                newTypes.push(typevalx[i]["type"]);
                            }
                           
                           d3.selectAll(".xaxis").selectAll("text").remove();
                           doublebar.append("g")
                                .attr("class", "xaxis")
                                .attr("transform", function(d){

                                    return "translate("+axisWidth+"," + height + ")";
                                })
                              .call(d3.axisBottom()
                               .scale(xScaleD)
                               .ticks(15)
                               
                               .tickFormat(function(d,i){ return newTypes[i]; })
                                )
                              .selectAll("text")
                                .style("font-size", "0.9vw")
                                .style("text-anchor", "end")
                                .attr("dx", "-.8em")
                                .attr("dy", ".15em")
                                .attr("transform", "rotate(-65)");
                           
                            doublebar.selectAll("rect")

                               .sort(function(a, b) {
                                    
                                    if (sortOrder) {
                                       changeorder.innerHTML="click to order in descending order";
                                        return d3.ascending(a.val, b.val);
                                    } else {
                                        changeorder.innerHTML="click to order in ascending order";
                                        return d3.descending(a.val, b.val);
                                    }
                                })
                               .transition()
                               .delay(function(d, i) {

                                   return i * 20;
                               })
                               .duration(1000)

                               .attr("x", function(d, i) {
                                    return xScaleD(i)+axisWidth;
                               })
                                .on("start", function() {
                                             d3.select("#doublebar").classed("unclickable", true);
    //										d3.select(this).classed("unclickable", "true");


                                            })
                                .on("end", function() {
                                                 d3.select("#doublebar").classed("unclickable", false);
                                                //Restore clickability (is that a word?)
    //											d3.select(this).classed("unclickable", "false");

                                })	;

                       });
                    
                          var posneg = d3.select("body")
                                        .select("#posneg")
                                        .append("svg")
                                         .attr("viewBox","0 0 "+(width)+" " + ( padding+(padding/2) + (padding*2)/2 ));
                                       


                    
                     changeorder.addEventListener('click', () => {
                           
                           sortOrder = !sortOrder;
                          
                            function compareValues(key, order = 'asc') {
                              return function innerSort(a, b) {
                                if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                                  // property doesn't exist on either object
                                  return 0;
                                }

                                const varA = (typeof a[key] === 'string')
                                  ? a[key].toUpperCase() : a[key];
                                const varB = (typeof b[key] === 'string')
                                  ? b[key].toUpperCase() : b[key];

                                let comparison = 0;
                                if (varA > varB) {
                                  comparison = 1;
                                } else if (varA < varB) {
                                  comparison = -1;
                                }
                                return (
                                  (order === 'desc') ? (comparison * -1) : comparison
                                );
                              };
                            }
                            var typevalx;
                            if(sortOrder){
                                typevalx = typeval.sort(compareValues('val'));
                            }else{
                                typevalx = typeval.sort(compareValues('val', 'desc'));
                            }
                           
                            var newTypes = [];
                            if(newTypes != []){
                                newTypes.splice(0,newTypes.length);
                            }
                            for(i=0;i<types.length;i++){
                                newTypes.push(typevalx[i]["type"]);
                            }
                           
                           d3.selectAll(".xaxis").selectAll("text").remove();
                           doublebar.append("g")
                                .attr("class", "xaxis")
                                .attr("transform", function(d){

                                    return "translate("+axisWidth+"," + height + ")";
                                })
                              .call(d3.axisBottom()
                               .scale(xScaleD)
                               .ticks(15)
                               
                               .tickFormat(function(d,i){ return newTypes[i]; })
                                )
                              .selectAll("text")
                                .style("font-size", "0.9vw")
                                .style("text-anchor", "end")
                                .attr("dx", "-.8em")
                                .attr("dy", ".15em")
                                .attr("transform", "rotate(-65)");
                           
                            doublebar.selectAll("rect")

                               .sort(function(a, b) {
                                    
                                    if (sortOrder) {
                                        changeorder.innerHTML="click to order in descending order";
                                        return d3.ascending(a.val, b.val);
                                    } else {
                                        changeorder.innerHTML="click to order in ascending order";
                                        return d3.descending(a.val, b.val);
                                    }
                                })
                               .transition()
                               .delay(function(d, i) {

                                   return i * 20;
                               })
                               .duration(1000)

                               .attr("x", function(d, i) {
                                    return xScaleD(i)+axisWidth;
                               })
                                .on("start", function() {
                                             d3.select("#doublebar").classed("unclickable", true);
    //										d3.select(this).classed("unclickable", "true");


                                            })
                                .on("end", function() {
                                                 d3.select("#doublebar").classed("unclickable", false);
                                                //Restore clickability (is that a word?)
    //											d3.select(this).classed("unclickable", "false");

                                })	;

                           
                           
                       });
                    
                        

                        var legendpn = posneg.append("g")
                                            .attr("transform", function(d, i){
                                                return "translate("+( i)*padding+ ", "+( i)*padding+")";
                                            })
                                            ;

                        legendpn.append("rect").attr("x", 0).attr("y", 0)
                                             .attr("width", padding)
                                             .attr("height", padding)
                                             .attr("fill", "red");
                        
                         legendpn.append("text").text("NEGATIVE")
                                    .attr("x", padding*2).attr("y", (padding*2)/3)
                                    .attr("font-family", "sans-serif")
                                    .attr("font-size", "1vw");
                    
                         legendpn.append("rect")
                                            .attr("x", 0).attr("y", (padding+(padding/2)))
                                             .attr("width", padding)
                    
                                             .attr("height", padding)
                                             .attr("fill", "green");
                        
                         legendpn.append("text").text("POSITIVE")
                                    .attr("x", padding*2).attr("y", (padding+(padding/2) + (padding*2)/3) )
                                    .attr("font-family", "sans-serif")
                                    .attr("font-size", "1vw");
                    

                        
                        
                                            
                   
    var widthBar = $('#barchart').innerWidth();
    var heightBar = widthBar/2;
// set the dimensions and margins of the graph
    
var margin = {top: 0.034158839*heightBar, right: 0.017079419*widthBar, bottom: 0.051238258*heightBar, left: 0.034158839*widthBar},
    widthBar = 0.819812126*widthBar - margin.left - margin.right, //960= 0.819812126*widthBar
    heightBar = 0.853970965*heightBar - margin.top - margin.bottom;  //500=0.853970965*heightBar

// set the ranges
var ybar = d3.scaleBand()
          .range([heightBar, 0])
          .padding(0.3);

var xbar = d3.scaleLinear()
          .range([0, widthBar]);
          
// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
                        
    //140(length of del items) = 155555556*widthBar
                        
var barsvg = d3.select("#barchart").append("svg")
    .attr("viewBox","0 0 "+(widthBar + margin.left + margin.right +0.155555556*widthBar)+" " +(heightBar + margin.top + margin.bottom))
//    .attr("width", widthBar + margin.left + margin.right +0.155555556*widthBar)
//    .attr("height", heightBar + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");


  // Scale the range of the data in the domains
  xbar.domain([0, d3.max(typevalTmp, function(d){ return d.val; })])
  ybar.domain(d3.range(typevalTmp.length));
  //y.domain([0, d3.max(data, function(d) { return d.sales; })]);
   var tmpTypeval= typevalTmp;
  
    function deOrder(x){
        var tmp;
        var containtypes=[];
        containtypes.splice(0,containtypes.length);
        
          for(var i=0;i<types.length;i++){
               for(var j=0;j<x.length;j++){
                     if(x[j].type == types[i]){
                         containtypes.push(types[i]);
                     }
               }
          }
        
         for(var i=0;i<containtypes.length;i++){
             
             for(var j=0;j<x.length;j++){
                 
                 if(x[j].type == containtypes[i]){
                     
                     tmp= x[i];
                     x[i] = x[j];
                     x[j] = tmp;
                 }
             }
             
         }
        return x;
    }                    
                        
    
    function barchar(){
       
         barsvg.selectAll("circle")
                             .data(typevalTmp)
                             .attr("class", "remove")
                             
                             .enter()
                             
                             .append("circle")
                                .attr("id", function(d, i){
                                         
                                            return "c"+i;
                                })
                                .transition("moverect")

                                  .delay(function(d, i){
                                           return 1200;
                                 })
                                  .ease(d3.easeCircle)
                                  .duration(500)
                                .attr("cx", function(d, i) { 
                                    return widthBar +0.044444444*widthBar;
                                })
                                .attr("cy",function(d, i) { 

                                    return ybar(i)+0.017777778*heightBar; })
                                .attr("r", 0.026666667*heightBar)
                                .on("start", function(){
                                        barsvg.selectAll("circle")
                                             .attr("stroke", "white").attr("stroke-width", 0);   
                                })
                                .on("end", function(){
//             console.log(heightBar)
                                        barsvg.selectAll("circle")//3
                                             .attr("stroke", "red").attr("stroke-width", 0.0066553*heightBar) ;
                                })
                                .attr("fill", "white")
                                ;
    
                    var txt = barsvg.selectAll("text")
                                
                                .data(typevalTmp).enter()
                                .append("text")
                                .attr("class", "remtxt")
                                .attr("id", function(d, i){
                                            return "t"+i;
                                })
                                ;
                                txt.transition("moverect")

                                  .delay(function(d, i){
                                           return 1200;
                                 })
                                  .ease(d3.easeCircle)
                                  .duration(500)
                                 .on("start", function(d ,i){
                                    txt.attr("font-size", "0px")
                                    ;
                                    d3.select("#barchart").classed("unclickable", true);
                                })
    
                                 .on("end", function(d ,i){
                                    d3.select("#barchart").classed("unclickable", false);
                                    txt.text("X").attr("font-size", "1.3vw")
                                .attr("font-weight", "bold").append("title")
                                .text("click to delete this bar");
                                })
                               
                                .attr("x",function(d, i) { 
         
                                    //40-7
                                    return widthBar +0.044444444*widthBar -0.007777778*widthBar;
                                })
                                .attr("y",function(d, i) { 
//                                +15
                                    return ybar(i)+0.033333333*heightBar; })
                                ;
        
        
                       var txt2 = barsvg.selectAll(".txtdel")
                                
                                .data(typevalTmp).enter()
                                .append("text")
                                .attr("class", "txtdel")
                                .attr("id", function(d, i){
                                            return "txt"+i;
                                })
                                ;
                                txt2.transition("movet")

                                  .delay(function(d, i){
                                           return 1200;
                                 })
                                  .ease(d3.easeCircle)
                                  .duration(500)
                                 .on("start", function(d ,i){
                                    txt2.attr("font-size", "0px")
                                    ;
                                    d3.select("#barchart").classed("unclickable", true);
                                })
    
                                 .on("end", function(d ,i){
                                    d3.select("#barchart").classed("unclickable", false);
                                    txt2.text("delete").attr("font-size", "1.3vw")
                                .attr("font-weight", "bold").append("title")
                                .text("click to delete this bar");
                                })
                               
                                .attr("x",function(d, i) { 
//40+20
                                    return widthBar +0.044444444*widthBar +0.022222222*widthBar;
                                })
                                .attr("y",function(d, i) { 
//15
                                    return ybar(i)+0.033333333*heightBar; })
                                ;
    
    
                        


                      // append the rectangles for the bar chart
                      barsvg.selectAll("rect")
                          .data(typevalTmp)
                        .enter().append("rect") .transition("moverect")

                          .delay(function(d, i){
                                   return i*120;
                         })
                          .ease(d3.easeCircle)
                          .duration(500)

                          .on("end", function(){


                                 barsvg.append("g")
                              .attr("class", "grid")
                              .call(d3.axisLeft().scale(ybar)
                                                  .tickSize(-widthBar -0.033333333*widthBar)
                                                  .tickFormat("")
                              );
                            })
                          .attr("class", "bar").attr("id", function(d, i){
                                    return "r"+i;
                        })

                          //.attr("x", function(d) { return x(d.sales); })
                          .attr("width", function(d) {return xbar(d.val); } )
                          .attr("y", function(d, i) { return ybar(i); })
                          .attr("height", ybar.bandwidth())
                          .attr("fill", "blue")
                            .attr("fill", function(d){

                                return colortype(d.type);
                            })
                            ;
                    
                      barsvg.selectAll("rect").data(typevalTmp)
                              .on("mouseover", function(d) {

                            //Get this bar's x/y values, then augment for the tooltip
                            d3.select(this)
                                    .style("stroke", "orange").style("stroke-width", 0.019965899*heightBar)
                                    .transition("coloron")
                                    .duration(1000)
                                    ;

//                            var vrz = 730.13;
//                                var vrz=-100;
                          var xPosition = (widthBar / 2);

//                            var yPosition = parseFloat(d3.select(this).attr("y")) + ybar.bandwidth()  + ydistBars;
                          
                                var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

//                            console.log(offset);
                            var yPosition = parseFloat(offset-maplegendaheight);
                                        
                          
                          
                          

                            //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text(correct(d.type) +" : "+d.val+"%")
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);

                       })
                       .on("mouseout", function() {
                             d3.select(this)
                                    .style("stroke", "black").style("stroke-width", 0)
                                    
                                    .transition("coloroff")
                                    .duration(1000);
                            //Hide the tooltip
                            d3.select("#tooltip").classed("hidden", true);

                       });
                        

                          // add the x Axis
                      barsvg.append("g").attr("id", "xAxisRect")
                          .attr("transform", "translate(0," + heightBar + ")")
                          .call(d3.axisBottom(xbar));

                      // add the y Axis
                      barsvg.append("g").attr("id", "yAxisRect")
                          .call(d3.axisLeft(ybar));
        
                
                barsvg.selectAll("text")
        
        
                .on("mouseover", function(d){
                    
                  var index;
                    if(deOrder(typevalTmp) !=undefined)
                        typevalTmp = deOrder(typevalTmp);
                  for(var i=0;i<typevalTmp.length;i++){
                  
                    if(typevalTmp[i].type==d.type)
                         index = i;
                    }
                     
                    if(index!=undefined && index!=null){
                    

                                        barsvg.select( "rect[id='r"+index+"']")
//                                                .style("fill", "red")
                                                .style("stroke", "red")
                                                .style("stroke-width", 0.022184333*heightBar);
                
                                        barsvg.select( "circle[id='c"+index+"']")
                                                .style("stroke-width", 0.011092166*heightBar);
                
                                        barsvg.select( "text[id='t"+index+"']")
                                                .style("fill", "red");
                        
                                        barsvg.select( "text[id='txt"+index+"']")
                                                .style("fill", "red").style("font-size", "1.4vw");
                        
                        
                        
                          var xPosition = (widthBar / 2)+0.388888889*widthBar;
//                            var xPosition = parseFloat(d3.select(this).attr("x")) + (widthBar / 2);
//                            var yPosition = parseFloat(d3.select(this).attr("y")) + ybar.bandwidth()  + ydistBars;
                        
                              var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

//                            console.log(offset);
                            var yPosition = parseFloat(offset-maplegendaheight);
                                        

                            //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text(correct(typevalTmp[index].type) +" : "+typevalTmp[index].val+"%")
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);
                        
                        
                        
                        
    
                                    }
                    
                    
                                    
                                        
                                        
                
                })
                .on("mouseout", function(d){
                     if(deOrder(typevalTmp) !=undefined)
                        typevalTmp = deOrder(typevalTmp);
                    d3.select("#tooltip").classed("hidden", true);
//                       console.log(typevalTmp)
                  var index;
                  
                    
                  for(var i=0;i<typevalTmp.length;i++){
                  
                    if(typevalTmp[i].type==d.type)
                         index = i;
                    }
                     
                    if(index!=undefined && index!=null){
                      

                                        barsvg.select( "rect[id='r"+index+"']")
//                                                .style("fill", function(d){
//                                                        return colortype(d.type);
//                                                  })
                                                .style("stroke", "white")
                                                .style("stroke-width", 0); 
                
                                        barsvg.select( "circle[id='c"+index+"']")
                                                .style("stroke-width", 0.0066553*heightBar)
                
                                        barsvg.select( "text[id='t"+index+"']")
                                                .style("fill", "black");
                        
                                        barsvg.select( "text[id='txt"+index+"']")
                                                .style("fill", "black").style("font-size", "1.3vw");
    
                                    }
                                        
                                        
                
                })					 
              
                .on("click", function(d){
                     if(deOrder(typevalTmp) !=undefined)
                        typevalTmp = deOrder(typevalTmp);
                  var index;
                 
                  for(var i=0;i<typevalTmp.length;i++){
                  
                    if(typevalTmp[i].type==d.type)
                         index = i;
                    }
                     
                    if(index!=undefined && index!=null){
                      
                        var newData = typevalTmp.slice(0, index).concat(typevalTmp.slice(index + 1, typevalTmp.length));
                    

					xbar.domain([0, d3.max(newData, function(d){ return d.val; })])
                    ybar.domain(d3.range(newData.length));

                    
                   
                            

 
                                        
                                        
        
                                    barsvg
                                    .transition().ease(d3.easeBack)    		
                                    .duration(700)
                                    .on("start", function(){
                                        d3.select("#tooltip").classed("hidden", true);
                                        d3.select("#barchart").classed("unclickable", true);
                                        barsvg.selectAll(".grid").remove();
                                        barsvg.select( "rect[id='r"+index+"']")
//                                            .attr("y",  y.bandwidth())		
                                            .remove();
                
                                        barsvg.select( "circle[id='c"+index+"']")
                
                                //                .attr("x", width)
                                                .remove();
                
                                        barsvg.select( "text[id='t"+index+"']")
    
                                    //      		.attr("x", width)
                                                .remove();
                                        
                                        barsvg.select( "text[id='txt"+index+"']")
    
                                    //      		.attr("x", width)
                                                .remove(); 
                                        
                                    })
                                    .on("end", function(){
                                         
                                        d3.select("#barchart").classed("unclickable", false);
                                          barsvg.append("g")
                                          .attr("class", "grid")
                                            .transition()
				                            .duration(700)
                                          .call(d3.axisLeft().scale(ybar)
                                                              .tickSize(-widthBar -0.033333333*widthBar)
                                                              .tickFormat("")
                                          );
                                      

                   
			
                                         // add the x Axis
                                         barsvg.selectAll("#xAxisRect")
                                                          .attr("transform", "translate(0," + heightBar + ")") .transition()
				                                            .duration(700)
                                                          .call(d3.axisBottom(xbar));

                                                      // add the y Axis
                                         barsvg.selectAll("#yAxisRect").transition()
				                                            .duration(700)
                                                          .call(d3.axisLeft(ybar));
                                        
                                        
                                        
                                             barsvg.selectAll("rect")
                                                    .data(newData).attr("id", function(d, i){
                                                               
                                                                return "r"+i;
                                                    }).transition().duration(700)  
                                                  .attr("width", function(d) {return xbar(d.val); } )
                                                  .attr("y", function(d, i) { 
                                                        
                                                         return ybar(i); 
                                                     })
                                                  .attr("height", ybar.bandwidth())
                                                   
                                                  .attr("fill", function(d){
                                                        return colortype(d.type);
                                                  }); 
                
                
                
                                            barsvg.selectAll("circle")
                                                     .data(newData).attr("id", function(d, i){
                                                                    return "c"+i;
                                                        }).transition().duration(700)
                                                        .attr("cx", function(d, i) { 
                                                            return widthBar +0.044444444*widthBar;
                                                        })
                                                        .attr("cy",function(d, i) { 
                                                            if(newData.length>=10){
                                                                        //8
                                                                    return ybar(i)+0.017777778*heightBar;
                                                                
                                                            }
                                                            else if(newData.length>5){
                                                                //12
                                                                return ybar(i)+0.026666667*heightBar; 
                                                            } else if(newData.length==5){
                                                                        //22
                                                                return ybar(i)+0.048888889*heightBar;     
                                                           
                                                            }else if(newData.length==4){
                                                                //32
                                                                return ybar(i)+0.071111111*heightBar;     
                                                            }else if(newData.length==3){
                                                                        //52
                                                                 return ybar(i)+0.115555556*heightBar; 
                                                            }else if(newData.length==2){
                                                                //72
                                                                 return ybar(i)+0.16*heightBar; 
                                                            }
                                                        })
                                                        .attr("r", 0.026666667*heightBar)
                                                        .attr("stroke", "red").attr("stroke-width", 0.0066553*heightBar)  //3
                                                        .attr("fill", "white")
                                                        ;
    
                                            barsvg.selectAll(".remtxt")

                                                        .data(newData)
                                                        .attr("id", function(d, i){
                                                                    return "t"+i;
                                                        }).transition().duration(700)
                                                         
//                                                        .text("X")
                                                        .attr("x",function(d, i) { 

                                                            return widthBar +0.044444444*widthBar -0.007777778*widthBar;
                                                        })
                                                        .attr("y",function(d, i) { 
//                                                            
                                                            if(newData.length>=10){
                                                           
                                                              //15
                                                                    return ybar(i)+0.033333333*heightBar;
                                                               
                                                               
                                                            }
                                                            else if(newData.length>5){
                                                                //19
                                                                return ybar(i)+0.042222222*heightBar;
                                                            } else if(newData.length==5){
                                                                //29
                                                                return ybar(i)+0.064444444*heightBar;
                                                           
                                                            }else if(newData.length==4){
                                                                  //39
                                                                return ybar(i)+0.086666667*heightBar;
                                                            }else if(newData.length==3){
                                                                   //59
                                                                return ybar(i)+0.131111111*heightBar;
                                                            }else if(newData.length==2){
                                                                  //79
                                                                return ybar(i)+0.175555556*heightBar;
                                                            }

                                                        })
                                                        .attr("font-size", "1.3vw")
                                                        .attr("font-weight", "bold")

                                                      
                                                    ;
                                         barsvg.selectAll(".txtdel")
                                                    .data(newData)
                                                        .attr("id", function(d, i){
                                                                    return "txt"+i;
                                                        }).transition().duration(700)
                                                         
//                                                        .text("X")
                                                        .attr("x",function(d, i) { 

                                                            return widthBar +0.044444444*widthBar+0.022222222*widthBar;
                                                        })
                                                         .attr("y",function(d, i) { 
//                                                            
                                                            if(newData.length>=10){
                                                           
                                                              //15
                                                                    return ybar(i)+0.033333333*heightBar;
                                                               
                                                               
                                                            }
                                                            else if(newData.length>5){
                                                                //19
                                                                return ybar(i)+0.042222222*heightBar;
                                                            } else if(newData.length==5){
                                                                //29
                                                                return ybar(i)+0.064444444*heightBar;
                                                           
                                                            }else if(newData.length==4){
                                                                  //39
                                                                return ybar(i)+0.086666667*heightBar;
                                                            }else if(newData.length==3){
                                                                   //59
                                                                return ybar(i)+0.131111111*heightBar;
                                                            }else if(newData.length==2){
                                                                  //79
                                                                return ybar(i)+0.175555556*heightBar;
                                                            }

                                                        })
                                                        .attr("font-size", "1.3vw")
                                                        .attr("font-weight", "bold")

                                                      
                                                    ;
        
                
                                    })
            						; 
              
                
           
            
                    typevalTmp=newData;
                }
                });
        
        
        
        
    }
    
    barchar();
    
    
    resetbars.addEventListener('click', () => {
         
         d3.select("#barchart").selectAll("svg").remove();
         
         var barsvg = d3.select("#barchart").append("svg")
    .attr("viewBox","0 0 "+(widthBar + margin.left + margin.right +0.155555556*widthBar)+" " +(heightBar + margin.top + margin.bottom))
//    .attr("width", widthBar + margin.left + margin.right +0.155555556*widthBar)
//    .attr("height", heightBar + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
        
        
             
          typevalTmp = tmpTypeval;
          typevalTmp = deOrder(typevalTmp);
          // Scale the range of the data in the domains
          xbar.domain([0, d3.max(typevalTmp, function(d){ return d.val; })])
          ybar.domain(d3.range(typevalTmp.length));
      
          function barchar(){
       
         barsvg.selectAll("circle")
                             .data(typevalTmp)
                             .attr("class", "remove")
                             
                             .enter()
                             
                             .append("circle")
                                .attr("id", function(d, i){
                                         
                                            return "c"+i;
                                })
                                .transition("moverect")

                                  .delay(function(d, i){
                                           return 1200;
                                 })
                                  .ease(d3.easeCircle)
                                  .duration(500)
                                .attr("cx", function(d, i) { 
                                    return widthBar +0.044444444*widthBar;
                                })
                                .attr("cy",function(d, i) { 

                                    return ybar(i)+0.017777778*heightBar; })
                                .attr("r", 0.026666667*heightBar)
                                .on("start", function(){
                                        barsvg.selectAll("circle")
                                             .attr("stroke", "white").attr("stroke-width", 0);   
                                })
                                .on("end", function(){
                                        barsvg.selectAll("circle")
                                              .attr("stroke", "red").attr("stroke-width", 0.0066553*heightBar);  //3  
                                })
                                .attr("fill", "white")
                                ;
    
                    var txt = barsvg.selectAll("text")
                                
                                .data(typevalTmp).enter()
                                .append("text")
                                .attr("class", "remtxt")
                                .attr("id", function(d, i){
                                            return "t"+i;
                                })
                                ;
                                txt.transition("moverect")

                                  .delay(function(d, i){
                                           return 1200;
                                 })
                                  .ease(d3.easeCircle)
                                  .duration(500)
                                 .on("start", function(d ,i){
                                    txt.attr("font-size", "0px")
                                    ;
                                    d3.select("#barchart").classed("unclickable", true);
                                })
    
                                 .on("end", function(d ,i){
                                    d3.select("#barchart").classed("unclickable", false);
                                    txt.text("X").attr("font-size", "1.3vw")
                                .attr("font-weight", "bold").append("title")
                                .text("click to delete this bar");
                                })
                               
                                .attr("x",function(d, i) { 
         
                                    //40-7
                                    return widthBar +0.044444444*widthBar -0.007777778*widthBar;
                                })
                                .attr("y",function(d, i) { 
//                                +15
                                    return ybar(i)+0.033333333*heightBar; })
                                ;
        
        
                       var txt2 = barsvg.selectAll(".txtdel")
                                
                                .data(typevalTmp).enter()
                                .append("text")
                                .attr("class", "txtdel")
                                .attr("id", function(d, i){
                                            return "txt"+i;
                                })
                                ;
                                txt2.transition("movet")

                                  .delay(function(d, i){
                                           return 1200;
                                 })
                                  .ease(d3.easeCircle)
                                  .duration(500)
                                 .on("start", function(d ,i){
                                    txt2.attr("font-size", "0px")
                                    ;
                                    d3.select("#barchart").classed("unclickable", true);
                                })
    
                                 .on("end", function(d ,i){
                                    d3.select("#barchart").classed("unclickable", false);
                                    txt2.text("delete").attr("font-size", "1.3vw")
                                .attr("font-weight", "bold").append("title")
                                .text("click to delete this bar");
                                })
                               
                                .attr("x",function(d, i) { 
//40+20
                                    return widthBar +0.044444444*widthBar +0.022222222*widthBar;
                                })
                                .attr("y",function(d, i) { 
//15
                                    return ybar(i)+0.033333333*heightBar; })
                                ;
    
    
                        


                      // append the rectangles for the bar chart
                      barsvg.selectAll("rect")
                          .data(typevalTmp)
                        .enter().append("rect") .transition("moverect")

                          .delay(function(d, i){
                                   return i*120;
                         })
                          .ease(d3.easeCircle)
                          .duration(500)

                          .on("end", function(){


                                 barsvg.append("g")
                              .attr("class", "grid")
                              .call(d3.axisLeft().scale(ybar)
                                                  .tickSize(-widthBar -0.033333333*widthBar)
                                                  .tickFormat("")
                              );
                            })
                          .attr("class", "bar").attr("id", function(d, i){
                                    return "r"+i;
                        })

                          //.attr("x", function(d) { return x(d.sales); })
                          .attr("width", function(d) {return xbar(d.val); } )
                          .attr("y", function(d, i) { return ybar(i); })
                          .attr("height", ybar.bandwidth())
                          .attr("fill", "blue")
                            .attr("fill", function(d){

                                return colortype(d.type);
                            })
                            ;
                    
                      barsvg.selectAll("rect").data(typevalTmp)
                              .on("mouseover", function(d) {

                          
                            //Get this bar's x/y values, then augment for the tooltip
                            d3.select(this)
                                    .style("stroke", "orange").style("stroke-width", 0.019965899*heightBar)
                                    .transition("coloron")
                                    .duration(1000)
                                    ;

//                            var vrz = 730.13;
//                                var vrz=-100;
                          var xPosition = (widthBar / 2);
//                            var xPosition = parseFloat(d3.select(this).attr("x")) + (widthBar / 2);
//                            var yPosition = parseFloat(d3.select(this).attr("y")) + ybar.bandwidth()  + ydistBars;
                          
                                var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

//                            console.log(offset);
                            var yPosition = parseFloat(offset-maplegendaheight);
                                        
                          

                            //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text(correct(d.type) +" : "+d.val+"%")
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);

                       })
                       .on("mouseout", function() {
                             d3.select(this)
                                    .style("stroke", "black").style("stroke-width", 0)
                                    
                                    .transition("coloroff")
                                    .duration(1000);
                            //Hide the tooltip
                            d3.select("#tooltip").classed("hidden", true);

                       });
                        

                          // add the x Axis
                      barsvg.append("g").attr("id", "xAxisRect")
                          .attr("transform", "translate(0," + heightBar + ")")
                          .call(d3.axisBottom(xbar));

                      // add the y Axis
                      barsvg.append("g").attr("id", "yAxisRect")
                          .call(d3.axisLeft(ybar));
        
                
                barsvg.selectAll("text")
        
        
                .on("mouseover", function(d){
                    
                  var index;
                    if(deOrder(typevalTmp) !=undefined)
                        typevalTmp = deOrder(typevalTmp);
                  for(var i=0;i<typevalTmp.length;i++){
                  
                    if(typevalTmp[i].type==d.type)
                         index = i;
                    }
                     
                    if(index!=undefined && index!=null){
                      

                                        barsvg.select( "rect[id='r"+index+"']")
//                                                .style("fill", "red")
                                                .style("stroke", "red")
                                                .style("stroke-width", 0.022184333*heightBar);
                
                                        barsvg.select( "circle[id='c"+index+"']")
                                                .style("stroke-width", 0.011092166*heightBar);
                
                                        barsvg.select( "text[id='t"+index+"']")
                                                .style("fill", "red");
                        
                                        barsvg.select( "text[id='txt"+index+"']")
                                                .style("fill", "red").style("font-size", "1.4vw");
                        
                        
                        
                          var xPosition = (widthBar / 2)+0.388888889*widthBar;
//                            var xPosition = parseFloat(d3.select(this).attr("x")) + (widthBar / 2);
//                            var yPosition = parseFloat(d3.select(this).attr("y")) + ybar.bandwidth()  + ydistBars;
                        
                                var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

//                            console.log(offset);
                            var yPosition = parseFloat(offset-maplegendaheight);
                                        
                        
                        

                            //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text(correct(typevalTmp[index].type) +" : "+typevalTmp[index].val+"%")
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);
                        
                        
                        
                        
    
                                    }
                    
                    
                                    
                                        
                                        
                
                })
                .on("mouseout", function(d){
                     if(deOrder(typevalTmp) !=undefined)
                        typevalTmp = deOrder(typevalTmp);
                    d3.select("#tooltip").classed("hidden", true);
//                       console.log(typevalTmp)
                  var index;
                  
                    
                  for(var i=0;i<typevalTmp.length;i++){
                  
                    if(typevalTmp[i].type==d.type)
                         index = i;
                    }
                     
                    if(index!=undefined && index!=null){
                      

                                        barsvg.select( "rect[id='r"+index+"']")
//                                                .style("fill", function(d){
//                                                        return colortype(d.type);
//                                                  })
                                                .style("stroke", "white")
                                                .style("stroke-width", 0); 
                
                                        barsvg.select( "circle[id='c"+index+"']")
                                                .style("stroke-width", 0.0066553*heightBar)
                
                                        barsvg.select( "text[id='t"+index+"']")
                                                .style("fill", "black");
                        
                                        barsvg.select( "text[id='txt"+index+"']")
                                                .style("fill", "black").style("font-size", "1.3vw");
    
                                    }
                                        
                                        
                
                })					 
              
                .on("click", function(d){
                     if(deOrder(typevalTmp) !=undefined)
                        typevalTmp = deOrder(typevalTmp);
                  var index;
                 
                  for(var i=0;i<typevalTmp.length;i++){
                  
                    if(typevalTmp[i].type==d.type)
                         index = i;
                    }
                     
                    if(index!=undefined && index!=null){
                      
                        var newData = typevalTmp.slice(0, index).concat(typevalTmp.slice(index + 1, typevalTmp.length));
                    

					xbar.domain([0, d3.max(newData, function(d){ return d.val; })])
                    ybar.domain(d3.range(newData.length));

                    
                   
                            

 
                                        
                                        
        
                                    barsvg
                                    .transition().ease(d3.easeBack)    		
                                    .duration(700)
                                    .on("start", function(){
                                        d3.select("#tooltip").classed("hidden", true);
                                        d3.select("#barchart").classed("unclickable", true);
                                        barsvg.selectAll(".grid").remove();
                                        barsvg.select( "rect[id='r"+index+"']")
//                                            .attr("y",  y.bandwidth())		
                                            .remove();
                
                                        barsvg.select( "circle[id='c"+index+"']")
                
                                //                .attr("x", width)
                                                .remove();
                
                                        barsvg.select( "text[id='t"+index+"']")
    
                                    //      		.attr("x", width)
                                                .remove();
                                        
                                        barsvg.select( "text[id='txt"+index+"']")
    
                                    //      		.attr("x", width)
                                                .remove(); 
                                        
                                    })
                                    .on("end", function(){
                                         
                                        d3.select("#barchart").classed("unclickable", false);
                                          barsvg.append("g")
                                          .attr("class", "grid")
                                            .transition()
				                            .duration(700)
                                          .call(d3.axisLeft().scale(ybar)
                                                              .tickSize(-widthBar -0.033333333*widthBar)
                                                              .tickFormat("")
                                          );
                                      

                   
			
                                         // add the x Axis
                                         barsvg.selectAll("#xAxisRect")
                                                          .attr("transform", "translate(0," + heightBar + ")") .transition()
				                                            .duration(700)
                                                          .call(d3.axisBottom(xbar));

                                                      // add the y Axis
                                         barsvg.selectAll("#yAxisRect").transition()
				                                            .duration(700)
                                                          .call(d3.axisLeft(ybar));
                                        
                                        
                                        
                                             barsvg.selectAll("rect")
                                                    .data(newData).attr("id", function(d, i){
                                                               
                                                                return "r"+i;
                                                    }).transition().duration(700)  
                                                  .attr("width", function(d) {return xbar(d.val); } )
                                                  .attr("y", function(d, i) { 
                                                        
                                                         return ybar(i); 
                                                     })
                                                  .attr("height", ybar.bandwidth())
                                                   
                                                  .attr("fill", function(d){
                                                        return colortype(d.type);
                                                  }); 
                
                
                
                                            barsvg.selectAll("circle")
                                                     .data(newData).attr("id", function(d, i){
                                                                    return "c"+i;
                                                        }).transition().duration(700)
                                                        .attr("cx", function(d, i) { 
                                                            return widthBar +0.044444444*widthBar;
                                                        })
                                                        .attr("cy",function(d, i) { 
                                                            if(newData.length>=10){
                                                                        //8
                                                                    return ybar(i)+0.017777778*heightBar;
                                                                
                                                            }
                                                            else if(newData.length>5){
                                                                //12
                                                                return ybar(i)+0.026666667*heightBar; 
                                                            } else if(newData.length==5){
                                                                        //22
                                                                return ybar(i)+0.048888889*heightBar;     
                                                           
                                                            }else if(newData.length==4){
                                                                //32
                                                                return ybar(i)+0.071111111*heightBar;     
                                                            }else if(newData.length==3){
                                                                        //52
                                                                 return ybar(i)+0.115555556*heightBar; 
                                                            }else if(newData.length==2){
                                                                //72
                                                                 return ybar(i)+0.16*heightBar; 
                                                            }
                                                        })
                                                        .attr("r", 0.026666667*heightBar)
                                                         .attr("stroke", "red").attr("stroke-width", 0.0066553*heightBar)  //3
                                                        .attr("fill", "white")
                                                        ;
    
                                            barsvg.selectAll(".remtxt")

                                                        .data(newData)
                                                        .attr("id", function(d, i){
                                                                    return "t"+i;
                                                        }).transition().duration(700)
                                                         
//                                                        .text("X")
                                                        .attr("x",function(d, i) { 

                                                            return widthBar +0.044444444*widthBar -0.007777778*widthBar;
                                                        })
                                                        .attr("y",function(d, i) { 
//                                                            
                                                            if(newData.length>=10){
                                                           
                                                              //15
                                                                    return ybar(i)+0.033333333*heightBar;
                                                               
                                                               
                                                            }
                                                            else if(newData.length>5){
                                                                //19
                                                                return ybar(i)+0.042222222*heightBar;
                                                            } else if(newData.length==5){
                                                                //29
                                                                return ybar(i)+0.064444444*heightBar;
                                                           
                                                            }else if(newData.length==4){
                                                                  //39
                                                                return ybar(i)+0.086666667*heightBar;
                                                            }else if(newData.length==3){
                                                                   //59
                                                                return ybar(i)+0.131111111*heightBar;
                                                            }else if(newData.length==2){
                                                                  //79
                                                                return ybar(i)+0.175555556*heightBar;
                                                            }

                                                        })
                                                        .attr("font-size", "1.3vw")
                                                        .attr("font-weight", "bold")

                                                      
                                                    ;
                                         barsvg.selectAll(".txtdel")
                                                    .data(newData)
                                                        .attr("id", function(d, i){
                                                                    return "txt"+i;
                                                        }).transition().duration(700)
                                                         
//                                                        .text("X")
                                                        .attr("x",function(d, i) { 

                                                            return widthBar +0.044444444*widthBar+0.022222222*widthBar;
                                                        })
                                                         .attr("y",function(d, i) { 
//                                                            
                                                            if(newData.length>=10){
                                                           
                                                              //15
                                                                    return ybar(i)+0.033333333*heightBar;
                                                               
                                                               
                                                            }
                                                            else if(newData.length>5){
                                                                //19
                                                                return ybar(i)+0.042222222*heightBar;
                                                            } else if(newData.length==5){
                                                                //29
                                                                return ybar(i)+0.064444444*heightBar;
                                                           
                                                            }else if(newData.length==4){
                                                                  //39
                                                                return ybar(i)+0.086666667*heightBar;
                                                            }else if(newData.length==3){
                                                                   //59
                                                                return ybar(i)+0.131111111*heightBar;
                                                            }else if(newData.length==2){
                                                                  //79
                                                                return ybar(i)+0.175555556*heightBar;
                                                            }

                                                        })
                                                        .attr("font-size", "1.3vw")
                                                        .attr("font-weight", "bold")

                                                      
                                                    ;
        
                
                                    })
            						; 
              
                
           
            
                    typevalTmp=newData;
                }
                });
        
        
        
        
    }
        
        
         barchar();
     });                    
         


                        var pie = d3.pie()
                                    .value(function(d) {

                                        return d.val; });

                 

                    var podio =function(d){ 


                            if(relatedCities != []){
                                relatedCities.splice(0,relatedCities.length);
                            }
                             d3.select("#podium").selectAll("svg").remove(); 

                           if(d!="cindex"){
                            var ttypetmp=d.data.type;
                            var ttvaltmp=d.data.val;
                           }else{

                                var ttypetmp="cindex";
                                var ttvaltmp=0;
                           }
                    for(i=0;i<dataset.length;i++){


                        if(cc == country && dataset[i]["Country"] == cc && dataset[i]["City"] != ""){

                              relatedCities.push(
                                                    {
                                                    country:dataset[i]["Country"],
                                                    city: dataset[i]["City"],
                                                    val: dataset[i][ttypetmp],
                                                    type : ttypetmp
                                                    }
                                            ); 

                        }else if( dataset[i]["Country"] == country && dataset[i]["City"] != "" ){

                                 relatedCities.push(
                                                {
                                                country:dataset[i]["Country"],
                                                city: dataset[i]["City"],
                                                val: dataset[i][ttypetmp],
                                                type : ttypetmp
                                                }
                                        ); 

                        }
                    }    
//                             console.log(relatedCities) 
                        if(relatedCities.length >= 3){ 
                             document.getElementById('legendabar').title = 'click a text/rect to change the podium';

                            d3.select("#podiumContainer").classed("hidden", false);   
                     }else{
                          document.getElementById('legendabar').title = '';
                         document.getElementById("titlepodiump").innerHTML="";
                     }
                            var podium = new Array();  
                                    if(relatedCities.length>=3){
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
    //                                console.log(podium)
                        
                                       var wpodium = $("#podiumContainer").width();
//                                       console.log(wpodium)
                        
                                       var hpodium=0.604138348*wpodium; 
                        
                                       var paddingp=0.2*hpodium;
                     
                        
                        
if(podium.length!=0){

    
       
    
    
    
    
        var xScaleC = d3.scaleBand()
                        .domain(d3.range(podium.length))//range generate array of sequential numbers
                        .rangeRound([0, wpodium])
                        .paddingInner(0.05);

    
        var yScaleC = d3.scaleLinear()
                        .domain([0, d3.max(podium, function(d){

                                                        return d.val;
                        })])
                        .range([0+paddingp, hpodium-paddingp]);



                                                    //Create SVG element
        var pod = d3.select("body")
                    .select("#podium")
                    .append("svg")
                    .attr("viewBox","0 0 "+(wpodium-(0.06035003*wpodium))+" " +hpodium);
//-(0.06035003*wpodium)
        document.getElementById("titlepodiump").innerHTML="Top 3 in "+relatedCities[0]["country"]
                                            +" for : "+correct(relatedCities[0]["type"]);
                                         
                                         
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
                                             d3.select("#legendabar").classed("unclickable", true);
                                             
                                            
                                            })
                                         .on("end", function(d, i) {
                                        
                                                 d3.select("#legendabar").classed("unclickable", false);

                                         })	
                                       .attr("y", function(d) {
    //                                    console.log(yScale(d.val))
                                            return hpodium - yScaleC(d.val);
                                       })
                                         //230
                                       .attr("width", 0.255555556*wpodium)
                                       .attr("height", function(d) {
                                        
                                            return yScaleC(d.val);
                                       })
                                       .attr("fill", function(d){
                                        if(ttypetmp=="cindex"){
                                            return "#CACFD2";
                                        }else{
                                        return colortype(ttypetmp);}
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
                                                return xScaleC(i) + (0.127777778*wpodium);
                                           })
                                            .attr("y", function(d) {
                                            var perc = yScaleC(d.val)/5;//80
                                            return hpodium - (yScaleC(d.val)-perc) ;
                                            })
                                           .attr("font-family", "sans-serif")
                                           .attr("font-size", "3vw")
                                           .attr("fill", function(){
                                       
                                                if(correct(ttypetmp)!="Worries attacked" && correct(ttypetmp)!="Worries being insulted"&& correct(ttypetmp)!="Worries attacked cause of your skin color, ethnic origin, gender or religion"){
                                                    return "white";
                                                }else{
                                                    return "black";
                                                }
                                            });


                                     pod.append("text").text(function(d, i) {
                                               return d.city;

                                           })
                                           .attr("text-anchor", "middle")
                                           .attr("x", function(d, i) {
                                                return xScaleC(i) + (0.127777778*wpodium);
                                           })
                                            .attr("y", function(d) {

                                            return hpodium - (yScaleC(d.val))- (0.02*hpodium) ;
                                            })
                                           .attr("font-family", "sans-serif")
                                           .attr("font-size", "1.4vw")
                                           .attr("fill", "black");

                                     pod.append("text").text(function(d, i) {

                                               return d.val+"%";

                                           })
                                           .attr("text-anchor", "middle")
                                           .attr("x", function(d, i) {
                                                return xScaleC(i) + (0.127777778*wpodium);
                                           })
                                            .attr("y", function(d) {
                                                 var perc = yScaleC(d.val)/2;
                                                return hpodium - (yScaleC(d.val)-perc);
                                            })
                                           .attr("font-family", "sans-serif")
                                           .attr("font-size", "1.6vw")
                                            .attr("fill", function(){
                                       
                                                if(correct(ttypetmp)!="Worries attacked" && correct(ttypetmp)!="Worries being insulted"&& correct(ttypetmp)!="Worries attacked cause of your skin color, ethnic origin, gender or religion"){
                                                    return "white";
                                                }else{
                                                    return "black";
                                                }
                                            });

                                }

                };   

                        var wLegenda=$("#legendabar").width();
                   
                        var hLegenda=wLegenda*0.604138348;
                       
                        var lgnd = d3.select("body")
                                        .select("#legendabar")
                                        .append("svg")
                                        .attr("viewBox","0 0 "+wLegenda+" " +hLegenda);
//                                        .attr("width", wLegenda)
//                                        .attr("height", hLegenda);

                      
                        
                        var legends=lgnd.append("g")
                                            .selectAll(".legends").data(pie(tmpTypeval));

                        var legend = legends.enter().append("g").classed("legends", true)
                                            .attr("transform", function(d, i){
                                                //33
                                                return "translate(0,"+( i)*(0.066*hLegenda)+ ")";
                                            });

                        //30
                        legend.append("rect").attr("width", 0.06*hLegenda)
                                             .attr("height", 0.06*hLegenda)
                                             .attr("fill", function(d, i){
                                                   
                                                  return colortype(d.data.type);
                                              })
                                           
                                             .on("click", function(d){podio(d);})
                                            ;


                        legend.append("text").text(function(d){
                                                return correct(d.data.type);
                                            })

                                             .attr("x", 0.06*hLegenda)
                                             .attr("y", 0.06*hLegenda)

                                          
                                            .on("click", function(d){podio(d);})
                                            ;

                                    podio("cindex");

                                
                        }
                }
                
                else if(verifyCompare){
                    
                    
                    
                    hiddenElem(true);
                    if((cc==undefined || cc=="")&&(ccc==undefined || ccc=="")){
                        d3.select("#linechart").classed("hidden", true);
                        d3.select("#containerPie").classed("hidden", true);
                        document.getElementById("legenda").style.border = "0px solid #4CAF50";
                         d3.select("#legenda").classed("hidden", true);
                    }else{
                      d3.select("#legenda").classed("hidden", false);    
                     d3.select("#containerPie").classed("hidden", false);
                     document.getElementById("legenda").style.border = "10px solid #4CAF50"; 
                 
                        d3.select("#linechart").classed("hidden", false);
                    }
                    if( (cc==undefined || cc=="")||(ccc==undefined || ccc=="") ){
                        d3.select("#containerPie").classed("hidden", true);
                        document.getElementById("legenda").style.border = "0px solid #4CAF50";
                         d3.select("#legenda").classed("hidden", true);
                    }
                    
                    if(ccc!=undefined && ccc!="")
                        hiddenElemCompare2(false);
                    if(cc==undefined || cc==""){
                         document.getElementById("info2").style.marginLeft = "9%";
                         document.getElementById("info2").style.marginRight = "50%";
                    }else{
                        hiddenElemCompare1(false);
                         document.getElementById("info2").style.marginLeft = "1%";
                         document.getElementById("info2").style.marginRight = "9%";
                    }
                    var contributors1, update1, contributors2, update2;
                    var check =false;
                    
                    d3.select("#linechart").select("svg").remove();
                    d3.select("#barchart").select("svg").remove();
                     d3.select("#doublebar").select("svg").remove();
                    d3.select("#posneg").select("svg").remove();
                    d3.select("#legenda").select("svg").remove();
                     d3.select("#legendabar").select("svg").remove();
                    d3.select("#podium").select("svg").remove(); 
                    
    
                    
                    var typeval2 = [];
                   
                    var cindex1, sindex1, str, cindex2, sindex2, country1, city1, country2, city2, selectedCC;
                   var checkselect = 1;
    //               console.log(typeval)
                    if(typeval != []){
                        typeval.splice(0,typeval.length);
                    }
                    if(typeval2 != []){
                        typeval2.splice(0,typeval2.length);
                    }
//                     console.log(dataset)
                    for(i=0;i<dataset.length ;i++){ 
                        
                        citytmp=dataset[i]["City"];
                        countrytmp=dataset[i]["Country"];

                        str = citytmp + ", " +countrytmp;
                        if(dataset[i]["selected"]==1){
//                            console.log(checkselect)
                            checkselect = 0;
                            
                        }

                        if(((countrytmp==cc && citytmp=="") || str==cc)){

                            if(checkselect == 0){
                                selectedCC = "typeval";     
                            }

                            country1=countrytmp;
                            city1=citytmp;
                            contributors1=dataset[i]["Contributors"];
                            update1=dataset[i]["Update"];
                            dataset[i]["selected"]=1;

                            for(j=0;j<types.length;j++){
                                cindex1 = dataset[i]["cindex"];
                                sindex1 = dataset[i]["sindex"];
                                typeval.push(
                                    {
                                    type:types[j],
                                    val: dataset[i][types[j]]     
                                    }
                                );

                            }

                        } 
                        else if(((countrytmp==ccc && citytmp=="") || str==ccc) && (ccc!=undefined && ccc!="")){

                            if(checkselect == 0){
                                selectedCC = "typeval2";
                            }

                            country2=countrytmp;
                            city2=citytmp;
                            contributors2=dataset[i]["Contributors"];
                            update2=dataset[i]["Update"];
                            dataset[i]["selected"]=1;

                            for(j=0;j<types.length;j++){
                                cindex2 = dataset[i]["cindex"];
                                sindex2 = dataset[i]["sindex"];
                                typeval2.push(
                                    {
                                    type:types[j],
                                    val: dataset[i][types[j]]     
                                    }
                                );

                            }

                        }
                        else{
                            dataset[i]["selected"]=0;
                            
                        }
                        checkselect = checkselect + 1 ;

                    }

                     var resultData=dataset;  
                   
                    var checkorder = true;
                     if(typeval.length == 0 ){
//                       console.log("1")
                        hiddenElemCompare1(true);
                         
//                        d3.select("#pie").classed("hidden", true);
//                         d3.select("#legenda").classed("hidden", true);
//                        document.getElementById("legenda").style.border = "0px solid #4CAF50";
                     }
                    else{
                         checkorder=false;
//                       console.log(typeval.length)
                         hiddenElemCompare1(false);
//                          d3.select("#legenda").classed("hidden", false);
//                         d3.select("#pie").classed("hidden", false);
//                         document.getElementById("legenda").style.border = "10px solid #4CAF50";
                     }
                    
//                    if(checkorder){
                        
                    
                        if(typeval2.length == 0){
    //                        console.log("3")
                            hiddenElemCompare2(true);

//                            d3.select("#pie").classed("hidden", true);
//                            d3.select("#legenda").classed("hidden", true);
//                            document.getElementById("legenda").style.border = "0px solid #4CAF50";
                        }else{
    //                        console.log("4")
                            hiddenElemCompare2(false);
//                             d3.select("#legenda").classed("hidden", false);
//                             d3.select("#pie").classed("hidden", false);
//                             document.getElementById("legenda").style.border = "10px solid #4CAF50";
                        }
                    
//                    }

                    if(cc!=undefined && cc!=""){
                        document.getElementById("cname1").innerHTML = cc;
                        
                        if(contributors1 <= 33){
                            document.getElementById("contributors1").style.color = "red";
                            document.getElementById("contributors1").style.fontSize = "1.3vw";
                            document.getElementById("contributors1").style.fontWeight = "bold";
                        }else{
                            document.getElementById("contributors1").style.color = "black";
                            document.getElementById("contributors1").style.fontSize = "1.1vw";
                            document.getElementById("contributors1").style.fontWeight = "normal";
                        }
                        
                        document.getElementById("contributors1").innerHTML = "Contributors = "+contributors1;
                        document.getElementById("update1").innerHTML = "Last update = "+update1; 
                        document.getElementById("cindex1").innerHTML = "Crime Index = "+cindex1+" % "; 
                        document.getElementById("sindex1").innerHTML = "Safety Index = "+sindex1+" % ";
                        
                    }
                    
                    if(ccc!=undefined && ccc!=""){
                         document.getElementById("cname2").innerHTML = ccc;
                        
                        if(contributors2 <= 33){
                            document.getElementById("contributors2").style.color = "red";
                            document.getElementById("contributors2").style.fontSize = "1.3vw";
                            document.getElementById("contributors2").style.fontWeight = "bold";
                        }else{
                            document.getElementById("contributors2").style.color = "black";
                            document.getElementById("contributors2").style.fontSize = "1.1vw";
                            document.getElementById("contributors2").style.fontWeight = "normal";
                        }
                        document.getElementById("contributors2").innerHTML = "Contributors = "+contributors2;
                        document.getElementById("update2").innerHTML = "Last update = "+update2;
                         document.getElementById("cindex2").innerHTML = "Crime Index = "+cindex2+" % "; 
                        document.getElementById("sindex2").innerHTML = "Safety Index = "+sindex2+" % ";
                        
                        
                    }
                   
                  
                    
                    
                   if(contributors1==0){
                       
//                        d3.select("#pie").classed("hidden", true);
//                         document.getElementById("legenda").style.border = "0px solid #4CAF50"; 
//                       
                        hiddenElemCompare1(true);
                        
                        typeval.splice(0,typeval.length);  
                        d3.select("#info1").classed("hidden", false);
                       
                   }else if(contributors2==0){
                       
//                            d3.select("#pie").classed("hidden", true);
//                         document.getElementById("legenda").style.border = "0px solid #4CAF50"; 
//                       
                            hiddenElemCompare2(true);
                            typeval2.splice(0,typeval2.length);  
                            d3.select("#info2").classed("hidden", false);
                   }
//                    else{
//                       
//                       d3.select("#pie").classed("hidden", false);
//                         document.getElementById("legenda").style.border = "10px solid #4CAF50"; 
//                       
//                   }

                   

                    var lineCdata = [];
                  
                    var obj1, obj2;
                    for(var j=0;j<types.length;j++){
                        if(typeval.length != 0){

                            obj1 = {
                                    
                                    val: typeval[j]["val"],
                                    id: cc
                                    };
                            
                        }
                        
                        if(typeval2.length != 0){

                            obj2={ 
                                    val: typeval2[j]["val"],
                                    id: ccc
                            };
                            
                            
                        }
                        lineCdata.push({
                            type: types[j],
                            first:obj1,
                            second:obj2
                        })
  

                    }
                    
//                    console.log(lineCdata)
                    var wlinec = $("#linechart").innerWidth();
                    var paddingline = $("#linechart").css("padding-left");
                    paddingline = paddingline.split("px");
                    
                    
                    wlinec = wlinec-2*(paddingline[0]);
                    
                    var hlinec = wlinec * 0.660640028;
                    
                    
                    var margin = {top: 0.043450835*hlinec, right: 0.020019395*wlinec, bottom: 0.101385281*hlinec, left: 0.050048487*wlinec};
                    
                           
  
                    if(lineCdata[0].first != undefined && lineCdata[0].first != null && lineCdata[0].first != ""){
                        var firstmin = d3.min(lineCdata, function(d){
                                            return d.first.val ;
                        });
                        var firstmax = d3.max(lineCdata, function(d){
                                            return d.first.val ;
                        });
                    }else{
                        var firstmin = 100;
                        var firstmax = 0;
                    }
                    if(lineCdata[0].second != undefined && lineCdata[0].second != null && lineCdata[0].second != ""){
                    
                        var secondmin = d3.min(lineCdata, function(d){
                                            return d.second.val ;
                        }); 

                        var secondmax = d3.max(lineCdata, function(d){
                                            return d.second.val ;
                        });
                    } else {
                        var secondmax = 0;
                        var secondmin = 100;
                    }
                    var ymin,ymax ;
                    if(firstmin < secondmin){
                            ymin = firstmin;                
                    }else{
                        ymin = secondmin;
                    }
                    
                    if(firstmax < secondmax){
                            ymax = secondmax;                
                    }else{
                        ymax = firstmax;
                    }
                    
                    var xScaleLC = d3.scaleBand()
                                    .domain(d3.range(lineCdata.length))//range generate array of sequential numbers
                                    .rangeRound([0, wlinec- margin.left - margin.right]);
                    var yScaleLC = d3.scaleLinear()
                                    .domain([ymin, ymax])
                                //(hlinec-(0.130352505*hlinec)) h - space of text axis
                                    .range([(hlinec-(0.136363636*hlinec))- margin.top - margin.bottom, 0]);

                        //Define axes
                    
                        
                  
                    var xAxisLC = d3.axisBottom()
                               .scale(xScaleLC)
                               .ticks(15)
                               
                               .tickFormat(function(d,i){ return types[i] })
                                ;
                    
                 
                    //Define Y axis
                    var yAxisLC = d3.axisLeft()
                                
                               .scale(yScaleLC).ticks(10)
                               
                               ;

                    //Define line generator
				var line1 = d3.line()
							.defined(function(d, i) { 
//                                console.log(d)
                                
                                return d.first.val >= 0; 
                                
                                })
							.x(function(d, i) { 
                                //33
                                return xScaleLC(i)+(0.033032001*wlinec); 
                            })
							.y(function(d) { 
                               
                                return yScaleLC(d.first.val); });
			
                    
                var line2 = d3.line()
							.defined(function(d, i) { 

                                return d.second.val >= 0; })
							.x(function(d, i) { 
                                return xScaleLC(i)+(0.033032001*wlinec);
                            })
							.y(function(d) { 
                               
                                return yScaleLC(d.second.val); });
//			
				//Create SVG element
				var svgLC = d3.select("#linechart")
							.append("svg")
                            .attr("viewBox","0 0 "+wlinec+" " +(hlinec+(0.090909091*hlinec)) )
//							.attr("width", wlinec)
//							.attr("height", hlinec+(0.090909091*hlinec))     //60
                             .append("g")
                           .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
                    
                    svgLC.append("g")
                      .attr("class", "grid")
                      .call(d3.axisLeft().scale(yScaleLC).ticks(10)
                              .tickSize(-wlinec)
                              .tickFormat("")
                      );
                
                   svgLC.append("g")
                        .attr("class", "x axis")
                        .attr("transform", function(d){
                       
                            return "translate(0," + (hlinec-(0.136363636*hlinec)-(0.090909091*hlinec)) + ")";
                        })
                      .call(xAxisLC)
                      .selectAll("text")
                        .style("font-size", "0.9vw")
                        .style("text-anchor", "end")
                        .attr("dx", "-.8em")
                        .attr("dy", ".15em")
                        .attr("transform", "rotate(-65)");

                    

				//Create line
                
                if( lineCdata[0].first != undefined && lineCdata[0].first != null && lineCdata[0].first != "" ){
                    
                    

                    
                    
                        var path1 = svgLC.append("path")
                            .datum(lineCdata)
                            .attr("class", "line")
                            
                            .attr("d", line1)
                            .style("stroke", "blue");
                    
                   if(selectedCC != "typeval"){
                       
                        var totalLength = path1.node().getTotalLength();

                        path1.attr("stroke-dasharray", totalLength + " " + totalLength)
                          .attr("stroke-dashoffset", totalLength)
                          .transition()
                          .duration(2000)
                          .attr("stroke-dashoffset", 0);
                   }
                    
                        
                    
                    
                        var c1 = svgLC.selectAll("circle")
                             .data(lineCdata)
                             .attr("class", "circle1")
                             .enter()
                             
                             .append("circle")
                                .attr("cx", function(d, i) { 
                                    return xScaleLC(i)+(0.033032001*wlinec); 
                                })
                                .attr("cy",function(d) { 

                                    return yScaleLC(d.first.val); });
                    
                    if(selectedCC != "typeval"){
                        
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
                                                //10
                                    .attr("r", 0.015151515*hlinec);
                            })
                            
                            ;
                    }else{
                        c1.attr("r", 0.015151515*hlinec);
                        
                    }
                            c1.on("mouseover", function(d) {
                                var ttype = correct(d.type);
                                var fval = d.first.val;
                            //Get this bar's x/y values, then augment for the tooltip
                            d3.select(this)
                                    .attr("fill", "orange")
                                    .attr("r", 0.024242424*hlinec)//16
                                    .transition("coloron")
                                    .duration(1000)
                                    ;

                            var vrz = 130.13;

                            var xPosition = parseFloat(d3.select(this).attr("cx")) + (xScaleLC.bandwidth() / 2)+ vrz;
//                            var yPosition = parseFloat(d3.select(this).attr("cy")) / 2 +yLC;
                              
                                  var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

//                            console.log(offset);
                            var yPosition = parseFloat(offset-maplegendaheight);
                                        
                                
                                
                            path1.style("stroke-width", 0.026515152*hlinec ).transition("xw");
                                
                            //17.5
                            
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
                                    .attr("fill", "black").attr("r",  0.015151515*hlinec)
                                    .transition("coloroff")
                                    .duration(1000);
                            //Hide the tooltip     7.5
                                path1.style("stroke-width", 0.011363636*hlinec).transition("xw");
                            d3.select("#tooltip").classed("hidden", true);

                       })
                              .on("click", function(d){
                            
                            if((cc!=undefined && cc!="") && (ccc!=undefined && ccc!="")){
                                                    var ttype=d.type;
                                                    
                                                    datapie.splice(0,datapie.length); 
                                                for( var s=0;s<lineCdata.length;s++ ){
                                                    
                                                     
                                                      if( ttype == lineCdata[s].type ){
                                                          
                                                           if( lineCdata[0].first != undefined ){
                                                               
                                                                datapie.push({
                                                                    id:lineCdata[s].first.id,
                                                                    val:lineCdata[s].first.val
                                                                })
                                                               
                                                           }
                                                          
                                                            if( lineCdata[0].second != undefined ){
                                                               
                                                                datapie.push({
                                                                    id:lineCdata[s].second.id,
                                                                    val:lineCdata[s].second.val
                                                                })
                                                               
                                                           }
                                                            
                                                        }
                                                     
                                                 }
                            
                      
                                                    pieLC(datapie, correct(ttype));
                            }
                                            });
                        
                }
                if(lineCdata[0].second != undefined && lineCdata[0].second != null && lineCdata[0].second != "" ){
                       var path2 = svgLC.append("path")
                            .datum(lineCdata)
                            .attr("class", "line")
                           
                            .attr("d", line2)
                            .style("stroke", "red");
                    
                    
                    
                    if(selectedCC != "typeval2"){
                        
                     var totalLength = path2.node().getTotalLength();

                        path2.attr("stroke-dasharray", totalLength + " " + totalLength)
                          .attr("stroke-dashoffset", totalLength)
                          .transition()
                          .duration(2000)
                          .attr("stroke-dashoffset", 0);
                    }
                 
                    
                    
                        var c2 = svgLC.selectAll(".circle2")
                             .data(lineCdata).attr("class", "circle2")
                             .enter().append("circle")
                             .attr("cx", function(d, i) { 
                                return xScaleLC(i)+(0.033032001*wlinec);
                            })
                            .attr("cy",function(d) { 
                               
                                return yScaleLC(d.second.val); })

                            ;
                    
                    if(selectedCC != "typeval2"){
                    
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
 
                                    .attr("r", 0.015151515*hlinec);//10
                            })
                            ;
                    
                        
                    }else{ c2.attr("r", 0.015151515*hlinec);}
                    
                        c2.on("mouseover", function(d) {

                            //Get this bar's x/y values, then augment for the tooltip
                            d3.select(this)
                                    .attr("fill", "orange")
                                    .attr("r",  0.024242424*hlinec)//16
                                    .transition("coloron")
                                    .duration(1000)
                                    ;

                            var vrz = 130.13;

                            var xPosition = parseFloat(d3.select(this).attr("cx")) + (xScaleLC.bandwidth() / 2)+ vrz;
//                            var yPosition = parseFloat(d3.select(this).attr("cy")) / 2 +yLC;
                            
                            
                                  var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

//                            console.log(offset);
                            var yPosition = parseFloat(offset-maplegendaheight);
                                        
                            
                            
                            
                            path2.style("stroke-width", 0.026515152*hlinec ).transition("xw");
                              //17.5
                            

                            
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text(correct(d.type) +" : "+d.second.val+"%");
                                
                            

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);

                       })
                          .on("mouseout", function() {
                             d3.select(this)
                                    .attr("fill", "black").attr("r", 0.015151515*hlinec)//10
                                    .transition("coloroff")
                                    .duration(1000);
                            //Hide the tooltip      7.5
                                path2.style("stroke-width", 0.011363636*hlinec).transition("xw");
                            d3.select("#tooltip").classed("hidden", true);

                       })
                          .on("click", function(d){
                            
                            
                            if((cc!=undefined && cc!="") && (ccc!=undefined && ccc!="")){
                                
                                
                                                    var ttype=d.type;
                                                    
                                                    datapie.splice(0,datapie.length); 
                                                for( var s=0;s<lineCdata.length;s++ ){
                                                    
                                                     
                                                      if( ttype == lineCdata[s].type ){
                                                          
                                                           if( lineCdata[0].first != undefined ){
                                                               
                                                                datapie.push({
                                                                    id:lineCdata[s].first.id,
                                                                    val:lineCdata[s].first.val
                                                                })
                                                               
                                                           }
                                                          
                                                            if( lineCdata[0].second != undefined ){
                                                               
                                                                datapie.push({
                                                                    id:lineCdata[s].second.id,
                                                                    val:lineCdata[s].second.val
                                                                })
                                                               
                                                           }
                                                            
                                                        }
                                                     
                                                 }
                            
                      
                                                    pieLC(datapie, correct(ttype));
                            }
                            
                            
                                            });
                        
                            
                }
                    
         
				//Create axes
//				svgLC.append("g")
//					.attr("class", "xaxis")
//					.attr("transform", "translate(0," + (570) + ")")
//					.call(xAxisLC);

				svgLC.append("g")
					.attr("class", "yaxis")
//					.attr("transform", "translate(" + 0 + ",0)")
                    .transition()
				    .duration(1000)
					.call(yAxisLC);
                    
                 
                if((cc!=undefined && cc!="") && (ccc!=undefined && ccc!="")){
                    
                       var wPie=$("#containerPie").innerWidth();
                    
                       var piepaddingl=$("#containerPie").css("padding-left");
                       piepaddingl=piepaddingl.split("px");
                    
                      var piemarginl=$("#containerPie").css("margin-left");
                       piemarginl=piemarginl.split("px");
                       
                    
//                    console.log(wPie-2*(piepaddingl[0]))
                    
                    
                        var r =wPie-2*(piepaddingl[0]);
                        var xPosition2 = 1*(piemarginl[0])+(wPie/2);


                        var outerRadius = r / 2;

                        var innerRadius = r/3.2;//change to make a doughnut

                        var arc = d3.arc()
                                    .innerRadius(innerRadius )
                                    .outerRadius(outerRadius );

                        var pie = d3.pie()
                                    .value(function(d) {

                                        return d.val; });
                    
                    
//                    console.log(pie(datapie))
                        var colorFS = function(i){
                            if(i == 0){
                                return "blue";
                            }else{
                                return "red";
                            }
                            
                        }
                        
                    
                    
                    
                    
                    
                        var datapie = [];
                    
                        datapie.splice(0,datapie.length); 
                        if(cc!=undefined){
                            datapie.push({
                                id:cc,
                                val:cindex1
                            })
                        }
                        if(ccc!=undefined){
                            datapie.push({
                                id:ccc,
                                val:cindex2
                            })
                        }
                    
                    
   
                 
                    pieLC(datapie, "Crime Index");
                
          
                    
            function  pieLC(datapie, typestr){
                       
                
                
                        d3.select("#containerPie").selectAll("svg").remove();
                        var arcs =   d3.select("#pie")
                                  .append("svg")
                                  .attr("viewBox","0 0 "+r+" " +r)
//                                  .attr("width", r)
//                                  .attr("height", r)
                                  .selectAll("g.arc")
                                  .data(pie(datapie))
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
                
                
                         var twocc = d3.select("body")
                                        .select("#twocc")
                                        .append("svg")
                                        .attr("viewBox","0 0 "+(wPie-1*(piepaddingl[0]))+" " +(0.388559093*r));//90
//                                        .attr("width", 240)
//                                        .attr("height", 75);

                        var legendtwo = twocc.append("g")
                                            .attr("transform", function(d, i){
//                                                console.log(r)//30
                                                return "translate("+( i)*(0.129519698*r)+ ", "+( i)*(0.129519698*r)+")";
                                            });

                        if(firsttxt!=undefined){
//                            console.log(r)
                            
                            legendtwo.append("rect").attr("x", 0).attr("y", 0)
                                                 .attr("width", 0.107933081*r)//20->25
                                                 .attr("height", 0.107933081*r)
                                                 .attr("fill", "blue");

                             legendtwo.append("text").text(firsttxt)
                                        .attr("x", 2*(0.107933081*r)).attr("y", (1*(0.107933081*r)) )//16
                                        .attr("font-family", "sans-serif")
                                        .attr("font-size", "1.1vw");
                        }
                    
                         if(secondtxt!=undefined){
                             
                             legendtwo.append("rect")
                                                .attr("x", 0).attr("y", 2*(0.107933081*r))
                                                 .attr("width", 0.107933081*r)

                                                 .attr("height", 0.107933081*r)
                                                 .attr("fill", "red");

                             legendtwo.append("text").text(secondtxt)
                                        .attr("x",  2*(0.107933081*r)).attr("y", (3*(0.107933081*r)) )
                                        .attr("font-family", "sans-serif")
                                        .attr("font-size", "1.1vw");

                         }
                
                
                
                
                
                       arcs.append("path")
                             .attr("fill", function(d, i) {

                                    return colorFS(i);
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
                                             d3.select("#linechart").classed("unclickable", true);
                                             d3.select("#legenda").classed("unclickable", true);


                            })
                            .on("end", function() {
                                        d3.select("#linechart").classed("unclickable", false);
                                        d3.select("#legenda").classed("unclickable", false);
                        

                            })	
                            ; 


 
                
                
                            
                            
                
                
                            arcs.on("mouseover", function(d) {
                                
                               

                                        //Get this bar's x/y values, then augment for the tooltip
                                    d3.select(this)
                                        
            //                           .attr("fill", "white")
                                       .attr("opacity", 0.5)
                                       .attr("stroke","black")
                                       .transition()
                                       .duration(1000)

                                       .attr("stroke-width",0.021586616*r);//5

                                
                                      var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

//                            console.log(offset);
                            var yPosition = parseFloat(offset);
                                        
                                
                                
                                
                                
                                d3.select("#tooltip").select("#value").remove();

                                    d3.select("#tooltip")
                                        .style("left", xPosition2 + "px")
                                        .style("top", yPosition + "px")	
                                        .select("#label")
                                        .text(typestr +" : "+d.data.val+"%");



                                    //Show the tooltip
                                    d3.select("#tooltip").classed("hidden", false);


                                   })
                                .on("mouseout", function() {
                                
                                    
                                
                                            d3.select(this).transition()    
                //                            .attr("fill", function(d, i) {
                //                                
                //                              
                //                                return color(d.data.val);
                //                            })
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
                        
                        
                        
                        
                        var color = d3.scaleOrdinal(d3.schemeCategory10); 
                    
                    
                    if( (cc!=undefined&&cc!="") && (ccc!=undefined&&ccc!="") ){
                    
                        
                        var lgndW=$("#legenda").width();
//                        console.log(lgndW)
                        var lgndH=0.583333333*lgndW;

                        var lgnd = d3.select("body")
                                        .select("#legenda")
                                        .append("svg")
                                        .attr("viewBox","0 0 "+lgndW+" " +lgndH);
//                                        .attr("width", w)
//                                        .attr("height", h);

                    
                        
                        var legends;
                        if(typeval.length != 0){
                            legends=lgnd.append("g")
                                            .selectAll(".legends").data(pie(typeval));
                        }else if(typeval2.length != 0){
                            legends=lgnd.append("g")
                                            .selectAll(".legends").data(pie(typeval2));
                        }
                        if(typeval.length != 0 || typeval2.length != 0){
                            
                        var legend = legends.enter().append("g").classed("legends", true)
                                            .attr("transform", function(d, i){
//                                                console.log(lgndH)//23->24
                                                return "translate(0,"+( i)*(0.06550432*lgndH)+ ")";
                                            });
                            
                            

                        legend.append("rect").attr("width", (0.054586933*lgndH) )//20
                                             .attr("height", (0.054586933*lgndH))
                                             .attr("fill", function(d, i){
                                                  return colortype(d.data.type);
                                              })
                                             .on("mouseover", function(d) {
                                                   
                                                    var ttype=d.data.type;
                                               
                                                   




//                                                            //Update the tooltip position and value
//                                                            d3.select("#tooltip")
//                                                                .style("left", xPosition2 + "px")
//                                                                .style("top", yPosition2 + "px")	
//                                                                .select("#label")
//                                                                .text(correct(ttype) +" : "+tval+"%")
//                                                                ;
//
//                                                            //Show the tooltip
//                                                            d3.select("#tooltip").classed("hidden", false);

                                            })

                                            .on("mouseout", function(d) {
                                               


//                                                 d3.select("#tooltip").classed("hidden", true);

                                            })
                                             .on("click", function(d){
                                                var ttype=d.data.type;
                                                    
                                                    datapie.splice(0,datapie.length); 
                                                for( var s=0;s<lineCdata.length;s++ ){
                                                    
                                                     
                                                      if( ttype == lineCdata[s].type ){
                                                          
                                                           if( lineCdata[0].first != undefined ){
                                                               
                                                                datapie.push({
                                                                    id:lineCdata[s].first.id,
                                                                    val:lineCdata[s].first.val
                                                                })
                                                               
                                                           }
                                                          
                                                            if( lineCdata[0].second != undefined ){
                                                               
                                                                datapie.push({
                                                                    id:lineCdata[s].second.id,
                                                                    val:lineCdata[s].second.val
                                                                })
                                                               
                                                           }
                                                            
                                                        }
                                                     
                                                 }
                            
                      
                                                    pieLC(datapie, correct(ttype));
                                            })
                                            ;


                        legend.append("text").text(function(d){
                                                return correct(d.data.type);
                                            })

                                             .attr("x", (0.054586933*lgndH)).attr("y", (0.054586933*lgndH))//20

                                            .on("mouseover", function(d) {
                                              
                                                var ttype=d.data.type;
                                             



//                                                //Update the tooltip position and value
//                                                  d3.select("#tooltip")
//                                                        .style("left", xPosition2 + "px")
//                                                        .style("top", yPosition2 + "px")	
//                                                        .select("#label")
//                                                        .text(correct(ttype) +" : "+tval+"%")
//                                                        ;
//
//                                                //Show the tooltip
//                                                  d3.select("#tooltip").classed("hidden", false);

                                            })

                                            .on("mouseout", function(d) {
                                                
                                      
//                                                   d3.select("#tooltip").classed("hidden", true);
                                            })
                                            .on("click", function(d){
                            
                            
                                                    var ttype=d.data.type;
                                                    
                                                    datapie.splice(0,datapie.length); 
                                                for( var s=0;s<lineCdata.length;s++ ){
                                                    
                                                     
                                                      if( ttype == lineCdata[s].type ){
                                                          
                                                           if( lineCdata[0].first != undefined ){
                                                               
                                                                datapie.push({
                                                                    id:lineCdata[s].first.id,
                                                                    val:lineCdata[s].first.val
                                                                })
                                                               
                                                           }
                                                          
                                                            if( lineCdata[0].second != undefined ){
                                                               
                                                                datapie.push({
                                                                    id:lineCdata[s].second.id,
                                                                    val:lineCdata[s].second.val
                                                                })
                                                               
                                                           }
                                                            
                                                        }
                                                     
                                                 }
                            
                      
                                                    pieLC(datapie, correct(ttype));
                            
                                            })
                                            ;
                        }
                    
                        }
                    
                }
                    
                    
                    
                    
                }
            
                    return resultData;
                
                }	
    
        
         });
         }



