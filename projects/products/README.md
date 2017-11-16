# Products Management #

That project is a part of `devReactJS` class by [Tulio Faria](https://github.com/tuliofaria)

Author: [Francis Rodrigues](https://github.com/francisrod01)


## Get started ##

1. `json-server` as a json database

```bash
~$ yarn global add json-server
```

2. Copy a `database.json.example` file to `database.json` file.

    This is an example of the content:

```json
{
    "products": [],
    "categories": []
}
```

3. Run `json-server` on console like this:

```bash
~$ json-server --watch database.json --port 3001
```

preview:

![](screens/preview-json-server.png)


## License ##

MIT
