import React, { Component } from 'react';
import { Sidebar, Button, Menu, Header, Divider, Form, Input, Grid, Segment, Icon } from 'semantic-ui-react';

class App extends Component {
  state = { visible: true }


  render() {
    const { visible } = this.state
    return (
      <div className="App">
        <div>
          <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu} animation='overlay' direction='top' visible={visible} inverted>
              <Menu.Item name='event'>
                <Icon name='event' />
                <a href={`/Event/`} >Event</a>
              </Menu.Item>
              <Menu.Item name='login'>
                <Icon name='user' />
                <a href={`/Login/`} >Login</a>
              </Menu.Item>
              <Menu.Item name='register'>
                <Icon name='add user' />
                <a href={`/register/`} >Register</a>
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>
                <Header as='h2'>
                  <Icon name='plug' />
                  <Header.Content>
                    Under Development<br />
                    <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
                  </Header.Content>
                </Header>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </div>
    );
  }
}

export default App;

export class Event extends Component {
  state = { visible: true }
  render() {
    const { visible } = this.state
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='overlay' direction='top' visible={visible} inverted>
          <Menu.Item name='event'>
            <Icon name='event' />
            <a href={`/Event/`} >Event</a>
          </Menu.Item>
          <Menu.Item name='login'>
            <Icon name='users' />
            <a href={`/Login/`} >Login</a>
          </Menu.Item>
          <Menu.Item name='register'>
            <Icon name='add user' />
            <a href={`/Register/`} >Register</a>
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <div className="Event">
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <Segment basic>
                <h1 class="ui header">Event Creation</h1><br /><br /><br />
                <Form>
                  <Form.Field inline>
                    <Icon name="mail outline" size="small" /><span><b>Event name: </b></span><br />
                    <Input type="text" placeholder="Email" name="email"/>
                    <Divider />
                  </Form.Field>
                  <Form.Field inline>
                    <Icon name="lock" size="small" /><span><b>Event : </b></span><br />
                    <Input type='password' placeholder='Password' name="password"/>
                    <Divider />
                    <br />
                  </Form.Field>
                  <Form.Field inline>
                    <Input type='submit' value="create"/>
                  </Form.Field>
                </Form>
              </Segment>
            </div>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export class Login extends Component {
  state = { visible: true }
  render() {
    const { visible } = this.state
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='overlay' direction='top' visible={visible} inverted>
          <Menu.Item name='event'>
            <Icon name='event' />
            <a href={`/Event/`} >Event</a>
          </Menu.Item>
          <Menu.Item name='login'>
            <Icon name='users' />
            <a href={`/Login/`} >Login</a>
          </Menu.Item>
          <Menu.Item name='register'>
            <Icon name='add user' />
            <a href={`/Register/`} >Register</a>
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <div className="Login">
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <Segment basic>
                <h1 class="ui header">Login Form</h1><br /><br /><br />
                <Form>
                  <Form.Field inline>
                    <Icon name="mail outline" size="small" /><span><b>Email: </b></span><br />
                    <Input type="text" placeholder="Email" name="email"/>
                    <Divider />
                  </Form.Field>
                  <Form.Field inline>
                    <Icon name="lock" size="small" /><span><b>Password: </b></span><br />
                    <Input type='password' placeholder='Password' name="password"/>
                    <Divider />
                    <br />
                  </Form.Field>
                  <Form.Field inline>
                    <Input type='submit' value="Log-In"/>
                  </Form.Field>
                </Form>
              </Segment>
            </div>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}
export class Register extends Component {
  state = { visible: true }
  render() {
    const { visible } = this.state
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='overlay' direction='top' visible={visible} inverted>
          <Menu.Item name='event'>
            <Icon name='wizard' />
            <a href={`/Event/`} >Event</a>
          </Menu.Item>
          <Menu.Item name='login'>
            <Icon name='users' />
            <a href={`/Login/`} >Login</a>
          </Menu.Item>
          <Menu.Item name='register'>
            <Icon name='add user' />
            <a href={`/Register/`} >Register</a>
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <div class="ui one column centered grid">
              <div class column>
                <div className="Register">
                  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                  <Segment basic>
                    <h1 class="ui header">Registration Form</h1><br /><br /><br />
                    <Form>
                      <Form.Field inline>
                        <Icon name="users" size="small" /><span><b>Username: </b></span><br />
                        <Input type='text' placeholder='Username' name="username"/>
                        <Divider />
                      </Form.Field>
                      <Form.Field inline>
                        <Icon name="mail outline" size="small" /><span><b>Email: </b></span><br />
                        <Input type="text" placeholder="Email" name="email"/>
                        <Divider />
                      </Form.Field>
                      <Form.Field inline>
                        <Icon name="lock" size="small" /><span><b>Password: </b></span><br />
                        <Input type='password' placeholder='Password' name="password"/>
                        <Divider />
                        <br />
                      </Form.Field>
                      <Form.Field inline>
                        <Input type='submit' value="Register"/>
                      </Form.Field>
                    </Form>
                  </Segment>
                </div>
              </div>
            </div>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}