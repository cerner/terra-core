# Migrating from terra-form's textarea Component to terra-form-textarea

The following sections describe how to migrate from the textarea component provided in the terra-form package to the textarea component provided in the terra-form-textarea package. Terra-form-textarea provides enhanced API and layout to begin the first phase of the OSC uplift.

## Prop Changes

#### Props Added
- `disabled` - Whether the textarea is disabled.
- `isAutoResizable` - indicates whether the textarea can be auto-resized vertically.
- `isInvalid` - indicates whether or not the textarea is invalid.
- `size` - the size of the textarea.

## Behavior Changes

#### Added/Changed Behavior
- `disabled` - disables the textarea if set to true.
- `isAutoResizable` - when set to true, the textarea automatically resizes vertically when users type in the small textarea.
- `isInvalid` - when set to true, the textarea is styles with it's error styles.
- `size` - sets either the rows attribute accordingly if `small`, `medium`, or `large` are set, or sets the width and height of the textarea to 100% of it's parent if set to `full`.
