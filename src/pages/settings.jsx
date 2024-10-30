import { Button, Grid } from "@mui/material";
import styles from "../styles/Settings.module.css";

export default function Settings() {
  function setDefault() {
    document.documentElement.style.setProperty("--bg1-color", "#0e000e");
    document.documentElement.style.setProperty("--bg2-color", "#120012");
    document.documentElement.style.setProperty("--font1-color", "#e9f1f7");
    document.documentElement.style.setProperty("--font2-color", "#f9ca0a");
  }

  function setBlue() {
    document.documentElement.style.setProperty("--bg1-color", "#0D1321");
    document.documentElement.style.setProperty("--bg2-color", "#0D1321");
    document.documentElement.style.setProperty("--font1-color", "#DFF8ED");
    document.documentElement.style.setProperty("--font2-color", "#A9FBD7");
  }

  function setGray() {
    document.documentElement.style.setProperty("--bg1-color", "#252422");
    document.documentElement.style.setProperty("--bg2-color", "#403D39");
    document.documentElement.style.setProperty("--font1-color", "#FFFCF2");
    document.documentElement.style.setProperty("--font2-color", "#EB5E28");
  }

  function setGreen() {
    document.documentElement.style.setProperty("--bg1-color", "#080708");
    document.documentElement.style.setProperty("--bg2-color", "#080708");
    document.documentElement.style.setProperty("--font1-color", "#faf8f8");
    document.documentElement.style.setProperty("--font2-color", "#70e000");
  }

  function setTest() {
    document.documentElement.style.setProperty("--bg1-color", "#0E1803");
    document.documentElement.style.setProperty("--bg2-color", "#162307");
    document.documentElement.style.setProperty("--font1-color", "#FEFAE0");
    document.documentElement.style.setProperty("--font2-color", "#FEFAE0");
  }

  function setCyan() {
    document.documentElement.style.setProperty("--bg1-color", "#0f4c5c");
    document.documentElement.style.setProperty("--bg2-color", "#0f4c5c");
    document.documentElement.style.setProperty("--font1-color", "#FFFCF2");
    document.documentElement.style.setProperty("--font2-color", "#FB8B24");
  }

  return (
    <>
      <div id="colorbuttons">
        <div>
          <Button
            onClick={setDefault}
            sx={{
              width: 200,
            }}
            color="inherit"
            variant="outlined"
          >
            Default Theme
          </Button>
        </div>
        <div>
          <Button
            onClick={setGray}
            sx={{
              width: 200,
            }}
            color="inherit"
            variant="outlined"
          >
            Gray Theme
          </Button>
        </div>
        <div>
          <Button
            onClick={setBlue}
            sx={{
              width: 200,
            }}
            color="inherit"
            variant="outlined"
          >
            Blue Theme
          </Button>
        </div>
        <div>
          <Button
            onClick={setGreen}
            sx={{
              width: 200,
            }}
            color="inherit"
            variant="outlined"
          >
            Green Theme
          </Button>
        </div>
        <div>
          <Button
            onClick={setCyan}
            sx={{
              width: 200,
            }}
            color="inherit"
            variant="outlined"
          >
            Cyan Theme
          </Button>
        </div>
      </div>
    </>
  );
}
