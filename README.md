<h1 align="center">
  Moata Developer Portal
</h1>

## 🚀 How to add markdown pages

1. **Setup**

   ## Cloning the repo

   1. Navigate to the repository of interest.
   2. Locate the green button named Code and click on it. The GitHub URL will appear.
   3. Copy the GitHub URL.
   4. Open a Git client such as the BASH shell or GitHub Desktop on your local machine.
   5. Use the GitHub URL to clone the remote repo.

2. **Customising and creating Markdown documents**

   ## Adding a new .md file

   1. Navigate to MM-developer-portal-react/content
   2. Here you will select your parent category for your pages, this is the first level of the navigation tree. These are static and cannot be changed.
   3. Within that category you can either add or navigate into another category or create your page. Enter the category folder you want to add your page to or create a folder named after the page you will be making.
   4. Navigate into the folder you have just created or repeat the previous step.
   5. Upload or create a new .md file using 'Add file' button
   6. Name the new post in the format index.md
   7. Add the following YAML frontmatter to the top of the file

   ```
   layout: post
   title: "Example Title"
   last_updated: 2022-07-14 11:23:21 +0100
   description: Lorem ipsum dolor sit amet
   priority: 1
   ```

   5. Below the frontmatter, add content for your post.
   6. If you want to add images to your post, save them in the folder that contains your new index.md file and reference the images in the format
      `![Image Description]({{site.baseurl}}/assets/images/async-py.png "Image Description")`

   ## Modifying the overview page

   1. Both parent categories have an Overview page, the index.md files can be accessed directly from the first layer folder within content. For example: `content/documentation/index.md`

3. **Learn more**

   - [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
