import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import assets from '../constants';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import emailjs from 'emailjs-com';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#FFFFFF',
            '--TextField-brandBorderHoverColor': '#b8b8b8',
            '--TextField-brandBorderFocusedColor': '#FFFFFF',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)'
            },
            '& .Mui-error': {
              color: '#7b5688'
            }
          }
        }
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&:before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)'
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)'
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)'
            }
          }
        }
      }
    }
  });

export const Contact = () => {
  const outerTheme = useTheme();

  const [helpername, sethelpername] = useState('');
  const [helperemail, sethelperemail] = useState('');
  const [helperbody, sethelperbody] = useState('');

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [body, setbody] = useState('');

  const handleValidation = () => {
    let formvalid = true;
    //name
    if (!name) {
      formvalid = false;
      sethelpername('The field cannot be empty!');
    }
    if (typeof name !== 'undefined') {
      if (!name.match(/^[a-zA-Z\s]+$/)) {
        formvalid = false;
        sethelpername('A name contains only letters!');
        setname('');
      }
      if (name.length <= 5) {
        formvalid = false;
        sethelpername('Please provide your full name!');
        setname('');
      }
    }

    //email
    if (!email) {
      formvalid = false;
      sethelperemail('The field cannot be empty!');
    }
    if (typeof email !== 'undefined') {
      let lastAtPos = email.lastIndexOf('@');
      let lastDotPos = email.lastIndexOf('.');
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf('@@') === -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        formvalid = false;
        sethelperemail('Email is not valid!');
        setemail('');
      }
    }

    //body
    if (!body) {
      formvalid = false;
      sethelperbody('The field cannot be empty!');
    }
    if (typeof body !== 'undefined') {
      if (body.length <= 5) {
        formvalid = false;
        sethelperbody('Speak up your mind!');
        setbody('');
      }
    }

    return formvalid;
  };

  const handleEmail = () => {
    emailjs
      .send(
        'service_99wsg9t',
        'template_u315fbu',
        {
          name: name,
          email: email,
          message: body
        },
        '7hza9o5Tmtuj7_8q9'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const sendmail = () => {
    let valid = handleValidation();
    if (valid) {
      console.log('form is valid!');
      setname('');
      setemail('');
      setbody('');
      sethelpername('');
      sethelperemail('');
      sethelperbody('');
      handleEmail();
    } else {
      console.log('form is not valid!');
    }
  };
  return (
    <section className="contacts" id="contacts">
      <div className="contacts-bx">
        <Container>
          <Row>
            <Col>
              <h1>Let's Get in Touch!</h1>
              <p className="contacts-p">
                I like exploring new horizons as well as designing and developing new projects. I
                would be delighted to take on any challenge.
              </p>
              <h4>Address:</h4>
              <p className="contacts-pp">14, Av Antonine Maillet, Moncton, Canada</p>
              <h4>Phone:</h4>
              <p className="contacts-pp" style={{ marginBottom: 50 }}>
                +1 506 889 5990
              </p>
              <span className="navbar-text">
                <div className="social-icon ">
                  <a
                    href="https://www.linkedin.com/in/sinda-besrour-6a9459175/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={assets.linkedin} alt="" />
                  </a>
                  <a href="https://github.com/Sinda271" rel="noreferrer" target="_blank">
                    <img src={assets.github} alt="" />
                  </a>
                  <a
                    href="https://www.facebook.com/sinda.besrour.9/photos_by"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={assets.facebook} alt="" />
                  </a>
                  <a
                    href="https://www.instagram.com/sinda.besrour/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={assets.instagram} alt="" />
                  </a>
                </div>
              </span>
            </Col>
            <Col>
              <h1>Send an Email</h1>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  id="name"
                  required
                  label="Type your name"
                  variant="standard"
                  color="secondary"
                  style={{ width: 500, height: 100 }}
                  sx={{ input: { color: 'white' } }}
                  InputLabelProps={{ sx: { color: 'white' } }}
                  helperText={helpername}
                  onFocus={() => sethelpername('')}
                  value={name}
                  onChange={(event) => setname(event.target.value)}
                />
                <TextField
                  id="email"
                  required
                  label="Type your email address"
                  variant="standard"
                  color="secondary"
                  type={'email'}
                  style={{ width: 500, height: 100 }}
                  sx={{ input: { color: 'white' } }}
                  InputLabelProps={{ sx: { color: 'white' } }}
                  helperText={helperemail}
                  onFocus={() => sethelperemail('')}
                  value={email}
                  onChange={(event) => setemail(event.target.value)}
                />
                <TextField
                  id="body"
                  required
                  label="How may I help you?"
                  variant="standard"
                  color="secondary"
                  style={{ width: 500 }}
                  sx={{ input: { color: 'white' } }}
                  inputProps={{ style: { color: 'white' } }}
                  multiline
                  maxRows={4}
                  InputLabelProps={{ sx: { color: 'white' } }}
                  helperText={helperbody}
                  onFocus={() => sethelperbody('')}
                  value={body}
                  onChange={(event) => setbody(event.target.value)}
                />
              </ThemeProvider>
              <button onClick={() => sendmail()}>
                Send <ArrowRightCircle size={22} style={{ marginLeft: 7, paddingBottom: 3 }} />
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
