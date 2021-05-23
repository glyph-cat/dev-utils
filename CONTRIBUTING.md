# List of available commands
These commands will be available after you run `npm install` upon first cloning the repository.

* `yarn run lint` Checks the code style
* `yarn run lint:fix` Checks the code style and automatically fixes it
* `yarn run build` Bundles the code into several builds: CJS, ES, React Native and UMD
* `yarn test` Run tests on the unbundled code and builds for CJS, ES and UMD
* `yarn run all` Equivalent of `yarn run lint:fix` && `yarn run build` && `yarn test` && `yarn pack`

<br/>

# Drafts
You can create temporary files such as `'index.draft.js'`, `notes.draft.md`, or `folder.draft` for your own purposes like writing drafts. They will be ignored by git in case you forget to remove them at the end of your workflow.
