import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { 
  Button, 
  ButtonGroup, 
  Card, 
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },

  },
  button: {
    margin: theme.spacing(2)
  },
  head: {
    textAlign: "center"
  },
  media: {
    height: 140,
  },
}));

function App() {
  const classes = useStyles();
  const [items, setItems] = useState([])
  const [name, setName] = useState("france");
  // const [capital, setCapital] = useState("");
  // const [flag, setFlag] = useState("");
  // const [population, setPopulation] = useState("");
  // const [region, setRegion] = useState("");
  
  useEffect(() => {
    function getCountry(country) {
      console.log('country >>>', country)
      fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then(res => res.json())
      .then(countryAPI => {
        console.log('countryAPI', countryAPI)
        setItems(countryAPI)
      })
    }
    
    getCountry(name)

  }, [name])

  return (
    <div className={classes.root}>
      <h1 className={classes.head}>Country selector</h1>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button 
            className={classes.button}
            onClick={() => {
              setName("france")
            }}
          >
            France
          </Button>
          <Button 
            className={classes.button}
            onClick={() => {
              setName("brazil")
            }}
          >
            Brazil  
          </Button>
          <Button 
            className={classes.button} 
            onClick={() => {
              setName("croatia")
            }} 
          >
            Croatia  
          </Button>
        </ButtonGroup>
        <Card>
          <CardActionArea>
          {items.map((country, index) => {
            return (
              <div key={index}>
              <CardMedia 
              className={classes.media}
              image={country.flag}
            />
            <CardContent>
              <Typography variant="h5" component="h5">
                Country: {country.name}
              </Typography>
              <Typography variant="h5" component="h5">
                Capital: {country.capital}
              </Typography>
              <Typography variant="h6" component="h6">
                Region: {country.region}
              </Typography>
              <Typography variant="h6" component="h6">
                Population: {country.population}
              </Typography>
            </CardContent>
              </div>
            )
          })}
          </CardActionArea>
        </Card>
    </div>
  );
}

export default App;
