import Form from "react-bootstrap/Form";

const LoginPage = () => {
  return (
    <div className="w-[80%] max-[460px]:w-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md p-12">
      <h1 className="text-4xl mb-6 max-[460px]:text-2xl">Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <button
          className="py-3 px-4 bg-gray-800 hover:-translate-y-2 transition-transform duration-200 text-white rounded-lg max-sm:w-full"
          type="submit"
        >
          Login
        </button>
      </Form>
    </div>
  );
};

export default LoginPage;
