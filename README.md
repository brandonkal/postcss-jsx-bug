# Bug

This demonstrates that a babelrc file can cause errors to be ignored silently by stylelint.
`postcss-jsx` should ignore the babelrc config, provide an option to ignore it, or work correctly with transformed JSX elements.

I have included three babel presets here, but the issue even when one preset is used alone.

https://github.com/gucong3000/postcss-jsx/issues/55
