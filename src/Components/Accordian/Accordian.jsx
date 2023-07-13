import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>what are coins ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Coins are our virtual good, and you can use them to award
            exceptional posts or comments, giving them Silver, Gold, or
            Platinum. We'll be adding cool new ways to spend your coins in the
            future.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What is give Awards ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Giving an Award, or "gilding", is a way to show appreciation for an
            exceptional contribution to Reddit. You can award someone by
            clicking on "Give Award" below their post or comment. This
            distinguishes it with an Award for all to see, and some even grant
            the honoree special bonus benefits.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>What are these new Awards Type ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There are now several ways to Give Awards. A Silver Award requires
            100 coins, which simply marks a post or comment with a Silver Award
            icon. A classic Gold Award requires 500 coins and gives the
            recipient a week of Reddit Premium membership and 100 coins.
            Finally, the ultra rare Platinum Award costs 1800 coins, and gives
            the recipient with one month of Reddit Premium membership, which
            includes 700 coins for that month.
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>
            I bought coins, how can I tell how many I have?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you buy coins you will, subject to Reddit's Previews Terms, have
            a balance associated with your Reddit account. You can view your
            balance on the top navigation bar by your username.
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography>Can I transfer coins between Reddit accounts?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You cannot transfer your Reddit coin balance across usernames,
            sorry. You can offer a Gold Award to other users which will grant
            them 100 coins.
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I get coins for free?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We may give away coins on special occasions. Stay tuned!
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography>
            What happened to Creddits? Do those still exist?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, Creddits are simply called "coins" now, and we've converted any
            existing balance at a generous exchange rate of one Creddit to 2000
            coins. That's double their original monetary value as a thank you
            for supporting us early. Use them to award exceptional posts and
            comments you come across. Thanks again for your contribution to the
            Reddit community.
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography>What are these new Awards Type ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There are now several ways to Give Awards. A Silver Award requires
            100 coins, which simply marks a post or comment with a Silver Award
            icon. A classic Gold Award requires 500 coins and gives the
            recipient a week of Reddit Premium membership and 100 coins.
            Finally, the ultra rare Platinum Award costs 1800 coins, and gives
            the recipient with one month of Reddit Premium membership, which
            includes 700 coins for that month.
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography>
            I thought Gold was the name of Reddit's subscription membership?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You're correct, it used to also be the name of the subscription
            membership. However, many people confused the subscription "Reddit
            Gold" membership with a virtual good or coin. To make things easier
            to understand, we've renamed the membership to "Reddit Premium",
            while our virtual good is called "coins".
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* What are these new Awards Type ? */}
      {/* <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
  );
}
