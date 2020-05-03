(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{331:function(t,_,v){"use strict";v.r(_);var e=v(33),a=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"十一、权限控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#十一、权限控制"}},[t._v("#")]),t._v(" 十一、权限控制")]),t._v(" "),v("p",[t._v("EasyGQL可以为开发者提供根据用户不同进行不同行级、列级权限控制的API。")]),t._v(" "),v("h2",{attrs:{id:"_11-1权限控制流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-1权限控制流程"}},[t._v("#")]),t._v(" 11.1权限控制流程")]),t._v(" "),v("p",[v("img",{attrs:{src:"/doc/img/permission_process.jpg",alt:"permission_process"}})]),t._v(" "),v("p",[t._v("如上图所示，EasyGQL的权限控制是通过权限控制过滤器来事先的，当用户请求数据时，权限过滤器会根据用户当前的基本信息和开发者事先定义好的数据方位控制规则，判断用户是否对该API具有访问权限，以及是否对应的行、列具有访问权限，从而决定是否调用数据库。")]),t._v(" "),v("ol",[v("li",[t._v("当用户不具备访问API权限时，用户请求将会被返回一个403错误。")]),t._v(" "),v("li",[t._v("当用户具备访问API权限时，用户只能查看或修改经过权限过滤器过滤后的数据。")])]),t._v(" "),v("h2",{attrs:{id:"_11-2-权限控制模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-权限控制模型"}},[t._v("#")]),t._v(" 11.2 权限控制模型")]),t._v(" "),v("p",[v("img",{attrs:{src:"/doc/img/permission_class_diagram.jpg",alt:"permission_process"}})]),t._v(" "),v("p",[t._v("如上图所示，Easy的权限控制模型主要是如下关系。")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("每一个数据类型和用户角色可以定义不被允许访问的API。")])]),t._v(" "),v("li",[v("p",[t._v("每一个数据类型和用户角色可以针对针对允许访问的API设置数据过滤条件。数据过滤条件氛围：列级和行级权限。")])]),t._v(" "),v("li",[v("p",[t._v("默认情况下，每个用户角色都有所有API的访问权限，以及所有行和所有列的访问权限。")])]),t._v(" "),v("li",[v("p",[t._v("列级数据过滤条件主要是设置用户不允许访问的数据权限。")])]),t._v(" "),v("li",[v("p",[t._v("行级数据过滤条件是根据用户的基本信息设置数据行的过滤条件。")])])]),t._v(" "),v("h2",{attrs:{id:"_11-3-针对不同的api设置不同的数据访问权限"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-3-针对不同的api设置不同的数据访问权限"}},[t._v("#")]),t._v(" 11.3 针对不同的API设置不同的数据访问权限")]),t._v(" "),v("p",[t._v("用户可以针对EasyGQL提供的各个API设置不同的数据访问权限。在开发者新建或修改数据类型定义的时候，默认为为每个数据类型提供以下几种API。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("序号")]),t._v(" "),v("th",[t._v("API名称")]),t._v(" "),v("th",[t._v("用法")]),t._v(" "),v("th",[t._v("权限控制种类")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("类型名")]),t._v(" "),v("td",[t._v("根据ID查询具体某个对象")]),t._v(" "),v("td",[t._v("行级+列级权限控制，只能查询指定行、指定列")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("类型名+”Many”")]),t._v(" "),v("td",[t._v("根据where条件查询多个对象")]),t._v(" "),v("td",[t._v("行级+列级权限控制，只能查询指定行、指定列")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("类型名+”Create”")]),t._v(" "),v("td",[t._v("创建对象")]),t._v(" "),v("td",[t._v("列级权限控制，在创建对象时，只能对某些固定的列赋值。")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("类型名+”Destroy”")]),t._v(" "),v("td",[t._v("销毁对象")]),t._v(" "),v("td",[t._v("行级权限控制，只能删除指定的行")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("类型名+”Update”")]),t._v(" "),v("td",[t._v("更新对象")]),t._v(" "),v("td",[t._v("行级+列级权限控制，只能针对指定行、指定列进行修改。")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("类型名+”Listener”")]),t._v(" "),v("td",[t._v("订阅对象变化")]),t._v(" "),v("td",[t._v("行级+列级权限控制，只能针对指定的行、指定的列订阅变化。")])]),t._v(" "),v("tr",[v("td",[t._v("7")]),t._v(" "),v("td",[t._v("字段名+”In”+类型名+”_ObjectInput”")]),t._v(" "),v("td",[t._v("为对象创建内嵌对象")]),t._v(" "),v("td",[t._v("行级+列级权限控制，参照update的权限。只能修改指定行，指定列。")])]),t._v(" "),v("tr",[v("td",[t._v("8")]),t._v(" "),v("td",[t._v("字段名+”In”+类型名+”_NestRemove”")]),t._v(" "),v("td",[t._v("销毁对象的内勤对象。")]),t._v(" "),v("td",[t._v("行级+列级权限控制，参照update的权限。只能修改指定行，指定列。")])]),t._v(" "),v("tr",[v("td",[t._v("9")]),t._v(" "),v("td",[t._v("字段名+”In”+类型名+”_IDInput”")]),t._v(" "),v("td",[t._v("销毁对象的内勤对象。")]),t._v(" "),v("td",[t._v("行级+列级权限控制，参照update的权限。只能修改指定行，指定列。")])])])]),t._v(" "),v("h2",{attrs:{id:"_11-4-列级权限控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-4-列级权限控制"}},[t._v("#")]),t._v(" 11.4 列级权限控制")]),t._v(" "),v("p",[t._v("在标量字段定义、枚举字段定义、关联关系字段定义，都有invisible_roles和irrevisible_roles，描述这个字段不可见和不可操作的角色列表。")]),t._v(" "),v("h2",{attrs:{id:"_11-5-行级权限控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-5-行级权限控制"}},[t._v("#")]),t._v(" 11.5 行级权限控制")]),t._v(" "),v("p",[t._v("EasyGQL的行级权限控制的原理是，将用户的属性值填充到删除、查询、修改的条件中去，使用户只能针对已经过滤完的数据进行查询和修改。\n针对每一个对对象类型，系统会自动提供其查询过滤器（数据类型为类型名+”WhereInput”），行级过滤条件的定义就是定义一个whereInput对象，但是和用户显式输入的查询语句不太一样，用户在定义行级过滤条件时操作符对应的叶子节点应该是一个object对象（用json表示），valuetype的键值表示数据类型，可以为常量或者用户数据。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段名")]),t._v(" "),v("th",[t._v("取值")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("value")]),t._v(" "),v("td",[t._v("对应过滤器叶子节点的值")]),t._v(" "),v("td",[t._v("当valuetype为const时，value为对应叶子节点的常量值得json表述。当valuetype为userdata时，value为user的某一个字段名。")])]),t._v(" "),v("tr",[v("td",[t._v("valuetype")]),t._v(" "),v("td",[t._v("“const”、”userdata”")]),t._v(" "),v("td")])])]),t._v(" "),v("p",[t._v("假设某一个对象定义如下：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("type  chatroom {\n   id :ID\n   content :String\n}\n")])])]),v("p",[t._v("对应对象的WhereInput描述为")]),t._v(" "),v("div",{staticClass:"language-json extra-class"},[v("pre",{pre:!0,attrs:{class:"language-json"}},[v("code",[t._v("input UserWhereInput "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \tand"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UserWhereInput\nfield_contains"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("String"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfilter"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UserFieldFilter\nnot"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UserWhereInput\nor"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UserWhereInput\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ninput chatroomFieldFilter "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\ncontent"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" StringFilter\nid"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" IDFilter\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),v("p",[t._v("这对应的行级过滤条件可以为：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("{\n  “or”:[\n  \t{\n \t“filter”:{\n      “content”:{\n          “eq”:{\n             “valuetype”:”const”,\n             “value”:”test11”\n}\n}\n}\n},\n\t\t{\n \t\t“filter”:{\n      \t“content”:{\n        \t  “eq”:{\n            \t “valuetype”:”userdate”,\n             \t “value”:”role”\n\t\t\t\t   }\n\t\t\t\t}\n\t\t\t}\n}\n]\n}\n")])])]),v("p",[t._v("表示，可以对content是test11或者content值等于用户的role的所有对象。")])])}),[],!1,null,null,null);_.default=a.exports}}]);