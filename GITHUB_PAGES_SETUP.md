# GitHub Pages Setup Instructions

To properly enable GitHub Pages for this repository, follow these steps:

1. Go to your GitHub repository in a web browser
2. Click on "Settings" in the top navigation bar
3. In the left sidebar, click on "Pages" under "Code and automation"
4. Under "Source", select "GitHub Actions" from the dropdown menu (or "Deploy from a branch" if you prefer)
   - If using "Deploy from a branch", select "gh-pages" branch and "/ (root)" folder
5. Click "Save"
6. Wait for the GitHub Actions workflow to complete
7. Your site should be published at `https://[username].github.io/[repository-name]/`

## Troubleshooting Common Deployment Errors

If you encounter error code 128 during deployment, try these solutions:

1. **Verify Repository Permissions:**
   - Ensure you have write access to the repository
   - Check that GitHub Actions have proper permissions in repository settings

2. **Check Branch Protection Rules:**
   - If you have branch protection rules, make sure GitHub Actions can bypass them
   - Go to Settings > Branches > Branch protection rules

3. **Ensure GITHUB_TOKEN has correct permissions:**
   - The workflow file has been updated to include necessary permissions
   - If you created custom tokens, verify they have the "repo" scope

4. **Try Manual Deployment:**
   - You can try creating the gh-pages branch manually:
   ```bash
   git checkout --orphan gh-pages
   git rm -rf .
   echo "Hello World" > index.html
   git add index.html
   git commit -m "Initial gh-pages commit"
   git push origin gh-pages
   ```
   - Then switch back to main: `git checkout main`

5. **Reset GitHub Pages Configuration:**
   - Go to repository Settings > Pages
   - Change source to "None" and save
   - Change it back to "gh-pages" branch or "GitHub Actions" and save again