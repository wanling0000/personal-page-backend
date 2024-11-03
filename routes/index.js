var express = require("express");
var nodemailer = require("nodemailer");
var router = express.Router();

router.post("/sendemail", (req, res) => {
	// 实现发送邮件
	const { name, email, message } = req.body;
	console.log("get:", name, email, message);
	if (!name || !email || !message) {
		res.status(502).json({
			code: 502,
			msg: "props fail",
			data: null,
		});
	}

	var mailTransport = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secureConnection: true, // 使用SSL方式（安全方式，防止被窃取信息）
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	var options = {
		from: `fionafu35@gmail.com`, // 其实就是自己的邮箱给自己发邮件
		to: 'fionafu35@gmail.com',
		subject: "来自你的个人主页的邮件",
		text: name + " - " + email + ": " + message,
	};

	mailTransport.sendMail(options, function (err, msg) {
		if (err) {
			console.log(err);
			res.status(501).json({
				code: 501,
				msg: "send fail",
				data: null,
			});
		} else {
			res.status(200).json({
				code: 200,
				msg: "success",
				data: null,
			});
		}
	});
});

module.exports = router;
