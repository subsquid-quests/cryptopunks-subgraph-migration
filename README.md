<p align="center">
<picture>
    <source srcset="https://uploads-ssl.webflow.com/63b5a9958fccedcf67d716ac/64662df3a5a568fd99e3600c_Squid_Pose_1_White-transparent-slim%201.png" media="(prefers-color-scheme: dark)">
    <img src="https://uploads-ssl.webflow.com/63b5a9958fccedcf67d716ac/64662df3a5a568fd99e3600c_Squid_Pose_1_White-transparent-slim%201.png" alt="Subsquid Logo">
</picture>
</p>

[![docs.rs](https://docs.rs/leptos/badge.svg)](https://docs.subsquid.io/)
[![Discord](https://img.shields.io/discord/1031524867910148188?color=%237289DA&label=discord)](https://discord.gg/subsquid)

[Website](https://subsquid.io) | [Docs](https://docs.subsquid.io/) | [Discord](https://discord.gg/subsquid)

# CryptoPunks Subgraph migration 

This quest is to migrate the [CryptoPunks Subgraph](https://thegraph.com/explorer/subgraphs/2hTKKMwLsdfJm9N7gUeajkgg8sdJwky56Zpkvg8ZcyP8?view=Overview&chain=arbitrum-one) to Squid SDK. The resulting squid should match the GraphQL API of the subgraph as close as possible, by migrating `schema.graphql`. The judges reserve the right to request improvements afther the initial review of the submission. Reach out to the [Discord Channel]( https://discord.com/channels/857105545135390731/1155812879770058783) for any tech questions regarding this quest. Use ```template``` squid as a starter.

# Quest Info

| Category         | Skill Level                          | Time required (hours) | Max Participants | Reward                             | Status |
| ---------------- | ------------------------------------ | --------------------- | ---------------- | ---------------------------------- | ------ |
| Squid Deployment | $\textcolor{orange}{\textsf{Medium}}$ | ~60                    | 5                | $\textcolor{red}{\textsf{3000tSQD}}$ | open   |

# Acceptance critera

Ultimately, the solutions are accepted at the discretion of judges following a manual review. This sections is a rough guide that is in no way binding on our side.

Some of the reasons why the solution will not be accepted include:
- squid does not start
- squid fails to sync fully due to internal errors
- [batch handler filters](https://docs.subsquid.io/evm-indexing/configuration/caveats/) are not set up correctly (leads to a late sync failure in [RPC-ingesting](https://docs.subsquid.io/evm-indexing/evm-processor/#rpc-ingestion) squids)
- data returned for any query is not consistent with subgraph data

It is desirable that your solution:
- includes a suite of test GraphQL queries that touches every [schema entity](https://docs.subsquid.io/store/postgres/schema-file/entities/) and, if used, every [custom resolver](https://docs.subsquid.io/graphql-api/custom-resolvers/) at least once, with corresponding subgraph queries (listing in README is enough)
- has high code quality (readability, simplicity, comments where necessary)
- uses [batch processing](https://docs.subsquid.io/basics/batch-processing/) consistently
- avoids any "sleeping bugs": logic errors that accidentally happen to not break the data
- follows the standard squid startup procedure:
  ```
  git clone <repo_url>
  cd <repo_url>
  npm ci
  sqd up
  sqd process &
  sqd serve
  ```
  If it does not, describe your startup procedure in the README.

Please test your solutions before submitting. We do allow some corrections, but judges' time is not limitless.

To submit, invite the following github accounts to your private repo : [@dariaag](https://github.com/dariaag), [@belopash](https://github.com/belopash), [@abernatskiy](https://github.com/abernatskiy) and [@dzhelezov](https://github.com/dzhelezov).

# Useful links

- [Quickstart](https://docs.subsquid.io/deploy-squid/quickstart/)
- [TheGraph Migration guide](https://docs.subsquid.io/migrate/migrate-subgraph/)
- [Cryptopunks Subgraph source code](https://github.com/itsjerryokolo/CryptoPunks)

# Setup and Common errors

1. Install Node v16.x or newer [https://nodejs.org/en/download](https://nodejs.org/en/download)
2. Install Docker [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)
3. Install git [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
4. Install Squid CLI 
    
    ```bash
    npm i -g @subsquid/cli@latest
    ```
    
## How to run a squid:

1. Install dependecies:

```bash
npm ci
```

2. Generate model

```bash
sqd codegen
```

3. Generate types

```bash
sqd typegen
```

4. Build the squid

```bash
sqd typegen
```

5. Open docker and run:

```bash
sqd up
```

6. Generate migrations:

```bash
sqd migration:generate
```

7. Start processing:

```bash
sqd process
```

## Possible Errors:

1. Docker not installed

```bash
X db Error × query-gateway Error
Error response from daemon: Get "https://registry-1.docker.jo/v2/": uri ting to 127.0.0.1:8888: dial cp 127.0.0.1:8888: connectex: No connection
```

2. Git not installed

```bash
Error: Error: spawn git ENOENT
at ChildProcess._handle.onexit (node: internal/child_process: 284:19)
at onErrorNT (node: internal/child_process:477:16)
at process.processTicksAndRejections (node: internal/process/task_queues:82:21)
```

3. Dependencies not installed. Run `npm ci`

```bash
sqd typegen
TYPEGEN
    Error: spawn squid-evm-typegen ENOENT
    Code: ENOENT
```

4. Rate-limiting. Change the `rpcUrl` in `processor.ts`

```bash
will pause new requests for 20000ms {"rpcUrl":"https://rpc.ankr.com/eth", 
"reason" : "HttpError: got 429 from https://rpc.ankr.com/eth"}
```


