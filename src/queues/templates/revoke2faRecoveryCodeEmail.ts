import { baseTemplate } from './baseTemplate';

export const revoke2FASecretEmailTemplate = (data) => {
	return baseTemplate(`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  </head>
  <body style="background-color: #fff; font-family: Arial, sans-serif;">
    <table width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <tr>
        <td>
          <h1 style="color: #000; font-size: 24px; text-align: center; margin: 0;">
            2FA Recovery Secret Revoked
          </h1>
          <p style="font-size: 14px; line-height: 24px; margin: 16px 0;">
            Hello ${data.name}, we're writing to inform you that your 2FA recovery secret has been revoked successfully.
          </p>
          <p style="font-size: 14px; line-height: 24px; margin: 16px 0;">
            If you didn't initiate this action, please contact our support team immediately.
          </p>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="text-align: center;">
            <tr>
              <td>
                <a href=mailto:donotreply@abeghelp.me
                   target="_blank"
                   style="line-height: 100%; text-decoration: none; display: inline-block; padding: 12px 20px; background-color: #4CAF50; border-radius: 4px; color: #fff; font-size: 14px; font-weight: 600; text-align: center;">
                  Contact Support
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`);
};
