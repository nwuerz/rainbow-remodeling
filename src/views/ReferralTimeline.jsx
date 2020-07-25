import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot }from '@material-ui/lab';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function ReferralTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      {/* step 1 */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Step 1
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Submit your referral online
            </Typography>
            <Typography>Go to the Submit Referral Form prior to your referral having any contact with Rainbow.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/* step 1 */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Step 2
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <EmojiPeopleIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              We'll reach out to them
            </Typography>
            <Typography>A Rainbow representative will contact your referral and make arrangements to inspect their roof. They are under no obligation and the inspection is free.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/* step 3 */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Step 3
          </Typography>
        </TimelineOppositeContent>  
        <TimelineSeparator>
          <TimelineDot color="primary" >
            <EmojiEmotionsIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Receive your reward!
            </Typography>
            <Typography>Once their roof is built by Rainbow and they have signed their Certificate of Completion you'll receive your reward!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/* step 4  */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            That's it!
          </Typography>
        </TimelineOppositeContent>  
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Repeat
            </Typography>
            <Typography>There is no limit to the number of referrals you can make! <a href={"/terms"}>program terms</a></Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}