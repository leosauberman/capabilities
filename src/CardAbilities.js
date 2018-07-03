import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Line } from 'rc-progress';

const styles = {
  card: {
    maxWidth: '31%',
    marginLeft: 25,
    marginTop: 10,
    lineHeight: 1.6,
  }
};

function CardAbilities(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
            <h2 style={{margin: "0 37%"}}>Habilidades</h2>
            <Line percent="75" strokeWidth="2" strokeColor="#3a7d62" trailColor="#d5839e" trailWidth="2"/>
        </CardContent>
      </Card>
    </div>
  );
}

CardAbilities.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardAbilities);
