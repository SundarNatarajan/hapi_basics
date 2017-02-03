// Place your key bindings in this file to overwrite the defaults
[{
    "key": "alt+numpad_subtract",
    "command": "workbench.action.navigateBack",
    "when": "editorTextFocus"
},{
    "key": "ctrl+d",
    "command": "editor.action.copyLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
},{
    "key": "alt+numpad_add",
    "command": "workbench.action.navigateForward",
    "when": "editorTextFocus"
},{
    "key": "ctrl+alt+f",
    "command": "editor.action.formatDocument",
    "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly"
},{
    "key": "ctrl+alt+/",
    "command": "editor.action.blockComment",
    "when": "editorTextFocus && !editorReadonly"
}
]