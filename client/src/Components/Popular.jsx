import React from "react";
import {
  Container,
  Grid,
  Items,
} from "./StyledComponents/Stats_Styled_Components";

function Popular() {
  return (
    <Container>
      <h2>Popular</h2>
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

export default Popular;
