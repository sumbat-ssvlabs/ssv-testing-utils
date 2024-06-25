"use server";

import NodeRSA from "node-rsa";
import Base64 from "base-64";
const key = new NodeRSA({ b: 2048 });

export const generateKey = () => {
  const generated = key.generateKeyPair();
  const publicKey = generated.exportKey("public");
  const withRSA = `${publicKey.replaceAll("PUBLIC", "RSA PUBLIC")}
`;
  const encoded = Base64.encode(withRSA).replace(/\n/g, "");
  return {
    encoded,
    withRSA,
  };
};
