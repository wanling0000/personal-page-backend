# readme

本项目是实现了一个自己向自己发送邮件的接口。就一个接口。

这个东西是运行到本机7921端口上的。通过sendemail接口来的。需要参数：`name`, `email`, `message`三者结合才能做到。

使用了nodemailer包来进行实现发送邮件。计网实验...

然后有使用express-rate-limit来限制一个ip不能在一定时间内发送过多请求。
