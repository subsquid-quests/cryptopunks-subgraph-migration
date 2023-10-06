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

This quest is to migrate the [CryptoPunks Subgraph]([https://thegraph.com/hosted-service/subgraph/snapshot-labs/snapshot](https://thegraph.com/explorer/subgraphs/YqMJatbgbqy1GodtbYZv4U9NzyaScCgSF7CAE5ivAM7)) to Squid SDK. The resulting squid should match the GraphQL API of the subgraph as close as possible, by migrating `schema.graphql`. The judges reserve the right to request improvements afther the initial review of the submission. Reach out to the [Discord Channel]( https://discord.com/channels/857105545135390731/1155812879770058783) for any tech questions regarding this quest. Use ```evm-transactions-example``` squid as a starter.

# Quest Info

| Category         | Skill Level                          | Time required (hours) | Max Participants | Reward                             | Status |
| ---------------- | ------------------------------------ | --------------------- | ---------------- | ---------------------------------- | ------ |
| Squid Deployment | $\textcolor{green}{\textsf{Simple}}$ | ~2                    | 1                | $\textcolor{red}{\textsf{50tSQD}}$ | open   |

# Acceptance critera

Each quest should be submitted as a private repo and will be reviewed manually. To submit, invite the following github accounts to your private repo : [@dariaag](https://github.com/dariaag), [@belopash](https://github.com/belopash), [@abernatskiy](https://github.com/abernatskiy) and [@dzhelezov](https://github.com/dzhelezov). The repo should contain `README.MD` with

- Insturctions how to run the squid locally
- Sample Squid queries and the corresponding Subgraph queries

The code should be well documented. The judges will access:

- In-line commends where necessary
- Clarity of the code
- Performance and optimization (if [batching](https://docs.subsquid.io/basics/batch-processing/)  and [Multicall queries](https://docs.subsquid.io/tutorials/bayc/step-four-optimizations/#using-multicall-for-aggregating-state-queries) are used whenever appropriate)

# Useful links

- [Quickstart](https://docs.subsquid.io/deploy-squid/quickstart/)
- [TheGraph Migration guide](https://docs.subsquid.io/migrate/migrate-subgraph/)
- [Snapshot Subgraph source code](https://github.com/snapshot-labs/snapshot-subgraph)

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

4. Open docker and run:

```bash
sqd up
```

5. Generate migrations:

```bash
sqd migration:generate
```

6. Start processing:

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


