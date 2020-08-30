# AngularAppGsn

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Detail steps to work in AWS Cloud9 and deploy to S3.

Install the Angular CLI
Once in the AWS Management Console, enter "Cloud9" in the search box provided and click on Cloud9.

Click Open IDE.

Use the bash terminal to verify that node is installed.

node --version
Verify that npm is installed.

npm --version
Install the Angular CLI. When prompted about sharing privacy data, enter N.

npm install -g @angular/cli
Verify the installation.

ng --version
Create a New Angular Application
Create the Angular application.

ng new angular-app-acg
When prompted about routing, say Yes.

When prompted about which stylesheet, select CSS.

Navigate into the Angular project.

cd angular-app-acg
Build the application.

ng serve --port $PORT --host $IP --disable-host-check
In the top menu bar, select Preview and then Preview Running Application. Verify that the application is running.

Create an Angular Component
In the left-hand pane, expand src -> app.

Open the app.component.html file.

Delete everything in the file except for the final line which should match the following:

<router-outlet></router-outlet>
Save the file.

Navigate to the browser containing the preview of the app and refresh it. Verify that the previous content has been removed.

In the terminal window, stop the process by hitting Ctrl-C.

Generate a new component.

ng generate component first
In the left-hand pane, expand first.

Open the first.component.ts file and note the error.

Open a new browser window and navigate to this address.

Copy all of the code in that file to the clipboard.

Back in the Cloud9 console, open tsconfig.json by clicking on it in the left-hand pane.

Select everything in the file and delete it.

Paste the code copied from the link above into the file.

Save the changes.

Select the first.component.ts tab at the top to display the file. Note that the error is still present.

Close the Cloud9 browser tab.

Back in the AWS console, click Open IDE.

Open the app.component.html file.

Add the following to the bottom of the file on its own line.

<app-first></app-first>
Save the file.

In the terminal pane, rerun the application.

ng serve --port $PORT --host $IP --disable-host-check
Navigate to the pane displaying a preview of the app and refresh the view. Verify the presence of the added element.

Stop the server by hitting Ctrl-C in the terminal pane.

In the terminal pane, create a second component.

ng generate component second
Create a third component.

ng generate component third
Add Component Routing
Create a navigation component.

ng g c navigation
In the app.component.html file, remove the app-first line and change it to the following:

<app-navigation></app-navigtation>
Save the changes to the file.

In the terminal pane, rerun the application.

ng serve --port $PORT --host $IP --disable-host-check
In the left-hand pane, expand navigation and select navigation.component.html.

Remove all the content in the file.

Paste the following content into the file:

<ul>
    <li (click)="navigate('first')">First Component</li>
    <li (click)="navigate('second')">Second Component</li>
    <li (click)="navigate('third')">Third Component</li>
</ul>
Save the changes to the file.

In the left-hand pane, open the file navigation.component.ts.

Update the constructor line.

constructor(private router: Router) {}
Hover over Router and select the option to import Router from a module.

Add the following to the bottom of the file, just inside the last curly bracket.

public navigate(page: string) {
    this.router.navigate([page]);
}
Save the changes to the file.

In the left-hand pane, open app-routing.module.ts.

Replace the const routes line with the following code.

const routes: Routes = [
    { path: '', component: FirstComponent },
    { path: 'first', component: FirstComponent },
    { path: 'second', component: SecondComponent },
    { path: 'third', component: ThirdComponent },
    { path: '**', redirectTo: ''}
]
Hover over FirstComponent and select the option to import FirstComponent.

Do the step above for SecondComponent and ThirdComponent.

Save the changes.

Use the left-hand pane to open app.component.html.

Swap the order of the two lines. The final file should look like this.

<app-navigation></app-navigation>
<router-outlet></router-outlet>
Save the changes to the file.

Navigate to the pane displaying a preview of the app and refresh the view. Verify the navigation works.

Deploy an Angular Application
Navigate back to the AWS Console tab.

At the top of the window, click Services.

Enter "S3" into the search window and open S3 in a new tab.

Click the name of the provided bucket.

Click the Properties tab.

Click the box for Static website hosting.

Click the Overview tab.

Select the name of the bucket and copy it to the clipboard. This will be referred to as YOUR_BUCKET_NAME for the rest of this lab.

Navigate back to the Cloud9 environment.

In the terminal pane, stop the application by hitting Ctrl-C.

Install a necessary library.

ng add @jefiozie/ngx-aws-deploy
When prompted for a region, select us-east-1.

When prompted for the bucket name, paste in YOUR_BUCKET_NAME.

When prompted, paste in the secret access key and access key id. These can be found on the lab home page.

Click Enter when prompted for which folder to use for uploads.

Deploy the application.

ng deploy
Once it is finished uploading, navigate back to the tab displaying the S3 bucket in the AWS Console.

Click the refresh icon.

Verify the presence of the files.

Click the Properties tab.

Click the box for Static website hosting.

Open the Endpoint link in a new tab and verify the application.

