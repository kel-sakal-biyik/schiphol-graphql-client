# Schiphol Graphql Client

Looks like you have completed api building part! Nice, now we can
consume that api.

Since not every one of you guys are familiar with Angular, I bootstrapped
the application for you. Our aim is to see how Apollo works on client side, not to learn
how an Angular application is built.

Below you can find some information about how you can serve your client side
application.

But first you need to install `angular-cli`. Installing it globally will make your life
easier so:

`npm i -g @angular/cli`

Almost everything is set up for you. Go ahead and look at your `flight-list` component.
It has a template which is populated by a mock in its component. Have your time and 
play around with it.

After you feel comfortable about how things are working you can start your challenge.

Your challenge is to query your API for flights and list them. Remember, our `/flights`
endpoint is accepting `scheduledate` and `scheduletime` variables. Your aim is to
show upcoming flights. Also consider it.

The link below will help you to integrate Apollo:

[Angular Apollo Integration](https://www.apollographql.com/docs/angular/basics/setup.html#gql)

*NOTE: Be sure that your server is running!*

Good luck!

When you are done or stuck just go to the step-1

`git co step-1`

# Angular CLI help
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
