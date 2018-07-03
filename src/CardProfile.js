import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  card: {
    maxWidth: '16%',
    marginLeft: 25,
    marginTop: 10,
    lineHeight: 1.6,
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
          <Avatar style={{ margin: "0 0 10px 33%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbYoicoNWNyF9T7MrhUQqp_CaBjGFBjys2ke-ApgnnSe3C-KqGA" alt="Leonardo Sauberman" className={classes.avatar}/>
          <Avatar style={{ margin: "5px 0", marginLeft: "25%", marginRight: "10px", display: "inline-block"}} src="https://www.shareicon.net/data/2017/03/07/880593_media_512x512.png" alt="Github" className={classes.smallAvatar}/>
          <Avatar style={{ margin: "5px 10px", display: "inline-block"}} src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-128.png" alt="Linkedin" className={classes.smallAvatar}/>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
