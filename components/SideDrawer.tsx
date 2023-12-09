import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

interface SideDrawerProps {
  drawerItems: { label: string; path: string }[];
  isOpen: boolean;
  onClose: () => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ drawerItems, isOpen, onClose }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <List>
        {drawerItems.map((item, index) => (
          <Link href={item.path} key={index}>
            <ListItem button onClick={onClose}>
              <ListItemText primary={item.label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default SideDrawer;