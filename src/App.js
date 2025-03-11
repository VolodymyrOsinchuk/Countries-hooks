// import React, { useEffect, useState } from 'react'
// import {
//   Button,
//   ButtonGroup,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   TextField,
//   Typography,
//   Box,
// } from '@mui/material'
// import { styled } from '@mui/system'

// // Styled components using MUI v6's styled API
// const Root = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   '& > *': {
//     margin: theme.spacing(1),
//   },
// }))

// const Media = styled(CardMedia)({
//   height: 140,
// })

// function App() {
//   const [items, setItems] = useState([])
//   const [name, setName] = useState('france')

//   useEffect(() => {
//     getCountry('')
//   }, [])

//   function getCountry(country) {
//     console.log('country >>>', country)
//     fetch(`https://restcountries.com/v3.1/name/${country}`) // Updated API endpoint
//       .then((res) => res.json())
//       .then((res) => {
//         console.log('countryAPI', res)
//         setItems(res)
//       })
//       .catch((error) => console.error('Error fetching data:', error))
//   }

//   function handleChange(event) {
//     setName(event.target.value)
//   }

//   console.log('items', items)
//   return (
//     <Root>
//       <Typography variant="h4" align="center">
//         Country Selector
//       </Typography>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <TextField
//           label="Country"
//           variant="outlined"
//           value={name}
//           onChange={handleChange}
//         />
//         <Button
//           color="primary"
//           variant="contained"
//           style={{ height: 54 }}
//           onClick={() => {
//             getCountry(name)
//           }}
//         >
//           Search
//         </Button>
//       </form>
//       <ButtonGroup
//         variant="contained"
//         color="primary"
//         aria-label="contained primary button group"
//       >
//         <Button onClick={() => setName('france')}>France</Button>
//         <Button onClick={() => setName('brazil')}>Brazil</Button>
//         <Button onClick={() => setName('croatia')}>Croatia</Button>
//       </ButtonGroup>
//       <Card>
//         <CardActionArea>
//           {items.map((country, index) => (
//             <div key={index}>
//               <Media
//                 component="img"
//                 image={country.flags.png}
//                 alt={country.name.common}
//               />
//               <CardContent>
//                 <Typography variant="h5" component="h5">
//                   Country: {country.name.common}
//                 </Typography>
//                 <Typography variant="h5" component="h5">
//                   Capital: {country.capital ? country.capital[0] : 'N/A'}
//                 </Typography>
//                 <Typography variant="h6" component="h6">
//                   Region: {country.region}
//                 </Typography>
//                 <Typography variant="h6" component="h6">
//                   Population: {country.population}
//                 </Typography>
//               </CardContent>
//             </div>
//           ))}
//         </CardActionArea>
//       </Card>
//     </Root>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'
// import {
//   Button,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   TextField,
//   Typography,
//   CircularProgress,
// } from '@mui/material'

// import Grid from '@mui/material/Grid2'

// function App() {
//   const [items, setItems] = useState([])
//   const [name, setName] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     getCountry('') // Call API when app loads
//   }, [])

//   // Fonction pour obtenir le pays à partir de l'API
//   async function getCountry(country) {
//     setLoading(true)
//     setError(null) // Reset error message before making a new request

//     try {
//       const response = await fetch(
//         `https://restcountries.com/v3.1/name/${country}`
//       ) // Updated API
//       console.log('🚀 ~ getCountry ~ response :', response)
//       const data = await response.json() // Parse the JSON response

//       console.log('🚀 ~ .then ~ res:', data)

//       setLoading(false)

//       // Check for the response status
//       if (!response.ok) {
//         // Check if the response status is not OK (404, 500, etc.)
//         setError('Country not found')
//         setItems([])
//       } else {
//         setItems(data) // Set items only if the request was successful
//       }
//     } catch (error) {
//       setLoading(false)
//       setError('Failed to fetch country data') // Handle any errors that occur during fetching
//       console.error('Fetch error:', error) // Log the error for better debugging
//     }
//   }

//   // Fonction pour gérer le changement du champ de recherche
//   function handleChange(event) {
//     setName(event.target.value)
//   }

//   // Fonction pour la recherche quand on clique sur "Search"
//   const handleSearch = () => {
//     if (name.trim()) {
//       getCountry(name)
//     }
//   }

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         padding: '16px',
//       }}
//     >
//       <h1 style={{ textAlign: 'center' }}>Country Selector</h1>
//       <form
//         onSubmit={(e) => e.preventDefault()}
//         style={{ width: '100%', maxWidth: '85vh' }}
//       >
//         <TextField
//           label="Country"
//           variant="outlined"
//           value={name}
//           onChange={handleChange}
//           fullWidth
//           sx={{ mb: 2 }}
//         />
//         <Button
//           color="primary"
//           variant="contained"
//           sx={{ height: 54 }}
//           onClick={handleSearch}
//           disabled={loading || !name.trim()}
//         >
//           {loading ? (
//             <CircularProgress size={24} sx={{ color: 'white' }} />
//           ) : (
//             'Search'
//           )}
//         </Button>
//       </form>

//       {/* Affichage d'erreur */}
//       {error && (
//         <Typography sx={{ color: 'red', mt: 2, textAlign: 'center' }}>
//           {error}
//         </Typography>
//       )}

//       <Grid
//         container
//         spacing={3}
//         justifyContent="center"
//         sx={{ mt: 3, bgcolor: '#eceae7' }}
//       >
//         {items.length > 0 &&
//           items.map((count, index) => {
//             console.log('🚀 ~ App ~ count:', count)

//             return (
//               <Grid size={{ xs: 12 }} key={index}>
//                 <Card>
//                   <CardActionArea>
//                     <CardMedia
//                       component="img"
//                       sx={{ height: 140 }}
//                       image={count.flags.svg || count.flags.png}
//                       alt={count.name.common}
//                     />
//                     <CardContent>
//                       <Typography variant="h5" component="h2">
//                         Country: {count.name.common}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         color="textSecondary"
//                         component="p"
//                       >
//                         Capital: {count.capital}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         color="textSecondary"
//                         component="p"
//                       >
//                         Region: {count.region}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         color="textSecondary"
//                         component="p"
//                       >
//                         Population: {count.population.toLocaleString()}
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Grid>
//             )
//           })}
//       </Grid>
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState, useCallback } from 'react'
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  TextField,
  Typography,
  CircularProgress,
  Container,
  Box,
  Snackbar,
  Alert,
  Skeleton,
} from '@mui/material'
import Grid from '@mui/material/Grid2'

function App() {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Fonction mémorisée pour récupérer les données des pays
  const fetchCountryData = useCallback(async (countryName) => {
    setLoading(true)
    setError(null)

    try {
      // Si aucun pays n'est spécifié, récupérer tous les pays
      const endpoint = countryName
        ? `https://restcountries.com/v3.1/name/${countryName}`
        : 'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags'

      const response = await fetch(endpoint)

      if (!response.ok) {
        throw new Error(
          response.status === 404
            ? 'Pays non trouvé. Veuillez essayer un autre nom.'
            : `Erreur du serveur (${response.status})`
        )
      }

      const data = await response.json()
      setCountries(data)
    } catch (error) {
      console.error('Erreur de récupération:', error)
      setError(error.message || 'Échec de la récupération des données')
      setCountries([])
    } finally {
      setLoading(false)
    }
  }, [])

  // Charger les données initiales au montage
  useEffect(() => {
    fetchCountryData('')
  }, [fetchCountryData])

  // Gérer le changement dans le champ de recherche
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  // Gérer la soumission de la recherche
  const handleSearch = (event) => {
    event.preventDefault()
    if (searchTerm.trim()) {
      fetchCountryData(searchTerm)
    }
  }

  // Fermer l'alerte d'erreur
  const handleCloseError = () => {
    setError(null)
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Explorateur de Pays
        </Typography>

        <Box component="form" onSubmit={handleSearch} sx={{ mb: 4 }}>
          <TextField
            label="Nom du pays"
            variant="outlined"
            value={searchTerm}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{
              endAdornment: loading && (
                <CircularProgress size={24} color="inherit" />
              ),
            }}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            disabled={loading || !searchTerm.trim()}
          >
            Rechercher
          </Button>
        </Box>

        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={handleCloseError}
        >
          <Alert
            onClose={handleCloseError}
            severity="error"
            sx={{ width: '100%' }}
          >
            {error}
          </Alert>
        </Snackbar>

        <Grid container spacing={3}>
          {loading ? (
            // Afficher les squelettes pendant le chargement
            Array.from(new Array(3)).map((_, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={`skeleton-${index}`}>
                <Card>
                  <Skeleton variant="rectangular" height={140} />
                  <CardContent>
                    <Skeleton variant="text" height={40} />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : countries.length > 0 ? (
            countries.map((country, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={`${country.name.common}-${index}`}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height={160}
                      image={country.flags?.svg || country.flags?.png}
                      alt={`Drapeau de ${country.name.common}`}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {country.name.common}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        <strong>Capitale:</strong>{' '}
                        {country.capital?.join(', ') || 'Non spécifiée'}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        <strong>Région:</strong>{' '}
                        {country.region || 'Non spécifiée'}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        <strong>Population:</strong>{' '}
                        {country.population?.toLocaleString() ||
                          'Non spécifiée'}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid size={{ sx: 12 }}>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ textAlign: 'center', py: 4 }}
              >
                Aucun pays trouvé. Essayez une autre recherche.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  )
}

export default App
