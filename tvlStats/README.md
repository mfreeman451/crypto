# tvlStats

## Description

This simple Javascript utility can be used to collect stats (Total Value Locked) from
Coingecko API for many different DEX/defi systems

Currently we have support for the following exchanges although it is trivial to add others:

Pancakeswap
Pancake-bunny
Uniswap

## Requirements

You'll probably need a lametric and you'll need to configure some lametric-y stuff..

## Running

Run the sample .sh out of crontab 

### Sample shell script

```shell
#!/bin/sh

export NODE_TLS_REJECT_UNAUTHORIZED="0" 
node /home/leku/src/crypto/tvlStats/index.js
```

### Crontab

```shell
*/5 * * * * /home/leku/src/crypto/tvlStats/getTVL.sh
```
