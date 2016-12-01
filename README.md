# React Coding Exercise - Ross Bruniges

## Set up

### Prerequisites

You'll need [npm](https://www.npmjs.com/), [node](https://nodejs.org/) - hopefully nothing else but you may also need global installs of [babel-cli](https://www.npmjs.com/package/babel-cli) and [browserify](https://browserify.org/).
        
### Setting up your environment

This should take care of everything.

    $ npm install
    $ sh utils/watch.sh

One that's done you should be able to open the index.html in any modern web browser (it was developed using Firefox).

## Omissions

As mentioned to Jamie and Leo less than 24 hours ago I had never used React before so I've tried to strike a balance
between showing that I am able to write understandable and well structured code and able to pick things up quickly
and spending too much time trying to get everything done. If able I would love the opportunity to discuss things a bit
further in person but in a nutshell:

* breaking the Loan into it's own separate component (something I realised I should have done a bit too late to be able to refactor) - this would have allowed me the ability to finish the final two pieces of the functional brief:
  * a running grand total - I'm thinking that each loan could have set their individual state and then trigger a stateChange on the entire list when needed
  * the ability to mark a loan as invested in - this should have been a state value on each individual Loan component that could have been set on investment time
* better form validation - everything is currently console.logs
* some better keyboard accessibility around the Dialog component - as things currently stand a keyboard user will find it very tricky to use 
* TESTS :(
  * because I have been learning the bare bones up to now the ability to test was fairly tricky as I wasn't totally sure of the underlying infrastructure
  * in addition I wasn't sure if a lot of the unit tests I might have written wouldn't have been better with a webdriver.io test suite
