import crypto from 'crypto';
import https from 'https';

export async function createMoMoPayment(amount, orderInfo) {
    const partnerCode = process.env.MOMO_PARTNER_CODE;
    const accessKey = process.env.MOMO_ACCESS_KEY;
    const secretkey = process.env.MOMO_SECRET_KEY;

    const requestId = partnerCode + new Date().getTime();
    const orderId = requestId;

    const redirectUrl = process.env.MOMO_REDIRECT_URL; //const redirectUrl = "http://localhost:3000/payment-return";
    const ipnUrl = process.env.MOMO_IPN_URL;
    const requestType = "captureWallet";
    const extraData = "";

    const rawSignature =
        `accessKey=${accessKey}` +
        `&amount=${amount}` +
        `&extraData=${extraData}` +
        `&ipnUrl=${ipnUrl}` +
        `&orderId=${orderId}` +
        `&orderInfo=${orderInfo}` +
        `&partnerCode=${partnerCode}` +
        `&redirectUrl=${redirectUrl}` +
        `&requestId=${requestId}` +
        `&requestType=${requestType}`;

    const signature = crypto
        .createHmac('sha256', secretkey)
        .update(rawSignature)
        .digest('hex');

    const body = JSON.stringify({
        partnerCode,
        accessKey,
        requestId,
        amount,
        orderId,
        orderInfo,
        redirectUrl,
        ipnUrl,
        extraData,
        requestType,
        signature,
        lang: "vi",
    });

    const options = {
        hostname: 'test-payment.momo.vn',
        port: 443,
        path: '/v2/gateway/api/create',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(body),
        },
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, res => {
            let responseData = "";

            res.on("data", chunk => {
                responseData += chunk;
            });

            res.on("end", () => {
                try {
                    resolve(JSON.parse(responseData));
                } catch (err) {
                    reject(err);
                }
            });
        });

        req.on("error", reject);
        req.write(body);
        req.end();
    });
}
