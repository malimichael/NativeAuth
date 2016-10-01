import React, { Component } from 'react';
import { Button, CardSection, Card, Input } from './common';

class LoginForm extends Component {
  state = { text: '' }
  render() {
    return (
      <Card>
        <CardSection />

        <CardSection>
          <Input
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </CardSection>

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;