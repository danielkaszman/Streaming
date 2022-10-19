import React from "react";
import {
  Container,
  Grid,
  Items,
} from "./StyledComponents/Stats_Styled_Components";

function NewReleases() {
  return (
    <Container>
      <h2>New Releases</h2>
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

export default NewReleases;
