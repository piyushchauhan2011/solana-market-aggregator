import { deserializeAccount } from "@saberhq/token-utils";
import { AccountInfo, PublicKey } from "@solana/web3.js";

import { AccountInfo as TokenAccountInfo } from "@solana/spl-token";
export interface TokenAccount {
  pubkey: PublicKey;
  account: AccountInfo<Buffer>;
  info: TokenAccountInfo;
}

export const TokenAccountParser = (
  pubKey: PublicKey,
  info: AccountInfo<Buffer>
) => {
  const buffer = Buffer.from(info.data);
  const data = deserializeAccount(buffer);

  const details: TokenAccount = {
    pubkey: pubKey,
    account: {
      ...info,
    },
    info: { ...data, address: pubKey },
  };

  return details;
};
