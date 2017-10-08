###@Author:Sprite
##资料来源：麦子课堂
工具：webstorms2017.2.1
涉及内容：gulp+express+angular
项目描述：小型登录系统，包括登录、注销、编辑、删除、保存文本
bug：autologin出错，可查改

关于token问题
1、NeDB数据库，它是一种nosql数据库，其中API是MongoDB的子集
2、使用NeDB数据库，首先，它是文件型数据库，它只要引用包，不需要经过第三方服务。一般我们使用数据库，都要经过安装数据库，启动第三方服务，然后在使用。其实，它是Nosql数据库，它是json存储的文件型数据库。你说的redis也是nosql数据库。最后，它很小，占用内存少，针对小型项目是足够的。而且，它是API是MongoDB的子集，之后如果要换成MongoDB数据库时，只需要该数据链接就行。
3、项目中设置了token的expriedtime（失效时间），在登陆时，设置了expriedtime为当前时间+一天，而退出登录时，这设置了expriedtime为当前时间，即到此刻，token失效。我们也可以创建一个nodejs的中间件（verifyToken）进行检查。对于多用户，如果是一个用户登陆后退出，再登录另一个，是可以的；多用户同时登陆，应该不行吧，至少我的这个小项目里不能这么操作！
