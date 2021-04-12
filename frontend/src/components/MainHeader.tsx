import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';

function MainHeader() {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" aria-label="menu"></IconButton>
          <Typography variant="h6">News</Typography>
          <Button color="primary">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default MainHeader;
