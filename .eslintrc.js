module.exports = {
  "env": {
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "extends": ["airbnb-base", "plugin:@typescript-eslint/recommended", "prettier"],
  "plugins": ["@typescript-eslint", "import", "prettier"],
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "rules": {
    "prettier/prettier": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never"
      }
    ],
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ts"]
      }
    }
  }
}
  