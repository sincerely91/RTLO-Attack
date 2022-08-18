# Right to left override contract

## How To

- [nodejs](https://nodejs.org/en/)

- [nvm](https://github.com/nvm-sh/nvm)

```bash
$ yarn install
```

to compile your smart contract to get an ABI and artifact of a smart contract.

```bash
$ yarn compile
```

For a unit testing smart contract using the command line.

```
$ yarn test:guessnumber
```

Expecting `guess-number.js` result.

```bash
$ npx hardhat test test/guess-number.test.js


  GuessTheNumber
    ✔ Guess should be failed
    1) Guess should be success
    ✔ getValue initialized contract balance
    ✔ getValue after someone guess the number


  3 passing (247ms)
  1 failing

  1) GuessTheNumber
       Guess should be success:
     AssertionError: Expected event "success" to be emitted, but it wasn't
  



error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

```

After testing if you want to deploy the contract using the command line.

```bash

$ yarn rpc
$ yarn exploit
```
