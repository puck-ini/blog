(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{388:function(v,e,n){"use strict";n.r(e);var _=n(44),t=Object(_.a)({},(function(){var v=this,e=v.$createElement,n=v._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[n("h1",{attrs:{id:"netty-实战笔记"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#netty-实战笔记"}},[v._v("#")]),v._v(" Netty 实战笔记")]),v._v(" "),n("p",[v._v("一个 Channel 相当于一个 Socket")]),v._v(" "),n("p",[v._v("EventLoopGroup 对应一到多个 EventLoop")]),v._v(" "),n("p",[v._v("一个 EventLoop 在它的生命周期中只与一个 Thread 绑定")]),v._v(" "),n("p",[v._v("一个 Channel 在它的生命周期中只与一个 EventLoop 绑定")]),v._v(" "),n("p",[v._v("一个 EventLoop 可能被分配给一个或多个 Channel")]),v._v(" "),n("p",[v._v("一个 Channel 是线程安全的，可以保存一个 Channel 的引用，在需要发送数据时使用，即使是多线程使用。")]),v._v(" "),n("p",[v._v("Netty 中内置的传输")]),v._v(" "),n("p",[n("img",{attrs:{src:"img/netty%E5%AE%9E%E6%88%98%E7%AC%94%E8%AE%B0/image-20210701214318601.png",alt:"image-20210701214318601"}})]),v._v(" "),n("p",[v._v("NIO - 非阻塞I/O")]),v._v(" "),n("p",[v._v("NIO 是基于选择器的API。选择器的基本概念充当一个注册表，可以请求在 Channel 的状态发生变化时得到通知。")]),v._v(" "),n("p",[v._v("可能的状态变化有：")]),v._v(" "),n("ul",[n("li",[v._v("新的 Channel 已被接收并且就绪")]),v._v(" "),n("li",[v._v("Channel 连接已经完成")]),v._v(" "),n("li",[v._v("Channel 有已经就绪的可供读取的数据")]),v._v(" "),n("li",[v._v("CHannel 可用于写数据")])]),v._v(" "),n("p",[v._v("选择器运行在一个检查状态变化并对其做出相应响应的线程上，在应用程序对状态的改变做出响应之后，选择器将会被重值并重复这个过程。")]),v._v(" "),n("p",[v._v("class java.nio.channels.SelectionKey 定义的位模式。这些位模式可以组合起来定义一组应用程序正在请求通知的状态变化集。")]),v._v(" "),n("p",[n("img",{attrs:{src:"img/netty%E5%AE%9E%E6%88%98%E7%AC%94%E8%AE%B0/image-20210701215036458.png",alt:"image-20210701215036458"}})]),v._v(" "),n("p",[v._v("Epoll 用于 Linux 的本地非阻塞传输")]),v._v(" "),n("p",[v._v("Linux 作为高性能网络编程平台，提供了 epoll 系统调用，一个高度可扩展的I/O时间通知特性。Linux JDK NIO API 使用了这些 epoll 调用。")]),v._v(" "),n("p",[v._v("Netty 为 Linux 提供了一组 NIO API，如果系统运行于 Linux，则可以优先考虑使用 epoll。")]),v._v(" "),n("p",[v._v("使用 epoll 替代 NIO 只需要将 NioEventLoopGroup 替换为 EpollEventLoopGroup，并且将 NioServerSocketChannel.class 替换成 EpollServerSocketChannel.class。")]),v._v(" "),n("p",[v._v("OIO 旧的阻塞I/O")]),v._v(" "),n("p",[v._v("用于 JVM 内部通信的 Local 传输")]),v._v(" "),n("p",[v._v("Embedded 传输")]),v._v(" "),n("p",[n("img",{attrs:{src:"img/netty%E5%AE%9E%E6%88%98%E7%AC%94%E8%AE%B0/image-20210701223403390.png",alt:"image-20210701223403390"}})]),v._v(" "),n("p",[v._v("ByteBuf")]),v._v(" "),n("ul",[n("li",[v._v("堆缓冲区")]),v._v(" "),n("li",[v._v("直接缓冲区")]),v._v(" "),n("li",[v._v("复合缓冲区")])]),v._v(" "),n("p",[v._v("@Sharable")]),v._v(" "),n("p",[v._v("确认 ChannelHandler 线程安全才应该用该注解。")])])}),[],!1,null,null,null);e.default=t.exports}}]);