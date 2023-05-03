import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box, Button, Card, CardContent, CircularProgress, Typography,
} from '@mui/material';
import { serviceUpdatesAsync } from '../../features/slices/oneServise/asyncSlice';

export function Service() {
  const { id } = useParams();

  const oneServise = useSelector((state) => state.oneServise);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(serviceUpdatesAsync(id));
  }, []);

  const { name, content, price } = oneServise.value;

  if (oneServise.status === 'error') {
    return (
      <Card sx={{ background: '#EB6262' }}>
        <CardContent sx={{ height: '100%' }}>
          <Typography sx={{ color: '#4B0000' }}>
            Произошла ошибка!
          </Typography>
          <Button onClick={() => dispatch(serviceUpdatesAsync(id))}>
            Повторить запрос
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Button onClick={() => navigate('/')}>На главную</Button>
      <Card sx={{ width: '250px', height: '100px' }}>
        <CardContent sx={{ height: '100%' }}>
          { (oneServise.status === 'succesed')
            ? (
              <>
                <Typography mb={4}>
                  {name}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography color="textSecondary">
                    {content}
                  </Typography>
                  <Typography color="textSecondary">
                    {price}
                  </Typography>
                </Box>
              </>
            ) : (
              <Box>
                <CircularProgress />
              </Box>
            )}
        </CardContent>
      </Card>
    </>
  );
}
