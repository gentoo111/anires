
## 使用方法

1. 安装Node.js环境：https://nodejs.org/

2. 安装git: https://git-scm.com/

3. 执行以下命令：

``` bash
git clone https://github.com/sitexa/anires.git
cd anires
npm install
npm run dev
```

## 部署方法

1. 编辑 config/index.js，修改第 10 行的 assetsPublicPath，值为 `项目名/public`。如果你没有修改项目名 anires，则可跳过此步骤。

2. 编译、上传
  
``` 
bash
npm run build
git add .
git commit -m "update"
git push
```

3. 开启 GitHub Pages 功能, 或者，把生成的目标文件```public/*```放在你的web服务器上。

4. GitHub Pages 的开启方式,新建一个工程,工程名为你的github账号+github.io

5. 按照README.md方法部署后，打开页面为空白 

   	解决方案为:删除dist/index.html,里面有硬编码。 

  5.按博主的教程打完包后,在本地确实可以部署成功,但发到github上还是空白页面,需要手动将index.html中依赖的css和js改为同级目录,并将css和js移到根目录,再push到github上即可完成

