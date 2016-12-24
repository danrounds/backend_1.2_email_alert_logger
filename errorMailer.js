//DR, 2016
'use strict';

const {sendEmail} = require('./emailer');

const from = `"${process.env.ALERT_FROM_NAME}" <${process.env.ALERT_FROM_EMAIL}>`;
const to = process.env.ALERT_TO_EMAIL;

const errorMail = (err, req, res, next) => {
  // * In the event of a FooError or BarError, the app should send an email alert to a recipient you specify in a config file (.env).
  // * BizzErrors (roughly one-third of the time) should not trigger email alerts.
  // * Each alert email should have a subject that looks like this: ALERT: a BarError occurred.
  // * The alert email should have a from name and from email address. The from name should be something like "SERVICE ALERTS".
  // * The body should summarize what happened and include the error message (err.message) and the stack trace (err.stack).
  if (['FooError', 'BarError'].indexOf(err.name) + 1) {
    let subject = `ALERT, a ${err.name} has occured.`;
    let text = `Error message:\n${err.message}n\nStack trace:\n${err.stack}`;
    let html = `<p>Error message:<br>${err.message}<br><br>Stack trace<br>${err.stack}</p>`;
    
    let emailData = {from, to, subject, text, html};
    sendEmail(emailData);
  }
  next();
};

module.exports = {errorMail};