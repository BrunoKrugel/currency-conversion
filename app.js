import getUSD from './currency.js'
import { Octokit } from "@octokit/rest";

await getUSD(1);

const octokit = new Octokit({
  auth: process.env.TOKEN_GITHUB,
});
