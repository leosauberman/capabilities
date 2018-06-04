import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    maxWidth: 375,
    marginLeft: 25,
    marginTop: 10,
    lineHeight: 1.6,
  },
  li: {
      marginTop: 1,
  },
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
        <h2>Formação Acadêmica</h2>
          <ul>
              <li className={classes.li}>Técnico em Programação - <a href="http://www.ort.org.br/">Instituto de Tecnologia ORT</a></li>
              <li>Graduando em Bacharelado em Ciência da Computação - <a href="http://www.cefet-rj.br">CEFET-RJ</a></li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
