const Keygrip = require('keygrip');
const keys = require('../../config/keys');
const Buffer = require('buffer').Buffer;

module.exports = (user) => {
    const sessionObject = {
        passport: {
            user: user._id.toString()
        }
    };
    const session = Buffer.from(
        JSON.stringify(sessionObject)
    ).toString('base64');
   
    const keygrip = new Keygrip([keys.cookieKey]);
    const sig = keygrip.sign('session=' + session);
    return { session, sig };
}