// api/sendemail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                code: 400,
                msg: "Invalid request body",
                data: null,
            });
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "fionafu35@gmail.com",
                pass: "bxkf oqbz rimo zkqq",
            },
        });

        const mailOptions = {
            from: "fionafu35@gmail.com",
            to: "fionafu35@gmail.com",
            subject: "来自你的个人主页的邮件",
            text: `${name} - ${email}: ${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({
                code: 200,
                msg: "Email sent successfully",
                data: null,
            });
        } catch (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({
                code: 500,
                msg: "Failed to send email",
                data: null,
            });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
