module.exports = {
  require: [
    'ts-node/register',
    './test/setup.spec.ts'
  ],
  spec: './test/unit/**/*.spec.ts'
}
