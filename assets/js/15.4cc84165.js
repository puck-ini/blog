(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{381:function(v,_,e){"use strict";e.r(_);var s=e(44),i=Object(s.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"redis-面试题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-面试题"}},[v._v("#")]),v._v(" Redis 面试题")]),v._v(" "),e("ul",[e("li",[v._v("你知道 Redis 是什么吗？")])]),v._v(" "),e("p",[v._v("Redis是一个数据库，不过与传统RDBM不同，Redis属于NoSQL，也就是非关系型数据库，它的存储结构是Key-Value。Redis的数据直接存在内存中，读写速度非常快，因此 Redis被广泛应用于缓存方向。")]),v._v(" "),e("ul",[e("li",[v._v("NoSQL 的 BASE 理论是什么")])]),v._v(" "),e("p",[v._v("可以说BASE理论是CAP中一致性的妥协。和传统事务的ACID截然不同，BASE不追求强一致性，而是允许数据在一段时间内是不一致的，但最终达到一致状态，从而获得更高的可用性和性能。")]),v._v(" "),e("p",[v._v("基本可用（Basically Avaliable），软状态（Soft State），最终一致（Eventual Consistency）")]),v._v(" "),e("ul",[e("li",[v._v("Redis 的过期键清除策略")])]),v._v(" "),e("p",[v._v("定期删除加惰性删除两种结合。")]),v._v(" "),e("p",[v._v("定期删除是 Redis 中有一个定时任务，每个 100ms 就会检测过期键并且删除。")]),v._v(" "),e("p",[v._v("惰性删除是客户端请求一个键值对时，如果该键值对过期了就删除，并且不会返回该数据。")]),v._v(" "),e("ul",[e("li",[v._v("Redis 内存淘汰策略有哪些")])]),v._v(" "),e("p",[v._v("在配置文件中配置。")]),v._v(" "),e("p",[v._v("例如： maxmemory-policy volatile-lru")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("策略")]),v._v(" "),e("th",[v._v("描述")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("noeviction")]),v._v(" "),e("td",[v._v("返回错误，不会删除任何键值")])]),v._v(" "),e("tr",[e("td",[v._v("allkeys-lru")]),v._v(" "),e("td",[v._v("使用 LRU 算法删除最近最少使用的键值")])]),v._v(" "),e("tr",[e("td",[v._v("volatile-lru")]),v._v(" "),e("td",[v._v("使用 LRU 算法从设置了过期时间的键集合中删除最近最少使用的键值")])]),v._v(" "),e("tr",[e("td",[v._v("allkeys-random")]),v._v(" "),e("td",[v._v("从所有 key 随机删除")])]),v._v(" "),e("tr",[e("td",[v._v("volatile-random")]),v._v(" "),e("td",[v._v("从设置了过期时间的键集合中随机删除")])]),v._v(" "),e("tr",[e("td",[v._v("volatile-ttl")]),v._v(" "),e("td",[v._v("从设置了过期时间的键中删除剩余时间最短的键")])]),v._v(" "),e("tr",[e("td",[v._v("volatile-lfu")]),v._v(" "),e("td",[v._v("从配置了过期时间的键中删除使用频率最少的键")])]),v._v(" "),e("tr",[e("td",[v._v("allkeys-lfu")]),v._v(" "),e("td",[v._v("从所有键中删除使用频率最少的键")])])])]),v._v(" "),e("ul",[e("li",[v._v("Redis 中的 LRU 算法")])]),v._v(" "),e("p",[v._v("LRU 算法使用一个双向链表记录数据最近被访问的顺序。但是出于对节省内存的考虑， Redis LRU 算法并非完整实现，只是近似 LRU 算法。")]),v._v(" "),e("p",[v._v("Redis通过对少量键进行取样，然后和目前维持的淘汰池综合比较，回收其中的最久未被访问的键。通过调整每次回收时的采样数量maxmemory-samples，可以实现调整算法的精度。")]),v._v(" "),e("ul",[e("li",[v._v("Redis 基础数据类型")])]),v._v(" "),e("p",[v._v("对外暴露5种Redis对象，分别是string、list、hash、set、zset。底层实现依托于sds、压缩列表、双向链表、哈希表、跳表、整数数组数据结构。")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("数据类型")]),v._v(" "),e("th",[v._v("底层数据结构")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("string")]),v._v(" "),e("td",[v._v("底层使用 sds 实现")])]),v._v(" "),e("tr",[e("td",[v._v("list")]),v._v(" "),e("td",[v._v("元素均小于64字节，或者元素个数不超过512时使用压缩列表；其他情况使用双向链表")])]),v._v(" "),e("tr",[e("td",[v._v("hash")]),v._v(" "),e("td",[v._v("元素均小于64字节，或者元素个数不超过512时使用压缩列表；其他情况使用哈希表")])]),v._v(" "),e("tr",[e("td",[v._v("set")]),v._v(" "),e("td",[v._v("元素均为整数，或者元素个数不超过512时使用整数数组；其他情况使用哈希表")])]),v._v(" "),e("tr",[e("td",[v._v("zset")]),v._v(" "),e("td",[v._v("元素均小于64字节，或者元素个数不超过128时使用压缩列表；其他情况使用跳表")])])])]),v._v(" "),e("ul",[e("li",[v._v("SDS 特点")])]),v._v(" "),e("p",[v._v("可以保存空字符串（\\0）。")]),v._v(" "),e("p",[v._v("会记录自身长度。")]),v._v(" "),e("p",[v._v("避免了缓冲区溢出问题。")]),v._v(" "),e("p",[v._v("预分配空间减少了修改字符串导致的内存重分配次数。")]),v._v(" "),e("p",[v._v("保存的二进制数据安全。")]),v._v(" "),e("p",[v._v("兼容 C 字符串部分函数。")]),v._v(" "),e("ul",[e("li",[v._v("hash 扩容过程")])]),v._v(" "),e("p",[v._v("Redis 中预存了两张哈希表，例如哈希表1和哈希表2，一开始使用的是哈希表1，当需要进行 rehash 时，Redis 会将哈希表2的内存扩容到哈希表1内存的两倍（哈希表2一开始是不分配内存的），然后采取渐进式 rehash 的方式将哈希表1的数据复制到哈希表2中，渐进式 rehash 就是当客户端每次对哈希表1上的数据发起请求时，Redis 会顺带迁移一个哈希表1上的数据并更新偏移索引，同时还会有定时任务定时迁移一些数据。当所有数据迁移完成之后 Redis 就会释放哈希表1的内存，留着下次 rehash 的时候使用。")]),v._v(" "),e("ul",[e("li",[v._v("rehash 的过程中请求过来 Redis 怎么处理")])]),v._v(" "),e("p",[v._v("增删改请求都会先在哈希表2中操作，查请求会现在哈希表1中操作，如果没有数据才会在哈希表2中进行。")]),v._v(" "),e("ul",[e("li",[v._v("跳表的实现")])]),v._v(" "),e("p",[v._v("跳表是一个包含多级索引的链表，通过逐层跳步采样的方式构建索引，以此加快查找速度。")]),v._v(" "),e("p",[v._v("跳表使用概率均衡的策略，先确定新插入节点的层数。Redis使用随机函数决定层数。直观上来说，默认1层，和丢硬币一样，如果是正面就继续往上，这样持续迭代，最大层数32层。")]),v._v(" "),e("p",[v._v("这样元素就会有50%的概率被分配到第一层，25%的概率被分配到第二层，12.5%的概率被分配到第三层。这种方式保证了越上层数量越少，自然跨越起来越方便。")]),v._v(" "),e("ul",[e("li",[v._v("Redis zset 为什么需要哈希表和跳表实现")])]),v._v(" "),e("p",[v._v("Zset是一个有序列表，哈希表和跳表分别对应两种查询场景，哈希表用来支持按成员查询数据，跳表则用以实现高效的范围查询，这样两个场景，性能都做到了极致。")]),v._v(" "),e("ul",[e("li",[v._v("Redis 持久化机制")])]),v._v(" "),e("p",[v._v("有两种方式，一种是开启RDB，RDB是Redis的二进制快照文件，优点是文件紧凑，占用空间小，恢复速度比较快。同时，由于是子进程Fork的模式，对Redis本身读写性能的影响很小。另一种方式是AOF，AOF中记录了Redis的操作命令，可以重放请求恢复现场，AOF的文件会比RDB大很多。")]),v._v(" "),e("p",[v._v("出于性能考虑，如果开启了AOF，会将命令先记录在AOF缓冲，之后再刷入磁盘。数据刷入磁盘的时机根据参数决定，有三种模式：1.关闭时刷入；2.每秒定期刷入；3.执行命令后立刻触发。")]),v._v(" "),e("p",[v._v("出于性能考虑，如果开启了AOF，会将命令先记录在AOF缓冲，之后再刷入磁盘。数据刷入磁盘的时机根据参数决定，有三种模式："),e("strong",[v._v("1.关闭时刷入；2.每秒定期刷入；3.执行命令后立刻触发。")])]),v._v(" "),e("p",[v._v("AOF的优点是故障情况下，丢失的数据会比RDB更少。如果是执行命令后立马刷入，AOF会拖累执行速度，所以一般都是配置为每秒定期刷入，这样对性能影响不会很大。")]),v._v(" "),e("p",[v._v("同时在 Redis 4 之后支持 RDB 和 AOF 两种方式同时开启，同时开启时 AOF 会将 RDB 文件的数据写 AOF 文件在前面。")]),v._v(" "),e("ul",[e("li",[v._v("AOF 重写机制")])]),v._v(" "),e("p",[v._v("Redis可以在AOF文件体积变得过大时，自动地在后台Fork一个子进程，专门对AOF进行重写。说白了，就是针对相同Key的操作，进行合并，比如同一个Key的set操作，那就是后面覆盖前面。")]),v._v(" "),e("p",[v._v("在重写过程中，Redis不但将新的操作记录在原有的AOF缓冲区，而且还会记录在AOF重写缓冲区。一旦新AOF文件创建完毕，Redis 就会将重写缓冲区内容，追加到新的AOF文件，再用新AOF文件替换原来的AOF文件。")]),v._v(" "),e("ul",[e("li",[v._v("Redis 挂了怎么办")])]),v._v(" "),e("p",[v._v("可以采取主从模式部署。")]),v._v(" "),e("p",[v._v("主从模式部署，如果时从库挂了对于整个主从不会有太大的影响，毕竟从库只能用来读，一个从库挂了还可以从主库或者其他从库读数据，如果是主库挂了，这个时候就得启用哨兵机制进行主从切换操作。哨兵机制会通过心跳机制监控主库的状态，如果多数哨兵都认为主库挂了的时候会进行主从切换选出新的主库。")]),v._v(" "),e("ul",[e("li",[v._v("如果主库挂了会选择哪个从库作为主库")])]),v._v(" "),e("p",[v._v("首先会过滤故障从库，这个过滤的规则是哨兵有一个配置是与主库连接最大超时时间，如果超过连接最大超时时间一定次数，这个从库就会被过滤掉。过滤之后会先根据从库的优先级判断（配置文件 slave-priority 参数），优先级大的作为主节点，如果相等会根据从库与主库之前复制数据的进度做对比，复制进度越接近主库的作为新主库，如果还是相等，这个时候会根据每一个实例的 runID 判断，runID 小的作为新主库，runID 是 Redis 实例启动时随机生成的标识。")]),v._v(" "),e("ul",[e("li",[v._v("哨兵leader是什么")])]),v._v(" "),e("p",[v._v("每一个哨兵节点都可以成为Leader，当一个哨兵节点确认Redis集群的主节点主观下线后，会请求其他哨兵节点要求将自己选举为Leader。被请求的哨兵节点如果没有同意过其他哨兵节点的选举请求，则同意该请求，也就是选举票数+1，否则不同意。")]),v._v(" "),e("p",[v._v("如果一个哨兵节点获得的选举票数"),e("strong",[v._v("超过节点数的一半，且大于quorum配置的值")]),v._v("，则该哨兵节点选举为Leader；否则重新进行选举。")]),v._v(" "),e("ul",[e("li",[v._v("Redis 性能如何")])]),v._v(" "),e("p",[v._v("查询可以达到每秒10w。但是在实际情况得跑 BenchMark，实际情况下会受带宽、负载、单个数据大小、是否开启多线程等因素影响，脱开具体场景谈性能，就没有意义。")]),v._v(" "),e("ul",[e("li",[v._v("Redis 线程模型")])]),v._v(" "),e("p",[v._v("Redis是单线程Reactor模型，通过高效的IO复用以及内存处理实现高性能。如果是6.0之前我会毫不犹豫说是单线程，6.0之后，我还是会说单线程，但会补充一句，IO解包通过多线程进行了优化，而处理逻辑，还是单线程。")]),v._v(" "),e("p",[v._v("另外，如果考虑到RDB的Fork，一些定时任务的处理，那么Redis也可以说多进程，这没有问题。但是Redis对数据的处理，至始至终，都是单线程。")]),v._v(" "),e("ul",[e("li",[v._v("Redis 6 的多线程")])]),v._v(" "),e("p",[v._v("多线程功能，主要用于提高解包的效率。和传统的Multi Reactor多线程模型不同，Redis的多线程只负责处理网络IO的解包和协议转换，一方面是因为Redis的单线程处理足够快，另一方面也是为了兼容性做考虑。")]),v._v(" "),e("ul",[e("li",[v._v("数据量太大怎么处理")])]),v._v(" "),e("p",[v._v("使用集群模式。也就是将数据分片，不同的Key根据Hash路由到不同的节点。集群索引是通过一致性Hash算法来完成，这种算法可以解决服务器数量发生改变时，所有的服务器缓存在同一时间失效的问题。")]),v._v(" "),e("p",[v._v("同时，基于Gossip协议，集群状态变化时，如新节点加入、节点宕机、Slave提升为新Master，这些变化都能传播到整个集群的所有节点并达成一致。")]),v._v(" "),e("ul",[e("li",[v._v("什么是一致性hash")])]),v._v(" "),e("p",[v._v("传统的Hash分片，可以将某个Key，落到某个节点。但有一个问题，当节点扩容或者缩容，路由会被完全打乱。如果是缓存场景，很容易造成缓存雪崩问题。")]),v._v(" "),e("p",[v._v("为了优化这种情况，一致性Hash就应运而生了。一致性Hash是说将数据和服务器，以相同的Hash函数，映射到同一个Hash环上，针对一个对象，在哈希环上顺时针查找距其最近的机器，这个机器就负责处理该对象的相关请求。")]),v._v(" "),e("p",[v._v("这种情况下，增加节点，只会分流后面一个节点的数据。减少节点，那么请求会由后一个节点继承。也就是说，节点变化操作，最多只会影响后面一个节点的数据。")]),v._v(" "),e("ul",[e("li",[v._v("Redis 缓存雪崩")])]),v._v(" "),e("p",[v._v("缓存雪崩表示在某一时间段，缓存集中失效，导致请求全部走数据库，有可能搞垮数据库，使整个服务瘫痪。雪崩原因一般是由于缓存过期时间设置得相同造成的。")]),v._v(" "),e("p",[v._v("针对这种情况，可以借鉴ETCD中Raft选举的优化，让过期时间随机化，避免同一批请求，在同一时间过期。另一方面，还可以业务层面容灾，为热点数据使用双缓存。")]),v._v(" "),e("ul",[e("li",[v._v("Redis 缓存穿透")])]),v._v(" "),e("p",[v._v("缓存穿透指请求数据库里面根本没有的数据，高频请求不存在的Key，有可能是正常的业务逻辑，但更可能的，是黑客的攻击。")]),v._v(" "),e("p",[v._v("可以用布隆过滤器来应对，布隆过滤器是一种比较巧妙的概率型数据结构，特点是高效地插入和查询，可以用来告诉我们 “某样东西一定不存在或者可能存在”。")]),v._v(" "),e("ul",[e("li",[v._v("布隆过滤器的实现")])]),v._v(" "),e("p",[v._v("布隆过滤器底层是一个64位的整型，将字符串用多个Hash函数映射不同的二进制位置，将整型中对应位置设置为1。")]),v._v(" "),e("p",[v._v("在查询的时候，如果一个字符串所有Hash函数映射的值都存在，那么数据可能存在。为什么说可能呢，就是因为其他字符可能占据该值，提前点亮。")]),v._v(" "),e("p",[v._v("可以看到，布隆过滤器优缺点都很明显，优点是空间、时间消耗都很小，缺点是结果不是完全准确。")]),v._v(" "),e("ul",[e("li",[v._v("Redis 缓存击穿")])]),v._v(" "),e("p",[v._v("缓存击穿，是指某一热键，被超高的并发访问，在失效的一瞬间，还没来得及重新产生，就有海量数据，直达数据库，可谓是兵临城下。")]),v._v(" "),e("p",[v._v("这种情况和缓存雪崩的不同之处，在于雪崩是大量缓存赶巧儿一起过期，击穿只是单个超热键失效")]),v._v(" "),e("p",[v._v("这种超高频Key，我们要提高待遇，可以让它不过期，再单独实现数据同步逻辑，来维护数据的一致性。当然，无论如何，对后端肯定是需要限频的，不然如果Redis数据丢失，数据库还是会被打崩。限频方式可以是分布式锁或分布式令牌桶。")]),v._v(" "),e("ul",[e("li",[v._v("Redis 可以做消息队列吗")])]),v._v(" "),e("p",[v._v("可以，有三种方式，list 、pub\\sub、stream。")]),v._v(" "),e("p",[v._v("pub\\sub 方式无法持久化数据，一般不建议使用。")]),v._v(" "),e("ul",[e("li",[v._v("Redis 分布式锁")])]),v._v(" "),e("p",[v._v("锁是计算机领域一个非常常见的概念，分布式锁也依赖存储组件，针对请求量的不同，可以选择Etcd、MySQL、Redis等。前两者可靠性更强，Redis性能更高。")]),v._v(" "),e("ul",[e("li",[v._v("Redis 限流场景应用")])]),v._v(" "),e("p",[v._v("在微服务架构下，限频器也需要分布式化。无论是哪种算法，都可以结合Redis来实现。这里我比较熟悉的是基于Redis的分布式令牌桶。")]),v._v(" "),e("p",[v._v("很显然，Redis负责管理令牌，微服务需要进行函数操作，就向Redis申请令牌，如果Redis当前还有令牌，就发放给它。拿到令牌，才能进行下一步操作。")]),v._v(" "),e("p",[v._v("另一方面，令牌不光要消耗，还需要补充，出于性能考虑，可以使用懒生成的方式：使用令牌时，顺便生成令牌。这样子还有个好处：令牌的获取，和令牌的生成，都可以在一个Lua脚本中，保证了原子性。")])])}),[],!1,null,null,null);_.default=i.exports}}]);