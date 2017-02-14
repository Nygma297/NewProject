import React, { Component } from 'react';
import './App.css';
import { Sidebar, Button, Menu, Header, Divider, Form, Input, Grid, Segment, Icon } from 'semantic-ui-react';


export class Register extends Component {
	state = { visible: true }
	render() {
		const { visible } = this.state
		return (
			<div>
				<Sidebar.Pushable as={Segment}>
					<Sidebar as={Menu} animation='overlay' direction='top' visible={visible} inverted>
							<Menu.Item name='home'>
								<Icon name='home' />
								<a href={`/Home/`} >Home</a>
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
								<Header as='h2'>
									<Icon name='plug' />
									<Header.Content>
										<div className="Register">
											<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
											<Grid columns={2} relaxed>
												<Grid.Column>
													<Segment inverted>
													</Segment>
												</Grid.Column>
												<Divider vertical>Or</Divider>
												<Grid.Column>
													<Segment inverted>
														<h1 class="ui header">Registration Form</h1><br /><br /><br />
														<Form>
															<Form.Field inline >
																<Icon name="hashtag" size="small" /><span>First Name: </span>
																{/*<Label basic color='red' pointing>Please enter a value</Label>*/}
																<Input type='text' placeholder='First name' />
																{/*<Label basic color='red' pointing>Please enter a value</Label>*/}
																<Divider />
																{/*<Label basic color='red' pointing='below'>Please enter a value</Label>*/}
															</Form.Field>
															<Form.Field inline>
																<Icon name="hashtag" size="small" /><span>Last Name: </span>
																<Input type='text' placeholder='Last Name' />
																<Divider />
															</Form.Field>
															<Form.Field inline>
																<Icon name="mail outline" size="small" /><span>Email:  </span>
																<Input type="text" placeholder="Email" />
																<Divider />
															</Form.Field>
															<Form.Field inline>
																<Icon name="users" size="small" /><span>Username: </span>
																<Input type='text' placeholder='Username' />
																<Divider />
															</Form.Field>
															<Form.Field inline>
																<Icon name="lock" size="small" /><span>Password: </span>
																<Input type='password' placeholder='Password' />
																<Divider />
																<br />
															</Form.Field>
															<Form.Field inline>
																<Input type='submit' />
															</Form.Field>
														</Form>

													</Segment>
												</Grid.Column>
											</Grid>
										</div>
										<Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
									</Header.Content>
								</Header>
							</Segment>
						</Sidebar.Pusher>
					</Sidebar.Pushable>
				</div>
			</div>
		)
	}
}
