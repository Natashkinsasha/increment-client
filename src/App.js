import React, { useState } from 'react';
import {Button, Container, Divider, Grid, Header, Label} from 'semantic-ui-react'
import {decrement, increment, getRandomInteger} from "./util";


function App() {

       const [number, setNumber] = useState(getRandomInteger(-100, 100));

      return (
          <Container style={{ marginTop: '3em' }}>
              <Header as='h1'>Counter</Header>
              <Grid columns='equal'>
                  <Grid.Column>
                      <Button onClick={() => {
                          setNumber(increment(number));
                      }}>Increment</Button>
                      <Button onClick={()=>{
                          setNumber(decrement(number));
                      }}>Decrement</Button>

                      <Button onClick={()=>{
                          setNumber(getRandomInteger(-100, 100));
                      }}>Random</Button>

                      <Divider />

                      <Label circular color='red'>
                          {number}
                      </Label>

                  </Grid.Column>
              </Grid>
          </Container>
      );
}

export default App;
