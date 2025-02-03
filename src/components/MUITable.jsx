import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, TableSortLabel
} from '@mui/material';

const LogTable = ({logs}) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('description');
  // const logs = [
  //   { logId: 1, description: 'Used a car for a 10km trip to the grocery store', category: 'Transport', emission: 4.5, date: '2025-01-15', performedTime: '14:00' },
  //   { logId: 2, description: 'Ate lunch at a restaurant', category: 'Food', emission: 1.2, date: '2025-01-15', performedTime: '13:00' },
  //   { logId: 3, description: 'Used electricity for home lighting', category: 'Energy', emission: 2.3, date: '2025-01-16', performedTime: '07:00' },
  //   { logId: 4, description: 'Took a bus to work', category: 'Transport', emission: 1.5, date: '2025-01-16', performedTime: '08:30' },
  //   { logId: 5, description: 'Purchased a coffee to go', category: 'Food', emission: 0.5, date: '2025-01-17', performedTime: '09:15' },
  //   { logId: 6, description: 'Purchased a coffee to go', category: 'Food', emission: 0.5, date: '2025-01-17', performedTime: '09:15' },
  //   { logId: 7, description: 'Purchased a coffee to go', category: 'Food', emission: 0.5, date: '2025-01-17', performedTime: '09:15' },
  //   // Add more logs here
  // ];

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortData = (array) => {
    array = array.map((object) => {
      return {...object, [object.logId]: object.logId+1}
    })
    
    return array.sort((a, b) => {
      if (orderBy === 'description') {
        return order === 'asc' ? a.description.localeCompare(b.description) : b.description.localeCompare(a.description);
      } else if (orderBy === 'emission') {
        return order === 'asc' ? a.emission - b.emission : b.emission - a.emission;
      } else if (orderBy === 'date') {
        return order === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
      } else {
        return order === 'asc' ? a.performedTime.localeCompare(b.performedTime) : b.performedTime.localeCompare(a.performedTime);
      }
    });
  };

  return (
    <TableContainer component={Paper} sx={{overflowY: 'auto', borderRadius: '12px', minHeight: '350px', maxHeight: '350px', border: '1px solid #d1d5db', fontFamily: "var(--font-Outfit) !important"}}>
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
                active={orderBy === 'performedTime'}
                direction={orderBy === 'performedTime' ? order : 'asc'}
                onClick={() => handleRequestSort('performedTime')}
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
            <TableRow hover role="checkbox" tabIndex={-1} key={log.logId}>
              <TableCell sx={{fontFamily: 'var(--font-Outfit)'}} className="text-black text-sm font-Outfit max-w-1/4">
                {log.description}
              </TableCell>
              <TableCell sx={{fontFamily: 'var(--font-Outfit)'}} className="text-gray-700 text-sm font-Outfit">{log.category}</TableCell>
              <TableCell sx={{fontFamily: 'var(--font-Outfit)'}} className="text-gray-700 text-sm font-Outfit">{log.date}</TableCell>
              <TableCell sx={{fontFamily: 'var(--font-Outfit)'}} className="text-gray-700 text-sm font-Outfit">{log.performedTime}</TableCell>
              <TableCell sx={{fontFamily: 'var(--font-Outfit)'}} className="text-gray-700 text-sm font-Outfit">{log.emission} CO2e</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
  );
};

export default LogTable;
