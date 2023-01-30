export class Transaction {
  transactionID: bigint;
  amount: bigint;
  targetAccount: string;
  sendingAccount: string;
  date: Date;
  description: string;
  currency: string;

}
