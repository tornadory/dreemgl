define.class("$server/composition",function(require,$ui$,icon,button,checkbox,label,view,screen,cadgrid,$widgets$,toolkit){
  this.render=function(){
    return [
      screen(
        {flexdirection:"row"},
        cadgrid({
          name:"grid",
          overflow:"scroll",
          bgcolor:vec4(0.08853328227996826,0.11556218564510345,0.16508188843727112,1),
          gridsize:8,
          majorevery:5,
          majorline:vec4(0.34117648005485535,0.34117648005485535,0.34117648005485535,1),
          minorline:vec4(0.17135260999202728,0.17135260999202728,0.17135260999202728,1),
          alignitems:'center',
          alignself:'stretch',
          flexdirection:'column',
          justifycontent:'center',
          toolmove:false,
          toolrect:false
        }
      ),
        toolkit({
          name:"toolkit",
          position:"absolute",
          onvisible:function(ev,v,o){
            var rem=o.find("reminder")
            if(rem){
              rem.opacity=v?0:1.0
            }
          },
          x:576,
          y:55,
          width:300,
          height:672,
          visible:true
        })
      )
    ]
  }
});