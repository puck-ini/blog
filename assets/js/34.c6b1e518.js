(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{399:function(s,n,a){"use strict";a.r(n);var e=a(44),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"spring-data-jpa-笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-data-jpa-笔记"}},[s._v("#")]),s._v(" Spring Data JPA 笔记")]),s._v(" "),a("h2",{attrs:{id:"常用注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用注解"}},[s._v("#")]),s._v(" 常用注解")]),s._v(" "),a("h3",{attrs:{id:"entity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entity"}},[s._v("#")]),s._v(" @Entity")]),s._v(" "),a("p",[s._v("标注类为跟数据库表映射的实体")]),s._v(" "),a("h3",{attrs:{id:"table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[s._v("#")]),s._v(" @Table")]),s._v(" "),a("p",[s._v("标明映射的数据表名")]),s._v(" "),a("h3",{attrs:{id:"id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[s._v("#")]),s._v(" @Id")]),s._v(" "),a("p",[s._v("标识主键")]),s._v(" "),a("h3",{attrs:{id:"column"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#column"}},[s._v("#")]),s._v(" @Column")]),s._v(" "),a("p",[s._v("数据库表字段属性信息")]),s._v(" "),a("h3",{attrs:{id:"generatedvalue-strategy-generationtype-identity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generatedvalue-strategy-generationtype-identity"}},[s._v("#")]),s._v(" @GeneratedValue(strategy  = GenerationType.IDENTITY)")]),s._v(" "),a("p",[s._v("自增属性有自增类型会将属性定义为该类型，没有的话会创建序列进行关联自增")]),s._v(" "),a("h3",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[s._v("#")]),s._v(" @Version")]),s._v(" "),a("p",[s._v("该注解标注的属性会作为乐观锁在 save() 方法更新时进行判断，版本不同会更新失败")]),s._v(" "),a("h3",{attrs:{id:"mappedsuperclass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mappedsuperclass"}},[s._v("#")]),s._v(" @MappedSuperclass")]),s._v(" "),a("p",[s._v("标识映射的超类，可以将表共有的属性放在该注解标识的类中，然后让其他实体类去继承该类")]),s._v(" "),a("h3",{attrs:{id:"prepersist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepersist"}},[s._v("#")]),s._v(" @PrePersist")]),s._v(" "),a("p",[s._v("用在方法上，在实体保存到数据库之前可以执行的操作，例如实现 createTime 属性的自动添加")]),s._v(" "),a("h3",{attrs:{id:"preupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preupdate"}},[s._v("#")]),s._v(" @PreUpdate")]),s._v(" "),a("p",[s._v("用在方法上，在实体更新到数据库之前可以执行的操作，例如实现 updateTime 属性的自动更新")]),s._v(" "),a("h3",{attrs:{id:"preremove"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preremove"}},[s._v("#")]),s._v(" @PreRemove")]),s._v(" "),a("p",[s._v("用在方法上，在实体从数据库删除之前可以执行的操作")]),s._v(" "),a("h3",{attrs:{id:"enumerated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enumerated"}},[s._v("#")]),s._v(" @Enumerated")]),s._v(" "),a("p",[s._v("用在属性上，可以将枚举当作实体的属性，注解可以设置值，EnumType.ORDINAL 表示使用枚举默认的下标作为值保存在数据库中，EnumType.STRING 表示用枚举名字的字符串作为值保存在数据库中")]),s._v(" "),a("h3",{attrs:{id:"embedded"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#embedded"}},[s._v("#")]),s._v(" @Embedded")]),s._v(" "),a("p",[s._v("嵌入型属性，可以用于@Entity  标注的类中的属性上，当作嵌入型属性")]),s._v(" "),a("h3",{attrs:{id:"embeddable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#embeddable"}},[s._v("#")]),s._v(" @Embeddable")]),s._v(" "),a("p",[s._v("嵌入型类，用在嵌入型类上")]),s._v(" "),a("p",[s._v("@Embedded  和 @Embeddable  只用一个就能生效，两个都用也没区别")]),s._v(" "),a("h3",{attrs:{id:"embeddedid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#embeddedid"}},[s._v("#")]),s._v(" @EmbeddedId")]),s._v(" "),a("p",[s._v("组合主键，可以在多对多关系表中使用，需要与@Embeddable 配合使用")]),s._v(" "),a("h3",{attrs:{id:"lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lock"}},[s._v("#")]),s._v(" @Lock")]),s._v(" "),a("p",[s._v("该注解用在方法上，有很多种类型的锁，例如 @Lock(LockModeType.PESSIMISTIC_WRITE) 用在 findByName(String pname) 方法上就可以实现一个悲观锁，等价于SQL：select * from table where name = pname for update;")]),s._v(" "),a("h3",{attrs:{id:"norepositorybean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#norepositorybean"}},[s._v("#")]),s._v(" @NoRepositoryBean")]),s._v(" "),a("p",[s._v("用在接口或者类上，表示该接口和类不是一个jpa 中的 repository，作为接口一般继承于 JpaRepository")]),s._v(" "),a("h2",{attrs:{id:"例子1-实体基类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子1-实体基类"}},[s._v("#")]),s._v(" 例子1：实体基类")]),s._v(" "),a("h4",{attrs:{id:"baseentity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#baseentity"}},[s._v("#")]),s._v(" BaseEntity")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@MappedSuperclass\npublic class BaseEntity {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    /**\n     * 创建时间\n     */\n    @Column(name = "create_time")\n    private Date createTime;\n\n    /**\n     * 更新时间\n     */\n    @Column(name = "update_time")\n    private Date updateTime;\n\n    /**\n     * jpa version 乐观锁，解决并发更新的问题\n     */\n    @Version\n    private Integer version;\n\n    /**\n     * 在实体保存到数据库之前执行的操作\n     */\n    @PrePersist\n    public void prePersist(){\n        this.createTime = this.updateTime = new Date();\n    }\n\n    /**\n     * 在实体更新到数据库之前执行的操作\n     */\n    @PreUpdate\n    public void preUpdate(){\n        this.updateTime = new Date();\n    }\n\n    /**\n     * 在实体从数据库删除之前执行的操作\n     */\n    @PreRemove\n    public void preRemove(){\n        this.updateTime = new Date();\n    }\n\n\n    // get and set ...\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br")])]),a("h4",{attrs:{id:"userentity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#userentity"}},[s._v("#")]),s._v(" UserEntity")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@Entity\npublic class UserEntity extends BaseEntity{\n\n    /**\n     * 用户名\n     */\n    private Username username;\n\n    /**\n     * 密码\n     */\n    private Password password;\n    /**\n     * 用户类型，EnumType.STRING 表示使用枚举名字的字符串保存在数据库中\n     */\n    @Enumerated(EnumType.STRING)\n    private UserType userType;\n\n    // get and set ...\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h4",{attrs:{id:"roleentity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#roleentity"}},[s._v("#")]),s._v(" RoleEntity")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@Entity\npublic class RoleEntity extends BaseEntity {\n    /**\n     * 角色名\n     */\n    private String name;\n    /**\n     * 角色描述\n     */\n    private String description;\n    \n    // get and set ...\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h4",{attrs:{id:"userrole"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#userrole"}},[s._v("#")]),s._v(" UserRole")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@Entity\npublic class UserRole {\n    /**\n     * 组合主键\n     */\n    @EmbeddedId\n    private UserRoleId userRoleId;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h4",{attrs:{id:"嵌入型属性以及组合主键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌入型属性以及组合主键"}},[s._v("#")]),s._v(" 嵌入型属性以及组合主键")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/** \n * 这里添加了注解之后 UserEntity 使用时就不再需要添加 @Embedded 注解\n */\n@Embeddable\npublic class Username {\n\n    private String username;\n\n    /** \n     * 嵌入属性必须有无参构造函数，不然会报错\n     */\n    public Username() {}\n\n    public Username(String username) {\n        this.username = username;\n    }\n\n    /** \n     * 嵌入属性必须有get set 方法，不然 jpa save() 方法返回的值会没数据\n     */\n    public String getUsername() {\n        return username;\n    }\n\n    public void setUsername(String username) {\n        this.username = username;\n    }\n}\n\n@Embeddable\npublic class Password {\n\n    private String password;\n\n    public Password() {}\n\n    public Password(String password) {\n        this.password = password;\n    }\n\n    public String getPassword() {\n        return password;\n    }\n\n    public void setPassword(String password) {\n        this.password = password;\n    }\n}\n\n\n@Embeddable\npublic class UserRoleId implements Serializable {\n    /**\n     * 用户id\n     */\n    private Long userId;\n    /**\n     * 角色id\n     */\n    private Long roleId;\n    \n    // get and set ...\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br")])]),a("h4",{attrs:{id:"枚举"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#枚举"}},[s._v("#")]),s._v(" 枚举")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('/**\n * EnumType.ORDINAL 表示保存枚举的下标从0开始，例如枚举 ADMIN 在 USER 上面，ADMIN 就是保存0 USER 就是1\n * EnumType.STRING 表示使用枚举名字的字符串保存在数据库中，例如枚举 ADMMIN 在数据库中保存的就是"ADMIN"这个字符串 \n */\npublic enum  UserType {\n    /**\n     * 管理员\n     */\n    ADMIN,\n    /**\n     * 普通用户\n     */\n    USER;\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"例子2-自定义-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子2-自定义-repository"}},[s._v("#")]),s._v(" 例子2：自定义 Repository")]),s._v(" "),a("h4",{attrs:{id:"baserepo-自定义接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#baserepo-自定义接口"}},[s._v("#")]),s._v(" BaseRepo 自定义接口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@NoRepositoryBean\npublic interface BaseRepo<ENTITY, ID> extends JpaRepository<ENTITY, ID> {\n\n    /**\n     * 自定义查找\n     * @param ids id 列表\n     * @param sort 排序方式\n     * @return 返回实体列表\n     */\n    List<ENTITY> findAllById(Collection<ID> ids, Sort sort);\n\n    /**\n     * 自定义查找\n     * @param ids id 列表\n     * @param pageable 分页方式\n     * @return 返回实体列表\n     */\n    Page<ENTITY> findAllById(Collection<ID> ids, Pageable pageable);\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h4",{attrs:{id:"baserepoimpl-自定义接口实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#baserepoimpl-自定义接口实现"}},[s._v("#")]),s._v(" BaseRepoImpl 自定义接口实现")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('public class BaseRepoImpl<ENTITY, ID> extends SimpleJpaRepository<ENTITY, ID> implements BaseRepo<ENTITY, ID> {\n\n    private JpaEntityInformation<ENTITY, ID> entityInformation;\n\n    private EntityManager entityManager;\n\n    public BaseRepoImpl(JpaEntityInformation<ENTITY, ID> entityInformation,\n                        EntityManager entityManager) {\n        super(entityInformation, entityManager);\n        this.entityInformation = entityInformation;\n        this.entityManager = entityManager;\n    }\n\n    /**\n     * 自定义查找\n     * @param ids id 列表\n     * @param sort 排序方式\n     * @return 返回实体列表\n     */\n    @Override\n    public List<ENTITY> findAllById(Collection<ID> ids, Sort sort) {\n        if (!ids.iterator().hasNext()) {\n            return Collections.emptyList();\n        }\n\n        if (entityInformation.hasCompositeId()) {\n            List<ENTITY> results = new ArrayList<>();\n            ids.forEach(id -> super.findById(id).ifPresent(results::add));\n            return results;\n        }\n\n        ByIdsSpecification<ENTITY> specification = new ByIdsSpecification<>(entityInformation);\n        TypedQuery<ENTITY> query = super.getQuery(specification, sort);\n        return query.setParameter(specification.parameter, ids).getResultList();\n    }\n\n    /**\n     * 自定义查找\n     * @param ids id 列表\n     * @param pageable 分页方式\n     * @return 返回实体列表\n     */\n    @Override\n    public Page<ENTITY> findAllById(Collection<ID> ids, Pageable pageable) {\n        if (!ids.iterator().hasNext()) {\n            return new PageImpl<>(Collections.emptyList());\n        }\n\n        if (entityInformation.hasCompositeId()) {\n            throw new UnsupportedOperationException("Unsupported find all by composite id with page info");\n        }\n\n        ByIdsSpecification<ENTITY> specification = new ByIdsSpecification<>(entityInformation);\n        TypedQuery<ENTITY> query = super.getQuery(specification, pageable)\n                .setParameter(specification.parameter, ids);\n        TypedQuery<Long> countQuery = getCountQuery(specification, getDomainClass())\n                .setParameter(specification.parameter, ids);\n\n        return pageable.isUnpaged() ?\n                new PageImpl<>(query.getResultList())\n                : readPage(query, getDomainClass(), pageable, countQuery);\n    }\n    \n\n    protected <S extends ENTITY> Page<S> readPage(TypedQuery<S> query,\n                                                  Class<S> domainClass,\n                                                  Pageable pageable,\n                                                  TypedQuery<Long> countQuery) {\n\n        if (pageable.isPaged()) {\n            query.setFirstResult((int) pageable.getOffset());\n            query.setMaxResults(pageable.getPageSize());\n        }\n\n        return PageableExecutionUtils.getPage(query.getResultList(), pageable,\n                () -> executeCountQuery(countQuery));\n    }\n\n    private static long executeCountQuery(TypedQuery<Long> query) {\n\n        Assert.notNull(query, "TypedQuery must not be null!");\n\n        List<Long> totals = query.getResultList();\n        long total = 0L;\n\n        for (Long element : totals) {\n            total += element == null ? 0 : element;\n        }\n\n        return total;\n    }\n\n    private static final class ByIdsSpecification<T> implements Specification<T> {\n        private static final long serialVersionUID = 1L;\n        private final JpaEntityInformation<T, ?> entityInformation;\n        @Nullable\n        ParameterExpression<Collection> parameter;\n\n        ByIdsSpecification(JpaEntityInformation<T, ?> entityInformation) {\n            this.entityInformation = entityInformation;\n        }\n\n        @Override\n        public Predicate toPredicate(Root<T> root, CriteriaQuery<?> query, CriteriaBuilder cb) {\n            Path<?> path = root.get(this.entityInformation.getIdAttribute());\n            this.parameter = cb.parameter(Collection.class);\n            return path.in(this.parameter);\n        }\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br")])]),a("h4",{attrs:{id:"在启动类上添加-enablejparepositories-标明使用自定义的-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在启动类上添加-enablejparepositories-标明使用自定义的-repository"}},[s._v("#")]),s._v(" 在启动类上添加 @EnableJpaRepositories 标明使用自定义的 Repository")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@EnableJpaRepositories(repositoryBaseClass = BaseRepoImpl.class)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"例子2-1-扩展-定义公有-service-实现简单的crud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子2-1-扩展-定义公有-service-实现简单的crud"}},[s._v("#")]),s._v(" 例子2.1（扩展）：定义公有 Service 实现简单的CRUD")]),s._v(" "),a("h4",{attrs:{id:"公有接口-basecrudservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公有接口-basecrudservice"}},[s._v("#")]),s._v(" 公有接口 BaseCrudService")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("public interface BaseCrudService<ENTITY, ID> {\n\n    List<ENTITY> listAll();\n\n    Optional<ENTITY> get(ID id);\n\n    @Transactional(rollbackFor = Exception.class)\n    ENTITY create(ENTITY entity);\n\n    @Transactional(rollbackFor = Exception.class)\n    ENTITY update(ENTITY entity);\n\n    @Transactional(rollbackFor = Exception.class)\n    ENTITY remove(ID id);\n\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h4",{attrs:{id:"abstractcrudservice-抽象类实现-basecrudservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstractcrudservice-抽象类实现-basecrudservice"}},[s._v("#")]),s._v(" AbstractCrudService 抽象类实现 BaseCrudService")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("public abstract class AbstractCrudService<ENTITY, ID> implements BaseCrudService<ENTITY, ID> {\n\n    private final BaseRepo<ENTITY, ID> repo;\n\n    protected AbstractCrudService(BaseRepo<ENTITY, ID> repo) {\n        this.repo = repo;\n    }\n\n    @Override\n    public List<ENTITY> listAll() {\n        return repo.findAll();\n    }\n\n    @Override\n    public Optional<ENTITY> get(ID id) {\n        return repo.findById(id);\n    }\n\n    @Override\n    public ENTITY create(ENTITY entity) {\n        return repo.save(entity);\n    }\n\n    @Override\n    public ENTITY update(ENTITY entity) {\n        return repo.saveAndFlush(entity);\n    }\n\n    @Override\n    public ENTITY remove(ID id) {\n        ENTITY entity = get(id).orElse(null);\n        repo.deleteById(id);\n        return entity;\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])]),a("h4",{attrs:{id:"简单使用-userservice-和-userserviceimpl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单使用-userservice-和-userserviceimpl"}},[s._v("#")]),s._v(" 简单使用 UserService 和 UserServiceImpl")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("public interface UserService extends BaseCrudService<UserEntity, Long> {\n}\n\n\n@Service\npublic class UserServiceImpl extends AbstractCrudService<UserEntity, Long> implements UserService {\n\n\n    private final UserRepo userRepo;\n\n    protected UserServiceImpl(UserRepo userRepo) {\n        super(userRepo);\n        this.userRepo = userRepo;\n    }\n\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);