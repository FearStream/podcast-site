# Project Starter

## Stack

- Laravel8
- Vue3
- InertiaJs
- TailwindCSS

## First time setup

- Click "Use this template" button
- `composer install`
- `npm install`
- `npm run dev`
- `cp .env.example .env`
- `php artisan key:generate`
- Database connection is required to do migrations. Depends on server option chosen (see information below)
- Edit .env file with correct database information
- `php artisan migrate`

### NPM Versioning

- In the `package.json` specifically define the latest version of npm. This will prevent contributors from compiling
or installing packages in a different version of node.

```(json)
"engines": {
    "node": "12.22.5",
    "npm": "6.14.14"
  },
```

- Create a .nvmrc file that contains the version of node. When a user runs the command `nvm use` it will switch the
node version to the version specified in this file. File contents literally just contain `v12.22.5`

## Server Options

- Local: `php artisan serve` or `php artisan serve —port=8000`
- Homestead
- Docker (not supported right now)

### Options

- Temporary connection: create a connection on an existing homestead, docker or local server.
- Use Laravel Homestead
  - Docs: [https://laravel.com/docs/8.x/homestead](https://laravel.com/docs/8.x/homestead)
- Use Laravel Sail.
  - Docs: [https://laravel.com/docs/8.x/sail](https://laravel.com/docs/8.x/sail)
- Use Takeout:
  - Docs: [https://github.com/tighten/takeout](https://github.com/tighten/takeout)

### Homestead installation

- `php vendor/bin/homestead make`. This will create Homestead.yaml file.
- Adjust the Homestead.yaml to your liking. Set paths correctly. It should generate the path that would work based on you project location.
- Make sure you edit `/etc/hosts` that matches IP and Hostname
- Make sure you adjust database settings in `.env` to match Homestead.yaml
- `vagrant up` (Might take a while the first time)

### Resources

- [https://jetstream.laravel.com](https://jetstream.laravel.com)
- [https://inertiajs.com](https://inertiajs.com)
- [https://v3.vuejs.org](https://v3.vuejs.org)
- [https://tailwindcss.com](https://tailwindcss.com)
- [https://laravel.com/docs/8.x](https://laravel.com/docs/8.x)
