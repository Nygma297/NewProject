class SidebarTopOverlay extends Component {
	state = { visible: false }

	toggleVisibility = () => this.setState({ visible: !this.state.visible })

	render() {
		const { visible } = this.state
		return (
			<div>
				<Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
				<Sidebar.Pushable as={Segment}>
					<Sidebar as={Menu} animation='overlay' direction='top' visible={visible} inverted>
						<Menu.Item name='home'>
							<Icon name='home' />
							Home
            </Menu.Item>
						<Menu.Item name='gamepad'>
							<Icon name='gamepad' />
							Games
            </Menu.Item>
						<Menu.Item name='camera'>
							<Icon name='camera' />
							Channels
            </Menu.Item>
					</Sidebar>
					<Sidebar.Pusher>
						<Segment basic>
							{/*Insert Code Here*/}
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</div>
		)
	}
}

export default SidebarTopOverlay