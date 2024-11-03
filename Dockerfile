# 运行sudo docker build -t personal-page-backend .
# 使用 Node.js 作为基础镜像
FROM node:18-alpine

# 安装 git 和其他工具
RUN apk add --no-cache git

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 lock 文件并安装依赖
COPY package.json package-lock.json* ./
RUN npm install


# 设置 Node.js 内存限制为 4GB
ENV NODE_OPTIONS="--max-old-space-size=4096"

# 复制代码到工作目录
COPY . .

# 暴露 7921 端口
EXPOSE 7921

# 启动后端服务
CMD ["node", "./bin/www" ]
