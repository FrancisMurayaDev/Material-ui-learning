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

##  > Importing Typography and setting the variant.

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

