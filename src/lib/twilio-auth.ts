export type TwilioCredentials =
  | {
      ok: true;
      accountSid: string;
      authToken: string;
      fromNumber: string;
      toNumber: string;
    }
  | { ok: false; missing: string[] };

function trim(value: string | undefined): string | undefined {
  return value?.trim() || undefined;
}

export function resolveTwilioCredentials(): TwilioCredentials {
  const accountSid = trim(
    process.env.TWILIO_ACCOUNT_SID ?? process.env.TWILIO_SID,
  );
  const authToken = trim(
    process.env.TWILIO_AUTH_TOKEN ?? process.env.TWILIO_AUTH,
  );
  const fromNumber = trim(process.env.TWILIO_NUMBER);
  const toNumber = trim(process.env.CLIENT_SMS_TO);

  const missing: string[] = [];

  if (!accountSid?.startsWith("AC")) {
    missing.push("TWILIO_ACCOUNT_SID (starts with AC)");
  }
  if (!authToken) {
    missing.push("TWILIO_AUTH_TOKEN");
  }
  if (!fromNumber) missing.push("TWILIO_NUMBER");
  if (!toNumber) missing.push("CLIENT_SMS_TO");

  if (missing.length > 0) {
    return { ok: false, missing };
  }

  return {
    ok: true,
    accountSid: accountSid!,
    authToken: authToken!,
    fromNumber: fromNumber!,
    toNumber: toNumber!,
  };
}
