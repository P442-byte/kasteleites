export async function POST(request: Request) {
    const body = await request.json(); 
    

    const formData = require('form-data');
    const Mailgun = require('mailgun.js');
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({username: 'api', key: process.env.SECRET});

    mg.messages.create(process.env.DOMAIN, {
        from: `${body.name} <${body.email}>`,
        to: ["pfourie442@gmail.com"],
        subject: body.subject,
        text: "Name: " + body.name + 
        ", " + "Email: " + body.email + 
        ", " + "Subject: "+ body.subject +
        ", " + "Message: "+ body.message
    })
    .then(msg => console.log(msg)) // logs response data
    .catch(err => console.log(err)); // logs any error





    const email = body.email;
    const name = body.name;
    const subject = body.subject;
    const message = body.message;
    const data = {
        'email': email,
        'name': name,
        'subject': subject,
        'message': message
    }

    return Response.json(data);
}
