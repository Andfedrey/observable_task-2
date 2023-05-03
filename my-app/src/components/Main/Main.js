import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import {
  Box, Button, Card, CardContent, CircularProgress, List, ListItem, ListItemButton,
  ListItemText, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { serviceAllUpdatesAsync } from '../../features/slices/allService/asyncSlice';

export function Main() {
  const allServices = useSelector((state) => state.allServise);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(serviceAllUpdatesAsync());
  }, []);

  if (allServices.status === 'error' || allServices.value.length === 0) {
    return (
      <Card sx={{ background: '#EB6262' }}>
        <CardContent sx={{ height: '100%' }}>
          <Typography sx={{ color: '#4B0000' }}>
            Произошла ошибка!
          </Typography>
          <Button onClick={() => dispatch(serviceAllUpdatesAsync())}>
            Повторить запрос
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Container
      h="100vh"
      sx={{
        bgcolor: 'background.paper',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexWrap: 'wrap',
      }}
    >
      {allServices.status === 'succesed' ? (
        <List>
          <ListItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}
          >
            {allServices.value.length > 0
              && allServices.value.map((el) => (
                <Link to={`${el.id}`}>
                  <ListItemButton
                    sx={{
                      backgroundColor: 'blue',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'green',
                        color: 'black',
                      },
                      width: '100%',
                    }}
                    key={el.id}
                  >
                    <ListItemText
                      primary={`${el.name}: ${el.price}`}
                    />
                  </ListItemButton>
                </Link>
              ))}
          </ListItem>
        </List>
      ) : (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
}
