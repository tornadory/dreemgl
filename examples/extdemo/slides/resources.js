/* Copyright 2015-2016 Teeming Society. Licensed under the Apache License, Version 2.0 (the "License"); DreemGL is a collaboration between Teeming Society & Samsung Electronics, sponsored by Samsung and others.
 You may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 either express or implied. See the License for the specific language governing permissions and limitations under the License.*/

define.class(function ($ui$, view, label) {

	this.slidetitle = "Resources";

	this.flexdirection = 'column';
	this.bgcolor = 'transparent';

	this.style = {
		label:{
			margintop:10
		},
		label_small:{
			fgcolor:'darkyellow',
			bgcolor:'transparent',
			alignself:'center',
			fontsize:30
		},
		label_large:{
			fgcolor:'#333',
			bgcolor:'transparent',
			fontsize:40
		}
	}

	this.render = function render() {
		return [
			label({
				text:'+ Detailed Component Guide',
				fgcolor:'#333', bgcolor:'transparent',
				class:'large',
				margintop:0
			}),
			label({
				text:'http://localhost:2000/docs/api/index.html#!/guide/components',
				class:'small'
			}),
			label({
				text:'+ Questions?',
				class:'large'
			}),
			label({
				text:'Find me on slack or email mason@teem.nu!',
				fgcolor:'darkpink',
				class:'small'
			})
		];
	};
});

//https://github.com/dreemgl/dreemgl/tree/master/compositions/guide
