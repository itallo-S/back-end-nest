import { createCipheriv, createDecipheriv } from 'crypto';

const algorithm = 'AES-128-ECB';
const encoding = 'utf8';
const output = 'hex';
const iv = null;

const secret = process.env.CRYPTO_SECRET_KEY;

export function encrypto(value: unknown) {
  const key = Buffer.from(secret, encoding);
  const cypher = createCipheriv(algorithm, key, iv);

  let encrypted = cypher.update(JSON.stringify(value), encoding, output);
  encrypted += cypher.final(output);

  return encrypted;
}

export function decrypt<T = unknown>(encrypted: string): T {
  const key = Buffer.from(secret, encoding);
  const decypher = createDecipheriv(algorithm, key, iv);

  let decrypted = decypher.update(encrypted, output, encoding);
  decrypted += decypher.final(encoding);

  return JSON.parse(decrypted);
}
