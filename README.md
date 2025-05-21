# Server360 Sites
**Server360 Sites** is a website hosting service offered by Server360 and runs on the Domain360 service, which uses [GitHub](http://github.com/) and [Cloudflare Pages](https://pages.cloudflare.com/). It is free for anyone to use, with oversight by the Server360 team.

## About
Server360 Sites was created in 2025 to fulfull our goal of adding webhosting to our group's list of abilities. We tried different ways of making this dream a reality back in 2020, including private hosting, which didn't fit our objectives. We took a break and eventually learned about Cloudflare Pages.

Server360 Sites works by letting users create what we call 'minisites', or subdirectories within the server360sites.pages.dev domain. Thus, users do not create subdomains, they create new folders.

All minisites hosted by Server360 will follow this style of URL: server360sites.pages.dev/your-minisite/file.html and server360sites.pages.dev/your-minisite/extra-folder/file.html or any other way you need your minisite to be structured!

## How to use
Server360 Sites is meant to be a fairly simple and free way to host your minisites. However, there are some things you must do before your minisite can get published.

### Creating a minisite
To get your project's page hosted on Server360 Sites, you must do the following:
1. Fork the official [Domain360](https://github.com/server360group/Domain360) GitHub repo.
2. Create a new **folder** in your forked version and add all of the files you need for your minisite.
    - If a folder already exists with the minisite name you want, then you will have to choose a different name. Your pull request won't be accepted if you delete another person's files.
3. Create an **About.txt** file that describes what your minisite is about, an email address we can use to contact you, and how often you plan to update your minisite.
    - The About.txt file should be in the root of your minisite's directory. You can have many subdirectories which don't require an About.txt file, but your main minisite directory does.
4. Upload your minisite's files to the new folder you made in your fork.
5. Submit a pull request for the official Domain360 repo.

**Note:** It can take a few business days (typically one) to get your minisite published. We will email you when your minisite goes live.

If any of the above information is missing, especially the About.txt file, we will not approve your pull request.

### Updating a minisite
If you want to update one of your minisites, then do the following:
1. **Don't** create a new fork, use your existing one with the original minisite directory.
2. Update the files in your **original** fork.
3. Create and submit a new pull request to the official Domain360 repo.
    - You must detail the changes you made in your pull request in order for your minisite to get updated.
4. Wait for your minipage to get updated.

**Note:** If you change one of the directories of your minisite, then the link will be broken and an error page will be shown. So you should keep this in mind when changing directories and how that may affect your minisite's traffic.

If your updating pull request does not contain any information about your changes, then your pull request will not be accepted.

## Help
If you need help with Server360 Sites or have questions, please email our team at server360group@gmail.com or by opening a [new issue](https://github.com/server360group/Domain360/issues/new) on our official GitHub repo.
