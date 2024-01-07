Image by @ryanschroederCreating and managing custom-scoped components in Dagger/Anvil
In this blog post, I'm going to show you how to create custom-scoped components in Dagger/Anvil, which allows you to scope your dependencies to your domain's lifecycle, rather than a specific lifecycle of Android. If you're already familiar with Anvil, feel free to skip the introduction and continue with part two, where we create our first Dagger component. For setup instructions, please refer to the official GitHub repositories of Anvil and Dagger.
Overview
1 Introduction
2 Setting up the app component
3 Creating the custom user component
4 Managing its lifecycle
5 Wrapping everything up
6 Bonus: Adding a user coroutine scope
1. Introduction
One of the most common dependency injection frameworks used on Android today is Hilt. Opinionated frameworks like Hilt can become a burden with a growing list of business requirements that require objects to be scoped to a domain's lifecycle rather than being scoped to a specific lifecycle of Android. Because Hilt is opinionated about its component hierarchy, it is rather difficult to create new Dagger components and slot them into specific parts of your component hierarchy outside the pre-defined ones. Since Dagger has been an industry standard for so long, most people on your team should already be familiar with it, making it a good candidate if you want to build or manage custom-scoped components when migrating away from Hilt.
If you've used Hilt before, you are familiar with the @InstallIn annotation, which is used to define the component a specific module should be included in. Without this annotation, a component would need to define each module that should be included in it. Without Hilt, your application-scoped component would look similar to this:

Using @InstallIn moves this responsibility back to the owner of the specific module, which is one of the best features when using Hilt, making your module declaration look like this:

This is where Anvil comes into play. To get the best of both worlds, it is a good idea to use Anvil in addition to Dagger, which has its own version of the @InstallIn annotation to propagate each module back to the component which is called @ContributesTo:

2. Setting up the app component
First, we will create an AppScope class that is going to be used as the root component. These Anvil scopes should not be confused with standard Dagger scopes, such as @Singleton or @ActivityScope when using Hilt:

As you may notice, this scope is not an annotation class that you would normally find when using Dagger scopes. When working with Anvil, it is usually recommended to use a scope called @SingleIn. This annotation is already provided by Anvil, so make sure to include the annotation library in your app module's dependencies:

Using the @SingleIn annotation also makes it obvious that any singleton annotated with it is only considered a singleton inside the relevant scope. When using the default @Singleton annotation inside the UserScope, it could imply that a dependency is an application-wide singleton rather than only being a singleton inside a specific scope.

As you can see in the above code snippet, we are telling Dagger that we would like to contribute the Application instance to our AppComponent. By annotating it with @BindsInstance, the application instance will be available for every included module or descendent subcomponents. Since the AppComponent is scoped to the lifecycle of the entire app we can expose it as a property inside the Application class to allow any subcomponents to be created from there:

3. Creating the custom user component
Since we want to create a component that is scoped to the lifecycle of a UserSession object, we will also need to create a UserScope class in addition to our AppScope class:

Since our custom component will be a subcomponent of AppComponent, we annotate it with @MergeSubcomponent and add a subcomponent factory:

In this case, similarly to the AppComponent, we are also telling Dagger that we would like to contribute a UserSession instance to the component. When creating a class that depends on a UserSession object, it can be injected into its constructor like usual and is annotated using the @SingleIn annotation with the desired scope, in this case, the UserScope:

We can safely call userSession everywhere inside user-scoped classes, since every time these classes are instantiated, we already have a valid object, removing any kind of mental overhead for engineers using this class. Having this custom scope in place also allows you to avoid nullability in classes that depend on a UserSession instance.
This is especially useful when you know that these classes are never needed outside this scope, as they will automatically be cleared from memory too. No need to overwrite or delete any data when logging out to avoid leaking data into another user session, which could happen when scoping this class to a too-wide lifecycle, such as AppScope.
4. Managing its lifecycle
When dealing with custom components, it makes sense to bundle the desired functionality inside some form of manager, that will be responsible for recreating this component if necessary. In this example, we have two functions that will be responsible for creating and resetting a user session appropriately. Since this manager outlives the scope it is responsible for managing, it is scoped to the AppScope:

Note: The code snippet above uses a simplified version of the UserSessionManager and does not implement any interface, which is what is used inside the sample repository used for this blog post.
5. Wrapping everything up
To make the UserSessionManager work, we need to inject it into our Application class and call inject() inside of onCreate(), so that we can access the subcomponent factory from inside the manager:

Our manager can now be injected into other classes such as an Activity to create or reset a session, e.g. when a user is logging in or logging out, causing a partial recreation of our component graph based on the lifecycle of our user session.
6. Bonus: Adding a user coroutine scope
Another common problem is launching or canceling any user scope-related coroutines once a session concludes and our user component is destroyed. Usually, you would add an @Provides method inside a module to return a coroutine scope, however, since there are likely more coroutine scopes associated with different components at the same time, returning the same type may lead to issues because of multiple bindings. The best way to avoid this is to use a separate class that represents the desired coroutine scope:

Similarly to adding a coroutine scope that is part of the application class, we add a coroutine scope in the UserSessionManager class that is scoped to the UserComponent lifecycle:

To contribute this coroutine scope to the component, we add it as a component factory parameter and add the @BindsInstance annotation:

Finally, we need to update the manager and add the newly created coroutine scope as a parameter when creating the UserComponent:

That's it
Thanks for staying until the end! I hope you enjoyed this little dive into custom components when working with Dagger and learned a thing or two about Anvil! 🎉
Feel free to head over to my X.com account where I tweet regularly and share interesting bits of information I'm coming across on my journey of becoming a better Android developer.
The full source code can be found on my GitHub.
Additional resources:
Dagger + Anvil: Learning to Love Dependency Injection on Android
Refactoring our Dependency Injection using Anvil
Managing state beyond ViewModels and Hilt