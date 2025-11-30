import crypto from 'crypto';
import https from 'https';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Cấu hình đường dẫn chính xác tới file .env (Từ thư mục untils lùi ra 1 cấp về thư mục gốc)
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../.env') });

export async function createMoMoPayment(amount, orderInfo) {
    const partnerCode = process.env.MOMO_PARTNER_CODE;
    const accessKey = process.env.MOMO_ACCESS_KEY;
    const secretkey = process.env.MOMO_SECRET_KEY;

    // --- LOG KIỂM TRA (Sẽ hiện trong Terminal server) ---
    console.log("-----------------------------------------");
    console.log("🔍 Đang kiểm tra cấu hình MoMo:");
    console.log("PartnerCode:", partnerCode);
    console.log("AccessKey:", accessKey ? "Đã có" : "❌ Thiếu (Undefined)");
    console.log("SecretKey:", secretkey ? "Đã có" : "❌ Thiếu (Undefined)");
    console.log("-----------------------------------------");
    
    if (!secretkey) {
        throw new Error("MOMO_SECRET_KEY đang bị thiếu. Hãy kiểm tra file .env!");
    }

    const requestId = partnerCode + new Date().getTime();
    const orderId = requestId;

    const redirectUrl = process.env.MOMO_REDIRECT_URL; 
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