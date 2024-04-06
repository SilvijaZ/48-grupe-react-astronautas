Instaliuoja React icons:
$ npm install react-icons --save arba npm install react-icons

Susitaisyti bagus, bet padaro dar daugiau klaidu.
$ npm audit fix --force 

Regular Expression geriau nenaudoti!


Naudoti icons:

import { FaBeer } from 'react-icons/fa';

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}



https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/0d5321a5457c5f0da0ca216053cc5b4f571b53ae/docs/rules/anchor-is-valid.md