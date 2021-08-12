(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{396:function(v,_,t){"use strict";t.r(_);var e=t(44),s=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"redis-缓冲区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-缓冲区"}},[v._v("#")]),v._v(" Redis 缓冲区")]),v._v(" "),t("p",[v._v("缓冲区的功能其实很简单，主要就是用一块内存空间来暂时存放命令数据，以免出现因为数据和命令的处理速度慢于发送速度而导致的数据丢失和性能问题。")]),v._v(" "),t("p",[v._v("Redis 是典型的 clent-server 模型，通过客户端发送命令到服务器，所以缓冲区是 Redis 一个重要的应用场景。")]),v._v(" "),t("h2",{attrs:{id:"客户端输入输出缓冲区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端输入输出缓冲区"}},[v._v("#")]),v._v(" 客户端输入输出缓冲区")]),v._v(" "),t("p",[v._v("Redis 会为每一个连接的客户端构建两个缓冲区，一个是输入缓冲区另一个是输出缓冲区。")]),v._v(" "),t("ul",[t("li",[v._v("输入缓冲区")])]),v._v(" "),t("p",[v._v("输入缓冲区主要的作用是暂存客户端发送的请求。Redis 主线程会从缓冲区中取出命令进行处理。")]),v._v(" "),t("ul",[t("li",[v._v("输出缓冲区")])]),v._v(" "),t("p",[v._v("Redis 处理请求产生的结果会写入输出缓冲区，之后缓冲区再将结果返回给客户端。")]),v._v(" "),t("blockquote",[t("p",[v._v("有点类似于 EventLoop（事件循环机制），所有的事件都放入一个事件队列中，线程再从队列中取出事件进行处理。")]),v._v(" "),t("p",[v._v("也类似于线程模型中的消费者和生产者模型")])]),v._v(" "),t("h3",{attrs:{id:"输入缓冲区溢出问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入缓冲区溢出问题"}},[v._v("#")]),v._v(" 输入缓冲区溢出问题")]),v._v(" "),t("p",[v._v("可能导致输入缓冲区溢出的情况：")]),v._v(" "),t("ul",[t("li",[v._v("突然向缓冲区写入大量的数据，例如写入了百万级别的集合类型数据")]),v._v(" "),t("li",[v._v("客户端请求的速度大于服务器处理请求的速度，例如 Redis 阻塞无法处理请求。")])]),v._v(" "),t("p",[v._v("查看输入缓冲区情况：")]),v._v(" "),t("p",[v._v("通过 client list 命令可以查看所有连接的客户端信息。主要查看以下参数")]),v._v(" "),t("ul",[t("li",[v._v("cmd，表示客户端最新执行的命令。")]),v._v(" "),t("li",[v._v("qbuf，表示输入缓冲区已经使用的大小。")]),v._v(" "),t("li",[v._v("qbuf-free，表示输入缓冲区尚未使用的大小。")])]),v._v(" "),t("p",[v._v("这个时候就可以通过上述参数判断输入缓冲区是否可能出现溢出问题之后对症下药。")]),v._v(" "),t("p",[v._v("解决溢出办法：")]),v._v(" "),t("ul",[t("li",[v._v("避免写入大量数据")]),v._v(" "),t("li",[v._v("避免 Redis 主线程阻塞")])]),v._v(" "),t("blockquote",[t("p",[v._v("Redis 中输入缓冲区限制 1 G 大小，并且无法自定义大小，所以无法通过设置缓冲区大小解决问题。")]),v._v(" "),t("p",[v._v("Redis 一般会与多个客户端进行连接，当多个客户端的缓冲区使用大小超过了 Redis 的 maxmemory 配置项时就会触发数据淘汰。")])]),v._v(" "),t("h3",{attrs:{id:"输出缓冲区溢出问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输出缓冲区溢出问题"}},[v._v("#")]),v._v(" 输出缓冲区溢出问题")]),v._v(" "),t("p",[v._v("可能导致输出缓冲区溢出的情况：")]),v._v(" "),t("ul",[t("li",[v._v("返回结果包含大量的数据。")]),v._v(" "),t("li",[v._v("执行了 monitor 命令")]),v._v(" "),t("li",[v._v("缓冲区大小设置太小")])]),v._v(" "),t("p",[v._v("monitor 命令是用来检测 Redis 的，会不停的向输出缓冲区中写入信息，如果写入太多就会将输出缓冲区占满导致溢出。monitor 指令一般不用于生产环境。")]),v._v(" "),t("p",[v._v("输出缓冲区和输入缓冲区不同，可以通过配置项 client-output-buffer-limit 设置大小。具体可以设置缓冲区大小的上限阈值、设置输出缓冲区持续写入数据的数量上限阈值和持续写入数据的时间的上限阈值。")]),v._v(" "),t("h2",{attrs:{id:"主从之间的缓冲区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主从之间的缓冲区"}},[v._v("#")]),v._v(" 主从之间的缓冲区")])])}),[],!1,null,null,null);_.default=s.exports}}]);