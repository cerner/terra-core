#prepush

The prepush script will automatically run when executing `git push ...` or it can manually be executed using the command below:

```
npm run prepush
```

The prepush script will:
* Compile all packages
* Verify that all packages have their compiled code commited.
