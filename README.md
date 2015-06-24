## koco-dialog-bottom-navbar

Koco component for bottom controls for a dialog type interface. features a close button and an optional save/submit button!

## Installation

```bash
bower install koco-dialog-bottom-navbar
```

## Usage with KOCO

This is a shared module that is used in many other modules. The convention is to configure an alias in the `require.configs.js` with the name `dialog-bottom-navbar` like so:

```javascript
paths: {
  ...
  'dialog-bottom-navbar': 'bower_components/koco-dialog-bottom-navbar/src/dialog-bottom-navbar'
  ...
}
```

You can then put it into service like this...

```html
<dialog-bottom-navbar params="{ close: myCloseMethod.bind($data), closeLabel: 'close', save: mySaveMethod.bind($data), saveLabel: 'submit' }"></dialog-bottom-navbar>
```