(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{396:function(e,s,_){"use strict";_.r(s);var v=_(44),t=Object(v.a)({},(function(){var e=this,s=e.$createElement,_=e._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"redis-集群"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis-集群"}},[e._v("#")]),e._v(" Redis 集群")]),e._v(" "),_("p",[e._v("Redis 集群会将不同的数据分散在集群的各个节点中，以此提高整个集群的容量。")]),e._v(" "),_("h2",{attrs:{id:"如何提高-redis-容量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何提高-redis-容量"}},[e._v("#")]),e._v(" 如何提高 Redis 容量")]),e._v(" "),_("p",[e._v("提高容量一般有两种方案：纵向扩展和横向扩展。")]),e._v(" "),_("ul",[_("li",[e._v("纵向扩展：升级单实例 Redis 所在服务器的配置，增加内存和使用性能更好的 CPU。优点实施简单，但是会受到硬件容量和成本的限制。")]),e._v(" "),_("li",[e._v("横向扩展：增加 Redis 实例分布在不同的服务器中。优点是不会受到硬件容量和成本限制，只需要增加 Redis 实例就可以扩容。")])]),e._v(" "),_("h2",{attrs:{id:"redis-集群如何实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis-集群如何实现"}},[e._v("#")]),e._v(" Redis 集群如何实现")]),e._v(" "),_("p",[e._v("Redis 3.0 之前，官方并没有针对切片集群提供具体方案，集群方案只能通过其他方式实现。")]),e._v(" "),_("p",[e._v("Redis 3.0 之后，官方提供了 Redis Cluster 方案，采用一个哈希槽，将数据分布在哈希槽中。")]),e._v(" "),_("p",[e._v("一个Redis 集群共有16384个哈希槽，对于每一个键值都会根据 key 计算出哈希值，然后映射在哈希槽中。")]),e._v(" "),_("p",[e._v("计算 key 的哈希值使用的是 CRC16 算法（Redis 6 使用了速度更快的 CRCspeed 算法），然后再根据这个 16 bit 的值对 16384 取模，这样就得到了所映射的哈希槽的编号。")]),e._v(" "),_("p",[e._v("Redis 集群在启动时会平均分配哈希槽的数量到每一个 Redis 实例中。这个哈希槽的分配可以手动更改，这样可以让内存配置大小不一致的 Redis 实例分配到较合理的哈希槽数量，手动分配需要将 16384 分配完，不然集群无法启动（默认是平均分配）。")]),e._v(" "),_("p",[e._v("Redis 集群启动时，每个实例都会将自己的哈希槽信息发送给其他实例，这样每个实例都会有所有的哈希槽映射关系。")]),e._v(" "),_("h2",{attrs:{id:"redis-cluster-缺陷"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis-cluster-缺陷"}},[e._v("#")]),e._v(" Redis Cluster 缺陷")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("键的批量操作支持有限，比如mset, mget，如果多个键映射在不同的槽，就不支持了")])]),e._v(" "),_("li",[_("p",[e._v("键事务支持有限，当多个key分布在不同节点时无法使用事务，同一节点是支持事务")])]),e._v(" "),_("li",[_("p",[e._v("键是数据分区的最小粒度，不能将一个很大的键值对映射到不同的节点")])]),e._v(" "),_("li",[_("p",[e._v("不支持多数据库，只有0，select 0")])]),e._v(" "),_("li",[_("p",[e._v("复制结构只支持单层结构，不支持树型结构。")])])]),e._v(" "),_("h2",{attrs:{id:"客户端如何获取数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#客户端如何获取数据"}},[e._v("#")]),e._v(" 客户端如何获取数据")]),e._v(" "),_("p",[e._v("上述过程中数据分散在了不同实例的哈希槽中，那客户端如何获取到所有数据？")]),e._v(" "),_("p",[e._v("客户端在与集群建立连接时，集群会将哈希槽的分配信息发送给客户端，客户端需要将信息缓存在本地，当客户端请求数据时会先计算对应的哈希槽，然后将请求发送给响应的实例。")]),e._v(" "),_("p",[e._v("但是哈希槽不会是一直不变的，集群中实例的新增和删除、为了负载均衡 Redis 哈希槽重新分布一边都会导致哈希槽改变。哈希槽重新分布之后实例之间还是可以将哈希槽信息发送给其他实例，更新哈希槽映射关系。但是客户端无法感知哈希槽的变化，只能通过 Redis CLuster 提供的重定向机制访问数据。重定向机制在哈希槽重新分配后，客户端缓存的哈希槽映射信息跟最新的信息不一致，导致客户端请求的数据在当前实例不存在，同时当前实例会返回一个 moved 命令的响应结果，包含请求的键值所在的哈希槽位置、哈希槽在的实例的 ip 和端口，这个时候客户端就可以对这个实例发送请求，同时客户端更新缓存映射信息。")]),e._v(" "),_("p",[e._v("如果哈希槽的数据较多，就可能出现客户端请求的时候哈希槽的数据还为完成转移的情况。这个时候实例会返回一个 ask 信息，包含了哈希槽的位置以及哈希槽所在的实例的 ip 和端口，表示这个哈希槽正在迁移，ask 命令不会更改客户端的缓存。此时，客户端需要向请求的哈希槽所在新实例发送 asking 命令，这个命令表示让实例允许执行客户端接下来的操作，之后客户端就可以再向该实例发送请求。")]),e._v(" "),_("h2",{attrs:{id:"集群中的主从"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#集群中的主从"}},[e._v("#")]),e._v(" 集群中的主从")]),e._v(" "),_("p",[e._v("集群中的主从主要是为了高可用和设计的，主节点可以处理读写请求，但是从节点无法处理读写请求（读请求需要先发送 readonly 命令）。")]),e._v(" "),_("h2",{attrs:{id:"集群间的通信"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#集群间的通信"}},[e._v("#")]),e._v(" 集群间的通信")]),e._v(" "),_("p",[e._v("Redis Cluster 集群通过 Gossip 协议进行通信，Gossip 协议就是指节点彼此之间不断通信交换信息，交换的信息内容包括节点出现故障、新节点加入、主从节点变更信息、slot信息等等。常用的 Gossip 消息分为4种，分别是：ping、pong、meet、fail。")]),e._v(" "),_("ul",[_("li",[e._v("ping消息：集群内交换最频繁的消息，集群内每个节点每秒向多个其他节点发送ping消息，用于检测节点是否在线和交换彼此状态信息。")]),e._v(" "),_("li",[e._v("pong消息：当接收到ping、meet消息时，作为响应消息回复给发送方确认消息正常通信。pong消息内部封装了自身状态数据。节点也可以向集群内广播自身的pong消息来通知整个集群对自身状态进行更新。")]),e._v(" "),_("li",[e._v("meet消息：通知新节点加入。消息发送者通知接收者加入到当前集群，meet消息通信正常完成后，接收节点会加入到集群中并进行周期性的ping、pong消息交换。")]),e._v(" "),_("li",[e._v("fail消息：当节点判定集群内另一个节点下线时，会向集群内广播一个fail消息，其他节点接收到fail消息之后把对应节点更新为下线状态。")])]),e._v(" "),_("h2",{attrs:{id:"集群故障转移"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#集群故障转移"}},[e._v("#")]),e._v(" 集群故障转移")]),e._v(" "),_("p",[e._v("Redis 集群实现了高可用，当集群内少量节点出现故障时，通过故障转移可以保证集群正常对外提供服务。")]),e._v(" "),_("p",[e._v("Redis 集群内的节点通过 ping pong 消息发现节点是否健康，是否有故障，其实主要环节也包括了 主观下线和客观下线。")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("主观下线：**指某个节点认为另一个节点不可用，即下线状态，当然这个状态不是最终的故障判定，只能代表这个节点自身的意见，也有可能存在误判。**例如节点a发送ping消息给节点b ,如果通信正常将接收到pong消息，节点a更新最近一次与节点b的通信时间。如果节点a与节点b通信出现问题则断开连接，下次会进行重连，如果一直通信失败，则它们的最后通信时间将无法更新。节点a内的定时任务检测到与节点b最后通信时间超过cluster_note-timeout时，更新本地对节点b的状态为主观下线（pfail）")])]),e._v(" "),_("li",[_("p",[e._v("客观下线：**指真正的下线，集群内多个节点都认为该节点不可用，达成共识，将它下线，如果下线的节点为主节点，还要对它进行故障转移。**假如节点a标记节点b为主观下线，一段时间后节点a通过消息把节点b的状态发到其它节点，当节点c接受到消息并解析出消息体时，会发现节点b的pfail状态时，会触发客观下线流程。当下线为主节点时，此时redis集群为统计持有槽的主节点投票数是否达到一半，当下线报告统计数大于一半时，被标记为客观下线状态。")])])]),e._v(" "),_("p",[e._v("故障主节点下线后，如果下线节点的是主节点，则需要在它的从节点中选一个替换它，保证集群的高可用；转移过程如下：")]),e._v(" "),_("ol",[_("li",[e._v("资格检查：检查该从节点是否有资格替换故障主节点，如果此从节点与主节点断开过通信，那么当前从节点不具体故障转移；")]),e._v(" "),_("li",[e._v("准备选举时间：当从节点符合故障转移资格后，更新触发故障选举时间，只有到达该时间后才能执行后续流程；")]),e._v(" "),_("li",[e._v("发起选举：当到达故障选举时间时，进行选举；")]),e._v(" "),_("li",[e._v("选举投票：只有持有槽的主节点才有票，会处理故障选举消息，投票过程其实是一个领导者选举（选举"),_("strong",[e._v("从节点为领导者")]),e._v("）的过程，每个主节点只能投一张票给从节点，当从节点收集到足够的选票（大于N/2+1）后，触发替换主节点操作，撤销原故障主节点的槽，委派给自己，并广播自己的委派消息，通知集群内所有节点。")])]),e._v(" "),_("p",[_("a",{attrs:{href:"https://www.cnblogs.com/leeSmall/p/8414687.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis系列九：redis集群高可用 - 小不点啊 - 博客园 (cnblogs.com)"),_("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=t.exports}}]);