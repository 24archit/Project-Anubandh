import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Button } from '@mui/material';

// Sample job data
const jobs = [
  {
    id: 1,
    title: 'Front-End Developer',
    company: 'TechCorp',
    location: 'Remote',
    description: 'Develop responsive front-end interfaces using React and Material-UI.',
  },
  {
    id: 2,
    title: 'Back-End Developer',
    company: 'CodeBase Inc.',
    location: 'New York, NY',
    description: 'Design and maintain scalable backend services using Node.js and MongoDB.',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Creative Studio',
    location: 'San Francisco, CA',
    description: 'Create stunning user interfaces and experiences for mobile and web apps.',
  },
];

const Heading = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black', // Website background color
        padding: '50px 0',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingX: "3rem"
      }}
    >
     

      <Grid container spacing={4} justifyContent="center">
        {jobs.map((job) => (
          <Grid item key={job.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: 'white',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  boxShadow: '0 8px 40px rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ color: 'black', marginBottom: '10px' }}>
                  {job.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray' }}>
                  {job.company} - {job.location}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: '15px', color: 'black' }}>
                  {job.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: '20px',
                    backgroundColor: 'blue',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'pink',
                    },
                  }}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Heading;
