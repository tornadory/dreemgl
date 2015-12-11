//Pure JS based composition
define.class(function($server$,composition, role, $ui$,treeview,  cadgrid, splitcontainer, screen, view, label, button, $widgets$, propviewer, colorpicker){	
	define.class(this, "menubar", function($ui$, view){
		
	})
	define.class(this, "dockpanel", function($ui$, view, label){
		this.attributes = {
			title:{type:String, value:"Untitled"}
		}
		
		this.padding = 4;
		this.margin = 0;
		this.bgcolor = vec4("#506050");
		this.flex = 1;
		this.flexdirection ="column" 
		
		this.render = function(){
			return [
				label({text:this.title, margin:4, bg:0, fontsize:17, fgcolor: "white" })
				,this.constructor_children
			];
		}
	})
	
	define.class(this, "block", function($ui$, view, label){
		this.position = "absolute" ;
		this.bgcolor = vec4("#708090" )
		this.padding = 10;
		
		this.attributes = {
			title:{type:String, value:"Untitled"}
		}
		
		
		this.mouseleftdown = function(p){
			var props = this.find("mainproperties");
			if (props) props.target = this.name;
			this.startposition = p.global;
			this.startx = this.pos[0];
			this.starty = this.pos[1];
			
			this.mousemove = function(p){
				
				var dx = p.global[0] - this.startposition[0];
				var dy = p.global[1] - this.startposition[1];
				
				
				var x = Math.floor((this.startx+dx)/25)*25;
				var y = Math.floor((this.starty+dy)/25)*25;

				
			
				this.pos = vec2(x,y);
				this.redraw();
				this.relayout();
			}.bind(this);
		}
		
		this.mouseleftup = function(p){
			var x = Math.floor(this.pos[0]/25)*25;
			var y = Math.floor(this.pos[1]/25)*25;
			this.pos = vec2(x,y);
				this.redraw();
				this.relayout();
			
			this.mousemove = function(){};
		}
		
		this.render = function(){
			return [
				label({text:this.title, bg:0})
			]
		}
	})
	
	this.render = function(){ return [
		role(
			screen({bg:0,clearcolor:vec4('black'),flexwrap:"nowrap", flexdirection:"row"}
				,this.menubar({})
				
				,splitcontainer({}
					,splitcontainer({flex:0.3}
						,this.dockpanel({title:"Composition"}
							,treeview({flex:1})
						)
					)
					,cadgrid({name:"centralconstructiongrid", overflow:"scroll" ,bgcolor: "#303030",minorsize:5,majorsize:25,  majorline:"#505040", minorline:"#404040"}
						,this.block({name:"phone", title:"Phone", x:200, y:20})
						,this.block({name:"tv", title:"Television", x:50, y:200})
						,this.block({name:"tablet", title:"Tablet",x:200, y:20})						
						,this.block({name:"thing", title:"Thing",x:200, y:20})						
					) 
					,splitcontainer({flex:0.3,direction:"horizontal"}
						,this.dockpanel({title:"Library"}
							,propviewer({flex:1,name:"mainpropviewer", target:"thebutton", flex:1, overflow:"scroll"})
						)
						,this.dockpanel({title:"Properties"}
							,propviewer({flex:2,name:"mainproperties", target:"centralconstructiongrid", flex:1, overflow:"scroll"})		
						)	
					)
				)
			)
		)
	]}
})