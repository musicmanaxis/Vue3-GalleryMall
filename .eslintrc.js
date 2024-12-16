module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        'vue/no-unused-components': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/no-reserved-component-names': 'off'
    }
    
};