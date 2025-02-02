import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, TableSortLabel
} from '@mui/material';

const LogTable = () => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('description');

  const logs = [
    { log_id: 1, description: 'Used a car for a 10km trip to the grocery store', category: 'Transport', emission: 4.5, date: '2025-01-15', performed_time: '14:00' },
    { log_id: 2, description: 'Ate lunch at a restaurant', category: 'Food', emission: 1.2, date: '2025-01-15', performed_time: '13:00' },
    { log_id: 3, description: 'Used electricity for home lighting', category: 'Energy', emission: 2.3, date: '2025-01-16', performed_time: '07:00' },
    { log_id: 4, description: 'Took a bus to work', category: 'Transport', emission: 1.5, date: '2025-01-16', performed_time: '08:30' },
    { log_id: 5, description: 'Purchased a coffee to go', category: 'Food', emission: 0.5, date: '2025-01-17', performed_time: '09:15' },
    { log_id: 6, description: 'Purchased a coffee to go', category: 'Food', emission: 0.5, date: '2025-01-17', performed_time: '09:15' },
    { log_id: 7, description: 'Purchased a coffee to go', category: 'Food', emission: 0.5, date: '2025-01-17', performed_time: '09:15' },
    // Add more logs here
  ];

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortData = (array) => {
    return array.sort((a, b) => {
      if (orderBy === 'description') {
        return order === 'asc' ? a.description.localeCompare(b.description) : b.description.localeCompare(a.description);
      } else if (orderBy === 'emission') {
        return order === 'asc' ? a.emission - b.emission : b.emission - a.emission;
      } else if (orderBy === 'date') {
        return order === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
      } else {
        return order === 'asc' ? a.performed_time.localeCompare(b.performed_time) : b.performed_time.localeCompare(a.performed_time);
      }
    });
  };

  return (
    <TableContainer component={Paper} sx={{overflowY: 'auto', borderRadius: '12px', maxHeight: '350px', border: '1px solid #d1d5db', fontFamily: "var(--font-Outfit) !important"}}>
      <Table aria-labelledby="tableTitle" stickyHeader>
        <TableHead >
          <TableRow >
            <TableCell sx={{fontFamily: 'var(--font-Outfit)'}}>
              <TableSortLabel
                active={orderBy === 'description'}
                direction={orderBy === 'description' ? order : 'asc'}
                onClick={() => handleRequestSort('description')}
              >
                Description
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{fontFamily: 'var(--font-Outfit)'}}>
              <TableSortLabel
                active={orderBy === 'category'}
                direction={orderBy === 'category' ? order : 'asc'}
                onClick={() => handleRequestSort('category')}
              >
                Category
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{fontFamily: 'var(--font-Outfit)'}}>
              <TableSortLabel
                active={orderBy === 'date'}
                direction={orderBy === 'date' ? order : 'asc'}
                onClick={() => handleRequestSort('date')}
              >
                Date
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{fontFamily: 'var(--font-Outfit)'}}>
              <TableSortLabel
                active={orderBy === 'performed_time'}
                direction={orderBy === 'performed_time' ? order : 'asc'}
                onClick={() => handleRequestSort('performed_time')}
              >
                Performed Time
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{fontFamily: 'var(--font-Outfit)'}}>
              <TableSortLabel
                active={orderBy === 'emission'}
                direction={orderBy === 'emission' ? order : 'asc'}
                onClick={() => handleRequestSort('emission')}
              >
                Emissions (CO2e)
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortData(logs).map((log) => (
            <TableRow hover role="checkbox" tabIndex={-1} key={log.log_id}>
              <TableCell sx={{fontFamily: 'var(--font-Outfit)'}} className="text-black text-sm font-Outfit max-w-1/4">
                {log.description}
              </TableCell>
              <TableCell sx={{fontFamily: 'var(--font-Outfit)'}} className="text-gray-700 text-sm font-Outfit">{log.category}</TableCell>
              <TableCell sx={{fontFamily: 'var(--font-Outfit)'}} className="text-gray-700 text-sm font-Outfit">{log.date}</TableCell>
              <TableCell sx={{fontFamily: 'var(--font-Outfit)'}} className="text-gray-700 text-sm font-Outfit">{log.performed_time}</TableCell>
              <TableCell sx={{fontFamily: 'var(--font-Outfit)'}} className="text-gray-700 text-sm font-Outfit">{log.emission} CO2e</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
  );
};

export default LogTable;
