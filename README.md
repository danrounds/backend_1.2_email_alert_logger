### Emai-logger middleware

Server setup where any resource-request generates an error. 2 of 3 errors generate relevant emails.

Depedencies:
* Express.js (Node.js)
* [Morgan](https://www.npmjs.com/package/morgan), logger
* [Winston](https://www.npmjs.com/package/winston), logger
* [nodemeailer](https://www.npmjs.com/package/nodemailer)

My code is basically localized in [errorMailer.js](./errorMailer.js). "Template" for project is [Thinkful](https://www.npmjs.com/package/nodemailer)'s

Gomix project is [here](https://gomix.com/#!/project/south-newsstand); hosted page&#8212;which does nothing but potentially trigger an email to me&#8212;is [here](https://south-newsstand.gomix.me/).

-DR, 2016