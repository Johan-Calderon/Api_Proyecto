import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './CardBall.css';

const CardBall = ({ id, name, image, race, gender, species, ki = null, maxKi = null, affiliation = null }) => {
 
  const displayKi = ki !== null ? ki : "N/A";
  const displayMaxKi = maxKi !== null ? maxKi : "N/A";
  
  
  const displayAffiliation = affiliation || "Unknown";

  return (
    <Card sx={{ 
      maxWidth: 345, 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      borderRadius: '10px',
      overflow: 'visible', 
      backgroundColor: '#2a2a2a',
      color: 'white',
      position: 'relative', 
      '&:hover': {
        boxShadow: '0 8px 16px rgba(255, 165, 0, 0.7)',
      }
    }}>
      <Link to={`/personaje/${id}`} style={{ textDecoration: 'none' }}>
        <Box sx={{
          position: 'relative',
          backgroundColor: '#f5f5f5',
          height: '350px', 
          '&:hover': {
            '& .card-image': {
              transform: 'scale(1.05)',
              
            }
          }
        }}>
         
          <div className="kanji-background"></div>
          
          
          <CardMedia
            component="img"
            alt={name}
            image={image}
            className="card-image"
            sx={{ 
              position: 'absolute',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'auto',
              height: '110%', 
              objectFit: 'contain',
              zIndex: 2 
            }}
          />
        </Box>
      </Link>
      <CardContent sx={{ 
        flexGrow: 1, 
        backgroundColor: '#2a2a2a',
        padding: '16px',
        color: 'white',
        marginTop: '40px' 
      }}>
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'white', mb: 1 }}>
          {name}
        </Typography>
        
        <Typography variant="body1" sx={{ color: '#ffc107', fontWeight: 'bold' }}>
          {race} - {gender}
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'white', mt: 1 }}>
          <strong>Base KI:</strong> {displayKi}
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'white', mt: 1 }}>
          <strong>Total KI:</strong> {displayMaxKi}
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'white', mt: 1 }}>
          <strong>Affiliation:</strong> {displayAffiliation}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardBall;