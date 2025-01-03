# use-url-param

A TypeScript React hook to manage URL parameters as state. This utility is designed for simplicity and flexibility, offering an intuitive way to work with query parameters in modern React applications.

## Features
- **State Management in URL**: Automatically sync states with URL parameters.
- **Customizable Defaults**: Define default values for parameters.
- **Easy API**: Update, remove, or clear URL parameters with a simple interface.
- **Type-Safe**: Supports TypeScript for robust type checking.

## Installation

```bash
npm install use-url-param
```

or

```bash
yarn add use-url-param
```

## Usage

```tsx
import useUrlParam from "use-url-param";

function App() {
  const { urlParams, updateUrlParams, removeUrlParam } = useUrlParam({
    defaults: { page: "1" },
  });

  return (
    <div>
      <h1>Manage URL Parameters</h1>

      <p>Current Parameters: {JSON.stringify(urlParams)}</p>

      <button onClick={() => updateUrlParams({ page: "2" })}>Go to Page 2</button>
      <button onClick={() => removeUrlParam("page")}>Remove Page</button>
      <button onClick={() => removeUrlParam()}>Clear All</button>
    </div>
  );
}
```

## API

#### Parameters
- `config` *(optional)*:
  - `defaults`: An object specifying default values for parameters.

#### Returns
- `urlParams`: An object of current URL parameters.
- `updateUrlParams(newParams)`: Updates URL parameters with the specified key-value pairs.
- `removeUrlParam(key)`: Removes a specific parameter if `key` is provided. Clears all parameters if `key` is omitted.

## Development

### Setting up the project

1. Clone the repository:
   ```bash
   git clone https://github.com/DevOsamaIslam/use-url-param.git
   ```

2. Navigate to the project folder:
   ```bash
   cd use-url-param
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the demo

Start the development server to try out the demo:
```bash
cd demo

npm start
```

## License

This project is licensed under the [MIT License](LICENSE).

---

Developed with ❤️ by [DevOsamaIslam](https://github.com/DevOsamaIslam).
