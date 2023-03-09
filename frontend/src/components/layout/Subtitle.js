import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const SubTitle = ({ stepSubTitle }) => {
  const styles = makeStyles((theme) => ({
    subtitle: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  const classes = styles();

  return <Typography className={classes.subtitle}>{stepSubTitle}</Typography>;
};

export default SubTitle;
