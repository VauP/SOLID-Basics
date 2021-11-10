import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/Mailer';

export class MailTrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() { 
        this.transporter = nodemailer.createTransport({
            host: "x",
            port: 2525,
            auth: {
              user: "x",
              pass: "x"
            }
        });
    }



    async sendMail(message: IMessage): Promise <void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            body: message.body,
        });
    }

}
    
