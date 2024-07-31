# Project Name

> useForm - Custom React Hook for Form Management and Validation
> useForm is a lightweight, customizable React hook designed to simplify form handling and validation in your React applications. It provides a straightforward interface to manage form state, handle input changes, and validate fields based on user-defined rules.

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Installation

````bash
npm install react-form-validation-hook-v1
# or
yarn add react-form-validation-hook-v1

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/AteeqShareef11/react-validation-hook.git
$ cd PROJECT
````

## Usage

### Serving the app

```sh
$ npm start
```

.

### useForm

```js
const { values, errors, handleOnChange, validateAllFields, setFormValues } =
  useForm(initialValues, validationRules);
```

Supported options and result fields for the `useBasicFetch` hook are listed below.

Example:

```jsx
const MyComponent: React.FC = () => {
  const initialValues = { name: "", email: "" };

  // Define validation rules
  const validationRules = {
    name: (value) => (value ? "" : "Name is required"),
    email: (value) => (/\S+@\S+\.\S+/.test(value) ? "" : "Email is invalid"),
  };

  // Initialize useForm hook
  const { values, errors, handleOnChange, validateAllFields, setFormValues } =
    useForm(initialValues, validationRules);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateAllFields()) {
      console.log("Form is valid, submitting...");
      // Handle form submission logic here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleOnChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Authors

- **Ateeq Shareef** - _Initial work_
