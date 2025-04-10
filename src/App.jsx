import { Typography, Button, IconButton } from "@mui/material";
import { IoMdSend } from "react-icons/io";
import { MdAssignmentInd } from "react-icons/md";

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

    <Typography variant="h4" align="center" >React Incons with Material UI</Typography>

    <Button variant="contained" startIcon={<IoMdSend />
} >Send</Button>


<Button variant="contained" endIcon={<IoMdSend />
} >Send</Button>

<IconButton><IoMdSend />
</IconButton>


<Button variant="contained" color="secondary" startIcon={<MdAssignmentInd />} disabled>Assignment</Button>

<Button variant="contained" color="secondary" startIcon={<MdAssignmentInd />} fullWidth>Assignment</Button>

<Button variant="contained" color="primary" onClick={() => {
  alert("I just got clicked!");
}}>Click Me</Button>


    </>
  );
}

export default App;
