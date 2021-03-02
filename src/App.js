import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { 
  Button, 
  ButtonGroup, 
  Card, 
  CardActionArea,
  CardContent,
  CardMedia,
  TextField,
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
  
  useEffect(() => {
    function getCountry(country) {
      console.log('country >>>', country)
      fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then(res => res.json())
      .then(res => {
        console.log('countryAPI', res)
        setItems(res)
      })
    }
    
    getCountry(name)

  }, [name])

  function handleChange(event) {
    setName(event.target.value)
  }

  console.log('items', items)
  return (
    <div className={classes.root}>
      <h1 className={classes.head}>Country selector</h1>
      <form>
        <TextField 
          label="Country"
          variant="outlined"
          value={name}
          onChange={handleChange}
        />
        <Button
          color="primary"
          variant="contained"
          style={{ height: 54}}
        >
          Search
        </Button>
      </form>
        <ButtonGroup 
          variant="contained" 
          color="primary" 
          aria-label="contained primary button group"
        >
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
          {items.map((count, index) => {
            return (
              <div key={index}>
              <CardMedia 
              className={classes.media}
              image={count.flag}
            />
            <CardContent>
              <Typography variant="h5" component="h5">
                Country: {count.name}
              </Typography>
              <Typography variant="h5" component="h5">
                Capital: {count.capital}
              </Typography>
              <Typography variant="h6" component="h6">
                Region: {count.region}
              </Typography>
              <Typography variant="h6" component="h6">
                Population: {count.population}
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
