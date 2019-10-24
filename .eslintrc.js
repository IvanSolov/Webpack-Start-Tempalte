module.exports = {
   root: true,
   env: {
      node: true
   },
   extends: [
      'plugin:vue/essential',
   ],
   rules: {
      'vue/script-indent': ["error", 3],
      'vue/html-indent': ["error", 3],
   },
   overrides: [
      {
         files: [
            '**/__tests__/*.{j,t}s?(x)',
            '**/tests/unit/**/*.spec.{j,t}s?(x)'
         ],
         env: {
            jest: true
         }
      }
   ]
}
