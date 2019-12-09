import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    width: "30em",
    marginLeft: "3%",
    marginTop: 10,
    lineHeight: 1.6,
    height: 221,
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
              <li className={classes.li}>Ensino Médio-Técnico em Programação - <a href="http://www.ort.org.br/">Instituto de Tecnologia ORT </a>- 2017</li>
              <li>Graduando em Bacharelado em Ciência da Computação - <a href="http://www.cefet-rj.br">CEFET-RJ </a>- previsão de Formatura 2022</li>
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
