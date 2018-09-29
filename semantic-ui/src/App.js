import React, { Component } from 'react';
import logo from './logo.png';
import science from './imgs/science.png';
import engineering from './imgs/engineering.png';
import technology from './imgs/technology.png';
import mathematics from './imgs/mathematics.png';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Header, Segment, MenuItem, Item } from 'semantic-ui-react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react'
import { Divider } from 'semantic-ui-react'
import { Grid} from 'semantic-ui-react'
import { Container} from 'semantic-ui-react'
import { Pagination } from 'semantic-ui-react'



class App extends Component {
  render() {
    return (
      <div>
      <Segment clearing basic inverted color="#001529">
        
        <Header floated='left'>
        <Item>
          <Item.Image size="small" src={logo}/>
         </Item>
        </Header>
      </Segment>
      <div>
        <Header as='h4' icon textAlign='center'>
          <Icon name='book' circular />
          <Header.Content>Listas</Header.Content>
        </Header>
      </div>
      <Container  style={{ paddingBottom: '70px' }} textAlign='center'>
        <Divider />
        <Grid style={{ paddingBottom: '70px' }} columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Card color="yellow" href='#listas/ciências'>
                <Image src={science}/>
                <Card.Content>
                  <Card.Header>Ciência</Card.Header>
                  <Card.Meta>
                    <span className='date'>Atualizado em 29/09/2018</span>
                  </Card.Meta>
                  <Card.Description>Algumas listas com assuntos de ciências</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    22 Alunos
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card color="blue" href='#listas/matemática'>
                <Image src={mathematics}/>
                <Card.Content>
                  <Card.Header>Matemática</Card.Header>
                  <Card.Meta>
                    <span className='date'>Atualizado em 29/09/2018</span>
                  </Card.Meta>
                  <Card.Description>Algumas listas com assuntos de matemática aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    59 Alunos
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card color="green" href='#listas/tecnologia'>
                <Image src={technology}/>
                <Card.Content>
                  <Card.Header>Tecnologia</Card.Header>
                  <Card.Meta>
                    <span className='date'>Atualizado em 28/09/2018</span>
                  </Card.Meta>
                  <Card.Description>Algumas listas com assuntos de tecnologia</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    30 Alunos
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Card color="red" href='#listas/engenharia'>
                <Image src={engineering}/>
                <Card.Content>
                  <Card.Header>Engenharia</Card.Header>
                  <Card.Meta>
                    <span className='date'>Atualizado em 29/09/2018</span>
                  </Card.Meta>
                  <Card.Description>Algumas listas com assuntos de engenharias</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    73 Alunos
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Pagination defaultActivePage={1} totalPages={2} />
      </Container>
      
    </div>
    );
  }
}

export default App;

