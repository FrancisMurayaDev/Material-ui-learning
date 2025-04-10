# Material UI

UI material component.

- Impliments Google material design specification.

Why MUI:

- Speed up development.

- Consistency and scalability

- Customization and Theming

- Build in responsiveness.

Default Installation

```jsx
npm install @mui/material @emotion/react @emotion/styled
```

## > Importing Typography and setting the variant.

```jsx
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <Typography variant="h1">Material UI</Typography>
    </>
  );
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

For instance, you can use the component the anchor tag, `"a"`. Then use the `href = ""` attribute to put the link.

```jsx
<Typography variant="body1" component="a" href="https://www.google.com">
  Open Google
</Typography>
```

- It is always important to include the variant.

#### Another thing with typography, we can use CSS properties as if we are passing a prop.

- Not all, just a few specified ones.

```jsx
<Typography variant="body1" fontWeight="bold">
  Good Morning!
</Typography>
```

```jsx
<Typography variant="h6" fontSize="30px" align="center">
  Good Evening, Keep Pushing!
</Typography>
```

## > Button

Pre-styled buttons following material design principles.

To use button, import it from `"@mui/material"`.

```jsx
import { Button } from "@mui/material";
```

Destructuring

```jsx
import { Typography, Button } from "@mui/material";
```

Using Button:

```jsx
<Button>Click Me</Button>
```

### The button has some variants.

a. outlined - good for secondary actions.

```jsx
<Button variant="outlined">Click Me</Button>
```

b. contained - good for primary actions. eg. sign up.

```JSX
 <Button variant="contained">Sign up</Button>
```

c. text - this is the dafault.

- best for actions within a page such as `read more`.

```jsx
<Button variant="text">Read More</Button>
```

### Button Colors

MUI color options are applied using the color prop.

The available colors are:

- a. primary - blue

- b. secondary - purple

- c. success- green

- d. error - red

- e. warning - yellow

- f. info - blue

```jsx
 <Button variant="contained" color="primary">
        Primary
      </Button>


  <Button variant="contained" color="secondary">
        Secondary
      </Button>

  <Button variant="outlined" color="success">
        Success
      </Button>

  <Button variant="contained" color="error">
        Error
      </Button>

  <Button variant="contained" color="warning">
        Warning
      </Button>

  <Button variant="text" color="info">
        Info
      </Button>
```

### Button Sizes

- small
- medium - the default size.
- large

```js
<Button variant="contained" color="primary" size="small">Small</Button>

<Button variant="contained" color="success" size="large">Large</Button>
```

### Adding Icons to a Button

Use: 

- startIcon - to add an icon before the button text.

- endIcon - to add an icon at the end of the button text.

