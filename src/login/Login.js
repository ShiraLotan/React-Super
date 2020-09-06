import React from 'react';
import { useForm } from "react-hook-form";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Login() {

    const { register, handleSubmit, watch, errors, setError } = useForm();
    const onSubmit = data => console.log(data);

  return (
    <Container fluid>
        <Row>
            <Col  md={{ span: 4, offset: 4 }}>
                <div className="Login">
                    <h1>Login</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" ref={register({ required: true , pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  })}/>
                            <Form.Text className="text-muted">
                            {errors.email?.type === "required" && "Your email is required"}
                            {errors.email?.type === "pattern" && "Please enter a valid email"}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" name="username" placeholder="Username" ref={register({ required: true, minLength: 6 })}/>
                            <Form.Text className="text-muted">
                            {errors.username?.type === "required" && "Your username is required"}
                            {errors.username?.type === "minLength" && "Username min length is 6"}  
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" ref={register({ required: true, minLength: 6 })}/>
                            <Form.Text>
                            {errors.password?.type === "required" && "Your password is required"}
                            {errors.password?.type === "minLength" && "Password min length is 6"} 
                            </Form.Text>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                </Form>
                </div>
        </Col>
        </Row>
    </Container>
  );
}

export default Login;
