import React from "react";
import {
  Container,
  Grid,
  Items,
} from "./StyledComponents/Stats_Styled_Components";

function MostWatched() {
  return (
    <Container>
      <h2>Most Watched</h2>
      <Grid>
        <Items>
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />
        </Items>
        <Items>
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />
        </Items>
        <Items>
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />
        </Items>
        <Items>
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />
        </Items>
      </Grid>
    </Container>
  );
}

export default MostWatched;
