# My (not so efficient) vanity address generator

One morning I woke up and thought it'd be cool to make my own ETH address generator.

Specifically, this generator will ask you for a certain prefix with which the returned address must begin with: once found, it'll give you the private key
to your new and super cool address ;)

## Motivation

There's a couple of reasons why I wanted to make this:

- Whilst reading [Mastering Ethereum](https://github.com/ethereumbook/ethereumbook), I got a glimpse at how
key pairs are generated and addresses derived, so I wanted to use this to make use of what I had just read.
- I always wanted to create addresses with custom-defined prefixes, but could never fully trust an online
resource to do it for me: so I implemented my own, which can be built and run locally with no need for an
internet connection.
- My javascript is pretty bad and rusty so all the practice I can get is useful I guess.

## How to run

You can either:

- Run the executables I built for you and left in the `executables` dir (hopefully the macOS one works, don't have a machine to test it on)
- Build the executable yourself running `pkg package.json` from within the root dir
- Run `node /generator.js` from the src dir or `node src/generator.js` from the root dir

## How to use

Simply run the script and when prompted, enter the hexadecimal prefix you want your new ETH address to have,
with no leading "0x".

Note that the generator treats the given prefix as case-insensitive, and returns the non-checksum form of the address.

## Contribute

If you feel like contributing, fork and code away!

## License

MIT License

Copyright (c) 2021 Lucas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

MIT © [Lucas](https://github.com/lmanini)
