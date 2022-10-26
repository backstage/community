# KubeCon Detroit 2022

## Topics

# Catalog Ingestion Experiences
Starting your software catalog

* Migrating your organization to the catalog - start small
* Scaffolder templates are a great starting point. Add the service specific YAML directly to the new scaffolded project
* Additionally you can at some point ingest data from old solution to further populate the software catalog
* The advantage of having it in new services: Developers will see the value they get from having the new service in the catalog. They tend to then go ahead & add service specific YAMLs to old project to get the same value for those services
* DAZN: we don’t allow projects to not having a descriptive service YAML; similar at Spotify where deployment is only possible through Backstage
* The initial setup where you want to add YAMLs to all projects can be really hard.
* => Advantage of going through the projects & trying to solve ownership is that you will find Orphans & can clean up services & ownership a bit - still a hard task, but could be an interesting reasoning when arguing to higher ups why this work can valuable already

Security & access control



* It’s pretty relaxed internally at Spotify, but we are very much aware that this doesn’t have to be the standard

Processors & Providers



* Who has migrated to Providers? Who is using the new flow?

Naming conflicts in Catalog: 



* Same namespace; 
* When importing entities from GitHub, HP makes sure that the naming is unique by bringing things in like org etc. making it unique - 
* Processors to ensure naming seems a good approach - still conflicts can appear

New Component/Entity Types



* There should be very high friction to add new component types - at Spotify we have more types then on the open source.
* HP has a lot of different types
* Wayfair has a lot of different types, which don’t fit into the current model, because they have different domains - they don’t want to morph the data model, but still represent the different kinds
* DAZN has a TV target type; Another company thought about having cars as kinds; 
* Doordash has Domain > Component > Element model - they are not using the Entity type because “component” could be really confusing to engineers.


## Off-topic: How do maintainers work - let’s do a sync together!



* Is it interesting to have a maintainer sync right now?
* People are interested in seeing how a maintainer sync meeting works
* We are doing a maintainer-sync now! 
* Some automation around PRs: All PRs are assigned to one maintainer - each maintainers have specific domains, which they are focusing on
* In the sync the maintainers go over the issues - discuss them & assign them to one
* PRs with “need discussion” label will be always brought up in syncs
* Discussing: [https://github.com/backstage/backstage/pull/14313](https://github.com/backstage/backstage/pull/14313) - suggestion: maybe warning instead of error
    * Semantic versioning oriented on Ember.js approach could be interesting - warning until major release & then error
* In a maintainer sync if there is no straight up solution they would say “Let’s discuss this further”
* Taking a look at issues - is there an action? Is a maintainer already on it? let’s keep the discussion going & come back again
* Plugins are hard to keep track of as maintainers - relying on the community here as well
* Maintainers also have an eye on what work is going on - so issues could stale because there is parallel work affecting it
* Discussing: [https://github.com/backstage/backstage/issues/4945](https://github.com/backstage/backstage/issues/4945) 
    * Did you think about having multiple Helm Charts?
    * Maybe there is a misunderstanding on how useful Helm Chart can be for Backstage deployment - there is still some config needed even when using a Helm Chart
    * Related: Community comes together to find a general solution rather than having several individual solutions - maybe there could be working group working this
    * Is this core? Maybe there could be a separate community solution
* Maintainers hang out on Discord all day – that’s where the discussions happen & sync during work
* Syncs can take 30 mins to up an hour


## Bootstrapping: Catalog & getting Contributors

Contributors:



* How many adopters have contributors internally? ~ half of the group
* Contributors developing internal plugins in separate repositories tend to run on their own; problem of versioning
    * Releasing & versions is not managed - can lead to conflicts
* In Backstage it self it is possible to have duplicate versions of packages for different plugins - the expected overhead is rather small
    * No efforts to have specific versions for plugins in the marketplace - duplicate versions seems to work fine
* Improvement in the stability of plugins - less breaking changes - related to 1.0
    * Making it less essential to keep everything up to date always
* Spotify: We have CODEOWENRS file to keep track of who owns what; Therefor if you change code that you don’t own, that you would need a review from that team owning that code before you could deploy
* Sidetopic - Deployments & checks: 
    * Tests & keep errors as local as possible - ErrorBoundaries around plugins
    * With keeping the error local we are able to redirect support to the plugin team owning the plugin - keeping the support away from the Backstage owner team
* Sidetopic - Micro-Frontend Architecture
    * Keeping plugins as separate deployments
    * Plugins get injected through NPM modules - separated from platform - hooks to update main Backstage when plugin (module) version updates
    * Give teams more control over plugins - really own the plugin
* Support of deprecated plugins (Ownership)
    * What happens when the plugin owners no longer maintain the plugin?
    * Deprecation can be powerful - keeps away the noise from the platform owners
    * Good point raised: Support flow is not really clear in Backstage
    * Deleting a plugin might not be super easy - how could that be made easier?
    * Doordash: Team owning Backstage internally wants to keep out as much as possible from the plugin development. Let them deploy however
    * The internal Backstage/platform team doesn’t have to do the heavy lifting for all plugin teams - ownership should be really on the plugin teams
* Bootstrapping contribution at Spotify
    * There are 2 types of plugin owners: Those who care a lot about Backstage as a platform & those who don’t
    * We have a set of components allowing them to built a new frontend
    * Difficult: A team, which already has a fully built frontend for their product & has to come into Backstage. They are not too eager to adopt the Backstage frontend components


## Frontend performance

What are the pain points?



* React references - importing plugins into Backstage
* Typing: Imports of typing can lead to double imports in plugins?
    * swc should be solving this
* => CLI SIG (let’s go)
* Frontend pagination for the catalog
    * All the data is loaded directly into the client
    * There is ongoing work here
    * Backend pagination for the catalog by Vincenzo [https://github.com/backstage/backstage/pull/12246](https://github.com/backstage/backstage/pull/12246) 
* Catalog Graph plugin
    * Performance issues - people have multiple issues with this plugin
    * Could there be a GraphQL solution such that you “smarter” query the data avoiding issues?
* Search in catalog
    * HP uses ElasticSearch for searching the catalog; Doordash thinks about using the same
    * HP: Needed smth. that performs better; Used ElasticSearch to index everything in the catalog - based on the search plugin; GraphQL API on top
    * Sidetopic GraphQL:
        * Exploring GraphQL - makes sense to maintainers as the Catalog basically is a Graph
            * **Open for contribution**
        * Frontside: Have a GraphQL; Used with HP; Use directives with the Catalog API 
        * Hard to find a real business value for GraphQL - big investment from the development side & not sure how big the actual impact is or if it’s more a developer focused thing
        * GraphQL is smth. which might be very much relevant when thinking about developer contribution happiness to Backstage


## Contributions to open source

Thanks everyone for contributing!!



* Half of the room contributed to Backstage OS
* Most people are able to contribute to OS during work - small amount isn’t allowed

Contribution experience



* Good first issues: It’s hard to find a good first issue; What is the expected time of work on this? What does it take to fix this issue?
    * Contribution might be only possible one day a week, not constantly
    * Would first issue “guide” help?
    * Issue should be more clear - better descriptions; more guidance; more clear
    * Could the community help generate a good first issue?
        * Taras, Jussi would be interested in creating good first issues
    * Would office hours help? Discord is super helpful async; Maybe do Friday office hours; Could be focused on specific topics
    * If things are not clear we need to improve! Document what didn’t work - update documentation
    * Where do “Good first issues” come from? 
        * Reduce the scope of the issue; Don’t require any specific project knowledge
    * A path to completion for an issue; Give more context; Think about all the things you would require to get started
    * Issue templates: open PR [https://github.com/backstage/backstage/pull/14275](https://github.com/backstage/backstage/pull/14275) 
    * Clearer Contributor Ladder - would also improve finding good first issues
* Hard(core) Contributions
    * Define what is required to contribute - would it help?
        * not only code: Doc; Design; UX ..
        * What are other kinds of contribution?
    * Improving the docs would be really valuable 
        * Possible relates to good first issues
        * Discovery!!
        * Restructuring attempts to docs
    * There are parts which are harder to contribute to
        * Design & UI - how to contribute here?
* Can OS help your development?
    * Personal GitHub accounts shows involvement 
        * Personal GitHub accounts are not alway allowed by companies - usually work happens with business account
    * Recognition: E.g. Hacktoberfest - virtual sticker
        * Would Contributor badges help?
        * LinkedIn Badge could be good
        * Backstage-SAP-Oracle-Masterclass-Certificates 
* Demo site (https://demo.backstage.io)
    * Not great to show your company - especially particular behavior
    * Used by Frontside for Demos
* Distributed Ownership
    * SIGs is a starting point for this - Ownership through SIGs (e.g. Catalog)
        * Inspired by Kubernetes
    * **We are trying to do this - feel free to reach out **
    * Divide project in smaller pieces such that 20% time would be enough to take Ownership & maintain a part of the project
    * We are missing tooling to achieve this well right now; other example for well distributed ownership tooling: Kubernetes
    * Roadie is happy to jump on to the topic - let’s follow up
