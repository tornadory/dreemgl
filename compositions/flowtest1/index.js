define.class("$server/composition",function($server$, service, $ui$, screen, view, $flow$services$, map, omdb, webrequest, $flow$controllers$, xypad, knob, keyboard, dpad, $flow$displays$, labtext, inputs, outputs, album) {
	this.render = function() {
		return [
			xypad({name:"xypad0", flowdata:{x:34, y:362}}),
			labtext({name:"labtext0", flowdata:{x:393, y:210}, vec2:wire("this.rpc.xypad0.pointerpos"), string:wire("this.rpc.dpad0.value")}),
			dpad({name:"dpad0", flowdata:{x:22, y:16}})
		]
	}
}
)
