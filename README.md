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

- startIcon prop- to add an icon before the button text.

- endIcon prop- to add an icon at the end of the button text.

Start by installing react-icons:

` npm install react-icons`

```jsx
  <Button variant="contained" startIcon={<IoMdSend />
} >Send</Button>


<Button variant="contained" endIcon={<IoMdSend />
} >Send</Button>
```

For a button that will only input an Icon without a text, we use `IconButton`.

```jsx
<IconButton>
  {" "}
  <IoMdSend />
</IconButton>
```

### Disabling a Button

To disable a button, pass in the disable prop.

```jsx
<Button
  variant="contained"
  color="secondary"
  startIcon={<MdAssignmentInd />}
  disabled
>
  Assignment
</Button>
```

### Making the Button Full Width

To make the button full width of the parent element we use the `fullWidth prop`.

```jsx
<Button
  variant="contained"
  color="secondary"
  startIcon={<MdAssignmentInd />}
  fullWidth
>
  Assignment
</Button>
```

The buttons can also recieve a click event by passing the `onClick` event handler.

```jsx
<Button
  variant="contained"
  color="primary"
  onClick={() => {
    alert("I just got clicked!");
  }}
>
  Click Me
</Button>
```

## > Button Group

A button group is used to group buttons.

- The variant and other button props are specified in the ButtonGroup.
- Click events are listened on individual buttons.
- You can specify the orientation to verical, from horizontal which is default.
- However, not used to impliment a navgation menu.

```jsx
<ButtonGroup variant="outlined" orientation="vertical">
  <Button>Home</Button>
  <Button>About Us</Button>
  <Button>Contact</Button>
</ButtonGroup>
```

## > TextField

Used in Material UI to create input fields to collect user data/input.

- Build on top of the input component, and provides various styles, validation and helper text out of the box.

To use TextField, first import it from `"@mui/material"`.

- You should supply the Label and variant to the TextField.

The concept of clicking outsise the textfield and it restored back is called `blurring`.

```jsx
<TextField label="first name" variant="outlined"></TextField>
```

### TextField Variants.

- outlined - default, has border around it.

- filled - background is slightly filled.

- standard - simple underline without a box.

```js
<TextField label="outlined" variant="outlined" ></TextField>
<TextField label="filled" variant="filled"></TextField>
<TextField label="standard" variant="standard" ></TextField>
```

### Input Types (type = "")

1. text - default one.
2. password
3. number
4. email

### Placeholder and HelperText

```jsx
<TextField
  variant="outlined"
  label="firstName"
  placeholder="enter first name"
  helperText="Your first name according to your national ID"
></TextField>
```

- You can also mark a TextField as `required` by passing in it as a prop.

```jsx
<TextField
  variant="outlined"
  label="firstName"
  placeholder="enter first name"
  helperText="Your first name according to your national ID"
  required
></TextField>
```

- We can also use `error` prop which can be either `true` or `false`.

We can use state to manage the error. Maybe set it from true to false.

- fullWidth prop will take the entire width of the parent element.

```jsx
<TextField
  variant="outlined"
  label="firstName"
  placeholder="enter first name"
  helperText="Your first name according to your national ID"
  required
  error={false}
  fullWidth
></TextField>
```

-`multiline` prop will allow a multiline text area, it will be like a text box.

```jsx
<TextField
  variant="outlined"
  label="firstName"
  placeholder="enter first name"
  helperText="Your first name according to your national ID"
  required
  error={false}
  fullWidth
  multiline
></TextField>
```

- To set the maximum number of rows, use, `maxRows = {} `. After the maximum number of rows, it will start to scroll instead.

```jsx
<TextField
  variant="outlined"
  label="firstName"
  placeholder="enter first name"
  helperText="Your first name according to your national ID"
  required
  error={false}
  fullWidth
  multiline
  maxRows={3}
></TextField>
```

- You can specify the min-height of the TextField by setting the `minRows`

### Adornments (Icons and Preffix/suffix)

You can add icons inside the text field using `InputAdornment` component. We import it from `"@mui/materrials"`.

It is put inside the `slotProps`.

```jsx
<TextField
  label="enter amount"
  variant="outlined"
  color="primary"
  slotProps={{
    input: {
      startAdornment: <InputAdornment>Ksh:</InputAdornment>,
    },
  }}
></TextField>
```

- You will see the ksh. prefixed in the text field.

You can specify the position using `startAdornment` and `endAdornment`.

We can also use an icon instead:

## >Select and the MenuItem components.

To use, import them from `"@mui/material"`

```jsx
<Select>
  <MenuItem value="Kenya">Kenya</MenuItem>
  <MenuItem value="Uganda">Uganda</MenuItem>
  <MenuItem value="Tanzania">Tanzania</MenuItem>
</Select>
```

The `sx={{}}` prop can be used to supply inline styles to material UI components. The reason we dont use `style={{}}`, it does not have access to the theme that we are working with. `sx` prop has access to the theme.

```jsx
FormControl;
```

### Label

To supply a `Label`, you wrap the whole MenuItem inside a `FormControl` component and then use the `InputLabel` component to specify the `Select` label.

```jsx
<FormControl>
  <InputLabel>where do you live:</InputLabel>
  <Select sx={{ width: "300px" }} variant="contained">
    <MenuItem value="Kenya">Kenya</MenuItem>
    <MenuItem value="Uganda">Uganda</MenuItem>
    <MenuItem value="Tanzania">Tanzania</MenuItem>
  </Select>
</FormControl>
```

You can also specify a variant for the `Select`as either:

a. contained
b. standard
c. filled

## > Radio Component

Radio component in MUI is used where a user has to select one option from a group of choices.

To use it, import `Radio` from `"@mui/material"`.

- You can also change its color.

```jsx
<Radio color="secondary" />
```

### Using RadioGroup for Selection

import { RadioGroup, Radio, FormControlLabel } from `"@mui/material"`

- Then pass the `Radio` as a control inside `FormControlLabel` component.

When wrapped in a RadioGroup, you can only be able to select one of the Radios.

```jsx
<RadioGroup>
  <FormControlLabel value="banana" control={<Radio />} label="Apple" />
  <FormControlLabel value="peas" control={<Radio />} label="peas" />
  <FormControlLabel value="mango" control={<Radio />} label="Mango" />
</RadioGroup>
```

To include a label that guides a user what they are currently answering. We wrap everything in a `FormControl` and add a `FormLabel`.

```jsx
<FormControl>
  <FormLabel>What is your favourite fruit?</FormLabel>
  <RadioGroup>
    <FormControlLabel value="banana" control={<Radio />} label="Apple" />
    <FormControlLabel value="peas" control={<Radio />} label="peas" />
    <FormControlLabel value="mango" control={<Radio />} label="Mango" />
  </RadioGroup>
</FormControl>
```

### Setting a Default Selected Value

If you want an option to be default selected, we can set `defaultValue` on the RadioGroup.

- You specify the value.
