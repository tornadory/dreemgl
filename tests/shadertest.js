/* DreemGL is a collaboration between Teeming Society & Samsung Electronics, sponsored by Samsung and others.
   Copyright 2015-2016 Teeming Society. Licensed under the Apache License, Version 2.0 (the "License"); You may not use this file except in compliance with the License.
   You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing,
   software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and limitations under the License.*/

define.class('$base/composition', function(require, $base$, screen, view){

	this.render = function(){ return [
		screen({name: 'default'}, [
			view({
				w:float.width('100%'),
				h:float.height('100%'),
				draw:function(){
					this.drawBackground()
					return true
				},
				Background:{
					visible:true,
					pixel:function(){
						var x = geometry.pos.x*.5+.5
						var y = geometry.pos.y*.5+.5

						var t1 = abs(
							sin(8.*x+system.time)
						)

						var t2 = abs(
							sin(8.*y+system.time)
						)

						return vec4(t1,t2,t1,1.)
					}
				}
			})
		])
	]}
})