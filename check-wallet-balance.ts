import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from '@solana/web3.js'

//CHECK OTHER PEOPLE PUBLIC KEY BALANCE
const suppliedPK = process.argv[2];
if(!suppliedPK) {
    throw new Error("Provide an address");   
}

const publicKey = new PublicKey(suppliedPK);
const connection = new Connection(clusterApiUrl('devnet'));
const balanceInLamports = await connection.getBalance(publicKey)
const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL

console.log(balanceInLamports)
console.log(balanceInSol)