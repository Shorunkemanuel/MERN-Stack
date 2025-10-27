#!/bin/bash

# ======================================
# Push changes to all repos (main, backend, frontend)
# ======================================

# Stop the script if any command fails
set -e

# Use commit message from first argument
commit_message="$1"

if [ -z "$commit_message" ]; then
  echo "❌ Error: Please provide a commit message."
  echo "Usage: bash push-all.sh \"your commit message\""
  exit 1
fi

# --- MAIN REPO ---
echo "📦 Pushing MAIN (MERN-Stack)..."
git add .
git commit -m "$commit_message" || echo "No new changes in main repo."
git push origin main || echo "⚠️ Could not push to main repo."

# --- BACKEND REPO ---
if [ -d "backend" ]; then
  echo "🚀 Pushing BACKEND (foodreview-backend)..."
  cd backend
  git add .
  git commit -m "$commit_message" || echo "No new changes in backend."
  git push origin main || echo "⚠️ Could not push to backend repo."
  cd ..
else
  echo "⚠️ Backend folder not found. Skipping..."
fi

# --- FRONTEND REPO ---
if [ -d "frontend" ]; then
  echo "🎨 Pushing FRONTEND (foodreview-frontend)..."
  cd frontend
  git add .
  git commit -m "$commit_message" || echo "No new changes in frontend."
  git push origin main || echo "⚠️ Could not push to frontend repo."
  cd ..
else
  echo "⚠️ Frontend folder not found. Skipping..."
fi

echo "✅ Done! All repositories updated successfully."
