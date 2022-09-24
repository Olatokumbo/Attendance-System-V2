// import Head from 'next/head'
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Instagram, Facebook, Twitter } from "@material-ui/icons";
import AlertMessage from "../components/AlertMessage";

const useStyles = makeStyles((theme) => ({
  form_control: {
    marginTop: theme.spacing(1),
    alignSelf: "baseline",
  },
  radio: {
    flexDirection: "row",
  },
  btn: {
    width: "100%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  form_label: {
    fontSize: "2rem",
  },
  icon: {
    width: "20px",
    height: "20px",
    color: "white",
  },
}));
const Home = () => {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("female");
  const [open, setOpen] = useState(false);

  useEffect(async () => {
    let data = await fetch("/api");
    data = await data.json();
    setList(data);
  }, []);

  const registerForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api", {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          phoneNumber,
          gender,
        }),
      });
      const data = await response.json();
      setOpen(true);
      setList(data);
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setGender("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-auto bg-indigo-800 flex items-center overflow-hidden">
      <div className="flex items-center justify-center flex-1 bg-indigo-800 h-screen md:h-xxl w-full p-6">
        <div className="flex h-full w-full shadow-2xl m-0 md:m-12">
          <div className="flex-1 h-full w-full bg-white rounded-xl lg:rounded-r-none p-4">
            <div className="flex items-center">
              <Image
                src="/rccglogo.png"
                width={35}
                height={35}
                alt="Cover Photo"
              />
              <h1 className="mx-2 text-sm text-gray-600 font-extralight">
                Inspiration Centre
              </h1>
            </div>
            <form
              onSubmit={registerForm}
              className="mt-10 mb-5 mx-auto flex flex-col items-center justify-center w-5/6"
            >
              <h1 className="mx-2 text-xl text-gray-600 font-semibold mb-5">
                Attendance System
              </h1>
              <TextField
                size="small"
                variant="outlined"
                margin="normal"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                fullWidth
              />
              <TextField
                size="small"
                variant="outlined"
                margin="dense"
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                fullWidth
              />
              <TextField
                size="small"
                variant="outlined"
                margin="dense"
                label="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                fullWidth
              />
              <FormControl
                component="fieldset"
                className={classes.form_control}
              >
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  className={classes.radio}
                  aria-label="gender"
                  name="gender1"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <FormControlLabel
                    className={classes.form_label}
                    value="female"
                    control={<Radio color="primary" />}
                    label="Female"
                  />
                  <FormControlLabel
                    className={classes.form_label}
                    value="male"
                    control={<Radio color="primary" />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.btn}
                type="Submit"
              >
                Submit
              </Button>
              <h1 className="text-xs">© RCCG TIC MEDIA</h1>
            </form>
          </div>
          <div className="flex-1 h-full w-full bg-gray-800 rounded-r-xl hidden relative overflow-hidden lg:block">
            <Image
              src="/august.jpg"
              layout="fill"
              alt="Cover Image"
              draggable={false}
              quality={100}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="w-60 hidden md:flex flex-col min-h-screen h-full bg-indigo-800 pt-6 pl-3">
        <div className="w-full p-2 pt-3 flex flex-col flex-1 rounded-tl-2xl">
          <div className="bg-yellow-500 rounded-lg p-3">
            <h1 className="text-white font-medium text-center">
              Register List
            </h1>
          </div>
          <ul className="w-full h-96 bg-gray-800 p-6 mt-2 rounded-2xl overflow-auto">
            {list.map((listItem, index) => (
              <li key={index} className="w-full py-1 flex justify-between">
                <h1 className="text-yellow-500 font-bold text-md">
                  {index + 1}
                </h1>
                <h1 className="text-white w-32">{`${listItem.firstName} ${listItem.lastName}`}</h1>
              </li>
            ))}
          </ul>
          <div className="transform -rotate-90 h-fit m-auto">
            <div className="flex my-5">
              <Facebook className={classes.icon} />
              <h1 className="text-white text-xs">@rccgtic</h1>
            </div>
            <div className="flex my-5">
              <Instagram className={classes.icon} />
              <h1 className="text-white text-xs">@rccgtic</h1>
            </div>
            <div className="flex my-5">
              <Twitter className={classes.icon} />
              <h1 className="text-white text-xs">@rccgtic</h1>
            </div>
          </div>
        </div>
      </div>
      <AlertMessage open={open} setOpen={setOpen} />
    </div>
  );
};

export default Home;
