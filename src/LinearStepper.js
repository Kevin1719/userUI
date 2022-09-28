import React, { useState } from "react";
import './style.css'
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Personal Information",
    "Payment",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div className='conteneur'>
        <div className="container1">
        <div className="title">Candidature</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Nom</span>
                <input type="text" placeholder="Entrer votre nom" required/>
              </div>
              <div className="input-box">
                <span className="details">Prénom</span>
                <input type="text" placeholder="Entrer votre prénom" required/>
              </div>
              <div className="input-box">
                <span className="details">Date de naissance</span>
                <input type="date" required/>
              </div>
              <div className="input-box">
                <span className="details">Adresse</span>
                <input type="text" placeholder="Entrer votre adresse" required/>
              </div>
              <div className="input-box">
                <span className="details">Situation familiale</span>
                <select name="pets" id="pet-select">
                  <option value="single">Celibataire</option>
                  <option value="maried">Marié(e)</option>
                  <option value="matyvady">Veuf(ve)</option>
                </select>
              </div>
              <div className="input-box">
                <span className="details">Nombre d'enfant</span>
                <input type="number" placeholder="Nombre d'enfant" required />
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1"/>
              <input type="radio" name="gender" id="dot-2"/>
              <input type="radio" name="gender" id="dot-3"/>
              <span className="gender-title">Genre</span>
              <div className="category">
                <label htmlFor="dot-1">
                <span className="dot one"></span>
                <span className="gender">Homme</span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two"></span>
                <span className="gender">Femme</span>
              </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    
      )

    case 1:
      return (
        <div className='conteneur'>
        <div className="container1">
        <div className="title">Candidature</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Adresse mail</span>
                <input type="email" placeholder="Entrr votre adresse email" required/>
              </div>
              <div className="input-box">
                <span className="details">Numéro de téléphone</span>
                <input type="number" placeholder="Entrer votre numéro" required/>
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email" required/>
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required/>
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="text" placeholder="Enter your password" required/>
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input type="text" placeholder="Confirm your password" required />
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    
      )
    case 2:
      return (
        <div className='conteneur'>
        <div className="container1">
        <div className="title">Candidature</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Nom</span>
                <input type="text" placeholder="Enter your name" required/>
              </div>
              <div className="input-box">
                <span className="details">Prénom</span>
                <input type="text" placeholder="Enter your username" required/>
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email" required/>
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required/>
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="text" placeholder="Enter your password" required/>
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input type="text" placeholder="Confirm your password" required />
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1"/>
              <input type="radio" name="gender" id="dot-2"/>
              <input type="radio" name="gender" id="dot-3"/>
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                <span className="dot one"></span>
                <span className="gender">Male</span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two"></span>
                <span className="gender">Female</span>
              </label>
              <label htmlFor="dot-3">
                <span className="dot three"></span>
                <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    
      )
    case 3:
      return (
        <div className='conteneur'>
        <div className="container1">
        <div className="title">Candidature</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Nom</span>
                <input type="text" placeholder="Enter your name" required/>
              </div>
              <div className="input-box">
                <span className="details">Prénom</span>
                <input type="text" placeholder="Enter your username" required/>
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email" required/>
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required/>
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="text" placeholder="Enter your password" required/>
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input type="text" placeholder="Confirm your password" required />
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1"/>
              <input type="radio" name="gender" id="dot-2"/>
              <input type="radio" name="gender" id="dot-3"/>
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                <span className="dot one"></span>
                <span className="gender">Male</span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two"></span>
                <span className="gender">Female</span>
              </label>
              <label htmlFor="dot-3">
                <span className="dot three"></span>
                <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    
      )
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            disabled={activeStep === 0}
            onClick={handleBack}
            style={{marginBottom:'20px',marginLeft:'5px'}}
          >
            back
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
            style={{marginBottom:'20px'}}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
