# Jhipster ngrx poc
This project ist my first try to add ngrx to a JHipster project.
I try to use the generated service functions. I copied the model and other things from a generated JHipster project. To make things easier, I rebuid the user entity from the (Jsonplaceholder Project)[https://jsonplaceholder.typicode.com] project. I generated a simple jdl file and renamed the user to UserDetail, because user is a reserved word in JHipster. In the Stackblitz project I renamed it back to user. 

## angular-jhipster-ngrx-test

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-jhipster-ngrx-test)

## How I create this project

I generated the jhpster project with:

    cd workdir
    jhipster -d import-jdl jsonplaceholder.jdl
    cd jsonPlaceholderGw/src/main/webapp/app/
    npm install @ngrx/{store,effects,entity,store-devtools,schematics}
    ng generate @ngrx/schematics:feature user/store/user --module user/user.module.ts

I copied the user folder to a **StackBlitz ⚡️** project and edit the rest by hand. I try to use this project for all questions as a playground.
