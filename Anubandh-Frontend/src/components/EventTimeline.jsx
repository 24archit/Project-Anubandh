import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemIcon } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // Optional: an icon for events
import { motion } from 'framer-motion';
import "../assets/styles/EventTimeline.css"

const eventsData = {
  2020: [
    { id: 1, event: 'Event A', date: '2020-01-01', upcoming: false },
    { id: 2, event: 'Event B', date: '2020-05-15', upcoming: false },
  ],
  2021: [
    { id: 3, event: 'Event C', date: '2021-02-20', upcoming: false },
    { id: 4, event: 'Event D', date: '2021-11-30', upcoming: true },
  ],
  2022: [
    { id: 5, event: 'Event E', date: '2022-06-10', upcoming: false },
    { id: 6, event: 'Event F', date: '2022-12-15', upcoming: true },
  ],
};

const EventTimeline = () => {
  const [selectedYear, setSelectedYear] = useState(2020);
  
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Changed Paper to Box for the sidebar */}
      <Box className="sidebar">
        <Typography variant="h5" align="center">Select Year</Typography>
        <List>
          {Object.keys(eventsData).map((year) => (
            <ListItem 
              button 
              key={year} 
              onClick={() => setSelectedYear(year)}
              sx={{ 
                '&:hover': { 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)' 
                }
              }} 
            >
              <ListItemIcon>
                <EventIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <Typography variant="body1" sx={{ color: 'white' }}>{year}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box className="timeline-container">
        <Typography className="timeline-title" variant="h4" align="center">{selectedYear} Events</Typography>
        <Box className="timeline">
          {eventsData[selectedYear].map((event) => (
            <motion.div
              key={event.id}
              className={`event ${event.upcoming ? 'upcoming' : 'past'}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h6">{event.event}</Typography>
              <Typography variant="body2">{event.date}</Typography>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default EventTimeline;
