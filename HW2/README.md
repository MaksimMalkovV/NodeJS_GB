## Library gen_rand_pass

Library for generating random passwords based on character length.

## Installation

```
$ npm install gen_rand_pass
```

---

## Usage

genRandomPass(length, characters)

- Generates one password with the specified option (length, characters). The options passed determine the length of the password and its content.
  - char "a" - defines lowercase letters.
  - char "A" - defines uppercase letters.
  - char "#" - defines numbers
  - char "!" - defines special characters.
- Returns a string.

#### Example: ####

```
const generator = require('gen_rand_pass');
generator.genRandomPass(8, 'aA#');
Output: qkQtUf86
```

---

## License

ISC

---