import React, { useState } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { push } from "react-router-redux";

const ANSWERS = ["A", "B", "C", "D"];

function useForm() {}

const App = ({ history }) => {
  const [question, setQuestion] = useState("Why is Ryan a cuck?");
  const [answer, setAnswer] = useState("A");

  function submit() {
    socket.emit("answer", answer);

    history.push("/answers");
  }

  return (
    <Grid container justify="center" alignItems="center" direction="column">
      <Grid item xs={6}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography variant="h4">{question}</Typography>
          </Grid>
          <Grid>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="Answer"
                name="answer"
                value={answer}
                onChange={event => setAnswer(event.target.value)}
              >
                {ANSWERS.map(answer => (
                  <FormControlLabel
                    key={answer}
                    value={answer}
                    control={<Radio />}
                    label={answer}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <Grid item>
              <Button onClick={submit}>Submit</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
