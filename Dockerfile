# 运行sudo docker build -t personal-page-app .
# 使用官方 Node 镜像作为基础镜像
FROM node:18

# 设置工作目录
WORKDIR /app

# 复制当前目录下的所有文件到容器中
COPY . /app

# 安装后端依赖
RUN npm install

# 暴露端口
EXPOSE 7921

# 启动应用程序
CMD ["npm", "start"]
