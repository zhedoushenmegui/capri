# 一个简易的前端脚手架
- 基于 [vue v2](https://cn.vuejs.org/v2/guide/)
- 使用 [element UI](https://element.eleme.io/)
- 其他仅使用普通js 和 css
- demo 见 demo.png

注意
- 目的是为了快速搭起一个小网站, 比如说内部的配置平台;
- 所以很多地方写的很low;
- 目标用户是不熟悉前端的用户, 通过快速了解html和js, 就能根据demo快速开发;
- 目前仅支持POST, 因为这样前后端开发都简单; GET或者其他方法在utils 里增加即可;

使用:
1. 安装npm
2. 执行
```shell
npm install
```

常见配置:
1. logo:  src/assets/logo.png
2. favicon: src/assets/favicon.ico
3. 顶部导航(header)和侧边栏导航(aside) 配置: src/config/config.js
4. 路由(route): src/main.js

开发
```shell
# 开发命令
# 会在8010起一个服务, 实现这样修改完不需要手动编译
# 配置见 webpack.config.js
npm run dev
```

部署
```shell
# 编译命令
# 会编译到static 文件夹里
npm run build
```

建议使用nginx 作为服务器, 
开发配置:
```
server {
        listen       8011;  # 通过localhost:8011 
        index  index.html index.htm;  #打开默认文件为index.html

        # 后端地址, 可以使用任意后端语言, python/java/php 等;
        location ~ /api/.* {
            proxy_pass http://127.0.0.1:8080;
            add_header Content-Type "application/json;charset=utf-8";
            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Credentials' 'true';
            add_header 'Access-Control-Allow-Methods' 'GET, POST';
        }
        # 前端地址, 指向 npm run dev 起的端口
        location / {
            proxy_pass http://127.0.0.1:8010;
            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Credentials' 'true';
            add_header 'Access-Control-Allow-Methods' 'GET, POST';
        }
    }
```

部署配置:
```
server {
        listen       8030;  # 部署端口
        root   /static;  #指向 npm run build 产生的文件夹地址
        index  index.html index.htm;  #打开默认文件为index.html

        # 后端
        location /api {
            proxy_pass http://127.0.0.1:8080;
            add_header Content-Type "application/json;charset=utf-8";
            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Credentials' 'true';
            add_header 'Access-Control-Allow-Methods' 'GET, POST';
        }

        location / {
            root  /static; #指向 npm run build 产生的文件夹地址
            index  index.html index.htm;
            try_files $uri $uri/ /index.html;
        }
    }
```

