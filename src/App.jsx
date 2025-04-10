import {
  Typography,
  Button,
  IconButton,
  ButtonGroup,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Checkbox,
  Switch,
  Box,
} from "@mui/material";
import { IoMdSend } from "react-icons/io";
import { MdAssignmentInd } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";

function App() {
  return (
    <>
      <Typography variant="h1" component="h3">
        Heading 1
      </Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="subtitle1">Subtitle1</Typography>
      <Typography variant="subtitle2">Subtitle2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        assumenda numquam similique dicta cupiditate animi quos accusantium
        saepe aut pariatur, inventore nesciunt consequatur impedit sunt tenetur
        sit corporis? Aspernatur deleniti ullam ducimus. Iure, ipsam modi!
        Accusantium itaque natus et, aliquam obcaecati quasi assumenda nobis,
        sed architecto porro quam. Cumque modi, dolorem eum recusandae
        necessitatibus at delectus quod sequi, aliquid fugiat aut cum quibusdam
        ex exercitationem assumenda ad nisi nesciunt quo placeat dolor
        temporibus sunt iure quisquam. Repellat quibusdam repudiandae, et id
        aliquam labore aut, in fuga reprehenderit sint illum asperiores quas
        cumque dolores impedit numquam tempora consequatur veritatis vel
        pariatur.
      </Typography>

      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        cumque nulla ex! Recusandae, facere qui. Laborum magni odio esse!
        Explicabo temporibus culpa, eius officia pariatur mollitia, autem facere
        voluptatibus nulla tempore praesentium. Eligendi, ab enim! Molestiae
        fuga error sequi unde blanditiis possimus eaque placeat aperiam sit!
        Reiciendis vitae laborum commodi?
      </Typography>

      <Typography variant="body1" component="a">
        Click Me
      </Typography>

      <Typography variant="body1" component="a" href="https://www.google.com">
        Open Google
      </Typography>

      <Typography variant="body1" component="a">
        This is a Link
      </Typography>

      <Typography variant="body1" fontWeight="bold">
        Good Morning!
      </Typography>

      <Typography variant="h6" fontSize="30px" align="center" bgcolor="aqua">
        Good Evening, Keep Pushing!
      </Typography>

      <Button variant="text">Read More</Button>

      <Button variant="outlined">Click Me</Button>

      <Button variant="contained">Sign up</Button>

      <Typography variant="h3" align="center">
        Button Colors
      </Typography>

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

      <Typography variant="h3" align="center" fontSize="bold">
        Button Size
      </Typography>

      <Button variant="contained" color="primary" size="small">
        Small
      </Button>

      <Button variant="contained" color="success" size="large">
        Large
      </Button>

      <Typography variant="h4" align="center">
        React Incons with Material UI
      </Typography>

      <Button variant="contained" startIcon={<IoMdSend />}>
        Send
      </Button>

      <Button variant="contained" endIcon={<IoMdSend />}>
        Send
      </Button>

      <IconButton>
        <IoMdSend />
      </IconButton>

      <Button
        variant="contained"
        color="secondary"
        startIcon={<MdAssignmentInd />}
        disabled
      >
        Assignment
      </Button>

      <Button
        variant="contained"
        color="secondary"
        startIcon={<MdAssignmentInd />}
        fullWidth
      >
        Assignment
      </Button>

      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          alert("I just got clicked!");
        }}
      >
        Click Me
      </Button>

      <Typography variant="h4" align="center" fontWeight="bold">
        Button Group
      </Typography>

      <ButtonGroup variant="outlined" orientation="vertical">
        <Button>Home</Button>
        <Button>About Us</Button>
        <Button>Contact</Button>
      </ButtonGroup>

      <Typography variant="h5" align="center">
        TextField
      </Typography>

      <TextField label="first name" variant="outlined"></TextField>

      <Typography variant="h4" align="center">
        Text Field Variants
      </Typography>

      <TextField label="outlined" variant="outlined"></TextField>
      <TextField label="filled" variant="filled"></TextField>
      <TextField label="standard" variant="standard"></TextField>

      <Typography variant="h5" align="center">
        TextField Types
      </Typography>

      <TextField variant="outlined" type="text" label="text"></TextField>
      <TextField variant="outlined" type="number" label="number"></TextField>
      <TextField
        variant="outlined"
        type="password"
        label="password"
      ></TextField>
      <TextField variant="outlined" type="email" label="email"></TextField>

      <TextField
        variant="outlined"
        label="password"
        type="password"
      ></TextField>

      <Typography variant="h6" align="center">
        Placeholder and HelperText
      </Typography>

      <TextField
        variant="outlined"
        label="firstName"
        placeholder="enter first name"
        helperText="Your first name according to your national ID"
        required
        error={false}
        fullWidth
        multiline
        minRows={3}
      ></TextField>

      <TextField
        label="enter amount"
        variant="outlined"
        color="primary"
        slotProps={{
          input: {
            startAdornment: <InputAdornment>{<FaDollarSign />}</InputAdornment>,
          },
        }}
      ></TextField>

      <Typography variant="h4" align="center">
        Select and MenuItem
      </Typography>

      <FormControl>
        <InputLabel>where do you live:</InputLabel>
        <Select sx={{ width: "300px" }} variant="standard" value={""}>
          <MenuItem value="Kenya">Kenya</MenuItem>
          <MenuItem value="Uganda">Uganda</MenuItem>
          <MenuItem value="Tanzania">Tanzania</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="h5" align="center">
        Radio Component
      </Typography>

      <Radio color="secondary" />
      <hr />

      <FormControl>
        <FormLabel>What is your favourite fruit?</FormLabel>
        <RadioGroup defaultValue={"banana"}>
          <FormControlLabel value="banana" control={<Radio />} label="Banana" />
          <FormControlLabel value="peas" control={<Radio />} label="peas" />
          <FormControlLabel value="mango" control={<Radio />} label="Mango" />
        </RadioGroup>
      </FormControl>

      <h1>CheckBox</h1>

      <Checkbox />
      <br />

      <FormControl>
        <FormLabel>Which Languages are you good in?</FormLabel>
        <FormControlLabel value={"HTML"} label="html" control={<Checkbox />} />
        <FormControlLabel value={"CSS"} label="CSS" control={<Checkbox />} />
        <FormControlLabel value={"JS"} label="JS" control={<Checkbox />} />
      </FormControl>

      <h1>Switch</h1>

      <Switch />
      <br />

      <FormControlLabel
        control={<Switch size="small" />}
        label="Enable dark mode"
      />
      <br />

      <Box>
        <Typography variant="h5">Good Morning</Typography>
      </Box>

      <Box variant="section" display={"flex"} gap={2}>
        <Box border={"2px solid red"} padding={2}>
          <Typography variant="body1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            error soluta eius nam necessitatibus.
          </Typography>
        </Box>

        <Box border={"2px solid red"} margin={2}>
          <Typography variant="body1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            error soluta eius nam necessitatibus.
          </Typography>
        </Box>
        <Box border={"2px solid red"}>
          <Typography variant="body1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            error soluta eius nam necessitatibus.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;
