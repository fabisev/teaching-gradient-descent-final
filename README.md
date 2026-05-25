# Teaching ML Fundamentals: Gradient Descent

This repository contains the MyST/Jupyter Book version of an open interactive textbook on gradient descent. The book content is aligned with the research-project plan and is organized around two main instructional conditions:

- a classic textbook-style explanation
- a multiple-modalities explanation

Both parts teach the same beginner-level gradient descent ideas through different presentation styles. A separate shared chapter contains the common questions for both conditions.

## Repository structure

- `content/00-overview/00-overview.md`: landing page of the book
- `content/10-classic-textbook/10-classic-textbook.md`: classic textbook-style part
- `content/20-multiple-modalities/20-multiple-modalities.md`: multiple-modalities part
- `content/06-transfer-and-exercises/06-transfer-and-exercises.md`: shared questions for both conditions
- `references.md`: bibliography and source list
- `myst.yml`: MyST project configuration
- `toc.yml`: table of contents

## Current topic and alignment

The current content is tailored to the sub-project topic:

- Topic: Gradient descent
- Part I: classic textbook and formula
- Part II: geometric visualization, physical analogy, worked example, and interactive exploration
- Separate chapter: common questions for both instructional conditions
- Shared learning goal 1: explain why gradient descent is used to improve model parameters
- Shared learning goal 2: define loss, gradient, and learning rate
- Shared learning goal 3: interpret the update rule step by step
- Shared learning goal 4: predict the effect of different learning rates
- Shared learning goal 5: apply gradient descent reasoning to a simple new example

## Local build commands

Typical commands for this MyST workflow:

```bash
npm install -g mystmd
```

```bash
myst build --html --execute
```

```bash
myst build --typst
```

## Publication notes

Before publishing, make sure to complete the TU Delft open interactive textbook process outside the repository:

- confirm the chosen Creative Commons license
- complete the copyright and plagiarism checks
- export and review a PDF version
- contact `educationsupport-lib@tudelft.nl` for support and publication

## GitHub Pages deployment

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the MyST site and deploys `_build/html` to GitHub Pages whenever `main` is updated.

To enable the site on GitHub:

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main` and wait for the `MyST GitHub Pages Deploy` workflow to finish.
