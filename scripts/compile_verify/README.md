#compile_verify

The compile_verify script will automatically run when executing `git push ...` or it can manually be executed using the command below:

```
npm run prepush
```

The compile_verify script will:
* Compile all packages
* Verify that all packages have their compiled code commited.
