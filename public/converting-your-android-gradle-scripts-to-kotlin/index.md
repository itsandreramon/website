Converting your Android Gradle scripts to Kotlin
Using the same language throughout your whole project can further streamline and speed up your development process. With the stable release announcement of the Kotlin DSL for Gradle, things got even more compelling for modern Android development considering Kotlin is now the preferred language for Android. The Kotlin DSL has some clear benefits in contrast to the Groovy DSL, which includes the following:
statically typed & type-safe DSL
first-class functions, extension methods
IDE auto-complete and content assist
navigating to source
refactoring

→ Keep in mind that the code snippets provided in this post are reduced to highlight the important changes in their given context and do not represent complete files.
Let's dive right in! 🤓
Edit: You can also check out this converter: https://github.com/bernaferrari/GradleKotlinConverter
1.) Ensure that you are using the latest Gradle Wrapper version
To enable support for the Kotlin DSL and its newest features, you need to make sure you are using the latest version. In Android projects, it is recommended to use Gradle 5.0 and upwards with the Android Gradle Plugin 3.4.
Navigate to your project's root directory, fire up a terminal and make sure that you are using the latest Gradle wrapper by running the following command:
gradle wrapper --gradle-version X.Y.Z --distribution-type all
→ Replace X.Y.Z with the latest version.
→ This requires a Gradle installation on your machine.
You want to get the all distribution type since it enables your IDE's code-completion and the ability to navigate to the Gradle source code. After running this command, your file should update to reference the latest Gradle distribution.
If you have the wrapper already configured and only want to check the version independently open:
Location of the file: ./gradle/wrapper/gradle-wrapper.properties
Your gradle-wrapper.properties file should look like this:

When prompted, re-sync your project and assemble a debug build to ensure everything is still working:
./gradlew assembleDebug
Tip: I suggest to make a debug build every time you do changes related to the migration since the IDE is not very helpful unless you got a successful sync. You should take a look at the console output to identify errors.
2.) Preparing your existing Groovy DSL
This avoids a fair amount of syntax errors right away when converting to the more strict Kotlin DSL. Since the Groovy DSL and Kotlin DSL share a lot of similarities, we are just adapting our existing scripts and do not rewrite them.
Before you are going to make these changes you should disable Gradle auto-sync if you haven't done yet. Otherwise, Gradle will re-sync every time you change a file.
We are preparing our build scripts by doing the following two things and still have a valid Groovy DSL:
Replace ' with "
Replace whitespaces with either = (assignments) or ( ) (function calls)

The latter is the most interesting here I think. The Groovy DSL is not differentiating between assignments and function invocations by default. I prefer concise syntax over cleaner code every time, so I am happy to enforce these with the Kotlin DSL.
The following files need to be updated:
settings.gradle
build.gradle (Project)
build.gradle (Module)

2.1) Replace ' with "
The most straightforward method at the time of writing is to Replace All said occurrences in the code.
→ Replace All can be done via Cmd + R (macOS) or Ctrl + R (Windows, Linux)
When prompted re-sync your project. Assemble a debug build to ensure everything is still working by running:
./gradlew assembleDebug
2.2) Replace whitespaces with explicit assignments and function calls
The next thing is to check whether a whitespace represents a function call or an assignment. The easiest way would be to trial and error through the file. Your IDE should highlight false assumptions, which indicates that you should use the opposite one.
When you are done, your build.gradle (Module) file, for example, should look like this:

→ This is still Groovy syntax since we haven't renamed the files to .gradle.kts yet.
3.) Renaming .gradle files to .gradle.kts
When renaming the files, you need to adapt to the new Kotlin DSL syntax. The .kts extension signalizes Gradle that this file is using the Kotlin DSL.
3.1) Renaming settings.gradle to settings.gradle.kts
This is the smallest one so I suggest to start with it. When you followed the last step, this should already work out of the box.
Location of the file: ./settings.gradle
Tip: The IDE may tell you that it cannot rename a file. When this happens, just click on Continue and Refactor.
3.2) Renaming build.gradle (Project) to build.gradle.kts
This represents the project-level build config. Here are most probably some global variables like the one covered next.
Location of the file: ./build.gradle
Updating Variables
Variable declarations like this one to share variables between multiple script files are no longer possible. For now, just remove entries like this one:
ext.kotlin_version = "1.3.50"
Don't forget to replace the string templates with the actual values. The variable could be accessed in other files as well so take a look at all your build scripts just to be sure.
Updating Tasks
In this example, the clean task needs to be updated. Since you already renamed the file to .kts, your tasks have no longer valid syntax and need to be changed accordingly:

Tip: Check out some of the samples the Gradle team provided
3.3) Renaming build.gradle (Module) to build.gradle.kts
This represents the module-level build config where you define your app's dependencies for example.
Location of the file: ./app/build.gradle
Updating plugins
You most probably have Gradle plugins declared at the top of this file. For example the kotlin-android plugin. Since DSLs should exhibit minimal redundancy, you should place them inside a plugins block.
By using the Kotlin DSL, the redundant apply plugin call goes away. Another thing worth mentioning here is that the Kotlin DSL can provide us with an extension function named kotlin to omit the kotlin. prefix.

Updating build types
As seen in the next code example, the Kotlin solution is not as straightforward in this case and adds more noise to the code. In the buildTypes block you need to do two changes:
release is a string passed to a function that is called by Groovy → as before, you need to be more concise when using the Kotlin DSL and explicitly declare it as a function call
minifyEnabled is not the actual name of the property → correct name is isMinifyEnabled

Updating implementations
To get things working you need to change the way of implementing some things like the fileTree implementation in this case.
Because we imported the all distribution type before, you can take a look at the source code by navigating to the definition. The fileTree method signature looks like this:
fileTree(Map<String, ?> args)
As you can see, the method accepts a map of arguments. In Kotlin you would express this via pairs, which can be identified by the use of the infix function to.

4.) Managing your dependencies the Kotlin way
When running Gradle, it automatically compiles the source code of your buildSrc folder and adds it to the classpath of your build scripts. This allows you to structure your project dependencies and versions in a very clean way using singleton objects in conjunction with constants and private version definitions.
It is important to manage your versions and dependencies in a single source of truth to avoid unexpected behavior. Additionally, I prefer to keep the versions and the dependency notations in the same object to follow the principle of locality.
Create the buildSrc folder in the root folder of our project. Inside this folder, you need to do two things:
1. Create a build.gradle.kts file with the following content:

2. Create a maven directory structure: src/main/java/your/package/
→ In my case the directory structure would be: src/main/java/com/andreramon/example/
4.1) Defining your dependencies
At the end of your newly created directory structure (this would be the example directory in my case), create two files named Libs.kt and Versions.kt. Inside Libs.kt, define a couple of singletons using the object declaration:

4.2) Defining your versions
If you want, repeat the process for a Versions.kt file. I keep build related versioning in here like the compileSdk, targetSdk and minSdk versions.
4.3) Accessing your dependencies
You can now access these values in a normal object-oriented way and use IDE auto-complete to access them.

Tip: If you encounter an "Unresolved reference" error after this change, please try moving the files into /src/main/java and remove the package definition inside Libs.kt and Versions.kt. Then remove the corresponding imports inside your Gradle scripts and do a sync.
5.) Signing configs
One thing I encountered while migrating one of my projects to the Kotlin DSL and did not know how to fix at first glance was the signing config in the build.gradle.kts (Module) file.
Typically you don't need to create the debug signing config since it is already defined. Looking at the release signing config, it is another story. Groovy, it seems, creates the release signing config implicitly, whereas you need to call create explicitly when using Kotlin. I would like to receive some information about this so feel free to comment below.

Tip: If you want to learn more about signing configs, I encourage you to read this article by Faruk Cankaya.
6.) Done!
Ensure that everything works as expected by running:
./gradlew assembleDebug
Your build scripts should now have the same syntax highlighting as your normal Kotlin code.
Thank you for reading! Feel free to ask questions and give me some feedback on what should be improved or corrected.
If you want to learn more about Kotlin development I highly recommend this book that is written by two authors of Kotlin: https://amzn.to/2CUwCVV
Sources:
Kotlin meets Gradle
Gradle Kotlin DSL Primer
Using Gradle - Kotlin Programming Language
Migrating Android build scripts from Groovy to Kotlin DSL
Kotlin DSL to write Gradle scripts on Android: Step by step walkthrough

André Ramon is currently studying Computer Science in Germany and builds native Android applications using Kotlin. → www.andreramon.com