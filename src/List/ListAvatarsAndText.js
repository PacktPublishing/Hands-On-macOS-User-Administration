import React, { Component } from 'react';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Badge from '@material-ui/core/Badge';

import MarkunreadIcon from '@material-ui/icons/Markunread';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  activeAvatar: {
    backgroundColor: theme.palette.primary[theme.palette.type]
  }
});

export default withStyles(styles)(
  class extends Component {
    state = {
      items: [
        {
          name: 'Unread',
          updated: '2 minutes ago',
          Icon: MarkunreadIcon,
          notifications: 1
        },
        {
          name: 'High Priority',
          updated: '30 minutes ago',
          Icon: PriorityHighIcon
        },
        {
          name: 'Low Priority',
          updated: '3 hours ago',
          Icon: LowPriorityIcon
        },
        { name: 'Junk', updated: '6 days ago', Icon: DeleteIcon }
      ]
    };

    render() {
      const { classes } = this.props;

      return (
        <List>
          {this.state.items.map(({ Icon, ...item }, index) => (
            <ListItem button>
              <ListItemIcon>
                <Badge
                  color={item.notifications ? 'secondary' : undefined}
                  badgeContent={
                    item.notifications ? item.notifications : null
                  }
                >
                  <Avatar
                    className={classNames({
                      [classes.activeAvatar]: item.notifications
                    })}
                  >
                    <Icon />
                  </Avatar>
                </Badge>
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                secondary={item.updated}
              />
            </ListItem>
          ))}
        </List>
      );
    }
  }
);
