import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ProgressBar from 'react-bootstrap/ProgressBar'


const styles = {
  card: {
    width: "30em",
    marginLeft: "15%",
    marginTop: 10,
    lineHeight: 1.6,
  },
  progress: {
    marginBottom: "2%",
  }
};

function CardAbilities(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
            <h2 style={{textAlign: "center"}}>Habilidades</h2>
            <h5>Node.JS</h5>
            <ProgressBar className={classes.progress} animated variant="success" now={75}/>
            <h5>Desenvolvimento Web</h5>
            <ProgressBar className={classes.progress} animated variant="success" now={85}/>
            <h5>Android Studio</h5>
            <ProgressBar className={classes.progress} animated variant="success" now={60}/>
            <h5>DialogFlow e IBM Watson</h5>
            <ProgressBar className={classes.progress} animated variant="success" now={50}/>
            <h5>Python</h5>
            <ProgressBar className={classes.progress} animated variant="success" now={75}/>


        </CardContent>
      </Card>
    </div>
  );
}

CardAbilities.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardAbilities);
