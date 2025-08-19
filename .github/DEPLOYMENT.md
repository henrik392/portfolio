# Deployment Setup

This repository uses GitHub Actions to automatically build and deploy to Dokploy when code is pushed to the `main` branch.

## Required GitHub Secrets

To enable automatic deployment, you need to configure the following secrets in your GitHub repository:

### 1. GitHub Container Registry
- Uses `GITHUB_TOKEN` (automatically provided by GitHub Actions)
- No additional credentials needed for GHCR

### 2. Dokploy Webhook
- `DOKPLOY_WEBHOOK_URL` - The Dokploy webhook URL for triggering deployments

## Setting up GitHub Secrets

1. Go to your repository on GitHub
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add the `DOKPLOY_WEBHOOK_URL` secret (GITHUB_TOKEN is provided automatically)

## How it works

1. **Trigger**: Pushes to `main` branch or manual workflow dispatch
2. **Build**: Uses nixpacks configuration to build Docker image
3. **Push**: Pushes image to GitHub Container Registry (GHCR) with appropriate tags
4. **Deploy**: Triggers Dokploy deployment via webhook
5. **Verify**: Checks deployment status

## GitHub Container Registry Setup

1. No additional setup required - GHCR is included with GitHub
2. Images are automatically pushed to `ghcr.io/yourusername/portfolio`
3. Uses repository permissions for access control
4. Free for public repositories, included in GitHub plans for private repos

## Dokploy Configuration

Ensure your Dokploy application is configured to:
- **Build Type**: Set to "Docker" (not "nixpacks")
- **Docker Image**: Point to your GHCR repository (e.g., `ghcr.io/yourusername/portfolio:latest`)
- **Auto Deploy**: Enable auto-deploy feature
- **Webhook URL**: Must match the webhook URL in your GitHub secrets
- **Port**: Set to 3000 (as defined in nixpacks.toml)

### Important Notes:
- The GitHub Action builds the image using **nixpacks** (respecting your `nixpacks.toml` configuration)
- Images are stored in GitHub Container Registry (GHCR) - no Docker Hub account needed
- Dokploy should pull the pre-built image, not build from source
- This approach reduces server load on Dokploy and ensures consistent builds
- The nixpacks build uses your monorepo structure optimized for the web app

### GHCR Authentication for Dokploy:
If your repository is private, Dokploy may need authentication to pull from GHCR. You can:
1. Make the repository public, or
2. Configure Dokploy with a GitHub Personal Access Token with `read:packages` permission

## Manual Deployment

You can manually trigger a deployment by:
1. Going to Actions tab in GitHub
2. Selecting "Build and Deploy to Dokploy" workflow
3. Clicking "Run workflow"

## Troubleshooting

- Check GitHub Actions logs for build errors
- Verify GHCR permissions and package visibility settings
- Ensure Dokploy webhook URL is correct and accessible
- Check Dokploy application settings for proper Docker image configuration
- For private repos: Verify Dokploy has access to pull from GHCR