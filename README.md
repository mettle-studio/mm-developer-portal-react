<h1 align="center">
  Moata Developer Portal
</h1>

## 🚀 How to add markdown pages

1. **Setup**
   ## Cloning the repo
   1. Navigate to the repository of interest (MM-developer-portal-react)
   2. Locate the green button named Code and click on it. The GitHub URL will appear.
   3. Copy the GitHub URL.
   4. Open a Git client such as the BASH shell or GitHub Desktop on your local machine.
   5. Use the GitHub URL to clone the remote repo.
2. **Creating and grouping Markdown documents**
   ## Adding a new .md file
   1. Navigate to MM-developer-portal-react/content
   2. Here you will find 'discover' and 'documentation'. These are the parent categories for your pages and the first level of the navigation tree. These are static and cannot be changed.
   3. Navigate to the relevant parent category and create a new sub-category by adding a new folder. You can create as many levels in the navigation tree as you like by embedding folders within one another.
   4. From your chosen sub-category create a new folder with the name of the markdown page you want to add. Create a markdown file with the name `index.md` within this.
   5. Add the following YAML frontmatter to the top of the file to match your data.
   ```
   title: "Example Title"
   last_updated: 2022-07-14 11:23:21 +0100
   description: Lorem ipsum dolor sit amet
   ```
   6. Below the frontmatter, add content for your post.
   7. If you want to add images to your post, save them in the folder that contains your new index.md file and reference the images in the format
      `![Image Description](./image.png "Image Description")`
   ### Creating groups
   1. Groups define how content is structured on the landing pages and also in the navigation drop-down.
   2. To create a new group navigate to `groups.yaml` which will be located in your chosen parent category.
   3. Create a new group and item within it by adding the following code:
   ```
   - name: Business intelligence
   items:
    - directory: Reporting framework
      description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      image: ./Reporting framework/image.png
   ```
   4. You can create as many groups and items within them as you like.
   5. Notice how the image for 'Reporting framework' (which will be the product card image on the landing page) is located in the folder 'Reporting framework'.
   ### Pre-requisites
   - node and npm
   1. Within a terminal, navigate to the root of this project
   2. run `npm install`
   3. run `npm run develop`
   4. navigate to http://localhost:8000/ in your browser
   ## Pushing the new content
   1. Any content that is comitted to the `main` branch and pushed to github will become live on the github pages site
3. **Learn more**
   - [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
