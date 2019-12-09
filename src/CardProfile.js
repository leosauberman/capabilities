import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import leo from "./assets/leo.jpeg";

const styles = {
  card: {
    marginLeft: "15%",
    marginTop: 10,
    lineHeight: 1.6,
    width: "20em"
  },
  avatar: {
    width: 70,
    height: 70,
  },
  smallAvatar: {
    width: 50,
    height: 50,
  }
};

function SimpleCard(props) {
  const { classes } = props;
  
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Avatar style={{ margin: "0 0 10px 33%" }} src={leo} alt="Leonardo Sauberman" className={classes.avatar}/>
          <h3 style={{textAlign: "center"}}>Leonardo Sauberman</h3>
          <div style={{ display: "flex", alignItems: "center"}}>
            <a href="https://github.com/leosauberman" style={{ margin: "5px 0", marginLeft: "25%", marginRight: "10px", display: "inline-block"}}> <Avatar src="https://www.shareicon.net/data/2017/03/07/880593_media_512x512.png" alt="Github" className={classes.smallAvatar}/></a>
            <a href="https://br.linkedin.com/in/leonardo-sauberman-dias-de-moraes-7ab536158" style={{ margin: "5px 10px", display: "inline-block"}}> <Avatar src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-128.png" alt="Linkedin" className={classes.smallAvatar}/></a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
