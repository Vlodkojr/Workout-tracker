import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createSvgIcon } from '@mui/material/utils';
import { Link } from 'react-router-dom';

import { useStyles } from './style';

export const NavBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    'Home',
  );
  const routes = ["/", "/new-plan", "/list-of-plans"];

  return (
    <>
      <Tabs
        className={classes.navBar}
        value={value}
        onChange={handleChange}
        centered>
        <Tab
          icon={<HomeIcon />}
          iconPosition="start"
          value={routes[0]}
          component={Link}
          to={routes[0]} />
        <Tab
          label="New plan"
          value={routes[1]}
          component={Link}
          to={routes[1]} />
        <Tab
          label="List of plans"
          value={routes[2]}
          component={Link}
          to={routes[2]} />
      </Tabs>
    </>
  )
}
