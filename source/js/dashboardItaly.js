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

function union_arrays (x, y) {
      var obj = {};
      for (var i = x.length-1; i >= 0; -- i)
         obj[x[i]] = x[i];
      for (var i = y.length-1; i >= 0; -- i)
         obj[y[i]] = y[i];
      var res = []
      for (var k in obj) {
        if (obj.hasOwnProperty(k))  // <-- optional
          res.push(obj[k]);
      }
      return res;
    }


function crimesItaly(){
      
         
       
         
            
            
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
                    d3.select("#barcharts").classed("hidden", bool);
                    d3.select("#podiumContainer").classed("hidden", bool);  
                   
                
                if(bool){
                    d3.select("#omicidi1").classed("btn btn-danger", false);
                    d3.select("#furto1").classed("btn btn-warning", false);
                    d3.select("#altri1").classed("btn btn-primary", false);
                    d3.select("#omicidi1").classed("hidden", true);
                    d3.select("#furto1").classed("hidden", true);
                    d3.select("#altri1").classed("hidden", true);
                }else{
                    d3.select("#omicidi1").classed("hidden", false);
                    d3.select("#furto1").classed("hidden", false);
                    d3.select("#altri1").classed("hidden", false);
                    d3.select("#omicidi1").classed("btn btn-danger", true);
                    d3.select("#furto1").classed("btn btn-warning", true);
                    d3.select("#altri1").classed("btn btn-primary", true);
                    
                }
                    
            }
        
       
			
         
			//Function for converting CSV values from strings to Dates and numbers
			//We assume one column named 'Date' plus several others that will be converted to ints 
            function conversion(d) {
                  
               
                if(d.includes(",")){
                    return d.replace(",", ".");
                }else{
                    if(d==""){
                        return 0;
                    }else{
                        if(d.includes(".")){
                            d.replace(".", "");
                        }else{
                            return d;
                        }
                    }
                }
                
            }
            
        
			var rowConverter = function(d) {
               
                return {
				            pos:parseInt(d.Pos),
				            provincia: d.Provincia,  
                    
                            numReati: parseInt(conversion(d.NumeroReati)),
                            numReati100: roundTo(parseFloat(conversion(d.Ogni100milaAbitanti)), 2),
                            tipologia:d.Tipologia,
                            lat:parseFloat(d.latitude),
                            lon:parseFloat(d.longitude)
                }
			}
            
            
          
         
   
         // https://crossorigin.me/file:///home/padrone/Documenti/d3-book-master/project/CCrime.csv
       //  https://raw.githubusercontent.com/paolo-peretti/Dashboard-Crime/master/data/CCrime.csv
     
     //http://localhost:8000/Documenti/CrimeProject/data/CCcrime.csv
d3.csv("https://raw.githubusercontent.com/paolo-peretti/Dashboard-Crime/master/data/ita2018.csv", rowConverter, function(data) {
                
    
    
    let dataset = data;   
    
    
    
    
    
    var arraycities=[];
     arraycities.splice(0,arraycities.length);
     var j, i, city, country, tip, citytmp, countrytmp;
                
     var ul = document.getElementById("tips");
                
                //tips
    for(i=0;i<dataset.length;i++){
                    
         if( !arraycities.includes( (dataset[i].provincia).toUpperCase()) ){
             
             arraycities.push( (dataset[i].provincia).toUpperCase() );
             
             
             var li = document.createElement("li");
             tip=dataset[i]["provincia"];
                    
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
     }
                
    
    
    
    
    
  
                let inputGetCC = document.querySelector('#cc');
                let btnGetCC = document.querySelector('#btn-cc');
                let liFaction = document.querySelector('#first');
                let liSaction = document.querySelector('#second');
                let changeorder = document.querySelector('#changeorder');
    
                let omicidibtn1 = document.querySelector('#omicidi1'); 
                let furtobtn1 = document.querySelector('#furto1'); 
                let altribtn1 = document.querySelector('#altri1'); 
    
    
    
                let omicidibtn2 = document.querySelector('#omicidi2'); 
                let furtobtn2 = document.querySelector('#furto2'); 
                let altribtn2 = document.querySelector('#altri2'); 
                
                let posimg = document.querySelector('#posimg'); 
                let pos1img = document.querySelector('#pos1img'); 
                let pos2img = document.querySelector('#pos2img'); 
    
    
    
                let changetype = document.querySelector('#typeoptions'); 
    
                let CheckTwo=true;
                
                 
                  var typeDefault = "ranking of crimes 2018";
                  var type = "ranking of crimes 2018";
    
                
                 
    
                   
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
                                
                                    dataset = Crime(value);
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
                                 
                                    
                                    verify = arraycities.includes(value.toUpperCase()) ;
                                   
                                }else if (first!="" && second=="" ){
                                    
                                    count=1;
                                    verify = arraycities.includes(value.toUpperCase()) ;
                                    
                                    
                                }else if (first!="" && second!="" ){
                                    
                                    verify = arraycities.includes(value.toUpperCase()) ;
                                     
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
                                
                                
                                     dataset = Crime(arrayFS);
                                
                               
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
                                
                                    
                      dataset = Crime(arrayFS);
                                
                               
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
                                
                                    
                      dataset = Crime(arrayFS);
                                
                               
                });
            
    
    
    
       
    
     var typedata = [];
        typedata.splice(0,typedata.length);
        
          for(var i=0;i<dataset.length;i++){
              if( dataset[i].tipologia == typeDefault ){
               
                  typedata.push(dataset[i]);
              }
          }
                //now pointmap
     
                d3.select("#containerItaly").classed("hidden", false);
                
                var widthmap = $('#mapItaly').width();
       
                var heightmap = widthmap;
//        console.log(heightmap)
    
    
    
              
                var projection = d3.geoMercator()
//                        .scale(scale)
//                        .translate([0.079983871*scale,0.948944444*scale])

//                        .translate([-551/3.44444444444,551*3.44444444444])
                

                    .center([13, 42])                // GPS of location to zoom on
                    .scale(3.8*heightmap)   //2000                    // This is like the zoom
                    .translate([ widthmap/2, heightmap/2 ])

                    ;
//        
                 var svgmap = d3.select("body").select("#mapItaly")
						.append("svg")
                        .attr("viewBox","0 0 "+widthmap+" " +heightmap);
        
            
            
                  var clickedbtn = [];
                    clickedbtn.splice(0,clickedbtn.length);
            
        
                 var circles = svgmap.selectAll("circle")
                            .data(typedata)
                            .enter()
                            .append("circle")
                            .attr("cx", function(d){
                                    return projection([d.lon, d.lat])[0];
                            })
                            .attr("cy", function(d){
                                    return projection([d.lon, d.lat])[1];
                            })
                            .attr("r", function(d){
                                //0.25
                                 return Math.sqrt(parseInt(d.numReati100)) * (0.00045*heightmap);
                                  
                            });
    
                            circles.style("fill", "red")
                            .style("stroke", "gray")
                            .style("stroke-width", 0.25)
                            .style("opacity", 0.75)
                            ;
    
                            circles.on("mouseover",function(d){
                                
                                     if( !clickedbtn.includes(d.provincia) ){
                                         
                                         d3.select(this)
                                            .style('fill','#7B68EE') 
                                            .transition("coloron")
                                            .duration(1000);
                                     }
                        

                            var xPosition = parseFloat(d3.select(this).attr("cx")) + widthmap ;
                           
                           var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

                            var yPosition = parseFloat(offset-(heightmap/5));
//                            var yPosition = parseFloat(offset);
                                
                                //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text(d.provincia +" ranked : "+d.pos +" out of "+arraycities.length)
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);
                                
                                
                                    })
                                   .on("mouseout",function(d){
                                
                                  d3.select("#tooltip").classed("hidden", true);
//                                         tip.hide(d);
                                        if( !clickedbtn.includes(d.provincia) ){

                                            d3.select(this).style('fill',"red") 
                                                  .style("stroke", "gray")
                                                  .style("stroke-width", 0.25)
                                                 .transition("coloron")
                                                 .duration(1000);

                                        }
                                
                                    })
                                   .on("click", function(d){
                             
                                    inputGetCC.value=d.provincia;
                                 
                                     btnGetCC.click();
                                 
                                    })
                                    ;
    
    
    
        btnGetCC.addEventListener('click', () => {
        

                                
              if(!CheckTwo){
                  
                   if( (clickedbtn[0]=="" || clickedbtn[0]==undefined) && !clickedbtn.includes(inputGetCC.value) ){
                        clickedbtn[0]=inputGetCC.value;
            
                   }else if( !clickedbtn.includes(inputGetCC.value) ){
                        clickedbtn[1]=inputGetCC.value;
                   }
                  
              }else{
                  clickedbtn.splice(0,clickedbtn.length);
                  clickedbtn.push(inputGetCC.value);
              }
                                
                 circles.style('fill',function(d){
                     
                             if( d.provincia == inputGetCC.value && CheckTwo ){
                                 return '#0ECEBA';
                             }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                                 if( clickedbtn[0]==d.provincia )
                                     return "#b643c8";
                                 
                                 if( clickedbtn[1]==d.provincia )
                                     return "#8e8e06";
                                      
                             }else{
                                 return "red";
                             }
                    })
                    .style('stroke', function(d){
                     
                         if(d.provincia == inputGetCC.value && CheckTwo ){
                             return 'black';
                         }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                                 if( clickedbtn[0]==d.provincia )
                                     return "black";
                                 
                                 if( clickedbtn[1]==d.provincia )
                                     return "black";
                                      
                         }else{
                             return "gray";
                         }
                    })
                    .style('stroke-width', function(d){
                     
                         if(d.provincia == inputGetCC.value && CheckTwo ){
                             return 5;
                         }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                                 if( clickedbtn[0]==d.provincia )
                                     return 5;
                                 
                                 if( clickedbtn[1]==d.provincia )
                                     return 5;
                                      
                         }else{
                             return 0.25;
                         }
                    });
    });
    
        liFaction.addEventListener('click', () => {
            clickedbtn[0]="";
            
             circles.style('fill',function(d){
                     
                             if( d.provincia == inputGetCC.value && CheckTwo ){
                                 return '#0ECEBA';
                             }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                                 if( clickedbtn[0]==d.provincia )
                                     return "#b643c8";
                                 
                                 if( clickedbtn[1]==d.provincia )
                                     return "#8e8e06";
                                      
                             }else{
                                 return "red";
                             }
                    })
                    .style('stroke', function(d){
                     
                         if(d.provincia == inputGetCC.value && CheckTwo ){
                             return 'black';
                         }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                                 if( clickedbtn[0]==d.provincia )
                                     return "black";
                                 
                                 if( clickedbtn[1]==d.provincia )
                                     return "black";
                                      
                         }else{
                             return "gray";
                         }
                    })
                    .style('stroke-width', function(d){
                     
                         if(d.provincia == inputGetCC.value && CheckTwo ){
                             return 5;
                         }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                                 if( clickedbtn[0]==d.provincia )
                                     return 5;
                                 
                                 if( clickedbtn[1]==d.provincia )
                                     return 5;
                                      
                         }else{
                             return 0.25;
                         }
                    });
        });
    
        liSaction.addEventListener('click', () => {
            clickedbtn[1]="";
            
             circles.style('fill',function(d){
                     
                             if( d.provincia == inputGetCC.value && CheckTwo ){
                                 return '#0ECEBA';
                             }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                                 if( clickedbtn[0]==d.provincia )
                                     return "#b643c8";
                                 
                                 if( clickedbtn[1]==d.provincia )
                                     return "#8e8e06";
                                      
                             }else{
                                 return "red";
                             }
                    })
                    .style('stroke', function(d){
                     
                         if(d.provincia == inputGetCC.value && CheckTwo ){
                             return 'black';
                         }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                                 if( clickedbtn[0]==d.provincia )
                                     return "black";
                                 
                                 if( clickedbtn[1]==d.provincia )
                                     return "black";
                                      
                         }else{
                             return "gray";
                         }
                    })
                    .style('stroke-width', function(d){
                     
                         if(d.provincia == inputGetCC.value && CheckTwo ){
                             return 5;
                         }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                                 if( clickedbtn[0]==d.provincia )
                                     return 5;
                                 
                                 if( clickedbtn[1]==d.provincia )
                                     return 5;
                                      
                         }else{
                             return 0.25;
                         }
                    });
        });
        
    
       
    

    
    var widthcircular = $("#circularbar").width();
        // set the dimensions and margins of the graph
        var margin = {top: 0.018315018*widthcircular, right: 0.018315018*widthcircular, bottom: 0.018315018*widthcircular, left: 0.018315018*widthcircular},
            widthCB = widthcircular - margin.left - margin.right,
            heightCB = widthcircular - margin.top - margin.bottom,
            outerRadius = Math.min(widthCB, heightCB) / 1.2,//1.4
            innerRadius = 0.212927757*outerRadius;//80
               
    // the outerRadius goes from the middle of the SVG area to the border

    
// append the svg object to the body of the page
        var circularsvg = d3.select("#circularbar")
          .append("svg")
          .attr("viewBox","0 0 "+(widthCB + margin.left + margin.right)+" " +(heightCB + margin.top + margin.bottom))
//            .attr("width", widthCB + margin.left + margin.right)
//            .attr("height", heightCB + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + widthCB / 2 + "," + ( heightCB/2 +(0.095057034*heightCB) )+ ")"); // Add 50 on Y translation, cause upper bars are longer

    
  var circulardata = typedata.sort(function(a,b) { return b.value - a.value; });
    
    
    // X scale
  var x = d3.scaleBand()
      .domain( circulardata.map(function(d) { return d.provincia; }) )
      .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
      .align(0)                  // This does nothing ?
      ; // The domain of the X axis is the list of states.

  // Y scale
  var y = d3.scaleRadial()
      .range([innerRadius, outerRadius])   // Domain will be define later.
      .domain([0, 20000]); // Domain of Y is from 0 to the max seen in the data

  // Add bars
  var circularbar = circularsvg.append("g")
    .selectAll("path")
    .data(circulardata)
    .enter()
    .append("path")
      .attr("fill", function(d){
            if(d.provincia == inputGetCC.value) 
                return "orange";
            else return "#69b3a2";
      })
      .attr("d", d3.arc()     // imagine your doing a part of a donut plot
          .innerRadius(innerRadius)
          .outerRadius(function(d) { return y(d.numReati100); })
          .startAngle(function(d) { return x(d.provincia); })
          .endAngle(function(d) { return x(d.provincia) + x.bandwidth(); })
          .padAngle(0.015)
          .padRadius(innerRadius));
    
    
    circularbar.on("mouseover", function(d){
        
         if(!clickedbtn.includes(d.provincia)){
             
          d3.select(this)
            .style('fill','green') 
            .transition("coloron")
            .duration(1000);
         }
        
         var xPosition = widthmap/2 ;
                           
                           var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

                            var yPosition = parseFloat(offset-(heightmap/5));
//                            var yPosition = parseFloat(offset);
                                
                                //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text(d.provincia +" ranked : "+d.pos +" out of "+arraycities.length)
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);
                                
                                
        
            })
            .on("mouseout", function(d){
                
        if(!clickedbtn.includes(d.provincia)){
            
            d3.select(this)
                .style('fill','#69b3a2') 
                .transition("coloron")
                .duration(1000);
        }
         d3.select("#tooltip").classed("hidden", true);
        
            })
            .on("click", function(d){
        
                   inputGetCC.value=d.provincia;
                                 
                   btnGetCC.click();
      
            });
    

        btnGetCC.addEventListener('click', () => {
         
         
        

         
         
        circularbar.style("fill", function(d){
            
            if( d.provincia == inputGetCC.value && CheckTwo ){
               
                     return 'orange';
            }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                  if( clickedbtn[0]==d.provincia )
                            return "#b643c8";
                                 
                  if( clickedbtn[1]==d.provincia )
                            return "#8e8e06";
                                      
            }else{
                  return "#69b3a2";
            }
            
        });

               
    });
    
        liFaction.addEventListener('click', () => {
          
            
            circularbar.style("fill", function(d){
            
                if( d.provincia == inputGetCC.value && CheckTwo ){
                         return 'orange';
                }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){

                      if( clickedbtn[0]==d.provincia )
                                return "#b643c8";

                      if( clickedbtn[1]==d.provincia )
                                return "#8e8e06";

                      }else{
                                return "#69b3a2";
                      }

            });
             
        });
    
        liSaction.addEventListener('click', () => {
           
            
             circularbar.style("fill", function(d){
            
                if( d.provincia == inputGetCC.value && CheckTwo ){
                         return 'orange';
                }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){

                      if( clickedbtn[0]==d.provincia )
                                return "#b643c8";

                      if( clickedbtn[1]==d.provincia )
                                return "#8e8e06";

                      }else{
                                return "#69b3a2";
                      }

            });
             
             
        });
        

   
        
    
      
    
    
    
    function Crime(str){
        
        
       
      
        
          if(Array.isArray(str)){
                        var cc=str[0];
                        var ccc=str[1];
                        var verifyCompare=true;
          }else{
                        var cc=str;
                        var verifyCompare=false;
          }
                        
           
                searchFunction();
        
        
             
    var maincategories = ["ranking of crimes 2018", "homicides", "theft", "other crimes"];

    var omicidi=["infanticide", "attempted murders", "voluntary manslaughter"];
                    
    var furto=["theft with tearing", "pickpocketing", "theft in homes", "theft in commercial establishments", "car theft", "robberies"];
    
    var altri=["extortions", "usury", "criminal associations", "mafia-type associations", "money laundering", "scams and computer fraud", "drugs", "arson", "rape"];
      
       
                
                
                
        
                if(!verifyCompare ){
                    
                    
                    
                    
                    posimg.addEventListener('mouseover', () => {
                        
                        
//                        var mleft = $("#info").css("margin-left");
//                        
//                        mleft = mleft.split("px");
//                        
//                            var xPosition = ($("#info").width()/2)+$(".sidebar").width()+1*(mleft[0]);
                            var xPosition = ($("#info").width());

                            var yPosition = $("#info").height();
                                        

                            //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text("The rank is calculated on the number of crimes per 100 thousand inhabitants.")
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);
                        
                        
                    });
                    
                    posimg.addEventListener('mouseout', () => {
                        d3.select("#tooltip").classed("hidden", true);
                    });
                    
                    
                    
                    
                    
                    d3.select("#multiplebars").classed("hidden", true);
                    d3.select("#doublepie").classed("hidden", true);
                    
                    
                    
                    if(arraycities.includes(cc.toUpperCase())){
                        
                         hiddenElem(false);
                    }
                    
                    d3.select("#info1").classed("hidden", true);
                    d3.select("#info2").classed("hidden", true);
                    
                    var cityinfo = [];
                     cityinfo.splice(0,cityinfo.length);
                    
                    for(var i=0;i<dataset.length;i++){
                        
                        if( dataset[i].provincia == cc ){
                            
                            cityinfo.push({
                                
                                pos: dataset[i].pos,
                                denunce: dataset[i].numReati,
                                denunce100: dataset[i].numReati100,
                                tipologia: dataset[i].tipologia
                                
                            })
                            
                        }
                        
                    }
                    
                    var bool=false;
                    
                    for(var i=0;i<cityinfo.length&&!bool;i++){
                        
                        if( cityinfo[i].tipologia == typeDefault ){
                            
                            bool=true;
                            var posinfo=cityinfo[i].pos;
                            var denunceinfo=cityinfo[i].denunce;
                            var denunce100info=cityinfo[i].denunce100;
                        }
                    }
                    
                    
                   
                    
                    document.getElementById("cname").innerHTML = cc;
                    document.getElementById("type").innerHTML = typeDefault+" :";
                    document.getElementById("pos").innerHTML = "rank = "+posinfo+" out of "+arraycities.length; 
                    document.getElementById("denunce").innerHTML = "number of crimes = "+denunceinfo;
                    document.getElementById("denunce100mila").innerHTML = "number of crimes per 100 thousand inhabitants = "+denunce100info;
                    
                    
                     	
    
     
                    
    bars("none");    
                    
    
                    
                    
                    
    function bars(subtype){                
          
        
        
        document.getElementById("resultBars").innerHTML=subtype; 
            
            
        var barsinfo = [];
        barsinfo.splice(0,barsinfo.length);

        d3.select('#barcharts').selectAll("svg").remove();
        
        var datasline=[];
        datasline.splice(0,datasline.length);
        
        var averageline=[];
        averageline.splice(0,averageline.length);
        
        if(subtype=="none"){
             datasline=union_arrays(omicidi, furto); 
             datasline=union_arrays(datasline, altri); 
             
        }else if(subtype=="omicidi"){
            datasline=omicidi; 
        }else if(subtype=="furto"){
            datasline=furto; 
        }else if(subtype=="altri"){
            datasline=altri; 
        }
        var sum,
            count,
            average;
       
//        for(var s=0;s<datasline.length;s++){
//            sum=0;
//            count=0;
//            for(var i=0;i<dataset.length;i++){
//                
//                if( datasline[s] == dataset[i].tipologia){
//                        sum+=dataset[i].numReati100;
//                        count++;
//                }
//
//                
//            }
//            average = roundTo(parseFloat(sum/count),2);
//            
//            averageline.push({
//                val: average,
//                type: datasline[s]
//            });
//        }
        
//        console.log(averageline)

        for(var y=0;y<cityinfo.length;y++){

                if( datasline.includes(cityinfo[y].tipologia) ){



                        barsinfo.push({

                             val: cityinfo[y].denunce,
                             type: cityinfo[y].tipologia

                        })

                }


            }  

        var widthBar = $('#barcharts').innerWidth();
        var heightBar = widthBar/2;
    // set the dimensions and margins of the graph

    var margin = {top: 0.034158839*heightBar, right: 0.017079419*widthBar, bottom: 0.051238258*heightBar, left: 0.034158839*widthBar},
        widthBar = 0.819812126*widthBar - margin.left - margin.right, 
        heightBar = 0.853970965*heightBar - margin.top - margin.bottom;  

    // set the ranges
    var ybar = d3.scaleBand()
              .range([heightBar, 0])
              .padding(0.3);

    var xbar = d3.scaleLinear()
              .range([0.062553419*widthBar, widthBar]);



    var barsvg = d3.select("#barcharts").append("svg")
        .attr("viewBox","0 0 "+( widthBar + margin.left + margin.right )+" " +( heightBar + margin.top + margin.bottom ) )
    //    .attr("width", widthBar + margin.left + margin.right +0.155555556*widthBar)
    //    .attr("height", heightBar + margin.top + margin.bottom)
      .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");


      // Scale the range of the data in the domains
      xbar.domain([0, d3.max(barsinfo, function(d){ return d.val; })])
      ybar.domain(d3.range(barsinfo.length));
      //y.domain([0, d3.max(data, function(d) { return d.sales; })]);
      
       
//         var yAxisType = d3.axisLeft()
//                               .scale(ybar)
//                               .tickFormat(function(d, i){ return barsinfo[i].type })
//                                ;
// 
        
        
         // append the rectangles for the bar chart
                      barsvg.selectAll("rect")
                          .data(barsinfo)
                        .enter().append("rect")
//                          .attr("transform", "translate(100," + 0 + ")")
                          .transition("moverect")
                          .on("start", function(d){
                          d3.select("#barcharts").classed("unclickable", true);
                            })
                          
                          .delay(function(d, i){
                                   return i*120;
                         })
                          .ease(d3.easeCircle)
                          .on("end", function(d){
                          d3.select("#barcharts").classed("unclickable", false);
                            })
                          .duration(500)

                          
                          .attr("class", "bar").attr("id", function(d, i){
                                    return "r"+i;
                        })

                          //.attr("x", function(d) { return x(d.sales); })
                          .attr("width", function(d) {return xbar(d.val); } )
                          .attr("y", function(d, i) { return ybar(i); })
                          .attr("height", ybar.bandwidth())
                          .attr("fill", function(d){
                          
                                    if(omicidi.includes(d.type)){
                                       return "#f44336";
                                    }
                                    if(furto.includes(d.type)){
                                       return "#f08f00";
                                    }
                                    if(altri.includes(d.type)){
                                       return "#005cbf";
                                    }
                            })
                            ;
                    
                      barsvg.selectAll("rect").data(barsinfo)
                              .on("mouseover", function(d) {

                            //Get this bar's x/y values, then augment for the tooltip
                         
                          
                            d3.select(this)
                                    .style("stroke", "gray").style("stroke-width", 0.015012821*heightBar)
                                    .transition("coloron")
                                    .duration(1000)
                                    ;


                          var xPosition = (widthBar / 2);

           
                                var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;
                                 
                          
                          
                      

//                            console.log(offset-maplegendah);
                            var yPosition = parseFloat(offset);
                                        
                          
                          
                          

                            //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text(d.type +" : "+d.val+" number of crimes")
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
                      barsvg.append("g").attr("id", "xAxisBars")
                          .attr("transform", "translate(0," + heightBar + ")")
                          .call(d3.axisBottom(xbar));

                      // add the y Axis
                      barsvg.append("g").attr("id", "yAxisBars")
//                          .attr("transform", "translate(100," + 0 + ")")
                          .call(d3.axisLeft(ybar));
        
                    
                    
        
        
                     omicidibtn1.addEventListener('click', () => { 
                         if(document.getElementById("resultBars").innerHTML!="omicidi")
                                    bars("omicidi"); 
                     });   
              

                 
                     furtobtn1.addEventListener('click', () => {
                         if(document.getElementById("resultBars").innerHTML!="furto")
                                    bars("furto"); 
                     }); 
                 

                
                     altribtn1.addEventListener('click', () => { 
                        if(document.getElementById("resultBars").innerHTML!="altri")
                                    bars("altri"); 
                     });   
                    
   
    

                    
                    
                
    }
    
   
      podio();
                    
                    
     function podio(){ 

         
         
         document.getElementById("podioresult").innerHTML=type;
         
         
         
                            var relatedCities = [];
         
                            if(relatedCities != []){
                                relatedCities.splice(0,relatedCities.length);
                            }
                             d3.select("#podium").selectAll("svg").remove(); 

                        
                            var typetmp=type;
                             
                           
                    for(i=0;i<dataset.length;i++){


                        if( typetmp == dataset[i].tipologia ){

                              relatedCities.push(
                                                    {
                                                    city: dataset[i]["provincia"],
                                                    val: dataset[i]["numReati100"],
                                                    type : typetmp
                                                    }
                                            ); 

                        }
                        
                    }    
//                             console.log(relatedCities) 
                      


                             
                     
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
//                                    console.log(podium)
                        
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

        document.getElementById("titlepodiump").innerHTML="Top 3 number of crimes per 100 thousand inhabitants for : "+typetmp;
                                         
                                         
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
                                             d3.select("#typeoptions").classed("unclickable", true);
                                             
                                            
                                            })
                                         .on("end", function(d, i) {
                                        
                                                 d3.select("#typeoptions").classed("unclickable", false);

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
                                      
                                        if(omicidi.includes(typetmp)){
                                            return "#f44336";
                                        }
                                        if(furto.includes(typetmp)){
                                            return "#f08f00";
                                        }
                                        if(altri.includes(typetmp)){
                                            return "#005cbf";
                                        }
                                        else{
                                            return "#566573";
                                        }
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
                                           .attr("fill", "white");


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

                                               return d.val;

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
                                           .attr("fill", "white");

                                }

                }  
                    
                    
     changetype.addEventListener('click', () => {
         
         if( document.getElementById("podioresult").innerHTML!=$("#typeoptions").val() ){
             
                        type = $("#typeoptions").val();
                        podio();
             
         }
         
     });               
                    
              
     
                            
                    
                    
                    
        }
        else if(verifyCompare){
            
            
            
            
            
            
            
            
             pos1img.addEventListener('mouseover', () => {
                        
                        
//                        var mleft = $("#info").css("margin-left");
//                        
//                        mleft = mleft.split("px");
//                        
//                            var xPosition = ($("#info").width()/2)+$(".sidebar").width()+1*(mleft[0]);
                            var xPosition = ($("#info1").width());

                            var yPosition = $("#info1").height();
                                        

                            //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text("The rank is calculated on the number of crimes per 100 thousand inhabitants.")
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);
                        
                        
                    });
                    
                    pos1img.addEventListener('mouseout', () => {
                        d3.select("#tooltip").classed("hidden", true);
                    });
                    
            
              pos2img.addEventListener('mouseover', () => {
                        
                        
//                        var mleft = $("#info").css("margin-left");
//                        
//                        mleft = mleft.split("px");
//                        
                            var xPosition = ($("#info2").width()*2);
//                            var xPosition = ($("#info2").width());

                            var yPosition = $("#info2").height();
                                        

                            //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text("The rank is calculated on the number of crimes per 100 thousand inhabitants.")
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);
                        
                        
                    });
                    
                    pos2img.addEventListener('mouseout', () => {
                        d3.select("#tooltip").classed("hidden", true);
                    });
                    
            
            
            
            
            
            
            
            
                    
                    d3.select("#omicidi1").classed("hidden", false);
                    d3.select("#furto1").classed("hidden", false);
                    d3.select("#altri1").classed("hidden", false);
                    d3.select("#omicidi1").classed("btn btn-danger", true);
                    d3.select("#furto1").classed("btn btn-warning", true);
                    d3.select("#altri1").classed("btn btn-primary", true);
                    
                    
                    hiddenElem(true);
                    
                    if( arraycities.includes(cc.toUpperCase()) ){
                        d3.select("#info1").classed("hidden", false);
                    }
                    if( arraycities.includes(ccc.toUpperCase()) ){
                        d3.select("#info2").classed("hidden", false);
                    }
                    
                    d3.select("#info").classed("hidden", true);
                    
                    if(cc==undefined || cc==""){
                         document.getElementById("info2").style.marginLeft = "9%";
                         document.getElementById("info2").style.marginRight = "50%";
                    }else{
                      
                         document.getElementById("info2").style.marginLeft = "1%";
                         document.getElementById("info2").style.marginRight = "9%";
                    }
                    
                    
                    
                    var cityinfo1 = [];
                     cityinfo1.splice(0,cityinfo1.length);
                     var cityinfo2 = [];
                     cityinfo2.splice(0,cityinfo2.length);
                    
                    for(var i=0;i<dataset.length;i++){
                        
                        if(cc!=undefined && cc!="" && cc!=null){
                            
                            if( dataset[i].provincia == cc ){

                                cityinfo1.push({

                                    pos: dataset[i].pos,
                                    denunce: dataset[i].numReati,
                                    denunce100: dataset[i].numReati100,
                                    tipologia: dataset[i].tipologia

                                })
                            }
                            
                        }
                        if(ccc!=undefined && ccc!="" && ccc!=null){ 
                            
                            if( dataset[i].provincia == ccc ){

                                cityinfo2.push({

                                    pos: dataset[i].pos,
                                    denunce: dataset[i].numReati,
                                    denunce100: dataset[i].numReati100,
                                    tipologia: dataset[i].tipologia

                                })         
                            }
                        
                        }
                    }
                    
                    var bool=false;
                    if(cc!=undefined && cc!="" && cc!=null){
                        
                        for(var i=0;i<cityinfo1.length&&!bool;i++){

                            if( cityinfo1[i].tipologia == typeDefault ){

                                bool=true;
                                var posinfo1=cityinfo1[i].pos;
                                var denunceinfo1=cityinfo1[i].denunce;
                                var denunce100info1=cityinfo1[i].denunce100;
                            }
                        }
                        
                    }
                    bool=false;
                        
                    if(ccc!=undefined && ccc!="" && ccc!=null){
                        
                        for(var i=0;i<cityinfo2.length&&!bool;i++){

                            if( cityinfo2[i].tipologia == typeDefault ){

                                bool=true;
                                var posinfo2=cityinfo2[i].pos;
                                var denunceinfo2=cityinfo2[i].denunce;
                                var denunce100info2=cityinfo2[i].denunce100;
                            }
                        }
                    }
                    
                    if(cc!=undefined && cc!="" && cc!=null){
                        

                        document.getElementById("cname1").innerHTML = cc;
                        document.getElementById("type1").innerHTML = typeDefault+" :";
                        document.getElementById("pos1").innerHTML = "rank = "+posinfo1+" out of "+arraycities.length; 
                        document.getElementById("denunce1").innerHTML = "number of crimes = "+denunceinfo1;
                        document.getElementById("denunce100mila1").innerHTML = "number of crimes per 100 thousand inhabitants = "+denunce100info1;
                    }else{
                        d3.select("#info1").classed("hidden", true);
                    }
                    
                    if(ccc!=undefined && ccc!="" && ccc!=null){
                       

                        document.getElementById("cname2").innerHTML = ccc;
                        document.getElementById("type2").innerHTML = typeDefault+" :";
                        document.getElementById("pos2").innerHTML = "rank = "+posinfo2+" out of "+arraycities.length; 
                        document.getElementById("denunce2").innerHTML = "number of crimes = "+denunceinfo2;
                        document.getElementById("denunce100mila2").innerHTML = "number of crimes per 100 thousand inhabitants = "+denunce100info2;
                    }else{
                        d3.select("#info2").classed("hidden", true);
                    }

            
                if( (cc!=undefined && cc!="" && cc!=null) && (ccc!=undefined && ccc!="" && ccc!=null) ){
                    
                    d3.select("#doublepie").classed("hidden", false);
                    d3.select("#multiplebars").classed("hidden", false);
                    
                     var wPie=$("#pie1").width();
                    

                    
                        var r = wPie/2;
                        


                        var outerRadius = r/2;

                        var innerRadius = r/5;//change to make a doughnut

                        var arc = d3.arc()
                                    .innerRadius(innerRadius)
                                    .outerRadius(outerRadius);

                        var pie = d3.pie()
                                    .value(function(d) {

                                        return (arraycities.length+1)-d.pos; });
                    
                    
//                    console.log(pie(datapie))
                        var colorFS = function(d){
                            
                            if(d.tipologia == "homicides"){
                                       return "#f44336";
                            }
                            if(d.tipologia == "theft"){
                                       return "#f08f00";
                            }
                            if(d.tipologia == "other crimes"){
                                       return "#005cbf";
                            }
                            
                        }
                        
                        
                function datapie(datapie, citytmp){
                        
                        var newinfo = [];
                         newinfo.splice(0,newinfo.length);
                    
                        for(var i=0;i<datapie.length;i++){
                             
                            if( maincategories.includes(datapie[i].tipologia) && datapie[i].tipologia != "ranking of crimes 2018" ){
                               
                                newinfo.push({
                                    provincia: citytmp,
                                    postot: datapie[0].pos,
                                    pos: datapie[i].pos,
                                    tipologia: datapie[i].tipologia
                                });
                            }
                        }
                       
                    return newinfo;
                }
                        
                    
                pieCreator(datapie(cityinfo1, cc));
                pieCreator(datapie(cityinfo2, ccc));    
                    
                    
                function  pieCreator(datapie){
                    
                    
                    
                    var outerrange = d3.scaleLinear()
                        .domain([1, arraycities.length])
                        .range([2.2, 4]);
                    
                      
                    outerRadius = r/outerrange(datapie[0].postot);
                    
                    var arc = d3.arc()
                                    .innerRadius(innerRadius)
                                    .outerRadius(outerRadius);
                    
                    
                    if(datapie[0].provincia == cc){
                        d3.select("#pie1").selectAll("svg").remove();
                        var selectedval = "#pie1";
                        var selecttitle = "title1pie";
                        var xPosition2 = (wPie/2);
                       
                        
                    }else if(datapie[0].provincia == ccc){
                        d3.select("#pie2").selectAll("svg").remove();
                        var selectedval = "#pie2";
                        var selecttitle = "title2pie";
                        var xPosition2 = (wPie/2)+wPie;
                       
                    }
                    
                    
                    document.getElementById(selecttitle).innerHTML=datapie[0].provincia;
                  
                    
                    
                        var arcs =   d3.select(selectedval)
                                  .append("svg")
                                  .attr("viewBox","0 0 "+r+" " +r)
//                                  .attr("width", r)
//                                  .attr("height", r)
                                  .selectAll("g.arc")
                                  .data(pie(datapie))
                                  .enter()
                                  .append("g")
                                  .attr("class", "arc") 
                                  .attr("transform", "translate(" + r/2 + "," + r/2 + ")")
                                    ;
                
                
                         var firsttxt, secondtxt, txt1, txt2;
                         
                
                
                
                
                
                       arcs.append("path")
                             .attr("fill", function(d, i) {
                               
                                    return colorFS(d.data);
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
                            ; 


                        arcs.append("text")
                                    .text(function(d){
                                        return d.data.postot+" of "+arraycities.length;
                                    })
                                     .attr("x", -(innerRadius/2)).attr("y", 0)
                                    .attr("font-family", "sans-serif")
                                    .attr("font-size", "0.6vw");
                
                       
                            
                
                
                            arcs.on("mouseover", function(d) {
                                
                               

                                        //Get this bar's x/y values, then augment for the tooltip
                                
                                
                                    d3.select(this)
                                       .attr("opacity", 0.5)
                                       .attr("stroke","black")
                                       .transition()
                                       .duration(1000)
                                       .attr("stroke-width", 0.021586616*r);

                                arcs.select("text").attr("stroke-width", 0);
                                
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
                                        .text(d.data.tipologia +" rank : "+d.data.pos+" out of 106");



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
                    d3.select("#legendapie").selectAll("svg").remove();
                    
                        var piel = d3.select("body")
                                        .select("#legendapie")
                                        .append("svg")
                                        .attr("width", wPie).attr("height", (0.7*r) )
//                                        .attr("viewBox","0 0 "+(wPie)+" " +(0.24*r))
                                        ;
                      

                        var legendpie = piel.append("g");
//                                            .attr("transform", function(d, i){
//                                                return "translate("+( i)*(0.05*r)+ ", "+( i)*(0.05*r)+")";
//                                            });


                     
                            
                            legendpie.append("rect").attr("x", 0).attr("y", 0)
                                                 .attr("width", 0.12*r)
                                                 .attr("height", 0.12*r)
                                                 .attr("fill", "#f44336");

                             legendpie.append("text").text("homicides")
                                        .attr("x", 2*(0.12*r)).attr("y", (1*(0.12*r)) )
                                        .attr("font-family", "sans-serif")
                                        .attr("font-size", "1.2vw");
                       
                    
                
                             
                             legendpie.append("rect")
                                                .attr("x", 0).attr("y", 2*(0.12*r))
                                                 .attr("width",0.12*r)

                                                 .attr("height", 0.12*r)
                                                 .attr("fill", "#f08f00");

                             legendpie.append("text").text("theft")
                                        .attr("x",  2*(0.12*r)).attr("y", (3*(0.12*r)) )
                                        .attr("font-family", "sans-serif")
                                        .attr("font-size", "1.2vw");

                    
                             legendpie.append("rect")
                                                .attr("x", 0).attr("y", 4*(0.12*r))
                                                 .attr("width", 0.12*r)

                                                 .attr("height", 0.12*r)
                                                 .attr("fill", "#005cbf");

                             legendpie.append("text").text("other crimes")
                                        .attr("x",  2*(0.12*r)).attr("y", (5*(0.12*r)) )
                                        .attr("font-family", "sans-serif")
                                        .attr("font-size", "1.2vw");
                    
                    

            
                    }
                    
              
                bars("omicidi"); 
              
                    
                       
    
                    
                    
                function bars(subtype){                
          
                    
                    
                
                document.getElementById("resultBars").innerHTML=subtype;    
        
        document.getElementById("title1group").innerHTML=cc;
        document.getElementById("title2group").innerHTML=ccc;
            
            
        var barsinfo = [];
        barsinfo.splice(0,barsinfo.length);

        d3.select('#multiplebars').selectAll("svg").remove();
        
        
       
        if(subtype=="omicidi"){
            datasline=omicidi; 
        }else if(subtype=="furto"){
            datasline=furto; 
        }else if(subtype=="altri"){
            datasline=altri; 
        }
     


        for(var y=0;y<cityinfo1.length;y++){

                if( datasline.includes(cityinfo1[y].tipologia) ){

                        barsinfo.push({
                             city:cc,
                             val: cityinfo1[y].denunce100,
                             type: cityinfo1[y].tipologia

                        })

                }
                
                if( datasline.includes(cityinfo2[y].tipologia) ){

                        barsinfo.push({
                             city:ccc,
                             val: cityinfo2[y].denunce100,
                             type: cityinfo2[y].tipologia

                        })

                }


            }  

        var widthBar = $('#multiplebars').innerWidth();
        var heightBar = widthBar/2;
    // set the dimensions and margins of the graph

    var margin = {top: 0.034158839*heightBar, right: 0.017079419*widthBar, bottom: 0.051238258*heightBar, left: 0.034158839*widthBar},
        widthBar = 0.819812126*widthBar - margin.left - margin.right, 
        heightBar = 0.853970965*heightBar - margin.top - margin.bottom;  

                    
              
    var ybar = d3.scaleBand()
              .range([heightBar, 0])
              .padding(0.3);
//              

    var xbar = d3.scaleLinear()
              .range([0.062553419*widthBar, widthBar]);

    
var barsvg = d3.select("#multiplebars").append("svg")
        .attr("viewBox","0 0 "+( widthBar + margin.left + margin.right )+" " +( heightBar + margin.top + margin.bottom ) )
      .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
    


      // Scale the range of the data in the domains
      xbar.domain([0, d3.max(barsinfo, function(d){ return d.val; })])
      ybar.domain(d3.range(barsinfo.length));
      
      
       
//         var yAxisType = d3.axisLeft()
//                               .scale(ybar)
//                               .tickFormat(function(d, i){ return barsinfo[i].type })
//                                ;
// 
                    
             
                    
                    
                    
        
       
         // append the rectangles for the bar chart
                      barsvg.selectAll(".rect1")
                          .data(barsinfo)
                        .enter().append("rect").attr("class", "rect1")
                          .attr("transform", "translate(0," + (ybar.bandwidth())/2.5 + ")")
                          .transition("moverect")
                          .on("start", function(d){
                          d3.select("#multiplebars").classed("unclickable", true);
                            })
                          
                          .delay(function(d, i){
                                   return i*120;
                         })
                          .ease(d3.easeCircle)
                          .on("end", function(d){
                          d3.select("#multiplebars").classed("unclickable", false);
                            })
                          .duration(500)


                          //.attr("x", function(d) { return x(d.sales); })
                          .attr("width", function(d, i) { 

                               if( i %2 != 0 ){
                            
                                    return xbar(d.val);
                               }
                          })
                          .attr("y", function(d, i) { 

                               if( i %2 != 0 ){
                            
                                    return ybar(i);
                               }
                          })
                           .attr("height", function(d, i) { 

                               if( i %2 != 0 ){
                            
                                    return ybar.bandwidth();
                               }
                          })
                          .attr("fill", function(d){
                        
                                    if(omicidi.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#f44336";
                                    }
                                    if(furto.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#f08f00";
                                    }
                                    if(altri.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#005cbf";
                                    }
                            })
                            ;
                    
                barsvg.selectAll(".rect2")
                          .data(barsinfo)
                        .enter().append("rect").attr("class", "rect2")
//                          .attr("transform", "translate(0," + 30 + ")")
                          .transition("moverect")
                          .on("start", function(d){
                       
                          d3.select("#multiplebars").classed("unclickable", true);
                            })
                          
                          .delay(function(d, i){
                                   return i*120;
                         })
                          .ease(d3.easeCircle)
                         
                          .duration(500)
                          .on("end", function(d){
                          d3.select("#multiplebars").classed("unclickable", false);
                            })

                          //.attr("x", function(d) { return x(d.sales); })
                          .attr("width", function(d, i) { 

                               if( i %2 == 0 ){
                            
                                    return xbar(d.val);
                               }
                          })
                          .attr("y", function(d, i) { 

                               if( i %2 == 0 ){
                            
                                    return ybar(i);
                               }
                          })
                           .attr("height", function(d, i) { 

                               if( i %2 == 0 ){
                            
                                    return ybar.bandwidth();
                               }
                          })
                          .attr("fill", function(d){
                        
                                    if(omicidi.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#f44336";
                                    }
                                    if(furto.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#f08f00";
                                    }
                                    if(altri.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#005cbf";
                                    }
                            })
                            ;
                    
                    
                
                    
                    
                    
                    
                      barsvg.selectAll(".rect1").data(barsinfo)
                              .on("mouseover", function(d) {

                            //Get this bar's x/y values, then augment for the tooltip
                         
                          
                            d3.select(this)
                                    
                                    .style("fill", function(d){
                        
                                        if(omicidi.includes(d.type)){

                                           return "#f44336";
                                        }
                                        if(furto.includes(d.type)){

                                           return "#f08f00";
                                        }
                                        if(altri.includes(d.type)){

                                           return "#005cbf";
                                        }
                                    })
                                    .style("stroke", "gray").style("stroke-width", 0.015012821*heightBar)
                                    .transition("coloron")
                                    .duration(1000)
                                    ;


                          var xPosition = (widthBar / 2);

           
                                var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

//                            console.log(offset-maplegendah);
                            var yPosition = parseFloat(offset);
                                        
                          
                          
                          

                            //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                           .text(d.type +" : "+d.val)
//                                .text("number of crimes per 100 thousand inhabitants for "+d.type +" : "+d.val)
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);

                       })
                       .on("mouseout", function() {
                             d3.select(this)
                                    .style("fill", function(d){
                        
                                    if(omicidi.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#f44336";
                                    }
                                    if(furto.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#f08f00";
                                    }
                                    if(altri.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#005cbf";
                                    }
                            })
                                    .style("stroke", "black").style("stroke-width", 0)
                                    
                                    .transition("coloroff")
                                    .duration(1000);
                            //Hide the tooltip
                            d3.select("#tooltip").classed("hidden", true);

                       });
                        

                     barsvg.selectAll(".rect2").data(barsinfo)
                              .on("mouseover", function(d) {

                            //Get this bar's x/y values, then augment for the tooltip
                         
                          
                            d3.select(this)
                                    .style("fill", function(d){
                        
                                        if(omicidi.includes(d.type)){

                                           return "#f44336";
                                        }
                                        if(furto.includes(d.type)){

                                           return "#f08f00";
                                        }
                                        if(altri.includes(d.type)){

                                           return "#005cbf";
                                        }
                                    })
                                    .style("stroke", "gray").style("stroke-width", 0.015012821*heightBar)
                                    .transition("coloron")
                                    .duration(1000)
                                    ;


                          var xPosition = (widthBar / 2);

           
                                var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

//                            console.log(offset-maplegendah);
                            var yPosition = parseFloat(offset);
                                        
                          
                          
                          

                            //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text(d.type +" : "+d.val)
//                                .text("number of crimes per 100 thousand inhabitants for "+d.type +" : "+d.val)
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);

                       })
                       .on("mouseout", function() {
                             d3.select(this)
                                    .style("fill", function(d){
                        
                                    if(omicidi.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#f44336";
                                    }
                                    if(furto.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#f08f00";
                                    }
                                    if(altri.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#005cbf";
                                    }
                            })
                                    .style("stroke", "black").style("stroke-width", 0)
                                    
                                    .transition("coloroff")
                                    .duration(1000);
                            //Hide the tooltip
                            d3.select("#tooltip").classed("hidden", true);

                       });
                    
                    
                          // add the x Axis
                      barsvg.append("g").attr("id", "xAxisBars")
                          .attr("transform", "translate(0," + heightBar + ")")
                          .call(d3.axisBottom(xbar));

                    
                    var ybarAxis = d3.scaleBand()
                                  .range([heightBar, 0])
                                  .padding(0.3);
                    
                    ybarAxis.domain(d3.range(barsinfo.length/2));
                      // add the y Axis
                      barsvg.append("g").attr("id", "yAxisBars")
//                          .attr("transform", "translate(100," + 0 + ")")
                          .call(d3.axisLeft(ybarAxis));
        
              
                         
                     omicidibtn2.addEventListener('click', () => { 
                         if(document.getElementById("resultBars").innerHTML!="omicidi")
                                    bars("omicidi"); 
                     });   
              

                 
                     furtobtn2.addEventListener('click', () => {
                         if(document.getElementById("resultBars").innerHTML!="furto")
                                    bars("furto"); 
                     }); 
                 

                
                     altribtn2.addEventListener('click', () => { 
                        if(document.getElementById("resultBars").innerHTML!="altri")
                                    bars("altri"); 
                     });   
                 
                    
                
    }
                    
                    
                }else{
                    d3.select("#doublepie").classed("hidden", true);
                    d3.select("#multiplebars").classed("hidden", true);
                }
            
            
            
                    
                }
                    
        
       
        return dataset;
        
    }   
    
   
});
    
}
    }


function crimesItaly(){
      
         
       
         
            
            
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
                    d3.select("#barcharts").classed("hidden", bool);
                    d3.select("#podiumContainer").classed("hidden", bool);  
                   
                
                if(bool){
                    d3.select("#omicidi1").classed("btn btn-danger", false);
                    d3.select("#furto1").classed("btn btn-warning", false);
                    d3.select("#altri1").classed("btn btn-primary", false);
                    d3.select("#omicidi1").classed("hidden", true);
                    d3.select("#furto1").classed("hidden", true);
                    d3.select("#altri1").classed("hidden", true);
                }else{
                    d3.select("#omicidi1").classed("hidden", false);
                    d3.select("#furto1").classed("hidden", false);
                    d3.select("#altri1").classed("hidden", false);
                    d3.select("#omicidi1").classed("btn btn-danger", true);
                    d3.select("#furto1").classed("btn btn-warning", true);
                    d3.select("#altri1").classed("btn btn-primary", true);
                    
                }
                    
            }
        
       
			
         
			//Function for converting CSV values from strings to Dates and numbers
			//We assume one column named 'Date' plus several others that will be converted to ints 
            function conversion(d) {
                  
               
                if(d.includes(",")){
                    return d.replace(",", ".");
                }else{
                    if(d==""){
                        return 0;
                    }else{
                        if(d.includes(".")){
                            d.replace(".", "");
                        }else{
                            return d;
                        }
                    }
                }
                
            }
            
        
			var rowConverter = function(d) {
               
                return {
				            pos:parseInt(d.Pos),
				            provincia: d.Provincia,  
                    
                            numReati: parseInt(conversion(d.NumeroReati)),
                            numReati100: roundTo(parseFloat(conversion(d.Ogni100milaAbitanti)), 2),
                            tipologia:d.Tipologia,
                            lat:parseFloat(d.latitude),
                            lon:parseFloat(d.longitude)
                }
			}
            
            
          
         
   
         // https://crossorigin.me/file:///home/padrone/Documenti/d3-book-master/project/CCrime.csv
       //  https://raw.githubusercontent.com/paolo-peretti/Dashboard-Crime/master/data/CCrime.csv
     
     //http://localhost:8000/Documenti/CrimeProject/data/CCcrime.csv
d3.csv("https://raw.githubusercontent.com/paolo-peretti/Dashboard-Crime/master/data/ita2018.csv", rowConverter, function(data) {
                
    
    
    let dataset = data;   
    
    
    
    
    
    var arraycities=[];
     arraycities.splice(0,arraycities.length);
     var j, i, city, country, tip, citytmp, countrytmp;
                
     var ul = document.getElementById("tips");
                
                //tips
    for(i=0;i<dataset.length;i++){
                    
         if( !arraycities.includes( (dataset[i].provincia).toUpperCase()) ){
             
             arraycities.push( (dataset[i].provincia).toUpperCase() );
             
             
             var li = document.createElement("li");
             tip=dataset[i]["provincia"];
                    
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
     }
                
    
    
    
    
    
  
                let inputGetCC = document.querySelector('#cc');
                let btnGetCC = document.querySelector('#btn-cc');
                let liFaction = document.querySelector('#first');
                let liSaction = document.querySelector('#second');
                let changeorder = document.querySelector('#changeorder');
    
                let omicidibtn1 = document.querySelector('#omicidi1'); 
                let furtobtn1 = document.querySelector('#furto1'); 
                let altribtn1 = document.querySelector('#altri1'); 
    
    
    
                let omicidibtn2 = document.querySelector('#omicidi2'); 
                let furtobtn2 = document.querySelector('#furto2'); 
                let altribtn2 = document.querySelector('#altri2'); 
                
                let posimg = document.querySelector('#posimg'); 
                let pos1img = document.querySelector('#pos1img'); 
                let pos2img = document.querySelector('#pos2img'); 
    
    
    
                let changetype = document.querySelector('#typeoptions'); 
    
                let CheckTwo=true;
                
                 
                  var typeDefault = "ranking of crimes 2018";
                  var type = "ranking of crimes 2018";
    
                
                 
    
                   
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
                                
                                    dataset = Crime(value);
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
                                 
                                    
                                    verify = arraycities.includes(value.toUpperCase()) ;
                                   
                                }else if (first!="" && second=="" ){
                                    
                                    count=1;
                                    verify = arraycities.includes(value.toUpperCase()) ;
                                    
                                    
                                }else if (first!="" && second!="" ){
                                    
                                    verify = arraycities.includes(value.toUpperCase()) ;
                                     
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
                                
                                
                                     dataset = Crime(arrayFS);
                                
                               
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
                                
                                    
                      dataset = Crime(arrayFS);
                                
                               
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
                                
                                    
                      dataset = Crime(arrayFS);
                                
                               
                });
            
    
    
    
       
    
     var typedata = [];
        typedata.splice(0,typedata.length);
        
          for(var i=0;i<dataset.length;i++){
              if( dataset[i].tipologia == typeDefault ){
               
                  typedata.push(dataset[i]);
              }
          }
                //now pointmap
     
                d3.select("#containerItaly").classed("hidden", false);
                
                var widthmap = $('#mapItaly').width();
       
                var heightmap = widthmap;
//        console.log(heightmap)
    
    
    
              
                var projection = d3.geoMercator()
//                        .scale(scale)
//                        .translate([0.079983871*scale,0.948944444*scale])

//                        .translate([-551/3.44444444444,551*3.44444444444])
                

                    .center([13, 42])                // GPS of location to zoom on
                    .scale(3.8*heightmap)   //2000                    // This is like the zoom
                    .translate([ widthmap/2, heightmap/2 ])

                    ;
//        
                 var svgmap = d3.select("body").select("#mapItaly")
						.append("svg")
                        .attr("viewBox","0 0 "+widthmap+" " +heightmap);
        
            
            
                  var clickedbtn = [];
                    clickedbtn.splice(0,clickedbtn.length);
            
        
                 var circles = svgmap.selectAll("circle")
                            .data(typedata)
                            .enter()
                            .append("circle")
                            .attr("cx", function(d){
                                    return projection([d.lon, d.lat])[0];
                            })
                            .attr("cy", function(d){
                                    return projection([d.lon, d.lat])[1];
                            })
                            .attr("r", function(d){
                                //0.25
                                 return Math.sqrt(parseInt(d.numReati100)) * (0.00045*heightmap);
                                  
                            });
    
                            circles.style("fill", "red")
                            .style("stroke", "gray")
                            .style("stroke-width", 0.25)
                            .style("opacity", 0.75)
                            ;
    
                            circles.on("mouseover",function(d){
                                
                                     if( !clickedbtn.includes(d.provincia) ){
                                         
                                         d3.select(this)
                                            .style('fill','#7B68EE') 
                                            .transition("coloron")
                                            .duration(1000);
                                     }
                        

                            var xPosition = parseFloat(d3.select(this).attr("cx")) + widthmap ;
                           
                           var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

                            var yPosition = parseFloat(offset-(heightmap/5));
//                            var yPosition = parseFloat(offset);
                                
                                //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text(d.provincia +" ranked : "+d.pos +" out of "+arraycities.length)
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);
                                
                                
                                    })
                                   .on("mouseout",function(d){
                                
                                  d3.select("#tooltip").classed("hidden", true);
//                                         tip.hide(d);
                                        if( !clickedbtn.includes(d.provincia) ){

                                            d3.select(this).style('fill',"red") 
                                                  .style("stroke", "gray")
                                                  .style("stroke-width", 0.25)
                                                 .transition("coloron")
                                                 .duration(1000);

                                        }
                                
                                    })
                                   .on("click", function(d){
                             
                                    inputGetCC.value=d.provincia;
                                 
                                     btnGetCC.click();
                                 
                                    })
                                    ;
    
    
    
        btnGetCC.addEventListener('click', () => {
        

                                
              if(!CheckTwo){
                  
                   if( (clickedbtn[0]=="" || clickedbtn[0]==undefined) && !clickedbtn.includes(inputGetCC.value) ){
                        clickedbtn[0]=inputGetCC.value;
            
                   }else if( !clickedbtn.includes(inputGetCC.value) ){
                        clickedbtn[1]=inputGetCC.value;
                   }
                  
              }else{
                  clickedbtn.splice(0,clickedbtn.length);
                  clickedbtn.push(inputGetCC.value);
              }
                                
                 circles.style('fill',function(d){
                     
                             if( d.provincia == inputGetCC.value && CheckTwo ){
                                 return '#0ECEBA';
                             }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                                 if( clickedbtn[0]==d.provincia )
                                     return "#b643c8";
                                 
                                 if( clickedbtn[1]==d.provincia )
                                     return "#8e8e06";
                                      
                             }else{
                                 return "red";
                             }
                    })
                    .style('stroke', function(d){
                     
                         if(d.provincia == inputGetCC.value && CheckTwo ){
                             return 'black';
                         }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                                 if( clickedbtn[0]==d.provincia )
                                     return "black";
                                 
                                 if( clickedbtn[1]==d.provincia )
                                     return "black";
                                      
                         }else{
                             return "gray";
                         }
                    })
                    .style('stroke-width', function(d){
                     
                         if(d.provincia == inputGetCC.value && CheckTwo ){
                             return 5;
                         }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                                 if( clickedbtn[0]==d.provincia )
                                     return 5;
                                 
                                 if( clickedbtn[1]==d.provincia )
                                     return 5;
                                      
                         }else{
                             return 0.25;
                         }
                    });
    });
    
        liFaction.addEventListener('click', () => {
            clickedbtn[0]="";
            
             circles.style('fill',function(d){
                     
                             if( d.provincia == inputGetCC.value && CheckTwo ){
                                 return '#0ECEBA';
                             }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                                 if( clickedbtn[0]==d.provincia )
                                     return "#b643c8";
                                 
                                 if( clickedbtn[1]==d.provincia )
                                     return "#8e8e06";
                                      
                             }else{
                                 return "red";
                             }
                    })
                    .style('stroke', function(d){
                     
                         if(d.provincia == inputGetCC.value && CheckTwo ){
                             return 'black';
                         }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                                 if( clickedbtn[0]==d.provincia )
                                     return "black";
                                 
                                 if( clickedbtn[1]==d.provincia )
                                     return "black";
                                      
                         }else{
                             return "gray";
                         }
                    })
                    .style('stroke-width', function(d){
                     
                         if(d.provincia == inputGetCC.value && CheckTwo ){
                             return 5;
                         }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                                 if( clickedbtn[0]==d.provincia )
                                     return 5;
                                 
                                 if( clickedbtn[1]==d.provincia )
                                     return 5;
                                      
                         }else{
                             return 0.25;
                         }
                    });
        });
    
        liSaction.addEventListener('click', () => {
            clickedbtn[1]="";
            
             circles.style('fill',function(d){
                     
                             if( d.provincia == inputGetCC.value && CheckTwo ){
                                 return '#0ECEBA';
                             }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                                 if( clickedbtn[0]==d.provincia )
                                     return "#b643c8";
                                 
                                 if( clickedbtn[1]==d.provincia )
                                     return "#8e8e06";
                                      
                             }else{
                                 return "red";
                             }
                    })
                    .style('stroke', function(d){
                     
                         if(d.provincia == inputGetCC.value && CheckTwo ){
                             return 'black';
                         }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                                 if( clickedbtn[0]==d.provincia )
                                     return "black";
                                 
                                 if( clickedbtn[1]==d.provincia )
                                     return "black";
                                      
                         }else{
                             return "gray";
                         }
                    })
                    .style('stroke-width', function(d){
                     
                         if(d.provincia == inputGetCC.value && CheckTwo ){
                             return 5;
                         }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                                 if( clickedbtn[0]==d.provincia )
                                     return 5;
                                 
                                 if( clickedbtn[1]==d.provincia )
                                     return 5;
                                      
                         }else{
                             return 0.25;
                         }
                    });
        });
        
    
       
    

    
    var widthcircular = $("#circularbar").width();
        // set the dimensions and margins of the graph
        var margin = {top: 0.018315018*widthcircular, right: 0.018315018*widthcircular, bottom: 0.018315018*widthcircular, left: 0.018315018*widthcircular},
            widthCB = widthcircular - margin.left - margin.right,
            heightCB = widthcircular - margin.top - margin.bottom,
            outerRadius = Math.min(widthCB, heightCB) / 1.2,//1.4
            innerRadius = 0.212927757*outerRadius;//80
               
    // the outerRadius goes from the middle of the SVG area to the border

    
// append the svg object to the body of the page
        var circularsvg = d3.select("#circularbar")
          .append("svg")
          .attr("viewBox","0 0 "+(widthCB + margin.left + margin.right)+" " +(heightCB + margin.top + margin.bottom))
//            .attr("width", widthCB + margin.left + margin.right)
//            .attr("height", heightCB + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + widthCB / 2 + "," + ( heightCB/2 +(0.095057034*heightCB) )+ ")"); // Add 50 on Y translation, cause upper bars are longer

    
  var circulardata = typedata.sort(function(a,b) { return b.value - a.value; });
    
    
    // X scale
  var x = d3.scaleBand()
      .domain( circulardata.map(function(d) { return d.provincia; }) )
      .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
      .align(0)                  // This does nothing ?
      ; // The domain of the X axis is the list of states.

  // Y scale
  var y = d3.scaleRadial()
      .range([innerRadius, outerRadius])   // Domain will be define later.
      .domain([0, 20000]); // Domain of Y is from 0 to the max seen in the data

  // Add bars
  var circularbar = circularsvg.append("g")
    .selectAll("path")
    .data(circulardata)
    .enter()
    .append("path")
      .attr("fill", function(d){
            if(d.provincia == inputGetCC.value) 
                return "orange";
            else return "#69b3a2";
      })
      .attr("d", d3.arc()     // imagine your doing a part of a donut plot
          .innerRadius(innerRadius)
          .outerRadius(function(d) { return y(d.numReati100); })
          .startAngle(function(d) { return x(d.provincia); })
          .endAngle(function(d) { return x(d.provincia) + x.bandwidth(); })
          .padAngle(0.015)
          .padRadius(innerRadius));
    
    
    circularbar.on("mouseover", function(d){
        
         if(!clickedbtn.includes(d.provincia)){
             
          d3.select(this)
            .style('fill','green') 
            .transition("coloron")
            .duration(1000);
         }
        
         var xPosition = widthmap/2 ;
                           
                           var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

                            var yPosition = parseFloat(offset-(heightmap/5));
//                            var yPosition = parseFloat(offset);
                                
                                //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text(d.provincia +" ranked : "+d.pos +" out of "+arraycities.length)
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);
                                
                                
        
            })
            .on("mouseout", function(d){
                
        if(!clickedbtn.includes(d.provincia)){
            
            d3.select(this)
                .style('fill','#69b3a2') 
                .transition("coloron")
                .duration(1000);
        }
         d3.select("#tooltip").classed("hidden", true);
        
            })
            .on("click", function(d){
        
                   inputGetCC.value=d.provincia;
                                 
                   btnGetCC.click();
      
            });
    

        btnGetCC.addEventListener('click', () => {
         
         
        

         
         
        circularbar.style("fill", function(d){
            
            if( d.provincia == inputGetCC.value && CheckTwo ){
               
                     return 'orange';
            }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){
                                 
                  if( clickedbtn[0]==d.provincia )
                            return "#b643c8";
                                 
                  if( clickedbtn[1]==d.provincia )
                            return "#8e8e06";
                                      
            }else{
                  return "#69b3a2";
            }
            
        });

               
    });
    
        liFaction.addEventListener('click', () => {
          
            
            circularbar.style("fill", function(d){
            
                if( d.provincia == inputGetCC.value && CheckTwo ){
                         return 'orange';
                }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){

                      if( clickedbtn[0]==d.provincia )
                                return "#b643c8";

                      if( clickedbtn[1]==d.provincia )
                                return "#8e8e06";

                      }else{
                                return "#69b3a2";
                      }

            });
             
        });
    
        liSaction.addEventListener('click', () => {
           
            
             circularbar.style("fill", function(d){
            
                if( d.provincia == inputGetCC.value && CheckTwo ){
                         return 'orange';
                }else if( clickedbtn.includes(d.provincia) && !CheckTwo ){

                      if( clickedbtn[0]==d.provincia )
                                return "#b643c8";

                      if( clickedbtn[1]==d.provincia )
                                return "#8e8e06";

                      }else{
                                return "#69b3a2";
                      }

            });
             
             
        });
        

   
        
    
      
    
    
    
    function Crime(str){
        
        
       
      
        
          if(Array.isArray(str)){
                        var cc=str[0];
                        var ccc=str[1];
                        var verifyCompare=true;
          }else{
                        var cc=str;
                        var verifyCompare=false;
          }
                        
           
                searchFunction();
        
        
             
    var maincategories = ["ranking of crimes 2018", "homicides", "theft", "other crimes"];

    var omicidi=["infanticide", "attempted murders", "voluntary manslaughter"];
                    
    var furto=["theft with tearing", "pickpocketing", "theft in homes", "theft in commercial establishments", "car theft", "robberies"];
    
    var altri=["extortions", "usury", "criminal associations", "mafia-type associations", "money laundering", "scams and computer fraud", "drugs", "arson", "rape"];
      
       
                
                
                
        
                if(!verifyCompare ){
                    
                    
                    
                    
                    posimg.addEventListener('mouseover', () => {
                        
                        
//                        var mleft = $("#info").css("margin-left");
//                        
//                        mleft = mleft.split("px");
//                        
//                            var xPosition = ($("#info").width()/2)+$(".sidebar").width()+1*(mleft[0]);
                            var xPosition = ($("#info").width());

                            var yPosition = $("#info").height();
                                        

                            //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text("The rank is calculated on the number of crimes per 100 thousand inhabitants.")
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);
                        
                        
                    });
                    
                    posimg.addEventListener('mouseout', () => {
                        d3.select("#tooltip").classed("hidden", true);
                    });
                    
                    
                    
                    
                    
                    d3.select("#multiplebars").classed("hidden", true);
                    d3.select("#doublepie").classed("hidden", true);
                    
                    
                    
                    if(arraycities.includes(cc.toUpperCase())){
                        
                         hiddenElem(false);
                    }
                    
                    d3.select("#info1").classed("hidden", true);
                    d3.select("#info2").classed("hidden", true);
                    
                    var cityinfo = [];
                     cityinfo.splice(0,cityinfo.length);
                    
                    for(var i=0;i<dataset.length;i++){
                        
                        if( dataset[i].provincia == cc ){
                            
                            cityinfo.push({
                                
                                pos: dataset[i].pos,
                                denunce: dataset[i].numReati,
                                denunce100: dataset[i].numReati100,
                                tipologia: dataset[i].tipologia
                                
                            })
                            
                        }
                        
                    }
                    
                    var bool=false;
                    
                    for(var i=0;i<cityinfo.length&&!bool;i++){
                        
                        if( cityinfo[i].tipologia == typeDefault ){
                            
                            bool=true;
                            var posinfo=cityinfo[i].pos;
                            var denunceinfo=cityinfo[i].denunce;
                            var denunce100info=cityinfo[i].denunce100;
                        }
                    }
                    
                    
                   
                    
                    document.getElementById("cname").innerHTML = cc;
                    document.getElementById("type").innerHTML = type+" :";
                    document.getElementById("pos").innerHTML = "rank = "+posinfo+" out of "+arraycities.length; 
                    document.getElementById("denunce").innerHTML = "number of crimes = "+denunceinfo;
                    document.getElementById("denunce100mila").innerHTML = "number of crimes per 100 thousand inhabitants = "+denunce100info;
                    
                    
                     	
    
     
                    
    bars("none");    
                    
    
                    
                    
                    
    function bars(subtype){                
          
        
        
        document.getElementById("resultBars").innerHTML=subtype; 
            
            
        var barsinfo = [];
        barsinfo.splice(0,barsinfo.length);

        d3.select('#barcharts').selectAll("svg").remove();
        
        var datasline=[];
        datasline.splice(0,datasline.length);
        
        var averageline=[];
        averageline.splice(0,averageline.length);
        
        if(subtype=="none"){
             datasline=union_arrays(omicidi, furto); 
             datasline=union_arrays(datasline, altri); 
             
        }else if(subtype=="omicidi"){
            datasline=omicidi; 
        }else if(subtype=="furto"){
            datasline=furto; 
        }else if(subtype=="altri"){
            datasline=altri; 
        }
        var sum,
            count,
            average;
       
//        for(var s=0;s<datasline.length;s++){
//            sum=0;
//            count=0;
//            for(var i=0;i<dataset.length;i++){
//                
//                if( datasline[s] == dataset[i].tipologia){
//                        sum+=dataset[i].numReati100;
//                        count++;
//                }
//
//                
//            }
//            average = roundTo(parseFloat(sum/count),2);
//            
//            averageline.push({
//                val: average,
//                type: datasline[s]
//            });
//        }
        
//        console.log(averageline)

        for(var y=0;y<cityinfo.length;y++){

                if( datasline.includes(cityinfo[y].tipologia) ){



                        barsinfo.push({

                             val: cityinfo[y].denunce,
                             type: cityinfo[y].tipologia

                        })

                }


            }  

        var widthBar = $('#barcharts').innerWidth();
        var heightBar = widthBar/2;
    // set the dimensions and margins of the graph

    var margin = {top: 0.034158839*heightBar, right: 0.017079419*widthBar, bottom: 0.051238258*heightBar, left: 0.034158839*widthBar},
        widthBar = 0.819812126*widthBar - margin.left - margin.right, 
        heightBar = 0.853970965*heightBar - margin.top - margin.bottom;  

    // set the ranges
    var ybar = d3.scaleBand()
              .range([heightBar, 0])
              .padding(0.3);

    var xbar = d3.scaleLinear()
              .range([0.062553419*widthBar, widthBar]);



    var barsvg = d3.select("#barcharts").append("svg")
        .attr("viewBox","0 0 "+( widthBar + margin.left + margin.right )+" " +( heightBar + margin.top + margin.bottom ) )
    //    .attr("width", widthBar + margin.left + margin.right +0.155555556*widthBar)
    //    .attr("height", heightBar + margin.top + margin.bottom)
      .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");


      // Scale the range of the data in the domains
      xbar.domain([0, d3.max(barsinfo, function(d){ return d.val; })])
      ybar.domain(d3.range(barsinfo.length));
      //y.domain([0, d3.max(data, function(d) { return d.sales; })]);
      
       
//         var yAxisType = d3.axisLeft()
//                               .scale(ybar)
//                               .tickFormat(function(d, i){ return barsinfo[i].type })
//                                ;
// 
        
        
         // append the rectangles for the bar chart
                      barsvg.selectAll("rect")
                          .data(barsinfo)
                        .enter().append("rect")
//                          .attr("transform", "translate(100," + 0 + ")")
                          .transition("moverect")
                          .on("start", function(d){
                          d3.select("#barcharts").classed("unclickable", true);
                            })
                          
                          .delay(function(d, i){
                                   return i*120;
                         })
                          .ease(d3.easeCircle)
                          .on("end", function(d){
                          d3.select("#barcharts").classed("unclickable", false);
                            })
                          .duration(500)

                          
                          .attr("class", "bar").attr("id", function(d, i){
                                    return "r"+i;
                        })

                          //.attr("x", function(d) { return x(d.sales); })
                          .attr("width", function(d) {return xbar(d.val); } )
                          .attr("y", function(d, i) { return ybar(i); })
                          .attr("height", ybar.bandwidth())
                          .attr("fill", function(d){
                          
                                    if(omicidi.includes(d.type)){
                                       return "#f44336";
                                    }
                                    if(furto.includes(d.type)){
                                       return "#f08f00";
                                    }
                                    if(altri.includes(d.type)){
                                       return "#005cbf";
                                    }
                            })
                            ;
                    
                      barsvg.selectAll("rect").data(barsinfo)
                              .on("mouseover", function(d) {

                            //Get this bar's x/y values, then augment for the tooltip
                         
                          
                            d3.select(this)
                                    .style("stroke", "gray").style("stroke-width", 0.015012821*heightBar)
                                    .transition("coloron")
                                    .duration(1000)
                                    ;


                          var xPosition = (widthBar / 2);

           
                                var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;
                                 
                          
                          
                      

//                            console.log(offset-maplegendah);
                            var yPosition = parseFloat(offset);
                                        
                          
                          
                          

                            //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text(d.type +" : "+d.val+" number of crimes")
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
                      barsvg.append("g").attr("id", "xAxisBars")
                          .attr("transform", "translate(0," + heightBar + ")")
                          .call(d3.axisBottom(xbar));

                      // add the y Axis
                      barsvg.append("g").attr("id", "yAxisBars")
//                          .attr("transform", "translate(100," + 0 + ")")
                          .call(d3.axisLeft(ybar));
        
                    
                    
        
        
                     omicidibtn1.addEventListener('click', () => { 
                         if(document.getElementById("resultBars").innerHTML!="omicidi")
                                    bars("omicidi"); 
                     });   
              

                 
                     furtobtn1.addEventListener('click', () => {
                         if(document.getElementById("resultBars").innerHTML!="furto")
                                    bars("furto"); 
                     }); 
                 

                
                     altribtn1.addEventListener('click', () => { 
                        if(document.getElementById("resultBars").innerHTML!="altri")
                                    bars("altri"); 
                     });   
                    
   
    

                    
                    
                
    }
    
   
      podio();
                    
                    
     function podio(){ 

         
         
         document.getElementById("podioresult").innerHTML=type;
         
         
         
                            var relatedCities = [];
         
                            if(relatedCities != []){
                                relatedCities.splice(0,relatedCities.length);
                            }
                             d3.select("#podium").selectAll("svg").remove(); 

                        
                            var typetmp=type;
                             
                           
                    for(i=0;i<dataset.length;i++){


                        if( typetmp == dataset[i].tipologia ){

                              relatedCities.push(
                                                    {
                                                    city: dataset[i]["provincia"],
                                                    val: dataset[i]["numReati100"],
                                                    type : typetmp
                                                    }
                                            ); 

                        }
                        
                    }    
//                             console.log(relatedCities) 
                      


                             
                     
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
//                                    console.log(podium)
                        
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

        document.getElementById("titlepodiump").innerHTML="Top 3 number of crimes per 100 thousand inhabitants for : "+typetmp;
                                         
                                         
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
                                             d3.select("#typeoptions").classed("unclickable", true);
                                             
                                            
                                            })
                                         .on("end", function(d, i) {
                                        
                                                 d3.select("#typeoptions").classed("unclickable", false);

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
                                      
                                        if(omicidi.includes(typetmp)){
                                            return "#f44336";
                                        }
                                        if(furto.includes(typetmp)){
                                            return "#f08f00";
                                        }
                                        if(altri.includes(typetmp)){
                                            return "#005cbf";
                                        }
                                        else{
                                            return "#566573";
                                        }
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
                                           .attr("fill", "white");


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

                                               return d.val;

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
                                           .attr("fill", "white");

                                }

                }  
                    
                    
     changetype.addEventListener('click', () => {
         
         if( document.getElementById("podioresult").innerHTML!=$("#typeoptions").val() ){
             
                        type = $("#typeoptions").val();
                        podio();
             
         }
         
     });               
                    
              
     
                            
                    
                    
                    
        }
        else if(verifyCompare){
            
            
            
            
            
            
            
            
             pos1img.addEventListener('mouseover', () => {
                        
                        
//                        var mleft = $("#info").css("margin-left");
//                        
//                        mleft = mleft.split("px");
//                        
//                            var xPosition = ($("#info").width()/2)+$(".sidebar").width()+1*(mleft[0]);
                            var xPosition = ($("#info1").width());

                            var yPosition = $("#info1").height();
                                        

                            //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text("The rank is calculated on the number of crimes per 100 thousand inhabitants.")
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);
                        
                        
                    });
                    
                    pos1img.addEventListener('mouseout', () => {
                        d3.select("#tooltip").classed("hidden", true);
                    });
                    
            
              pos2img.addEventListener('mouseover', () => {
                        
                        
//                        var mleft = $("#info").css("margin-left");
//                        
//                        mleft = mleft.split("px");
//                        
                            var xPosition = ($("#info2").width()*2);
//                            var xPosition = ($("#info2").width());

                            var yPosition = $("#info2").height();
                                        

                            //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text("The rank is calculated on the number of crimes per 100 thousand inhabitants.")
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);
                        
                        
                    });
                    
                    pos2img.addEventListener('mouseout', () => {
                        d3.select("#tooltip").classed("hidden", true);
                    });
                    
            
            
            
            
            
            
            
            
                    
                    d3.select("#omicidi1").classed("hidden", false);
                    d3.select("#furto1").classed("hidden", false);
                    d3.select("#altri1").classed("hidden", false);
                    d3.select("#omicidi1").classed("btn btn-danger", true);
                    d3.select("#furto1").classed("btn btn-warning", true);
                    d3.select("#altri1").classed("btn btn-primary", true);
                    
                    
                    hiddenElem(true);
                    
                    if( arraycities.includes(cc.toUpperCase()) ){
                        d3.select("#info1").classed("hidden", false);
                    }
                    if( arraycities.includes(ccc.toUpperCase()) ){
                        d3.select("#info2").classed("hidden", false);
                    }
                    
                    d3.select("#info").classed("hidden", true);
                    
                    if(cc==undefined || cc==""){
                         document.getElementById("info2").style.marginLeft = "9%";
                         document.getElementById("info2").style.marginRight = "50%";
                    }else{
                      
                         document.getElementById("info2").style.marginLeft = "1%";
                         document.getElementById("info2").style.marginRight = "9%";
                    }
                    
                    
                    
                    var cityinfo1 = [];
                     cityinfo1.splice(0,cityinfo1.length);
                     var cityinfo2 = [];
                     cityinfo2.splice(0,cityinfo2.length);
                    
                    for(var i=0;i<dataset.length;i++){
                        
                        if(cc!=undefined && cc!="" && cc!=null){
                            
                            if( dataset[i].provincia == cc ){

                                cityinfo1.push({

                                    pos: dataset[i].pos,
                                    denunce: dataset[i].numReati,
                                    denunce100: dataset[i].numReati100,
                                    tipologia: dataset[i].tipologia

                                })
                            }
                            
                        }
                        if(ccc!=undefined && ccc!="" && ccc!=null){ 
                            
                            if( dataset[i].provincia == ccc ){

                                cityinfo2.push({

                                    pos: dataset[i].pos,
                                    denunce: dataset[i].numReati,
                                    denunce100: dataset[i].numReati100,
                                    tipologia: dataset[i].tipologia

                                })         
                            }
                        
                        }
                    }
                    
                    var bool=false;
                    if(cc!=undefined && cc!="" && cc!=null){
                        
                        for(var i=0;i<cityinfo1.length&&!bool;i++){

                            if( cityinfo1[i].tipologia == typeDefault ){

                                bool=true;
                                var posinfo1=cityinfo1[i].pos;
                                var denunceinfo1=cityinfo1[i].denunce;
                                var denunce100info1=cityinfo1[i].denunce100;
                            }
                        }
                        
                    }
                    bool=false;
                        
                    if(ccc!=undefined && ccc!="" && ccc!=null){
                        
                        for(var i=0;i<cityinfo2.length&&!bool;i++){

                            if( cityinfo2[i].tipologia == typeDefault ){

                                bool=true;
                                var posinfo2=cityinfo2[i].pos;
                                var denunceinfo2=cityinfo2[i].denunce;
                                var denunce100info2=cityinfo2[i].denunce100;
                            }
                        }
                    }
                    
                    if(cc!=undefined && cc!="" && cc!=null){
                        

                        document.getElementById("cname1").innerHTML = cc;
                        document.getElementById("type1").innerHTML = type+" :";
                        document.getElementById("pos1").innerHTML = "rank = "+posinfo1+" out of "+arraycities.length; 
                        document.getElementById("denunce1").innerHTML = "number of crimes = "+denunceinfo1;
                        document.getElementById("denunce100mila1").innerHTML = "number of crimes per 100 thousand inhabitants = "+denunce100info1;
                    }else{
                        d3.select("#info1").classed("hidden", true);
                    }
                    
                    if(ccc!=undefined && ccc!="" && ccc!=null){
                       

                        document.getElementById("cname2").innerHTML = ccc;
                        document.getElementById("type2").innerHTML = type+" :";
                        document.getElementById("pos2").innerHTML = "rank = "+posinfo2+" out of "+arraycities.length; 
                        document.getElementById("denunce2").innerHTML = "number of crimes = "+denunceinfo2;
                        document.getElementById("denunce100mila2").innerHTML = "number of crimes per 100 thousand inhabitants = "+denunce100info2;
                    }else{
                        d3.select("#info2").classed("hidden", true);
                    }

            
                if( (cc!=undefined && cc!="" && cc!=null) && (ccc!=undefined && ccc!="" && ccc!=null) ){
                    
                    d3.select("#doublepie").classed("hidden", false);
                    d3.select("#multiplebars").classed("hidden", false);
                    
                     var wPie=$("#pie1").width();
                    

                    
                        var r = wPie/2;
                        


                        var outerRadius = r/2;

                        var innerRadius = r/5;//change to make a doughnut

                        var arc = d3.arc()
                                    .innerRadius(innerRadius)
                                    .outerRadius(outerRadius);

                        var pie = d3.pie()
                                    .value(function(d) {

                                        return (arraycities.length+1)-d.pos; });
                    
                    
//                    console.log(pie(datapie))
                        var colorFS = function(d){
                            
                            if(d.tipologia == "homicides"){
                                       return "#f44336";
                            }
                            if(d.tipologia == "theft"){
                                       return "#f08f00";
                            }
                            if(d.tipologia == "other crimes"){
                                       return "#005cbf";
                            }
                            
                        }
                        
                        
                function datapie(datapie, citytmp){
                        
                        var newinfo = [];
                         newinfo.splice(0,newinfo.length);
                    
                        for(var i=0;i<datapie.length;i++){
                             
                            if( maincategories.includes(datapie[i].tipologia) && datapie[i].tipologia != "ranking of crimes 2018" ){
                               
                                newinfo.push({
                                    provincia: citytmp,
                                    postot: datapie[0].pos,
                                    pos: datapie[i].pos,
                                    tipologia: datapie[i].tipologia
                                });
                            }
                        }
                       
                    return newinfo;
                }
                        
                    
                pieCreator(datapie(cityinfo1, cc));
                pieCreator(datapie(cityinfo2, ccc));    
                    
                    
                function  pieCreator(datapie){
                    
                    
                    
                    var outerrange = d3.scaleLinear()
                        .domain([1, arraycities.length])
                        .range([2.2, 4]);
                    
                      
                    outerRadius = r/outerrange(datapie[0].postot);
                    
                    var arc = d3.arc()
                                    .innerRadius(innerRadius)
                                    .outerRadius(outerRadius);
                    
                    
                    if(datapie[0].provincia == cc){
                        d3.select("#pie1").selectAll("svg").remove();
                        var selectedval = "#pie1";
                        var selecttitle = "title1pie";
                        var xPosition2 = (wPie/2);
                       
                        
                    }else if(datapie[0].provincia == ccc){
                        d3.select("#pie2").selectAll("svg").remove();
                        var selectedval = "#pie2";
                        var selecttitle = "title2pie";
                        var xPosition2 = (wPie/2)+wPie;
                       
                    }
                    
                    
                    document.getElementById(selecttitle).innerHTML=datapie[0].provincia;
                  
                    
                    
                        var arcs =   d3.select(selectedval)
                                  .append("svg")
                                  .attr("viewBox","0 0 "+r+" " +r)
//                                  .attr("width", r)
//                                  .attr("height", r)
                                  .selectAll("g.arc")
                                  .data(pie(datapie))
                                  .enter()
                                  .append("g")
                                  .attr("class", "arc") 
                                  .attr("transform", "translate(" + r/2 + "," + r/2 + ")")
                                    ;
                
                
                         var firsttxt, secondtxt, txt1, txt2;
                         
                
                
                
                
                
                       arcs.append("path")
                             .attr("fill", function(d, i) {
                               
                                    return colorFS(d.data);
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
                            ; 


                        arcs.append("text")
                                    .text(function(d){
                                        return d.data.postot+" of "+arraycities.length;
                                    })
                                     .attr("x", -(innerRadius/2)).attr("y", 0)
                                    .attr("font-family", "sans-serif")
                                    .attr("font-size", "0.6vw");
                
                       
                            
                
                
                            arcs.on("mouseover", function(d) {
                                
                               

                                        //Get this bar's x/y values, then augment for the tooltip
                                
                                
                                    d3.select(this)
                                       .attr("opacity", 0.5)
                                       .attr("stroke","black")
                                       .transition()
                                       .duration(1000)
                                       .attr("stroke-width", 0.021586616*r);

                                arcs.select("text").attr("stroke-width", 0);
                                
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
                                        .text(d.data.tipologia +" rank : "+d.data.pos+" out of 106");



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
                    d3.select("#legendapie").selectAll("svg").remove();
                    
                        var piel = d3.select("body")
                                        .select("#legendapie")
                                        .append("svg")
                                        .attr("width", wPie).attr("height", (0.7*r) )
//                                        .attr("viewBox","0 0 "+(wPie)+" " +(0.24*r))
                                        ;
                      

                        var legendpie = piel.append("g");
//                                            .attr("transform", function(d, i){
//                                                return "translate("+( i)*(0.05*r)+ ", "+( i)*(0.05*r)+")";
//                                            });


                     
                            
                            legendpie.append("rect").attr("x", 0).attr("y", 0)
                                                 .attr("width", 0.12*r)
                                                 .attr("height", 0.12*r)
                                                 .attr("fill", "#f44336");

                             legendpie.append("text").text("homicides")
                                        .attr("x", 2*(0.12*r)).attr("y", (1*(0.12*r)) )
                                        .attr("font-family", "sans-serif")
                                        .attr("font-size", "1.2vw");
                       
                    
                
                             
                             legendpie.append("rect")
                                                .attr("x", 0).attr("y", 2*(0.12*r))
                                                 .attr("width",0.12*r)

                                                 .attr("height", 0.12*r)
                                                 .attr("fill", "#f08f00");

                             legendpie.append("text").text("theft")
                                        .attr("x",  2*(0.12*r)).attr("y", (3*(0.12*r)) )
                                        .attr("font-family", "sans-serif")
                                        .attr("font-size", "1.2vw");

                    
                             legendpie.append("rect")
                                                .attr("x", 0).attr("y", 4*(0.12*r))
                                                 .attr("width", 0.12*r)

                                                 .attr("height", 0.12*r)
                                                 .attr("fill", "#005cbf");

                             legendpie.append("text").text("other crimes")
                                        .attr("x",  2*(0.12*r)).attr("y", (5*(0.12*r)) )
                                        .attr("font-family", "sans-serif")
                                        .attr("font-size", "1.2vw");
                    
                    

            
                    }
                    
              
                bars("omicidi"); 
              
                    
                       
    
                    
                    
                function bars(subtype){                
          
                    
                    
                
                document.getElementById("resultBars").innerHTML=subtype;    
        
        document.getElementById("title1group").innerHTML=cc;
        document.getElementById("title2group").innerHTML=ccc;
            
            
        var barsinfo = [];
        barsinfo.splice(0,barsinfo.length);

        d3.select('#multiplebars').selectAll("svg").remove();
        
        
       
        if(subtype=="omicidi"){
            datasline=omicidi; 
        }else if(subtype=="furto"){
            datasline=furto; 
        }else if(subtype=="altri"){
            datasline=altri; 
        }
     


        for(var y=0;y<cityinfo1.length;y++){

                if( datasline.includes(cityinfo1[y].tipologia) ){

                        barsinfo.push({
                             city:cc,
                             val: cityinfo1[y].denunce100,
                             type: cityinfo1[y].tipologia

                        })

                }
                
                if( datasline.includes(cityinfo2[y].tipologia) ){

                        barsinfo.push({
                             city:ccc,
                             val: cityinfo2[y].denunce100,
                             type: cityinfo2[y].tipologia

                        })

                }


            }  

        var widthBar = $('#multiplebars').innerWidth();
        var heightBar = widthBar/2;
    // set the dimensions and margins of the graph

    var margin = {top: 0.034158839*heightBar, right: 0.017079419*widthBar, bottom: 0.051238258*heightBar, left: 0.034158839*widthBar},
        widthBar = 0.819812126*widthBar - margin.left - margin.right, 
        heightBar = 0.853970965*heightBar - margin.top - margin.bottom;  

                    
              
    var ybar = d3.scaleBand()
              .range([heightBar, 0])
              .padding(0.3);
//              

    var xbar = d3.scaleLinear()
              .range([0.062553419*widthBar, widthBar]);

    
var barsvg = d3.select("#multiplebars").append("svg")
        .attr("viewBox","0 0 "+( widthBar + margin.left + margin.right )+" " +( heightBar + margin.top + margin.bottom ) )
      .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
    


      // Scale the range of the data in the domains
      xbar.domain([0, d3.max(barsinfo, function(d){ return d.val; })])
      ybar.domain(d3.range(barsinfo.length));
      
      
       
//         var yAxisType = d3.axisLeft()
//                               .scale(ybar)
//                               .tickFormat(function(d, i){ return barsinfo[i].type })
//                                ;
// 
                    
             
                    
                    
                    
        
       
         // append the rectangles for the bar chart
                      barsvg.selectAll(".rect1")
                          .data(barsinfo)
                        .enter().append("rect").attr("class", "rect1")
                          .attr("transform", "translate(0," + (ybar.bandwidth())/2.5 + ")")
                          .transition("moverect")
                          .on("start", function(d){
                          d3.select("#multiplebars").classed("unclickable", true);
                            })
                          
                          .delay(function(d, i){
                                   return i*120;
                         })
                          .ease(d3.easeCircle)
                          .on("end", function(d){
                          d3.select("#multiplebars").classed("unclickable", false);
                            })
                          .duration(500)


                          //.attr("x", function(d) { return x(d.sales); })
                          .attr("width", function(d, i) { 

                               if( i %2 != 0 ){
                            
                                    return xbar(d.val);
                               }
                          })
                          .attr("y", function(d, i) { 

                               if( i %2 != 0 ){
                            
                                    return ybar(i);
                               }
                          })
                           .attr("height", function(d, i) { 

                               if( i %2 != 0 ){
                            
                                    return ybar.bandwidth();
                               }
                          })
                          .attr("fill", function(d){
                        
                                    if(omicidi.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#f44336";
                                    }
                                    if(furto.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#f08f00";
                                    }
                                    if(altri.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#005cbf";
                                    }
                            })
                            ;
                    
                barsvg.selectAll(".rect2")
                          .data(barsinfo)
                        .enter().append("rect").attr("class", "rect2")
//                          .attr("transform", "translate(0," + 30 + ")")
                          .transition("moverect")
                          .on("start", function(d){
                       
                          d3.select("#multiplebars").classed("unclickable", true);
                            })
                          
                          .delay(function(d, i){
                                   return i*120;
                         })
                          .ease(d3.easeCircle)
                         
                          .duration(500)
                          .on("end", function(d){
                          d3.select("#multiplebars").classed("unclickable", false);
                            })

                          //.attr("x", function(d) { return x(d.sales); })
                          .attr("width", function(d, i) { 

                               if( i %2 == 0 ){
                            
                                    return xbar(d.val);
                               }
                          })
                          .attr("y", function(d, i) { 

                               if( i %2 == 0 ){
                            
                                    return ybar(i);
                               }
                          })
                           .attr("height", function(d, i) { 

                               if( i %2 == 0 ){
                            
                                    return ybar.bandwidth();
                               }
                          })
                          .attr("fill", function(d){
                        
                                    if(omicidi.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#f44336";
                                    }
                                    if(furto.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#f08f00";
                                    }
                                    if(altri.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#005cbf";
                                    }
                            })
                            ;
                    
                    
                
                    
                    
                    
                    
                      barsvg.selectAll(".rect1").data(barsinfo)
                              .on("mouseover", function(d) {

                            //Get this bar's x/y values, then augment for the tooltip
                         
                          
                            d3.select(this)
                                    
                                    .style("fill", function(d){
                        
                                        if(omicidi.includes(d.type)){

                                           return "#f44336";
                                        }
                                        if(furto.includes(d.type)){

                                           return "#f08f00";
                                        }
                                        if(altri.includes(d.type)){

                                           return "#005cbf";
                                        }
                                    })
                                    .style("stroke", "gray").style("stroke-width", 0.015012821*heightBar)
                                    .transition("coloron")
                                    .duration(1000)
                                    ;


                          var xPosition = (widthBar / 2);

           
                                var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

//                            console.log(offset-maplegendah);
                            var yPosition = parseFloat(offset);
                                        
                          
                          
                          

                            //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                           .text(d.type +" : "+d.val)
//                                .text("number of crimes per 100 thousand inhabitants for "+d.type +" : "+d.val)
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);

                       })
                       .on("mouseout", function() {
                             d3.select(this)
                                    .style("fill", function(d){
                        
                                    if(omicidi.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#f44336";
                                    }
                                    if(furto.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#f08f00";
                                    }
                                    if(altri.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#005cbf";
                                    }
                            })
                                    .style("stroke", "black").style("stroke-width", 0)
                                    
                                    .transition("coloroff")
                                    .duration(1000);
                            //Hide the tooltip
                            d3.select("#tooltip").classed("hidden", true);

                       });
                        

                     barsvg.selectAll(".rect2").data(barsinfo)
                              .on("mouseover", function(d) {

                            //Get this bar's x/y values, then augment for the tooltip
                         
                          
                            d3.select(this)
                                    .style("fill", function(d){
                        
                                        if(omicidi.includes(d.type)){

                                           return "#f44336";
                                        }
                                        if(furto.includes(d.type)){

                                           return "#f08f00";
                                        }
                                        if(altri.includes(d.type)){

                                           return "#005cbf";
                                        }
                                    })
                                    .style("stroke", "gray").style("stroke-width", 0.015012821*heightBar)
                                    .transition("coloron")
                                    .duration(1000)
                                    ;


                          var xPosition = (widthBar / 2);

           
                                var element  = this;
                                
                            var bodyRect = document.body.getBoundingClientRect(),
                                elemRect = element.getBoundingClientRect(),
                                offset   = elemRect.top - bodyRect.top;

//                            console.log(offset-maplegendah);
                            var yPosition = parseFloat(offset);
                                        
                          
                          
                          

                            //Update the tooltip position and value
                            d3.select("#tooltip")
                                .style("left", xPosition + "px")
                                .style("top", yPosition + "px")	
                                .select("#label")
                                .text(d.type +" : "+d.val)
//                                .text("number of crimes per 100 thousand inhabitants for "+d.type +" : "+d.val)
                                ;

                            //Show the tooltip
                            d3.select("#tooltip").classed("hidden", false);

                       })
                       .on("mouseout", function() {
                             d3.select(this)
                                    .style("fill", function(d){
                        
                                    if(omicidi.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#f44336";
                                    }
                                    if(furto.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#f08f00";
                                    }
                                    if(altri.includes(d.type)){
                                        if( d.city == cc ){
                                           return "#b643c8" ;
                                        }else{
                                            return "#8e8e06";
                                        }
                                       return "#005cbf";
                                    }
                            })
                                    .style("stroke", "black").style("stroke-width", 0)
                                    
                                    .transition("coloroff")
                                    .duration(1000);
                            //Hide the tooltip
                            d3.select("#tooltip").classed("hidden", true);

                       });
                    
                    
                          // add the x Axis
                      barsvg.append("g").attr("id", "xAxisBars")
                          .attr("transform", "translate(0," + heightBar + ")")
                          .call(d3.axisBottom(xbar));

                    
                    var ybarAxis = d3.scaleBand()
                                  .range([heightBar, 0])
                                  .padding(0.3);
                    
                    ybarAxis.domain(d3.range(barsinfo.length/2));
                      // add the y Axis
                      barsvg.append("g").attr("id", "yAxisBars")
//                          .attr("transform", "translate(100," + 0 + ")")
                          .call(d3.axisLeft(ybarAxis));
        
              
                         
                     omicidibtn2.addEventListener('click', () => { 
                         if(document.getElementById("resultBars").innerHTML!="omicidi")
                                    bars("omicidi"); 
                     });   
              

                 
                     furtobtn2.addEventListener('click', () => {
                         if(document.getElementById("resultBars").innerHTML!="furto")
                                    bars("furto"); 
                     }); 
                 

                
                     altribtn2.addEventListener('click', () => { 
                        if(document.getElementById("resultBars").innerHTML!="altri")
                                    bars("altri"); 
                     });   
                 
                    
                
    }
                    
                    
                }else{
                    d3.select("#doublepie").classed("hidden", true);
                    d3.select("#multiplebars").classed("hidden", true);
                }
            
            
            
                    
                }
                    
        
       
        return dataset;
        
    }   
    
   
});
    
}
