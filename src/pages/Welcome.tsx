import React, { SyntheticEvent, useRef } from 'react';
import { observer } from 'mobx-react-lite';

import {
  AlignItems,
  BorderRadius,
  Button,
  Color,
  Column,
  Display,
  FlexDirection,
  Input,
  JustifyContent,
  Label,
  Layout,
  Row,
  Text,
  Form,
  Hint,
  FormGroup,
  theme,
  useInjection,
} from 'src/components';
import { textType } from 'src/components/text';
import { TYPES } from 'src/models';
import { User } from 'src/models/user';

export const Welcome = observer(() => {
  const formRef = useRef<HTMLFormElement>(null);
  const userModel = useInjection<User>(TYPES.User);

  // TODO Input proxy
  const onUserNameChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    userModel.setUserName(target.value);
  };

  const onEmailChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    userModel.setEmail(target.value);
  };

  const handleCreateAccount = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Row height="3rem" alignItems={AlignItems.Center} justifyContent={JustifyContent.Between}>
        <Text color="white" weigth="bold" size="x-large">
          Logo
        </Text>
        <Layout>
          <Button>Sing in</Button>
          <Button variant="outline">Sing up</Button>
        </Layout>
      </Row>
      <Row padding={{ top: 5 }}>
        <Column cols={6}>
          <Text type={textType.H1} weigth="bold" size="2.5rem" color="white">
            Discover and Connect with Like-Minded People.
          </Text>
          <Text padding={{ top: 2 }} lineHeight={1.3} size={'1.3rem'} color={Color.TextTransparent}>
            Community dedicated to sharing knowledge, building connections, and&#160;growing
            together. Join now to connect with experts and explore new ideas.
          </Text>
        </Column>
        <Column offset={1} cols={5}>
          <Form
            display={Display.Flex}
            flexDirection={FlexDirection.Column}
            padding={{ x: 2, y: 2 }}
            borderRadius={BorderRadius.Medium}
            backgroundColor={Color.White}
            ref={formRef}
          >
            <FormGroup>
              <Label id="username" label="Username" />
              <Input value={userModel.userName} onChange={onUserNameChange} name="username" />
            </FormGroup>
            <FormGroup>
              <Label id="email" label="Email" />
              <Input value={userModel.email} onChange={onEmailChange} name="email" />
            </FormGroup>
            <FormGroup>
              <Label id="password" label="Password" />
              <Input name="password" />
              <Hint>
                Make sure it's at least 15 characters OR at least 8 characters including a number
                and a lowercase letter.
              </Hint>
            </FormGroup>
            <Layout padding={{ top: 0.5 }}>
              <Button onClick={handleCreateAccount} size="lg" variant="primary" fullWidth>
                Create account
              </Button>
            </Layout>
            <Text size={theme.textSecondarySize} color={Color.Secondary} margin={{ top: 1 }}>
              By clicking «Create account», you agree to our{' '}
              <a target="_blank" href="/">
                Terms of Service
              </a>{' '}
              and{' '}
              <a target="_blank" href="/">
                Privacy Statement
              </a>
              . We’ll occasionally send you account related emails.
            </Text>
          </Form>
        </Column>
      </Row>
    </>
  );
});
