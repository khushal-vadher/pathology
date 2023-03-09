import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Title = ({ stepTitle }) => {
  const styles = makeStyles((theme) => ({
    title: {
      fontSize: '30px',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  const classes = styles();

  return <Typography className={classes.title}>{stepTitle}</Typography>;
};

export default Title;
