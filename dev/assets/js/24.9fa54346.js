(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{244:function(t,e,a){t.exports=a.p+"assets/img/OpenMQTTGateway_TTGO32_LORA_Send.e375b049.jpg"},380:function(t,e,a){t.exports=a.p+"assets/img/OpenMQTTGateway_TTGO32_LORA_Receive.ce846ec8.jpg"},429:function(t,e,a){"use strict";a.r(e);var s=a(13),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"lora-gateway"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lora-gateway"}},[t._v("#")]),t._v(" LORA gateway")]),t._v(" "),e("p",[t._v("Tutorial on how to leverage LORA for a mailbox sensor from "),e("a",{attrs:{href:"https://www.youtube.com/channel/UCz75N6inuLHXnRC5tqagNLw",target:"_blank",rel:"noopener noreferrer"}},[t._v("PricelessToolkit"),e("OutboundLink")],1),t._v(":\n"),e("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/6DftaHxDawM",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})]),t._v(" "),e("h2",{attrs:{id:"receiving-data-from-lora-signal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#receiving-data-from-lora-signal"}},[t._v("#")]),t._v(" Receiving data from LORA signal")]),t._v(" "),e("p",[t._v("Subscribe to all the messages with mosquitto or open your MQTT client software:")]),t._v(" "),e("p",[e("code",[t._v("sudo mosquitto_sub -t +/# -v")])]),t._v(" "),e("p",[t._v("Generate your LORA signals by using another TTGO LORA module, you can flash the sender program from "),e("a",{attrs:{href:"https://github.com/LilyGO/TTGO-LORA32-V2.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("this repository"),e("OutboundLink")],1),t._v(" and the SSD1306 library "),e("a",{attrs:{href:"https://github.com/ThingPulse/esp8266-oled-ssd1306",target:"_blank",rel:"noopener noreferrer"}},[t._v("there"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:a(244),alt:""}})]),t._v(" "),e("p",[t._v("Once one board flashed with OMG and the other with the sender program you should receive regular packets into "),e("code",[t._v("home/OpenMQTTGateway_ESP32_LORA_TEST/LORAtoMQTT")]),t._v(" like below:")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rssi"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("-16")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"snr"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.25")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pferror"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("-3598")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"packetSize"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello 35"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rssi"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("-26")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"snr"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pferror"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("-3598")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"packetSize"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello 36"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rssi"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("-16")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"snr"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pferror"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("-3581")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"packetSize"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello 37"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h2",{attrs:{id:"send-data-by-mqtt-to-convert-it-on-lora-signal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-to-convert-it-on-lora-signal"}},[t._v("#")]),t._v(" Send data by MQTT to convert it on LORA signal")]),t._v(" "),e("p",[e("code",[t._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoLORA -m \'{"message":"hello OMG1"}\'')])]),t._v(" "),e("p",[t._v('This command will send by LORA the message "hello OMG1" and use the default parameters defined in '),e("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/4b8d28179b63ae3f3d454da57ec8c109c159c386/config_LORA.h#L32",target:"_blank",rel:"noopener noreferrer"}},[t._v("config_LORA.h"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:a(380),alt:""}})]),t._v(" "),e("p",[t._v("If you want to test that your sending works you can use another TTGO LORA module, you can flash the receiver program from "),e("a",{attrs:{href:"https://github.com/LilyGO/TTGO-LORA32-V2.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("this repository"),e("OutboundLink")],1),t._v("  and the SSD1306 library "),e("a",{attrs:{href:"https://github.com/ThingPulse/esp8266-oled-ssd1306",target:"_blank",rel:"noopener noreferrer"}},[t._v("there"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"send-data-by-mqtt-with-advanced-lora-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-with-advanced-lora-parameters"}},[t._v("#")]),t._v(" Send data by MQTT with advanced LORA parameters")]),t._v(" "),e("p",[t._v("LORA  sending support the following parameters that should be specified in the json message;")]),t._v(" "),e("ul",[e("li",[t._v("txpower: 2 to 20")]),t._v(" "),e("li",[t._v("spreadingfactor: 6 to 12. If a spreading factor of 6 is set, implicit header mode must be used to transmit and receive * * packets.")]),t._v(" "),e("li",[t._v("frequency: 433E6, 866E6, 915E6")]),t._v(" "),e("li",[t._v("signalbandwidth: 7.8E3, 10.4E3, 15.6E3, 20.8E3, 31.25E3, 41.7E3, 62.5E3, 125E3, and 250E3")]),t._v(" "),e("li",[t._v("codingrate: 5 to 8")]),t._v(" "),e("li",[t._v("preamblelength: 6 to 65535")]),t._v(" "),e("li",[t._v("syncword: byte")]),t._v(" "),e("li",[t._v("enablecrc: boolean")])]),t._v(" "),e("p",[t._v("More info on where the LORA library is born "),e("a",{attrs:{href:"https://github.com/sandeepmistry/arduino-LoRa/blob/master/API.md#radio-parameters",target:"_blank",rel:"noopener noreferrer"}},[t._v("@sandeepmistry"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Example:\n"),e("code",[t._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoLORA -m \'{"message":"test8","txpower":17,}\'')])]),t._v(" "),e("p",[t._v('will make LORA use the a txpower of 17 when sending the message "test8"')])])}),[],!1,null,null,null);e.default=r.exports}}]);