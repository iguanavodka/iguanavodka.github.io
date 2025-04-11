# GitHub Pages Setup and Troubleshooting Guide

## Setup Instructions

To properly enable GitHub Pages for this repository, follow these steps:

1. Go to your GitHub repository in a web browser
2. Click on "Settings" in the top navigation bar
3. In the left sidebar, click on "Pages" under "Code and automation"
4. Under "Source", select "GitHub Actions" (recommended) or "Deploy from a branch"
   - If using "Deploy from a branch", select "gh-pages" branch and "/ (root)" folder
5. Click "Save"
6. Wait for the GitHub Actions workflow to complete
7. Your site should be published at `https://[username].github.io/[repository-name]/`

## Troubleshooting GitHub Actions Errors

If you encounter errors during deployment, try these solutions:

### For "Missing download info for actions/upload-artifact@v3" error:

We've created multiple workflow files with different approaches:

1. **Try running the simple workflow manually:**
   - Go to your repository's "Actions" tab
   - Select "Simple GitHub Pages Deploy" from the left sidebar
   - Click "Run workflow" dropdown on the right
   - Select the main branch and click the green "Run workflow" button

2. **If that doesn't work, try creating the gh-pages branch manually:**
   ```bash
   git checkout --orphan gh-pages
   git rm -rf .
   echo "<!DOCTYPE html><html><head><title>GitHub Pages site</title></head><body><h1>Hello World</h1></body></html>" > index.html
   git add index.html
   git commit -m "Initial gh-pages commit"
   git push origin gh-pages
   git checkout main
   ```
