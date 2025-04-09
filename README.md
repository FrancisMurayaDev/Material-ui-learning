# Material UI

UI material component.

- Impliments Google material design specification.

Why MUI:

- Speed up development.

- Consistency and scalability

- Customization and Theming

- Build in responsiveness.

Default Installation

```js
npm install @mui/material @emotion/react @emotion/styled
```

## Importing Typography and setting the variant.

```js
import {Typography} from "@mui/material"

function App () {
  return (
    <>
      <Typography variant="h1">Material UI</Typography>
    </>
  )
}

export default App;
```


- Typography deals with style and appearace of text in a website.

It takes a variant prop. 

#### Variant Prop:

There are upto 13 variants::

1. h1 to h6
2. body1, body2 - used for a pragragraph.
3. subtitle1, subtitle2 - they also render a h6.
4. button
5. caption
6. overline

Component prop can be used with variant prop where we want to keep the variant styling. 


