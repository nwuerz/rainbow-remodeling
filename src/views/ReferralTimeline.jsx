import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@material-ui/lab";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Paper, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
  },
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "x-small",
    fontWeight: "bold",
  },
}));

export default function ReferralTimeline() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xl={2} lg={2}></Grid>
      <Grid item xl={8} lg={8}>
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
                <Typography>
                  Go to the Submit Referral Form prior to your referral having
                  any contact with Rainbow.
                </Typography>
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
                <Typography>
                  A Rainbow representative will contact your referral and make
                  arrangements to inspect their roof. They are under no
                  obligation and the inspection is free.
                </Typography>
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
              <TimelineDot color="primary">
                <EmojiEmotionsIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Receive your reward!
                </Typography>
                <Typography>
                  Once their roof is built by Rainbow and they have signed their
                  Certificate of Completion you'll receive a $250 Visa gift
                  card!
                </Typography>
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
                <Typography>
                  There is no limit to the number of referrals you can make!
                </Typography>
                <a className={classes.link} href={"/terms"}>
                  program terms
                </a>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
      <Grid item xl={2} lg={2}></Grid>
    </Grid>
  );
}
